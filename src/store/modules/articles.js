import fb from '../../firebaseConfig';
import Vue from 'vue'

/*
Mock state

the 'key' for any section will be in camel case, when dispalay stringToKey
should convert it. I.e. courseReview --> Course Review for display

state: {
    sections: {
        opinion: {
            articles: {
                cyP8VFMRUnniAEM0FCrr: {
                    title: 'The article title',
                    author: 'The author of the article',
                    bodyText: 'The primary text of the article',
                    image: 'An src/url to the image'
                }
                UwYDYgNdh0nbTq6uGlLv: {
                    title: 'The article title',
                    author: 'The author of the article',
                    bodyText: 'The primary text of the article',
                    image: 'An src/url to the image'
                }
            }
        }
    }
}
*/

export default {
    namespaced: true,
    state: {
        sections: {}
    },
    getters: {
        getAmountOfArticlesInSection: (state) => (section) => {
            const articlesPath = state.sections[section].articles;
            return Object.keys(articlesPath).length;
        },
        getArticle: (state) => (params) => {

            /*
            {
                sectionId,
                articleId
            }
            */

            if (state.sections[params.sectionId]) {
                if (state.sections[params.sectionId].articles[params.articleId]) {
                    return state.sections[params.sectionId].articles[params.articleId];
                }
            }
        }
    },
    mutations: {
        addArticle(state, doc) {
            // add the article to the state, with its firestore ID as its key
            const sectionId = doc.ref.parent.parent.id;
            const articleId = doc.id;

            const sectionTemplate = {
                articles: {}
            }

            // add all the articles first
            if (state.sections[sectionId]) {
                sectionTemplate.articles = state.sections[sectionId].articles;
            }

            // add this article
            sectionTemplate.articles[articleId] = doc.data();

            Vue.set(state.sections, sectionId, sectionTemplate);
        }
    },
    actions: {
        async fetchArticlesFromDBSection({
            commit
        }, params) {
            /*
                (example)
                params: {
                    sectionId: 'opinion',
                    limit: 3
                }
            */

            // get the section
            const sectionRef = fb.sections.doc(params.sectionId).collection('articles');
            const sectionSnapshot = await sectionRef.limit(params.limit).get();

            // commit each article to the store
            sectionSnapshot.forEach((doc) => {
                commit('addArticle', doc);
            })

            // return the promise for error handeling
            return sectionSnapshot;

        },
        async fetchAllArticlesFromDB({
            commit
        }) {
            // create a compound query to get every article collection
            const allArticlesRef = fb.db.collectionGroup('articles');
            const allArticlesSnapshot = await allArticlesRef.get();

            // commit each article to the store
            allArticlesSnapshot.forEach((doc) => {
                commit('addArticle', doc);
            })

        },
        async fetchSingleArticleFromDB({
            commit
        }, id) {
            // create a compound query for doc id
            const allArticlesRef = fb.db.collectionGroup('articles');
            const allArticlesSnapshot = await allArticlesRef.get();

            // if the ID matches the requested one, commit it to the store
            allArticlesSnapshot.forEach((doc) => {
                if (doc.id === id) {
                    commit('addArticle', doc);
                } else {
                    console.warn(`The requested article: "${id}" could not be found`) //eslint-disable-line
                }
            })
            return allArticlesSnapshot; // return the promise for error handeling
        },
        // setter for ADMIN panel
        async setNewArticle(context, articleInfo) {
            /*
                Parameters
                article = {
                    title,
                    author,
                    bodyText,
                    image,
                    avatarImage,
                    sectionId --> to be seperated out
                }
            */

            // seperate out the sectionId from the actual article
            const {
                sectionId,
                ...article
            } = articleInfo;

            // get the reference to the section
            const sectionRef = fb.sections.doc(sectionId);
            const sectionSnapshot = await sectionRef.get();

            // if the section is already in the db write to it
            if (sectionSnapshot.exists) {
                await sectionRef.collection('articles').doc().set(article);

                // create the section if it does not exist, then add the article
            } else {
                await fb.sections.doc(sectionId).set({});
                await sectionRef.collection('articles').doc().set(article);
            }
        },
        async deleteArticleWithId(context, id) {
            // create a compound query to get every article collection
            const allArticlesRef = fb.db.collectionGroup('articles');
            const allArticlesSnapshot = await allArticlesRef.get();

            // delete the article when its found
            allArticlesSnapshot.forEach(async (doc) => {
                if (doc.id === id) {
                    await doc.ref.delete();
                }
            })
        }
    }
}
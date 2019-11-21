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
            sectionTemplate.articles[articleId] = doc.data();

            Vue.set(state.sections, sectionId, sectionTemplate)
        },
        deleteArticle(state, path) {
            state.sections[path.section].articles.splice(path.number, 1);
        }
    },
    actions: {
        async fetchArticlesFromDBSection({commit}, params) {
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

        },
        async fetchAllArticlesFromDB({commit}, limit) {
            // create a compound query to get every article collection
            const allArticlesRef = fb.db.collectionGroup('articles');
            const allArticlesSnapshot = await allArticlesRef.get();
            
            // commit each article to the store
            allArticlesSnapshot.forEach((doc) => {
                commit('addArticle', doc);
            })

        },
        async fetchSingleArticleFromDB({commit}, id) {
            // create a compound query for doc id
            const allArticlesRef = fb.db.collectionGroup('articles');
            const allArticlesSnapshot = await allArticlesRef.get();
            
            // if the ID matches the requested one, commit it to the store
            allArticlesSnapshot.forEach((doc) => {
                if (doc.id === id) {
                    commit('addArticle', doc);
                } else {
                    console.warn(`The requested article: "${id}" could not be found`)
                }
            })
        }
    }
}
import fb from '../../firebaseConfig';
import convertToKey from '../../util/stringToKey';
import Vue from 'vue' 

export default {
    namespaced: true,
    state: {
        sections: {}
    },
    getters: {
       getAmountOfArticlesInSection: (state) => (sectionKey) => {
           return state.sections[sectionKey].length;
       }
    },
    mutations: {
        addArticle(state, articleInfo) {

            // convertToKey is a function from stringToKey. It converts:
            // 'Object Key' --> 'objectKey'
            const sectionKey = convertToKey(articleInfo.sectionName);
            const sectionPath = state.sections[sectionKey];

            // if the section does not exist add it and the article
            if (!sectionPath) {
                let newSection = {
                    name: articleInfo.sectionName,
                    articles: []
                }
                articleInfo.full.id = articleInfo.id;
                newSection.articles.push(articleInfo.full);
                Vue.set(state.sections, sectionKey, newSection);
            } else {
                // check for dupe 
                let isDupe = sectionPath.articles.some(article => article.id === articleInfo.id);
                // Add the article and attach its ID
                if (!isDupe) {
                    articleInfo.full.id = articleInfo.id;
                    state.sections[sectionKey].articles.push(articleInfo.full);
                } 
            }
        },
        deleteArticle(state, path) {
            state.sections[path.section].articles.splice(path.number, 1);
        }
    },
    actions: {
        async fetchArticlesFromDBSection({commit}, params) {

            const sectionSnapshot = await fb.sections.
            where('name', '==', params.section)
                .get();

            sectionSnapshot.forEach(async (doc) => {
                const sectionName = doc.data().name;

                const articleSnapshot = await doc.ref.collection('articles')
                    .limit(params.limit)
                    .get();

                articleSnapshot.forEach((doc) => {
                    commit('addArticle', {
                        sectionName,
                        full: doc.data(),
                        id: doc.id
                    })
                })
            })
        },
        async fetchAllArticlesFromDB({commit}, limit) {
            const sectionSnapshot = await fb.sections.get();

            sectionSnapshot.forEach(async (doc) => {

                const sectionName = doc.data().name;

                const articlesSnapshot = await doc.ref.collection('articles')
                    .limit(limit)
                    .get();

                articlesSnapshot.forEach((doc) => {
                    commit('addArticle', {
                        sectionName,
                        full: doc.data(),
                        id: doc.id
                    })
                })
            })
        }
    }
}
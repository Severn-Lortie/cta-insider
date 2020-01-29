<template>
<app-article 
v-if="article"
:article="article"
></app-article>
</template>

<script>
import AppArticle from '../components/article/AppArticle'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default {
    props: {
        sectionId: String,
        articleId: String
    },
    methods: {
        ...mapActions('articles', [
            'fetchSingleArticleFromDB'
        ])
    },
    computed: {
        ...mapGetters('articles', [
            'getArticle'
        ]),
        article() {
            return this.getArticle({
                sectionId: this.sectionId,
                articleId: this.articleId
            })
        }
    },
    components: {
        AppArticle
    },
    created() {
        // Get the article if it is not already loaded into the state
        if (!this.article) {
            this.fetchSingleArticleFromDB(this.articleId);
        }
    }
}
</script>

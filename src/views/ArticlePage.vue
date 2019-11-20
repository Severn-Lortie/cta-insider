<template>
<app-article 
:sectionId="sectionId"
:articleId="articleId"
></app-article>
</template>

<script>
import AppArticle from '../components/article/AppArticle'
import {mapState} from 'vuex'
import {mapActions} from 'vuex'

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
        ...mapState('articles', {
            sections: state => state.sections
        })
    },
    components: {
        AppArticle
    },
    created() {
        if (!this.sections[this.sectionId]) {
            this.fetchSingleArticleFromDB(this.articleId);
        }
    }
}
</script>

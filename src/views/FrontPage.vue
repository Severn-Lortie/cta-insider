<template>
<div>
    <featured-article></featured-article>
    <article-section></article-section>
</div>
</template>

<script>
import FeaturedArticle from '../components/featured-article/FeaturedArticle';
import ArticleSection from '../components/article-section/ArticleSection'

import {mapActions} from 'vuex';
import {mapState} from 'vuex'

export default {
    components: {
        FeaturedArticle,
        ArticleSection,
    },
    computed: {
        ...mapState('articles', {
            sections: state => state.sections
        })
    },
    methods: {
        ...mapActions('articles', [
            'fetchArticlesFromDBSection',
            'fetchAllArticlesFromDB'
        ])
    },
    created() {
        if (Object.keys(this.sections).length < 3) {
            this.fetchAllArticlesFromDB();
        }
    }
}
</script>

<style scoped>

</style>

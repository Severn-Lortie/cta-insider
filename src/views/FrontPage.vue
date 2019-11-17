<template>
<div>
    <featured-article></featured-article>
    <article-section></article-section>
</div>
</template>

<script>
import FeaturedArticle from '../components/featured-article/FeaturedArticle';
import ArticleSection from '../components/article-section/ArticleSection'
import {
    mapActions
} from 'vuex';

export default {
    components: {
        FeaturedArticle,
        ArticleSection
    },
    methods: {
        ...mapActions('articles', [
            'fetchArticlesFromDBSection',
            'fetchAllArticlesFromDB'
        ])
    },
    created() {
        // Fetch articles from the database with the limit of 3
        this.fetchAllArticlesFromDB(3);
    }
}
</script>

<style scoped>

</style>

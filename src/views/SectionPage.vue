<template>
<article-list :sectionId="id" v-on:fetch-next-articles="fetchNextArticles()"></article-list>
</template>

<script>
import ArticleList from '../components/article-list/ArticleList'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
import {mapState} from 'vuex'

export default {
    components: {
        ArticleList
    },
    computed: {
        ...mapGetters('articles', [
            'getAmountOfArticlesInSection'
        ]),
        ...mapState('articles', {
            sections: state => state.sections
        })
    },
    methods: {
        ...mapActions('articles', [
            'fetchArticlesFromDBSection',
        ]),
        fetchNextArticles() {
            this.fetchArticlesFromDBSection({
                sectionId: this.id,
                limit: 5
            });
        }
    },
    props: {
        id: String
    },
    created() {
        const params = {
            sectionId: this.id,
            limit: 3
        }
        if (!this.sections[this.id]) {
            this.fetchArticlesFromDBSection(params);
        } else if (this.getAmountOfArticlesInSection(this.id) < 3) {
             this.fetchArticlesFromDBSection(params);
        } else {
            console.warn(`Section ${this.id} is not valid`);
        }
    }
}
</script>

<style>

</style>

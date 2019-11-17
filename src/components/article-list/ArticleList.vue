<template>
    <base-article-list
    :sectionObj="section"
    >
        <base-article-list-load-button
        v-on:load-more="fetchNextArticles()"
        ></base-article-list-load-button>
    </base-article-list>
</template>

<script>
import {mapState} from 'vuex'
import {mapActions} from 'vuex'
import BaseArticleList from './BaseArticleList'
import BaseArticleListLoadButton from './BaseArticleListLoadButton';

export default {
    components: {
        BaseArticleList,
        BaseArticleListLoadButton
    },
    props: {
        sectionPath: String
    },
    methods: {
        ...mapActions('articles', [
            'fetchArticlesFromDBSection'
        ]),
        fetchNextArticles() {
            this.fetchArticlesFromDBSection({
                section: this.section.name,
                limit: 3
            })
        }
    },
    computed: {
        ...mapState('articles', {
            sections: state => state.sections
        }),
        section() {
           return {
               section: this.sections[this.sectionPath],
               key: this.sectionPath
            };
        }
    }
}
</script>

<style>

</style>

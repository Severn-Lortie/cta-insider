<template>
<base-article-list
    :section="section"
    :sectionId="sectionId"
>
    <base-article-list-load-button v-on:load-more="fetchNextArticles()"></base-article-list-load-button>
</base-article-list>
</template>

<script>
import {mapState} from 'vuex'
import stringToKey from '../../util/stringToKey'
import BaseArticleList from './BaseArticleList'
import BaseArticleListLoadButton from './BaseArticleListLoadButton';

export default {
    components: {
        BaseArticleList,
        BaseArticleListLoadButton
    },
    props: {
        sectionId: String
    },
    methods: {
        fetchNextArticles() {
            this.$emit('fetch-next-articles')
        }
    },
    computed: {
        ...mapState('articles', {
            sections: state => state.sections
        }),
        section() {
            return this.sections[this.sectionId];
        }
    }
}
</script>

<style>

</style>

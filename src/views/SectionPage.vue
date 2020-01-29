<template>
<article-list 
v-if="sections[id]"
:sectionId="id" 
v-on:fetch-next-articles="fetchNextArticles()"
>
</article-list>
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
    props: {
        id: String
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
    created() {

        const params = {
            sectionId: this.id,
            limit: 3
        }

        // fetch articles if the section is not yet initialized in the store
        if (!this.sections[this.id]) {
            this.fetchArticlesFromDBSection(params);
        } else if (this.getAmountOfArticlesInSection(this.id) < params.limit) {
             this.fetchArticlesFromDBSection(params);
        } 
    }
}
</script>

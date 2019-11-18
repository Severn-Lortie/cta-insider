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
import {mapGetters} from 'vuex'
import stringToKey from '../../util/stringToKey'
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
            'fetchArticlesFromDBSection',
        ]),
        fetchNextArticles() {
            this.fetchArticlesFromDBSection({
                section: this.section.section.name,
                limit: 3
            })
        }
    },
    computed: {
        ...mapState('articles', {
            sections: state => state.sections
        }),
        ...mapGetters('articles', [
            'getAmountOfArticlesInSection'
        ]),
        section() {
           return {
               section: this.sections[this.sectionPath],
               key: this.sectionPath
            };
        }
    },
    created() {
        if (this.section.section) {
            if (this.getAmountOfArticlesInSection(this.section.key) < 3) {
                this.fetchArticlesFromDBSection({
                    section: this.section.section.name,
                    limit: 3
                });
            }
        } else {
            const sectionName = stringToKey.convertToName(this.sectionPath);
            this.fetchArticlesFromDBSection({
                section: sectionName,
                limit: 3
            });
        }
        
    }
}
</script>

<style>

</style>

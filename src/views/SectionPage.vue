<template>
  <article-list
  :sectionPath="sectionPath"
  ></article-list>
</template>

<script>
import ArticleList from '../components/article-list/ArticleList'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
    components: {
      ArticleList
    },
    methods: {
      ...mapGetters('articles', [
        'getAmountOfArticlesInSection'
      ]),
      ...mapActions('articles', [
        'fetchArticlesFromDBSection'
      ])
    },
    props: {
        sectionPath: String
    }, 
    created() {
      if (this.getAmountOfArticlesInSection(this.sectionPath) < 3) {
        this.fetchArticlesFromDBSection(this.sectionPath)
      }
    }

}
</script>

<style>

</style>
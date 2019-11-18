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
    computed: {
      ...mapGetters('articles', [
        'getAmountOfArticlesInSection'
      ])
    },
    methods: {
      ...mapActions('articles', [
        'fetchArticlesFromDBSection',
        'fetchAllArticlesFromDB'
      ])
    },
    props: {
        sectionPath: String
    }
}
</script>

<style>

</style>
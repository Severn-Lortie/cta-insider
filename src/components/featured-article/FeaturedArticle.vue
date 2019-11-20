<template>
  <base-featured-article
  :articles="articles"
  ></base-featured-article>
</template>

<script>
import BaseFeaturedArticle from './BaseFeaturedArticle'
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState('articles', {
            sections: state => state.sections
        }),
        articles() {
            // gather all the new stories (< 3) into an object
            let allNewArticles = {};
            for (let sectionKey in this.sections) {
                let currentSection = this.sections[sectionKey];
                for (let articleKey in currentSection.articles) {
                    let currentArticle = currentSection.articles[articleKey];
                    allNewArticles[articleKey] = currentArticle;
                }
            }
            return allNewArticles;
        }
    },
    components: {
        BaseFeaturedArticle
    }
}
</script>

<style>

</style>
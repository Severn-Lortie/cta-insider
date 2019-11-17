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
            let array = [];
            for (let key in this.sections) {
                let section = this.sections[key];
                section.articles.forEach((article)=>{
                    array.push(article);
                });
            }
            return array;
        }
    },
    components: {
        BaseFeaturedArticle
    }
}
</script>

<style>

</style>
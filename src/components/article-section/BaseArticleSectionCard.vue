<template>
<v-card :elevation="elevation">
    <v-list-item>
        <v-list-item-avatar color="grey">
            <v-img :src="article.avatarImage">

            </v-img>
        </v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title 
            class="headline text-capitalize"
            :class="{'text-wrap': article.featured}"
            >
              {{article.title}}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{article.author}}
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>

    <v-img
        :src="article.image"
        height="194"
    ></v-img>

    <v-card-text>
        <vue-markdown class="fix-text">{{article.bodyText.substring(0, 100).trimRight()}}...</vue-markdown>
    </v-card-text>

    <v-card-actions>
        <v-btn
            text
            color="purple darken-2"
            :to="`/article/${sectionId}/${articleId}`"
        >
            Read
        </v-btn>
    </v-card-actions>
</v-card>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {

    props: {
        article: Object,
        articleId: String,
        sectionId: String
    },
    computed: {
        elevation() {
            return this.article.featured ? 16 : 4;
        }
    },
    components: {
        VueMarkdown
    }
}
</script>

<style>
/* remove default paddings for certain elements */
.v-application p {
    margin-bottom: 0px !important;
}
</style>
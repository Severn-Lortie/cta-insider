<template>
<v-card :elevation="elevation">
    <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title 
            class="headline text-capitalize"
            :class="{'text-wrap': prominent}"
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

    <v-card-text class="text-truncate">
        {{article.bodyText}}
    </v-card-text>

    <v-card-actions>
        <v-btn
            text
            color="purple darken-2"
            :to="`/article/${section}/${articleNumberInSection}`"
        >
            Read
        </v-btn>
    </v-card-actions>
</v-card>
</template>

<script>
export default {

    props: {
        article: Object,
        section: String,
        articleNumberInSection: Number
    },
    computed: {
        elevation() {
            if (this.articleNumberInSection == 1) {
                return 16;
            }
            return 4;
        },
        prominent() {
          if (this.articleNumberInSection == 1) {
            return true;
          }
          return false;
        }
    }
}
</script>

<style scoped>
</style>

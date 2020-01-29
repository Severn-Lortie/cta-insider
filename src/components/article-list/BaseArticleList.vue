<template>
  <v-row
    justify="center"
    align="center"
    class="ma-0"
>
    <v-col
        lg="5"
        md="6"
        sm="8"
        xs="12"
        class="no-pad"
    >
        <v-list
            v-for="(article, id) in section.articles"
            :key="id"
            color="grey lighten-5"
        >
            <v-list-item class="mt-2 mb-2">
                <base-article-section-card
                    :article="article"
                    :articleId="id"
                    :sectionId="sectionId"
                >
                </base-article-section-card>
            </v-list-item>
        </v-list>
        <!-- button -->
        <div class="text-center">
            <slot></slot>
        </div>
    </v-col>
</v-row>
</template>

<script>
import BaseArticleSectionCard from '../article-section/BaseArticleSectionCard'

export default {
    components: {
        BaseArticleSectionCard
    },
    props: {
        section: Object,
        sectionId: String
    }
}
</script>

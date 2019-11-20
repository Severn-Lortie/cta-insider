<template>
  <v-row
    justify="center"
    align="center"
>
    <v-col
        lg="5"
        md="6"
        sm="8"
        xs="12"
        v-if="section"
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
    <v-col v-else>
        <base-error-alert :errorMessage="message">
        </base-error-alert>
    </v-col>
</v-row>
</template>

<script>
import BaseArticleSectionCard from '../article-section/BaseArticleSectionCard'
import BaseErrorAlert from '../core/BaseErrorAlert';

export default {
    components: {
        BaseArticleSectionCard,
        BaseErrorAlert
    },
    data() {
        return {
            message: "Uh oh, this section does not exist."
        }
    },
    props: {
        section: Object,
        sectionId: String
    }
}
</script>

<style scoped>

</style>
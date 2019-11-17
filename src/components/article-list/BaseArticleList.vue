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
        v-if="sectionObj.section"
    >
        <v-list
            v-for="(article, i) in sectionObj.section.articles"
            :key="i"
            color="grey lighten-5"
        >
            <v-list-item class="mt-2 mb-2">
                <base-article-section-card
                    :article="article"
                    :section="sectionObj.key"
                    :articleNumberInSection="i"
                >
                </base-article-section-card>
            </v-list-item>
        </v-list>
        <!-- button -->
        <slot></slot>
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
        sectionObj: Object
    }

}
</script>

<style>

</style>
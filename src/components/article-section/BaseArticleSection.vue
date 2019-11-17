<template>
<v-container fluid>
    <v-row
        align="center"
        justify="center"
    >
        <v-col
            lg="10"
            md="10"
            sm="10"
            xs="12"
        >
            <v-col cols="12">
                <div class="headline 
                font-weight-bold 
                grey--text 
                text--darken-4
                text-capitalize
                ">
                    {{sectionObj.section.name || sectionObj.key}}
                </div>
            </v-col>
            <v-col cols="12">
                <v-row
                    align="center"
                    justify="start"
                >
                    <v-col
                        v-for="(article, i) in sectionObj.section.articles"
                        :key="i"
                        lg="4"
                        md="4"
                        sm="8"
                        xs="12"
                    >
                        <base-article-section-card
                            :article="article"
                            :section="sectionObj.key"
                            :articleNumberInSection="i"
                        >
                        </base-article-section-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import BaseArticleSectionCard from './BaseArticleSectionCard'

export default {

    components: {
        BaseArticleSectionCard
    },
    props: {
        sectionObj: Object
    }
}
</script>

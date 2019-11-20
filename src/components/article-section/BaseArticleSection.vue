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
                    {{formattedSectionName}}
                </div>
            </v-col>
            <v-col cols="12">
                <v-row
                    align="center"
                    justify="start"
                >
                    <v-col
                        v-for="(article, id) in section.articles"
                        :key="id"
                        lg="4"
                        md="4"
                        sm="8"
                        xs="12"
                    >
                        <base-article-section-card
                            :article="article"
                            :articleId="id"
                            :sectionId="sectionId"
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
import BaseArticleSectionCard from './BaseArticleSectionCard';
import stringToKey from '../../util/stringToKey';

export default {

    components: {
        BaseArticleSectionCard
    },
    computed: {
        formattedSectionName() {
            return stringToKey.convertToName(this.sectionId);
        }
    },
    props: {
        sectionId: String,
        section: Object
    }
}
</script>

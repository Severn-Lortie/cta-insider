<template>
  <v-row
        justify="center"
        align="center"
        class="fill-height white ma-0">
        <v-col
            lg="6"
            md="8"
            sm="8"
            xs="12"
            >
            <v-sheet class="pt-12 pl-8 pr-8 pb-12 title font-weight-regular whitespace" 
            tile
            >
                <vue-markdown>{{bodyText}}</vue-markdown>
            </v-sheet>
        </v-col>
    </v-row>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
    props: {
        bodyText: String
    },
    components: {
        VueMarkdown
    }
}
</script>

<style scoped>
.whitespace {
    white-space:pre-line;
}
</style>

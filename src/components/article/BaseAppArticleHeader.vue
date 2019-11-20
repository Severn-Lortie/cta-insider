<template>
<v-parallax :src="article.image" height="500">
    <v-container fluid class="fill-height fade">
        <v-row
            align="center"
            justify="center"
        >
            <v-col
                md="6"
                sm="8"
                xs="10"
            >
                <div class="display-3 text-left font-weight-bold text-capitalize">
                    {{article.title}}
                </div>
                <div class="headline mt-2">
                    {{article.author}}
                </div>
            </v-col>
        </v-row>
    </v-container>
</v-parallax>
</template>

<script>
export default {
    props: {
        article: Object
    }
}
</script>

<style>
/* force no content padding */
.v-parallax__content {
    padding: 0px !important;
}
</style>

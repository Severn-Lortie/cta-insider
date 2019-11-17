<template>
<v-carousel
    cycle
    hide-delimiters
    :show-arrows="false"
    forward-transition="slide-x-transition"
    reverse-transition="slide-x-transition">
    <v-carousel-item
        v-for="(article, i) in articles"
        :key="i"
        :src="article.image"
        >
        <v-row
            class="fill-height fade"
            align="center"
            justify="center">
            <v-col
            class="display-3 font-weight-bold text-center white--text text-capitalize"
            cols="6"
            >
                {{article.title}}
            </v-col>
        </v-row>
    </v-carousel-item>
</v-carousel>
</template>

<script>
export default {
    props: {
        articles: Array
    }
}
</script>

<style>
.fade {
    background: rgba(123, 31, 162, 0.4);
}
</style>

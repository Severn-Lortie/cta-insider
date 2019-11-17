<template>
<v-parallax :src="article.image">
    <v-row
        align="center"
        justify="center"
        class="fill-height fade"
        >
        <v-col cols="6">
            <div class="display-3 text-left font-weight-bold text-capitalize">
                {{article.title}}
            </div>
            <div class="headline mt-2">
                {{article.author}}
            </div>
        </v-col>
    </v-row>
</v-parallax>
</template>

<script>
export default {
    props: {
        article: Object
    }
}
</script>

<template>
<app-article :articlePath="{section, number}"></app-article>
</template>

<script>
import AppArticle from '../components/article/AppArticle'

export default {
    props: {
        section: String,
        number: String
    },
    components: {
        AppArticle
    }
}
</script>

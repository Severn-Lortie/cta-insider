<template>
<v-container
    class="pa-0"
    fluid
>
    <base-app-article-header :article="article"></base-app-article-header>
    <base-app-article-body :bodyText="article.bodyText"></base-app-article-body>
</v-container>
</template>

<script>
import BaseAppArticleBody from './BaseAppArticleBody'
import BaseAppArticleHeader from './BaseAppArticleHeader'

export default {
    props: {
        article: Object
    },
    components: {
        BaseAppArticleBody,
        BaseAppArticleHeader
    },
}
</script>

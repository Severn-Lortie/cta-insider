<template>
<v-container
    class="pa-0"
    fluid
    v-if="!article"
>
    <base-error-alert :errorMessage="message"></base-error-alert>
</v-container>

<v-container
    v-else
    class="pa-0"
    fluid
>
    <base-app-article-header :article="article"></base-app-article-header>
    <base-app-article-body :bodyText="article.bodyText"></base-app-article-body>
</v-container>
</template>

<script>
import {
    mapState
} from 'vuex'

import BaseAppArticleBody from './BaseAppArticleBody'
import BaseAppArticleHeader from './BaseAppArticleHeader'
import BaseErrorAlert from '../core/BaseErrorAlert'

export default {
    data() {
        return {
            message: "Uh oh, this article does not exist."
        }
    },
    props: {
        sectionId: String,
        articleId: String
    },
    components: {
        BaseAppArticleBody,
        BaseAppArticleHeader,
        BaseErrorAlert
    },
    computed: {
        ...mapState('articles', {
            sections: state => state.sections
        }),
        article() {
            if (this.sections[this.sectionId]) {
                const article = this.sections[this.sectionId].articles[this.articleId];
                if (article) {
                    return article;
                }
            }
            return undefined;
        }
    }
}
</script>

<style>

</style>

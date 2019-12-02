<template>
<div>
    <base-admin-article-list
    :sections="sections"
    v-on:remove="removeArticle"
    ></base-admin-article-list>
</div>
</template>

<script>
import {mapState} from 'vuex';
import {mapActions} from 'vuex';

import BaseAdminArticleList from './BaseAdminArticleList';

export default {
    components: {
        BaseAdminArticleList
    },
    computed: {
        ...mapState('articles', {
            sections: state => state.sections
        }),
    },
    methods: {
        ...mapActions('articles', [
            'deleteArticleWithId',
            'fetchAllArticlesFromDB'
        ]),

        removeArticle(id) {
            this.deleteArticleWithId(id);
            this.$router.go();
        },
    },
    created() {
        this.fetchAllArticlesFromDB();
    }

}
</script>
<template>
    <div>
        <base-article-section
        v-for="(section, key) in sections"
        :key="key"
        :sectionObj="{section, key}"
        ></base-article-section>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import BaseArticleSection from './BaseArticleSection';

export default {
    components: {
        BaseArticleSection
    },
    computed: {
        ...mapState('articles', {
            sections: state => state.sections
        }),
    }
}
</script>

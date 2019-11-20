<template>
    <div>
        <base-article-section
        v-for="(section, sectionId) in sections"
        :key="sectionId"
        :section="section"
        :sectionId="sectionId"
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

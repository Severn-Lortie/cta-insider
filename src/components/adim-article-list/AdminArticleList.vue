<template>
<div>
    <base-admin-article-list
    :sectionInfo="{key: currentSectionKey, section, list: sectionList}"
    v-on:section-select="changeSection"
    v-on:remove="removeArticle"
    ></base-admin-article-list>
</div>
</template>

<script>
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';

import BaseAdminArticleList from './BaseAdminArticleList';

export default {
    data() {
        return {
           currentSectionKey: '',
        }
    },
    components: {
        BaseAdminArticleList
    },
    computed: {
        ...mapState('articles', {
            sections: state => state.sections
        }),
        section() {
            return this.sections[this.currentSectionKey];
        },
        sectionList() {
            let sectionList = [];
            for (let sectionName in this.sections) {
                let sectionNameAndKey = {
                    text: this.sections[sectionName].name,
                    value: sectionName
                }
                sectionList.push(sectionNameAndKey);
            }
            return sectionList;
        }
    },
    methods: {
        ...mapMutations('articles', [
            'deleteArticle'
        ]),

        removeArticle(articleIndex) {
            this.deleteArticle({
                section: this.currentSectionKey,
                number: articleIndex
            })
        },
        changeSection(newSectionKey) {
            this.currentSectionKey = newSectionKey;
        }
    }

}
</script>
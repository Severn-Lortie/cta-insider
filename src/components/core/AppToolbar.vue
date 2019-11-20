<template>
  <base-app-toolbar
  :sections="sectionIds"
  ></base-app-toolbar>
</template>

<script>
import BaseAppToolbar from './BaseAppToolbar'
import {mapState} from 'vuex'

export default {
    components: {
        BaseAppToolbar
    },
    computed: {
        ...mapState('articles', {
            sections: state => state.sections
        }),
        sectionIds() {
            let ids = [];
            for (let sectionId in this.sections) {
                ids.push(sectionId);
            }
            return ids;
        }
    }
}
</script>

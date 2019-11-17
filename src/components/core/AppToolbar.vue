<template>
  <base-app-toolbar
  :sections="sections"
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
        })
    }
}
</script>

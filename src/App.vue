<template>
  <v-app>
      <app-toolbar></app-toolbar>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppToolbar from './components/core/AppToolbar'

export default {
  components: {
    AppToolbar
  }
}
</script>

<style>
  .no-pad {
    padding: 0px;
  }
</style>
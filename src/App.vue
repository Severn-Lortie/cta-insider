<template>
  <v-app>
    
      <app-toolbar></app-toolbar>

    <v-content>
      <v-container fluid class="no-pad">
        <router-view></router-view>
      </v-container>
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
  html, body {
    max-width: 100% !important;
    overflow-x: hidden !important;
}
</style>
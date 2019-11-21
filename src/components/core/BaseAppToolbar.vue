<template>
<v-app-bar
    color="white"
    app
>

    <v-icon class="purple--text text--darken-2">mdi-school-outline</v-icon>
    <v-btn
        text
        replace
        class="purple--text text--darken-2 ml-1"
        to="/"
    >
        CTA INSIDER
    </v-btn>

    <v-spacer></v-spacer>

    <div v-if="!xs">
        <v-btn
            text
            v-for="(id) in sections"
            :key="id"
            replace
            :to="`/section/${id}`"
        >
            {{formattedName(id)}}
        </v-btn>
    </div>
    <div v-else>
        <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-format-list-bulleted-square</v-icon>
          </v-btn>
        </template>

        <v-list>
            <v-subheader>Sections:</v-subheader>
          <v-list-item
            v-for="id in sections"
            :key="id"
            @click="() => {}"
          >
            <v-list-item-title >
              <v-btn text :to="`section/${id}`">
                {{formattedName(id)}}
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
</v-app-bar>
</template>

<script>
import stringToKey from '../../util/stringToKey'

export default {
    props: {
        sections: Array
    },
    methods: {
        formattedName(id) {
            return stringToKey.convertToName(id);
        }
    },
    computed: {
        xs() {
            return this.$vuetify.breakpoint.xs;
        }
    }
}
</script>

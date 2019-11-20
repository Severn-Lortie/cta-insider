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

    <v-btn
        text
        v-for="(id) in sections"
        :key="id"
        replace
        :to="`/section/${id}`"
    >
        {{formattedName(id)}}
    </v-btn>

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
    }
}
</script>

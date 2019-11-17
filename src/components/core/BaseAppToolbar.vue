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
        v-for="(section, key) in sections"
        :key="key"
        replace
        :to="`/section/${key}`"
    >
        {{section.name || key}}
    </v-btn>

</v-app-bar>
</template>

<script>
export default {
    props: {
        sections: Object
    }
}
</script>

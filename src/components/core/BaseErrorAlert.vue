<template>
<v-container fluid>
    <v-row
        class="fill-height"
        justify="center"
        align="start"
    >
        <v-banner single-line>
            {{errorMessage}}
            <template v-slot:actions>
                <v-btn
                    text
                    color="purple darken-2"
                    to="/frontpage"
                >
                    Go home
                </v-btn>
            </template>
        </v-banner>
    </v-row>
</v-container>
</template>

<script>
export default {
    props: {
        errorMessage: String
    }
}

</script>

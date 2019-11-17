<template>
<v-dialog
    v-model="dialog"
    max-width="70%"
>
    <template v-slot:activator="{ on }">
        <v-btn
            color="purple darken-2"
            class="white--text mb-4"
            dark
            v-on="on"
        >
            New Article
        </v-btn>
    </template>

    <v-card>
        <v-card-title primary-title>
            Create New Article
        </v-card-title>

        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="6">
                        <v-text-field label="Title"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field label="Author"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field label="Image" v-model="article.image"></v-text-field>
                    </v-col>
                    <v-img v-if="article.image" :src="article.image" max-height="200" width="auto"></v-img>
                     <v-col cols="12">
                        <v-textarea
                            filled
                            label="Body Text"
                            auto-grow
                        ></v-textarea>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="dialog = false"
            >
                Close
            </v-btn>
            <v-btn
                color="primary"
                text
                @click="dialog = false"
            >
                Save
            </v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            article: {
              image: ''
            }
        }
    }
}
</script>

<style>

</style>

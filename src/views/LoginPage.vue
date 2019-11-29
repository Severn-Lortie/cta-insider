<template>
<v-container
    fluid
    class="fill-height"
>
    <v-row
        justify="center"
        align="center"
    >
        <v-col cols="6">
            <v-card>
                <v-toolbar
                    flat
                    color="purple darken-2"
                    class="white--text"
                >
                    <v-toolbar-title>
                        Admin Login
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-icon color="white">mdi-account-card-details</v-icon>
                    </v-toolbar-items>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                        <v-text-field
                            id="email"
                            label="Email"
                            name="login"
                            prepend-icon="mdi-account-outline"
                            type="text"
                            v-model="email"
                        />
                        <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="mdi-lock-outline"
                            type="password"
                            v-model="password"
                        />
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="purple darken-2"
                        class="white--text"
                        @click="authorize()"
                    >
                        Submit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import fb from '../firebaseConfig'

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async authorize() {
            try {
                await fb.auth.signInWithEmailAndPassword(this.email, this.password);
                this.$router.push('/admin');
            } catch(e) {
                console.log(e);
            }
        }
    }
}
</script>

<style>

</style>

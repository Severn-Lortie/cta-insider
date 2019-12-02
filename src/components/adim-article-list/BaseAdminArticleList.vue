<template>
<v-container
    fluid
    class="fill-height"
>
    <v-row
        align="center"
        justify="center"
    >
        <v-col cols=8>
            <p class="text-center display-3">Dashboard</p>
            <base-admin-create-dialog></base-admin-create-dialog>
            <v-card>
                <v-toolbar flat>
                    <v-toolbar-title>
                        Articles
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-select
                            :items="sectionItems"
                            v-on:change="selected"
                            label="Select a section"
                            class="mt-2"
                            single-line
                            return-object
                        >
                        </v-select>
                    </v-toolbar-items>

                </v-toolbar>
                <v-list
                    two-line
                    v-if="currentSectionId !== ''"
                >
                    <v-list-item
                        v-for="(article, id) in currentSection.articles"
                        :key="id"
                    >
                        <v-list-item-avatar>
                            <img :src="article.image">
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title v-text="article.title"></v-list-item-title>
                            <v-list-item-subtitle v-text="article.author"></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-btn
                                icon
                                @click="remove(id)"
                            >
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </v-list-item-action>

                    </v-list-item>
                </v-list>
                <v-card-text v-else>
                    Please select a section to view the articles.
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import stringToKey from '../../util/stringToKey';
import BaseAdminCreateDialog from './BaseAdminCreateDialog';

export default {
    data() {
        return {
            currentSectionId: ''
        }
    },
    props: {
        sections: Object, // list, key, and full object
    },
    components: {
        BaseAdminCreateDialog
    },
    computed: {
        sectionItems () {
            let sectionKeysAndValues = [];
            Object.keys(this.sections).forEach((key) => {
                sectionKeysAndValues.push({
                    text: stringToKey.convertToName(key),
                    value: key
                })
            });
            return sectionKeysAndValues;
        },
        currentSection() {
            return this.sections[this.currentSectionId];
        }
    },
    methods: {
        remove(id) {
            this.$emit('remove', id)
        },
        showEdit() {
            this.$emit('show-edit')
        },
        selected(section) {
            this.currentSectionId = section.value;
        }
    }

}
</script>

<style>

</style>

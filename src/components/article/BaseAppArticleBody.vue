<template>
  <v-row
        justify="center"
        align="center"
        class="fill-height white">
        <v-col
            lg="6"
            md="8"
            sm="8"
            xs="12">
            <v-sheet class="pt-12 pl-8 pr-8 pb-12 title font-weight-regular" 
            tile
            >
                {{bodyText}}
            </v-sheet>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        bodyText: String
    }
}
</script>

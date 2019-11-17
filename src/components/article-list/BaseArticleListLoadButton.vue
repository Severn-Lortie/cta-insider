<template>
<v-btn text @click="loadMore()">
    Load More
</v-btn>
</template>

<script>
export default {
    methods: {
        loadMore() {
            this.$emit('load-more');
        }
    }
}
</script>

<style>

</style>
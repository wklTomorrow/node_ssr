<template>
    <div>
        Home
        <button @click="onChange">转换路由</button>
        <div>{{ item.title }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    asyncData ({store, route}) {
        return store.dispatch('fetchItem', 1000)
    },
    methods: {
        onChange() {
            console.log('hello world', this.$route)
        }
    },
    computed: {
        item() {
            return {
                title: this.$store.state.items['1000']
            }
        }
    }
}
</script>

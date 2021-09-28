<template>
    <div>
        About
        <button v-on:click="onChange">转换路由</button>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        onChange() {
            console.log(this.$route, this, '----')
            this.$router.push('/home')
        }
    }
}
</script>
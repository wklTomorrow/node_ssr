<template>
    <div>
        <div>hello world</div>
        <router-view />
        <div>{{ flag }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            flag: false
        }
    },
    created() {
    },
    methods: {
        onChange() {
            console.log(this.$route, this, '-----')
            if (this.flag) {
                this.$route.push('/home')
            } else {
                this.$route.push('/about')
            }
            this.flag = !this.flag
        }
    }
}
</script>
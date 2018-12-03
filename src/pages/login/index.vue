<template>
    <div>
        这个是登录页
        <button @click="handleLogin">点击登录</button>
    </div>
</template>

<script>
export default {
    name: 'login-page',
    methods: {
        handleLogin() {
            this.$store.dispatch('setLoginInfo', true);
            window.location.href = this.$route.query.retUrl;
        }
    }
};
</script>

<style scoped lang="less">
</style>

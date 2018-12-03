<template>
    <div>
        这个是首页
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'home-page',
    created() {
        axios.post('http://101.132.127.25/sys/loginMain', {
            name: 'zhang',
            password: 'zhang'
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }
};
</script>

<style scoped lang="less">
</style>

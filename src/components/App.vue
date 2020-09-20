<template>
    <h class="header">from {{ name }}</h>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            name: 'App',
        };
    },
};
</script>

<style lang="scss" scoped>
.header {
    color: red;
    font-size: 50px;
    margin-left: 100px;
}
</style>

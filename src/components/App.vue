<template>
    <app-header/>
</template>

<script>
import AppHeader from '@/components/atoms/AppHeader';

export default {
    name: 'App',
    components: {
        AppHeader,
    },
};
</script>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
}
</style>

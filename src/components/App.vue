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

@font-face {
    font-family: 'Caviar Dreams';
    src: url('@/assets/fonts/CaviarDreams_Bold.ttf');
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Caviar Dreams', sans-serif;
    font-size: 30px;
}
</style>

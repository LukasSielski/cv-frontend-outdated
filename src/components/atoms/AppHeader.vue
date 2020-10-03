<template>
    <div class="header-container">
        <div class="text">Curriculum</div>
        <img class= "image">
        <div class="text">Vitae</div>
    </div>
</template>

<script>
export default {
    name: 'AppHeader',
};
</script>

<style lang="scss" scoped>

.header-container {
    text-align: center;
    background-color: red;
    border-color: green;

    .image {
        width: 10%;
        max-width: 50px;
        display: block;
        float: left;
        content: url('@/assets/avatar.png')
    }

    .text {
        float: left;
        width: 45%;
        background-color: yellow;
    }
}

</style>

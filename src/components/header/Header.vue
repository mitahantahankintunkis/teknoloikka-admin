<script setup>
import Hamburger from "./Hamburger.vue";
import UserButton from "./UserButton.vue";
</script>

<template>
<header>
    <Hamburger></Hamburger>
    <UserButton></UserButton>
</header>
</template>


<style scoped>
header {
    background-color: #39AFC8;
    color: white;
    display: flex;
    justify-content: space-between;
    height: 3.6rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
</style>
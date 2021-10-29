<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Content from './components/Content.vue'
import Sidebar from './components/sidebar/Sidebar.vue'
import Header from './components/header/Header.vue'
</script>


<template>
<!--
<Header></Header>
-->
<div class="content">
    <Sidebar></Sidebar>
    <Content></Content>
</div>
</template>


<style>
#app {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.content {
    display: flex;
}

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>

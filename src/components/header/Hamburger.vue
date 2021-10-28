<script setup>
</script>


<template>
<div class="hamburger">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
</div>
</template>


<style scoped>
.hamburger {
    width: 2.2rem;
    height: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    margin-top:  1.1rem;
    margin-left:  0.8rem;
}

.line {
    border-top: 2px solid white;
}
</style>
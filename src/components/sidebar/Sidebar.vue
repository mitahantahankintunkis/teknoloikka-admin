<script setup>

const listItems = [
    { label: 'Yleiskatsaus', path: '/' },
    { label: 'Polut', path: '/polut' },
    { label: 'Analytiikka', path: '/analytiikka/0' },
]

</script>

<template>
<aside>
    <ul>
        <li v-for="item of listItems" :key="item">
            <router-link :to="item.path">
                {{ item.label }}
            </router-link>
        </li>

        <div class="divider-cont">
            <div class="divider"></div>
        </div>

        <li>
            <router-link to="/asetukset">Asetukset</router-link>
        </li>
    </ul>
</aside>
</template>


<style scoped>
aside {
    background-color: #4B4F64;
    color: white;
    display: flex;
    flex-direction: column;
    position: fixed;
    overflow: auto;
    width: 20rem;
    z-index: 10;
    top: 0;
    bottom: 0;
    left: 0;
}

.divider-cont {
    width: 100%;
    padding: 0 1rem;
}

.divider {
    border-top: 1px solid gray;
}

ul {
    list-style: none;
}

li {
    height: 2.5rem;
}

li:hover,
.router-link-active
{
    background-color: #717485;
}

a {
    font-size: 1rem;
    text-align: start;
    width: 100%;
    height: 100%;
    display: block;
    line-height: 2.8rem;
    color: white;
    text-decoration: none;
    padding-left: 0.5rem;
}
</style>
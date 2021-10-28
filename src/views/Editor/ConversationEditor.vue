<template>
    <svg id="editor"></svg>
</template>


<script setup>
import { onMounted } from "@vue/runtime-core";
import * as d3 from "d3";

//defineProps({
//    nodes: Array,
//    edges: Array,
//});

let id = 0;
const nodes = [
    { id: id++, label: 'Beep-boop, olen UKV-botti 🤖. Kuinka voin auttaa?', },
    { id: id++, label: 'Miten menee?', },
    { id: id++, label: 'Miten arvostelisit Krapin pippalot?', },
    { id: id++, label: 'Mitä haluat tehdä huomenna?', },
    { id: id++, label: 'Kiitos vastauksista! Palaan keskustelun alkuun, jos haluat muuttaa vastauksiasi', },
];

id = 0;
const edges = [
    { id: id++, from: 0, to: 1, label: 'Haluan vastata Krapin kyselyyn', },
    { id: id++, from: 1, to: 2, label: 'Mainiosti!', },
    { id: id++, from: 1, to: 2, label: 'Hyvin', },
    { id: id++, from: 1, to: 2, label: 'Menettelee', },
    { id: id++, from: 1, to: 2, label: 'Hengissä vielä', },
    { id: id++, from: 2, to: 3, label: '5', },
    { id: id++, from: 2, to: 3, label: '4', },
    { id: id++, from: 2, to: 3, label: '3', },
    { id: id++, from: 2, to: 3, label: '2', },
    { id: id++, from: 2, to: 3, label: '1', },
    { id: id++, from: 3, to: 4, label: 'Työskennellä', },
    { id: id++, from: 3, to: 4, label: 'Jutella porukan kanssa', },
    { id: id++, from: 3, to: 4, label: 'Rentoutua', },
    { id: id++, from: 3, to: 4, label: 'Ryypätä', },
];

onMounted(function() {
    console.log(d3.select('#editor'));
});

</script>


<style scoped>
.editor {
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
</style>

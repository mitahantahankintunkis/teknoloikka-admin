<template>
    <div class="cont">
        <div class="left-cont">
            <h2>Kysymys: {{ title }}</h2>
            <h3>{{ numOfAnswers }} vastausta</h3>
            <LineChart :key="selected" :labels="labels" :data="amounts"></LineChart>
            <div class="chart"></div>
        </div>
        <div class="right-cont">
            <h2>Seuraavat kysymykset</h2>
            <ul>
                <li v-for="id in next" :key="id">
                    <div class="temp-next" @click="nextSelected(id)">
                        {{ nodes.find((n) => n.id === id).label }}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>


<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import LineChart from "./LineChart.vue";

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
    { id: id++, from: 4, to: 0, label: 'Palaa alkuun', },
];

const answers = [
    32,
    8, 16, 6, 2,
    8, 14, 9, 1, 0,
    4, 6, 4, 18,
    8,
];

const selected = ref(0);
const title = ref('');
const numOfAnswers = ref(0);
const labels = ref([]);
const amounts = ref([]);
const next = ref(new Set());


function nextSelected(id) {
    selected.value = id;
    title.value = nodes.find((n) => n.id === Number(selected.value)).label;

    labels.value.splice(0);
    amounts.value.splice(0);
    next.value.clear();

    edges.forEach((e, i) => {
        let id = Number(selected.value) || 0;

        if (e.from === id) {
            labels.value.push(e.label);
            amounts.value.push(answers[i]);
            next.value.add(e.to);
        }
    });

    numOfAnswers.value = amounts.value.reduce((a, b) => a + b, 0);
}

nextSelected(0);

</script>


<style scoped>
.cont {
    width: 100%;
    height: calc(100% - 2rem);
    display: flex;
    gap: 1rem;
    padding: 2rem 0 0 0;
}

.left-cont {
    width: 100%;
}
.right-cont {
    width: 100%;
}
.left-cont h2 {
    text-align: start;
    padding-left: 1rem;
}

.left-cont h3 {
    text-align: start;
    margin-bottom: 2rem;
    padding-left: 1rem;
    font-weight: 600;
}

ul {
    list-style: none;
}

.temp-next {
    cursor: pointer;
    text-decoration: underline;
}
</style>
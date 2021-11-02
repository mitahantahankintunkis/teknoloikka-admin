<template>
    <div class="cont">
        <div class="cont-item">
            <h2>Kysymys: {{ title }}</h2>
            <h3>{{ numOfAnswers }} vastausta</h3>
            <LineChart :key="`${selected}-${amounts.join()}`" :labels="labels" :data="amounts"></LineChart>
            <div class="chart"></div>
        </div>
        <div class="cont-item">
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
import { inject, ref } from "@vue/runtime-core";
import LineChart from "./LineChart.vue";
import { collection, query, where, orderBy, getDocs, limit } from "firebase/firestore"; 


const props = defineProps(['answers']);

let id = 0;
const nodes = [
    { id: id++, label: 'Beep-boop, olen UKV-botti 🤖. Kuinka voin auttaa?', },
    { id: id++, label: 'Miten menee?', },
    { id: id++, label: 'Miten arvostelisit Krapin pippalot?', },
    { id: id++, label: 'Mitä haluat tehdä huomenna?', },
    { id: id++, label: 'Kiitos vastauksista! Palaan keskustelun alkuun, jos haluat muuttaa vastauksiasi', },
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
            const answer = props.answers.value.get(e.id);
            amounts.value.push(answer.count || 0);
            next.value.add(e.to);
        }
    });

    numOfAnswers.value = amounts.value.reduce((a, b) => a + b, 0);
}

nextSelected(0);

</script>


<style scoped>
.cont {
    background-color: #f2f2f2;
    width: 100%;
    height: calc(100% - 2rem);
    gap: 1rem;
    padding: 2rem 0 0 0;
    display: flex;
    flex-direction: column;
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
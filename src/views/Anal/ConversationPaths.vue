<template>
    <div class="datacont">
        <div class="cont-item graph">
            <h2>Kysymys: {{ title }}</h2>
            <h3>{{ numOfAnswers }} vastausta</h3>
            <LineChart :key="`${selected}-${amounts.join()}`" :labels="labels" :data="amounts"></LineChart>
        </div>
        <div class="cont-item">
            <h2>Seuraavat kysymykset (temp)</h2>
            <ul>
                <li v-for="id in next" :key="id">
                    <div class="temp-next" @click="nextSelected(id)">
                        {{ props.nodes.find((n) => n.id === id).label }}
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


const props = defineProps(['answers', 'nodes', 'edges']);

const selected = ref(0);
const title = ref('');
const numOfAnswers = ref(0);
const labels = ref([]);
const amounts = ref([]);
const next = ref(new Set());


function nextSelected(id) {
    selected.value = id;
    title.value = props.nodes.find((n) => n.id === Number(selected.value)).label;

    labels.value.splice(0);
    amounts.value.splice(0);
    next.value.clear();

    props.edges.forEach((e, i) => {
        let id = Number(selected.value) || 0;

        if (e.from === id) {
            labels.value.push(e.label);
            const answer = props.answers.get(e.id);
            const count = answer ? answer.count : 0;
            amounts.value.push(count);
            next.value.add(e.to);
        }
    });

    numOfAnswers.value = amounts.value.reduce((a, b) => a + b, 0);
}

nextSelected(0);

</script>


<style scoped>
.datacont {
    background-color: white;
    padding: 1rem;
    width: 100%;
    height: calc(100% - 2rem);
    gap: 3rem;
    display: flex;
    border-radius: 0.2rem;
}

.cont-item {
    width: 50%;
}

h2 {
    text-align: start;
    padding-left: 1rem;
}

h3 {
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
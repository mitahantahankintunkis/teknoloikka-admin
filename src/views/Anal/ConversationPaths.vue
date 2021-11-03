<template>
    <div class="datacont">
        <div v-if="numOfAnswers === 0" class="cont-item graph">
            <h3>Kysymys: {{ title }}</h3>
            <h4>Ei vastauksia</h4>
        </div>
        <div v-else class="cont-item graph">
            <h3>Kysymys: {{ title }}</h3>
            <h4>{{ numOfAnswers }} vastausta</h4>
            <LineChart :key="`${selected}-${amounts.join()}`" :labels="labels" :data="amounts"></LineChart>
        </div>
        <div class="cont-item treeview">
            <h3>Keskustelupuu</h3>
            <TreeVisualizer @selected="nextSelected" :key="`${selected}-${amounts.join()}`" :selected="selected" :nodes="nodes" :edges="edges"></TreeVisualizer>

            <!--
            <ul>
                <li v-for="id in next" :key="id">
                    <div class="temp-next" @click="nextSelected(id)">
                        {{ props.nodes.find((n) => n.id === id).label }}
                    </div>
                </li>
            </ul>
            -->
        </div>
    </div>
</template>


<script setup>
import { inject, ref } from "@vue/runtime-core";
import LineChart from "./LineChart.vue";
import TreeVisualizer from "./TreeVisualizer.vue";


const props = defineProps(['answers', 'nodes', 'edges']);

const selected = ref(0);
const title = ref('');
const numOfAnswers = ref(0);
const labels = ref([]);
const amounts = ref([]);
const next = ref(new Set());


function setReplies(id, depth=0) {
    if (depth > 10) {
        console.error('Too much recursion at setReplies');
        return;
    }

    labels.value.splice(0);
    amounts.value.splice(0);
    next.value.clear();

    for (let i = 0; i < props.edges.length; ++i) {
        const e = props.edges[i];

        if (e.from === id) {
            if (!e.label) {
                setReplies(e.to, depth + 1);
                return;
            }

            labels.value.push(e.label);
            const answer = props.answers.get(e.id);
            const count = answer ? answer.count : 0;
            amounts.value.push(count);
            next.value.add(e.to);
        }
    };

    numOfAnswers.value = amounts.value.reduce((a, b) => a + b, 0);
}

function nextSelected(id) {
    selected.value = id;
    title.value = props.nodes.find((n) => n.id === Number(selected.value)).label;

    setReplies(id);

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
    display: flex;
    flex-direction: column;
}

h2 {
    text-align: start;
    padding-left: 1rem;
}

h3 {
    text-align: start;
    margin-bottom: 1rem;
    padding-left: 1rem;
    font-weight: 600;
}

h4 {
    text-align: start;
    margin-bottom: 3rem;
    padding-left: 1rem;
    font-weight: 600;
}

ul {
    list-style: none;
}

.temp-next {
    cursor: pointer;
    text-decoration: underline;
    margin-top: 2rem;
}

.treeview {
    min-height: 30rem;
}
</style>
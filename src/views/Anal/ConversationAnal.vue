<template>
    <h1>{{ title }}</h1>
    <!--
    <PieChart @selected="selectedSegment" :key="title" :labels="labels" :data="amounts"></PieChart>
    -->
    <LineChart @selected="selectedSegment" :key="title" :labels="labels" :data="amounts"></LineChart>
</template>


<script setup>
import PieChart from "./PieChart.vue";
import LineChart from "./LineChart.vue";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "@vue/runtime-core";

const route = useRoute();
const router = useRouter();

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

const answers = [
    32,

    8,
    16,
    6,
    2,

    8,
    14,
    8,
    1,
    1,

    4,
    6,
    4,
    18,
];

const title = ref(`Kysymys: ${nodes.find((n) => n.id === Number(route.params.id)).label}`);
const labels = ref([]);
const amounts = ref([]);
const next = ref([]);

function setChart() {
    title.value = `Kysymys: ${nodes.find((n) => n.id === Number(route.params.id)).label}`;
    const newLabels = [];
    const newAmounts = [];
    const newNext = [];

    edges.forEach((e, i) => {
        let id = Number(route.params.id) || 0;

        if (e.from === id) {
            newLabels.push(e.label);
            newAmounts.push(answers[i]);
            newNext.push(e.to);
        }
    });

    labels.value = newLabels;
    amounts.value = newAmounts;
    next.value = newNext;
}

setChart();

watch(() => route.params, (to, prev) => {
    setChart();
    console.log(to, prev, title, amounts.value);
});

function selectedSegment(id) {
    router.push(`/analytiikka/${next.value[id]}`);
}
</script>


<!--
<script>
export default {
    data() {
        return {
            title: 'Sup',
            labels: [],
            amounts: [],
            next: [],
        };
    },

    methods: {
        updateChart() {
            this.title = `Kysymys: ${this.nodes.find((n) => n.id === Number(this.$params.id)).label}`;
            this.labels = [];
            this.amounts = [];
            this.next = [];

            this.edges.forEach((e, i) => {
                let id = Number(this.$params.id) || 0;

                if (e.from === id) {
                    this.labels.push(e.label);
                    this.amounts.push(answers[i]);
                    this.next.push(e.to);
                }
            });
        },

        selectedSegment(id) {
            router.push(`/analytiikka/${next[id]}`);
        }
    },

    computed: {
        nodes() {
            let id = 0;
            const nodes = [
                { id: id++, label: 'Beep-boop, olen UKV-botti 🤖. Kuinka voin auttaa?', },
                { id: id++, label: 'Miten menee?', },
                { id: id++, label: 'Miten arvostelisit Krapin pippalot?', },
                { id: id++, label: 'Mitä haluat tehdä huomenna?', },
                { id: id++, label: 'Kiitos vastauksista! Palaan keskustelun alkuun, jos haluat muuttaa vastauksiasi', },
            ];
        },

        edges() {
            let id = 0;
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
        },

        answers() {
            const answers = [
                32,

                8,
                16,
                6,
                2,

                8,
                14,
                8,
                1,
                1,

                4,
                6,
                4,
                18,
            ];
        }
    },

    beforeRouteUpdate(to, from) {
        this.updateChart();
    },

    created() {
        this.updateChart();
    },
};
</script>
-->


<style scoped>
h1 {
    margin: 2rem 0;
}
</style>
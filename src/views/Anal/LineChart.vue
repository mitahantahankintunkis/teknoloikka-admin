<template>
    <div class="chart"></div>
</template>


<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import * as d3 from "d3";

//let id = 0;
//const nodes = [
//    { id: id++, label: 'Beep-boop, olen UKV-botti 🤖. Kuinka voin auttaa?', },
//    { id: id++, label: 'Miten menee?', },
//    { id: id++, label: 'Miten arvostelisit Krapin pippalot?', },
//    { id: id++, label: 'Mitä haluat tehdä huomenna?', },
//    { id: id++, label: 'Kiitos vastauksista! Palaan keskustelun alkuun, jos haluat muuttaa vastauksiasi', },
//];
//
//id = 0;
//const edges = [
//    { id: id++, from: 0, to: 1, label: 'Haluan vastata Krapin kyselyyn', },
//    { id: id++, from: 1, to: 2, label: 'Mainiosti!', },
//    { id: id++, from: 1, to: 2, label: 'Hyvin', },
//    { id: id++, from: 1, to: 2, label: 'Menettelee', },
//    { id: id++, from: 1, to: 2, label: 'Hengissä vielä', },
//    { id: id++, from: 2, to: 3, label: '5', },
//    { id: id++, from: 2, to: 3, label: '4', },
//    { id: id++, from: 2, to: 3, label: '3', },
//    { id: id++, from: 2, to: 3, label: '2', },
//    { id: id++, from: 2, to: 3, label: '1', },
//    { id: id++, from: 3, to: 4, label: 'Työskennellä', },
//    { id: id++, from: 3, to: 4, label: 'Jutella porukan kanssa', },
//    { id: id++, from: 3, to: 4, label: 'Rentoutua', },
//    { id: id++, from: 3, to: 4, label: 'Ryypätä', },
//];
//
//const answers = [
//    32,
//    8, 16, 6, 2,
//    8, 14, 9, 1, 0,
//    4, 6, 4, 18,
//];

const emit = defineEmits(['selected']);
const props = defineProps(['labels', 'data']);

onMounted(function() {
    const total = d3.sum(props.data);
    const chart = d3.select('.chart');
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(props.data)])
        .range([0, 100]);

    const yLabels = chart.append('div')
        .attr('class', 'labels')
        .selectAll('div')
        .data(props.data)
        .join('div')
        .attr('class', 'label-cont')
        .append('div')
        .attr('class', 'label')
        .text((d) => `${Math.round((d / total) * 100)}%`);

    const bars = chart.append('div')
        .attr('class', 'bars')
        .selectAll('div')
        .data(props.data)
        .join('div')
        .attr('class', 'bar-cont');

    bars.append('div')
        .attr('class', 'bar')
        .style('width', (d) => `${xScale(d)}%`);

    bars.append('span')
        .attr('class', 'bar-label')
        .text((d, i) => props.labels[i]);
});
</script>


<style scoped>
.chart {
    width: 100%;
    display: flex;
    font-weight: 600;
}

.chart:deep(.labels) {
    width: 4rem;
    height: 100%;
    padding: 0 1rem 0 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.chart:deep(.bars) {
    flex: 1 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.chart:deep(.label-cont) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 100%;
}
.chart:deep(.label) {
    width: 100%;
    text-align: end;
}

.chart:deep(.bar-cont) {
    width: 100%;
    height: 2.5rem;
    display: flex;
    position: relative;
}

.chart:deep(.bar) {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #e1e8ed;
    height: 100%;
    border-radius: 2px;
    padding: 0 0 0 2px;
}

.chart:deep(.bar-label) {
    line-height: 2.5rem;
    text-align: start;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 0 0 0.5rem;
    width: 100%;
}
</style>
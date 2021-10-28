<template>
    <div class="chart">
      <vue3-chart-js @click="clicked" ref="chartRef" v-bind="{ ...pieChart }" />
    </div>
</template>


<script setup>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import { ref } from "@vue/reactivity";

const chartRef = ref(null);
const emit = defineEmits(['selected']);
const props = defineProps(['labels', 'data']);
//, {
//    labels,
//    data,
//});

console.log(props.labels);
function clicked(event) {
    const chart = chartRef.value.chartJSState.chart;
    const elements = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);

    if (elements && elements.length > 0) {
        emit('selected', elements[0].datasetIndex);
    }
}

const pieChart = {
    type: "pie",
    data: {
        //labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
        labels: props.labels,
        datasets: [
            {
                backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
                data: props.data,
            },
        ],
    },
};
</script>


<style scoped>
.chart {
    width: 100%;
    max-width: 50rem;
    margin: 0 auto;
}
</style>

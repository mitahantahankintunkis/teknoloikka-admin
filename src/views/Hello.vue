<template>
    <h1>Hello World!</h1>
    <div style="max-width: 400px">
        <div class="chart">
            <vue3-chart-js v-bind="{ ...pieChart }" />
        </div>
    </div>
</template>


<script setup>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

const pieChart = {
  type: "pie",
    width: "600px",
  data: {
    labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
    datasets: [
      {
        backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
        data: [40, 20, 80, 10],
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

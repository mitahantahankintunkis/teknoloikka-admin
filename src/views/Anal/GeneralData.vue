<template>
    <div class="datacont">
        <div class="cont-item">
            <div class="head">
                <h3>Käyttäjiä</h3>
            </div>
            <h4>{{ usercount }}</h4>
        </div>
        <div class="cont-item">
            <div class="head">
                <h3>Viestejä</h3>
            </div>
            <h4>{{ messagecount }}</h4>
        </div>
        <div class="cont-item">
            <div class="head">
                <h3>Lorem ipsum</h3>
            </div>
            <h4>62%</h4>
        </div>
        <div class="cont-item">
            <div class="head">
                <h3>Loppuunviedyt keskustelut</h3>
            </div>
            <h4>92%</h4>
        </div>
    </div>
</template>


<script setup>
//import { inject, ref } from "@vue/runtime-core";
//import LineChart from "./LineChart.vue";
//import TreeVisualizer from "./TreeVisualizer.vue";
//
//

const props = defineProps(['answers', 'nodes', 'edges']);
const uids = Array.from(props.answers.values()).map((e) => e.uids).flat();
const messagecounts = Array.from(props.answers.values()).map((e) => e.count);

const usercount = new Set(uids).size;
const messagecount = messagecounts.reduce((a, b) => a + b, 0);

//
//const selected = ref(0);
//const title = ref('');
//const numOfAnswers = ref(0);
//const labels = ref([]);
//const amounts = ref([]);
//const next = ref(new Set());
//
//
//function setReplies(id, depth=0) {
//    if (depth > 10) {
//        console.error('Too much recursion at setReplies');
//        return;
//    }
//
//    labels.value.splice(0);
//    amounts.value.splice(0);
//    next.value.clear();
//
//    for (let i = 0; i < props.edges.length; ++i) {
//        const e = props.edges[i];
//
//        if (e.from === id) {
//            if (!e.label) {
//                setReplies(e.to, depth + 1);
//                return;
//            }
//
//            labels.value.push(e.label);
//            const answer = props.answers.get(e.id);
//            const count = answer ? answer.count : 0;
//            amounts.value.push(count);
//            next.value.add(e.to);
//        }
//    };
//
//    numOfAnswers.value = amounts.value.reduce((a, b) => a + b, 0);
//}
//
//function nextSelected(id) {
//    selected.value = id;
//    title.value = props.nodes.find((n) => n.id === Number(selected.value)).label;
//
//    setReplies(id);
//
//}
//
//nextSelected(0);

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

.head {
    height: 4.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h2 {
    text-align: start;
    padding-left: 1rem;
}

h3 {
    text-align: center;
    margin-bottom: 1rem;
    padding-left: 1rem;
    font-weight: 600;
}

h4 {
    text-align: center;
    margin-bottom: 1rem;
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
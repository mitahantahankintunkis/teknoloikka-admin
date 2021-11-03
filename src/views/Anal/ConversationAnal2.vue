<template>
    <div class="cont">
        <div class="cont-row">
            <h3 class="card-title">Yleistietoa</h3>
            <div class="card">
                <GeneralData :key="answers.size" :nodes="nodes" :edges="edges" :answers="answers"></GeneralData>
            </div>
        </div>
        <div class="cont-row">
            <h3 class="card-title">Keskustelutiedot</h3>
            <div class="card">
                <ConversationPaths :key="answers.size" :nodes="nodes" :edges="edges" :answers="answers"></ConversationPaths>
            </div>
        </div>
    </div>
</template>


<script setup>
import { inject, ref } from "@vue/runtime-core";
import LineChart from "./LineChart.vue";
import { collection, query, where, orderBy, getDocs, limit } from "firebase/firestore";
import ConversationPaths from "./ConversationPaths.vue"; 
import GeneralData from "./GeneralData.vue"; 


const answers = ref(new Map());

const db = inject('db');


let id = 0;
const nodes = [
    { id: id++, pos: { x:  0, y: 0 * 2 }, label: 'Beep-boop, olen UKV-botti 🤖. Minulla olisi muutama kysymys Krapin bootcapmista', },
    { id: id++, pos: { x:  0, y: 1 * 2 }, label: 'Voit keskustella minun kanssani painamalla alla olevia vaihtoehtoja. Kaikki vastaukset ovat täysin anonyymejä, jotenka voit vastata niihin huoletta', },
    { id: id++, pos: { x:  0, y: 2 * 2 }, label: 'Työstimme eilen oppiraportteja. Missä vaiheessa arvioisit teidän raporttinne olevan?', },
    { id: id++, pos: { x:  0, y: 3 * 2 }, label: 'Miten arvioisitte eilisen illallisen?', },
    { id: id++, pos: { x:  0, y: 4 * 2 }, label: 'Monta tuntia sait nukuttua viime yönä?', },
    { id: id++, pos: { x: -6, y: 5 * 2 }, label: 'Hienoa!', },
    { id: id++, pos: { x: -2, y: 5 * 2 }, label: 'Muutaman päivän selviää hieman alhaisemmalla unimäärällä, mutta pidemmän päälle kannattaa nukkua yli kahdeksan tuntia päivässä. Jos päivän aikana alkaa väsyttämään, niin kannattaa harkita lyhyitä 10 minuutin päiväunia', },
    { id: id++, pos: { x:  2, y: 5 * 2 }, label: 'Yöunien suositeltu mitta on vähintään kahdeksan tuntia. Jo yhden tunnin ylimääräinen yöuni saa ihmeitä aikaan, olet virkeämpi, innovatiivisempi ja muisti lakkaa pätkimästä.', },
    { id: id++, pos: { x:  6, y: 5 * 2 }, label: 'Jos olet autolla matkassa, niin kannattaa ottaa päiväunet ennen lähtöä. Vähäisten yöunien vaikutus ajamiseen on verrattavissa humalatilaan', },
    { id: id++, pos: { x:  0, y: 6 * 2 }, label: 'Asteikolla 1-5, miten yleisesti arvioisit minun kanssani keskustelemista?', },
    { id: id++, pos: { x:  0, y: 7 * 2 }, label: 'Kiitos vastauksistasi, ja mukavaa päivänjatkoa!', },
];

id = 0;
const edges = [
    { id: id++, from: 0, to: 1, label: null, },

    { id: id++, from: 1, to: 2, label: 'Haluan vastata Krapin kyselyyn', },

    { id: id++, from: 2, to: 3, label: 'Sen on valmis', },
    { id: id++, from: 2, to: 3, label: 'Viimeistelyä vaille valmis', },
    { id: id++, from: 2, to: 3, label: 'Se on noin puolivälissä', },
    { id: id++, from: 2, to: 3, label: 'Vasta alkuvaiheissa', },

    { id: id++, from: 3, to: 4, label: '⭐⭐⭐⭐⭐', },
    { id: id++, from: 3, to: 4, label: '⭐⭐⭐⭐', },
    { id: id++, from: 3, to: 4, label: '⭐⭐⭐', },
    { id: id++, from: 3, to: 4, label: '⭐⭐', },
    { id: id++, from: 3, to: 4, label: '⭐', },

    { id: id++, from: 4, to: 5, label: 'Yli 8 tuntia', },
    { id: id++, from: 4, to: 6, label: '6-8 tuntia', },
    { id: id++, from: 4, to: 7, label: '4-6 tuntia', },
    { id: id++, from: 4, to: 8, label: 'Alle 4 tuntia', },

    { id: id++, from: 5, to: 9, label: null, },
    { id: id++, from: 6, to: 9, label: null, },
    { id: id++, from: 7, to: 9, label: null, },
    { id: id++, from: 8, to: 9, label: null, },

    { id: id++, from: 9, to: 10, label: '5', },
    { id: id++, from: 9, to: 10, label: '4', },
    { id: id++, from: 9, to: 10, label: '3', },
    { id: id++, from: 9, to: 10, label: '2', },
    { id: id++, from: 9, to: 10, label: '1', },
];


// Fetches conversations from the database
async function fetchConversations() {
    if (!db) return;
    console.log('fetching');

    // Week
    //const startDate = new Date(Date.now() - (7 * 24 * 60 * 60 * 1000));

    // 2 hours
    const startDate = new Date(Date.now() - (2 * 60 * 60 * 1000));

    const q = query(collection(db, 'conversations'),
        where('timestamp', '>', startDate),
        orderBy('timestamp', 'desc'),
        limit(1000),
    );

    const snapshot = await getDocs(q);

    // Counts how many replies each node has
    snapshot.forEach((doc) => {
        const message = doc.data();
        const cur = answers.value.get(message.edge_id) || {
            count: 0,
            from: message.parent,
            to: message.next,
            label: message.label,
            timestamps: [],
            uids: [],
        };

        answers.value.set(message.edge_id, {
            ...cur,
            count: cur.count + 1,
            timestamps: cur.timestamps.concat(message.timestamp),
            uids: cur.uids.concat(message.uid),
        });
    });
}

//fetchConversations();

</script>


<style scoped>
.cont {
    background-color: #f2f2f2;
    width: 100%;
    min-height: calc(100%);
    gap: 3rem;
    padding: 2rem 0 0 0;
    display: flex;
    flex-direction: column;
}

.cont-row {
    width: 95%;
    margin: 0 auto;
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

.card-title {
    font-weight: 400;
    padding: 0 0 0.5rem 0.2rem;
}
</style>


<!--
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

//const answers = [
//    32,
//    8, 16, 6, 2,
//    8, 14, 9, 1, 0,
//    4, 6, 4, 18,
//    8,
//];


//function nextSelected(id) {
//    selected.value = id;
//    //title.value = nodes.find((n) => n.id === Number(selected.value)).label;
//
//    labels.value.splice(0);
//    amounts.value.splice(0);
//    next.value.clear();
//
//    edges.forEach((e, i) => {
//        let node_id = Number(selected.value) || 0;
//
//        if (e.from === node_id) {
//            if (!e.label) {
//                nextSelected(e.to);
//                return;
//            }
//
//            labels.value.push(e.label);
//            amounts.value.push(answers.value.get(e.id) || 0);
//            next.value.add(e.to);
//        }
//    });
//
//    numOfAnswers.value = amounts.value.reduce((a, b) => a + b, 0);
//}
//const selected = ref(0);
//const title = ref('');
//const numOfAnswers = ref(0);
//const labels = ref([]);
//const amounts = ref([]);
//const next = ref(new Set());
-->
<template>
    <div class="treeview">
        <svg width="100%" height="100%">
            <g :transform="`translate(${prevTransform.x},${prevTransform.y}) scale(${prevTransform.k})`">
                <!--
                <g transform="translate(0,0) scale(1)">
                <g transform="" {`translate(${prevTransform.x},${prevTransform.y}) scale(${prevTransform.k})`}>
                <g className="edges"></g>
                <g className="nodes"></g>
                <g className="hover-cont"></g>
                -->
            </g>
        </svg>
    </div>
</template>


<script setup>
import { onBeforeUnmount, onDeactivated, onMounted, onUnmounted, ref } from "@vue/runtime-core";
import * as d3 from "d3";


const emit = defineEmits(['selected']);
const props = defineProps(['selected', 'nodes', 'edges']);

const prevTransform = ref(
    JSON.parse(localStorage.getItem('treeview-transform')) ||
    {
    x: 0,
    y: 0,
    k: 1,
});

onBeforeUnmount(function() {
    localStorage.setItem('treeview-transform', JSON.stringify(prevTransform.value));
});

onMounted(function() {
    const svg = d3.select('.treeview')
        .select('svg');
        //.append("svg")
        //.attr("width", 460)
        //.attr("height", 380);

    const content = svg.select('g');
    //    .call(d3.zoom().on("zoom", function (a, b) {
    //        console.log(a, b);
    //       //svg.attr("transform", d3.event.transform);
    //    }))
    //    .append("g");

    const zoom = d3.zoom()
        .scaleExtent([0.02, 2])
        .filter((e) => !e.ctrlKey && !e.shiftKey)
        .on('zoom', (event) => {
            prevTransform.value = {
                x: event.transform.x,
                y: event.transform.y,
                k: event.transform.k,
            };
            //.x = event.transform.x;
            //prevTransform.value.y = event.transform.y;
            //prevTransform.value.k = event.transform.k;
            content.attr('transform', event.transform);
        });

    svg.call(zoom)
        .call(zoom.transform,
            d3.zoomIdentity
                .translate(prevTransform.value.x, prevTransform.value.y)
                .scale(prevTransform.value.k))
        .on("dblclick.zoom", null);

    const size = 32;
    const width = 4;
    const height = 1;

    content.selectAll('line')
        .data(props.edges)
        .join('line')
        .attr('x1', (d) => {
            const node = props.nodes.find((n) => n.id === d.from);
            return node.pos.x * size + (width / 2) * size;
        })
        .attr('y1', (d) => {
            const node = props.nodes.find((n) => n.id === d.from);
            return node.pos.y * size + height * size;
        })
        .attr('x2', (d) => {
            const node = props.nodes.find((n) => n.id === d.to);
            return node.pos.x * size + (width / 2) * size;
        })
        .attr('y2', (d) => {
            const node = props.nodes.find((n) => n.id === d.to);
            return node.pos.y * size;
        })
        .attr('stroke', '#444444')
        .attr('stroke-width', 2)

    const messages = content.selectAll('g')
        .data(props.nodes)
        .join('g');
    
    messages.append('rect')
        .attr('fill', 'white')
        .attr('stroke', (d) => d.id === props.selected ? '#cc4444' : '#444444')
        .attr('stroke-width', 1)
        .attr('width', width * size)
        .attr('height', height * size)
        .attr('rx', 6)
        .attr('x', (d) => d.pos.x * size)
        .attr('y', (d) => d.pos.y * size)
        .attr('cursor', 'pointer')
        .on('click', (e, d) => {
            emit('selected', d.id);
        });

    messages.append('text')
        .attr('fill', 'black')
        .attr('x', (d) => d.pos.x * size + size / 4)
        .attr('y', (d) => d.pos.y * size + (height * size) / 2 + size / 16)
        .attr('font-size', '7px')
        .attr('pointer-events', 'none')
        .text((d) => d.label.length > 30 ? `${d.label.substr(0, 30)}...` : d.label);
});
</script>


<style scoped>
.treeview {
    width: 100%;
    height: 100%;
    /*
    Inner white shadow
    box-shadow: black 0 0 4px 4px;
    */
}
</style>
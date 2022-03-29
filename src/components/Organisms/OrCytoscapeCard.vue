<template>
  <div class="graph-container">
    <cytoscape
      ref="cy"
      class="cy-graph"
      :preConfig="preConfig"
      :config="config"
      :afterCreated="afterCreated"
    >
      <cy-element
        v-for="element in elements"
        :definition="element"
        :key="`${element.data.id}`"
      />
    </cytoscape>
  </div>
</template>

<script>
import klay from 'cytoscape-klay';

const generateNodes = ({ amount }) =>
  Array.from({ length: amount }).map((_, index) => ({
    group: 'nodes',
    data: {
      id: `node-${index}`,
    },
  }));

const generateEdgesFromNodes = nodes =>
  nodes.slice(1, nodes.length).map((node, index) => ({
    group: 'edges',
    data: {
      id: `${node.data.id}-${index + 1}`,
      source: node.data.id,
      target: `node-0`,
    },
  }));

export default {
  name: 'CytoscapeGraph',
  props: {
    msg: String,
  },
  computed: {
    cyInstance() {
      return this.$refs.cy.instance;
    },
    elements() {
      const nodes = generateNodes({ amount: 10 });
      const edges = generateEdgesFromNodes(nodes);
      return [...nodes, ...edges];
    },
    config() {
      return {
        style: [
          {
            selector: 'node',
            style: {
              shape: 'hexagon',
              'background-color': 'red',
              label: 'data(id)',
            },
          },
        ],
        layout: {
          name: 'klay',
        },
      };
    },
  },
  methods: {
    preConfig(cytoscape) {
      cytoscape.use(klay);
    },

    async afterCreated(cy) {
      await this.$nextTick();

      this.cyInstance.makeLayout({ name: 'klay' }).run();
    },
  },
};
</script>
<style lang="scss">
#cytoscape-div {
  height: 100% !important;
  min-height: unset !important;
}

.graph-container {
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.cy-graph {
  width: 100%;
  height: 100%;
  background: lightblue;
  border: 1px solid red;
  display: block;
}
</style>

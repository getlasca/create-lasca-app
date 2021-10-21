<template lang="lasca">
  <lasca component="component_1"></lasca>
</template>

<script>
export default {
  data() {
    return {
      items: [1],
    };
  },
  methods: {
    add: function () {
      this.items.push(this.items.length == 0 ? 1 : Math.max(...this.items) + 1);
    },
    remove: function (index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<style>
.dummy {
  color: red;
}
</style>

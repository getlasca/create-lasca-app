<template lang="lasca">
  <lasca component="component_1"></lasca>
</template>

<script>
export default {
  data() {
    return {
      count: 10,
      valid: true,
      items: [
        { id: 1, count: 1 },
        { id: 2, count: 2 },
      ],
    };
  },
  methods: {
    click: function ($event) {
      this.count++;
    },
    handle: function ($event) {
      console.log("handle");
    },
  },
};
</script>

<style>
.dummy {
  color: red;
}
</style>

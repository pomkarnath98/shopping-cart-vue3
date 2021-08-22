<template>
  <div class="w-11/12 m-8 bg-white shadow-lg rounded p-10 text-left">
    <div class="flex justify-around mb-3">
      <b>{{ singleitem.name }}</b>
      <b>In Cart: {{ singleitem.quantity }}</b>
      <b>Total Cost: ₹{{ item_cost.toFixed(2) }}</b>
    </div>

    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ["singleitem"],
  computed: {
    item_cost() {
      return this.singleitem.price * this.singleitem.quantity;
    },
    description() {
      return this.singleitem.description.substring(0, 150);
    },
  },
};
</script>

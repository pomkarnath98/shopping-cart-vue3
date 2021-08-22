<template>
  <div class="w-10/12 m-5 p-5 rounded bg-white shadow-lg">
    <h3>{{ singleItem.name }}</h3>
    <p class="text-gray-500 mt-1">{{ singleItem.category }}</p>
    <h5 class="text-gray-500 mt-2">
      Price: ₹{{ singleItem.price.toFixed(2) }}
    </h5>
    <p class="text-sm mt-2">{{ description }}</p>
    <button
      @click="$emit('view-item', singleItem)"
      class="px-3 py-1 mt-2 bg-blue-700 border-0 text-white font-bold text-lg rounded cursor-pointer"
    >
      View Item
    </button>
  </div>
</template>

<script>
export default {
  props: ["singleItem"],
  computed: {
    description() {
      return this.singleItem.description.substring(0, 150);
    },
  },
};
</script>

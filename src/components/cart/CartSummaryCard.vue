<template>
  <div class="w-5/12 flex items-center justify-around m-8 bg-white shadow-lg rounded p-10">
    <b>Cart Total: ₹{{ cart_total.toFixed(2) }}</b>
    <button
      disabled
      class="bg-blue-500 text-white border-0 p-2 rounded cursor-not-allowed"
    >
      Pay Now
      <div class="text-xs text-red-200">Coming Soon</div>
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    cart_total() {
      return this.$store.getters.cartTotal;
    },
  },
};
</script>

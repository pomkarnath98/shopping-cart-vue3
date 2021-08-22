<template>
  <div
    class="mt-10 flex flex-col justify-center items-center inset-x-0 text-center"
  >
    <b>Your Cart</b>
    <CartDataCard
      v-for="singleitem in items"
      :key="singleitem.id"
      :singleitem="singleitem"
      class="my-5 max-w-2xl"
    />
    <CartSummaryCard />
  </div>
</template>

<script>
import CartDataCard from "../components/cart/CartDataCard.vue";
import CartSummaryCard from "../components/cart/CartSummaryCard.vue";

export default {
  components: {
    CartDataCard,
    CartSummaryCard,
  },
  computed: {
    items() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>

<template>
  <div
    class="w-full h-screen fixed left-0 top-0 bg-gray-200 opacity-90 z-20 hidden"
    :class="{ showdraw: active }"
  >
    <div
      class="w-10/12 h-screen bg-white fixed top-0 -left-72 p-10 overflow-y-scroll"
      :class="{ showclosebtn: active }"
    >
      <div
        class="text-2xl p-3 rounded right-6 border-2 border-gray-500 w-15 float-right cursor-pointer hover:bg-gray-400"
        @click="$emit('close-drawer')"
      >
        X
      </div>
    <div class="flex flex-col mt-28 justify-center" v-if="item">
      <h3 class="text-center">{{ item.name }}</h3>
      <p class="p-14 leading-6">{{ item.description }}</p>
      <h3 class="text-center">₹{{ item.price.toFixed(2) }}</h3>

      <div class="cart-total" v-if="item_total">
        <h3>In Cart</h3>
        <h4>{{ item_total }}</h4>
      </div>

      <div class="mt-3">
        <button
          class="bg-blue-500 text-white border-0 p-5 rounded mx-3 mt-0 mb-40 cursor-pointer"
          @click="removeFromCart()"
        >
          Remove
        </button>
        <button
          class="bg-blue-500 text-white border-0 p-5 rounded mx-3 mt-0 mb-40 cursor-pointer"
          @click="addToCart()"
        >
          Add
        </button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "active"],
  methods: {
    addToCart() {
      this.$store.commit('addToCart', this.item)
    },
    removeFromCart() {
      this.$store.commit('removeFromCart', this.item)
    }
  },
  computed: {
    item_total() {
      return this.$store.getters.itemQuantity(this.item);
    },
  },
};
</script>

<style scoped>
.showdraw {
  display: block;
}
.showclosebtn {
  left: 0;
}
</style>

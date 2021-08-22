<template>
  <div class="p-5 w-full h-30 bg-gray-200 border-b fixed z-10">
    <router-link
      class="font-bold text-gray-700 mx-2 my-0 text-xl no-underline"
      to="/"
    >
      Home
    </router-link>
    <router-link
      class="font-bold text-gray-700 mx-2 my-0 text-xl no-underline"
      to="/cart"
    >
      Cart
    </router-link>
  </div>
  <router-view class="absolute top-12" />
</template>

<script>
export default {
  mounted() {
    this.$store.commit("cartUpdateFromLocalStorage");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>

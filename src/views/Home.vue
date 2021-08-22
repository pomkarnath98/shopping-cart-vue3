<template>
  <div>
    <div class="flex flex-wrap justify-center">
      <ItemDescriptionDrawer
        :item="shoppingitem"
        :active="isOpen.itemDrawer"
        v-on:close-drawer="closeDrawer()"
      />
      <ItemSummaryCard
        v-for="singleItem in items"
        :key="singleItem.id"
        v-on:view-item="viewItem($event)"
        :singleItem="singleItem"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import items from "../data/items";
import ItemSummaryCard from "../components/products/ItemSummaryCard.vue";
import ItemDescriptionDrawer from "../components/products/ItemDescriptionDrawer.vue";

export default {
  name: "Home",
  components: {
    ItemSummaryCard,
    ItemDescriptionDrawer
  },
  data() {
    return {
      items: items,
      shoppingitem: null,
      isOpen: {
        itemDrawer: false
      }
    };
  },
  methods: {
    viewItem(item) {
      this.shoppingitem = item
      this.isOpen.itemDrawer = true
    },
    closeDrawer() {
      this.isOpen.itemDrawer = false
    }
  }
};
</script>

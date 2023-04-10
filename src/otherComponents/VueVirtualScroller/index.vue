<template>
  <div class="main-container">
    <DynamicScroller class="scroller" :min-item-size="54" :items="list" :item-size="30" key-field="index"
      v-slot="{ item }">
      <div class="user">
        {{ item.index + 1 }} -- {{ item.name }}
      </div>
      <!-- <template v-slot="{ item }">
        <div class="user">
          {{ item.index + 1 }} -- {{ item.name }}
        </div>
      </template> -->
    </DynamicScroller>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
}
</script>

<style scoped>
/* .main-container {
  height: 200px;
} */

.scroller {
  height: 300px;
  overflow: scroll;
}

.user {
  height: 30px;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>
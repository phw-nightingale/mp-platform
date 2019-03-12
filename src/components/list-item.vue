<template>
  <div v-if="" class="item-container-1">
    <section class="item-l">

    </section>
    <section class="item-r">

    </section>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        item: {}
      }
    }

  };
</script>

<style scoped>
  .item-container-1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-container-2 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheLists",
});
</script>

<template>
  <div class="lists">
    <h3 class="lists__title">Production Cost List</h3>
    <div class="lists__item" v-for="i in 10" :key="i">
      <div class="lists__property">
        <p class="lists__property-title">ID</p>
        <p class="lists__property-value">1</p>
      </div>
      <div class="lists__property">
        <p class="lists__property-title">Production Quantity</p>
        <p class="lists__property-value">40</p>
      </div>
      <div class="lists__property">
        <p class="lists__property-title">Fixed Cost</p>
        <p class="lists__property-value">6000</p>
      </div>
      <div class="lists__property">
        <p class="lists__property-title">Variable Cost</p>
        <p class="lists__property-value">4000</p>
      </div>
      <div class="lists__property">
        <p class="lists__property-title">Total Cost</p>
        <p class="lists__property-value">4000</p>
      </div>
      <div class="lists__property">
        <p class="lists__property-title">Marginal Cost</p>
        <p class="lists__property-value">4000</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lists {
  width: 100%;
  &__item {
    background-color: tomato;
    display: grid;
    padding: 0 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    border-radius: 0.5rem;
    color: whitesmoke;
    box-shadow: 3px 3px 5px 6px rgba($color: #000000, $alpha: 0.2);

    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }

  &__property-title {
    font-size: 1.5rem;
  }

  &__property-value {
    font-size: 1.8rem;
  }
}
</style>

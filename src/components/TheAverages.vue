<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { fetchAverages } from "@/api";
import { Averages } from "@/typings";

export default defineComponent({
  name: "TheAverages",
  setup() {
    const avg = ref<Averages | null>(null);
    onMounted(async () => {
      const { data, error } = await fetchAverages();
      if (error) {
        console.log(error);
        return;
      }

      avg.value = data;
    });

    return { avg };
  },
});
</script>

<template>
  <div class="averages">
    <h3 class="averages__title">Current Averages</h3>
    <div class="averages__box">
      <div class="averages__card">
        <p class="averages__card-title">Avg Fixed Cost</p>
        <p class="averages__card-number">{{ avg?.avgFixedCost }}</p>
      </div>
      <div class="averages__card">
        <p class="averages__card-title">Avg Variable Cost</p>
        <p class="averages__card-number">{{ avg?.avgTotalCost }}</p>
      </div>
      <div class="averages__card">
        <p class="averages__card-title">Avg Total Cost</p>
        <p class="averages__card-number">{{ avg?.avgVariableCost }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.averages {
  &__box {
    display: grid;
    grid-template-rows: minmax(10rem, max-content);
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
  }

  &__card {
    padding: 0rem 2rem;
    background-color: palevioletred;
    border-radius: 0.5rem;
    box-shadow: 3px 3px 5px 6px rgba($color: #000000, $alpha: 0.2);
  }

  &__card-title {
    font-size: 1.5rem;
    color: whitesmoke;
  }

  &__card-number {
    text-align: center;
    color: white;
    font-weight: 500;
    font-size: 1rem;
  }
}
</style>

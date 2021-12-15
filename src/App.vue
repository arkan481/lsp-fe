<script lang="ts">
import { defineComponent, ref } from "vue";
import { insertPc } from "@/api";
import { CreatePc } from "@/typings";
import TheAverages from "./components/TheAverages.vue";
import TheLists from "./components/TheLists.vue";

export default defineComponent({
  name: "App",
  components: {
    TheAverages,
    TheLists,
  },
  setup() {
    const err = ref<string | null>(null);
    const loading = ref<boolean>(false);
    const pq = ref<number>(0);
    const vc = ref<number>(0);
    const fc = ref<number>(0);

    const postPc = async () => {
      loading.value = true;
      const pc: CreatePc = {
        fixedCost: fc.value,
        productionQuantity: pq.value,
        variableCost: vc.value,
      };
      const { data, error } = await insertPc(pc);
      loading.value = false;
      if (error) {
        err.value = error;
        console.log(err.value);
        return;
      }

      console.log(data);
    };

    return {
      pq,
      vc,
      fc,
      postPc,
    };
  },
});
</script>

<template>
  <div class="main">
    <section class="section-input">
      <form action="#" class="form-create" @submit.prevent="postPc">
        <h2 class="form-create__title">Insert Production Cost</h2>
        <div class="form-create__forms-box">
          <input
            v-model="pq"
            type="number"
            class="form-create__form"
            placeholder="Production Quantity"
          />
          <input
            v-model="vc"
            type="number"
            class="form-create__form"
            placeholder="Variable Cost"
          />
          <input
            v-model="fc"
            type="number"
            class="form-create__form"
            placeholder="Fixed Cost"
          />
        </div>
        <input type="submit" value="Submit" class="form-create__submit" />
      </form>
    </section>
    <section class="section-averages">
      <the-averages />
    </section>
    <section class="section-lists">
      <the-lists />
    </section>
  </div>
</template>

<style lang="scss">
.main {
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;

  .section-input {
    .form-create {
      width: 100%;

      &__forms-box {
        width: 100%;
        display: grid;
        grid-template-rows: 3rem 3rem;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
      }

      &__form {
        padding: 0 1rem;
        border-radius: 0.5rem;
      }

      &__submit {
        margin-top: 2rem;
        width: 100%;
        height: 3rem;
      }
    }
  }

  .section-averages {
    margin-bottom: 3rem;
  }
}
</style>

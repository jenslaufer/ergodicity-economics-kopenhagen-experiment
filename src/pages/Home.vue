<template>
  <div class="flex flex-col items-center justify-center">
    <div class="max-w-3xl min-w-xl sm:px-6 lg:px-8">
      <h1 class="text-brand1 text-4xl font-bold text-center mt-5 mb-8">EE Economics: The Kopenhagen Experiment</h1>
      <teach title="Teach Additive Dymamic" v-if="step === 0" />
      <play-additive v-else-if="step === 1" />
      <teach title="Teach Multiplicative Dymamic" v-else-if="step === 2" />
      <play-multiplicative v-else-if="step === 3" />
      <results v-else-if="step === 4" />
      <div class="flex justify-center">
        <button @click="nextStep" v-if="step < 4"
          class="mt-10 px-6 py-3 bg-brand1 text-brand0 font-semibold rounded hover:bg-gray-800 transition-colors duration-200">Next
          >>></button>
      </div>
    </div>
    <app-footer
      component-style="text- text-gray-600 hover:text-gray-800  transition-colors duration-200 font-medium underline"
      class="fixed bottom-0 left-0 m-3" text="&copy; by Solytics — explore our extensions or get your own built by us."
      url="https://www.solytics.de/#/chrome_extension" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import PlayAdditive from "./PlayAdditive.vue";
import PlayMultiplicative from "./PlayMultiplicative.vue";
import Teach from "./Teach.vue";
import Results from "./Results.vue";

const step = ref(0)

const nextStep = () => {
  step.value += 1;
};
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="max-w-3xl min-w-xl sm:px-6 lg:px-8">
      <h1 class="text-brand1 text-4xl font-bold text-center mt-5">EE Economics: The Kopenhagen Experiment</h1>
      <p class="text-brand text-xl font-normal text-center mt-8">The Kopenhagen experiment explores the fundamental
        assumptions of ergodicity in economic systems, challenging the traditional economic models that assume ensemble
        averages equal time averages.</p>
      <p class="text-brand text-xl font-normal text-center mt-1">The goal of this project is to provide an online
        version to the public.</p>
      <p class="text-brand text-xl font-semibold text-center mt-3">Please be patient until it's ready...</p>
      <teach-additive v-if="step === 0" />
      <play-additive v-else-if="step === 1" />
      <teach-multiplicative v-else-if="step === 2" />
      <play-multiplicative v-else-if="step === 3" />
      <results v-else-if="step === 4" />
      <button @click="nextStep" v-if="step < 4"
        class="mt-10 px-6 py-3 bg-brand1 text-brand0 font-semibold rounded hover:bg-gray-800 transition-colors duration-200">Next
        >>></button>
    </div>
    <app-footer
      component-style="text- text-gray-600 hover:text-gray-800  transition-colors duration-200 font-medium underline"
      class="fixed bottom-0 left-0 m-3" text="&copy; by Solytics — explore our extensions or get your own built by us."
      url="https://www.solytics.de/#/chrome_extension" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TeachAdditive from "./TeachAdditive.vue";
import PlayAdditive from "./PlayAdditive.vue";
import PlayMultiplicative from "./PlayMultiplicative.vue";
import TeachMultiplicative from "./TeachMultiplicative.vue";
import Results from "./Results.vue";

const step = ref(8)

const nextStep = () => {
  step.value += 1;
};
</script>

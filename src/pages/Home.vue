<template>
  <div class="flex flex-col items-center justify-center">
    <div class="max-w-xl min-w-xl sm:px-6 lg:px-8">
      <div v-if="step === 0">
        <h1 class="text-3xl font-bold text-center mt-5 mb-8">Welcome to the gambling experiment!</h1>
        <h2 class="text-2xl font-semibold text-center mt-5 mb-8">First you learn which images are best for your wealth
        </h2>
      </div>
      <training title="Train Additive Dymamics" v-if="step === 0" />
      <play title="Play Multiplicative Dymamics" v-else-if="step === 1" />
      <training title="Train Multiplicative Dymamics" v-else-if="step === 2" />
      <play title="Play Multiplicative Dymamics" v-else-if="step === 3" />
      <results v-else-if="step === 4" />
      <div class="flex justify-center">
        <button @click="nextStep" v-if="step < 4"
          class="mt-10 px-6 py-3 bg-red-500 text-brand0 font-semibold rounded hover:bg-red-800 transition-colors duration-200">Press
          here to start</button>
      </div>
    </div>
    <app-footer
      component-style="text- text-gray-600 hover:text-gray-800  transition-colors duration-200 font-medium underline"
      class="fixed bottom-0 left-0 m-3" text="&copy; by Solytics GmbH" url="https://www.solytics.de/#/" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Play from "./Play.vue";
import Training from "./Training.vue";
import Results from "./Results.vue";
import { AppFooter } from "@solytics/vue-footer-widgets";

const props = defineProps({
  multiplicativeOutcomes: {
    type: Object,
    required: true
  },
  additiveOutcomes: {
    type: Object,
    required: true
  },
});


const step = ref(0)

const nextStep = () => {
  step.value += 1;
};
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="max-w-xl min-w-xl sm:px-6 lg:px-8">
      <instruction v-if="step === 0" title="Welcome to the gambling experiment!" button-text="Press here to start"
        @submit="nextStep" subtitle="First you learn which images are best for your wealth" body="" />
      <training title="Train Multiplicative Dymamics" v-if="step === 1" :outcomes="multiplicativeOutcomes"
        @submit="nextStep" />
      <play title="Play" v-else-if="step === 2" :outcomes="multiplicativeOutcomes" @submit="nextStep" />
      <training title="Train" v-else-if="step === 3" :outcomes="additiveOutcomes" @submit="nextStep" />
      <play title="Play" v-else-if="step === 4" :outcomes="additiveOutcomes" @submit="nextStep" />
      <results v-else-if="step === 4" />

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
import Instruction from "./Instruction.vue";
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

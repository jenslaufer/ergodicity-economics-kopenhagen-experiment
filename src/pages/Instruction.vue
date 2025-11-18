<template>
    <h1 class="text-3xl font-bold text-center mt-5 mb-8">{{ title }}</h1>
    <h2 class="text-2xl font-semibold text-center mt-5 mb-8">{{ subtitle }}
    </h2>
    <p class="text-xl font-semibold text-center mt-3">{{ body }}</p>
    <div class="flex justify-center">
        <button @click="emitEvent"
            class="mt-10 px-6 py-3 bg-red-500 text-brand0 font-semibold rounded hover:bg-red-800 transition-colors duration-200">{{
                buttonText
            }}</button>
    </div>
</template>
<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: false,
        default: ''
    },
    body: {
        type: String,
        required: false,
        default: ''
    },
    buttonText: {
        type: String,
        required: false,
        default: 'Continue'
    },
});
const EVENT = 'submit';
const emit = defineEmits([EVENT]);

const emitEvent = (eventName) => {
    emit(EVENT);
};
</script>
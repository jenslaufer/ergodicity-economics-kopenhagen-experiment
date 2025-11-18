<template>
    <h2 class="text-2xl font-bold text-center">{{ title }}</h2>
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
        required: true,
    },
    outcomes: {
        type: Object,
        required: true,
    },
    dynamic: {
        //@TODO fix type
        type: String,
        required: true,
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
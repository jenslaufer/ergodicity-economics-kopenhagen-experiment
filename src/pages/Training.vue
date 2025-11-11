<template>
    <h2 class="text-brand1 text-2xl font-bold text-center">{{ title }}</h2>
</template>
<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    }
});
</script>
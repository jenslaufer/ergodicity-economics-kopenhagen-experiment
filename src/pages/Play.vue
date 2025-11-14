<template>
    <h2 class="text-2xl font-bold text-center">{{ title }}</h2>
</template>
<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }

});
</script>
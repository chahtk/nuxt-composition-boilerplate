<template>
    <div>
        <span>props : {{ props.text }}, slot: </span>
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    text: {
        type: String,
        default: 'default text',
    },
});
</script>

<style lang="scss" scoped></style>

<template>
    <div>
        <span>
            <slot></slot>
        </span>
        <span>props : {{ props.text }}</span>
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

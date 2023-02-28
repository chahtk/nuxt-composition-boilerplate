<template>
    <div>
        <button @click="onClickPlusButton">+</button>
        <span>{{ number }}</span>
        <button @click="onClickMinusButton">-</button>
    </div>
</template>

<!-- 인디 스타일 -->
<script lang="ts">
import { ref, defineComponent } from 'vue';

const counter = () => {
    const number = ref(1);

    const onClickPlusButton = () => {
        number.value++;
    };

    const onClickMinusButton = () => {
        number.value--;
    };

    return {
        number,
        onClickPlusButton,
        onClickMinusButton,
    };
};

export default defineComponent({
    name: 'TestIndie',
    setup() {
        return {
            ...counter(),
        };
    },
    mounted() {
        console.log('[test-indide] mounted');
    },
});
</script>

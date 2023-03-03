<template>
    <div>
        <h2>composition-counter</h2>
        <article>
            <button @click="onClickPlusButton">+</button>
            <span>{{ number }}</span>
            <button @click="onClickMinusButton">-</button>
        </article>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

/**
 * 외부 파일로 만들어 여러 컴포넌트에서 사용 가능!!
 */
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
    name: 'CompositionCounter',
    props: {},
    setup() {
        onMounted(() => {
            console.log('[counter] mounted');
        });
        return {
            ...counter(),
            // ...counter2(),
            // ...counter3()
        };
    },
});
</script>

<style lang="scss" scoped>
div {
    padding: 20px 0;
    background-color: beige;
}
</style>

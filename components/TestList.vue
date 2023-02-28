<template>
    <div>
        <div id="counter">
            <button @click="onClickPlusButton">+</button>
            <span>{{ number }}</span>
            <button @click="onClickMinusButton">-</button>
        </div>
        <div id="children">
            <test-item :text="props1">child1</test-item>
            <test-item>child2</test-item>
        </div>
    </div>
</template>

<!-- <script setup> 장점 : https://mine-it-record.tistory.com/640 -->
<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const number = ref(1);

// props
const props1 = '123';

const onClickPlusButton = () => {
    number.value++;
};

const onClickMinusButton = () => {
    number.value--;
};

onMounted(() => {
    console.log('mounted!');
});
</script>

<style lang="scss" scoped>
#counter {
    background-color: beige;
    border: 1px solid gray;
}
#children {
    & > * {
        margin: 10px 0;
    }
}
</style>

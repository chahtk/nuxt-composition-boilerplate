<template>
    <div>
        <div id="counter">
            <button @click="onClickPlusButton">+</button>
            <span>{{ number }}</span>
            <button @click="onClickMinusButton">-</button>
        </div>
        <div id="children">
            <TestItem :text="props1">test props</TestItem>
            <TestItem>test default props value</TestItem>
        </div>
    </div>
</template>

<!-- <script setup> 장점 : https://mine-it-record.tistory.com/640 -->
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import TestItem from './TestItem.vue';

const number = ref(1);

// props
const props1 = 'props text';

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

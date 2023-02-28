<template>
    <div>
        <div id="children">
            <TestItem :text="props1">test props</TestItem>
            <TestItem>test default props value</TestItem>
            <test-indie></test-indie>
        </div>
    </div>
</template>

<!-- <script setup> 장점 : https://mine-it-record.tistory.com/640 -->
<script lang="ts" setup>
import { onMounted } from 'vue';
import TestItem from './TestItem.vue';
import TestIndie from './TestIndie.vue';

// props
const props1 = 'props text';

onMounted(() => {
    console.log('mounted!');
});
</script>

<style lang="scss" scoped>
#children {
    & > * {
        margin: 10px 0;
    }
}
</style>

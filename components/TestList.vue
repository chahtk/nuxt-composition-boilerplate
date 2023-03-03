<template>
    <div>
        <div id="children">
            <composition-base></composition-base>
            <composition-counter></composition-counter>
            <no-composition></no-composition>
        </div>
    </div>
</template>

<!-- <script setup> 장점 : https://mine-it-record.tistory.com/640 -->
<script lang="ts" setup>
import { onMounted } from 'vue';
import CompositionBase from './CompositionBase.vue';
import CompositionCounterVue from './CompositionCounter.vue';
import NoCompositionVue from './NoComposition.vue';

onMounted(() => {
    console.log('mounted!');
});
</script>

<style lang="scss" scoped>
section {
    margin-bottom: 50px;
}
</style>

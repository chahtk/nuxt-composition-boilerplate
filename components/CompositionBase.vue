<template>
    <div>
        <h2>composition-base</h2>
        <!-- (1) -->
        <section>
            no reactive :
            <button @click="noReactiveHandler">add</button>
            <span>
                {{ noReactive }}
            </span>
        </section>
        <!-- (2) -->
        <section>
            reactive :
            <button @click="reactiveHandler">add</button>
            <span>
                {{ reactive }}
            </span>
        </section>
    </div>
</template>

<!-- 인디 스타일 -->
<script lang="ts">
import {
    ref,
    defineComponent,
    watch,
    onMounted,
    onUpdated,
    onUnmounted,
} from 'vue';

export default defineComponent({
    name: 'CompositionBase',
    props: {
        text: {
            type: String,
            default: 'default prop',
        },
    },
    setup() {
        // (1) 반응형 X
        let noReactive = '0';
        const noReactiveHandler = () => {
            noReactive += '1';
        };

        // (2) 반응형 데이터
        const reactive = ref('0');
        const reactiveHandler = () => {
            reactive.value += '1';
        };
        // watch 사용
        const stopWatch = watch(reactive, () => {
            console.log('reactive changed!');
        });
        // watch stop
        // stopWatch();

        // (3) lifecycle
        onMounted(() => {
            console.log('mounted in setup()');
        });
        onUnmounted(() => {
            console.log('unmounted');
        });
        // 리렌더링이 일어날때마다 동작
        onUpdated(() => {
            console.log('updated');
        });

        return {
            noReactive,
            noReactiveHandler,
            reactive,
            reactiveHandler,
        };
    },
    // 기존 방식으로도 사용 가능. 둘 다 호출됨.
    mounted() {
        console.log('[test-indide] mounted');
    },
});
</script>

<style lang="scss" scoped>
div {
    padding: 20px 0;
    background-color: blanchedalmond;
}
</style>

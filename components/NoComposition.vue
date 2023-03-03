<template>
    <div>
        <h2>no-composition</h2>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'NoComposition',
})
export default class extends Vue {
    protected number = 1;
    protected number2 = 2;
    protected number3 = 3;

    protected onClickPlusButton(): void {
        this.number++;
    }

    protected onClickMinusButton(): void {
        this.number--;
    }

    protected onClickPlusButton2(): void {
        this.number++;
    }

    protected onClickMinusButton2(): void {
        this.number--;
    }

    protected onClickPlusButton3(): void {
        this.number++;
    }

    protected onClickMinusButton3(): void {
        this.number--;
    }
}
</script>

<style scoped>
div {
    padding: 20px 0;
    background-color: gainsboro;
}
</style>

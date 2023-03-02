<template>
    <div>
        <h1>this is 'MAKE FORM' page.</h1>
        <section>
            <textarea
                id="textarea"
                :value="textarea"
                cols="30"
                rows="10"
                @input="onInputTextarea"
            ></textarea>
        </section>
        <section>
            <button id="make-form-btn" @click="onClickMakeFormBtn">
                make form
            </button>
        </section>
        <section id="form">
            <h2>result</h2>
            <article></article>
        </section>
        <section>
            <button id="save-btn">save</button>
        </section>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const textarea = ref('');

const isPrimitive = (value: any): boolean => {
    if (
        value === null ||
        typeof value === 'number' ||
        typeof value === 'string' ||
        typeof value === 'boolean'
    ) {
        return true;
    }

    return false;
};

/**
 * [key]:value 형태를 [key]:type 형태로 바꿔 리턴하는 재귀 함수.
 * 1. 오브젝트를 받고 현재 단계에서 첫 번째 뎁스의 키값들을 순회한다.
 * 2. value가 원시값(number, string, boolean, null)라면 재귀하지 않고 값을 삽입한다.
 * 3-1. value가 array일 때 첫 번째 값이 원시값이라면 Array<원시타입>으로 끝낸다.
 * 3-2. value가 array일 때 첫 번째 값이 array거나 object라면 각 value로 재귀한다.
 * 4. value가 object라면 각 키 값으로 재귀한다.
 */

const arrayRecursiveMaker = (array: Array<any>): any => {
    if (isPrimitive(array[0])) {
        return array;
    }
    return array.map((item) => {
        if (Array.isArray(array[0])) {
            return arrayRecursiveMaker(item);
        }
        return makeForm(item);
    });
};

const makeForm = (json: any): any => {
    const form: { [key: string]: any } = {};

    Object.keys(json).forEach((key) => {
        // (1) 다중 배열 때문에 콜백함수로 전환 필요할 것으로 보임
        const value = json[key];
        if (isPrimitive(value)) {
            form[key] = value;
            return;
        }

        // (2) 배열 처리
        if (Array.isArray(value)) {
            // case1 : 원시값
            if (isPrimitive(value[0])) {
                form[key] = value;
                return;
            }

            // 이중 배열일 때 처리 필요
            if (Array.isArray(value[0])) {
                form[key] = value.map((item) => arrayRecursiveMaker(item));
                return;
            }

            // object >> [{}, {}, {}]
            form[key] = Object.keys(value).map((object) => makeForm(object));
            return;
        }

        // (3) object 처리 >> { "a": 2, "b": 3}
        form[key] = makeForm(value);
    });

    return form;
};

const onInputTextarea = (e: Event) => {
    const target = e.target as HTMLTextAreaElement;
    textarea.value = target.value;
};

const onClickMakeFormBtn = () => {
    try {
        // const json = JSON.parse(textarea.value);

        // test data
        const json = {
            // a: 1,
            // b: 'str',
            // c: null,
            // d: [1, 2, 3],
            // f: { a: 'b', c: [1, 2, 3], e: { f: 'e' } },
            e: [[8, 100], [22]],
            q: [
                [
                    [9, 2],
                    [5, 5],
                ],
                [1, 2],
            ],
        };

        const res = makeForm(json);
        console.log(res);
    } catch {
        alert('not json value');
    }
};
</script>

<style lang="scss" scoped>
section {
    margin: 20px 0;
}
</style>

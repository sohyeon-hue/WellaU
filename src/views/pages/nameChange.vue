<template>
    <div class="content-wrapper">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <p class="content-text-info">변경할 이름을 입력해주세요.</p>
                <MaxInput v-model:value="maxValue" :maxlength="maxlength" :placeholder="maxInputPlaceholder" @input="maxInputEvent" @enterEv="maxInputEnterEvent" />
                <div class="btn-set">
                    <a-button type="primary" class="wellau-btn" :disabled="disabled" @click="modalOpen">이름 변경</a-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'

    const maxValue = ref("");
    const maxlength = ref(6);
    const maxInputPlaceholder = ref("이름");
    const maxInputEvent = ()=>{}
    const maxInputEnterEvent = ()=>{}

</script>
<style type="scss" scoped>
</style>
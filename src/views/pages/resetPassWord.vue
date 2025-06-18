<template>
    <div class="content-wrapper">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="title-wrappper">
                    <h2 class="title">{{title}}</h2>
                </div>
                <p class="content-text-info">{{infoText}}</p>
                <a-input-password v-model:value="textFieldPw" class="wellau-input" placeholder="신규 비밀번호" />
                <a-input-password v-model:value="textFieldCheckedPw" class="wellau-input" placeholder="신규 비밀번호 혹인" />
                <div class="btn-set">
                    <a-button type="primary" class="wellau-btn" :disabled="disabled">변경하기</a-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'

    const title = ref("비밀번호 재설정")
    const infoText = ref("신규 비밀번호를 입력해 주세요")
    const textFieldPw = ref("")
    const textFieldCheckedPw = ref("")
    const disabled = ref(true)
</script>
<style type="scss" scoped>
</style>
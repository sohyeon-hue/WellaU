<template>
    <div class="content-wrapper">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <p  class="content-text-info">{{infoText}}</p>
                <a-input v-model:value="textFieldPhone" class="wellau-input" placeholder="휴대폰 번호" />
                <div class="btn-set">
                    <a-button type="primary" class="wellau-btn" :disabled="disabled" @click="nextPage">전송하기</a-button>
                </div>
                <div class="btn-info-text-both">
                    인증 코드를 전송합니다.
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const infoText = ref("휴대폰 번호를 입력해주세요.");
    const textFieldPhone = ref("");
    const disabled = ref(false);
    const router = useRouter();
    const nextPage = ()=>{
        router.push('/joinPhoneCheck');
    }
</script>
<style type="scss" scoped>
</style>
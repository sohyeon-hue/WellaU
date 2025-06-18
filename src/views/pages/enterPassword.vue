<template>
    <div class="content-wrapper">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="title-wrappper">
                    <h2 class="title" v-html="title"></h2>
                </div>

                <p  class="content-text-info">{{infoText}}</p>
                <a-input v-model:value="textFieldPhone" class="wellau-input" placeholder="휴대폰 번호" />
                <a-input-password v-model:value="textFieldPw" class="wellau-input" placeholder="비밀번호" />
                <div class="btn-set">
                    <a-button type="primary" class="wellau-btn" :disabled="disabled" @click="nextPage">계속하기</a-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const title = ref("Well;aU 로그인 시 사용할​<br />비밀번호을 등록해주세요.");
    const infoText = ref("비밀번호를 입력해주세요.");
    const textFieldPhone = ref("");
    const textFieldPw = ref("");
    const disabled = ref(false);
    const router = useRouter();
    const nextPage = ()=>{
        router.push('/enterProfile');
    }
</script>
<style type="scss" scoped>
</style>
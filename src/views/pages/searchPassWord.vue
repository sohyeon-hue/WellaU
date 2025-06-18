<template>
    <div class="content-wrapper">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="title-wrappper">
                    <h2 class="title">{{title}}</h2>
                </div>
                <p  class="content-text-info">{{infoText}}</p>
                <a-input v-model:value="textFieldName" class="wellau-input" placeholder="이름" :allowClear="true" />
                <a-input v-model:value="textFieldId" class="wellau-input" placeholder="휴대폰 번호" :allowClear="true" />
                <div class="btn-set">
                    <a-button type="primary" class="wellau-btn" :disabled="disabled" @click="modalOpen">전송</a-button>
                </div>
            </div>
        </div>

        <a-modal modal v-model:open="ModalShow" title="" class="wellau-modal">
            <p class="modal-title">등록한 이름 또는 휴대폰 번호가 일치하지 않습니다.</p>
            <p class="modal-content">등록정보 확인 및 비밀번호 재설정 실패 관련 안내는 02-2057-2678로 문의 바랍니다. </p>
            <template #footer>
                <a-button class="width100per wellau-btn" @click="modalClose">확인</a-button>
            </template>
        </a-modal>        
    </div>
</template>
<script setup>
    import { ref } from 'vue'

    const title = ref("비밀번호 재설정");
    const infoText = ref("문자 인증을 위한 계정 정보를 입력해주세요");
    const textFieldName = ref("");
    const textFieldId = ref("");
    const disabled = ref(false);

    const ModalShow = ref(false);

    const modalOpen = ()=>{
        ModalShow.value = true;
    }
    const modalClose = ()=>{
        ModalShow.value = false;
    }

</script>
<style type="scss" scoped>
    .submit-bt-style{
        margin-top:40rem;
    }
</style>
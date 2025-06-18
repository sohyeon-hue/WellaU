<template>
    <div class="content-wrapper">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <a-input v-model:value="textFieldPhoneEnter" class="wellau-input" disabled placeholder="휴대폰 번호" />
                <div class="check-code-input-box"><!-- 241211 disabled 시 disabled 클래스 추가해 주세요 -->
                    <MaxInput v-model:value="maxValue" :maxlength="maxlength" :placeholder="maxInputPlaceholder" :disabled="false" @input="maxInputEvent" @enterEv="maxInputEnterEvent" />
                    <span>{{time.m}}분 {{time.s}}초</span>
                </div>
                <div class="btn-set">
                    <a-button class="wellau-btn" :disabled="disabled" @click="modalOpen(0)">인증번호 재 발송</a-button>
                    <a-button type="primary" class="wellau-btn" @click="modalOpen(1)" :disabled="disabled">그룹 지우기</a-button>
                </div>
            </div>
        </div>
        
        <!-- moadl -->
        <a-modal modal v-model:open="ModalShow" title="" class="wellau-modal">
            <p class="modal-content" v-html="popMsg">
            </p>
            <template #footer>
                <a-button class="width100per" @click="modalClose">확인</a-button>
            </template>
        </a-modal>
        
    </div>
</template>
<script setup>
    import { ref } from 'vue'

    const textFieldPhoneEnter = ref("010-0000-0000");
    const maxValue = ref("");
    const maxlength = ref(6);
    const maxInputPlaceholder = ref("인증번호 입력​");
    const maxInputEvent = ()=>{}
    const maxInputEnterEvent = ()=>{}
    const disabled = ref(false);
    const time = ref({
                m : 3,
                s : 0,
    })

    const ModalShow = ref(false);

    const modalOpen = (index)=>{
        const msg =['입력한 휴대폰으로 인증번호를 재 발송하였습니다.<br />휴대폰을 확인해주세요.','그룹이 삭제되었습니다.']
        popMsg.value = msg[index]
        ModalShow.value = true;
    }
    const modalClose = ()=>{
        ModalShow.value = false;
    }

    const popMsg = ref("");

</script>
<style type="scss" scoped>
</style>
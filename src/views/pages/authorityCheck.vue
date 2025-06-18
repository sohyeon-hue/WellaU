<template>
    <div class="content-wrapper onePage">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="title-wrappper">
                    <h2 class="title" v-html="title"></h2>
                </div>
                <div class="icon-title-info-box icon-map">
                    <div class="con">
                        <div class="tit">위치 권한(필수)</div>
                        <div class="info">위치 권한은 그룹 내 위치 공유, 안심존 알림, 근접 알림에 필요해요.</div>
                    </div>
                </div>
                <div class="icon-title-info-box icon-bell">
                    <div class="con">
                        <div class="tit">알림 권한(필수)</div>
                        <div class="info">알림 권한은 안심존 알림, 근접 알림. SOS, 비활동 감시 기능에 필요해요.</div>
                    </div>
                </div>
                <div class="icon-title-info-box icon-img">
                    <div class="con">
                        <div class="tit">저장소 접근권한(선택)</div>
                        <div class="info">저장소 권한은 프로필 사진 등록에 필요해요. </div>
                    </div>
                </div>
                <div class="icon-title-info-box icon-camera">
                    <div class="con">
                        <div class="tit">카메라 접근권한(선택)</div>
                        <div class="info">카메라 권한은 프로필 사진 등록에 필요해요.</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn-set">
            <a-button type="primary" class="wellau-btn" :disabled="disabled" @click="click">권한허용</a-button>
        </div>
    </div>

    <a-modal v-model:open="ModalShow" title="" class="wellau-modal" style="width:240rem;">
        <p class="modal-title align-center">권한 허용</p>
        <p class="modal-content">
            WellaU를 이용하기 위해서 <br />
            필수 권한이 필요해요. <br />
            앱 설정 > 권한에서 필수 권한을  <br />
            허용으로 선택해주세요.
        </p>
        <template #footer>
            <div class="btn-set horizontal">
                <a-button @click="modalClose">설정으로 이동</a-button>
            </div>
        </template>
    </a-modal>
</template>
<script setup>
    import { ref } from 'vue'

    const title = ref("WellaU를 사용하기 위해서<br />다음와 같은 권한이 필요해요.");
    const disabled = ref(false);

    const ModalShow = ref(false);
    const modalClose = ()=>{ModalShow.value = false}

    const click = ()=>{
        ModalShow.value = true;
    }
</script>
<style type="scss" scoped>
</style>
<template>
    <div class="content-wrapper onePage">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="menu-list-value-input">
                    <div class="menu" @click="gotoMenu('/locationSharingStatus')">위치 공유 상태 보기</div>
                    <div class="menu" @click="gotoMenu('/')">그룹 초대 하기</div>
                    <div class="menu" @click="gotoMenu('/createSafezone')">안심존 설정</div>
                    <div class="menu" @click="gotoMenu('/inactiveSensing')">비활동 감지 기능 설정</div>
                    <div class="menu" @click="gotoMenu('/batteryAlert')">배터리 부족 알림 설정</div>
                    <div class="menu" @click="gotoMenu('/sosSetting')">SOS 설정</div>
                    <div class="menu" @click="leaveGroup">그룹 나가기</div>
                </div>
            </div>
        </div>
        
        <!-- moadl -->
        <a-modal modal v-model:open="ModalShow" title="" class="wellau-modal">
            <p class="modal-content">
                {{msg[type]}}
            </p>
            <template #footer>
                <div class="btn-set horizontal">
                    <a-button class="width100per" @click="modalClose">{{type === 0 ? '취소' : '확인'}}</a-button>
                    <a-button class="width100per" @click="leaveCheckGroup" v-if="type === 0">나가기</a-button>
                </div>
            </template>
        </a-modal>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const msg = ref(["정말로 [그룹1] 을 나가시겠습니까?","[그룹1] 에서 나가셨습니다."])
    const type = ref(0);
    const router = useRouter();
    const gotoMenu = (path)=>{
        router.push(path);
    }
    const leaveGroup = ()=>{
        type.value = 0;
        ModalShow.value = true;
    }
    const ModalShow = ref(false);
    const modalClose = ()=>{
        ModalShow.value = false;
        setTimeout(()=>{
            if(type.value === 1) type.value = 0;
        },500)
    }
    const leaveCheckGroup = ()=>{
        ModalShow.value = false;
        setTimeout(()=>{
            type.value = 1;
            ModalShow.value = true;
            
        },500)
    }
</script>
<style type="scss" scoped>
</style>
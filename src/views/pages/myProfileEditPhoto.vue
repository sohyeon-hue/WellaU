<template>
    <div class="content-wrapper onePage">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="profile-phto-box">
                    <div class="photo">
                        <div class="circle">
                            <img :src="img.src" :alt="img.alt" v-if="img.src !== null && img.src !== ''" />
                        </div>
                        <CameraIcon @click="editPhoto"></CameraIcon><!-- 241212 : 아이콘 수정 -->
                    </div>
                    <div class="name">
                        홍길동<i class="edit-icon" @click="editName"></i>
                    </div>
                </div>
                <div class="myProfile-info-box">
                    <div class="title-both-line">
                        계정 세부 정보
                    </div>
                    <div class="link-box-area-arrow" @click="gotoMenu('/phoneChangeCheck')">
                        <div class="tit">휴대폰</div>
                        <div class="info">010-0000-1111</div>
                    </div>
                    <div class="link-box-area-arrow" @click="gotoMenu('/enterProfile')">
                        <div class="tit">생년월일</div>
                        <div class="info">2000-01-01</div>
                    </div>
                    <div class="link-box-area-arrow" @click="gotoMenu('/searchPassWord')">
                        <div class="tit">비밀번호 변경</div>
                        <div class="info">********</div>
                    </div>
                    <div class="title-both-line">
                        알림 설정
                    </div>
                    <div class="list-input-box">
                        <div class="tit">서비스 알림 받기</div>
                        <div class="input">
                            <a-switch v-model:checked="serviceAlert" class="wellau-switch big-size" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn-set">
            <a-button class="wellau-btn" @click="btnClick">탈퇴하기</a-button>
        </div>
    </div>
    <!-- 사진 선택 팝업 -->
    <a-modal v-model:open="ModalShow" title="" class="wellau-modal">
        <p class="modal-title">프로필 등록</p>
        <div class="btn-set selectMode">
            <a-button :type="btnType ? 'primary' : ''" @click="popBtnClick">카메라</a-button>
            <a-button :type="btnType ? '' : 'primary'" @click="popBtnClick">사진선택</a-button>
        </div>
        <template #footer>
            <div class="btn-set horizontal">
                <a-button @click="modalClose">확인</a-button>
            </div>
        </template>
    </a-modal>
    <!-- 회원탈퇴 팝업 -->
    <a-modal v-model:open="ModalMemberShow" title="" class="wellau-modal">
        <p class="modal-title center">회원탈퇴</p>
        <p class="modal-content">정말 WellaU를 탈퇴하시겠습니까?</p>
        <template #footer>
            <div class="btn-set horizontal">
                <a-button @click="modalMemberClose">취소</a-button>
                <a-button @click="modalMemberCloseOut">탈퇴</a-button>
            </div>
        </template>
    </a-modal>
    <!-- 회원탈퇴 팝업 -->
    <a-modal v-model:open="ModalMemberShow2" title="" class="wellau-modal">
        <p class="modal-title center">회원탈퇴</p>
        <p class="modal-content">그룹장을 다른사람에게 넘긴 후 탈퇴 하실 수 있습니다.</p>
        <template #footer>
            <div class="btn-set horizontal">
                <a-button @click="modalMemberClose2">확인</a-button>
            </div>
        </template>
    </a-modal>

</template>
<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import CameraIcon from '@components/CameraIcon' // 241212 : 추가

    const router = useRouter();

    const img = ref({
        // src : require('@img/dummy-profile01.jpeg'),
        // alt : '홍길동님의 프로필 사진입니다'
        src : null
    })

    const editPhoto = ()=>{
        ModalShow.value = true;
    }
    const editName = ()=>{
         router.push('/nameChange')
    }

    const serviceAlert = ref(true)

    const btnClick = ()=>{
        ModalMemberShow.value = true;
    }


    const ModalShow = ref(false);
    const modalClose = ()=>{ModalShow.value = false}
    const btnType = ref(true);
    const popBtnClick = ()=>{
        btnType.value = !btnType.value;
    }
    const ModalMemberShow = ref(false);
    const modalMemberClose = ()=>{ModalMemberShow.value = false}
    const modalMemberCloseOut = ()=>{
        ModalMemberShow.value = false;
        setTimeout(()=>{
            ModalMemberShow2.value = true;
        },250)
    }

    const ModalMemberShow2 = ref(false);
    const modalMemberClose2 = ()=>{ModalMemberShow2.value = false}

    const gotoMenu = (path)=>{
        router.push(path)
    }
</script>
<style type="scss" scoped>
</style>
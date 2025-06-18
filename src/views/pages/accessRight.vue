<template>
    <div class="content-wrapper full">
        <div class="content-scroll">
            <div class="mapArea dummy-back">
                <div class="map-fixed-btn">
                    <button class="mapBtn"></button>
                    <button class="sosBtn"></button>
                </div>
            </div>
        </div>
        <BothBar>
            <template #content>
                <div class="bothbar-wrapper">
                    <div class="both-bar-area">
                        <ProfileBox name="홍길동" conText="서울시 용산동 갈월동" time="13분전" :battery="60" king birthday :img="img1" :bg="true"></ProfileBox>
                    </div>
                    <div class="both-bar-area">
                        <!-- <ProfileBox name="김응삼" conText="서울시 용산동 갈월동" time="13분전" :img="img2"></ProfileBox>
                        <ProfileBox name="김은지" conText="서울시 용산동 갈월동" time="13분전" :img="img3"></ProfileBox> -->
                    </div>
                    <a-button class="wellau-btn addGroupPersonBtn">+ 그룹원 추가 하기</a-button><!-- 241212 : 버튼 수정 -->
                </div>
            </template>
        </BothBar>
    </div>

    <a-modal v-model:open="ModalShow" title="" class="wellau-modal" style="width:280rem;">
        <p class="modal-title align-center">위치 권한 허용</p>
        <p class="modal-content">친구들과 위치를 공유하기 위해서 위치권한을 ‘항상허용＇으로 설정해야해요</p>
        <div class="img-dummy">
            <img :src="src" alt="" />
        </div>
        <template #footer>
            <div class="btn-set horizontal">
                <a-button type="primary" class="wellau-btn" @click="modalClose">설정으로 이동</a-button>
            </div>
        </template>
    </a-modal>
</template>
<script setup>
    import {ref} from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter();
    const img1 = ref({
        // src : require('../../assets/img/dummy-profile01.jpeg'),
        src : "",
        alt : '홍길동님의 프로필 사진입니다'
    })

    const ModalShow = ref(true);
    const modalClose = ()=>{
        ModalShow.value = false;
        router.push('/locationSharingStatus');
    }
    const src = require('@img/pop-img-location.png')
</script>
<style type="scss" scoped>
    .dummy-back{
        background:url(@img/dummy-map.png) no-repeat center;
    }
    .addGroupPersonBtn{
        margin-bottom:20rem;
    }
</style>
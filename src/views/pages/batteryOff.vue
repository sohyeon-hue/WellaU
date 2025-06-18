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
                        <ProfileBox name="홍길동" conText="서울시 용산동 갈월동" time="13분전" :img="img1" :bg="true"></ProfileBox>
                    </div>
                    <div class="both-bar-area">
                    </div>
                    <a-button class="wellau-btn addGroupPersonBtn">+ 그룹원 추가 하기</a-button><!-- 241212 : 버튼 수정 -->
                </div>
            </template>
        </BothBar>
    </div>

    <a-modal v-model:open="ModalShow" title="" class="wellau-modal">
        <p class="modal-title">배터리 최적화 끄기</p>
        <p class="modal-content">백그라운드에서 위치 공유를 하기 위해서 배터리 최적화를 꺼야해요</p>
        <template #footer>
            <div class="btn-set horizontal">
                <a-button @click="modalClose">변경</a-button>
            </div>
        </template>
    </a-modal>
</template>
<script setup>
    import {ref} from 'vue'

    const img1 = ref({
        src : require('../../assets/img/dummy-profile01.jpeg'),
        alt : '홍길동님의 프로필 사진입니다'
    })

    const ModalShow = ref(true);
    const modalClose = ()=>{ModalShow.value = false}
</script>
<style type="scss" scoped>
    .dummy-back{
        background:url(@img/dummy-map.png) no-repeat center;
    }
    .addGroupPersonBtn{
        margin-bottom:20rem;
    }
</style>
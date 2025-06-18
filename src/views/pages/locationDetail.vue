<template>
    <div class="content-wrapper full">
        <div class="content-scroll">
            <div class="mapArea dummy-back">
                <MapPin pinText="이" pinColor="blue" :photo="photo" style="position:absolute; top:10%; right:10%;" />
                <MapPin pinText="홍" pinColor="blue" :photo="photo" :width="60" style="position:absolute; top:50%; left:50%;" />
                <MapPin pinText="이" pinColor="blue" :width="70" style="position:absolute; top:30%; left:20%;" />
                <MapPin pinText="홍" pinColor="blue" :width="70" style="position:absolute; bottom:15%; left:10%;" />
                <div class="map-fixed-btn">
                    <button class="mapBtn"></button>
                    <!-- <button class="sosBtn"></button> -->
                </div>
            </div>
        </div>
        <div class="both-area-box">
            <div class="both-area-box-scroll">
                <ProfileBox name="홍길동" conText="서울시 용산동 갈월동" time="13분전" :img="img1" :battery="Math.floor(Math.random() * 100)" by2 king></ProfileBox>
                <div class="btn-set horizontal sb" style="padding-bottom:20rem;">
                    <IconButtonBox icon="tell" @click="modalOpen" />
                    <IconButtonBox icon="text" @click="modalOpen" />
                    <IconButtonBox icon="sharing" @click="modalOpen" />
                    <IconButtonBox icon="record" @click="iconButtonBoxClick" />
                </div>
            </div>
        </div>
    </div>
    <!-- moadl -->
    <a-modal modal v-model:open="ModalShow" title="" class="wellau-modal">
        <p class="modal-content">
            친구들에게 위치를 공유할 수 있어요.<br />
            <span style="color:red">내 위치는 1시간 동안 공유됩니다!</span>
        </p>
        <template #footer>
            <div class="btn-set horizontal">
                <a-button class="width100per" @click="modalClose">취소</a-button>
                <a-button class="width100per" @click="modalBtnLocation">위치공유</a-button>
            </div>
        </template>
    </a-modal>
</template>
<script setup>
    import {ref} from 'vue'

    const photo = ref({
        // src : require('../../assets/img/dummy-profile01.jpeg'),
        src : "",
        alt : '홍길동님의 프로필 사진입니다'
    })

    const img1 = ref({
        // src : require('@img/dummy-profile01.jpeg'),
        src : "",
        alt : '홍길동님의 프로필 사진입니다'
    })

    const iconButtonBoxClick = (icon)=>{
        console.log("icon : ",icon)
    }



    const ModalShow = ref(false);

    const modalOpen = ()=>{
        ModalShow.value = true;
    }
    const modalClose = ()=>{
        ModalShow.value = false;
    }
    const modalBtnLocation = ()=>{
        ModalShow.value = false;
    }
</script>
<style type="scss" scoped>
    .dummy-back{
        background:url(@img/dummy-map.png) no-repeat center;
    }
    .addGroupPersonBtn{
        margin-bottom:20rem;
    }
</style>
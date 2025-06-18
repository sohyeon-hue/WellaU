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
                        <ProfileBox name="홍길동" conText="서울시 용산동 갈월동" time="13분전" :img="img1"></ProfileBox>
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
</template>
<script setup>
    import {ref} from 'vue'

    const img1 = ref({
        src : require('../../assets/img/dummy-profile01.jpeg'),
        alt : '홍길동님의 프로필 사진입니다'
    })

</script>
<style type="scss" scoped>
    .dummy-back{
        background:url(@img/dummy-map.png) no-repeat center;
    }
    .addGroupPersonBtn{
        margin-bottom:20rem;
    }
</style>
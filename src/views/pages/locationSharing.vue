<template>
    <div class="content-wrapper full">
        <div class="content-scroll">
            <div class="mapArea dummy-back">
                <div class="locationSharingTimer">
                    <i><ClockCircleOutlined /></i>
                    <p>{{time.m}}:{{time.s}}</p>
                </div>
                <MapPin type="pie" :photo="photo" :per="40" style="position:absolute; top:50%; left:50%;" />
            </div>
        </div>
        <div class="both-area-box">
            <div class="both-area-box-scroll">
                <ProfileBox name="홍길동" conText="서울시 용산동 갈월동" :img="img1">
                    <template #rightArea>
                        <a-button class="wellau-btn">WellaU 설치</a-button>
                    </template>
                </ProfileBox>
            </div>
        </div>
    </div>
</template>
<script setup>
    import {ref} from 'vue'
    import { ClockCircleOutlined } from '@ant-design/icons-vue'

    const photo = ref({
        src : require('../../assets/img/dummy-profile01.jpeg'),
        alt : '홍길동님의 프로필 사진입니다'
    })

    const img1 = ref({
        src : require('@img/dummy-profile01.jpeg'),
        alt : '홍길동님의 프로필 사진입니다'
    })
    const time = ref({m:59,s:10})
</script>
<style type="scss" scoped>
    .dummy-back{
        background:url(@img/dummy-map.png) no-repeat center;
    }
    .addGroupPersonBtn{
        margin-bottom:20rem;
    }
</style>
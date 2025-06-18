<template>
    <div class="content-wrapper full">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="setting-box-top">
                    <div class="top">
                        <div class="title-info-style">
                            <div class="l">
                                <div class="tit">비활동 감지 기능 설정</div>
                                <div class="info">사용자가 <span class="color-blue">하루동안</span> 일정거리 이상 이동하지 않을 경우 그룹원에게 푸시가 발송돼요.</div><!-- 241212 : 수정 -->
                            </div>
                            <div class="r"><a-switch v-model:checked="sensingSwitch" class="wellau-switch big-size" /></div>
                        </div>
                    </div>
                    <div class="both">
                        <div class="title-info-style">
                            <div class="l">
                                <div class="tit">전체 선택</div>
                            </div>
                            <div class="r"><a-switch v-model:checked="allChecked" class="wellau-switch big-size" @click="allChange" /></div>
                        </div>
                    </div>
                </div>
                <div class="setting-box-scroll">
                    <ProfileBox :name="list.name" :img="list.img" :king="index == 0" v-for="(list,index) in profileList" :key="'profile_' + index">
                        <template #rightArea>
                            <a-switch v-model:checked="list.checked" class="wellau-switch big-size" @change="listRadioChange" />
                        </template>
                    </ProfileBox>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'


    const img1 = ref({
        // src : require('@img/dummy-profile01.jpeg'),
        src : null,
        alt : '홍길동님의 프로필 사진입니다'
    })
    const img2 = ref({
        // src : require('@img/dummy-profile02.jpeg'),
        src : null,
        alt : '김응삼 프로필 사진입니다'
    })
    const img3 = ref({
        // src : require('@img/dummy-profile03.jpeg'),
        src : null,
        alt : '김은지 프로필 사진입니다'
    })

    const profileList = ref([
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
    ])


    const sensingSwitch = ref(false);
    const allChecked = ref(false);

    const allChange = ()=>{
        const checked = allChecked.value ? true : false;
        profileList.value.forEach((l)=>{
            l.checked = checked;
        })
    }
    const listRadioChange = ()=>{
        let checked = true;
        for(let i=0; i<profileList.value.length; i++){
            const listChecked = profileList.value[i].checked;
            if(!listChecked){
                checked = false;
                break;
            }
        }
        allChecked.value = checked;
    }
</script>
<style type="scss" scoped>
</style>
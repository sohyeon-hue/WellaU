<template>
    <div class="content-wrapper full">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="setting-box-scroll">
                    <ProfileBox :name="list.name" :img="list.img" v-for="(list,index) in profileList" :key="'profile_' + index">
                        <template #rightArea>
                                <a-switch class="wellau-switch big-size" v-model:checked="list.checked" /><!-- 241212 : wellau-switch big-size 클래스 추가 -->
                        </template>
                    </ProfileBox>
                </div>
            </div>
        </div>
        <div class="btn-set">
            <a-button class="wellau-btn">+ 대상 등록</a-button>
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

    const profileList = ref([])
    for(let i=0; i<5; i++){
        profileList.value.push(
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
            }
        )
    }
</script>
<style type="scss" scoped>
</style>
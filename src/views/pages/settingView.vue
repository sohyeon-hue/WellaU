<template>
    <div class="content-wrapper onePage">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="menu-list-value-input">
                    <div class="menu" @click="modalOpen">위치 수집 간격<div class="fixed_both">{{locationTime}}</div></div>
                    <div class="menu" @click="modalOpenMap">지도 보기 설정<div class="fixed_both">{{mapSettingText}}</div></div>
                    <div class="menu">오픈소스 라이선스</div>
                    <div class="menu" @click="gotoMenu('/')">이용약관</div>
                    <div class="menu">앱 버전<div class="fixed_both">v1.09.1</div></div>
                </div>
            </div>
        </div>
    </div>

    <!-- modal -->
    <ModalBox v-model:modalShow="modalShow" :padding="0">
        <ListSelectBox v-model:value="listSelectBoxValue" :title="listSelectBoxTitle" :buttonText="listSelectBoxBtnText" :outLine="false" :list="listSelectBoxList" @listClick="listSelectBoxListClick" @btnClick="listSelectBoxBtnClick" />
    </ModalBox>
    <!-- modal -->
    <ModalBox v-model:modalShow="modalShowMap" :padding="0">
        <ListSelectBox v-model:value="listSelectBoxMapValue" :title="listSelectBoxMapTitle" :buttonText="listSelectBoxMapBtnText" :outLine="false" :list="listSelectBoxMapList" @listClick="listSelectBoxMapListClick" @btnClick="listSelectBoxMapBtnClick" />
    </ModalBox>
</template>
<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter();
    const gotoMenu = (path)=>{
        router.push(path);
    }

    const locationTime = ref("10초")
    const locationTimeTemp = ref("10초")

    /* ETC Select */
    const modalShow = ref(false);
    const listSelectBoxValue = ref(locationTime.value)
    const listSelectBoxTitle = ref("위치 수직간격");
    const listSelectBoxBtnText = ref("확인");
    const listSelectBoxList = ref([
        {
            text : "10초(기본)",
            value : "10초",
            checked : true,
        },
        {
            text : "30초",
            value : "30초",
            checked : false,
        },
        {
            text : "1분",
            value : "1분",
            checked : false,
        },
        {
            text : "5분",
            value : "5분",
            checked : false,
        },
    ])
    const listSelectBoxListClick = (val)=>{
        locationTimeTemp.value = val
        // modalShow.value = false;
    }
    const listSelectBoxBtnClick = ()=>{
        locationTime.value = locationTimeTemp.value
        modalShow.value = false;
    }
    const modalOpen = ()=>{
        modalShow.value = true;
    }


    
    const mapSettingText = ref("네이버")
    const mapSettingTextTemp = ref("네이버")
    /* ETC Select */
    const modalShowMap = ref(false);
    const listSelectBoxMapValue = ref(mapSettingText.value)
    const listSelectBoxMapTitle = ref("위치 수직간격");
    const listSelectBoxMapBtnText = ref("확인");
    const listSelectBoxMapList = ref([
        {
            text : "네이버(기본)",
            value : "네이버",
            checked : true,
        },
        {
            text : "구글",
            value : "구글",
            checked : false,
        },
    ])
    const listSelectBoxMapListClick = (val)=>{
        mapSettingTextTemp.value = val
        // modalShow.value = false;
    }
    const listSelectBoxMapBtnClick = ()=>{
        mapSettingText.value = mapSettingTextTemp.value
        modalShowMap.value = false;
    }
    const modalOpenMap = ()=>{
        modalShowMap.value = true;
    }
</script>
<style type="scss" scoped>
</style>
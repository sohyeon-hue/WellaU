<template>
    <div class="content-wrapper full">
        <div class="content-top-area-bopx">
            <div class="mark-time-box">
                <i class="mark-circle">
                    <img :src="img.src" :alt="img.alt" v-if="img.src !== '' && img.src !== null && img.src !== undefined" />
                </i>
                <div class="date">
                    2024년 09월 13일<i></i>
                </div>
                <div class="time">
                    13시<i></i>
                </div>
            </div>
            <!-- <div>
                <VueDatePicker v-model="date" style="height:80rem;" />
            </div> -->
        </div>
        <div class="content-scroll">
            <div class="mapArea dummy-back">
                <MapMarkPin :index="1" :checked="true" style="position:absolute; top:60rem; left: 60rem;" />
                <MapMarkPin :index="2" :checked="false" style="position:absolute; top:140rem; left: 70rem;" />
                <MapMarkPin :index="3" :checked="false" style="position:absolute; top:200rem; left: 73rem;" />
                <MapMarkPin :index="4" :checked="false" style="position:absolute; top:260rem; left: 75rem;" />
                <MapMarkPin :index="5" :checked="false" style="position:absolute; top:330rem; left: 75rem;" />
            </div>
        </div>
        <BothBar :maxHeightDiffer="148">
            <template #content>
                <StepBox :list="stepList" :step="stepStep" />
            </template>
        </BothBar>
    </div>
</template>
<script setup>
    import { ref } from 'vue'

    // const date= ref("");

    const img = ref({
        // src : require('../../assets/img/dummy-profile01.jpeg'),
        // alt : '홍길동님의 프로필 사진입니다'
        src : null,
    })
    const stepStep = ref(1);
    const stepList = ref([
        {
            time : "13:00:32",
            text : "서울시 용산로 한강대로 273(용산빌딩)산빌딩 산빌딩산빌딩산빌딩산빌딩 word-break",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
    ])
</script>
<style type="scss" scoped>
    .dummy-back{
        background:url(@img/dummy-map.png) no-repeat center;
    }
</style>
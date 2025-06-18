<template>
    <div class="content-wrapper onePage">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <p class="content-text-info">근접 알림을 사용할 인원을 선택해주세요.</p>
                <SearchInput v-model:value="textField" :placeholder="placeholder" @input="input" @enter="enter" @searchIcon="searchIcon" />
                <div class="title-info-style" style="margin-top:30rem;">
                    <div class="l">
                        <div class="tit">근접 알림 범위 설정</div>
                        <div class="info">근접 알림 범위는 최대 5km 까지 가능해요.</div>
                    </div>
                </div>
                <div class="slider-box positionNone">
                    <a-slider v-model:value="inputValue1" :min="1" :max="20" :tip-formatter="null" class="wellau-slider" />
                    <div class="unit">
                        <span class="l">1km</span>
                        <span class="r">5km</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'

    const inputValue1 = ref(1);
    const textField = ref("");
    const placeholder = ref("이름");

    const enter = (val)=>{
        console.log("parent enter : ",val)
    }
    const searchIcon = (val)=>{
        console.log("parent searchIcon : ",val)
    }
    const input = (val)=>{
        console.log("parent input : ",val)
    }
</script>
<style type="scss" scoped>
</style>
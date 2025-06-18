<template>
    <div class="content-wrapper full">
        <div class="content-top-area-bopx pt0">
            <MaxInput v-model:value="maxValue" :maxlength="maxlength" :placeholder="maxInputPlaceholder" @input="maxInputEvent" @enterEv="maxInputEnterEvent" />
            <!-- <p class="content-text-info">안심존 실행 시간을 설정해주세요.</p> -->
            <div class="time-picker-area">
                <div class="to">
                    <span class="ampm">오전</span><span class="h">9</span>:<span class="m">00</span>
                </div>
                <i>~</i>
                <div class="from">
                    <span class="ampm">오후</span><span class="h">18</span>:<span class="m">00</span>
                </div>
            </div>
            <div class="btn-set">
                <a-button class="wellau-btn">계속하기</a-button>
            </div>
        </div>
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="mapArea dummy-back">
                    <a-button class="wellau-btn small-size" style="position:absolute; top:10rem; right:10rem;">주소검색</a-button>
                    <div class="slider-box">
                        <a-slider v-model:value="inputValue1" :min="1" :max="20" :tip-formatter="null" class="wellau-slider" />
                        <div class="unit">
                            <span class="l">200m</span>
                            <span class="r">5k</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import {ref} from 'vue'
    // import {FundOutlined,CommentOutlined} from '@ant-design/icons-vue'
    const maxValue = ref("")
    const maxlength = ref(10)
    const maxInputPlaceholder = ref("안심존 이름을 입력해주세요.")
    const maxInputEvent = ()=>{}
    const maxInputEnterEvent = ()=>{}

    const inputValue1 = ref(1);
</script>
<style type="scss" scoped>
    .dummy-back{
        background:url(@img/dummy-map.png) no-repeat center;
    }
    .addGroupPersonBtn{
        margin-bottom:20rem;
    }
</style>
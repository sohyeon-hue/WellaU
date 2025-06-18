<template>
    <div class="content-wrapper full"><!-- 241212 : 수정 -->
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <!-- 241212 : 수정 -->
                <div class="setting-box-top">
                    <div class="top">
                        <p  class="content-text-info">근접 알림을 사용할 인원을 선택해주세요.</p>
                        <SearchInput v-model:value="textField" :placeholder="placeholder" @input="input" @enter="enter" @searchIcon="searchIcon" />
                    </div>
                </div>
                <div class="setting-box-scroll">
                    <div class="title-info-style">
                        <div class="l">
                            <div class="tit">대상</div>
                            <div class="info big">김응삼</div>
                        </div>
                    </div>
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
                <!-- // 241212 : 수정 -->
            </div>
        </div>
        <div class="btn-set horizontal">
            <a-button class="wellau-btn">삭제하기</a-button>
            <a-button type="primary" class="wellau-btn">변경하기</a-button><!-- 241212 : 수정 -->
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'

    const inputValue1 = ref(1);
    const textField = ref("");
    const placeholder = ref("이름");
</script>
<style type="scss" scoped>
</style>
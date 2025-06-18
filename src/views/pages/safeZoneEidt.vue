<template>
    <div class="content-wrapper onePage">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="label-text-box" style="padding-top:20rem;">
                    <dl>
                        <dt>대상</dt>
                        <dd>대상</dd>
                    </dl>
                    <dl>
                        <dt>이름</dt>
                        <dd>집근처</dd>
                    </dl>
                    <dl>
                        <dt>실행 시간</dt>
                        <dd>오전 9:00  -  오후 18:00</dd>
                    </dl>
                    <dl>
                        <dt>실행 장소</dt><!-- 241212 : 텍스트 수정 -->
                        <dd>
                            <img :src="src" alt="map" class="dummy-img" />
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
        <div class="btn-set horizontal">
            <a-button class="wellau-btn" :disabled="disabled">삭제하기</a-button>
            <a-button class="wellau-btn" :disabled="disabled">변경하기</a-button>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'

    const src = ref(require('@img/dummy-map.png'))
</script>
<style type="scss" scoped>
</style>
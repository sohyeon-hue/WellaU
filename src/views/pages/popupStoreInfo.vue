<template>
    <div class="content-wrapper full">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="popup-box-wrapper">
                    <div class="popup-tit">
                        <div class="tit">
                            성수 캠핑가자 팝업
                        </div>
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M19 5.5L5 19.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M19 19.5L5 5.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </i>
                    </div>
                    <p class="popup-content">
                        <span class="popup-content-tit">운영시간</span><br />
                        <span class="popup-content-info">월~일 : 10:30 - 22:00</span><br />
                        <br />
                        캠핑데이POP-UP Coming soon<br />
                        <br />
                        뜨거운 인기와 함께 바캉스를 가는 친구들!<br />
                        선선한 가을바람이 불어올 10월, 더욱 특별한 캠핑이 준비되어 있다고 하는데..!!<br />
                        <br />
                        성수동에서 11월 18일에 만나요!<br />
                        <br />
                        <span class="popup-content-tit">주소</span><br />
                        <span class="popup-content-info">서울시 성동구 아차산로 77길</span>
                    </p>
                    <div class="popup-img-area">
                        <img :src="src" alt="이미지" style="width:100%; height:100%;" />
                        <MapPin pinColor="#076AEB" icon="home" style="position:absolute; top:0; right:0;" /><!-- 241212 : 추가 -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'

    const src = ref(require('@img/dummy-map.png'));
</script>
<style type="scss" scoped>
</style>
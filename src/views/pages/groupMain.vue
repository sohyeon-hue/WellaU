<template>
    <div class="content-wrapper full">
        <div class="content-scroll">
            <div class="mapArea dummy-back">
                <div class="map-fixed-btn">
                    <button class="mapBtn"></button>
                    <button class="sosBtn"></button>
                </div>
            </div>
        </div>
        <BothBar>
            <template #content>
                <div class="bothbar-wrapper">
                    <div class="both-bar-area">
                        <ProfileBox name="홍길동" conText="서울시 용산동 갈월동" time="13분전" :battery="10" king birthday :img="img1" :bg="true"></ProfileBox>
                    </div>
                    <div class="both-bar-area">
                        <ProfileBox name="김응삼" conText="서울시 용산동 갈월동" time="13분전" :img="img2"></ProfileBox>
                        <ProfileBox name="김은지" conText="서울시 용산동 갈월동" time="13분전" :img="img3"></ProfileBox>
                    </div>
                    <a-button class="wellau-btn addGroupPersonBtn">+ 그룹원 추가 하기</a-button><!-- 241212 : 버튼 수정 -->
                </div>
                <div class="bothbar-wrapper bg">
                    <div class="title-info-style">
                        <div class="l">
                            <div class="tit">내 프로필 공개</div>
                            <div class="info">그룹원에게 내 프로필 사진을 공개합니다.  비활성 시 기본 프로필 아이콘이 노출됩니다.</div>
                        </div>
                        <div class="r"><a-switch v-model:checked="checked1" class="wellau-switch big-size" /></div>
                    </div>
                    <div class="title-info-style">
                        <div class="l">
                            <div class="tit">내 연락처 공개</div>
                            <div class="info">그룹원에게 내 연락처를 공개합니다. 비활성 시 그룹장을 제외한 그룹원에게 연락처가 노출되지 않으며 통화연결이 되지 않습니다.</div>
                        </div>
                        <div class="r"><a-switch v-model:checked="checked2" class="wellau-switch big-size" /></div>
                    </div>
                </div>
            </template>
        </BothBar>
    </div>
</template>
<script setup>
    import {ref} from 'vue'
    const checked1 = ref(false);
    const checked2 = ref(false);

    const img1 = ref({
        // src : require('@img/dummy-profile01.jpeg'),
        src : null,
        alt : '홍길동님의 프로필 사진입니다'
    })
    const img2 = ref({
        src : require('@img/dummy-profile02.jpeg'),
        alt : '김응삼 프로필 사진입니다'
    })
    const img3 = ref({
        src : require('@img/dummy-profile03.jpeg'),
        alt : '김은지 프로필 사진입니다'
    })
</script>
<style type="scss" scoped>
    .dummy-back{
        background:url(@img/dummy-map.png) no-repeat center;
    }
    .addGroupPersonBtn{
        margin-bottom:20rem;
    }
</style>
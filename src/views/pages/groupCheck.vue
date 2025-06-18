<template>
    <div class="content-wrapper full">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="content-inner-wrapper-padding">
                    <div class="title-wrappper">
                        <h2 class="title">
                            아래 그룹이 맞나요?<br />
                            입장 전 그룹원들에게 공개할 내 정보를 선택하세요
                        </h2>
                    </div>
                    <div class="label-text-area">
                        <div class="label">그룹명</div>
                        <div class="text">홍길동 가족방</div>
                    </div>
                    <div class="label-text-area">
                        <div class="label">그룹장</div>
                        <div class="text">홍길동</div>
                    </div>
                    <div class="label-img-text-area">
                        <div class="img">
                            <!-- <img :src="require('../../assets/img/dummy-profile01.jpeg')" alt="그룹장 사진입니다." /> -->
                            <span>홍</span>
                        </div>
                    </div>
                </div>
                <div class="blue-bg-box">
                    <div class="title-info-style">
                        <div class="l">
                            <div class="tit">내 프로필 공개</div>
                            <div class="info">그룹원에게 내 프로필 사진을 공개합니다.  비활성 시 기본 프로필 아이콘이 노출됩니다.</div>
                        </div>
                        <div class="r"><a-switch v-model:checked="termsChecked1" class="wellau-switch big-size" /></div>
                    </div>
                    <div class="title-info-style">
                        <div class="l">
                            <div class="tit">내 연락처 공개</div>
                            <div class="info">그룹원에게 내 연락처를 공개합니다. 비활성 시 그룹장을 제외한 그룹원에게 연락처가 노출되지 않으며 통화연결이 되지 않습니다.</div>
                        </div>
                        <div class="r"><a-switch v-model:checked="termsChecked2" class="wellau-switch big-size" /></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn-set">
            <a-button type="primary" class="wellau-btn" :disabled="btnDisabled">참여 완료</a-button>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    const termsChecked1 = ref(false);
    const termsChecked2 = ref(false);
    const btnDisabled = ref(false);
</script>
<style type="scss" scoped>
</style>
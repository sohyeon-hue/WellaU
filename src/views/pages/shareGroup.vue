<template>
    <div class="content-wrapper onePage">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="title-wrappper p0">
                    <h2 class="title">
                        그룹1 을 공유해보세요.
                    </h2>
                </div>
                <div class="shareCodeInfoBox">
                    <CounterBox :angle="60" code="DKE3FE" date="1일 23:36:58" />
                </div>
            </div>
        </div>
        <div class="btn-set">
            <a-button type="primary" class="wellau-btn">코드 공유하기</a-button>
        </div>
    </div>
</template>
<script setup>
    import CounterBox from '@components/CounterBox'
</script>
<style type="scss" scoped></style>
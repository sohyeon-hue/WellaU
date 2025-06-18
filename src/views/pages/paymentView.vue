<template>
    <div class="content-wrapper full">
        <div class="content-scroll flexMode">
            <div class="content-scroll-padding-box">
                <div class="wellau-carousel-box">
                    <a-carousel class="wellau-carousel">
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </a-carousel>
                </div>
                <p class="carousel-box-info">
                7일간 무료체험 이후 자동으로 월 6,900원이 청구됩니다. 
                </p>
            </div>
        </div>
        <div class="btn-set horizontal">
            <a-button type='primary' class="wellau-btn" @click="modalClose">결제하기</a-button>
        </div>
    </div>
</template>
<script setup></script>
<style type="scss" scoped></style>
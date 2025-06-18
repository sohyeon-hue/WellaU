<template>
    <div class="content-wrapper">
        <div class="content-scroll">
            <div class="title-wrappper">
                <h2 class="title">
                    테스트님! 그룹 초대 코드를 입력하여<br />
                    친구들과 위치를 공유해보세요
                </h2>
            </div>
            <p class="content-text-info">{{infoText}}</p>
            <MaxInput v-model:value="inputVal" :maxlength="maxlength" :placeholder="maxInputPlaceholder" @input="maxInputEvent" @enterEv="maxInputEnterEvent" />
            <div class="btn-set">
                <a-button>그룹에 들어가기</a-button>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    const infoText = ref("초대코드를 입력해주세요​");
    const maxlength = ref(6);
    const inputVal =  ref("zzz");
    const maxInputPlaceholder = ref("초대코드");
    const maxInputEvent = ()=>{
        console.log("paretn ev input")
    }
    const maxInputEnterEvent = ()=>{
        console.log("paretn ev enter")

    }
</script>
<style type="scss" scoped>
    .btn-set{
        margin-top:20rem;
    }
</style>
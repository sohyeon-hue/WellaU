<template>
    <div class="content-wrapper onePage">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="joinGroup-img">
                </div>
            </div>
        </div>
        <div class="btn-set">
            <a-button  class="wellau-btn" @click="click">그룹 참여하기</a-button>
            <a-button  class="wellau-btn">새로운 그룹 생성하기</a-button>
        </div>
    </div>
</template>
<script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter();
    const click = ()=>{
        router.push('/joinGroup/invite')
    }
</script>
<style type="scss" scoped>
    .joinGroup-img{
        flex:1;
        width:100%;
        height:100%;
        background:#ddd;
    }
</style>
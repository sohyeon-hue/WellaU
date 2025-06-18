<template>
    <div class="content-wrapper">
        <div class="content-scroll paddingWrapper">
            <div class="content-scroll-padding-box pt20">
                <div>
                    <AlertBox :list="lists" @click="click" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    const click =(data)=>{
        console.log("data : ",data)
    }
    const lists = ref([
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
            icon : "alert",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
            icon : "alert",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
            icon : "alert",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
        },
        {
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            firstName : "김",
            date : "2024/9/11 14:31",
        },
    ])
</script>
<style type="scss" scoped>
</style>
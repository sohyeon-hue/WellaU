<template>
    <div class="safe-zone-list-vbox">
        <i class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 17C18.2091 17 20 15.2091 20 13C20 10.7909 18.2091 9 16 9C13.7909 9 12 10.7909 12 13C12 15.2091 13.7909 17 16 17Z" stroke="#888888" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M26 13C26 22 16 29 16 29C16 29 6 22 6 13C6 10.3478 7.05357 7.8043 8.92893 5.92893C10.8043 4.05357 13.3478 3 16 3C18.6522 3 21.1957 4.05357 23.0711 5.92893C24.9464 7.8043 26 10.3478 26 13V13Z" stroke="#888888" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </i>
        <div class="text">
            <div class="name">{{props.name}}</div>
            <div class="nickname">{{props.nickname}}</div>
            <div class="address">{{props.address}}</div>
        </div>
    </div>
</template>
<script setup>
    import { defineProps } from 'vue'
    const props = defineProps({
        name : {
            type : String,
            default : ()=>{
                return "";
            }
        },
        nickname : {
            type : String,
            default : ()=>{
                return "";
            }
        },
        address : {
            type : String,
            default : ()=>{
                return "";
            }
        }
    })

</script>
<style type="scss" scoped>
    .safe-zone-list-vbox{
        display:flex;
        padding:20rem 0 20rem;
        border-bottom:1px solid #ededed;
        &> .icon{
            display:flex;
            align-items: flex-start;
            font-size:30rem;
        }
        &> .text{
            display:flex;
            flex-direction:column;
            padding:0 0 0 20rem;
            &> .name{
                font-size: 18rem;
                font-style: normal;
                font-weight: 600;
                line-height: 1;
                color:#333;
            }
            &> .nickname{
                font-size: 15rem;
                font-style: normal;
                font-weight: 600;
                line-height: 21.4rem; /* 142.667% */
                color:#076AEB;
            }
            &> .address{
                font-size: 15rem;
                font-style: normal;
                font-weight: 600;
                line-height: 21.4rem; /* 142.667% */
                color:#888;
            }
        }
    }
</style>
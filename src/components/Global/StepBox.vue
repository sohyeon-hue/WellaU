<template>
    <div class="step-box">
        <div class="con">
            <ul>
                <li class="step-box-list" :class="{active:props.step === (index+1)}" v-for="(list,index) in props.list" :key="'list_'+index">
                    <div class="num">
                        <i class="bg-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="37" viewBox="0 0 24 37" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 14.7122 23.1002 17.2143 21.5828 19.224C21.0435 19.9743 20.3144 20.7728 19.5074 21.6567C16.7041 24.7269 12.96 28.8274 12.96 35.52C12.96 36.0502 12.5302 36.48 12 36.48C11.4698 36.48 11.04 36.0502 11.04 35.52C11.04 28.8274 7.2959 24.7269 4.49264 21.6567C3.68558 20.7728 2.9565 19.9744 2.41721 19.224C0.899815 17.2143 0 14.7122 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#076AEB"/>
                            </svg>
                        </i>
                        <span>{{index + 1}}</span>
                    </div>
                    <div class="info-text-box">
                        <span class="s">{{list.time}}</span>
                        <span class="b">{{list.text}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
    import { defineProps } from 'vue'

    const props = defineProps({
        list : {
            type : Array,
            default : ()=>{
                return [];
            }
        },
        step : {
            type : Number,
            default : ()=>{
                return 1;
            }
        }
    })
</script>
<style type="scss" scoped>
    .step-box{
        ul{
            padding:0 20rem;
            margin:0;
            &> li{
                position:relative;
                &:before{
                    content:"";
                    position:absolute;
                    top:0;
                    left:12rem;
                    bottom:0;
                    width:1rem;
                    background:#E4E4E4;
                }
                &:first-child{
                    &:before{
                        top:10rem;
                    }
                }
                &:last-child{
                    &:before{
                        bottom:calc(100% - 50rem);
                    }
                }
            }
        }
    }
    .step-box-list{
        position:relative;
        display:flex;
        align-items:stretch;
        &> .num{
            position:relative;
            top:5rem;
            width:24rem;
            height:24rem;
            border-radius:50%;
            background:#ccc;
            &> span{
                position:absolute;
                left:0;
                right:0;
                bottom:0;
                top:0;
                z-index:10;
                display:flex;
                justify-content:center;
                align-items:center;
                font-family: "Roboto";
                font-size: 13rem;
                font-style: normal;
                font-weight: 400;
                line-height: 1;
                color:#fff;
            }
            &> .bg-icon{
                position:absolute;
                top:0;
                left:0;
                z-index:5;
                display:none;
            }
        }
        &> .info-text-box{
            flex:1;
            padding:4rem 24rem 20rem 0;
            margin:0 0 0 20rem;
            font-size:16rem;
            line-height:1;
            border-bottom:1rem solid #E4E4E4;
            &> .s{
                display:block;
                font-family: "Roboto";
                font-size: 14rem;
                font-style: normal;
                font-weight: 400;
                line-height: 1;
                color:#999;
            }
            &> .b{
                padding:8rem 0 0;
                font-size: 16rem;
                font-style: normal;
                font-weight: 600;
                line-height: 160%; /* 25.6px */
                color:#333;
            }
        }
        &+ .step-box-list{
            padding-top:30rem;
        }
        &.active{
            &> .num{
                background:orange;
                &> .bg-icon{
                    display:block;
                }
            }
            &> .info-text-box{
                &> .s{
                    color:#076AEB;
                }
                &> .b{
                    color:#076AEB;
                }
            }
        }
    }

    .arrow{
        position:absolute;
        /* top:-10rem; */
        left:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        width:30rem;
        height:30rem;
        font-size:25rem;
        transform:translate(-50%,-100%);
    }
</style>
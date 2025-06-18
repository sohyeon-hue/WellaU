<template>
    <div class="content-wrapper manager">
        <!-- lnb -->
        <div class="manager-lnb" :class="[{closed:closed}]">
            <div class="manager-lnb-ham" @click="click">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M5 16H27" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5 8H27" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5 24H27" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="manager-lnb-inner-wrapper">
                <i class="lnb-closed-btn" @click="click">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 5L5 19" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19 19L5 5" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </i>
                <div class="manager-lnb-con">
                    <div class="manager-lnb-list">
                        <ul>
                            <li>사용자 관리</li>
                            <li>공지사항 관리</li>
                            <li>FAQ 관리</li>
                            <li>메뉴1</li>
                        </ul>
                    </div>
                    <div class="manager-lnb-logout">
                        <button class="manager-lnb-logout-btn">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M19.5 8.75H4.5C4.08579 8.75 3.75 9.08579 3.75 9.5V20C3.75 20.4142 4.08579 20.75 4.5 20.75H19.5C19.9142 20.75 20.25 20.4142 20.25 20V9.5C20.25 9.08579 19.9142 8.75 19.5 8.75Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.625 8.75V5.375C8.625 4.47989 8.98058 3.62145 9.61351 2.98851C10.2465 2.35558 11.1049 2 12 2C12.8951 2 13.7535 2.35558 14.3865 2.98851C15.0194 3.62145 15.375 4.47989 15.375 5.375" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </i>
                            로그아웃
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- content -->
        <div class="content-scroll">
            <div class="manager-con-title">
                타이틀 영역
            </div>
            <div class="manager-con-content">
                <!-- scroll이 생기는 영역 -->
                <div class="dummy-box">
                    Grid 영역
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'

    const closed = ref(false);
    const click = ()=>{
        closed.value = !closed.value;
    }
</script>
<style type="scss" scoped>
    .content-wrapper{
        &.manager{
            flex-direction:row;
            align-items:stretch;
            &> *:not(.manager-lnb){
                width:auto;
            }
            &> .content-scroll{
                flex:1;
                flex-direction:column;
            }
        }
    }
    .manager-lnb{
        position:relative;
        z-index:10000; /* 241213 : 추가 */
        width:270rem;
        background:#EFEFEF;
        transition:width ease 0.5s;
        overflow:hidden;
        &.closed{
            width:72rem;
            .manager-lnb-inner-wrapper{
                right:72rem;
            }
        }
    }
    .manager-lnb-ham{
        position:fixed;
        top:12rem;
        left:20rem;
        z-index:100;
        width:32rem;
        height:32rem;
        cursor:pointer;
    }
    .manager-lnb-inner-wrapper{
        position:absolute;
        top:0;
        right:0;
        width:270rem;
        height:100%;
        transition:right ease 0.5s;
        .manager-lnb-con{
            display:flex;
            flex-direction:column;
            width:270rem;
            height:100%;
        }
    }
    .lnb-closed-btn{
        display:none;
    }
    .manager-lnb-list{
        flex:1;
        padding:93rem 25rem 0;
        &> ul{
            &> li{
                display:block;
                padding:12rem 0;
                font-size: 16rem;
                font-style: normal;
                font-weight: 400;
                line-height: 1;
                border-bottom:1rem solid #E8E8E8;
            }
        }
    }
    .manager-lnb-logout-btn{
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
        height:55rem;
        font-size: 18rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 25.2rem */
        color:#222;
        border-width:0;
        border-top: 1rem solid #E7E7E7;
        outline:none;
        cursor:pointer;
        background: #F6F6F6;
        &> i{
            position:relative;
            top:5rem;
            vertical-align:middle;
            padding:0 5rem 0 0;
        }
    }
    .manager-con-title{
        padding:40rem 27rem 22rem 27rem;
        font-size: 30rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1;
    }
    .manager-con-content{
        overflow:auto;
        flex:1;
        padding:0 27rem 25rem 27rem;
    }

    .dummy-box{
        display:flex;
        align-items:center;
        justify-content:center;
        height:100%;
        font-size:30rem;
        font-weight:bold;
        background:#F5F5F7;
    }
    @media screen and (max-width:630px){
        .manager-lnb{
            position:fixed;
            top:0;
            right:0;
            bottom:0;
            left:0;
            width:100%;
            transition:width ease 0.5s;
            background:#fff;
            &.closed{
                width:0;
                .manager-lnb-inner-wrapper{
                    right:0;
                }
            }
        }
        .manager-lnb-inner-wrapper, .manager-lnb-inner-wrapper > .manager-lnb-con{
            width:100vw;
        }
        .lnb-closed-btn{
            position:absolute;
            top:10rem;
            right:20rem;
            display:block;
        }
        .manager-lnb-ham{
            top:6rem;
        }
        .manager-lnb-list{
            margin:44rem 0 0;
            padding:20rem 20rem 0;
            background:#EFEFEF;
            &> ul{
                &> li{
                    display:flex;
                    align-items:center;
                    height:60rem;
                    padding:0 0 0 20rem;
                    font-size: 18rem;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 1;
                    border-bottom:1rem solid #E8E8E8;
                }
            }
        }
        .manager-con-title{
            display:flex;
            align-items:center;
            justify-content:center;
            height:45rem;
            padding:0;
            font-size: 16rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1;
            border-bottom:1rem solid #EAEAEA;
        }
        .manager-con-content{
            padding-top:20rem;
            padding-bottom:20rem;
        }
    }
</style>
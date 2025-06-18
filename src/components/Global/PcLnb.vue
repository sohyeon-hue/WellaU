<template>
    <div id="lnb-pc" :class="{open:props.open}">
        <div class="lnb-content-wrapper">
            <div class="lnb-content">
                <div class="top">
                    <div class="group-name-card" @click.stop="gropClick">
                        {{ props.group }}
                    </div>
                </div>
                <div class="con-wrapper">
                    <div class="content">
                        <div class="profile-box-pc">
                            <div class="top-wrappper">
                                <div class="top">
                                    <ProfileBox :name="person.name" :conText="person.text" :time="person.time" :king="person.king" :birthday="person.birthday" :img="person.img" bg></ProfileBox>
                                </div>
                            </div>
                            <div class="con-wrappper">
                                <div class="con">
                                    <ProfileBox :name="friend.name" :conText="friend.text" :time="friend.time" :king="friend.king" :birthday="friend.birthday" :img="friend.img" v-for="(friend,index) in friends" :key='"profile_"+index'></ProfileBox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="both">
                    <div class="btn-set">
                        <a-button class="wellau-btn" @click="logout">+ 로그아웃</a-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="lnb-thumb-pc" @click="lnbThumbClick">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="61" viewBox="0 0 14 61" fill="none">
                <path d="M0.5 60.5L0.5 0.5H11C12.3807 0.5 13.5 1.61929 13.5 3L13.5 58C13.5 59.3807 12.3807 60.5 11 60.5H0.5Z" fill="white" stroke="#CCCCCC"/>
                <rect x="5" y="23" width="3" height="3" fill="#ADADAD"/>
                <rect x="5" y="29" width="3" height="3" fill="#ADADAD"/>
                <rect x="5" y="35" width="3" height="3" fill="#ADADAD"/>
            </svg>
        </div>
        <button class="mapBtn"></button>
    </div>
</template>
<script setup>
    import { defineProps,defineEmits,defineModel } from 'vue'

    const props = defineProps({
        open : {
            type : Boolean,
            default : ()=>{
                return false;
            }
        },
        group : {
            type : String,
            default : ()=>{
                return "";
            }
        },
        person : {
            type : Object,
            default : ()=>{
                return {
                    name : "",
                    text : "",
                    time : "",
                    king : false,
                    birthday : false,
                    img : {
                        src : "",
                        alt : "",
                    },
                }
            }
        },
        friends : {
            type : Array,
            default : ()=>{
                return [];
            }
        }
    })
    const emits = defineEmits(['gropClick','logout']);
    const model = defineModel("open")
    const lnbThumbClick = ()=>{
        model.value = !model.value;
    }
    const gropClick = ()=>{
        emits("gropClick");
    }
    const logout = ()=>{
        emits("logout");
    }
</script>
<style type="scss" scoped>
    #lnb-pc{
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        z-index:10000;
        width:0;
        transition:width ease .5s;
        box-shadow:0px 4px 20px 0px rgba(0, 0, 0, 0.15);
        background:rgba(255,255,255,0.45);
        &.open{
            width:400rem;
        }
        &> .mapBtn{
            position:absolute;
            left:auto;
            right: -20rem;
            bottom:15rem;
            transform:translate(100%, 0);
        }
        .profileBox-warpper + .profileBox-warpper{
            margin-top:10rem;
        }
    }
    .lnb-content-wrapper{
        position:absolute;
        top:0;
        bottom:0;
        width:100%;
    }
    .lnb-content{
        position:absolute;
        top:0;
        right:0;
        display:flex;
        flex-direction:column;
        width:400rem;
        height:100%;
        overflow:auto;
        background:#fff;
        &> *{
            width:100%;
        }
        &> .top{
            padding:20rem;
        }
        &> .con-wrapper{
            flex:1;
            display:flex;
            overflow:auto;
            &> .content{
                display:flex;
                flex-direction:column;
                flex:1;
                height:100%;
                overflow:auto;
                &> .profile-box-pc{
                    display:flex;
                    flex-direction:column;
                    flex:1;
                    width:100%;
                    overflow:auto;
                    &> *{
                        width:100%;
                    }
                    &> .top-wrappper{
                        padding:10rem 20rem 20rem 20rem;
                        &> .top{
                            padding:0 0 16rem 0;
                            border-bottom:1rem solid #ededed;
                        }
                    }
                    &> .con-wrappper{
                        padding:10rem 20rem;
                        flex:1;
                        overflow:auto;
                    }
                }
            }
        }
        &> .both{
            padding:20rem 20rem 25rem 20rem;
        }
    }
    .lnb-thumb-pc{
        position:absolute;
        top:50%;
        right:0;
        transform:translate(100%,-50%);
        cursor:pointer;
    }
</style>
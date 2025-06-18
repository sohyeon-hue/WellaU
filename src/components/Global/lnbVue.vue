<template>
    <div id="lnb" :class="(props.open) ? 'open' : 'close'">
        <div class="hidden-box">
            <div class="lnb-wrapper">
                <div class="lnb-top">
                    메뉴
                    <button class="lnb-clse-btn" @click="lnbCloseBtClick">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 5.5L5 19.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19 19.5L5 5.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div class="lnb-profile">
                    <div class="l">
                        <div class="picture">
                            <img :src="props.profile.img.src" :alt="props.profile.img.alt" v-if="props.profile.img.src !== null && props.profile.img.src !== false && props.profile.img.src !== ''" />
                        </div>
                        <div class="name">
                            {{props.profile.name}}
                        </div>
                    </div>
                    <div class="r">
                        <button class="profile-edit-btn" @click="gotoMenu('/myProfileEditPhoto')">
                            <i class="icon">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.24219 17.3749H3.75C3.58424 17.3749 3.42527 17.3091 3.30806 17.1919C3.19085 17.0747 3.125 16.9157 3.125 16.7499V13.2577C3.12472 13.1766 3.14044 13.0962 3.17128 13.0211C3.20211 12.946 3.24745 12.8778 3.30469 12.8202L12.6797 3.44524C12.7378 3.38619 12.8072 3.33929 12.8836 3.30728C12.9601 3.27527 13.0421 3.25879 13.125 3.25879C13.2079 3.25879 13.2899 3.27527 13.3664 3.30728C13.4428 3.33929 13.5122 3.38619 13.5703 3.44524L17.0547 6.92962C17.1137 6.98777 17.1606 7.0571 17.1927 7.13355C17.2247 7.21 17.2411 7.29205 17.2411 7.37493C17.2411 7.45781 17.2247 7.53987 17.1927 7.61632C17.1606 7.69277 17.1137 7.76209 17.0547 7.82024L7.67969 17.1952C7.62216 17.2525 7.55391 17.2978 7.47884 17.3287C7.40376 17.3595 7.32335 17.3752 7.24219 17.3749V17.3749Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10.625 5.5L15 9.875" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </i>
                            내정보
                            <i class="arrow">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 4.25L13.75 10.5L7.5 16.75" stroke="#D2D2D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </i>
                        </button>
                    </div>
                </div>
                <div class="lnb-menu">
                    <div class="lnb-menu-top">
                        <div class="menu icon-group" @click="gotoMenu('/groupManagement')">그룹 관리</div>
                        <div class="menu icon-proximity" @click="gotoMenu('/proximityAlertSetting')">근접알림 설정</div>
                    </div>
                    <div class="lnb-menu-both">
                        <div class="menu icon-notice" @click="gotoMenu('/noticeView')">공지사항</div>
                        <div class="menu icon-faq" @click="gotoMenu('/faqView')">FAQ</div>
                        <div class="menu icon-setting" @click="gotoMenu('/settingView')">설정</div>
                    </div>
                </div>
                <div class="lnb-log-out" @click="modalOpen">
                    로그아웃    
                </div>
            </div>
        </div>
    </div>

    <!-- moadl -->
    <a-modal modal v-model:open="ModalShow" title="" class="wellau-modal">
        <p class="modal-content">
            WellaU 서비스를 로그아웃 하시겠습니까?
        </p>
        <template #footer>
            <div class="btn-set horizontal">
                <a-button class="width100per" @click="modalClose">취소</a-button>
                <a-button class="width100per" @click="modalBtnLocation">로그아웃</a-button>
            </div>
        </template>
    </a-modal>
</template>
<script setup>
    import { ref,defineProps,defineModel } from 'vue'
    import { useRouter } from 'vue-router'

    const props = defineProps({
        open : {
            type : Boolean,
            default : ()=>{
                return false;
            }
        },
        profile : {
            type : Object,
            default : ()=>{
                return {
                    name : "",
                    img : {
                        src : null,
                        alt : null,
                    }
                }

            }
        }
    })
    const router = useRouter();
    const model = defineModel("open")


    const lnbCloseBtClick = ()=>{
        model.value = false;
    }
    const gotoMenu = (path)=>{
        lnbCloseBtClick();
        router.push(path);
    }

    const ModalShow = ref(false);

    const modalOpen = ()=>{
        ModalShow.value = true;
    }
    const modalClose = ()=>{
        ModalShow.value = false;
    }
    const modalBtnLocation = ()=>{
        ModalShow.value = false;
    }
</script>
<style type="scss" scoped>
    #lnb{
        position:fixed;
        top:0;
        left:0;
        bottom:0;
        /* right:0; */
        z-index:1000;
        width:0;
        overflow:auto;
        &.open{
            width:100%;
            background:rgba(0,0,0,0.45);
            .hidden-box{
                right:0;
            }        
        }
    }
    .hidden-box{
        position:fixed;
        top:0;
        left:0;
        right:100%;
        bottom:0;
        transition:right ease .5s;
        overflow:hidden;
    }
    .lnb-wrapper{
        position:absolute;
        top:0;
        right:0;
        display:flex;
        flex-direction:column;
        width:100vw;
        height:100%;
        margin:0;
        overflow:auto;
        background:#fff;
    }
    .lnb-top{
        position:relative;
        display:flex;
        align-items:center;
        justify-content:center;
        height:45rem;
        margin:0 0 18rem 0;
        font-size: 17rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 23.8rem */
        color:#000;
        border-bottom:1rem solid #EAEAEA;

    }
    .lnb-profile{
        display:flex;
        align-items:center;
        padding:20rem;
        margin:0 20rem;
        border-radius:8rem;
        background:#F7F7F5;
        &> .l{
            display:flex;
            flex-direction:row;
            align-items:center;
            flex:1;
            width:100%;
            &> .picture{
                width:62rem;
                height:62rem;
                border-radius:50%;
                overflow:hidden;
                background:#5D9CEE url(../../assets/img/lnb_profile_bg.svg) no-repeat center;
                &> img{
                    width:100%;
                    height:100%;
                }
            }
            &> .name{
                flex:1;
                padding:0 0 0 16rem;
                font-size: 24rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                letter-spacing: -1.2rem;
                color:#333;
                display:-webkit-box;
                overflow:hidden;
                text-overflow:ellipsis;
                -webkit-line-clamp:1;
                -webkit-box-orient:vertical;
            }
        }
        &> .r{
            width:100rem;
        }
    }
    .profile-edit-btn{
        display:flex;
        align-items:center;
        font-size: 18rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color:#000;
        border:none;
        background:none;
        &> .icon{
            position:relative;
            top:3rem;
            padding:0 5rem 0 0;
        }
        &> .arrow{
            position:relative;
            top:3rem;
            &> svg{
                margin-left:5rem;
            }
        }
    }
    .lnb-clse-btn{
        position:absolute;
        top:10rem;
        right:12rem;
        font-size:30rem;
        border:none;
        background:transparent;
    }
    .lnb-menu{
        flex:1;
        overflow:auto;
        padding:20rem;
        &> .lnb-menu-top{
            padding:0 0 10rem;
            border-bottom:1rem solid #ededed;
        }
        &> .lnb-menu-both{
            padding:10rem 0 10rem;
            border-bottom:1rem solid #ededed;
        }
        .menu{
            display:flex;
            align-items:center;
            height:60rem;
            padding:0;
            font-size:16rem;
            line-height:1;
            background:url(../../assets/img/lnb_menu_arrow.svg) no-repeat center right;
            &:before{
                content:"";
                display:inline-block;
                width:28rem;
                height:28rem;
                margin:0 20rem 0 0;
                background-size:100% auto;
            }
            &.icon-group{
                &:before{
                    background-image:url(../../assets/img/lnb_icon_group.svg);
                }
            }
            &.icon-proximity{
                &:before{
                    background-image:url(../../assets/img/lnb_icon_proximity.svg);
                }
            }
            &.icon-notice{
                &:before{
                    background-image:url(../../assets/img/lnb_icon_notice.svg);
                }
            }
            &.icon-faq{
                &:before{
                    background-image:url(../../assets/img/lnb_icon_faq.svg);
                }
            }
            &.icon-setting{
                &:before{
                    position:relative;
                    top:2rem;
                    background-image:url(../../assets/img/lnb_icon_setting.svg);
                }
            }
        }
    }
    .lnb-log-out{
        display:flex;
        align-items:center;
        justify-content:center;
        height:55rem;
        margin:20rem 20rem 35rem;
        font-size: 18rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 25.2rem */
        color:#333;
        border: 1px solid var(--border, #BDBDBD);
        border-radius:4rem;
    }
</style>
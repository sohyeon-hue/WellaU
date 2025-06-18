<template>
    <div id="header" :class="[type,{fixed:Number(type.replace(/\D/g,'')) > 3}]" :style="headerWrapperStyle" v-if="headerShow">
        <div class="header-wrapper">
            <!-- left area -->
            <div class="header-area-left" :class="[{flex1:groupText !== '' && (type == 'type5' || type == 'type7') }]"><!-- 241212 : 수정 -->
                <i class="arrow-left-icon" v-if="type == 'type1' || type == 'type2' || type == 'type4' || type == 'type6' || type == 'type7'"><!-- 241212 : 수정 -->
                    <!-- <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M15.8526 3.0561L6.76165 11.8306C6.48478 12.1063 6.46849 12.5432 6.71279 12.8378L6.76165 12.8913L15.8522 21.9417C15.8897 21.979 15.9404 22 15.9933 22H17.5567C17.6671 22 17.7567 21.9105 17.7567 21.8C17.7567 21.7468 17.7355 21.6958 17.6978 21.6583L8.38992 12.3908L17.6882 3.34334C17.7673 3.26631 17.7691 3.13969 17.692 3.06052C17.6544 3.02183 17.6027 3 17.5487 3H15.9915C15.9397 3 15.8899 3.02011 15.8526 3.0561Z" fill="#333333"/>
                    </svg> -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" @click="backBtnEvent">
                        <path d="M15 20L7.5 12.5L15 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </i>
                <StarOutlined v-if="type == 'type3' && !like" @click='starIconClick' />
                <StarFilled :style='starFilledStyle' v-if="type == 'type3' && like" @click='starIconClick' />
                <i class="ham-menu" v-if="type == 'type5'" @click="menuIconClickEv"><MenuOutlined /></i>
                
                <div class="select-box" v-if="groupText !== '' && type == 'type5' " @click="selectClick">
                    {{groupText}}
                    <i class="arrow">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 6L8 12L14 6" stroke="#333333" stroke-width="1.75"/>
                        </svg>
                    </i>
                </div>
                <!-- 241212 : 추가 -->
                <div class="add-btn-box" v-else-if="groupText !== '' && type == 'type7' " @click="addGroupBtnClick">
                    <i class="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M13 4H11V11L4 11V13L11 13V20H13V13H20V11L13 11V4Z" fill="#333333"/>
                        </svg>
                    </i>
                    {{groupText}}
                </div>
                <!-- // 241212 : 추가 -->
            </div>
            <!-- center area -->
            <div class="header-area-center" :style="headerAreaCenterStyle" v-if="type == 'type1' || type == 'type2' || type == 'type3'" @click="titleClick">
                <slot name="title"></slot>
            </div>
            <!-- right area -->
            <div class="header-area-right">
                <RedoOutlined v-if="type == 'type3'" @click="resetIconClick" />
                <a-button type="link" v-if="type == 'type2'" @click="clickRigntBtnEvent">{{rightBtnText}}</a-button>
                <WechatOutlined v-if="type == 'type6'" @click="groupClicEv1" />
                <AliwangwangOutlined v-if="type == 'type6'" @click="groupClicEv2" />
                <i class="alert-icon" v-if="type == 'type5' || type == 'type6' || type == 'type7'"><!-- 241212 : 수정 -->
                    <div class="alert-icon-wrapper">
                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg" @click="alertIconClick">
                            <path d="M6.1477 11.8751C6.14624 10.8378 6.35003 9.81041 6.74732 8.85217C7.14461 7.89393 7.72756 7.02376 8.4626 6.29178C9.19763 5.5598 10.0702 4.98047 11.0301 4.58717C11.99 4.19386 13.0182 3.99435 14.0555 4.00012C18.3868 4.03293 21.8539 7.63137 21.8539 11.9736V12.7501C21.8539 16.6657 22.6743 18.9407 23.3961 20.1876C23.4728 20.3204 23.5132 20.471 23.5134 20.6244C23.5135 20.7777 23.4733 20.9284 23.3969 21.0613C23.3205 21.1942 23.2105 21.3047 23.0779 21.3817C22.9453 21.4588 22.7948 21.4996 22.6414 21.5001H5.3602C5.20687 21.4996 5.05637 21.4588 4.92378 21.3817C4.79119 21.3047 4.68117 21.1942 4.60474 21.0613C4.52831 20.9284 4.48815 20.7777 4.48828 20.6244C4.48842 20.471 4.52884 20.3204 4.60551 20.1876C5.32739 18.9407 6.1477 16.6657 6.1477 12.7501V11.8751Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.5 21.5V22.375C10.5 23.3033 10.8687 24.1935 11.5251 24.8499C12.1815 25.5063 13.0717 25.875 14 25.875C14.9283 25.875 15.8185 25.5063 16.4749 24.8499C17.1313 24.1935 17.5 23.3033 17.5 22.375V21.5" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span class="num" v-if="valueAlert > 0">{{valueAlert}}</span>
                    </div>
                </i>
            </div>
        </div>
    </div>
</template>
<script>
    import {ref,onMounted} from 'vue'
    import {StarOutlined,StarFilled,RedoOutlined,MenuOutlined,AliwangwangOutlined,WechatOutlined} from '@ant-design/icons-vue'
    export default {
        name : "HeaderVue",
        props : {
            value : {
                type : Object,
                default : ()=>{
                    return {
                        headerShow : true,
                        like : false,
                        alert : 0,
                        popShow : false,
                        inputVal : "",
                        maxlength : 10,
                        rightBtnText : "계속하기",
                        groupText : "",
                    }
                }
            },
        },
        components : {
            "StarOutlined" : StarOutlined,
            "StarFilled" : StarFilled,
            "RedoOutlined" : RedoOutlined,
            "MenuOutlined" : MenuOutlined,
            "AliwangwangOutlined" : AliwangwangOutlined,
            "WechatOutlined" : WechatOutlined,
        },
        computed : {
            headerWrapperStyle(){
                const style = {};
                if(this.type === 'type4' || this.type === 'type5' || this.type === 'type6'){
                    style.height = 0;
                }
                return style
            },
            starFilledStyle(){
                const style = {
                    color : 'yellow'
                }
                return style;
            },
            headerAreaCenterStyle(){
                const style = {};
                if(this.type === 'type3' || this.type === 'type5'){
                    style.textAlign = "center"
                    style.justifyContent = "center"
                }
                return style
            }
        },
        data(){return{
            headerShow : true,
            type : "type1",
            like  : false,
            valueAlert : 0,
            headerPopTextField : "",
            popShow : false,
            maxlength : 20,
            inputVal : "asdf",
            toTime : "",
            fromTime : "",
            maxInputPlaceholder : "안심존 이름을 입력해 주세요!!!!",
            pickerTime : "",
            rightBtnText : "",
            groupText : "",
        }},
        setup(){
            const timeType = ref("");
            onMounted(()=>{
            })
            return timeType;
        },
        created(){},
        mounted(){},
        methods : {
            backBtnEvent(){
                this.$router.go(-1);
            },
            // Type2 : 오른쪽버튼 클릭 이벤트
            clickRigntBtnEvent(){
                this.$emit("clickRigntBtnEvent");
            },
            // Type3 : reset Icon 클릭 이벤트
            resetIconClick(){
                this.$emit("resetIconClick");
            },
            // Type3 : 즐겨찾기 아이콘 클릭 이벤트
            starIconClick(){
                const value = !this.like;
                const data = {like:value}
                this.$emit("starIconClick",data)
            },
            // Type5 : 햄버거 메뉴 클릭
            menuIconClickEv(){
                this.$emit("menuIconClickEv")
            },
            // Type5, Type6 : 알림 아이콘 클릭
            alertIconClick(){
                this.$router.push("/alertPage");
                this.$emit("alertIconClick")
            },
            // Type6 : 그룹아이콘 클릭1
            groupClicEv1(){
                this.$emit("groupClicEv1");
            },
            // Type6 : 그룹아이콘 클릭2
            groupClicEv2(){
                this.$emit("groupClicEv2")
            },
            // maxInput enter event
            maxInputEnterEvent(value){
                this.$emit("maxInputEnterEvent",value);
            },
            // maxInput input event
            maxInputEvent($event){
                this.inputVal = $event.target.value;
                this.$emit("maxInputEvent",this.inputVal)
            },
            pickerTimeOnChange(val){
                console.log("pickerTimeOnChange : ",val)
            },
            pickerTimeOnOk(val){
                console.log("pickerTimeOnOk : ",val)
            },
            // type5 일때 그룹명 클릭 시 이벤트
            selectClick(){
                this.$emit("selectClick")
            },
            // 241212 : 추가
            // type7 일때 그룹명 클릭 시 이벤트
            addGroupBtnClick(){
                this.$emit("addGroupBtnClick")
            },
            titleClick(){
                this.$emit("titleClick")
            }
        },
        watch : {
            value : {
                immediate : true,
                deep : true,
                handler : function(n){
                    this.type = n.type;
                    this.like = n.like;
                    this.valueAlert = n.alert;
                    this.popShow = n.popShow;
                    this.inputVal = n.inputVal;
                    this.maxlength = n.maxlength;
                    this.rightBtnText = n.rightBtnText;
                    this.groupText = n.groupText;
                }
            },
        }
    }
</script>
<style type="scss" scoped>
    #header{
        position:relative;
        z-index:100;
        background:#fff;
        &.fixed{
            .header-wrapper{
                padding:5rem 15rem 0;
                &> .header-area-right{
                    height:50rem;
                    border-radius:8rem;
                    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.16);
                    background:#fff;
                }

                &> .header-area-left{
                    height:50rem;
                    border-radius:8rem;
                    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.16);
                    background:#fff;
                    &.flex1{
                        flex:1;
                        display:flex;
                        margin-right:10rem;
                    }
                    &> .select-box{
                        position:relative;
                        flex:1;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        padding:0 36rem 0 0;
                        &> .arrow{
                            position:absolute;
                            top:50%;
                            right:15rem;
                            transform:translate(0,-50%);
                        }
                    }
                    /* 241212 : 수정 */
                    &> .add-btn-box{
                        position:relative;
                        flex:1;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        padding:0 0 0 0;
                        &:not(.select-box)> .arrow{
                            position:relative;
                            top:2rem;
                        }
                    }
                    /* //241212 : 수정 */
                }
            }
            .arrow-left-icon{
                padding-right:5rem;
            }
        }
        &.type6{
            .header-wrapper{
                justify-content:space-between;
            }
        }
        &.type5{
            .header-wrapper{
                justify-content:space-between;
                &> .header-area-center{
                    position:absolute;
                    top:0;
                    right:0;
                    bottom:0;
                    left:0;
                    justify-content:center;
                }
            }
        }
        .header-wrapper{
            position:relative;
            display:flex;
            align-items:flex-start;
            /* height: 30rem; */
            font-size:20rem;
            font-weight:bold;
            &> .header-area-left{
                position:relative;
                z-index:5;
                display:flex;
                align-items:center;
                height: 45rem;
                .anticon.anticon-left{
                    font-size:23rem;
                }
            }
            &> .header-area-center{
                flex:1;
                display:flex;
                align-items:center;
                height: 45rem;
                font-size:16rem;
                line-height:1;
                font-weight:300;
            }
            &> .header-area-right{
                position:relative;
                z-index:5;
                display:flex;
                align-items:center;
                height: 45rem;
                .css-dev-only-do-not-override-1p3hq3p.ant-btn.ant-btn-link{
                    color:#000;
                }
            }
        }
    }
    .alert-icon{
        height:100%;
        display:flex;
        align-items:center;
        padding:0 12rem;
        .alert-icon-wrapper{
            position:relative;
            &> .num{
                position:absolute;
                top:-2.5rem;
                right:-2.5rem;
                display:flex;
                align-items:center;
                justify-content:center;
                width:10rem;
                height:10rem;
                /* font-size:8rem; */
                font-size:0rem;
                line-height:1;
                font-weight:bold;
                color:#fff;
                border-radius:5rem;
                background:red;
            }
        }
    }
    .header-pop{
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        transform:translate(0,100%);
        background:#fff;
    }
    .header-pop-s-tit{
        font-size:12rem;
    }
    .ham-menu{
        display:flex;
        justify-content:center;
        align-items:center;
        height:100%;
        padding:0 12rem;
    }
    .arrow-left-icon{
        display:flex;
        justify-content:center;
        align-items:center;
        height:100%;
        padding:0 12rem 0 5rem;
    }
</style>

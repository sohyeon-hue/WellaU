<template>
    <div class="content-wrapper full">
        <div class="content-scroll">
            <div class="mapArea dummy-back">
                <MapPin pinColor="blue" :photo="photo" style="position:absolute; top:50%; left:50%;" />
                <MapPin  pinText="홍" pinColor="blue" style="position:absolute; top:20%; left:40%;" />
                <!-- pop 알림 & 위치기록  -->
                <div class="floating-right-top-box" v-if="floatPopBoxOpen">
                    <div class="floating-right-top-con-wrapper">
                        <div class="floating-right-top-con">
                            <!-- 제목 -->
                            <div class="top">
                                <div class="tit">{{floatBoxType === 'alert' ? '알림목록' : '위치기록' }}</div>
                                <!-- 닫기 버튼 -->
                                <i @click="floatPopClse">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M3.97862 3.04446L9.06674 8.18269L14.1545 3.04446C14.1827 3.01601 14.2211 3 14.2611 3H15.4144C15.4973 3 15.5644 3.06716 15.5644 3.15C15.5644 3.18953 15.5488 3.22746 15.521 3.25554L9.85442 8.97818L15.5637 14.7445C15.622 14.8033 15.6216 14.8983 15.5627 14.9566C15.5346 14.9844 15.4967 15 15.4572 15H14.3042C14.2642 15 14.2258 14.984 14.1976 14.9555L9.06674 9.77368L3.93554 14.9555C3.90737 14.984 3.869 15 3.82896 15H2.67637C2.59352 15 2.52637 14.9328 2.52637 14.85C2.52637 14.8105 2.54197 14.7725 2.56978 14.7445L8.27906 8.97818L2.6125 3.25554C2.55421 3.19668 2.55468 3.1017 2.61355 3.04341C2.64163 3.0156 2.67956 3 2.71909 3H3.87203C3.91207 3 3.95045 3.01601 3.97862 3.04446Z" fill="#999999"/>
                                    </svg>
                                </i>
                            </div>
                            <!-- 위치 기록 시 입력폼  -->
                            <div class="middle" v-if="floatBoxType === 'record'">
                                <div class="mark-time-box">
                                    <div class="date">
                                        <i></i>2024년 09월 13일
                                    </div>
                                    <div class="time">
                                        <i></i>13시
                                    </div>
                                </div>
                            </div>
                            <!-- 알림 콘텐츠 -->
                            <div class="con-wrapper" v-if="floatBoxType === 'alert'">
                                <div class="con">
                                    <AlertBox :list="alertLists" @click="alertClick" />
                                </div>
                            </div>
                            <!-- STEP 콘텐츠 -->
                            <div class="con-wrapper" v-else>
                                <div class="con">
                                    <StepBox :list="stepList" :step="stepStep" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="floating-menu-box">
                    <div class="floating-menu-wrapper">
                        <div class="top">
                            <ProfileBox name="홍길동" conText="서울시 용산동 갈월동" time="13분전" :img="img1"></ProfileBox>
                        </div>
                        <div class="con-wrapper">
                            <div class="con">
                                <div class="btn-set horizontal">
                                    <IconButtonBox icon="battery" class="size100" :disabled="bDis" :battery="iconBattery"  @click="iconButtonBoxClick" />
                                    <IconButtonBox icon="alert" class="size100" :disabled="aDis"  @click="iconButtonBoxClickAlert" />
                                    <IconButtonBox icon="record" class="size100" :disabled="rDis"  @click="iconButtonBoxClickRecord" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <PcLnb v-model:open="lnbOpen" :group="group" :person="person" :friends="lnbList" @gropClick="gropClick" @logout="logout" />
    </div>

    <!-- modal -->
    <ModalBox v-model:modalShow="modalShow" :padding="0">
        <ListSelectBox v-model:value="listSelectBoxValue" title="그룹을 선택해주세요." buttonText="+ 그룹 만들기" :outLine="false" :list="listSelectBoxList" @listClick="listSelectBoxListClick" :buttonShow="false" />
    </ModalBox>
</template>
<script setup>
    import { ref } from 'vue'


    const img1 = ref({
        src : null,
        // src : require('@img/dummy-profile01.jpeg'),
        alt : '홍길동님의 프로필 사진입니다'
    })

    /* MAP PIN */
    const photo = ref({
        src : require('@img/dummy-profile01.jpeg'),
        alt : '홍길동님의 프로필 사진입니다'
    })

    /* BUTTON */
    const iconButtonBoxClickAlert = ()=>{
        if(floatBoxType.value === 'alert' && floatPopBoxOpen.value){
            floatPopBoxOpen.value = false;
        }else{
            floatBoxType.value = "alert";
            floatPopBoxOpen.value = true;
        }
    }
    const iconButtonBoxClickRecord = ()=>{
        if(floatBoxType.value === 'record' && floatPopBoxOpen.value){
            floatPopBoxOpen.value = false;
        }else{
            floatBoxType.value = "record";
            floatPopBoxOpen.value = true;
        }
    }
    const iconButtonBoxClick = (icon)=>{
        console.log("icon : ",icon)
    }
    const bDis = ref(false)
    const aDis = ref(false)
    const rDis = ref(false)

    const iconBattery = Math.floor(Math.random() * 100);

    /* lnb */
    const lnbOpen = ref(true);

    const group = ref("그룹1");

    const person = ref({
        name : "홍길동",
        text : "서울시 용산동 갈월동",
        time : "13분전",
        king : true,
        birthday : false,
        img : {
            // src : require('../../assets/img/dummy-profile01.jpeg'),
            src : null,
            alt : '홍길동님의 프로필 사진입니다'
        }
    })
    const lnbList = ref([]);
    const setFriends = (len)=>{
        lnbList.value.length = 0;
        for(let i=0; i<len;i++){
            const n = Math.floor(Math.random() * 3) + 1;
            const name = ["홍길동","김응삼","김은지"]
            lnbList.value.push({
                name : name[n - 1],
                text : "서울시 용산동 갈월동",
                time : "13분전",
                king : false,
                birthday : Math.floor(Math.random() * 3) % 2 === 0 ? true : false,
                img : {
                    // src : require('../../assets/img/dummy-profile0'+n+'.jpeg'),
                    src : null,
                    alt : '홍길동님의 프로필 사진입니다'
                }
            })
        }
    }
    const len = Math.floor(Math.random() * 30) + 10;
    setFriends(len);
    const gropClick = ()=>{
        console.log("gropClick !!!!")
        modalOpen();
    }
    const logout = ()=>{
        console.log("logout !!!!")
    }

    /* ETC Select */
    const modalShow = ref(false);
    const listSelectBoxValue = ref("")
    const listSelectBoxList = ref([
        {
            text : "가족이랑",
            value : "가족이랑",
            checked : false,
        },
        {
            text : "친구들이랑",
            value : "친구들이랑",
            checked : false,
        },
        {
            text : "그룹1",
            value : "그룹1",
            checked : false,
        },
        {
            text : "그룹2",
            value : "그룹2",
            checked : false,
        },
        {
            text : "그룹3",
            value : "그룹3",
            checked : false,
        },
        {
            text : "그룹4",
            value : "그룹4",
            checked : false,
        },
        {
            text : "그룹5",
            value : "그룹5",
            checked : false,
        },
        {
            text : "그룹6",
            value : "그룹6",
            checked : false,
        },
        {
            text : "그룹7",
            value : "그룹7",
            checked : false,
        },
    ])
    const listSelectBoxListClick = (val)=>{
        modalShow.value = false;
        group.value = val;
        const len = Math.floor(Math.random() * 100);
        setFriends(len);
    }
    const modalOpen = ()=>{
        modalShow.value = true;
    }

    /* FLOAT */
    const floatPopBoxOpen = ref(true);
    const floatBoxType = ref("alert");
    const floatPopClse = ()=>{
        floatPopBoxOpen.value = false;
    }

    /* ALERT */
    const alertLists = ref([
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

    /* STEP */
    const stepList = ref([
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
    ])
    const stepStep = ref(2);

    const alertClick = (data)=>{
        console.log("data : ",data)
    }
</script>
<style type="scss" scoped>
    .dummy-back{
        background:url(@img/dummy-map.png) no-repeat center;
    }
    .addGroupPersonBtn{
        margin-bottom:20rem;
    }
</style>
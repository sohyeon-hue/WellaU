<template>
  <div class="app-wrapper" :class="[{map:map}]" @touchstart.stop @touchmove.stop @touchend.stop>
    <BackButton v-if="backBtnShow" />
    <!-- 241212 : 수정 -->
    <Header-vue v-if="haderShow"
      :value="headerData"
      @menuIconClickEv="menuIconClickEv"
      @resetIconClick="resetIconClick"
      @starIconClick="starIconClick"
      @clickRigntBtnEvent="clickRigntBtnEvent"
      @alertIconClick="alertIconClick"
      @groupClicEv1="groupClicEv1"
      @groupClicEv2="groupClicEv2"
      @maxInputEvent="maxInputEvent"
      @titleClick="titleClick"
      @selectClick="selectClick"
      @addGroupBtnClick="addGroupBtnClick"
    >
      <template #title>
        {{ headerText }}
      </template>  
    </Header-vue>
    <!-- // 241212 : 수정 -->
    <lnbVue v-model:open="lnbOpen" :profile="profile" />
    <div id="content" :page="pageStatus">
      <router-view />
    </div>
    <!-- modal -->
    <ModalBox v-model:modalShow="modalShow" :padding="0">
      <ListSelectBox v-model:value="listSelectBoxValue" title="그룹을 선택해주세요." buttonText="+ 그룹 만들기" :outLine="false" :list="listSelectBoxList" @listClick="listSelectBoxListClick" @btnClick="listSelectBoxBtnClick" />
    </ModalBox>
  </div>
</template>

<script>
import BackButton from './components/BackButton'
import { disableBodyScroll } from 'body-scroll-lock';
export default {
  name: 'App',
  props : {},
  components: {
    BackButton
  },
  computed : {
    pageStatus(){
      return this.$store.state.pageStatus
    },
    backBtnShow(){
      let temp = false;
      if(this.pageStatus === "login" || this.pageStatus === "groupMain" || this.pageStatus === "locationSharing" || this.pageStatus === "locationSharingDoneTime" || this.pageStatus === "sosView" || this.pageStatus === "sosViewCancel" || this.pageStatus === 'accessRight' || this.pageStatus ===  'popupStoreInfo' || this.pageStatus === 'locationDetail'){
        temp = true;
      }
      return temp;
    },
    haderShow(){
      let temp = true;
      if(this.pageStatus === "listPage" || this.pageStatus === "login" || this.pageStatus === "sosView" || this.pageStatus === "sosViewCancel" || this.pageStatus === "pcView" || this.pageStatus === "managerPage" || this.pageStatus ===  'popupStoreInfo'){
        temp = false
      }
      return temp;
    }
  },
  data : ()=>{
    return {
      checked : true,
      headerData : {
        headerShow : true,
        type : 'type1',
        like : true,
        alert : 10,
        popShow : true,
        inputVal : "",
        maxlength : 20,
        backShow : false,
        rightBtnText : "계속하기",
        groupMain : "",
      },
      headerText : "",
      modalShow : false,
      listSelectBoxValue : "",
      listSelectBoxList : [
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
      ],
      lnbOpen : false,
      profile : {
          name : "홍길동",
          img : {
              // src : require('@img/dummy-profile01.jpeg'),
              // alt : '홍길동님의 프로필 사진입니다'
              src : null,
              alt : null
          }
      }
    }
  },
  created(){},
  mounted(){
    this.checkePath(this.pageStatus);
    /* 241217 : 추가 */
    const _body = document.querySElector("body");
    const scrollPosition = window.pageYOffset;
    disableBodyScroll(_body)
     _body.style.overflow = 'hidden';
     _body.style.pointerEvents = 'none';
     _body.style.position = 'fixed';
     _body.style.top = `-${scrollPosition}px`;
     _body.style.left = '0';
     _body.style.right= '0';
  },
  methods : {
    // Type2 : 계속하기 클릭 이벤트
    clickRigntBtnEvent(){
      console.log("clickRigntBtnEvent !!!!")
    },
    // Type3 : reset Icon 클릭 이벤트
    resetIconClick(){
      console.log("reset Icon")
    },
    // Type3 : 즐겨찾기 아이콘 클릭 이벤트
    starIconClick(data){
      console.log(data);
      this.headerData.like = data.like;
    },
    // Type5 : 햄버거 메뉴 클릭
    menuIconClickEv(){
      this.lnbOpen = true;
      console.log("햄버거 메뉴")
    },
    // Type5, Type6 : 알림 아이콘 클릭
    alertIconClick(){
      console.log("alertIconClick !!!!")
    },
    // Type6 : 그룹아이콘 클릭1
    groupClicEv1(){
      console.log("groupClicEv1 !!!!")
    },
    // Type6 : 그룹아이콘 클릭2
    groupClicEv2(){
      console.log("groupClicEv2 !!!!")
    },
    // 안심존 이름을 입력하세요 input enter event
    maxInputEvent(val){
      console.log("maxInputEvent : ",val)
    },
    // 헤더 타이틀 클릭 이벤트
    titleClick(){
      const path = this.$route.path 
      console.log("path : ",path)
      if(path === '/groupMain'){
        console.log("this.modalShow : ",this.modalShow)
        this.modalShow = true;
      }
    },
    // type5 일때 그룹명 클릭 시 이벤트
    selectClick(){
      const path = this.$route.path 
      console.log("path : ",path)
      if(path === '/groupMain'){
        console.log("this.modalShow : ",this.modalShow)
        this.modalShow = true;
      }
    },
    // 241212 : 추가
    // type7 일때 그룹추가버튼 클릭 시 이벤트
    addGroupBtnClick(){
      const path = this.$route.path 
      console.log("path : ",path)
    },
    handleChange(sel){
      console.log("sel : ",sel)
      this.headerData.type = sel;
    },
    checkePath(path){
      switch (path){
        case "accessRight" :
          this.headerData.type = "type7"; // 241212 : 수정
          this.headerData.groupText = "그룹"; // 241212 : 수정
          this.headerText = null;
          break;
        case "batteryOff" :
          this.headerData.type = "type6";
          this.headerText = "";
          break;
        case "paymentView" :
          this.headerData.type = "type4";
          this.headerText = "";
          break;
        case "conditionsUse" :
          this.headerData.type = "type1";
          this.headerText = "";
          break;
        case "openSauceLicenses" :
          this.headerData.type = "type1";
          this.headerText = "오픈소스 라이센스";
          break;
        case "settingView" :
          this.headerData.type = "type1";
          this.headerText = "설정";
          break;
        case "faqView" :
          this.headerData.type = "type1";
          this.headerText = "FAQ";
          break;
        case "noticeView" :
          this.headerData.type = "type1";
          this.headerText = "공지사항";
          break;
        case "passwordChange" :
          this.headerData.type = "type1";
          this.headerText = "비밀번호 변경";
          break;
        case "birthChange" :
          this.headerData.type = "type1";
          this.headerText = "생일 변경";
          break;
        case "phoneChangeCheck" :
          this.headerData.type = "type1";
          this.headerText = "휴대폰 변경";
          break;
        case "phoneChange" :
          this.headerData.type = "type1";
          this.headerText = "휴대폰 변경";
          break;
        case "nameChange" :
          this.headerData.type = "type1";
          this.headerText = "이름 변경";
          break;
        case "myProfileEditPhoto" :
          this.headerData.type = "type1";
          this.headerText = "내 정보";
          break;
        case "sosDetail" :
          this.headerData.type = "type4";
          this.headerText = "";
          break;
        case "proximityAlertEdit" :
          this.headerData.type = "type1";
          this.headerText = "근접 알림 설정";
          break;
        case "proximityAlertEnter" :
          this.headerData.type = "type2";
          this.headerText = "근접 알림 등록";
          this.headerData.rightBtnText = "저장"
          break;
        case "proximityAlertSetting" :
          this.headerData.type = "type1";
          this.headerText = "근접 알림 설정";
          break;
        case "safeZoneEidt" :
          this.headerData.type = "type1";
          this.headerText = "안심존 설정";
          break;
        case "safeZoneView" :
          this.headerData.type = "type2";
          this.headerText = "안심존 사용자 설정";
          this.headerData.rightBtnText = "저장"
          break;
        case "searchAddress" :
          this.headerData.type = "type1";
          this.headerText = "주소 검색";
          break;
        case "createSafezone" :
          this.headerData.type = "type1";
          this.headerText = "안심존 설정";
          // this.headerData.rightBtnText = "계속하기"
          break;
        case "safeZoneList" :
          this.headerData.type = "type1";
          this.headerText = "안심존 설정";
          break;
        case "removeGrodupCheckNumber" :
          this.headerData.type = "type1";
          this.headerText = "그룹 지우기";
          break;
        case "removeGroup" :
          this.headerData.type = "type1";
          this.headerText = "그룹 지우기";
          break;
        case "memberSetting" :
          this.headerData.type = "type1";
          this.headerText = "그룹 설정";
          break;
        case "sosSetting" :
          this.headerData.type = "type1";
          this.headerText = "SOS 설정​";
          break;
        case "batteryAlert" :
          this.headerData.type = "type1";
          this.headerText = "배터리 부족 알림";
          break;
        case "inactiveSensing" :
          this.headerData.type = "type1";
          this.headerText = "비활동 감지 기능 설정​";
          break;
        case "locationSharingStatus" :
          this.headerData.type = "type1";
          this.headerText = "위치 공유 상태";
          break;
        case "groupManagement" :
          this.headerData.type = "type1";
          this.headerText = "그룹관리";
          break;
        case "alertPage" :
          this.headerData.type = "type1";
          this.headerText = "알림함";
          break;
        case "recordLocation" :
          this.headerData.type = "type1";
          this.headerText = "위치 기록";
          break;
        case "locationSharingDoneTime" :
          this.headerData.type = "type3";
          this.headerText = "live.udiya.com";
          break;
        case "locationSharing" :
          this.headerData.type = "type3";
          this.headerText = "live.udiya.com";
          break;
        case "locationDetail" :
          this.headerData.type = "type5";
          this.headerData.groupText = "그룹명";
          this.headerText = "";
          break;
        case "groupMainFirst" :
          this.headerData.type = "type6";
          this.headerText = "";
          break;
        case "groupMain" :
          this.headerData.type = "type5";
          this.headerData.groupText = "그룹명";
          this.headerText = "";
          break;
        default : 
          this.headerData.type = "type1";
          this.headerText = "";
          break;
      }
    },
    // 모달 그룹선택 셀럭트 박스 list 클릭 이벤트
    listSelectBoxListClick(){
      console.log("this.listSelectBoxValue : ",this.listSelectBoxValue)
      const checkedList = this.listSelectBoxList.find((l)=>l.value === this.listSelectBoxValue);
      this.headerData.groupText = checkedList.value
      console.log("checkedList : ",checkedList)
      this.modalShow = false;
    },
    // 모달 그룹선택 셀럭트 박스 그룹 만들기 버튼 이번트
    listSelectBoxBtnClick(){
      this.modalShow = false;
      this.$router.push("/createdGroup")
    },
  },
  watch : {
    $route(to) {
      let path = (to.fullPath.replace(/(^\/)/,'') === "")?"listPage":to.fullPath.replace(/(^\/)/,'');
      this.$store.state.pageStatus = path;
    },
    pageStatus(n,o){
      if(n !== o) this.checkePath(n);
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100%;
}
.app-wrapper{
  display:flex;
  flex-direction:column;
  height:100%;
  overflow:auto;
  #content{
    flex:1;
    overflow:auto;
    /* &[page=listPage], &[page=GuideDesign], &[page=GuideHeader]{
      overflow:auto;
    } */
  }
}
</style>

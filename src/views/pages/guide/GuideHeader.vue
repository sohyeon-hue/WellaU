<template>
    <div class="guide-wrapper">
        <!-- category -->
        <div class="guide-category-wrapper">
            <h2 class="guide-tit-category">HEADER</h2>
            <!-- area -->
            <div class="area-box">
                <h3>VIEW(TYPE1)</h3>
                <div class="view header-design-box">
                    <Header-vue v-model:value="type1"></Header-vue>
                </div>
                <h3>Source</h3>
                <div class="source-box">
                    &lt;html&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Header-vue v-model:value="type1"&gt;&lt;/Header-vue&gt;<br />
                    &lt;/ html&gt;<br />
                    &lt;scrit setup&gt;<br />
                    import { ref } from 'vue'<br />
                    const type1 = ref({<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;headerShow : true,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;type : 'type1',<br />
                    })<br />
                    &lt;/scrit&gt;<br />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>VIEW(TYPE1 - 제목이 있는경우)</h3>
                <div class="view header-design-box">
                    <Header-vue v-model:value="type1" @titleClick="titleClick">
                        <template #title>제목 1</template>
                    </Header-vue>
                </div>
                <h3>Source</h3>
                <div class="source-box">
                    &lt;html&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Header-vue v-model:value="type1"&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;template #title&gt;제목 1&lt;/template&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Header-vue&gt;<br />
                    &lt;/ html&gt;<br />
                    &lt;scrit setup&gt;<br />
                    import { ref } from 'vue'<br />
                    const type1 = ref({<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;headerShow : true,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;type : 'type1',<br />
                    })<br />
                    // 제목 클릭 이벤트<br />
                    const titleClick = ()=>{<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;console.log("제목 클릭 이벤트")<br />
                    }<br />
                    &lt;/scrit&gt;<br />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>VIEW(TYPE2)</h3>
                <div class="view header-design-box">
                    <Header-vue v-model:value="type2" @clickRigntBtnEvent="clickRigntBtnEvent"></Header-vue>
                </div>
                <h3>Source</h3>
                <div class="source-box">
                    &lt;html&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Header-vue v-model:value="type2" @clickRigntBtnEvent="clickRigntBtnEvent" &gt;&lt;/Header-vue&gt;<br />
                    &lt;/ html&gt;<br />
                    &lt;scrit setup&gt;<br />
                    import { ref } from 'vue'<br />
                    const type2 = ref({<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;headerShow : true,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;type : 'type2',<br />
                    })<br />
                    // Type2 : 오른쪽버튼 클릭 이벤트<br />
                    clickRigntBtnEvent(){<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;this.$emit("clickRigntBtnEvent");<br />
                    },<br />
                    &lt;/scrit&gt;<br />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>VIEW(TYPE3)</h3>
                <div class="view header-design-box">
                    <Header-vue v-model:value="type3" @starIconClick="starIconClick" @resetIconClick="resetIconClick"></Header-vue>
                </div>
                <h3>Source</h3>
                <div class="source-box">
                    &lt;html&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Header-vue v-model:value="type3" @headerChangeEv="headerChangeEv" @resetIconClick="resetIconClick" &gt;&lt;/Header-vue&gt;<br />
                    &lt;/ html&gt;<br />
                    &lt;scrit setup&gt;<br />
                    import { ref } from 'vue'<br />
                    const type3 = ref({<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;headerShow : true,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;type : 'type3',<br />
                    })<br />
                    // 즐겨 찾기 클릭 이벤트<br />
                    const starIconClick = (data)=>{<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;console.log(data);<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;type3.value.like = data.like;<br />
                    }<br />
                    // Type3 reset Icon Click<br />
                    const headerChangeEv = ()=>{<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;console.log("resetIconClick!!")<br />
                    }
                    &lt;/scrit&gt;<br />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>VIEW(TYPE4 - FIXED MODE)</h3>
                <div class="view header-design-box fixed">
                    <Header-vue v-model:value="type4"></Header-vue>
                </div>
                <h3>Source</h3>
                <div class="source-box">
                    &lt;html&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Header-vue v-model:value="type4"&gt;&lt;/Header-vue&gt;<br />
                    &lt;/ html&gt;<br />
                    &lt;scrit setup&gt;<br />
                    import { ref } from 'vue'<br />
                    const type4 = ref({<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;headerShow : true,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;type : 'type4',<br />
                    })<br />
                    &lt;/scrit&gt;<br />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>VIEW(TYPE5 - FIXED MODE)</h3>
                <div class="view header-design-box fixed">
                    <Header-vue v-model:value="type55" @menuIconClickEv="menuIconClickEv" @alertIconClick="alertIconClick" ></Header-vue>
                </div>
                <h3>Source</h3>
                <div class="source-box">
                    &lt;html&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Header-vue v-model:value="type5" @menuIconClickEv="menuIconClickEv" @alertIconClick="alertIconClick" &gt;&lt;/Header-vue&gt;<br />
                    &lt;/ html&gt;<br />
                    &lt;scrit setup&gt;<br />
                    import { ref } from 'vue'<br />
                    const type5 = ref({<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;headerShow : true,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;type : 'type5',<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;alert : 30,<br />
                    })<br />
                    // Type5 : 햄버거 메뉴 클릭<br />
                    const menuIconClickEv = ()=>{<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;console.log("menuIconClickEv")<br />
                    }<br />
                    // Type5, Type6 : 알림 아이콘 클릭<br />
                    const alertIconClick = ()=>{<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;console.log("alertIconClick")<br />
                    }<br />
                    &lt;/scrit&gt;<br />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>VIEW(TYPE5 - FIXED MODE - 제목이 있는 경우)</h3>
                <div class="view header-design-box fixed">
                    <Header-vue v-model:value="type5" @menuIconClickEv="menuIconClickEv" @alertIconClick="alertIconClick" @titleClick="titleClick" >
                        <template #title>FIXED 모드</template>
                    </Header-vue>
                </div>
                <h3>Source</h3>
                <div class="source-box">
                    &lt;html&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Header-vue v-model:value="type5" @menuIconClickEv="menuIconClickEv" @alertIconClick="alertIconClick" &gt;&lt;/Header-vue&gt;<br />
                    &lt;/ html&gt;<br />
                    &lt;scrit setup&gt;<br />
                    import { ref } from 'vue'<br />
                    const type5 = ref({<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;headerShow : true,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;type : 'type5',<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;alert : 30,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;groupText : "Group1",<br />
                    })<br />
                    // Type5 : 햄버거 메뉴 클릭<br />
                    const menuIconClickEv = ()=>{<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;console.log("햄버거 메뉴")<br />
                    }<br />
                    // 알림 아이콘 클릭<br />
                    const alertIconClick = ()=>{<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;console.log("alertIconClick")<br />
                    }<br />
                    // 제목 클릭 이벤트<br />
                    const titleClick = ()=>{<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;console.log("제목 클릭 이벤트")<br />
                    }<br />
                    &lt;/scrit&gt;<br />
                </div>
            </div>
            <!-- area -->
            <div class="area-box" v-if="false">
                <h3>VIEW(TYPE6 - FIXED MODE)</h3>
                <div class="view header-design-box fixed">
                    <Header-vue v-model:value="type6" @groupClicEv1="groupClicEv1" @groupClicEv2="groupClicEv2" @alertIconClick="alertIconClick"></Header-vue>
                </div>
                <h3>Source</h3>
                <div class="source-box">
                    &lt;html&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Header-vue v-model:value="type6" @groupClicEv1="groupClicEv1" @groupClicEv2="groupClicEv2" @alertIconClick="alertIconClick" &gt;&lt;/Header-vue&gt;<br />
                    &lt;/ html&gt;<br />
                    &lt;scrit setup&gt;<br />
                    import { ref } from 'vue'<br />
                    const type6 = ref({<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;headerShow : true,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;type : 'type6',<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;alert : 8,<br />
                    })<br />
                    // Type6 : 그룹아이콘 클릭1<br />
                    const groupClicEv1 = ()=>{<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;console.log("grodupIcon Click 1")<br />
                    }<br />
                    // Type6 : 그룹아이콘 클릭2<br />
                    const groupClicEv2 = ()=>{<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;console.log("grodupIcon Click 2")<br />
                    }<br />
                    // 알림 아이콘 클릭<br />
                    const alertIconClick = ()=>{<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;console.log("alertIconClick")<br />
                    }<br />
                    &lt;/scrit&gt;<br />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>VIEW(TYPE7 - FIXED MODE)</h3>
                <div class="view header-design-box fixed">
                    <Header-vue v-model:value="type7" @addGroupBtnClick="addGroupBtnClick" @alertIconClick="alertIconClick"></Header-vue>
                </div>
                <h3>Source</h3>
                <div class="source-box">
                    &lt;html&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Header-vue v-model:value="type7" @addGroupBtnClick="addGroupBtnClick" @alertIconClick="alertIconClick" &gt;&lt;/Header-vue&gt;<br />
                    &lt;/ html&gt;<br />
                    &lt;scrit setup&gt;<br />
                    import { ref } from 'vue'<br />
                    const type7 = ref({<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;headerShow : true,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;type : 'type7',<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;groupText : "그룹",<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;alert : 8,<br />
                    })<br />
                    // Type7 : 그룹추가 아이콘 클릭<br />
                    const addGroupBtnClick = ()=>{<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;console.log("addGroupBtnClick")<br />
                    }<br />
                    // 알림 아이콘 클릭<br />
                    const alertIconClick = ()=>{<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;console.log("alertIconClick")<br />
                    }<br />
                    &lt;/scrit&gt;<br />
                </div>
            </div>
        </div>
        <h2 class="guide-title">Props</h2>
        <table cellspacing="0" cellpadding="0" class="guide-table header-guide-props">
            <colgroup>
                <col style="width:auto" />
            </colgroup>
            <tbody>
                <!-- area -->
                <tr>
                    <th>name</th>
                    <td colspan="3">value.headerShow</td>
                </tr>
                <tr>
                    <th>type</th>
                    <td>Object</td>
                    <th>default</th>
                    <td>undefined</td>
                </tr>
                <tr>
                    <th>description</th>
                    <td colspan="3">헤더 숨기기</td>
                </tr>
                <!-- area -->
                <tr>
                    <th>name</th>
                    <td colspan="3">value.alert</td>
                </tr>
                <tr>
                    <th>type</th>
                    <td>Number</td>
                    <th>default</th>
                    <td>undefined</td>
                </tr>
                <tr>
                    <th>description</th>
                    <td colspan="3">tupe5,type6 시 알림 숫자</td>
                </tr>
                <!-- area -->
                <tr>
                    <th>name</th>
                    <td colspan="3">value.popShow</td>
                </tr>
                <tr>
                    <th>type</th>
                    <td>Boolean</td>
                    <th>default</th>
                    <td>undefined</td>
                </tr>
                <tr>
                    <th>description</th>
                    <td colspan="3">헤더 POP 보이게</td>
                </tr>
                <!-- area -->
                <tr>
                    <th>name</th>
                    <td colspan="3">value.groupText</td>
                </tr>
                <tr>
                    <th>type</th>
                    <td>String</td>
                    <th>default</th>
                    <td>undefined</td>
                </tr>
                <tr>
                    <th>description</th>
                    <td colspan="3">TYPE5 시 그룹명</td>
                </tr>
            </tbody>
        </table>
        <h2 class="guide-title" style="margin-top:30rem;">Events</h2>
        <table cellspacing="0" cellpadding="0" class="guide-table header-guide-props">
            <colgroup>
                <col style="width:auto" />
            </colgroup>
            <thead>
                <tr>
                    <th>name</th>
                    <th>description</th>
                    <th>return</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>clickRigntBtnEvent</td>
                    <td>Type2 : 오른쪽 버튼 클릭 이벤트</td>
                    <td></td>
                </tr>
                <tr>
                    <td>resetIconClick</td>
                    <td>Type3 : reset Icon 클릭 이벤트</td>
                    <td></td>
                </tr>
                <tr>
                    <td>starIconClick</td>
                    <td>Type3 : 즐겨찾기 아이콘 클릭 이벤트</td>
                    <td>true / false</td>
                </tr>
                <tr>
                    <td>menuIconClickEv</td>
                    <td>Type5 : 햄버거 메뉴 클릭</td>
                    <td>true / false</td>
                </tr>
                <tr>
                    <td>alertIconClick</td>
                    <td>Type5, Type6 : 알림 아이콘 클릭</td>
                    <td>true / false</td>
                </tr>
                <tr>
                    <td>addGroupBtnClick</td>
                    <td>Type7 : 그룹추가 아이콘 클릭</td>
                    <td></td>
                </tr>
                <!-- <tr>
                    <td>groupClicEv1</td>
                    <td>Type6 : 그룹아이콘 클릭1</td>
                    <td></td>
                </tr>
                <tr>
                    <td>groupClicEv2</td>
                    <td>Type6 : 그룹아이콘 클릭2</td>
                    <td></td>
                </tr> -->
            </tbody>
        </table>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    const type1 = ref({
        headerShow : true,
        type : 'type1',
    })
    const type2 = ref({
        headerShow : true,
        type : 'type2',
    })
    // 제목 클릭 이벤트
    const titleClick = ()=>{
        console.log("제목 클릭 이벤트")
    }
    const type3 = ref({
        headerShow : true,
        type : 'type3',
        like : false,
    })
    // Type3 : reset Icon 클릭 이벤트
    const resetIconClick = ()=>{
        console.log("resetIconClick!!")
    }
    // Type3 : 즐겨찾기 아이콘 클릭 이벤트
    const starIconClick = (data)=>{
      console.log(data);
      type3.value.like = data.like;
    }
    const type4 = ref({
        headerShow : true,
        type : 'type4',
    })
    const type5 = ref({
        headerShow : true,
        type : 'type5',
        groupText : "Group1",
        alert : 30,
    })
    const type55 = ref({
        headerShow : true,
        type : 'type5',
        groupText : "",
        alert : 30,
    })
    // Type5 : 햄버거 메뉴 클릭
    const menuIconClickEv = ()=>{
        console.log("햄버거 메뉴")
    }
    // Type5, Type6 : 알림 아이콘 클릭
    const alertIconClick = ()=>{
        console.log("alertIconClick")
    }
    const type6 = ref({
        headerShow : true,
        type : 'type6',
        alert : 8,
    })
    // 그룹아이콘 1 클릭
    const groupClicEv1 = ()=>{
        console.log("grodupIcon Click 1")
    }
    // Type6 : 그룹아이콘 클릭2
    const groupClicEv2 = ()=>{
        console.log("grodupIcon Click 2")
    }
    // type7
    const type7 = ref({
        headerShow : true,
        type : 'type7',
        groupText : "그룹",
        alert : 8,
    })
    // Type7 : 그룹추가 아이콘 클릭
    const addGroupBtnClick = ()=>{
        console.log("addGroupBtnClick")
    }
    /*
    const headerData = ref({
        headerShow : true,
        type : 'type1',
        like : true,
        alert : 10,
        popShow : true,
        inputVal : "",
        maxlength : 20,
        backShow : false,
      })
    */
</script>
<style type="scss" scoped>
    .header-design-box{
        min-height:30rem;
        margin-bottom:10rem;
        border:1rem solid #ededed;
        &.fixed{
            min-height:60rem;
        }
    }
    .source-box{
        padding:5rem;
        margin-bottom:50rem;
        font-size:12rem;
        color:#fff;
        background:#000;
    }
</style>
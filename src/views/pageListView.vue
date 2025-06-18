<template>
    <div class="listWrap">
        <table cellspacing="0" cellapdding="0">
            <colgroup>
                <col style="width:10rem" />
                <col style="width:20%" />
                <col style="width:20%" />
                <col style="width:20%" />
                <!-- <col style="width:10%" /> -->
                <col style="width:20%" />
                <!-- <col style="width:10%" /> -->
            </colgroup>
            <thead>
                <tr>
                    <th>
                        번호
                    </th>
                    <th>
                        카테고리
                    </th>
                    <th>
                        OS
                    </th>
                    <th>
                        이름
                    </th>
                    <!-- <th>
                        피피티 번호
                    </th> -->
                    <th>
                        Path
                    </th>
                    <!-- <th>
                        완료
                    </th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="(page,index) in pageList2" :key="'list' + index" :class="[categoryLine(index),{visited:store.state.visitedPath === page.path}]" @click="trClick(page.path)">
                    <td>
                        {{index}}
                    </td>
                    <td>
                        {{page.category}}
                    </td>
                    <td>
                        {{page.os}}
                    </td>
                    <td>
                        {{page.name}}
                    </td>
                    <!-- <td>
                        {{page.page}}
                    </td> -->
                    <td>
                        {{page.path}}
                    </td>
                    <!-- <td>
                        {{page.status ? page.status : "-"}}
                    </td> -->
                </tr>
            </tbody>
        </table>
        <div class="top" v-if="false">버전 : v1.15, 총 페이지 : {{pageList.length}} 완료 : {{success}} 진행율 : {{(success / (pageList.length * 0.01)).toFixed(1)}}%</div>
        <table cellspacing="0" cellapdding="0" v-if="false">
            <colgroup>
                <col style="width:20%" />
                <col style="width:20%" />
                <col style="width:20%" />
                <col style="width:10%" />
                <col style="width:20%" />
                <col style="width:10%" />
            </colgroup>
            <thead>
                <tr>
                    <th>
                        카테고리
                    </th>
                    <th>
                        OS
                    </th>
                    <th>
                        이름
                    </th>
                    <th>
                        피피티 번호
                    </th>
                    <th>
                        Path
                    </th>
                    <th>
                        완료
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(page,index) in pageList" :key="'list' + index" :class="[categoryLine(index),{visited:store.state.visitedPath === page.path}]" @click="trClick(page.path)">
                    <td>
                        {{page.category}}
                    </td>
                    <td>
                        {{page.os}}
                    </td>
                    <td>
                        {{page.name}}
                    </td>
                    <td>
                        {{page.page}}
                    </td>
                    <td>
                        {{page.path}}
                    </td>
                    <td>
                        {{page.status ? page.status : "-"}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { useStore } from 'vuex'
    import pageListData from './pageList'
    import pageListData2 from './pageList2'

    const pageList = ref(pageListData)
    const pageList2 = ref(pageListData2)
    const categoryLine = (index)=>{
        let temp = "";
        const index2 = index - 1;
        if(index > 0 && pageList.value[index2].category !== pageList.value[index].category){
            temp = "categoryLine";
        }
        return temp;
    }
    const router = useRouter();
    const trClick = (path)=>{
        router.push(path);
        store.state.visitedPath = path;
    }
    const success = ref(pageListData.filter(a => a.status === '완료').length);

    const store = useStore();

</script>
<style type="scss" scoped>
    .listWrap{
        padding:10rem 0 10rem 0;
        background:rgba(0,0,0,0.7);
    }
    table{
        width:calc(100% - 20rem);
        margin:0 auto;
        font-size:12rem;
        border-collapse:collapse;
        td, th{
            border:1px solid rgba(255,255,255,0.15);
        }
        thead{
            th, td{
                height:40rem;
                font-weight:bold;
                color:#ccc;
                background:rgba(0,0,0,0.55);
            }
        }
        tbody{
            td{
                padding:10rem;
                font-size:15rem;
                color:#fff;
                word-break:break-all;
                background:rgba(0,0,0,0.35);
                &:first-child{
                    text-align:center;
                }
            }
        }
    }
    .categoryLine{
        border-top:2rem double rgba(255,255,255,0.5);
    }
    .top{
        padding:10rem;
        font-size:14rem;
        text-align:right;
        color:rgba(255,255,255,0.8);
    }
    .subTit{
        padding:10rem;
        font-size:14rem;
        text-align:right;
        color:rgba(255,255,255,0.8);
    }
    .visited{
        background:rgba(255,255,255,0.45);
    }
</style>
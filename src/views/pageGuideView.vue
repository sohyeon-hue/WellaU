<template>
    <div class="listWrap">
        <Test-component />
        <div class="subTit">Guide</div>
        <table cellspacing="0" cellpadding="0">
            <colgroup>
                <col style="width:70%" />
                <col style="width:auto" />
            </colgroup>
            <thead>
                <tr>
                    <th>
                        컴포넌트
                    </th>
                    <th>
                        page
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr @click="trClick('/GuideHeader')">
                    <td>Header</td>
                    <td>/GuideHeader</td>
                </tr>
                <tr @click="trClick('/GuideDesign')">
                    <td>Design</td>
                    <td>/GuideDesign</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
    // import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter();
    const trClick = (path)=>{
        router.push(path);
    }
</script>
<style type="scss" scoped>
    .listWrap{
        padding:0 0 10rem 0;
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
</style>
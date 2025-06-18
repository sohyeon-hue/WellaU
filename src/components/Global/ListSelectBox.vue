<template>
    <div class="list-select-box" :style="listSelectBoxStyle">
        <div class="list-select-box-tit">{{props.title}}</div>
        <div class="list-select-box-list">
            <ul>
                <li v-for="(list,index) in props.list" :key="'list_'+index" :class="{checked:list.checked}" @click="listClick(list,index)">{{list.text}}</li>
            </ul>
        </div>
        <div class="both-area">
            <slot name="both"></slot>
        </div>
        <div class="list-select-box-footer-btn" v-if="props.buttonShow">
            <a-button class="wellau-btn small-size" @click.stop="btnClick">{{props.buttonText}}</a-button>
        </div>
    </div>
</template>
<script setup>
    import { computed,watch,defineProps,defineModel,defineEmits } from 'vue'
    const props = defineProps({
        value : {
            type : String,
            default : ()=>{
                return null;
            }
        },
        title : {
            type : String,
            default : ()=>{
                return null;
            }
        },
        buttonText : {
            type : String,
            default : ()=>{
                return null;
            }
        },
        size : {
            type : String,
            default : ()=>{
                return null;
            }
        },
        list : {
            type : Array,
            default : ()=>{
                return []
            }
        },
        outLine : {
            type : Boolean,
            default : ()=>{
                return true;
            }
        },
        buttonShow : {
            type : Boolean,
            default : ()=>{
                return true;
            }
        },
    })
    const emits = defineEmits(["btnClick","listClick"])
    const model = defineModel("value")

    const listSelectBoxStyle = computed(()=>{
        const style = {};
        if(props.size){
            style.width = props.size
        }
        if(props.outLine === false){
            style.border = "none";
        }
        return style;
    })

    const listClick = (list)=>{
        model.value = list.value;
        emits("listClick",list.value);
    }
    const btnClick = ()=>{
        emits("btnClick",model.value)
    }
    watch(()=>props.value,(n)=>{
        props.list.forEach((l)=>{
            if(l.value === n){
                l.checked = true;
            }else{
                l.checked = false;
            }
        })
    },{immediate : true})
</script>
<style type="scss" scoped>
    .list-select-box{
        display:inline-block;
        width:100%;
        border:1rem solid #ededed;;
    }
    .list-select-box-tit{
        display:flex;
        align-items:center;
        justify-content:center;
        height:40rem;
        font-size:16rem;
        line-height:1;
        border-bottom:1rem solid #ededed;
    }
    .list-select-box-list{
        max-height:110rem;
        overflow:auto;
        border-bottom:1rem solid #ededed;
        &> ul{
            padding:10rem 0;
            margin:0;
            &> li{
                display:flex;
                align-items:center;
                height: 30rem;
                padding:0 0 0 10rem;
                font-size:12rem;
                line-height:1;
                &.checked{
                    background:#f5f5f5;
                }
            }
        }
    }
    .list-select-box-btn{
        display:flex;
        align-items:center;
        justify-content:center;
        height:40rem;
        border-top:1px solid #ededed;
    }
    .list-select-box-footer-btn{
        padding:10rem;
        display:flex;
        &> *{
            flex:1;
        }
    }
</style>
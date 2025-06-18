<template>
    <div class="accordion-wrapper">
        <ul>
            <li class="accordion-list-box " :class="{open:open[index]}" v-for="(accordion,index) in props.list" :key="'accordionList_'+index" v-show="accordion.show" ref="accordionLine">
                <div class="accordion-label" @click="accordionLabelClick(index,open[index])">
                    <div class="text">
                        <div class="tit">{{accordion.tit}}</div>
                        <div class="date">{{accordion.date}}</div>
                    </div>
                    <i class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M16.25 7.5L10 13.75L3.75 7.5" stroke="#D2D2D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </i>
                </div>
                <div class="accordion-content" :style="conStyle(index)">
                    <p v-html="accordion.con"></p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
    import { ref,watch,defineProps,defineModel,onMounted } from 'vue'
    const accordionLine = ref();
    const props = defineProps({
        open : {
            type : Object,
            default : ()=>{
                return {index:-1,open:false}
            }
        },
        list : {
            type : Array,
            default : ()=>{
                return [];
            }
        },
    })
    const model = defineModel('open')
    const open = ref([]);
    const height = ref([]);

    const settingDatas = ()=>{
        for(let i=0;i<props.list.length; i++){
            open.value.push(false);
            height.value.push(0);
        }
    }
    const accordionLabelClick = (idx,op)=>{
        model.value = {index:idx,open:!op};
    }
    const setHeight = ()=>{
        open.value.forEach((o,i)=>{
            if(i === props.open.index){
                open.value[i] = props.open.open
            }else{
                open.value[i] = false;
            }
        })
        open.value.forEach((l,idx)=>{
            if(l){
                const p = accordionLine.value[idx].querySelector(".accordion-content")
                height[idx] = p.scrollHeight
            }else{
                height[idx] = 0
            }
        })
    }
    const conStyle = (index)=>{
        return {height:height[index] + 'rem'}
    }
    watch(()=>props.list,()=>{
        settingDatas();
    })
    watch(()=>props.open,()=>{
        setHeight()
    })

    onMounted(()=>{
        settingDatas();
        if(props.open.index > -1){
            accordionLabelClick(props.open.index,!props.open.open)
        }
    })
</script>
<style type="scss" scoped>
/* accordion-list-box */
    .accordion-list-box{
        padding:15rem 0 0;
        border-bottom:1rem solid #ededed;
        .accordion-label{
            display:flex;
            justify-content:space-between;
            &> .text{
                &> .tit{
                    font-size:16rem;
                    line-height:1;
                }
                &> .date{
                    padding:5rem 0 0;
                    font-size:14rem;
                    line-height:1;
                    color:#333;
                }
            }
            &> .icon{
                display:flex;
                align-items:center;
                transition:transform ease 0.5s;
                font-size:20rem;
            }
        }
        .accordion-content{
            height:0;
            transition:height ease 0.5s;
            margin:10rem 0 10rem;
            overflow:hidden;
            background:#ededed;
            &> p{
                padding:10rem;
            }
        }
        &.open{
            .accordion-label{
                &> .icon{
                    transform:rotate(180deg);
                    transform-origin:50%;
                }
            }

        }
    }
</style>
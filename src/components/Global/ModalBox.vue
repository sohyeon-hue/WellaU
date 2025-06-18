<template>
    <div class="modal-deem-wrapper" v-if="props.modalShow" @click="modalClose">
        <div class="modal-content-box">
            <div class="modal-scroll-box" :style="modalScrollBoxStyle" @click.stop>
                <div class="modal-content">
                    <slot />
                </div>
                <div class="btn-set horizontal" v-if="bth">
                    <a-button @click="modalClose">닫기</a-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { defineProps,defineModel,computed } from 'vue'
    const props = defineProps({
        modalShow : {
            type : Boolean,
            default : ()=>{
                return false;
            }
        },
        size : {
            type : String,
            default : ()=>{
                return "70%"
            }
        },
        minSize : {
            type : String,
            default : ()=>{
                return ""
            }
        },
        maxSize : {
            type : String,
            default : ()=>{
                return "300rem"
            }
        },
        bth : {
            stype : Boolean,
            default : ()=>{
                return false;
            }
        },
        padding : {
            type : [String,Number],
            default : ()=>{
                return "";
            }
        }
    })
    const model = defineModel("modalShow");
        // model.value = false;
    const modalClose = ()=>{
        model.value = false;
    }
    const modalScrollBoxStyle = computed(()=>{
        const style = {};
        style.width = props.size;
        if(props.minSize !== ""){
            style.minWidth = props.minSize
        }
        if(props.maxSize !== ""){
            style.maxWidth = props.maxSize
        }
        if(props.padding !== ""){
            style.padding = props.padding
        }
        return style
    })
</script>
<style type="scss" scoped>
    .modal-deem-wrapper{
        position:fixed;
        top:0;
        right:0;
        left:0;
        bottom:0;
        z-index:10000;
        display:flex;
        background:rgba(0,0,0,0.45);
        &> .modal-content-box{
            flex:1;
            display:flex;
            align-items:center;
            justify-content:center;
            height:100%;
        }
    }
    .modal-scroll-box{
        display:felx;
        flex-direction:column;
        justify-content:center;
        padding:20rem;
        border-radius:8rem;
        background:#fff;
        &> .modal-content{
            flex:1;
            padding:0;
        }
    }
</style>
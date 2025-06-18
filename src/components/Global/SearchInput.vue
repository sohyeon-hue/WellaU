<template>
    <div class="search-input" :class="[{disabled:props.disabled}]">
        <a-input v-model:value="textField" @input="inputEv" @keydown.enter="enterEv" class="wellau-input" :allowClear="true" :placeholder="props.placeholder" :disabled="props.disabled" />
        <i @click="searchClick"><SearchOutlined /></i>
    </div>
</template>
<script setup>
    import { ref,watch,defineProps,defineEmits,defineModel } from 'vue'
    import { SearchOutlined } from '@ant-design/icons-vue'

    const props = defineProps({
        value : {
            type : String,
            default : ()=>{
                return "";
            }
        },
        placeholder : {
            type : String,
            default : ()=>{
                return "";
            }
        },
        disabled : {
            type : Boolean,
            default : ()=> false
        }
    })
    const emits = defineEmits(['enter','searchIcon','input'])
    const model = defineModel("value");

    const textField = ref("")

    const inputEv = ()=>{
        emits('input',textField.value)
        model.value = textField.value;
    }

    const searchClick = ()=>{
        emits('searchIcon',textField.value)
    }
    const enterEv = ()=>{
        emits('enter',textField.value)
    }
    watch(()=>props.value,(n)=>{
        textField.value = n;
    },{immediate:true})
</script>
<style type="scss" scoped>
    .search-input{
        position:relative;
        &> i{
            position:absolute;
            top:0;
            right:0;
            z-index:10;
            display:flex;
            align-items:center;
            justify-content:center;
            width:30rem;
            height:50rem;
            padding:0 20rem;
            font-size:25rem;
        }
    }
</style>
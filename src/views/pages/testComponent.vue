<template>
    <input type="text" v-model="textField" @input="inputEv" />
    <button>확인</button>
</template>
<script setup>
    import { ref, defineProps, defineEmits } from 'vue'

    const props = defineProps({
        value : {
            type : String,
            default : ()=>{
                return "";
            }
        }
    })
    const textField = ref(props.value)


    const emit = defineEmits(['input'])
    const inputEv = ($ev)=>{
        console.log("input ev : ",$ev.target)
        emit("input",$ev.target.value);
    }
</script>
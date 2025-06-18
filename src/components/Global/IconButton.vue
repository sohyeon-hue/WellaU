<template>
    <button class="icon-button" :disabled="props.disabled" @click.stop="click">
        <PhoneFilled v-if="props.icon === 'phone'" />
        <MessageFilled v-if="props.icon === 'text'" />
        <i v-if="props.icon === 'sharing'">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M8 20C10.2091 20 12 18.2091 12 16C12 13.7909 10.2091 12 8 12C5.79086 12 4 13.7909 4 16C4 18.2091 5.79086 20 8 20Z" fill="#CCCCCC"/>
                <path d="M22 29C24.2091 29 26 27.2091 26 25C26 22.7909 24.2091 21 22 21C19.7909 21 18 22.7909 18 25C18 27.2091 19.7909 29 22 29Z" fill="#CCCCCC"/>
                <path d="M22 11C24.2091 11 26 9.20914 26 7C26 4.79086 24.2091 3 22 3C19.7909 3 18 4.79086 18 7C18 9.20914 19.7909 11 22 11Z" fill="#CCCCCC"/>
                <path d="M18.6373 9.1626L11.3623 13.8376" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.3623 18.1626L18.6373 22.8376" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </i>
        <i v-if="props.icon === 'minus'">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16.0088 5.00439C22.0839 5.00439 27.0088 9.92926 27.0088 16.0044C27.0088 22.0795 22.0839 27.0044 16.0088 27.0044C9.93366 27.0044 5.00879 22.0795 5.00879 16.0044C5.00879 9.92926 9.93366 5.00439 16.0088 5.00439ZM20.5588 15.2544H11.4588C11.3483 15.2544 11.2588 15.3439 11.2588 15.4544V16.5544C11.2588 16.6649 11.3483 16.7544 11.4588 16.7544H20.5588C20.6692 16.7544 20.7588 16.6649 20.7588 16.5544V15.4544C20.7588 15.3439 20.6692 15.2544 20.5588 15.2544Z" fill="#CCCCCC"/>
            </svg>
        </i>
        <i v-if="props.icon === 'group'">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M5.0019 8.50723C5.00242 10.4402 6.56984 12.0068 8.50283 12.0063C10.4358 12.0058 12.0024 10.4384 12.0019 8.50537C12.0014 6.57237 10.434 5.00579 8.50098 5.0063C6.56798 5.00681 5.00139 6.57423 5.0019 8.50723Z" fill="#E0E0E0" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.0058 23.5033C20.0063 25.4363 21.5737 27.0029 23.5067 27.0024C25.4397 27.0019 27.0063 25.4345 27.0058 23.5015C27.0053 21.5685 25.4379 20.0019 23.5049 20.0024C21.5719 20.0029 20.0053 21.5703 20.0058 23.5033Z" fill="#E0E0E0" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.0019 8.50332C20.0024 10.4363 21.5698 12.0029 23.5028 12.0024C25.4358 12.0019 27.0024 10.4345 27.0019 8.50146C27.0014 6.56847 25.434 5.00188 23.501 5.00239C21.568 5.00291 20.0014 6.57032 20.0019 8.50332Z" fill="#E0E0E0" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.002 8.50508L13.002 8.50481C13.3964 8.50305 13.7873 8.57942 14.152 8.7295C14.5168 8.87958 14.8482 9.10041 15.1272 9.37924C15.4062 9.65807 15.6272 9.98939 15.7775 10.3541C15.9277 10.7188 16.0043 11.1096 16.0027 11.504L16.0051 20.504C16.0036 20.8984 16.0802 21.2893 16.2304 21.654C16.3807 22.0186 16.6017 22.35 16.8807 22.6288C17.1597 22.9076 17.4911 23.1285 17.8559 23.2785C18.2206 23.4286 18.6115 23.505 19.0059 23.5032L20.0059 23.503" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.002 8.50342L12.002 8.50554" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </i>
    </button>
</template>
<script setup>
    import { defineProps,defineEmits } from 'vue'
    import { PhoneFilled,MessageFilled } from '@ant-design/icons-vue';

    const props = defineProps({
        icon : {
            type : String,
            default : ()=>{
                return "phone"
            }
        },
        disabled : {
            type : Boolean,
            default : ()=>{
                return false;
            }
        }
    })
    const emits = defineEmits(['click'])

    const click = ()=>{
        emits("click",props.icon);
    }
</script>
<style type="scss" scoped>
    .icon-button{
        font-size:30rem;
        border:none;
        outline:none;
        background:transparent;
        &[disabled]{
            color:#ccc;
        }
        &+ .icon-button{
            margin-left:10rem;
        }
    }
</style>
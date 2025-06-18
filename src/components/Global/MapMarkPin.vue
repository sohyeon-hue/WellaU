<template>
    <div class="map-mark-pin">
        <div class="map-mark-pin-circle" v-if="!props.checked">{{props.index}}</div>
        <div class="map-mark-pin-pin" v-else>
            <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="56" viewBox="0 0 38 56" fill="none">
                    <mask id="path-1-outside-1_14267_881" maskUnits="userSpaceOnUse" x="0" y="0" width="38" height="56" fill="black">
                    <rect fill="white" width="38" height="56"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8005 53.0723C19.5423 53.0717 20.1435 52.4702 20.1435 51.7283C20.1435 42.3586 25.3852 36.6179 29.3098 32.3197C30.4363 31.0859 31.4543 29.971 32.2086 28.9232C34.3374 26.108 35.6 22.6015 35.6 18.8C35.6 9.52162 28.0784 2 18.8 2C9.52162 2 2 9.52162 2 18.8C2 22.6015 3.26262 26.1081 5.39138 28.9233C6.14572 29.971 7.16372 31.0859 8.29025 32.3197C12.2148 36.6179 17.4565 42.3586 17.4565 51.7283C17.4565 52.4702 18.0577 53.0717 18.7995 53.0723"/>
                    </mask>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8005 53.0723C19.5423 53.0717 20.1435 52.4702 20.1435 51.7283C20.1435 42.3586 25.3852 36.6179 29.3098 32.3197C30.4363 31.0859 31.4543 29.971 32.2086 28.9232C34.3374 26.108 35.6 22.6015 35.6 18.8C35.6 9.52162 28.0784 2 18.8 2C9.52162 2 2 9.52162 2 18.8C2 22.6015 3.26262 26.1081 5.39138 28.9233C6.14572 29.971 7.16372 31.0859 8.29025 32.3197C12.2148 36.6179 17.4565 42.3586 17.4565 51.7283C17.4565 52.4702 18.0577 53.0717 18.7995 53.0723" fill="#076AEB"/>
                    <path d="M18.7995 54.0723H18.8005V52.0723H18.7995V54.0723ZM29.3098 32.3197L27.8328 30.9711L29.3098 32.3197ZM32.2086 28.9232L30.6134 27.7169L30.5992 27.7356L30.5855 27.7547L32.2086 28.9232ZM5.39138 28.9233L7.01448 27.7547L7.00078 27.7357L6.98665 27.717L5.39138 28.9233ZM8.29025 32.3197L9.76719 30.9711H9.76719L8.29025 32.3197ZM18.8021 55.0723C20.6478 55.0708 22.1435 53.5742 22.1435 51.7283H18.1435C18.1435 51.3661 18.4369 51.0726 18.799 51.0723L18.8021 55.0723ZM22.1435 51.7283C22.1435 43.2027 26.8539 37.9755 30.7867 33.6683L27.8328 30.9711C23.9165 35.2603 18.1435 41.5145 18.1435 51.7283H22.1435ZM30.7867 33.6683C31.8891 32.4609 32.9954 31.2535 33.8318 30.0918L30.5855 27.7547C29.9132 28.6885 28.9835 29.7109 27.8328 30.9711L30.7867 33.6683ZM33.8039 30.1295C36.1862 26.9791 37.6 23.0518 37.6 18.8H33.6C33.6 22.1512 32.4886 25.237 30.6134 27.7169L33.8039 30.1295ZM37.6 18.8C37.6 8.41705 29.183 0 18.8 0V4C26.9738 4 33.6 10.6262 33.6 18.8H37.6ZM18.8 0C8.41705 0 0 8.41705 0 18.8H4C4 10.6262 10.6262 4 18.8 4V0ZM0 18.8C0 23.0518 1.41383 26.9791 3.79611 30.1296L6.98665 27.717C5.11141 25.2371 4 22.1512 4 18.8H0ZM3.76828 30.0918C4.60466 31.2536 5.71089 32.4609 6.8133 33.6683L9.76719 30.9711C8.61655 29.711 7.68677 28.6885 7.01448 27.7547L3.76828 30.0918ZM6.8133 33.6683C10.7461 37.9755 15.4565 43.2027 15.4565 51.7283H19.4565C19.4565 41.5145 13.6835 35.2603 9.76719 30.9711L6.8133 33.6683ZM15.4565 51.7283C15.4565 53.5742 16.9522 55.0708 18.7979 55.0723L18.801 51.0723C19.1631 51.0726 19.4565 51.3661 19.4565 51.7283H15.4565Z" fill="white" mask="url(#path-1-outside-1_14267_881)"/>
                </svg>
            </i>
            <span class="index">
                {{props.index}}
            </span>
        </div>
    </div>
</template>
<script setup>
    import { defineProps } from 'vue'

    const props = defineProps({
        index : {
            type : Number,
            default : ()=>{
                return -1;
            }
        },
        checked : {
            type : Boolean,
            default : ()=> false
        }
    })

</script>
<style type="scss" scoped>
    .map-mark-pin{
        position:relative;
        display:inline-block;
        width:28rem;
        height:28rem;
    }
    .map-mark-pin-circle{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        display:flex;
        align-items:center;
        justify-content:center;
        font-family: Roboto;
        font-size: 18.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1;
        color:#fff;
        border-radius:50%;
        border:2rem solid #fff;
        background:#333;
    }
    .map-mark-pin-pin{
        position:absolute;
        left:50%;
        bottom:0;
        transform:translate(-50%,0);
        &> .index{
            position:absolute;
            top:3rem;
            left:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            width:33.6rem;
            height:33.6rem;
            font-family: "Roboto";
            font-size: 19.6rem;
            font-style: normal;
            font-weight: 700;
            line-height: 1;
            color:#fff;
            transform:translate(-50%,0);
        }
    }
</style>
<template>
    <div class="BackBtnWrapper">
        <a-button type="primary" @click="click">리스트 페이지 이동</a-button>
    </div>
</template>
<script>
    export default {
        name : "BackButton",
        components : {},
        props : {},
        computed : {},
        data(){return{}},
        created(){},
        mounted(){},
        methods : {
            click(){
                this.$router.push("/")
            }
        },
    }
</script>
<style type="scss" scoped>
    .BackBtnWrapper{
        position:fixed;
        top:40rem;
        right:10rem;
        z-index:1000;
        &> button{
            /* display:none; */
            /* height:50rem;
            padding:5rem;
            font-size:14rem;
            font-weight:bold;
            color:#fff;
            border-radius:5rem; */
            background:black;
        }
    }
</style>
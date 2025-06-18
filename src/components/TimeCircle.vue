<template>
    <div class="timeCircleBox" @click="click">
        <canvas id="myCanvas" height="220" width="220" ref="canvas" style="transform:rotate(-90deg);"></canvas>
        <div class="num">{{props.num}}</div>
        <p>{{props.infoText}}</p>
    </div>
</template>
<script setup>
    import { ref,defineProps,watch,defineEmits,onBeforeUnmount,defineExpose } from 'vue'

    const props = defineProps({
        num : {
            type : Number,
            default : ()=>{
                return "";
            }
        },
        time : {
            type : Number,
            default : ()=>{
                return 60000;
            }
        },
        bgColor :{
            type : String,
            default : ()=>{
                return "#FF3B2E";
            }
        },
        infoText : {
            type : String,
            default : ()=>{
                return "눌러서 즉시 전송";
            }
        }
    })
    const stop = ()=>{
        clearInterval(timer);
        timer = null;
        angle = 0;
    }
    const pause = ()=>{
        clearInterval(timer);
        timer = null;
    }
    const emits = defineEmits(['clickEv','timeout'])
    const canvas = ref("canvas");
    let timer = null;
    let angle = 0;
    function start(){
        const oneStep = 100;
        const totalTime = props.time;
        const circlePrice = 6.3;
        const circlePrice2 = 360;
        const circleSize = 5;
        clearInterval(timer)
        timer = setInterval(()=>{
            angle += circlePrice / (totalTime / oneStep);
            draw(angle);
            if(angle >= circlePrice){
                clearInterval(timer);
                timer = null
                emits("timeout")
            }
        },oneStep)
        function draw(angle){
            const exchangeAngle = (circlePrice2 / circlePrice) * angle
            const ctx = canvas.value.getContext("2d");
            ctx.clearRect(0,0,canvas.value.width, canvas.value.height);

            ctx.beginPath();
            ctx.fillStyle = props.bgColor;
            ctx.fillRect(0,0,canvas.value.width,canvas.value.height);
            ctx.closePath();


            ctx.beginPath();
            ctx.moveTo((canvas.value.width / 2),(canvas.value.height / 2));
            ctx.arc((canvas.value.width / 2),(canvas.value.height / 2),(canvas.value.width / 2),(canvas.value.height / 2),0,(Math.PI/180) * 360,false);
            ctx.fillStyle = "rgba(255,255,255,0.3)";
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo((canvas.value.width / 2),(canvas.value.height / 2));
            ctx.arc((canvas.value.width / 2),(canvas.value.height / 2),(canvas.value.width / 2),0,(Math.PI/180) * exchangeAngle,false);
            ctx.closePath();
            ctx.fillStyle = "#fff";
            ctx.fill();
            
            ctx.beginPath();
            ctx.moveTo((canvas.value.width / 2),(canvas.value.height / 2));
            ctx.arc((canvas.value.width / 2),(canvas.value.height / 2),((canvas.value.width / 2) - (circleSize)),0,(Math.PI/180) * 360,false);
            ctx.closePath();
            ctx.fillStyle = props.bgColor;
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(canvas.value.width - (circleSize / 2),canvas.value.height / 2)
            ctx.arc(canvas.value.width - (circleSize / 2),canvas.value.height / 2,(circleSize / 2),0,(Math.PI/180)*360,false);
            ctx.fillStyle = "#fff";
            ctx.fill();
            ctx.closePath();

            const left = canvas.value.width / 2 + ((canvas.value.width / 2) - (circleSize / 2) ) * Math.cos(angle);
            const top = canvas.value.height / 2 + ((canvas.value.height / 2) - (circleSize / 2) ) * Math.sin(angle);
            ctx.beginPath();
            ctx.moveTo(left,top);
            ctx.arc(left,top,(circleSize / 2),(Math.PI / 180) * 360, false);
            ctx.fillStyle = "#fff";
            ctx.fill();
            ctx.closePath();

            // ctx.moveTo(0,0)
            // ctx.rotate(90 * Math.PI / 180);
            // ctx.beginPath();
            // ctx.font="bold 100rem Noto Sans KR"
            // ctx.textAlign = "center"
            // ctx.fillStyle = "#fff"
            // ctx.fillText(props.num,((canvas.value.width / 2)) - 3,((canvas.value.width / 2) * -1) + 38);
            // ctx.setTransform(1,0,0,1,0,0);
        }

    }
    const click = ()=>{
        const checked = timer ? true : false;
        emits("clickEv",checked);
    }
    const getState = ()=>{
        const checked = timer ? true : false;
        return checked;
    }
    watch(()=>props.num,()=>{
        angle = 0;
        start();
    },{immediate : true})

    onBeforeUnmount(()=>{
        clearInterval(timer);
    })
    defineExpose({
        start,
        stop,
        pause,
        getState,
    })
</script>
<style type="scss" scoped>
    .timeCircleBox{
        position:relative;
        &> p{
            position:absolute;
            bottom:35rem;
            left:50%;
            transform:translate(-50%,0);
            font-size: 15rem;
            font-style: normal;
            font-weight: 600;
            line-height: 1;
            color:#fff;
            white-space:nowrap;
        }
        &> .num{
            position:absolute;
            top:0;
            right:0;
            bottom:20rem;
            left:0;
            display:flex;
            align-items:center;
            justify-content:center;
            font-family: "Roboto";
            font-size: 92rem;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            color:#fff;
        }
    }
</style>

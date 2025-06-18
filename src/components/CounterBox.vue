<template>
    <div class="counterBox">
        <canvas ref="canvas" width="270" height="270"></canvas>
        <div class="text">
            <h1>{{code}}</h1>
            <h2>초대코드 유효시간</h2>
            <p>{{date}}</p>
        </div>
    </div>
</template>
<script setup>
    import { ref,defineProps,watch,onMounted } from 'vue'
    const props = defineProps({
        time : {
            type : String,
            default : ()=>{
                return "";
            }
        },
        code : {
            type : String,
            default : ()=>{
                return ""
            }
        },
        date : {
            type : String,
            default : ()=> ""
        },
        angle : {
            type : Number,
            default : ()=> 0
        }
    })
    const canvas = ref("canvas");
    let size = 5;
    const draw = ()=>{
        const _canvas = canvas.value;
        const ctx = _canvas.getContext("2d");
        const halfPoint = _canvas.width / 2;
        const exchangeAngle = (6.3 / 360) * props.angle;
        ctx.clearRect(0,0,_canvas.width,_canvas.height);

        ctx.beginPath();
        ctx.moveTo(halfPoint,halfPoint);
        ctx.arc(halfPoint,halfPoint,halfPoint,0,(Math.PI/180)*360,false);
        ctx.fillStyle = "#E0E0E0";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(halfPoint,halfPoint);
        ctx.arc(halfPoint,halfPoint,halfPoint,0,(Math.PI/180) * props.angle,false);
        ctx.fillStyle = "#076AEB";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(halfPoint,halfPoint)
        ctx.arc(halfPoint,halfPoint,halfPoint - size,0,(Math.PI/180)*360,false);
        ctx.fillStyle = "#fff"
        ctx.fill();
        ctx.closePath();

        let left = halfPoint + (halfPoint - (size / 2)) * Math.cos(exchangeAngle);
        let top = halfPoint + (halfPoint - (size / 2)) * Math.sin(exchangeAngle);
        ctx.beginPath();
        ctx.moveTo(halfPoint,halfPoint)
        ctx.arc(left,top,(size / 2),0,(Math.PI/180)*360,false);
        ctx.fillStyle = "#076AEB"
        ctx.fill();
        ctx.closePath();

        left = halfPoint + (halfPoint - (size / 2)) * Math.cos(0);
        top = halfPoint + (halfPoint - (size / 2)) * Math.sin(0);
        ctx.beginPath();
        ctx.moveTo(halfPoint,halfPoint)
        ctx.arc(left,top,(size / 2),0,(Math.PI/180)*360,false);
        ctx.fillStyle = "#076AEB"
        ctx.fill();
        ctx.closePath();

    }
    onMounted(()=>{
        draw();
    })
    watch(()=>props.angle,()=>{
      draw();  
    })

</script>
<style type="scss" scoped>
    .counterBox{
        position:relative;
        width:270rem;
        height:270rem;
        &> canvas{
            position:relative;
            z-index:1;
            transform:rotate(-90deg);
        }
        &> .text{
            position:absolute;
            top:0;
            left:0;
            right:0;
            bottom:0;
            z-index:10;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            &> h1{
                display:flex;
                align-items:center;
                height:60rem;
                padding:0;
                margin:0;
                font-family: Arial;
                font-size: 36rem;
                font-style: normal;
                font-weight: 700;
                color:#333;
            }
            &> h2{
                display:flex;
                align-items:center;
                height:24rem;
                padding:0;
                margin:0;
                font-family: Arial;
                font-size: 16.8rem;
                font-style: normal;
                font-weight: 400;
                line-height: 1;
                color:#333;
            }
            &> p{
                display:flex;
                align-items:center;
                height:31rem;
                padding:0;
                margin:0;
                font-family: "Roboto";
                font-size: 20.16rem;
                font-style: normal;
                font-weight: 600;
                line-height: 1;
                letter-spacing: -0.685rem;
                color:#FB8B28;
            }
        }
    }
</style>
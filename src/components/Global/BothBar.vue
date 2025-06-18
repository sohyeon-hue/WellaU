<template>
    <div id="bothBar">
        <div class="bothBar-wrapper" :class=[{deem:deemShow}] :style="bothBarWrapperStyle">
            <div class="bothBar-thumn" @touchstart="touchStart" @touchmove="touchMoved" @touchend="touchEnd" ></div>
            <div class="bothBar-content" @touchstart.stop @touchmove.stop @touchend.stop>
                <slot name="content">
                </slot>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref,computed,defineProps } from 'vue'

    const props = defineProps({
        maxHeightDiffer : {
            type : Number,
            default : ()=>{
                return 70
            }
        }
    })

    const points = ref({s:-1,e:-1,h:163,min:0,cuh:0});
    const toutchTargetChecked = ref(false);
    const swiperChecked = ref({time:null,arr:[],type:null,first:null});
    const minHeight = 163;
    const maxHeight = window.innerHeight - props.maxHeightDiffer;
    const deemShow = ref(false);


    let animationTimer = null;
    const targetChecked = (target)=>{
        const etcParentClass = ['.step-box'];
        let etParentCheck = false;
        etcParentClass.forEach((checkClass)=>{
            if(target.closest(checkClass)) etParentCheck = true;
        })
        const tagArr = ['a','button','select','input'];
        const targetTag = (target.tagName) ? target.tagName.toLowerCase() : null;
        const parentTag = (target.parentNode && target.parentNode.tagName) ? target.parentNode.tagName.toLowerCase() : null;
        let tagChecked = (tagArr.indexOf(targetTag) >= 0) ? tagArr.indexOf(targetTag) : (tagArr.indexOf(parentTag) >= 0) ? tagArr.indexOf(parentTag) : -1; 
        if(tagChecked === tagArr.length - 1){
            tagChecked = -1
            const inputType = ['button','checkbox','radio'];
            if(tagArr.indexOf(targetTag) === tagArr.length - 1){
                if(inputType.indexOf(target.type) >= 0) tagChecked = tagArr.length - 1;
            }
            if(tagArr.indexOf(parentTag) === tagArr.length - 1){
                if(inputType.indexOf(target.parentNode.type) >= 0) tagChecked = tagArr.length - 1;
            }
        }
        const cl = target.getAttribute("class");
        const checked = (cl)?cl.match(/ant-/g):null;
        const parent = (target.parentNode)?target.parentNode:null;
        const parentCl = (parent && parent.getAttribute("class"))?parent.getAttribute("class"):null;
        const parehtChecked = (parentCl)?parentCl.match(/ant-/g):null;
        // true 리턴 시 터치 이벤트 막기
        return checked || parehtChecked || tagChecked >= 0 || etParentCheck ? true : false;
    }
    const touchStart = ($ev)=>{
        toutchTargetChecked.value = targetChecked($ev.target);
        points.value.s = $ev.targetTouches[0].pageY;
        if(!swiperChecked.value.first) swiperChecked.value.first = points.value.h;
        points.value.cuh = points.value.h;
        if(!toutchTargetChecked.value){
            clearInterval(animationTimer);
            $ev.preventDefault();
            swiperChecked.value.arr[0] = $ev.targetTouches[0].pageY
            swiperChecked.value.time = new Date().getTime();
        }
    }
    const touchMoved = ($ev)=>{
        if(toutchTargetChecked.value) return;
        const touchPoint = $ev.targetTouches[0].pageY;
        const diff = points.value.s - touchPoint;
        const calc = points.value.cuh + diff;
        const price = (maxHeight < calc) ? maxHeight : (minHeight > calc) ? minHeight : calc
        points.value.h = price;
        if(touchPoint < swiperChecked.value.arr[0] && swiperChecked.value.type === null){
            swiperChecked.value.type = "up"
        }else if(swiperChecked.value.type === null){
            swiperChecked.value.type = "down"
        }
        if(swiperChecked.value.type === "down"){
            if(swiperChecked.value.arr.length == 1 || swiperChecked.value.arr[1] < touchPoint){
                swiperChecked.value.arr[1] = touchPoint;
            }else if(swiperChecked.value.arr[1] > touchPoint){
                swiperChecked.value.arr[0] = touchPoint;
                swiperChecked.value.arr[1] = touchPoint;
                swiperChecked.value.time = new Date().getTime();
                swiperChecked.value.type = "up"
            }
        }else{
            if(swiperChecked.value.arr.length == 1 || swiperChecked.value.arr[1] > touchPoint){
                swiperChecked.value.arr[1] = touchPoint;
            }else if(swiperChecked.value.arr[1] < touchPoint){
                swiperChecked.value.arr[0] = touchPoint;
                swiperChecked.value.arr[1] = touchPoint;
                swiperChecked.value.time = new Date().getTime();
                swiperChecked.value.type = "down"
            }

        }
    }
    const touchEnd = ()=>{
        points.value.s = -1;
        if(toutchTargetChecked.value) return
        const endTime = new Date().getTime();
        const distance = (swiperChecked.value.type === 'up') ? swiperChecked.value.arr[0] - swiperChecked.value.arr[1] : swiperChecked.value.arr[1] - swiperChecked.value.arr[0] ;
        const checkTime = endTime - swiperChecked.value.time;
        if(checkTime <= 250 && distance > 20){
            switch (swiperChecked.value.type) {
                case "up" :
                    // points.value.h = maxHeight;
                    animation(points.value.h, maxHeight)
                    swiperChecked.value.first = maxHeight;
                    break;
                default : 
                    // points.value.h = minHeight;
                    animation(points.value.h, minHeight)
                    swiperChecked.value.first = minHeight;
                    break;
            }
        }else if((points.value.h !== minHeight && swiperChecked.value.type === 'down') || (points.value.h !== maxHeight && swiperChecked.value.type === 'up')){
            // points.value.h = swiperChecked.value.first;
            animation(points.value.h, swiperChecked.value.first)
        }
        swiperChecked.value.arr = [];
        swiperChecked.value.type = null;
        swiperChecked.value.time = null;
        // swiperChecked.value.first = null;
        
    }
    const animation = (s,e)=>{
        if(!animationTimer) clearInterval(animationTimer);
        if(s === e) return;
        deemShow.value =  true;
        const interValTime = 10;
        const dis = (s > e) ? s - e : e - s;
        const maxDistance = window.innerHeight - 200;
        const maxTime = 500;
        const oneTime = maxDistance / (maxTime / interValTime);
        const totalTime = (dis / oneTime) * interValTime;
        const len = totalTime / interValTime;
        const step = dis / len
        animationTimer = setInterval(()=>{
            let priceHeight;
            if(s < e){
                priceHeight = (points.value.h + step >= e) ? e : points.value.h + step
            }else{
                priceHeight = (points.value.h - step <= e) ? e : points.value.h - step
            }
            points.value.h = priceHeight;
            if((priceHeight >= e && s < e) || (priceHeight <= e && s > e)){
                clearInterval(animationTimer)
                deemShow.value =  false;
            }
        },interValTime)
    }
    const bothBarWrapperStyle = computed(()=>{
        const style = {};
        style.height = points.value.h + "rem";
        return style
    })
</script>
<style type="scss" scoped>
    #bothBar{
        position:relative;
        height:150rem;
        background:transparent;
    }
    .bothBar-wrapper{
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        max-height:calc(100vh - 70rem);
        /* min-height:100rem; */
        display:flex;
        flex-direction:column;
        overflow:hidden;
        border-radius:18rem 18rem 0 0;
        background:#fff;
        &.deem{
            &:after{
                content:"";
                position:absolute;
                top:0;
                left:0;
                right:0;
                bottom:0;
                background:rgba(0,0,0,0);
            }
        }
    }
    .bothBar-thumn{
        position:relative;
        height:42rem;
        /* background:#000; */
        &:after{
            content:"";
            position:absolute;
            top:7rem;
            left:50%;
            z-index:100;
            width:40rem;
            height:5rem;
            border-radius:5rem;
            transform:translate(-50%,0);
            background:#ededed;
        }
    }
    .bothBar-content{
        flex:1;
        padding:0;
        overflow:auto;
        -webkit-overflow-scrolling: touch;
    }
    .bothBar-deem{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:rgba(0,0,0,0);
    }
</style>
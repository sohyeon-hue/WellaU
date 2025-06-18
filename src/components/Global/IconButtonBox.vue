<template>
    <button class="icon-button-box i-location" :class="[{battery:props.icon === 'battery'}]" :disabled="props.disabled" @click.stop="click">
        <i>
            <div v-if="props.icon === 'tell'">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path d="M12.332 15.9531C13.3611 18.0781 15.0794 19.792 17.207 20.8156C17.364 20.8899 17.5376 20.922 17.7107 20.9089C17.8839 20.8957 18.0506 20.8377 18.1945 20.7406L21.3195 18.6531C21.4576 18.5594 21.6171 18.5023 21.7833 18.487C21.9494 18.4717 22.1167 18.4987 22.2695 18.5656L28.1195 21.0781C28.3195 21.1613 28.4865 21.3079 28.5949 21.4954C28.7033 21.6829 28.7471 21.9008 28.7195 22.1156C28.5341 23.5627 27.8277 24.8928 26.7326 25.8568C25.6374 26.8208 24.2285 27.3527 22.7695 27.3531C18.2609 27.3531 13.9368 25.562 10.7487 22.3739C7.5606 19.1858 5.76953 14.8617 5.76953 10.3531C5.76986 8.89406 6.3018 7.48517 7.26581 6.39001C8.22983 5.29486 9.55986 4.58848 11.007 4.40307C11.2218 4.37548 11.4397 4.41926 11.6272 4.52768C11.8147 4.63609 11.9613 4.80313 12.0445 5.00307L14.557 10.8656C14.6224 11.016 14.6497 11.1802 14.6366 11.3437C14.6235 11.5072 14.5705 11.6649 14.482 11.8031L12.3945 14.9781C12.3016 15.1217 12.247 15.2867 12.2361 15.4574C12.2252 15.6281 12.2582 15.7988 12.332 15.9531V15.9531Z" stroke="#333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div v-if="props.icon === 'text'">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path d="M17.2696 27.353H6.73211C6.60525 27.3547 6.47934 27.331 6.3618 27.2832C6.24427 27.2354 6.13749 27.1646 6.04778 27.0749C5.95807 26.9851 5.88723 26.8784 5.83946 26.7608C5.79168 26.6433 5.76793 26.5174 5.76961 26.3905V15.853C5.76961 12.803 6.98122 9.87797 9.13789 7.7213C11.2946 5.56463 14.2196 4.35303 17.2696 4.35303V4.35303C18.7798 4.35303 20.2752 4.65048 21.6705 5.22841C23.0657 5.80634 24.3335 6.65343 25.4013 7.7213C26.4692 8.78917 27.3163 10.0569 27.8942 11.4522C28.4722 12.8474 28.7696 14.3428 28.7696 15.853V15.853C28.7696 17.3632 28.4722 18.8586 27.8942 20.2539C27.3163 21.6491 26.4692 22.9169 25.4013 23.9848C24.3335 25.0526 23.0657 25.8997 21.6705 26.4776C20.2752 27.0556 18.7798 27.353 17.2696 27.353V27.353Z" stroke="#333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.707 16.353C18.707 17.1469 18.0634 17.7905 17.2695 17.7905C16.4756 17.7905 15.832 17.1469 15.832 16.353C15.832 15.5591 16.4756 14.9155 17.2695 14.9155C18.0634 14.9155 18.707 15.5591 18.707 16.353Z" fill="black" stroke="#333333" stroke-width="0.125"/>
                    <path d="M12.707 16.353C12.707 17.1469 12.0634 17.7905 11.2695 17.7905C10.4756 17.7905 9.83203 17.1469 9.83203 16.353C9.83203 15.5591 10.4756 14.9155 11.2695 14.9155C12.0634 14.9155 12.707 15.5591 12.707 16.353Z" fill="black" stroke="#333333" stroke-width="0.125"/>
                    <path d="M24.707 16.353C24.707 17.1469 24.0634 17.7905 23.2695 17.7905C22.4756 17.7905 21.832 17.1469 21.832 16.353C21.832 15.5591 22.4756 14.9155 23.2695 14.9155C24.0634 14.9155 24.707 15.5591 24.707 16.353Z" fill="black" stroke="#333333" stroke-width="0.125"/>
                </svg>
            </div>
            <div v-if="props.icon === 'sharing'">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path d="M8.49512 20.353C10.7043 20.353 12.4951 18.5622 12.4951 16.353C12.4951 14.1439 10.7043 12.353 8.49512 12.353C6.28598 12.353 4.49512 14.1439 4.49512 16.353C4.49512 18.5622 6.28598 20.353 8.49512 20.353Z" stroke="#333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.4951 29.353C24.7043 29.353 26.4951 27.5622 26.4951 25.353C26.4951 23.1439 24.7043 21.353 22.4951 21.353C20.286 21.353 18.4951 23.1439 18.4951 25.353C18.4951 27.5622 20.286 29.353 22.4951 29.353Z" stroke="#333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.4951 11.353C24.7043 11.353 26.4951 9.56217 26.4951 7.35303C26.4951 5.14389 24.7043 3.35303 22.4951 3.35303C20.286 3.35303 18.4951 5.14389 18.4951 7.35303C18.4951 9.56217 20.286 11.353 22.4951 11.353Z" stroke="#333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.1324 9.51562L11.8574 14.1906" stroke="#333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.8574 18.5156L19.1324 23.1906" stroke="#333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div v-if="props.icon === 'record'">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path d="M25.7695 28.353C27.4264 28.353 28.7695 27.0099 28.7695 25.353C28.7695 23.6962 27.4264 22.353 25.7695 22.353C24.1127 22.353 22.7695 23.6962 22.7695 25.353C22.7695 27.0099 24.1127 28.353 25.7695 28.353Z" stroke="#333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.76953 7.35303H21.7695C22.8304 7.35303 23.8478 7.77445 24.598 8.5246C25.3481 9.27475 25.7695 10.2922 25.7695 11.353C25.7695 12.4139 25.3481 13.4313 24.598 14.1815C23.8478 14.9316 22.8304 15.353 21.7695 15.353H9.76953C8.44345 15.353 7.17168 15.8798 6.234 16.8175C5.29632 17.7552 4.76953 19.0269 4.76953 20.353C4.76953 21.6791 5.29632 22.9509 6.234 23.8886C7.17168 24.8262 8.44345 25.353 9.76953 25.353H22.7695" stroke="#333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div v-if="props.icon === 'search'">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path d="M12.7695 23.353L4.76953 25.353V7.35303L12.7695 5.35303" stroke="#333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.7695 27.353L12.7695 23.353V5.35303L20.7695 9.35303V27.353Z" stroke="#333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.7695 9.35303L28.7695 7.35303V25.353L20.7695 27.353" stroke="#333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div v-if="props.icon === 'alert'">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path d="M7.05273 14.9047C7.05273 13.7261 7.28487 12.559 7.73591 11.4701C8.18695 10.3812 8.84804 9.39181 9.68145 8.5584C10.5149 7.725 11.5042 7.0639 12.5931 6.61287C13.682 6.16183 14.8491 5.92969 16.0277 5.92969C17.2063 5.92969 18.3734 6.16183 19.4623 6.61287C20.5512 7.0639 21.5406 7.725 22.374 8.5584C23.2074 9.39181 23.8685 10.3812 24.3195 11.4701C24.7706 12.559 25.0027 13.7261 25.0027 14.9047V14.9047C25.0027 19.3797 25.9402 21.9797 26.7652 23.4047C26.8528 23.5564 26.899 23.7286 26.8992 23.9038C26.8994 24.079 26.8535 24.2513 26.7661 24.4032C26.6788 24.5551 26.553 24.6814 26.4015 24.7694C26.25 24.8574 26.078 24.9041 25.9027 24.9047H6.15273C5.97749 24.9041 5.80549 24.8574 5.65396 24.7694C5.50243 24.6814 5.3767 24.5551 5.28934 24.4032C5.20199 24.2513 5.1561 24.079 5.15625 23.9038C5.15641 23.7286 5.20261 23.5564 5.29023 23.4047C6.11523 21.9797 7.05273 19.3797 7.05273 14.9047Z" stroke="#333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.0273 24.9043V25.9043C12.0273 26.9652 12.4488 27.9826 13.1989 28.7327C13.9491 29.4829 14.9665 29.9043 16.0273 29.9043C17.0882 29.9043 18.1056 29.4829 18.8558 28.7327C19.6059 27.9826 20.0273 26.9652 20.0273 25.9043V24.9043" stroke="#333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.9521 3.9043C24.9882 5.18956 26.6315 7.01014 27.7021 9.1668" stroke="#333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.35254 9.1668C5.42319 7.01014 7.06647 5.18956 9.10254 3.9043" stroke="#333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <!-- <div class="battery-icon" v-if="props.icon === 'battery'">
                <span class="bar" :style="barStyle"></span>
                <svg  viewBox="0 0 416 168"><path class="cls-1" stroke-width="20rem" stroke="currentColor" fill="none" d="M464.44,256.25h26.78C506,256.25,518,269,518,284.6v18.3c0,15.59-11.09,28.35-24.65,28.35H468.69" transform="translate(-112 -209.75)"/><rect stroke-width="20rem" stroke="#1d1d1b" fill="none" class="cls-1" x="10" y="10" width="345" height="148" rx="56.69"/></svg>
            </div> -->
            <div class="battery-box type2" v-if="props.icon === 'battery'">
                <svg width="35" height="17" viewBox="0 0 35 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32.3362" height="16.8148" rx="5.17379" :fill="batteryColor[0]" fill-opacity="0.4"/>
                    <path d="M32.9831 5.82035C33.4977 5.82035 33.9912 6.0929 34.355 6.57803C34.7189 7.06317 34.9233 7.72116 34.9233 8.40724C34.9233 9.09333 34.7189 9.75132 34.355 10.2365C33.9912 10.7216 33.4977 10.9941 32.9831 10.9941L32.9831 8.40724V5.82035Z" :fill="batteryColor[1]"/>
                </svg>
                <div class="bar-wrappper">
                    <span class="bar" :style="barStyle2"></span>
                </div>
            </div>
        </i>
        <!-- 
        tell text map record
        -->
        
        <span>{{(props.icon === 'battery') ? props.battery + '%' : buttonText }}</span>
    </button>
</template>
<script setup>
    import { ref,watch,computed,defineEmits,defineProps } from 'vue'
    const props = defineProps({
        icon : {
            type : String,
            default : ()=>{
                return 'sharing' // [record,search,sharing,alert]
            }
        },
        text : {
            type : String,
            default : ()=>{
                return null
            }
        },
        disabled : {
            type : Boolean,
            default : ()=>{
                return false;
            }
        },
        battery : {
            type : Number,
            default : ()=>{
                return 0;
            }
        }
    })
    const emit = defineEmits(['click']);
    const textGroup = [{text:"위치공유",icon:"sharing"},{text:"위치기록",icon:"record"},{text:"길찾기",icon:"search"},{text:"알림목록",icon:"alert"},{text:"베터리",icon:"battery"},{text:"전화걸기",icon:"tell"},{text:"문자하기",icon:"text"}]
    const buttonText = ref("");
    const click = ()=>{
        emit("click",props.icon);
    }
    // const barStyle = computed(()=>{
    //     const style = {};
    //     console.log("props.battery : ",props.battery)
    //     if(props.battery > -1){
    //         const per = props.battery * 0.01;
    //         const width = `calc((100% - 11rem) * ${per})`
    //         style.width = width;
    //         if(props.battery < 21){
    //             style.borderRadius = "5rem 0 0 5rem"
    //         }
    //     }
    //     return style;
    // })
    watch(()=>props.icon,()=>{
        if(!props.text){
            const t = textGroup.find(a=>a.icon === props.icon);
            buttonText.value = (t && t.text) ? t.text : null;
        }
    },{immediate:true})



    const batteryColor = computed(()=>{
        let temp = ["#FF3D33","#FA3532"];
        const color = [["#FF3D33","#FA3532"],["#FFCC0A","#FFA143"],["#37C058","#396232"]];
        if(props.battery >= 75){
            temp = color[2];
        }else if(props.battery >= 50){
            temp = color[1];
        }
        return temp;
    })

    const barStyle2 = computed(()=>{
        const style = {};
        style.width = props.battery + "%";

        let temp = ["#FF3D33","#FA3532"];
        const color = [["#FF3D33","#FA3532"],["#FFCC0A","#FFA143"],["#37C058","#396232"]];
        if(props.battery >= 75){
            temp = color[2];
        }else if(props.battery >= 50){
            temp = color[1];
        }
        style.background = temp[0];
        return style;
    })

</script>
<style type="scss" scoped>
    .icon-button-box{
        display:inline-flex;
        flex-direction:column;
        align-items:center;
        width:150rem;
        padding:10rem;
        border-radius:18rem;
        outline:none;
        border:none;
        cursor:pointer;
        background:#F3F6FB;
        &.battery{
            cursor:default;
        }
        &.size100{
            justify-content:space-between;
            height:100rem;
            padding:0;
            &> i{
                margin:13rem 0 0;
            }
            &> span{
                padding-bottom:20rem;
                font-size: 16rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                letter-spacing: 0.16rem;
            }
        }
        &> i{
            font-size:40rem;
        }
        &> span{
            font-size: 13rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 0.13rem;
            color:#323232;
        }
        &[disabled]{
            cursor:default;
            &> i, &> span{
                color:#ddd;
            }
            &> i > div > svg{
                opacity:0.4;
            }
        }
    }
    .battery-icon{
        position:relative;
        display:flex;
        align-items:center;
        width:40rem;
        height:40rem;
        margin:0 0 0 5rem;
        &> .bar{
            position:absolute;
            left:3rem;
            top:50%;
            z-index:2;
            width:calc((100% - 11rem) * 1);
            height:11rem;
            border-radius:5rem;
            transform:translate(0,-50%);
            background:black;
        }
        &> svg{
            position:relative;
            top:0;
            z-index:5;
            height:auto;
        }
    }

    .battery-box.type2{
        position:relative;
        top:-2rem;
        display:inline-flex;
        align-items:center;
        vertical-align:middle;
        margin:0 0 0 5rem;
        &> .bar{
            position:absolute;
            height:10rem;
        }
        &> span{
            padding:0 5rem 0 0;
            text-align: center;
            font-family: "Roboto";
            font-size: 14rem;
            font-style: normal;
            font-weight: 600;
            line-height: 1;
            letter-spacing: -0.408rem;
        }
    }
    .bar-wrappper{
        position:absolute;
        top:0rem;
        right:3rem;
        bottom:0rem;
        width:33rem;
        border-radius:5.714rem;
        overflow:hidden;
        &> .bar{
            position:absolute;
            top:0;
            left:0;
            bottom:0;
            width:30%;
            background:red;
        }
    }
</style>
<template>
    <div class="mapPin-wrapper" :style="mapPinWrapperStyle" @click.stop="click">
        <div class="mapPinPop" v-if="popShow">
            <div class="mapPinPopInnerWrap" @click.stop="popClose">
                <div class="mapPinPopHeader">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M13.4003 21.8004H4.97026C4.86877 21.8017 4.76804 21.7827 4.67401 21.7445C4.57998 21.7063 4.49456 21.6496 4.42279 21.5779C4.35102 21.5061 4.29436 21.4207 4.25614 21.3266C4.21792 21.2326 4.19892 21.1319 4.20026 21.0304V12.6004C4.20026 10.1604 5.16954 7.82034 6.89488 6.09501C8.62021 4.36967 10.9603 3.40039 13.4003 3.40039V3.40039C14.6084 3.40039 15.8048 3.63836 16.921 4.1007C18.0371 4.56304 19.0513 5.24071 19.9056 6.09501C20.7599 6.94931 21.4376 7.96351 21.9 9.0797C22.3623 10.1959 22.6003 11.3922 22.6003 12.6004V12.6004C22.6003 13.8086 22.3623 15.0049 21.9 16.1211C21.4376 17.2373 20.7599 18.2515 19.9056 19.1058C19.0513 19.9601 18.0371 20.6377 16.921 21.1001C15.8048 21.5624 14.6084 21.8004 13.4003 21.8004V21.8004Z" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.4002 14.1998C14.0629 14.1998 14.6002 13.6625 14.6002 12.9998C14.6002 12.3371 14.0629 11.7998 13.4002 11.7998C12.7375 11.7998 12.2002 12.3371 12.2002 12.9998C12.2002 13.6625 12.7375 14.1998 13.4002 14.1998Z" fill="white"/>
                        <path d="M8.60039 14.1998C9.26313 14.1998 9.80039 13.6625 9.80039 12.9998C9.80039 12.3371 9.26313 11.7998 8.60039 11.7998C7.93765 11.7998 7.40039 12.3371 7.40039 12.9998C7.40039 13.6625 7.93765 14.1998 8.60039 14.1998Z" fill="white"/>
                        <path d="M18.2 14.1998C18.8627 14.1998 19.4 13.6625 19.4 12.9998C19.4 12.3371 18.8627 11.7998 18.2 11.7998C17.5373 11.7998 17 12.3371 17 12.9998C17 13.6625 17.5373 14.1998 18.2 14.1998Z" fill="white"/>
                    </svg>
                </div>
                <div class="mapPinPop-con">
                    <slot>
                    </slot>
                    <i class="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.82968 0.13241C0.635293 -0.048721 0.332376 -0.0433764 0.1445 0.1445C-0.0433764 0.332376 -0.048721 0.635293 0.13241 0.82968L5.39482 6.09209L0.13241 11.1703C-0.048721 11.3647 -0.0433764 11.6676 0.1445 11.8555C0.332376 12.0434 0.635293 12.0487 0.82968 11.8676L6.69727 6.09209L0.82968 0.13241Z" fill="#77838F"/>
                        </svg>
                    </i>
                </div>
            </div>
        </div>
        <div class="mapPin-pieChart" :style="mapPinCircleStyle" v-if="piechartShow">
            <span class="s" :style="pieChartCircleSstyle"></span>
            <span class="e" :style="pieChartCircleEstyle"><i class="c" :style="pieChartCircleECstyle"></i></span>
        </div>
        <!-- 241212 : 추가 -->
        <div class="mapPin-icon-icon" :style="mapPinIconIconStyle" v-if="props.icon !== '' && props.icon !== null && props.icon !== false && props.icon !== undefined && props.icon === 'home'">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 27" fill="none">
            <g clip-path="url(#clip0_14425_515)">
            <path d="M28.1801 5.78961L25.3151 1.25461C25.0601 0.849609 24.6051 0.599609 24.1201 0.599609H6.28008C5.79508 0.599609 5.34008 0.849609 5.08508 1.25461L2.21508 5.78961C0.735085 8.12961 2.04508 11.3846 4.81008 11.7596C5.01008 11.7846 5.21508 11.7996 5.41508 11.7996C6.72008 11.7996 7.88008 11.2296 8.67508 10.3496C9.47008 11.2296 10.6301 11.7996 11.9351 11.7996C13.2401 11.7996 14.4001 11.2296 15.1951 10.3496C15.9901 11.2296 17.1501 11.7996 18.4551 11.7996C19.7651 11.7996 20.9201 11.2296 21.7151 10.3496C22.5151 11.2296 23.6701 11.7996 24.9751 11.7996C25.1801 11.7996 25.3801 11.7846 25.5801 11.7596C28.3551 11.3896 29.6701 8.13461 28.1851 5.78961H28.1801ZM25.7851 13.3446C25.7851 13.3446 25.7851 13.3446 25.7801 13.3446C25.5151 13.3796 25.2451 13.3996 24.9701 13.3996C24.3501 13.3996 23.7551 13.3046 23.2001 13.1346V19.7996H7.20008V13.1296C6.64008 13.3046 6.04008 13.3996 5.42008 13.3996C5.14508 13.3996 4.87008 13.3796 4.60508 13.3446H4.60008C4.39508 13.3146 4.19508 13.2796 4.00008 13.2296V19.7996V22.9996C4.00008 24.7646 5.43508 26.1996 7.20008 26.1996H23.2001C24.9651 26.1996 26.4001 24.7646 26.4001 22.9996V19.7996V13.2296C26.2001 13.2796 26.0001 13.3196 25.7851 13.3446Z" :fill="fillColor"/>
            </g>
            <defs>
            <clipPath id="clip0_14425_515">
            <rect width="28.8" height="25.6" fill="white" transform="translate(0.799805 0.600098)"/>
            </clipPath>
            </defs>
            </svg>
        </div>
        <!-- // 241212 : 추가 -->
        <div class="mapPin-icon-circle" :style="mapPinIconCircleStyle" v-else>
            <img :src="props.photo.src" :alt="props.photo.alt" v-if="props.photo.src !== '' " />
            <p v-else-if="props.photo.src === '' && props.pinText !== null " :style="firstNameStyle">
                {{props.pinText}}
            </p>
            <i class="none-icon" v-else>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M3.875 27C5.10367 24.8714 6.87104 23.1038 8.99944 21.8749C11.1278 20.6459 13.5423 19.9989 16 19.9989C18.4577 19.9989 20.8722 20.6459 23.0006 21.8749C25.129 23.1038 26.8963 24.8714 28.125 27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </i>

        </div>
        <div class="mapPin-sos" v-if="sos" @click.stop>
            <svg width="61" height="35" viewBox="0 0 61 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="60.2" height="34.8" rx="17.4" fill="#FF3141"/>
                <path d="M20.6506 21.2748C20.6506 22.1964 20.4274 22.9812 19.981 23.6292C19.5346 24.2628 18.8938 24.7524 18.0586 25.098C17.2378 25.4436 16.2658 25.6164 15.1426 25.6164C14.5666 25.6164 14.0122 25.5876 13.4794 25.53C12.961 25.4724 12.4858 25.3932 12.0538 25.2924C11.6218 25.1772 11.2402 25.0404 10.909 24.882V23.0244C11.4274 23.2548 12.0682 23.4636 12.8314 23.6508C13.609 23.838 14.4082 23.9316 15.229 23.9316C15.9922 23.9316 16.633 23.8308 17.1514 23.6292C17.6698 23.4276 18.0586 23.1396 18.3178 22.7652C18.577 22.3908 18.7066 21.9516 18.7066 21.4476C18.7066 20.9436 18.5986 20.5188 18.3826 20.1732C18.1666 19.8276 17.7922 19.5108 17.2594 19.2228C16.741 18.9204 16.0138 18.6036 15.0778 18.2724C14.4154 18.0276 13.8322 17.7684 13.3282 17.4948C12.8386 17.2068 12.4282 16.8828 12.097 16.5228C11.7658 16.1628 11.5138 15.7524 11.341 15.2916C11.1826 14.8308 11.1034 14.298 11.1034 13.6932C11.1034 12.8724 11.3122 12.174 11.7298 11.598C12.1474 11.0076 12.7234 10.554 13.4578 10.2372C14.2066 9.92039 15.0634 9.76199 16.0282 9.76199C16.8778 9.76199 17.6554 9.84119 18.361 9.99959C19.0666 10.158 19.7074 10.3668 20.2834 10.626L19.6786 12.2892C19.1458 12.0588 18.5626 11.8644 17.929 11.706C17.3098 11.5476 16.6618 11.4684 15.985 11.4684C15.337 11.4684 14.797 11.562 14.365 11.7492C13.933 11.9364 13.609 12.2028 13.393 12.5484C13.177 12.8796 13.069 13.2684 13.069 13.7148C13.069 14.2332 13.177 14.6652 13.393 15.0108C13.609 15.3564 13.9618 15.666 14.4514 15.9396C14.941 16.2132 15.6034 16.5084 16.4386 16.8252C17.3458 17.1564 18.109 17.5164 18.7282 17.9052C19.3618 18.2796 19.837 18.7332 20.1538 19.266C20.485 19.7988 20.6506 20.4684 20.6506 21.2748ZM37.2141 17.6676C37.2141 18.8628 37.0629 19.95 36.7605 20.9292C36.4581 21.894 36.0045 22.7292 35.3997 23.4348C34.8093 24.1404 34.0677 24.6804 33.1749 25.0548C32.2965 25.4292 31.2741 25.6164 30.1077 25.6164C28.8981 25.6164 27.8469 25.4292 26.9541 25.0548C26.0613 24.666 25.3197 24.126 24.7293 23.4348C24.1389 22.7292 23.6997 21.8868 23.4117 20.9076C23.1237 19.9284 22.9797 18.8412 22.9797 17.646C22.9797 16.062 23.2389 14.6796 23.7573 13.4988C24.2757 12.318 25.0605 11.3964 26.1117 10.734C27.1773 10.0716 28.5165 9.74039 30.1293 9.74039C31.6701 9.74039 32.9661 10.0716 34.0173 10.734C35.0685 11.382 35.8605 12.3036 36.3933 13.4988C36.9405 14.6796 37.2141 16.0692 37.2141 17.6676ZM25.0317 17.6676C25.0317 18.9636 25.2117 20.0796 25.5717 21.0156C25.9317 21.9516 26.4861 22.6716 27.2349 23.1756C27.9981 23.6796 28.9557 23.9316 30.1077 23.9316C31.2741 23.9316 32.2245 23.6796 32.9589 23.1756C33.7077 22.6716 34.2621 21.9516 34.6221 21.0156C34.9821 20.0796 35.1621 18.9636 35.1621 17.6676C35.1621 15.7236 34.7589 14.2044 33.9525 13.11C33.1461 12.0012 31.8717 11.4468 30.1293 11.4468C28.9629 11.4468 27.9981 11.6988 27.2349 12.2028C26.4861 12.6924 25.9317 13.4052 25.5717 14.3412C25.2117 15.2628 25.0317 16.3716 25.0317 17.6676ZM49.3803 21.2748C49.3803 22.1964 49.1571 22.9812 48.7107 23.6292C48.2643 24.2628 47.6235 24.7524 46.7883 25.098C45.9675 25.4436 44.9955 25.6164 43.8723 25.6164C43.2963 25.6164 42.7419 25.5876 42.2091 25.53C41.6907 25.4724 41.2155 25.3932 40.7835 25.2924C40.3515 25.1772 39.9699 25.0404 39.6387 24.882V23.0244C40.1571 23.2548 40.7979 23.4636 41.5611 23.6508C42.3387 23.838 43.1379 23.9316 43.9587 23.9316C44.7219 23.9316 45.3627 23.8308 45.8811 23.6292C46.3995 23.4276 46.7883 23.1396 47.0475 22.7652C47.3067 22.3908 47.4363 21.9516 47.4363 21.4476C47.4363 20.9436 47.3283 20.5188 47.1123 20.1732C46.8963 19.8276 46.5219 19.5108 45.9891 19.2228C45.4707 18.9204 44.7435 18.6036 43.8075 18.2724C43.1451 18.0276 42.5619 17.7684 42.0579 17.4948C41.5683 17.2068 41.1579 16.8828 40.8267 16.5228C40.4955 16.1628 40.2435 15.7524 40.0707 15.2916C39.9123 14.8308 39.8331 14.298 39.8331 13.6932C39.8331 12.8724 40.0419 12.174 40.4595 11.598C40.8771 11.0076 41.4531 10.554 42.1875 10.2372C42.9363 9.92039 43.7931 9.76199 44.7579 9.76199C45.6075 9.76199 46.3851 9.84119 47.0907 9.99959C47.7963 10.158 48.4371 10.3668 49.0131 10.626L48.4083 12.2892C47.8755 12.0588 47.2923 11.8644 46.6587 11.706C46.0395 11.5476 45.3915 11.4684 44.7147 11.4684C44.0667 11.4684 43.5267 11.562 43.0947 11.7492C42.6627 11.9364 42.3387 12.2028 42.1227 12.5484C41.9067 12.8796 41.7987 13.2684 41.7987 13.7148C41.7987 14.2332 41.9067 14.6652 42.1227 15.0108C42.3387 15.3564 42.6915 15.666 43.1811 15.9396C43.6707 16.2132 44.3331 16.5084 45.1683 16.8252C46.0755 17.1564 46.8387 17.5164 47.4579 17.9052C48.0915 18.2796 48.5667 18.7332 48.8835 19.266C49.2147 19.7988 49.3803 20.4684 49.3803 21.2748Z" fill="white"/>
            </svg>
        </div>
        <!-- <svg class="mapPin-pin" viewBox="0 0 138 182.2">
            <path class="st0" d="M136.6,69.1c0,37.4-30.4,79.3-67.7,111.3C35.9,153,1.3,106.5,1.3,69.1S31.6,1.4,68.9,1.4S136.6,31.7,136.6,69.1 z"/>
        </svg> -->
        <svg class="mapPin-pin" width="98" height="144" viewBox="0 0 98 144" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-outside-1_14189_604" maskUnits="userSpaceOnUse" x="-0.399902" y="-0.400024" width="98" height="145" fill="black">
            <rect fill="white" x="-0.399902" y="-0.400024" width="98" height="145"/>
            <path ref="path" fill-rule="evenodd" clip-rule="evenodd" d="M93.6001 48.6C93.6001 58.7709 90.2258 68.1538 84.5355 75.6901C82.5132 78.5039 79.7792 81.4982 76.7527 84.8127C66.2405 96.3257 52.2001 111.703 52.2001 136.8C52.2001 138.788 50.5883 140.4 48.6001 140.4C46.6119 140.4 45.0001 138.788 45.0001 136.8C45.0001 111.703 30.9597 96.3257 20.4475 84.8127C17.421 81.4982 14.687 78.5039 12.6647 75.6901C6.97442 68.1538 3.6001 58.7709 3.6001 48.6C3.6001 23.7472 23.7473 3.59998 48.6001 3.59998C73.4529 3.59998 93.6001 23.7472 93.6001 48.6Z"/>
            </mask>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M93.6001 48.6C93.6001 58.7709 90.2258 68.1538 84.5355 75.6901C82.5132 78.5039 79.7792 81.4982 76.7527 84.8127C66.2405 96.3257 52.2001 111.703 52.2001 136.8C52.2001 138.788 50.5883 140.4 48.6001 140.4C46.6119 140.4 45.0001 138.788 45.0001 136.8C45.0001 111.703 30.9597 96.3257 20.4475 84.8127C17.421 81.4982 14.687 78.5039 12.6647 75.6901C6.97442 68.1538 3.6001 58.7709 3.6001 48.6C3.6001 23.7472 23.7473 3.59998 48.6001 3.59998C73.4529 3.59998 93.6001 23.7472 93.6001 48.6Z" :fill="fillColor"/>
            <path d="M84.5355 75.6901L81.6625 73.5208L81.637 73.5546L81.6122 73.589L84.5355 75.6901ZM76.7527 84.8127L79.4112 87.2402L79.4112 87.2402L76.7527 84.8127ZM20.4475 84.8127L17.789 87.2402L17.789 87.2402L20.4475 84.8127ZM12.6647 75.6901L15.588 73.589L15.5632 73.5546L15.5377 73.5208L12.6647 75.6901ZM87.4086 77.8594C93.5542 69.7199 97.2001 59.5805 97.2001 48.6H90.0001C90.0001 57.9613 86.8973 66.5877 81.6625 73.5208L87.4086 77.8594ZM79.4112 87.2402C82.3939 83.9735 85.2879 80.8116 87.4588 77.7912L81.6122 73.589C79.7385 76.1961 77.1644 79.0228 74.0942 82.3853L79.4112 87.2402ZM55.8001 136.8C55.8001 113.222 68.8842 98.7693 79.4112 87.2402L74.0942 82.3853C63.5968 93.882 48.6001 110.183 48.6001 136.8H55.8001ZM48.6001 144C52.5765 144 55.8001 140.776 55.8001 136.8H48.6001H48.6001V144ZM41.4001 136.8C41.4001 140.776 44.6236 144 48.6001 144V136.8H48.6001H41.4001ZM17.789 87.2402C28.316 98.7693 41.4001 113.222 41.4001 136.8H48.6001C48.6001 110.183 33.6034 93.882 23.106 82.3853L17.789 87.2402ZM9.74139 77.7911C11.9123 80.8116 14.8063 83.9735 17.789 87.2402L23.106 82.3853C20.0358 79.0228 17.4617 76.1961 15.588 73.589L9.74139 77.7911ZM9.75132e-05 48.6C9.75132e-05 59.5805 3.64598 69.7199 9.79164 77.8594L15.5377 73.5208C10.3029 66.5877 7.2001 57.9613 7.2001 48.6H9.75132e-05ZM48.6001 -2.45571e-05C21.7591 -2.45571e-05 9.75132e-05 21.7589 9.75132e-05 48.6H7.2001C7.2001 25.7354 25.7355 7.19998 48.6001 7.19998V-2.45571e-05ZM97.2001 48.6C97.2001 21.7589 75.4411 -2.45571e-05 48.6001 -2.45571e-05V7.19998C71.4647 7.19998 90.0001 25.7354 90.0001 48.6H97.2001Z" fill="url(#paint0_linear_14189_604)" mask="url(#path-1-outside-1_14189_604)"/>
            <defs>
            <linearGradient id="paint0_linear_14189_604" x1="48.6001" y1="3.59998" x2="48.6001" y2="140.4" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0.5"/>
            </linearGradient>
            </defs>
        </svg>
        <svg class="mapPin-shawdow" viewBox="0 0 47 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_14189_603)">
            <ellipse cx="23.5999" cy="16.2" rx="16.2" ry="9" fill="black" fill-opacity="0.12"/>
            </g>
            <defs>
            <filter id="filter0_f_14189_603" x="0.199902" y="-4.91142e-05" width="46.7999" height="32.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="3.6" result="effect1_foregroundBlur_14189_603"/>
            </filter>
            </defs>
        </svg>

    </div>
</template>
<script setup>
    import { ref,computed,watch,defineProps,defineEmits,defineModel,onMounted } from 'vue'
    const props = defineProps({
        value : {
            type : Boolean,
            default : ()=>{
                false;
            }
        },
        width : {
            type : Number,
            default : ()=>{
                return 97;
            }
        },
        per : {
            type : Number,
            default : ()=>{
                return null;
            }
        },
        icon : {
            type : String,
            default : ()=>{
                return null; // home
            }
        },
        popShow :{
            type : Boolean,
            default : ()=>{
                return false;
            }
        },
        photo : {
            type : Object,
            default : ()=>{
                return {
                    src : "",
                    alt : "",
                }
            }
        },
        pinText : {
            type : String,
            default : ()=>{
                return null
            }
        },
        pinColor : {
            type : String,
            default : ()=>{
                return ""
            }
        },
        sos : {
            type : Boolean,
            default : ()=>{
                return false;
            }
        },
        zIndex : {
            type : String,
            default : ()=> "100"
        }
    })
    const w = ref(0);
    const path = ref("path");
    const emits = defineEmits(['click','mapPinPopupEv'])
    const model = defineModel('popShow');
    const popupShow = ref(true)
    const piechartShow = ref(props.per !== null ? true : false);
    const popClose = ()=>{
        popupShow.value = false;
        model.value = false;
        emits("mapPinPopupEv");
    }
    const mapPinWrapperStyle= computed(()=>{
        const style = {};
        style.width = props.width + "rem";
        style.zIndex = props.zIndex;
        return style
    })
    const mapPinCircleStyle = computed(()=>{
        const style = {};
        const per = props.per * (360 / 100);
        const color = (props.per < 14) ? "#eb4b43" : (props.per < 51) ? "#ef8633" : (props.per < 75) ? "#f7cd47" : "#57DED2";
        // const price = (props.width * 0.6) + 7;
        const price = w.value + 7;
        style.width = price + "rem";
        style.height = price + "rem";
        style.top = ((props.width - price) / 2) + "rem";
        style.left = ((props.width - price) / 2) + "rem";
        style.background = `conic-gradient(${color} ${per}deg, rgba(255,255,255,0.25) ${per}deg)`;
        return style;
    })
    const pieChartCircleSstyle = computed(()=>{
        const style = {};
        const color = (props.per < 14) ? "#eb4b43" : (props.per < 51) ? "#ef8633" : (props.per < 75) ? "#f7cd47" : "#57DED2";
        style.background = color;
        return style;
    });
    const pieChartCircleEstyle = computed(()=>{
        const style = {};
        const angle = (360 * 0.01) * props.per;
        style.transform = `rotate(${angle}deg)`
        return style;
    });
    const pieChartCircleECstyle = computed(()=>{
        const style = {};
        const color = (props.per < 14) ? "#eb4b43" : (props.per < 51) ? "#ef8633" : (props.per < 75) ? "#f7cd47" : "#57DED2";
        style.background = color;
        return style;
    })
    const mapPinIconCircleStyle = computed(()=>{
        const style = {};
        const price = w.value;
        style.width = price + "rem";
        style.height = price + "rem";
        style.top = ((props.width - price) / 2) + "rem";
        style.left = ((props.width - price) / 2) + "rem";
        style.background = fillColor.value;
        return style;
    })
    /* 241212 : 추가 */
    const mapPinIconIconStyle = computed(()=>{
        const style = {};
        const price = w.value;
        style.width = price + "rem";
        style.height = price + "rem";
        style.top = ((props.width - price) / 2) + "rem";
        style.left = ((props.width - price) / 2) + "rem";
        return style;
    })
    /* // 241212 : 추가 */
    const fillColor = computed(()=>{
        let color = "#000";
        if(props.pinColor === 'blue'){
            color = "#6CA7F4";
        }else if(props.pinColor === 'gray'){
            color = "#9F9F9F";
        }else if(props.pinColor === 'purple'){
            color = "#C483F9";
        }else if(props.pinColor === 'orange'){
            color = "#FFA143";
        }else if(props.pinColor === 'pink'){
            color = "#F88BD4";
        }else if(props.pinColor === 'yellow'){
            color = "#F1CB3A";
        }else if(props.pinColor === 'black'){
            color = "#000";
        }else if(props.pinColor === 'green'){
            color = "#34C759";
        }else if(props.pinColor === 'red'){
            color = "#F00";
        }else if(props.pinColor === 'bluegreen'){
            color = "#1ED1D7";
        
        }else if( typeof(props.pinColor) === 'string' && ( props.pinColor.length === 4 || props.pinColor.length === 7 ) && props.pinColor.match(/^#/g)){
            color = props.pinColor
        }
        return color;
    })
    const firstNameStyle = computed(()=>{
        const style = {};
        style.fontSize = (props.width * 0.55) + "rem"
        return style;
    })
    const setCircleSize = ()=>{
        const style = path.value.getBoundingClientRect();
        w.value = (props.per !== null && props.per > -1) ? style.width - 17 :  style.width - 10;
    }
    const click = ()=>{
        emits('click')
    }
    watch(()=>props.width,()=>{
        setCircleSize();
    })
    onMounted(()=>{
        setCircleSize();
    })
</script>
<style type="scss" scoped>
    .mapPin-wrapper{
        position:relative;
        z-index:100;
        display:inline-block;
        width:80rem;
        .mapPin-pin{
            width:100%;
            height:100%;
        }
        .mapPin-shawdow{
            position:absolute;
            left:50%;
            bottom:3rem;
            transform:translate(-50%,50%);
        }
    }

    .mapPin-pieChart{
        position:absolute;
        z-index:10;
        top:5rem;
        left:5rem;
        width:70rem;
        height:70rem;
        border-radius:50%;
        /* transform-origin:50%; */
        /* background:conic-gradient(#db4e59 40deg, #57DED2 40deg); */
        &:before{
            content:"";
            position:absolute;
            top:50%;
            left:50%;
            width:calc(100% - 10rem);
            height:calc(100% - 10rem);
            border-radius:50%;
            transform:translate(-50%,-50%);
        }
        &> .s{
            position:absolute;
            top:50%;
            left:50%;
            z-index:20000;
            width:3.5rem;
            height:3.5rem;
            border-radius:50%;
            transform-origin:50%;
        }
        &> .s{
            top:0;
            transform:translate(-50%,0)
        }
        &> .e{
            position:absolute;
            top:0;
            left:0;
            right:-0.3rem;
            bottom:-0.3rem;
            transform-origin:50%;
            border-radius:50%;
            z-index:1000;
            &> .c{
                content:"";
                position:absolute;
                top:0;
                left:50%;
                width:3.5rem;
                height:3.5rem;
                border-radius:50%;
                transform:translate(-50%,0);
                background:red;
            }
        }
    }
    /* 241212 : 추가 */
    .mapPin-icon-icon{
        position:absolute;
        top:10rem;
        left:10rem;
        z-index:50;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:50%;
        background:#fff;
        &> svg{
            width:55%;
        }
    }
    /* // 241212 : 추가 */
    .mapPin-icon-circle{
        position:absolute;
        top:10rem;
        left:10rem;
        z-index:50;
        display:flex;
        align-items:center;
        justify-content:center;
        width:57rem;
        border-radius:50%;
        overflow:hidden;
        background:yellow;
        &> img{
            position:absolute;
            top:50%;
            left:50%;
            width:100%;
            height:100%;
            transform:translate(-50%,-50%);
        }
        &> p{
            display:flex;
            align-items:center;
            justify-content:center;
            padding:0;
            margin:0;
            font-size: 2em;
            font-style: normal;
            font-weight: 300;
            line-height: 1;
            letter-spacing: 0.288rem;
            color:#fff;
        }
        &> .none-icon{
            position:relative;
            display:block;;
            width:calc(100% - 2rem);
            height:calc(100% - 2rem);
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            &> svg{
                position:absolute;
                width:100%;
                height:100%;
            }
        }
    }
    /* 241212 : 수정 */
    .mapPinPop{
        position:absolute;
        top:0;
        left:50%;
        z-index:100;
        transform:translate(-50%,calc(-100% - 10rem));
    }
    .mapPinPopInnerWrap{
        display:flex;
        border:1rem solid #ededed;
        border-radius:5rem;
        background:#fff;
    }
    .mapPinPopHeader{
        display:flex;
        align-items:center;
        justify-content:center;
        width:45rem;
        height:40rem;
        border-radius: 12px 0px 0px 0px;
        background: #1677FF;
    }
    .mapPinPop-con{
        display:flex;
        align-items:center;
        height:40rem;
        padding:0 14rem;
        font-size: 12rem;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 1rem;
        line-height:1;
        white-space:nowrap;
        color:#222;
        border-radius:0px 12px 12px 0px;
        box-shadow:0px 2px 48px 0px rgba(0, 0, 0, 0.08);
        background:#fff;
        &> .arrow{
            display:inline-block;
            margin:0 0 0 14rem;
        }
    }
    /* // 241212 : 수정 */
    .mapPinPop-btn{
        display:flex;
        justify-content:flex-end;
        width:100%;
    }
    .mapPin-sos{
        position:absolute;
        top:0;
        right:11rem;
        z-index:100;
        transform:translate(100%,0);
    }
</style>
<template>
    <i class="camera-icon-circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
            <g filter="url(#filter0_d_14249_6397)">
            <circle cx="19" cy="14.2998" r="14" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_d_14249_6397" x="0.2" y="0.299805" width="37.6" height="37.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4.8"/>
            <feGaussianBlur stdDeviation="2.4"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14249_6397"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14249_6397" result="shape"/>
            </filter>
            </defs>
        </svg>
        <span class="camera-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M14.9757 15.4764H3.45571C3.15018 15.4764 2.85717 15.355 2.64112 15.139C2.42508 14.9229 2.30371 14.6299 2.30371 14.3244V6.26037C2.30371 5.95484 2.42508 5.66183 2.64112 5.44578C2.85717 5.22974 3.15018 5.10837 3.45571 5.10837H5.75971L6.91171 3.38037H11.5197L12.6717 5.10837H14.9757C15.2812 5.10837 15.5743 5.22974 15.7903 5.44578C16.0063 5.66183 16.1277 5.95484 16.1277 6.26037V14.3244C16.1277 14.6299 16.0063 14.9229 15.7903 15.139C15.5743 15.355 15.2812 15.4764 14.9757 15.4764Z" fill="#8C8D89"/>
                <path d="M9.21602 12.5966C10.6475 12.5966 11.808 11.4361 11.808 10.0046C11.808 8.57308 10.6475 7.4126 9.21602 7.4126C7.7845 7.4126 6.62402 8.57308 6.62402 10.0046C6.62402 11.4361 7.7845 12.5966 9.21602 12.5966Z" fill="white"/>
            </svg>
        </span>
    </i>
</template>
<style type="scss" scoped>

    .camera-icon-circle{
        position:absolute;
        bottom:-8rem;
        right:-4rem;
        width:38rem;
        height:38rem;
        &> .camera-icon{
            position:absolute;
            top:calc(50% - 3rem);
            left:calc(50% + 1rem);
            transform:translate(-50%,-50%);
        }
    }
</style>

<template>
    <div class="dummy-table-layout">
        <div class="dummy-box-area-rec"><MapPin /></div>
        <div class="dummy-box-area-rec"><MapPin :photo="photo" />:photo="photo"</div>
        <div class="dummy-box-area-rec"><MapPin pinText="이" :per="45" /></div>
        <div class="dummy-box-area-rec"><MapPin pinText="" :per="45" /></div>
        <div class="dummy-box-area-rec"><MapPin pinText="홍" pinColor="blue" />  pinText="홍"<br />pinColor="blue"</div>
        <div class="dummy-box-area-rec"><MapPin /></div>
        <div class="dummy-box-area-rec">
            <MapPin type="pie" v-model:popShow="popShow" :per="5" :zIndex="101" sos>
                <a href="tel:01099999999">010-0000-0000</a>번호로 연락 주세요
            </MapPin>
            <a-button @click="popEv">팝업</a-button>
        </div>
        <div class="dummy-box-area-rec"><MapPin type="pie" :per="30" :photo="photo" /><div> type="pie"<br />:per="30"<br />:photo="photo"</div></div>
        <div class="dummy-box-area-rec"><MapPin type="pie" :per="35" /><div> :per="35"<br />icon="house"</div></div>
        <div class="dummy-box-area-rec"><MapPin type="pie" :per="70" :photo="photo" /><div>per="70"</div></div>
        <div class="dummy-box-area-rec"><MapPin type="pie" :per="90" /><div>type="pie"<br />:per="90" </div></div>
        <div class="dummy-box-area-rec"><MapPin type="pie" :per="100" icon="house" /><div>per="100"</div></div>
        
        <div class="dummy-box-area-rec"><MapPin pinColor="blue" />pinColor="blue"</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="gray" />pinColor="gray"</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="orange" />pinColor="orange"</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="purple" />pinColor="purple"</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="pink" />pinColor="pink"</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="yellow" />pinColor="yellow"</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="black" />pinColor="black"</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="green" />pinColor="green"</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="red" />pinColor="red"</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="bluegreen" />pinColor="bluegreen"</div>
        
        <div class="dummy-box-area-rec"><MapPin pinColor="blue" :per="Math.random() * 100" />pinColor="blue"<br />:per="Math.random() * 100"</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="gray" :per="Math.random() * 100" />pinColor="gray"<br />:per="Math.random() * 100"</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="orange" :per="Math.random() * 100" />pinColor="orange"<br />:per="Math.random() * 100"</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="purple" :per="Math.random() * 100" />pinColor="purple"<br />:per="Math.random() * 100"</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="pink" :per="Math.random() * 100" />pinColor="pink"<br />:per="Math.random() * 100"</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="yellow" :per="Math.random() * 100" />pinColor="yellow"<br />:per="Math.random() * 100"</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="black" :per="Math.random() * 100" />pinColor="black"<br />:per="Math.random() * 100"</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="green" :per="Math.random() * 100" />pinColor="green"<br />:per="Math.random() * 100"</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="red" :per="Math.random() * 100" />pinColor="red"<br />:per="Math.random() * 100"</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="bluegreen" :per="Math.random() * 100" />pinColor="bluegreen"<br />:per="Math.random() * 100"</div>

        <div class="dummy-box-area-rec"><MapPin pinText="홍" pinColor="blue" />  pinText="홍"<br />pinColor="blue"</div>
        <div class="dummy-box-area-rec"><MapPin pinText="홍" pinColor="gray" />  pinText="홍"<br />pinColor="gray"</div>
        <div class="dummy-box-area-rec"><MapPin pinText="홍" pinColor="orange" />  pinText="홍"<br />pinColor="orange"</div>
        <div class="dummy-box-area-rec"><MapPin pinText="홍" pinColor="purple" />  pinText="홍"<br />pinColor="purple"</div>
        <div class="dummy-box-area-rec"><MapPin pinText="홍" pinColor="pink" />  pinText="홍"<br />pinColor="pink"</div>
        <div class="dummy-box-area-rec"><MapPin pinText="홍" pinColor="yellow" />  pinText="홍"<br />pinColor="yellow"</div>
        <div class="dummy-box-area-rec"><MapPin pinText="홍" pinColor="black" />  pinText="홍"<br />pinColor="black"</div>
        <div class="dummy-box-area-rec"><MapPin pinText="홍" pinColor="green" />  pinText="홍"<br />pinColor="green"</div>
        <div class="dummy-box-area-rec"><MapPin pinText="홍" pinColor="red" />  pinText="홍"<br />pinColor="red"</div>
        <div class="dummy-box-area-rec"><MapPin pinText="홍" pinColor="bluegreen" />  pinText="홍"<br />pinColor="bluegreen"</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="#076AEB" icon="home" />  pinColor="#076AEB"<br />icon="home"</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="blue"  icon="home" />  pinColor="blue<br /> icon="home""</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="gray"  icon="home" />  pinColor="gray<br /> icon="home""</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="orange"  icon="home" />  pinColor="orange<br /> icon="home""</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="purple"  icon="home" />  pinColor="purple<br /> icon="home""</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="pink"  icon="home" />  pinColor="pink<br /> icon="home""</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="yellow"  icon="home" />  pinColor="yellow<br /> icon="home""</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="black"  icon="home" />  pinColor="black<br /> icon="home""</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="green"  icon="home" />  pinColor="green<br /> icon="home""</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="red"  icon="home" />  pinColor="red<br /> icon="home""</div>
        <div class="dummy-box-area-rec"><MapPin pinColor="bluegreen"  icon="home" />  pinColor="bluegreen<br /> icon="home""</div>
        
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    const popShow = ref(true);
    const popEv = ()=>{
        popShow.value = true;
    }
    const photo = ref({
        src : require('../../assets/img/dummy-profile01.jpeg'),
        alt : '홍길동님의 프로필 사진입니다'
    })
</script>
<style type="scss" scoped>
    .dummy-table-layout{
        display:flex;
        flex-wrap:wrap;
        align-items:flex-start;
    }
    .dummy-box-area-rec{
        display:inline-flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:25%;
        padding:10rem 0;
    }
</style>
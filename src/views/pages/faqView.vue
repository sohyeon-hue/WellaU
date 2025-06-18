<template>
    <div class="content-wrapper full">
        <div class="content-top-area-bopx pt0">
            <SearchInput v-model:value="textField" :placeholder="placeholder" @enter="enterEvent" @searchIcon="enterEvent" />
        </div>
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <AccordionBox v-model:open="accordionOpen" :list="accordionList" />
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    const accordionList = ref([])
    for(let i=0; i<20; i++){
        accordionList.value.push(
            {
                tit : 'def',
                date : '2024.08.25',
                con : '안녕하세요. WellaU 입니다WellaU 서비스를 이용해주시는 회원 여러분께 감사드리며, WellaU 개인정보 처리방침 변경에 대한 안내 말씀 드립니다.<br />1. 변경 내용 <br /><br />• 키즈폰 서비스 종료에 따라 WellaU 서비스에서 수집하는 개인정보 항목을 현행화합니다.<br />• 디지털카드 서비스에서 수집하는 개인정보 항목을 현행화합니다.<br />• WellaU 계정을 사용하지 않는 티스토리 회원의 수집하는 개인정보 항목을 현행화합니다.<br />• 톡학생증 서비스의 제3자 제공 내역을 현행화합니다<br />• 문자메시지 발송 업무를 수행하는 수탁사를 현행화합니다.<br /><br />2. 변경 상세<br /><br />[변경전]<br />2. 개인정보 수집 > 서비스에서 별도로 수집하는 개인정보 항목(팝업) > WellaU<br />',
                show : true,
            },
            {
                tit : 'WellaU 업데이트',
                date : '2024.09.11',
                con : 'WellaU 긴급 정검 안내',
                show : true,
            },
            {
                tit : 'abc',
                date : '2024.08.25',
                con : '안녕하세요. WellaU 입니다WellaU 서비스를 이용해주시는 회원 여러분께 감사드리며, WellaU 개인정보 처리방침 변경에 대한 안내 말씀 드립니다.<br />1. 변경 내용 <br /><br />• 키즈폰 서비스 종료에 따라 WellaU 서비스에서 수집하는 개인정보 항목을 현행화합니다.<br />• 디지털카드 서비스에서 수집하는 개인정보 항목을 현행화합니다.<br />• WellaU 계정을 사용하지 않는 티스토리 회원의 수집하는 개인정보 항목을 현행화합니다.<br />• 톡학생증 서비스의 제3자 제공 내역을 현행화합니다<br />• 문자메시지 발송 업무를 수행하는 수탁사를 현행화합니다.<br /><br />2. 변경 상세<br /><br />[변경전]<br />2. 개인정보 수집 > 서비스에서 별도로 수집하는 개인정보 항목(팝업) > WellaU<br />',
                show : true,
            },
            {
                tit : 'WellaU 정기 정검 안내​',
                date : '2024.09.10',
                con : 'WellaU 긴급 정검 안내',
                show : true,
            },
            {
                tit : '마바사',
                date : '2024.08.25',
                con : '안녕하세요. WellaU 입니다WellaU 서비스를 이용해주시는 회원 여러분께 감사드리며, WellaU 개인정보 처리방침 변경에 대한 안내 말씀 드립니다.<br />1. 변경 내용 <br /><br />• 키즈폰 서비스 종료에 따라 WellaU 서비스에서 수집하는 개인정보 항목을 현행화합니다.<br />• 디지털카드 서비스에서 수집하는 개인정보 항목을 현행화합니다.<br />• WellaU 계정을 사용하지 않는 티스토리 회원의 수집하는 개인정보 항목을 현행화합니다.<br />• 톡학생증 서비스의 제3자 제공 내역을 현행화합니다<br />• 문자메시지 발송 업무를 수행하는 수탁사를 현행화합니다.<br /><br />2. 변경 상세<br /><br />[변경전]<br />2. 개인정보 수집 > 서비스에서 별도로 수집하는 개인정보 항목(팝업) > WellaU<br />',
                show : true,
            },
            {
                tit : 'WellaU 긴급 정검 안내',
                date : '2024.09.08',
                con : 'WellaU 긴급 정검 안내',
                show : true,
            },
            {
                tit : '서비스 이용 약관 개정 안내',
                date : '2024.08.25',
                con : '안녕하세요. WellaU 입니다WellaU 서비스를 이용해주시는 회원 여러분께 감사드리며, WellaU 개인정보 처리방침 변경에 대한 안내 말씀 드립니다.<br />1. 변경 내용 <br /><br />• 키즈폰 서비스 종료에 따라 WellaU 서비스에서 수집하는 개인정보 항목을 현행화합니다.<br />• 디지털카드 서비스에서 수집하는 개인정보 항목을 현행화합니다.<br />• WellaU 계정을 사용하지 않는 티스토리 회원의 수집하는 개인정보 항목을 현행화합니다.<br />• 톡학생증 서비스의 제3자 제공 내역을 현행화합니다<br />• 문자메시지 발송 업무를 수행하는 수탁사를 현행화합니다.<br /><br />2. 변경 상세<br /><br />[변경전]<br />2. 개인정보 수집 > 서비스에서 별도로 수집하는 개인정보 항목(팝업) > WellaU<br />',
                show : true,
            },
            {
                tit : '가나다',
                date : '2024.08.25',
                con : '안녕하세요. WellaU 입니다WellaU 서비스를 이용해주시는 회원 여러분께 감사드리며, WellaU 개인정보 처리방침 변경에 대한 안내 말씀 드립니다.<br />1. 변경 내용 <br /><br />• 키즈폰 서비스 종료에 따라 WellaU 서비스에서 수집하는 개인정보 항목을 현행화합니다.<br />• 디지털카드 서비스에서 수집하는 개인정보 항목을 현행화합니다.<br />• WellaU 계정을 사용하지 않는 티스토리 회원의 수집하는 개인정보 항목을 현행화합니다.<br />• 톡학생증 서비스의 제3자 제공 내역을 현행화합니다<br />• 문자메시지 발송 업무를 수행하는 수탁사를 현행화합니다.<br /><br />2. 변경 상세<br /><br />[변경전]<br />2. 개인정보 수집 > 서비스에서 별도로 수집하는 개인정보 항목(팝업) > WellaU<br />',
                show : true,
            },
        )
    }
    const accordionOpen = ref({index:-1,open:false});
    const textField = ref("");
    const placeholder = ref("검색어");

    const enterEvent = (val)=>{
        const regExp = new RegExp(val,'gi');
        accordionList.value.forEach((l,i)=>{
            if(l.tit.match(regExp) || val === ""){
                accordionList.value[i].show = true;
            }else{
                accordionList.value[i].show = false;
            }
        })
    }
</script>
<style type="scss" scoped>
</style>
<template>
    <div class="content-wrapper">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="title-wrappper">
                    <h2 class="title" v-html="title"></h2>
                </div>

                <p  class="content-text-info">{{infoText}}</p>
                <a-input v-model:value="textFieldPhone" class="wellau-input" placeholder="이름" />
                <p  class="content-text-info">성별을 선택해주세요</p>
                <div class="sleect-set">
                    <div class="wrapper-select-set">
                        <div class="wrapper-select-set-list">
                            <a-select v-model:value="selectSex" :showArrow="false" class="wellau-select" placeholder="성별" :options="optionsSex"/>
                        </div>
                    </div>
                </div>
                <p  class="content-text-info">생일을 입력해주세요</p>
                <div class="sleect-set">
                    <div class="wrapper-select-set">
                        <div class="wrapper-select-set-list">
                            <a-select v-model:value="selectYear" :showArrow="false" class="wellau-select" placeholder="년" :options="optionsYear" @change="setDate"/>
                        </div>
                        <div class="wrapper-select-set-list">
                            <a-select v-model:value="selectMonth" :showArrow="false" class="wellau-select" placeholder="월" :options="optionsMonth" @change="setDate"/>
                        </div>
                        <div class="wrapper-select-set-list">
                            <a-select v-model:value="selectDate" :showArrow="false" class="wellau-select" placeholder="일" :options="optionsDate"/>
                        </div>
                    </div>
                </div>
                <div class="btn-set">
                    <a-button type="primary" class="wellau-btn" :disabled="disabled">가입하기</a-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'

    const title = ref("Well;aU 로그인 시 사용할<br />프로필을 등록해주세요");
    const infoText = ref("이름을 입력해주세요.");
    const textFieldPhone = ref("");
    const disabled = ref(false);
    const selectSex = ref(undefined);
    const optionsSex = [{value:"남"},{value:"여"}];
    const selectYear = ref(undefined);
    let optionsYear = []
    for(let i=new Date().getFullYear(); i>=1900; i--){
        optionsYear.push({
            value : (i + 1) + "년"
        })
    }
    const selectMonth = ref(undefined);
    let optionsMonth = [];
    for(let i=0; i<12; i++){
        optionsMonth.push({
            value : (i + 1) + "월"
        })
    }
    const selectDate = ref(undefined);
    const optionsDate = ref([]);
    const setDate = ()=>{
        selectDate.value = undefined;
        optionsDate.value = [];
        if(selectYear.value !== undefined && selectMonth.value !== undefined){
            const y = selectYear.value.replace(/\D/g,'');
            const m = selectMonth.value.replace(/\D/g,'');
            const setDate = new Date(y,m,0);
            for(let i=0; i<setDate.getDate(); i++){
                optionsDate.value.push({
                    value : (i + 1) + "일"
                })
            }
        }
    }
</script>
<style type="scss" scoped>
</style>
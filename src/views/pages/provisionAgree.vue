<template>
    <div class="content-wrapper">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="title-wrappper">
                    <h2 class="title" v-html="title"></h2>
                </div>
                <div class="checkbox-list">
                    <div class="total">
                        <a-checkbox v-model:checked="allCheck.checked" class="wellau-checkbox sizeBig" :disabled="allCheck.dis" @change="allCheckChangeEv">전체동의</a-checkbox>
                    </div>
                    <ul class="list">
                        <li><!-- 241211 disabled 시 disabled 클래스 추가 -->
                            <a-checkbox v-model:checked="check[0].checked" class="wellau-checkbox" :disabled="check[0].dis"  @change="checkChangeEv">[필수] 서비스 이용약관 동의</a-checkbox>
                            <i class="arrow"></i><!-- 241214 -->
                        </li>
                        <li><!-- 241211 disabled 시 disabled 클래스 추가 -->
                            <a-checkbox v-model:checked="check[1].checked" class="wellau-checkbox" :disabled="check[1].dis"  @change="checkChangeEv">[필수] 위치기반 서비스 이용약관 동의</a-checkbox>
                            <i class="arrow"></i><!-- 241214 -->
                        </li>
                        <li><!-- 241211 disabled 시 disabled 클래스 추가 -->
                            <a-checkbox v-model:checked="check[2].checked" class="wellau-checkbox" :disabled="check[2].dis"  @change="checkChangeEv">[필수] 개인정보 처리방침 동의</a-checkbox>
                            <i class="arrow"></i><!-- 241214 -->
                        </li>
                    </ul>
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

    const title = ref("Well;aU이용을 위해​<br />필수 서비스 약관에 동의해 주세요.");
    const disabled = ref(false);
    const allCheck = ref({checked:false,dis:false})
    const check = ref([
        {checked:false,dis:false},
        {checked:false,dis:false},
        {checked:false,dis:false},
    ])

    const allCheckChangeEv = ()=>{
        const checked = allCheck.value.checked;
        check.value.forEach((c)=>{
            c.checked = checked;
        })
    }
    const checkChangeEv = ()=>{
        let checked = true;
        for(let i=0; i<check.value.length; i++){
            const c = check.value[i];
            if(c.checked === false){
                checked = false;
                break;
            }
        }
        allCheck.value.checked = checked;
    }
</script>
<style type="scss" scoped>
</style>
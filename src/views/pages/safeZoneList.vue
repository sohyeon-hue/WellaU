<template>
    <div class="content-wrapper full">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="setting-box-top no-line">
                    <div class="icon-texte-round-box">
                        <h2>
                            안심존 설정
                        </h2>
                        <p>
                            안심존을 설정하여 그룹원들의 안심존 진입/이탈을<br />
                            감지하여 그룹원의 안전을 지켜보세요
                        </p>
                    </div>
                    <div class="title-wrappper sub">
                        <h2 class="title">안심존 목록</h2>
                    </div>
                </div>
                <div class="setting-box-scroll pt0">
                    <SafeZoneList v-for="(l,index) in list" :key="'list_'+index" :name="l.name" :nickname="l.nickname" :address="l.address" />
                </div>
            </div>
        </div>
        <div class="btn-set">
            <a-button type="primary" class="wellau-btn">생성하기</a-button>
        </div>
    </div>

    <!-- moadl -->
    <a-modal modal v-model:open="ModalGroupShow" title="" class="wellau-modal" @ok="handleOk">
        <p class="modal-content">
            그룹장을 [{{name}}] 님에게 넘기겠습니까?
        </p>
        <template #footer>
            <div class="btn-set horizontal">
                <a-button @click="groupModalClose">취소</a-button>
                <a-button @click="groupModalClose">넘기기</a-button>
            </div>
        </template>
    </a-modal>
    <!-- moadl -->
    <a-modal modal v-model:open="ModalremoveShow" title="" class="wellau-modal" @ok="handleOk">
        <p class="modal-content">
            [{{name}}] 님을 내보내시겠습니까?
        </p>
        <template #footer>
            <div class="btn-set horizontal">
                <a-button @click="removeModalClose">취소</a-button>
                <a-button @click="removeModalClose">내보내기</a-button>
            </div>
        </template>
    </a-modal>
</template>
<script setup>
    import { ref } from 'vue'

    const ModalGroupShow = ref(false);
    const ModalremoveShow = ref(false);
    const groupModalClose = ()=>{
        ModalGroupShow.value = false;
    }
    const removeModalClose = ()=>{
        ModalremoveShow.value = false;
    }

    const name = ref("");

    const list = ref([]);
    for(let i=0; i<10; i++){
        list.value.push(
        {
            name : "홍길동",
            nickname : "집근처",
            address : "서울시 송파구 장지동 59-83",
        })
    }
</script>
<style type="scss" scoped>
</style>
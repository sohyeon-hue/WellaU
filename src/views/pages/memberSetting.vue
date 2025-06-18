<template>
    <div class="content-wrapper full">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="setting-box-top">
                    <div class="top">
                        <p  class="content-text-info">그룹명 설정</p>
                        <a-input v-model:value="textFieldName" class="wellau-input" placeholder="그룹명" />
                    </div>
                    <div class="both">
                        <p  class="content-text-info">그룹원 설정</p>
                    </div>
                </div>
                <div class="setting-box-scroll">
                    <ProfileBox :name="list.name" :img="list.img" v-for="(list,index) in profileList" :key="'profile_' + index">
                        <template #rightArea>
                            <IconButton icon="group" @click="groupModalOpen(list)" />
                            <IconButton icon="minus" @click="removeModalOpen(list)" />
                        </template>
                    </ProfileBox>
                </div>
            </div>
        </div>
        <div class="btn-set">
            <a-button class="wellau-btn">그룹 지우기</a-button>
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


    const img1 = ref({
        // src : require('@img/dummy-profile01.jpeg'),
        src : null,
        alt : '홍길동님의 프로필 사진입니다'
    })
    const img2 = ref({
        // src : require('@img/dummy-profile02.jpeg'),
        src : null,
        alt : '김응삼 프로필 사진입니다'
    })
    const img3 = ref({
        // src : require('@img/dummy-profile03.jpeg'),
        src : null,
        alt : '김은지 프로필 사진입니다'
    })

    const profileList = ref([
        {
            name : "홍길동",
            img : img1,
        },
        {
            name : "김응삼",
            img : img2,
        },
        {
            name : "김은지",
            img : img3,
        },
        {
            name : "홍길동",
            img : img1,
        },
        {
            name : "김응삼",
            img : img2,
        },
        {
            name : "김은지",
            img : img3,
        },
        {
            name : "홍길동",
            img : img1,
        },
        {
            name : "김응삼",
            img : img2,
        },
        {
            name : "김은지",
            img : img3,
        },
        {
            name : "홍길동",
            img : img1,
        },
        {
            name : "김응삼",
            img : img2,
        },
        {
            name : "김은지",
            img : img3,
        },
        {
            name : "홍길동",
            img : img1,
        },
        {
            name : "김응삼",
            img : img2,
        },
        {
            name : "김은지",
            img : img3,
        },
        {
            name : "홍길동",
            img : img1,
        },
        {
            name : "김응삼",
            img : img2,
        },
        {
            name : "김은지",
            img : img3,
        },
        {
            name : "홍길동",
            img : img1,
        },
        {
            name : "김응삼",
            img : img2,
        },
        {
            name : "김은지",
            img : img3,
        },
        {
            name : "홍길동",
            img : img1,
        },
        {
            name : "김응삼",
            img : img2,
        },
        {
            name : "김은지",
            img : img3,
        },
        {
            name : "홍길동",
            img : img1,
        },
        {
            name : "김응삼",
            img : img2,
        },
        {
            name : "김은지",
            img : img3,
        },
    ])
    const textFieldName = ref("");

    const ModalGroupShow = ref(false);
    const ModalremoveShow = ref(false);

    const groupModalOpen = (val)=>{
        name.value = val.name;
        ModalGroupShow.value = true;
    }
    const groupModalClose = ()=>{
        ModalGroupShow.value = false;
    }

    const removeModalOpen = (val)=>{
        name.value = val.name;
        ModalremoveShow.value = true;
    }
    const removeModalClose = ()=>{
        ModalremoveShow.value = false;
    }

    const name = ref("");
</script>
<style type="scss" scoped>
</style>
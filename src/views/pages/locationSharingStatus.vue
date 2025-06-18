<template>
    <div class="content-wrapper full">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="setting-box-top">
                    <div class="top">
                        <p  class="content-text-info">나의 위치 공유 상태</p>
                        <ProfileBox name="홍길동" :img="img1">
                            <template #rightArea>
                                <a-switch v-model:checked="switchChecked" class="wellau-switch big-size" />
                            </template>
                        </ProfileBox>
                    </div>
                    <div class="both">
                        <p  class="content-text-info">그룹원의 위치 공유 상태</p>
                    </div>
                </div>
                <div class="setting-box-scroll">
                    <ProfileBox name="김응삼" conText="위치 공유 중" :img="img2">
                        <template #rightArea>
                            <IconButton icon="sharing" @click="iconButtonClick" />
                        </template>
                    </ProfileBox>
                    <ProfileBox name="김은지" conText="위치 공유 해제함" :img="img3">
                        <template #rightArea>
                            <IconButton icon="sharing" @click="iconButtonClick" />
                        </template>
                    </ProfileBox>
                    <ProfileBox name="김은지" conText="위치 공유 해제함" :img="img3">
                        <template #rightArea>
                            <IconButton icon="sharing" @click="iconButtonClick" />
                        </template>
                    </ProfileBox>
                    <ProfileBox name="김은지" conText="위치 공유 해제함" :img="img3">
                        <template #rightArea>
                            <IconButton icon="sharing" @click="iconButtonClick" />
                        </template>
                    </ProfileBox>
                    <ProfileBox name="김은지" conText="위치 공유 해제함" :img="img3">
                        <template #rightArea>
                            <IconButton icon="sharing" @click="iconButtonClick" />
                        </template>
                    </ProfileBox>
                    <ProfileBox name="김은지" conText="위치 공유 해제함" :img="img3">
                        <template #rightArea>
                            <IconButton icon="sharing" @click="iconButtonClick" />
                        </template>
                    </ProfileBox>
                    <ProfileBox name="김은지" conText="위치 공유 해제함" :img="img3">
                        <template #rightArea>
                            <IconButton icon="sharing" @click="iconButtonClick" />
                        </template>
                    </ProfileBox>
                    <ProfileBox name="김은지" conText="위치 공유 해제함" :img="img3">
                        <template #rightArea>
                            <IconButton icon="sharing" @click="iconButtonClick" />
                        </template>
                    </ProfileBox>
                    <ProfileBox name="김은지" conText="위치 공유 해제함" :img="img3">
                        <template #rightArea>
                            <IconButton icon="sharing" @click="iconButtonClick" />
                        </template>
                    </ProfileBox>
                    <ProfileBox name="김은지" conText="위치 공유 해제함" :img="img3">
                        <template #rightArea>
                            <IconButton icon="sharing" @click="iconButtonClick" />
                        </template>
                    </ProfileBox>
                    <ProfileBox name="김은지" conText="위치 공유 해제함" :img="img3">
                        <template #rightArea>
                            <IconButton icon="sharing" @click="iconButtonClick" />
                        </template>
                    </ProfileBox>
                    <ProfileBox name="김은지" conText="위치 공유 해제함" :img="img3">
                        <template #rightArea>
                            <IconButton icon="sharing" @click="iconButtonClick" />
                        </template>
                    </ProfileBox>
                    <ProfileBox name="김은지" conText="위치 공유 해제함" :img="img3">
                        <template #rightArea>
                            <IconButton icon="sharing" @click="iconButtonClick" />
                        </template>
                    </ProfileBox>
                    <ProfileBox name="김은지" conText="위치 공유 해제함" birthday :img="img3">
                        <template #rightArea>
                            <IconButton icon="sharing" @click="iconButtonClick" />
                        </template>
                    </ProfileBox>
                    <ProfileBox name="김은지" conText="위치 공유 해제함" birthday :img="img3">
                        <template #rightArea>
                            <IconButton icon="sharing" @click="iconButtonClick" />
                        </template>
                    </ProfileBox>
                    <ProfileBox name="김은지" conText="위치 공유 해제함" birthday :img="img3">
                        <template #rightArea>
                            <IconButton icon="sharing" @click="iconButtonClick" />
                        </template>
                    </ProfileBox>
                    <ProfileBox name="김은지" conText="위치 공유 해제함" birthday :img="img3">
                        <template #rightArea>
                            <IconButton icon="sharing" @click="iconButtonClick" />
                        </template>
                    </ProfileBox>
                    <ProfileBox name="김은지" conText="위치 공유 해제함" birthday :img="img3">
                        <template #rightArea>
                            <IconButton icon="sharing" @click="iconButtonClick" />
                        </template>
                    </ProfileBox>
                    <ProfileBox name="김은지" conText="위치 공유 해제함" birthday :img="img3">
                        <template #rightArea>
                            <IconButton icon="sharing" @click="iconButtonClick" />
                        </template>
                    </ProfileBox>
                    <ProfileBox name="김은지" conText="위치 공유 해제함" birthday :img="img3">
                        <template #rightArea>
                            <IconButton icon="sharing" @click="iconButtonClick" />
                        </template>
                    </ProfileBox>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'


    const switchChecked = ref(false);
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

    const iconButtonClick = ()=>{}
</script>
<style type="scss" scoped></style>
<template>
    <div class="content-wrapper full">
        <div class="content-top-area-bopx pt0">
            <SearchInput v-model:value="textField" :placeholder="placeholder" @input="input" @enter="enter" @searchIcon="searchIcon" />
        </div>
        <div class="content-scroll paddingSide">
            <ul class="address-search-list">
                <li v-for="(list,index) in lists" :key="'address_'+index" @click="listClick(list)">
                    <div class="t">
                        {{list.t1}}
                    </div>
                    <div class="b">
                        {{list.t2}}
                    </div>
                </li>
            </ul>
        </div>
        <div class="btn-set">
            <a-button class="wellau-btn">지도에서 선택하기</a-button>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    const textField = ref("");
    const placeholder = ref("주소 검색");

    const enter = (val)=>{
        console.log("parent enter : ",val)
    }
    const searchIcon = (val)=>{
        console.log("parent searchIcon : ",val)
    }
    const input = (val)=>{
        console.log("parent input : ",val)
    }
    const lists = ref([]);
    for(let i=0; i<20; i++){
        lists.value.push({
            t1 : "서울시 용산구 한강대로 23 (한강로3가)",
            t2 : "서울시 용산구 한강로3번 40-19",
        })
    }
    const listClick = (list)=>{
        console.log("list : ",list);
    }
</script>
<style type="scss" scoped>
</style>
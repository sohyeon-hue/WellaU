<template>
    <hr />
    <div style='height:150rem; background:gray'>
        페이지01 컴퍼넌트입니다.
    </div>
    <hr />
    value1 : {{value1}}
    <a-date-picker v-model:value="value1" :bordered="false" />
    <hr />
    textField : {{textField}}
    <a-input v-model:value="textField" placeholder="Basic usage" />
    <hr />
    searchTextField : {{searchTextField}}
    <a-input-search
      v-model:value="searchTextField"
      placeholder="input search text"
      style="width: 200px"
      @search="onSearch"
    />
    <hr />

  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Hover me
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href="javascript:;">1st menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script>
    import { ref, onMounted } from 'vue'
    import dayjs from 'dayjs';
    export default {
        name : "vuePage01",
        compoments : {
        },
        setup(){
            const value1 = ref(dayjs("2022-05-24"));
            const textField = ref("");
            const searchTextField = ref("");
            onMounted(()=>{
                console.log("onMounted : ",this)
            })
            const onSearch = (value)=>{
                console.log("value : ",value)
            }
            return{
                value1,
                textField,
                searchTextField,
                onSearch,
            }
        },
    }
</script>
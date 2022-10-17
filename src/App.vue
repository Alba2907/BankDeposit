<template>


<!--Мы выводим компонет по его названию, которое образуем динамически с помощью мета данных, получаемых из текущего роута-->
  <component :is="layout + '-layout'" v-if="layout"/>



</template>


<script>
import {useRoute} from 'vue-router'
import {computed} from "vue";
import MainLayout from "@/layout/MainLayout";
import AuthLayout from "@/layout/AuthLayout";
export default {

  setup() {
    const route = useRoute()

    return {
      layout: computed(() => route.meta.layout)

    }
  },

  components: {MainLayout, AuthLayout}

}

</script>

<template>
<div class="filter">
  <div class="form-control">
    <input type="text" placeholder="Введите имя" v-model="name">
  </div>
    <div class="form-control">
      <select v-model="status">
<!--         можно вынести весь селект в отдельный комопнент чтобы здесь было меньше кода-->
        <option disabled selected>Выберите статус</option>
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>

      </select>
    </div>

  <button class="btn warning" v-if="isActive" @click="reset">Очистить</button>
</div>



</template>

<script>

import {ref, watch, computed} from "vue";

export default {

  //делаем фильтр
  emits: ['update:modelValue'],
  props: ['modelValue'],
  setup(_, {emit}) {
    const name = ref()
    const status = ref()

    watch([name, status], values => {
      emit('update:modelValue', {
        name: values[0],
        status: values[1]
      })
    })


    // для сброса фильтра: если в имени или статусе что=то есть, значит мы что=то вписали и фильтр активирован
    const isActive = computed(() => name.value || status.value)

    return {
      name, status, isActive,
      // мы обнуляем все что есть в значении фильтра при клике на кнопку
      reset: () => {
        name.value = ''
        status.value = null
      }
    }
  }
}
</script>

<style scoped>

</style>
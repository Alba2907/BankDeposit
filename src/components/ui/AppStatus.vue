<template>

<!--  мы добавляем класс бадже обязательно и дополнительно динамический-->
  <span :class="['badge', className]">{{text}}</span>


</template>

<script>

import {ref, watch} from "vue";

export default {
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return ['active', 'cancelled', 'done', 'pending'].includes(value)
      }
    }
  },
  setup(props) {

    const classesMap = {
      active: 'primary',
      cancelled: 'danger',
      done: 'primary',
      pending: 'warning'
    }

    const textMap = {
      active: 'Активен',
      cancelled: 'Отменен',
      done: 'Завершен',
      pending: 'Выполняется'
    }

    // следим за изменинем статуса, чтобы динамически на фронте его менять, а не только на сервере
    watch(props, value => {
      className.value = classesMap[value.type]
      text.value = textMap[value.type]
    })

    const className = ref(classesMap[props.type])
    const text = ref(textMap[props.type])

    return {
      className,
      text
    }
  }

}
</script>

<style scoped>

</style>
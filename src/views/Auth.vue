<template>
<form class="card" @submit.prevent="onSubmit">
  <h1>Войти в систему</h1>
  
  <div :class="['form-control', {invalid: eError}]">
    <label for="email">Email</label>
    <input type="email" id="email" v-model="email">
    <small v-if="eError">{{ eError }}</small>
  </div>

<!--  данная запись присваивает класс форм контрол всегда, и добавляет класс инвалид, если пЕррор тру-->
  <div :class="['form-control', {invalid: pError}]">
    <label for="password">password</label>
    <input type="password" id="password" v-model="password">
    <small v-if="pError">{{ pError }}</small>
  </div>
<!--отключаем кнопку пока сабмититься форма или если много попыток-->
<button class="btn primary" type="submit" :disabled="isSubmitting || isMany">Войти</button>
  <div class="text-danger" v-if="isMany">Вы слишком часто пытаетесь войти в систему. Попробуйте позже</div>

</form>
</template>

<script>
import {useLoginForm} from "@/use/login-form";
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {error} from "@/utils/error";




export default {
  setup() {

    const store = useStore()

    const route = useRoute()

    if (route.query.message) {
      store.dispatch('setMessage', {
        value: error(route.query.message),
        type: 'warning'
      })

    }

    // мы вынесли всю логику в отдельный файл, а сюда просто импортируем его
    return {...useLoginForm()}

  }
}
</script>

<style scoped>

</style>
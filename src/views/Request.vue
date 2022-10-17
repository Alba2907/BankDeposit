<template>

  <app-loader v-if="loading"></app-loader>
<!--  мы добавляем параметр бэк, который есть в самом компонете апппейдж, если он есть мы видим кнопку, если нет - не видим, делаем мы его через пропс-->
  <app-page back title="Заявка" v-else-if="request">
    <p><strong>Имя владельца</strong>: {{request.fio}}</p>
    <p><strong>Телефон</strong>: {{request.phone}}</p>
    <p><strong>Сумма</strong>: {{currency(request.amount)}}</p>
    <p><strong>Статус</strong>: <app-status :type="request.status"/></p>

    <div class="form-control">
      <label for="status">Статус</label>
      <select id="status" v-model="status">
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>


    <button class="btn danger" @click="remove">Удалить</button>
    <button class="btn" @click="update" v-if="hasChanges">Обновить</button>
  </app-page>

  <h3 v-else class="text-center text-white">
    Заявки с ID = {{$route.params.id}} нет
  </h3>

</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {ref, onMounted, computed} from "vue";
import AppPage from "@/components/ui/AppPage";
import {useStore} from "vuex";
import AppLoader from "@/components/ui/AppLoader";
import AppStatus from "@/components/ui/AppStatus";
import {currency} from "@/utils/currency";
export default {

  setup() {
    const router = useRouter()
    const loading = ref(true)
    const route = useRoute()
    const store = useStore()
    const status = ref()
    const request = ref({})

    onMounted(async () => {
      loading.value = true
      // мы ждем пока из стора задиспачится событие и также получаем айди по роуту
      request.value = await store.dispatch('request/loadOne', route.params.id)
      status.value = request.value?.status
      loading.value = false
    })
// делаем логику, чтобы показывать кнопку обновить только если поменяли статус, значит статусы не должны быть равны
    const hasChanges = computed(() => request.value.status !== status.value)

    const remove = async () => {
      await store.dispatch('request/remove', route.params.id)
      router.push('/')
    }

    const update = async () => {
      const data = {...request.value, status: status.value, id:route.params.id }
      await store.dispatch('request/update', data)
      request.value.status = status.value
    }
    //так мы можем проверить правильный ли айди получаем(выводимый айди должен совпадать с тем, что мы видим в строке поиска бразуера)
    // console.log(route.params.id)
    return {
    loading, request, currency, remove, update, status, hasChanges

      // возвращаемся айди и обозначаем, что это либо обратиться сразу в шаблоне как мы и сделали вверху
      //  id:route.params.id
    }
  },
components: {AppPage, AppStatus, AppLoader}
}
</script>

<style scoped>

</style>
<template>

<!--  мы показываем компонент загрузки если происходит лоадинг, а иначе страницу-->
  <app-loader v-if="loading"/>

  <app-page title="Список заявок" v-else>

<!--    таким образом мы размещаем кнопку справа а не снизу-->
<template #header>
  <button class="btn primary" @click="modal = true">Создать</button>
</template>


    <request-filter v-model="filter"></request-filter>
<!--визуально вывводим наши заявки-->
<request-table :requests="requests"></request-table>


    <teleport to="body">

      <app-modal v-if="modal" title="Создать заявку" @close="modal = false">
        <request-modal @created="modal = false"/>

      </app-modal>
    </teleport>
  </app-page>
</template>

<script>

import {ref, computed, onMounted} from "vue";
import AppPage from "@/components/ui/AppPage";
import RequestTable from "@/components/request/RequestTable";
import AppModal from "@/components/ui/AppModal";
import RequestModal from "@/components/request/RequestModal";
import {useStore} from "vuex";
import AppLoader from "@/components/ui/AppLoader";
import RequestFilter from "@/components/request/RequestFilter";


export default {

  setup() {
    const store = useStore()
    // создаем флаги, которые потом меняем
    const modal = ref(false)
    const loading = ref(false)
    // создаем модель фильтер
    const filter = ref({})


    // вызываем хук чтобы в определенный момент применить нужный нам экшн а именно загрузить заявки при запуске страницы
    onMounted(async () => {
      loading.value = true
      await store.dispatch('request/load')
      loading.value = false
    })

    // получаем визуально наши заявки
    const requests = computed(() => store.getters['request/requests']
        .filter(request => {

      // если что-то в инпуте фильтра нэйм что=то написано, то мы делаем а иначе просто вернем тот же массив
      if (filter.value.name) {
        return  request.fio.includes(filter.value.name)
      }
      return request
        })

      // метод фильтр возвращает массив значит можем у него вызвать новый метод
          .filter(request => {
            if (filter.value.status) {
              // мы одновременно фильтруем и по имени и по статусу
              return filter.value.status === request.status
            }
            return request
          })

    )

    return {
      modal, requests, loading, filter}

  },
  components: {RequestFilter, AppLoader, AppPage, RequestTable, AppModal, RequestModal}
}
</script>

<template>

<h4 v-if="requests.length === 0" class="text-center">Заявок пока нет</h4>
  <table v-else class="table">
    <thead>
    <tr>
      <th>#</th>
      <th>ФИО</th>
      <th>Телефон</th>
      <th>Сумма</th>
      <th>Статус</th>
      <th>Действие</th>
    </tr>
    </thead>
    <tbody>
<!--    создаес таблицу заявок из массива заявок, получая при этом их индекс и прописываем ключ чтобы все работало-->
    <tr v-for="(request, index) in requests" :key="request.id">
      <td>{{index + 1}}</td>
      <td>{{request.fio}}</td>
      <td>{{request.phone}}</td>
      <td>{{ currency(request.amount) }}</td>
      <td><app-status :type="request.status"/></td>
      <td>
<!--         делаем кастомную ссылку, чтобы открывать заявки при нажатии-->
        <router-link v-slot="{navigate}" custom :to="{name: 'Request', params: {id: request.id}}">
        <button class="btn " @click="navigate">Открыть</button>

        </router-link>
      </td>
    </tr>
    </tbody>
  </table>




</template>

<script>
import {currency} from "@/utils/currency";
import AppStatus from "@/components/ui/AppStatus";




export default {
  components: {AppStatus},
  props: ['requests'],
  // импортим функции из файла каренси джс, чтобы использовать здесь
  setup() {



    return {currency}

  }

}
</script>

<style scoped>

</style>
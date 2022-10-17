<template>
 <app-page back title="Помощь">
   <question-item
       v-for="q in questions"
       :key="q.title"
       :question="q"
   >
   </question-item>


 </app-page>



</template>


<script>
import AppPage from "@/components/ui/AppPage";
import QuestionItem from "@/components/question/QuestionItem";


export default {
  setup() {
    const questions = [
      {title: 'Что есть в данной системе', text: 'Тут есть все для того, чтобы смотреть какие заявки'},
      {title: 'Как работает авторизация', text: 'Все сделано с помощью Firebase'}
    ]

    return {
      questions
    }
  },
  components: {AppPage, QuestionItem}
}

</script>

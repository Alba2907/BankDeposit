
// делаем локальным а не глобальным файл аксиос, чтобы работать с его помощью исключительно с заявками
import axios from "axios";
// импортируем роутера из нашей папки
import router from "@/router";


//сюда вставляем ссылку из реал тайм дата бэйс
const requestAxios = axios.create({
    baseURL: process.env.VUE_APP_FB_URL
    })


// делаем для мониторинга устаревания токена
requestAxios.interceptors.response.use( null,  error => {
   //  ошибка логина
   if (error.response.status === 401) {
    router.push('/auth?message=auth')

   }

    return Promise.reject(error);
});


// экспортируем данную константу, чтобы потом получить ее

export default requestAxios
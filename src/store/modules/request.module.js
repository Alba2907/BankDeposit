// импортируем файл аксиос чтобы им пользоваться
import axios from '../../axios/request'

// импортируем стор, чтобы получить из него токен
import store from '../index'


// данный модуль для обработки заявок

export default {

    // делает названия экшенов локальными
    namespaced: true,

    state() {
        return {
            requests: []

        }
    },
    mutations: {
        setRequests(state, requests) {
            state.requests = requests
        },
        //кладем в к массив реквест новую заявкку
        addRequest(state, request) {
            state.requests.push(request)
        }

    },
    actions: {
        // экшн по созданию заявки в бд, поэтому используем метод пост, для получения метод гет. Коммит т к нам позже понадобится работать. payload это параметр который мы получим из нашей формы и отправим на сервер, то есть сама заявка с данным
        async create({commit, dispatch}, payload) {
            try {
                // получаем токен через гетер т к он уже есть в сторе в модуле ауф
                const token = store.getters['auth/token']
                // мы обращаемя к джейсону, но также указываем парамтер по авторизации с токеном, который делали в модуле авторизации, чтобы заявки могли делать только авторизованные.  В ответ на пост запрос мы получим данные дата
                const {data} = await axios.post(`/requests.json?auth=${token}`, payload)
                //вызываем мутацию чтобы изуально отобразить заявку с сервака которая лежит в пайлод, и добавим к заявке айди
                commit('addRequest', {...payload, id:data.name})
                dispatch('setMessage', {
                    value: 'Заявка успешно создана',
                    type: 'primary'
                }, {root: true})

            } catch (e) {
                dispatch('setMessage', {
                    value: e.message,
                    type: 'danger'
                }, {root: true})
            }
        },
        // делаем запрос на сервер чтобы всегда загружать список актулаьных заявок
       async load({commit, dispatch}) {
           try {
               // получаем токен через гетер т к он уже есть в сторе в модуле ауф
               const token = store.getters['auth/token']
               // мы обращаемя к джейсону, но также указываем парамтер по авторизации с токеном, который делали в модуле авторизации, чтобы заявки могли делать только авторизованные.  get чтобы получить уже имеющиеся заявки
               const {data} = await axios.get(`/requests.json?auth=${token}`)
               //вызываем мутацию чтобы изуально отобразить заявку с сервака которая лежит в пайлод, и добавим к заявке айди
               // чтобы распарсить дату нужно превратить ее в массив. МЫ пробежимся по всему массиву ключей а потом мапом превратим его в новый массивы. таким образом мы визуально выведем все заявки на экрана
               const requests = Object.keys(data).map(id => ({...data[id], id}))
               commit('setRequests', requests)
           } catch (e) {
               dispatch('setMessage', {
                   value: e.message,
                   type: 'danger'
               }, {root: true})
           }
        },
        // для получения заявки с сервера мы копируем по сути лоад но добавляем айди, чтобы выводить именно нужную заявку а не все
        async loadOne({commit, dispatch}, id) {
            try {
                // получаем токен через гетер т к он уже есть в сторе в модуле ауф
                const token = store.getters['auth/token']
                // мы обращаемя к джейсону, но также указываем парамтер по авторизации с токеном, который делали в модуле авторизации, чтобы заявки могли делать только авторизованные.  get чтобы получить уже имеющиеся заявки
                const {data} = await axios.get(`/requests/${id}.json?auth=${token}`)
                // вернему дату данные с сервера
                return data

            } catch (e) {
                dispatch('setMessage', {
                    value: e.message,
                    type: 'danger'
                }, {root: true})
            }
        },
        async remove({ dispatch}, id) {
            try {
                // получаем токен через гетер т к он уже есть в сторе в модуле ауф
                const token = store.getters['auth/token']
                // мы обращаемя к джейсону, но также указываем парамтер по авторизации с токеном, который делали в модуле авторизации, чтобы заявки могли делать только авторизованные.  get чтобы получить уже имеющиеся заявки
                await axios.delete(`/requests/${id}.json?auth=${token}`)
                dispatch('setMessage', {
                    value: 'Заявка удалена',
                    type: 'primary'
                }, {root: true})
            } catch (e) {
                dispatch('setMessage', {
                    value: e.message,
                    type: 'danger'
                }, {root: true})
            }
        },
        async update({ dispatch}, request) {
            try {
                // получаем токен через гетер т к он уже есть в сторе в модуле ауф
                const token = store.getters['auth/token']
                // мы обращаемя к джейсону, но также указываем парамтер по авторизации с токеном, который делали в модуле авторизации, чтобы заявки могли делать только авторизованные.  get чтобы получить уже имеющиеся заявки
                await axios.put(`/requests/${request.id}.json?auth=${token}`, request)
                // мы выводим текст в случае успеха а сам текст указываем таким образом
                dispatch('setMessage', {
                    value: 'Заявка обновлена',
                    type: 'primary'
                }, {root: true})
            } catch (e) {
                dispatch('setMessage', {
                    value: e.message,
                    type: 'danger'
                }, {root: true})
            }
        },
    },

    getters: {
        requests(state) {
            return state.requests
        }
    }
}
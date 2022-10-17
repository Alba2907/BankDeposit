
// данный модуль для обработки авторизации

import axios from "axios";
import {error} from "@/utils/error";

const TOKEN_KEY = 'jwt-token'

export default {

    // делает названия экшенов локальными
    namespaced: true,


    state() {
        return {
            token: localStorage.getItem(TOKEN_KEY)
        }
    },
    // в мутациях пише синхронй код изменяющий state
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem(TOKEN_KEY, token)
        },
        logout(state) {
            state.token = null
            localStorage.removeItem(TOKEN_KEY)
        }
    },

    actions: {

        // payload значения из логин формы так мы посылаем запрос на сервер чтобы получить ключ
        async login({commit, dispatch}, payload) {
            // с пощью трай кетч мы отлавливаем ошибки и выводим их в консоль
            try {
                const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`
                const {data} = await axios.post(url, {...payload, returnSecureToken: true})
                commit('setToken', data.idToken)
                commit('clearMessage', null, {root:true})
            } catch (e) {

                // делаем мутацию сет медж в которую вносим инфо об ошибке и делаем класс дэнджер который передаем в аппмеседж
                dispatch('setMessage', {
                    value: error(e.response.data.error.message),
                    type: 'danger'
                }, {root:true})

                throw new Error()
            }
        }
    },

    getters: {
        token(state) {
            return state.token
        },

        // двойное отрицание делает булиан значения(если это нулл мы делаем тру и второе делает фолс), инфо получаем не из стэйта а из самого геттера
        isAuthenticated(_, getters) {
            return !!getters.token
        }
    }

}

// для набора валидаторов

import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export function useLoginForm() {

    const store = useStore()

    const router = useRouter()

    const {handleSubmit, isSubmitting, submitCount} = useForm()

    // мы меняем имена для получаемых параметров, чтобы они были уникальны
    const {value: email, errorMessage: eError, handleBlur: eBlur} = useField(
        'email',
        yup
            .string()
            .trim()
            .required('Пожалуйста введите email')
            .email('Необходимо ввести корректный email')
    )

    const PAS_MIN = 6

    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField('password',
        yup
            .string()
            .trim()
            .required('Пожалуйста введите пароль')
            .min(PAS_MIN, `Пароль не может быть короче ${PAS_MIN} символов  `)
    )

    //    делаем не более трех нажатий войти
    const isMany = computed(() => submitCount.value >= 3)

    //  следим за тем тру или фолс значение из мани, и если да, то запускаем таймер, чтрбы поменять его
    watch(isMany, val => {
        if(val) {
            setTimeout(() => submitCount.value = 0,1500)
        }})
    // делаем трай кетч чтобы в случае не удачи не делать никаких переходов
    const onSubmit = handleSubmit( async values => {
        try {
        // получаем метод из модуля стора, по сути это процесс логина, после котрого мы переходим на главную
        await store.dispatch('auth/login', values)
        router.push('/')
            } catch (e) {

}
    })

    return {

        eError, email, eBlur, password, pError, pBlur, onSubmit, isSubmitting, isMany

    }

}
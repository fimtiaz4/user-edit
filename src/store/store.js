import {ref, reactive} from 'vue'
import router from '../router/router'
const authStore = reactive({
    isAuthenticated: localStorage.getItem('auth') == 1,
    user: JSON.parse(localStorage.getItem('user')),

    authenticate(username, password){
        fetch('http://localhost:8000/api/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"email":username, password})
        }).then(res => res.json())
        .then(res => {
            if(res.error==0){
                authStore.isAuthenticated = true
                authStore.user = res
                localStorage.setItem('auth', 1)
                localStorage.setItem('user', JSON.stringify(res))
                localStorage.setItem('cart', '{}')
                localStorage.setItem('totalPrice', 0)
                router.push('/')
            }
        })
    },
    logout(){
        authStore.isAuthenticated = false
        authStore.user = {}
        localStorage.setItem('auth', 0)
        localStorage.setItem('user', '{}')
        localStorage.setItem('cart', '{}')
        localStorage.setItem('totalPrice', 0)
        router.push('/login')
    }
})

export {authStore}
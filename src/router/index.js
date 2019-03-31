import Login from '@/components/Login'
import Form from '@/components/form'
import NotFoundPage from '@/components/not-found.vue';

export default [
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/',
        name: 'index',
        component: Form,
    },
    {
        path: '(.*)',
        name: 'not-found',
        component: NotFoundPage,
    },
]
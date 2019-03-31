<template>
    <f7-app :params="f7params">
        <router-view></router-view>
        <cm-menu></cm-menu>
    </f7-app>
</template>

<script>

import CMMenu from './components/Menu'

export default {
    name: 'app',
    components: {
        'cm-menu': CMMenu,
    },
    data() {
        return {
            f7params: {
                name: 'My App',
                id: 'com.myapp.test',
            }
        }
    },
}
</script>

<style>
    a, a:focus, a:hover {
        text-decoration: none;
    }
</style>
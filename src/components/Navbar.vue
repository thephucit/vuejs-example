<template>
    <f7-navbar>
        <f7-nav-left><f7-link panel-open="left"><i class="f7-icons">menu</i></f7-link></f7-nav-left>
        <f7-nav-title>{{ title }}</f7-nav-title>
        <slot></slot>
    </f7-navbar>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                required: true,
            },
        },
    };
</script>
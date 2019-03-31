<template>
    <f7-panel left reveal theme-dark>
        <f7-view>
            <f7-page>
                <f7-list media-list>
                    <f7-list-item title="The Phuc" subtitle="EM001" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                        <img slot="media" src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
                    </f7-list-item>
                </f7-list>

                <f7-list>
                    <f7-list-item @click="item1" title="Purchage orders">
                        <f7-icon slot="media" icon="demo-list-icon"></f7-icon>
                    </f7-list-item>
                    <f7-list-item @click="item2" title="Đăng xuất">
                        <f7-icon slot="media" icon="demo-list-icon"></f7-icon>
                    </f7-list-item>
                </f7-list>
            </f7-page>
        </f7-view>
    </f7-panel>
</template>
<script>
    export default {
        methods: {
            item1() {
                this.$f7 && this.$f7.panel.close()
                return this.$router.push({name: 'index'})
            },
            item2() {
                this.$f7 && this.$f7.panel.close()
                return this.$router.push({name: 'login'})
            },
        },
    };
</script>
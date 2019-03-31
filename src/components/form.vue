<template>
    <transition enter-active-class="animated bounceInDown">
        <f7-view main>
            <f7-page>
                <!-- header -->
                <cm-navbar title="Purchage orders">
                    <f7-nav-right><f7-link @click="save">Save</f7-link></f7-nav-right>
                </cm-navbar>
                <!-- END header -->

                <!-- body -->
                <f7-block-title>Thông tin chung</f7-block-title>
                <f7-list inline-labels no-hairlines-md>
                    <f7-list-input type="number" label="Khối lượng" placeholder="0" clear-button :value="form.amount" @input="form.amount = $event.target.value"></f7-list-input>
                    <f7-list-input label="Bảng số xe" type="text" placeholder="67A1 - 123.12" clear-button :value="form.vehicle_no" @input="form.vehicle_no = $event.target.value"></f7-list-input>
                </f7-list>

                <f7-block-title>Thông tin riêng</f7-block-title>
                <f7-list form>
                    <f7-list-item title="Nguyên liệu" smart-select :smart-select-params="{openIn: 'page'}">
                        <select name="material_id" v-model="form.material_id">
                            <option value="mac" selected>Mac</option>
                            <option value="windows">Windows</option>
                        </select>
                    </f7-list-item>

                    <f7-list-item title="Nhà cung cấp" smart-select :smart-select-params="{openIn: 'page'}">
                        <select name="supplier_id" v-model="form.supplier_id">
                            <option value="mac" selected>Mac</option>
                            <option value="windows">Windows</option>
                        </select>
                    </f7-list-item>

                    <f7-list-item title="Bồn chứa" smart-select :smart-select-params="{openIn: 'page', searchbar: true, searchbarPlaceholder: 'Tìm bồn chứa'}">
                        <select name="container_id" multiple v-model="form.container_id">
                            <option value="mac">Mac</option>
                            <option value="windows">Windows</option>
                        </select>
                    </f7-list-item>
                </f7-list>
                <!-- END body -->
            </f7-page>
        </f7-view>
    </transition>
</template>

<script>
    import CMNavbar from './Navbar'

    export default {
        name: 'index',
        props: {},
        components: {
            'cm-navbar': CMNavbar,
        },
        data() {
            return {
                form: {
                    amount: null,
                    vehicle_no: null,
                    material_id: null,
                    supplier_id: null,
                    container_id: [],
                },
            }
        },
        methods: {
            save() {
                console.log(this.form)
                // this.$f7.dialog.alert('hih', 'title')
            },
        },
        async created() {
            if (! localStorage.userLogin) {
                // return this.$router.push({name: 'login'})
            }
        },
    }
</script>

<style scoped>
    .overlay {
        margin-top: 50%
    }
</style>
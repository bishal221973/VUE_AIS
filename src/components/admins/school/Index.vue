<template>
    <Navbar />
    <Sidebar />
    <div class="main-container">
        <div class="pd-ltr-20 xs-pd-20-10">
            <div class="min-height-200px">
                <div class="page-header">
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <div class="title">
                                <h4>School Detail</h4>
                            </div>
                            <nav aria-label="breadcrumb" role="navigation">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="index.html">Dashboard</a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        School Detail
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="product-wrap">
                    <div class="product-detail-wrap mb-30">
                        <div class="row">

                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="product-detail-desc pd-20 card-box">
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">School Name*</label>
                                                <input type="text" class="form-control" v-model="school_name"
                                                    id="txtSchoolName" aria-describedby="emailHelp"
                                                    placeholder="Enter School Name">
                                                <small id="schoolNameHelp" class="form-text text-danger"></small>
                                            </div>
                                        </div>
                                        <div class="col-lg-3">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Reg Number*</label>
                                                <input type="text" class="form-control" v-model="reg_number"
                                                    id="txtRegNumber" aria-describedby="emailHelp"
                                                    placeholder="Enter Reg Number">
                                                <small id="regNumberHelp" class="form-text text-danger"></small>
                                            </div>
                                        </div>
                                        <div class="col-lg-3">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Phone Nummber*</label>
                                                <input type="number" class="form-control" v-model="phone" id="txtPhone"
                                                    aria-describedby="emailHelp" placeholder="Enter Phone Nummber">
                                                <small id="phoneHelp" class="form-text text-danger"></small>
                                            </div>
                                        </div>
                                        <div class="col-lg-3">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Address*</label>
                                                <input type="text" class="form-control" v-model="address" id="txtAddress"
                                                    aria-describedby="emailHelp" placeholder="Enter Address">
                                                <small id="addressHelp" class="form-text text-danger"></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 d-flex justify-content-end">
                                        <button class="btn btn-success" v-on:click="save">{{ edit ? 'Update' : 'Save'
                                    }}</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 mt-2 col-md-12 col-sm-12">
                                <div class="product-detail-desc pd-20 card-box height-100-p">
                                    <!-- <img :src="'./assets/img/school.jpg'" alt="" class="school-img" />
                                    <div>
                                        <h2 class="pt-20 text-center mt-2" id="txt_school_name"></h2>
                                        <p class="pt-20 text-center h4" id="txt_school_reg"><i
                                                class="icon-copy fa fa-address-card" aria-hidden="true"></i></p>
                                        <p class="mb-20 text-center h5" id="txt_phone"><i
                                                class="icon-copy fa fa-address-card" aria-hidden="true"></i> </p>
                                        <div class="row">
                                            <div class="col-md-6 col-6">
                                                <a href="#" class="btn btn-primary btn-block"
                                                    v-on:click="edit_school()">Edit</a>
                                            </div>

                                        </div>
                                    </div> -->

                                    <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col"></th>
                                                    <th scope="col">School Name</th>
                                                    <th scope="col">Registration Number</th>
                                                    <th scope="col">Phone number</th>
                                                    <th scope="col">Address</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                
                                                <tr >
                                                    <td scope="row">#</td>
                                                    <td>{{ school_list.school_name }}</td>
                                                    <td>{{ school_list.reg_number }}</td>
                                                    <td>{{ school_list.phone }}</td>
                                                    <td>{{ school_list.address }}</td>
                                                   <td>
                                                    <button class="btn btn-warning ml-1 text-white"
                                                                v-on:click="edit_school()"><i
                                                                    class="fa fa-edit"></i></button>
                                                   </td>
                                                </tr>


                                            </tbody>
                                        </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- <div class="footer-wrap pd-20 mb-20 card-box">
                DeskApp - Bootstrap 4 Admin Template By
                <a href="https://github.com/dropways" target="_blank">Ankit Hingarajiya</a>
            </div> -->
        </div>
    </div>
</template>

<script>
import Sidebar from '../Sidebar.vue';
import Navbar from '../Navbar.vue';

import axios from 'axios';
export default {
    name: "Index",
    data() {
        return {
            school_name: '',
            reg_number: '',
            phone: '',
            address: '',
            list: '',
            edit: false,
            school_id: '',
            school_list: '',
        }
    },
    components: { Sidebar, Navbar },
    methods: {
        save() {
            document.getElementById('schoolNameHelp').innerHTML = '';
            document.getElementById('regNumberHelp').innerHTML = '';
            document.getElementById('phoneHelp').innerHTML = '';

            document.getElementById('addressHelp').innerHTML = '';

            this.edit ? this.update() : this.add();
        },
        add() {
            let result = axios.post('school',
                {
                    school_name: this.school_name,
                    reg_number: this.reg_number,
                    phone: this.phone,
                    address: this.address,
                }).then((response) => {
                    if (response.data.status == 'success') {
                        this.toastMessage("success", response.data.message);
                        this.getUnits();
                        this.clear();
                    } else if (response.data.status == 'failed') {
                        this.toastMessage("error", response.data.message);

                    } else {
                        this.toastMessage("error", response.data);
                    }
                }).catch(error => {
                    if (error.response.status == 422) {
                        this.verificationError(error);
                    }
                    else {
                        Swal.fire(
                            'Warning',
                            'error: ' + error,
                            'error'
                        )
                    }
                });
        },
        update() {
            let result = axios.put('school/' + this.school_id,
                {
                    school_name: this.school_name,
                    reg_number: this.reg_number,
                    phone: this.phone,
                    address: this.address,
                }).then((response) => {
                    if (response.data.status == 'success') {
                        this.getUnits();

                        this.toastMessage("success", response.data.message);
                        this.clear();
                        this.edit=false;

                    } else if (response.data.status == 'failed') {
                        this.toastMessage("error", response.data.message);

                    } else {
                        this.toastMessage("error", response.data);

                    }
                }).catch(error => {

                    if (error.response.status == 422) {
                        this.verificationError(error);
                    }
                    else {
                        if (error.response.status === 401) {
                            this.$router.push({ name: "login" });

                        } else {
                            Swal.fire(
                                'Warning',
                                'error: ' + error,
                                'error'
                            )
                        }
                    }
                });

        },
       
        edit_school() {

            let result = axios.get('school/' + this.s_id).then((response) => {
                this.school_name = response.data.school_name;
                this.reg_number = response.data.reg_number;
                this.phone = response.data.phone;
                this.address = response.data.address;
                this.school_id = response.data.id;
                this.edit = true;
            }).catch(error => {
                if (error.response.status === 401) {
                    this.$router.push({ name: "login" });

                } else {
                    Swal.fire(
                        'Warning',
                        'error: ' + error,
                        'error'
                    )
                }
            });

        },
        getUnits: function () {

            let result = axios.get('school').then((response) => {
                this.school_list = response.data;
                this.s_id = response.data.id;
                document.getElementById('txt_school_name').innerHTML = response.data.school_name;
                document.getElementById('txt_school_reg').innerHTML = response.data.reg_number + ', ' + response.data.address;
                document.getElementById('txt_phone').innerHTML = response.data.phone;
            }).catch(error => {
                if (error.response.status === 401) {
                    this.$router.push({ name: "login" });

                } else {
                    Swal.fire(
                        'Warning',
                        'error: ' + error,
                        'error'
                    )
                }
            });

            return result;
        },
        toastMessage(icons, title) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: icons,
                title: title
            });
        }, clear() {
            this.school_name = '';
            this.reg_number = '';
            this.phone = '';
            this.address = '';
        },
        verificationError(error) {
            const errorFields = {
                'school_name': 'schoolNameHelp',
                'reg_number': 'regNumberHelp',
                'phone': 'phoneHelp',
                'address': 'addressHelp',

            };
            Object.keys(error.response.data.errors).forEach(key => {
                const errorKey = errorFields[key];
                if (errorKey) {
                    document.getElementById(errorKey).innerHTML = error.response.data.errors[key][0];
                }
            });
        }
    },
    beforeMount() {
        this.getUnits()
    },
}
</script>

<style>
.div-school {
    height: 35vh;
    width: 100%;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.7)),
        url('https://www.greatschools.org/gk/wp-content/uploads/2014/03/The-school-visit-what-to-look-for-what-to-ask-1.jpg');
}

.school-img {
    height: 35vh;
    width: 100%;
}

.img-user {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    margin-top: -110px;
    margin-left: 10px;
}

.text-danger {
    color: red;
}
</style>
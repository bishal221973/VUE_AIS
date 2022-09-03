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

                            <div class="col-lg-4 col-md-12 col-sm-12">
                                <div class="product-detail-desc pd-20 card-box">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">School Name*</label>
                                        <input type="text" class="form-control" v-model="school_name" id="txtSchoolName"
                                            aria-describedby="emailHelp" placeholder="Enter School Name">
                                        <small id="schoolNameHelp" class="form-text text-danger"></small>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Reg Number*</label>
                                        <input type="text" class="form-control" v-model="reg_number" id="txtRegNumber"
                                            aria-describedby="emailHelp" placeholder="Enter Reg Number">
                                        <small id="regNumberHelp" class="form-text text-danger"></small>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Phone Nummber*</label>
                                        <input type="number" class="form-control" v-model="phone" id="txtPhone"
                                            aria-describedby="emailHelp" placeholder="Enter Phone Nummber">
                                        <small id="phoneHelp" class="form-text text-danger"></small>
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Address*</label>
                                        <input type="text" class="form-control" v-model="address" id="txtAddress"
                                            aria-describedby="emailHelp" placeholder="Enter Address">
                                        <small id="addressHelp" class="form-text text-danger"></small>
                                    </div>
                                    <button class="col-12 btn btn-success" v-on:click="save">{{ btn }}</button>
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12">
                                <div class="product-detail-desc pd-20 card-box height-100-p">
                                    <img :src="'./assets/img/school.jpg'" alt="" class="school-img" />
                                    <div v-if="!list || !list.length">
                                                <div class="div-empity-table">

                                                    <p class="col-12 text-center empity-table text-black-50">Please setup your school</p>
                                                </div>


                                            </div>
                                    <div v-for="item in list" v-bind:key="item.id">
                                        <h1 class="mb-20 pt-20 text-center mt-5">{{ item.school_name }}</h1>
                                        <h5 class="mb-20 pt-20 text-center">{{ item.reg_number }},{{ item.phone }}</h5>
                                        <h5 class="mb-20 pt-20 text-center">{{ item.address }}</h5>


                                        <div class="row">
                                            <div class="col-md-6 col-6">
                                                <a href="#" class="btn btn-primary btn-block"
                                                    v-on:click="edit_school(item.id)">Edit</a>
                                            </div>

                                            <div class="col-md-6 col-6">
                                                <a href="#" class="btn btn-outline-primary btn-block"
                                                    v-on:click="delete_school(item.id)">Delete</a>
                                            </div>
                                        </div>
                                    </div>
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
            edit: '',
            school_id: '',
            btn: 'Save',
        }
    },
    components: { Sidebar, Navbar },
    methods: {
        save() {
            document.getElementById('schoolNameHelp').innerHTML = '';
            document.getElementById('regNumberHelp').innerHTML = '';
            document.getElementById('phoneHelp').innerHTML = '';

            document.getElementById('addressHelp').innerHTML = '';


            if (this.edit == 'true') {
                let url = 'http://127.0.0.1:8000/api/school/' + this.school_id;
                let result = axios.put(url,
                    {
                        school_name: this.school_name,
                        reg_number: this.reg_number,
                        phone: this.phone,
                        address: this.address,
                    },
                    {
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem('token')
                        }
                    }).then((response) => {
                        if (response.data.status == 'success') {
                            Swal.fire({
                                title: 'Congratulation',
                                text: response.data.message,
                                icon: 'success',
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: 'OK'
                            }).then((result) => {
                                
                                    this.btn = 'Save';
                                    this.getUnits();
                                    // window.location.reload();

                                this.school_name='';
                                this.reg_number='';
                                this.phone='';
                                this.address='';
                            })
                        } else if (response.data.status == 'failed') {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: response.data.message,
                                footer: 'We are sorry'
                            })
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: response.data,
                                footer: 'We are sorry'
                            })
                        }
                    }).catch(error => {

                        if (error.response.status == 422) {
                            $.each(error.response.data.errors, function (key, value) {
                                if (key == 'school_name') {
                                    document.getElementById('schoolNameHelp').innerHTML = error.response.data.errors.school_name[0];

                                }
                                if (key == 'reg_number') {
                                    document.getElementById('regNumberHelp').innerHTML = error.response.data.errors.reg_number[0];

                                }

                                if (key == 'phone') {
                                    document.getElementById('phoneHelp').innerHTML = error.response.data.errors.phone[0];

                                }
                                if (key == 'address') {
                                    document.getElementById('addressHelp').innerHTML = error.response.data.errors.address[0];

                                }


                            });
                        }
                        else {
                            Swal.fire(
                                'Warning',
                                'error: ' + error,
                                'error'
                            )
                        }
                    });

                return result;
            } else {
                let result = axios.post('http://127.0.0.1:8000/api/school',
                    {
                        school_name: this.school_name,
                        reg_number: this.reg_number,
                        phone: this.phone,
                        address: this.address,
                    },
                    {
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem('token')
                        }
                    }).then((response) => {
                        if (response.data.status == 'success') {
                            Swal.fire({
                                title: 'Congratulation',
                                text: response.data.message,
                                icon: 'success',
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: 'OK'
                            }).then((result) => {
                                
                                    this.getUnits();

                                this.school_name='';
                                this.reg_number='';
                                this.phone='';
                                this.address='';
                            })
                        } else if (response.data.status == 'failed') {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: response.data.message,
                                footer: 'We are sorry'
                            })
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: response.data,
                                footer: 'We are sorry'
                            })
                        }
                    }).catch(error => {
                        if (error.response.status == 422) {
                            $.each(error.response.data.errors, function (key, value) {
                                if (key == 'school_name') {
                                    document.getElementById('schoolNameHelp').innerHTML = error.response.data.errors.school_name[0];

                                }
                                if (key == 'reg_number') {
                                    document.getElementById('regNumberHelp').innerHTML = error.response.data.errors.reg_number[0];

                                }

                                if (key == 'phone') {
                                    document.getElementById('phoneHelp').innerHTML = error.response.data.errors.phone[0];

                                }
                                if (key == 'address') {
                                    document.getElementById('addressHelp').innerHTML = error.response.data.errors.address[0];

                                }


                            });
                        } else if (error.response.status == 401) {
                            Swal.fire({
                                title: 'You are not authorised user',
                                text: "Please login to perform any transaction",
                                icon: 'warning',
                                showCancelButton: false,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'OK'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    this.$router.push({ path: "/login" });

                                }
                            })
                        }
                        else {
                            Swal.fire(
                                'Warning',
                                'error: ' + error,
                                'error'
                            )
                        }
                    });

                return result;
            }



        },
        delete_school(school_id) {
            let url = 'http://127.0.0.1:8000/api/school/' + school_id;
            Swal.fire({
                title: 'Are you sure?',
                text: "You want to delete school ?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    let result = axios.delete(url,
                        {
                            headers: {
                                'Content-type': 'application/json',
                                'Authorization': 'Bearer ' + localStorage.getItem('token')
                            }
                        }).then((response) => {
                            if (response.data.status == 'success') {
                                Swal.fire({
                                    title: 'Congratulation',
                                    text: response.data.message,
                                    icon: 'success',
                                    confirmButtonColor: '#3085d6',
                                    confirmButtonText: 'OK'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        // window.location.reload();
                                        this.getUnits();


                                    }
                                })
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Something went wrong',
                                    footer: 'We are sorry'
                                })
                            }
                        }).catch(error => {
                            console.log('error: ' + error);
                        });


                }
            })

        },
        edit_school(school_id) {
            let url = 'http://127.0.0.1:8000/api/school/' + school_id;

            let result = axios.get(url,
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.school_name = response.data.school_name;
                    this.reg_number = response.data.reg_number;
                    this.phone = response.data.phone;
                    this.address = response.data.address;
                    this.school_id = response.data.id;
                    this.edit = 'true';
                    this.btn = "Update";
                }).catch(error => {
                    console.log('error: ' + error);
                });

        },
        getUnits: function () {

            let result = axios.get('http://127.0.0.1:8000/api/school',
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.list = response.data;
                    // document.getElementById('txt_school_name').innerHTML = response.data[0].school_name;
                    // document.getElementById('txt_school_reg').innerHTML = response.data[0].reg_number + ', ' + response.data[0].address;
                    // document.getElementById('txt_phone').innerHTML = response.data[0].phone;
                }).catch(error => {
                    console.log('error: ' + error);
                });

            return result;
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
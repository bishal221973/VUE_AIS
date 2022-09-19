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
                                <h4>Head Of Department</h4>
                            </div>
                            <nav aria-label="breadcrumb" role="navigation">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="index.html">Dashboard</a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        HOD
                                    </li>

                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <!-- Modal -->
                <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog"
                    aria-labelledby="myLargeModalLabel" aria-hidden="true" id="myModal">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Edit HOD</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div class="modal-body">


                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <div class="row">
                                                <div class="form-group col-lg-6">
                                                    <label for="exampleInputEmail1">Name*</label>
                                                    <input type="text" class="form-control" v-model="name" name="name"
                                                        id="txtName" aria-describedby="bookHelp"
                                                        placeholder="Enter Name">
                                                    <small id="nameHelp" class="form-text text-danger"></small>
                                                </div>


                                                <div class="form-group col-lg-6">
                                                    <label for="exampleInputEmail1">Email*</label>
                                                    <input type="text" class="form-control" v-model="email"
                                                        id="txtEmail" aria-describedby="bookHelp"
                                                        placeholder="Enter Email">
                                                    <small id="emailHelp" class="form-text text-danger"></small>
                                                </div>
                                                <div class="form-group col-lg-6">
                                                    <label for="exampleInputEmail1">Gender*</label>

                                                    <select class="form-control select2  " data-select2-id="9"
                                                        tabindex="-1" aria-hidden="true" v-model="gender"
                                                        id="txtGender">

                                                        <option value="" selected>Please select your gender</option>
                                                        <option value="Male" selected>Male</option>
                                                        <option value="Female" selected>Female</option>

                                                    </select>
                                                    <small id="genderHelp" class="form-text text-danger"></small>
                                                </div>

                                                <div class="form-group col-lg-6">
                                                    <label for="exampleInputEmail1">Address*</label>
                                                    <input type="text" class="form-control" v-model="address"
                                                        id="txtAddress" aria-describedby="bookHelp"
                                                        placeholder="Enter Address">
                                                    <small id="addressHelp" class="form-text text-danger"></small>
                                                </div>
                                                <div class="form-group col-lg-6">
                                                    <label for="exampleInputEmail1">DOB*</label>
                                                    <input type="date" class="form-control" v-model="dob" id="txtDOB"
                                                        aria-describedby="bookHelp" placeholder="Enter DOB">
                                                    <small id="dobHelp" class="form-text text-danger"></small>
                                                </div>
                                                <div class="form-group col-lg-6">
                                                    <label for="exampleInputEmail1">Phone*</label>
                                                    <input type="number" class="form-control" v-model="phone"
                                                        id="txtPhone" aria-describedby="bookHelp"
                                                        placeholder="Enter phone number">
                                                    <small id="phoneHelp" class="form-text text-danger"></small>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="rounded-circle border-secondary teacher-profile">
                                                <div class="form-group mt-2">

                                                    <img v-if="url" :src="url" class="profile_img" />
                                                    <!-- <img :src="'./assets/img/user.png'" alt="" class="school-img" /> -->
                                                </div>

                                            </div>
                                            <div class="txtprofile form-group mt-4">
                                                <input type="file" :v-model="profile" id="txtprofile"
                                                    class="form-control" @change="onFileChange">
                                                <small id="profileHelp" class="form-text text-danger"></small>
                                            </div>
                                        </div>
                                        <div class="form-group col-lg-12">
                                            <label for="exampleInputEmail1">Username*</label>
                                            <input type="text" class="form-control" v-model="username" id="txtUsername"
                                                aria-describedby="bookHelp" placeholder="Enter Username">
                                            <small id="usernameHelp" class="form-text text-danger"></small>
                                        </div>

                                    </div>


                                </div>
                                <div class="form-group col-12">
                                    <button class="btn btn-success d-flex float-right px-5"
                                        v-on:click="updateHod">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-wrap">
                    <div class="product-detail-wrap mb-30">
                        <div class="row">

                            <div class="col-lg-3 col-md-12 col-sm-12">
                                <div class="product-detail-desc pd-20 card-box">
                                    <div class="row">
                                        <div class="form-group col-12">
                                            <label for="exampleInputEmail1">Teacher name</label>
                                            <select class="form-control select2 " data-select2-id="9" tabindex="-1"
                                                aria-hidden="true" v-model="user_id" id="txtFaculty">

                                                <option value="" selected>Please select Teacher</option>
                                                <option v-for="item in teacher_list" v-bind:key="item.id"
                                                    :value="item.id">
                                                    {{ item.name }}
                                                </option>
                                            </select>
                                            <small id="teacherHelp" class="form-text text-danger"></small>
                                        </div>
                                        <div class="form-group col-12">
                                            <label for="exampleInputEmail1">Program Name</label>
                                            <select class="form-control select2 " data-select2-id="9" tabindex="-1"
                                                aria-hidden="true" v-model="program_id" id="txtFaculty">

                                                <option value="" selected>Please select Program</option>
                                                <option v-for="item in program_list" v-bind:key="item.id"
                                                    :value="item.id">
                                                    {{ item.program }}
                                                </option>
                                            </select>
                                            <small id="programHelp" class="form-text text-danger"></small>
                                        </div>
                                        <button class="btn btn-success float-right" v-on:click="appoind">{{ btn_hod
                                        }}</button>
                                    </div>


                                </div>
                            </div>

                            <div class="col-lg-9 col-md-12 col-sm-12">
                                <div class="product-detail-desc pd-20 card-box">
                                    <div class="row">
                                        <div class="col-lg-6">

                                        </div>
                                        <div class="col-lg-6 form-group">
                                            <input type="text" class="p-3 form-control" placeholder="Search HOD" v-model="info">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Username</th>
                                                    <th scope="col">Program</th>
                                                    <th scope="col">Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in hod_list" v-bind:key="item.id">
                                                    <td scope="row">{{ item.id }}</td>
                                                    <td scope="row">{{ item.user.name }}</td>
                                                    <td scope="row">{{ item.user.username }}</td>
                                                    <td scope="row">{{ item.program.program }}</td>


                                                    <td>
                                                        <div class="row">
                                                            <button class="btn btn-info btn-sm "
                                                                v-on:click="assignMore(item.user.id)">
                                                                <i class="fa fa-plus"></i>
                                                            </button>
                                                            <button class="btn btn-danger btn-sm ml-1"
                                                                v-on:click="remove(item.id,item.user.id)">
                                                                <i class="icon-copy fa fa-remove"
                                                                    aria-hidden="true"></i>
                                                            </button>

                                                        </div>
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

            </div>
        </div>

    </div>
</template>
<script>
import Navbar from '../Navbar.vue';
import Sidebar from '../Sidebar.vue';
import axios from 'axios';
export default {
    name: "Index",
    components: { Navbar, Sidebar },
    data() {
        return {
            'user_id': '',
            'program_id': '',
            'teacher_list': '',
            'program_list': '',
            'hod_list': '',
            'pid': '',
            'btn_hod': 'Assign',
            'teacher_id': '',
            'user_id': '',
            'url': './assets/img/user.png',
            'name': '',
            'username': '',
            'email': '',
            'gender': '',
            'address': '',
            'dob': '',
            'phone': '',
            'profile': '',
            'update_user_id': '',
            'info':'',
        }
    },
    methods: {
        remove(hod_id, user_id) {

            let result = axios.post(localStorage.getItem("url")+'region',
                {
                    id: hod_id,
                    user_id: user_id,
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
                            if (result.isConfirmed) {
                                // window.location.reload();
                                
                            }
                            this.getUnits()
                        })
                        this.user_id = '';
                        this.program_id = '';
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: response.data,
                            footer: 'We are sorry'
                        })
                    }
                    console.log(response.data);
                }).catch(error => {

                    Swal.fire(
                        'Warning',
                        'error: ' + error,
                        'error'
                    )
                });

            return result;
        },
        appoind() {
            document.getElementById('programHelp').innerHTML = '';
            document.getElementById('teacherHelp').innerHTML = '';
            if (this.user_id == '') {
                document.getElementById('teacherHelp').innerHTML = 'please select teacher ';

            } else {
                let result = axios.post(localStorage.getItem("url")+'hod',
                    {
                        user_id: this.user_id,
                        program_id: this.program_id,
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
                                if (result.isConfirmed) {
                                    // window.location.reload();
                                    
                                }
                            })
                            this.getUnits()
                            this.user_id = '';
                            this.program_id = '';
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
                                if (key == 'program_id') {
                                    document.getElementById('programHelp').innerHTML = error.response.data.errors.program_id[0];

                                }

                            });
                        } else {
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
        assignMore(user_id) {
            var options = {};
            axios.get(localStorage.getItem("url")+'program',
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {

                    for (let item of response.data) {

                        options[item.id] = item.program;

                    }
                    Swal.fire({
                        title: 'Select a program',
                        input: 'select',
                        inputOptions: options,
                        inputPlaceholder: 'Please select a program name',
                        showCancelButton: true,
                        inputValidator: function (value) {
                            return new Promise(function (resolve, reject) {
                                if (value !== '') {
                                    resolve();
                                } else {
                                    resolve('You need to select a Program');
                                }
                            });
                        }
                    }).then(function (result) {
                        if (result.isConfirmed) {

                            let val = result.value;
                            return axios.post(localStorage.getItem("url")+'hod',
                                {
                                    user_id: user_id,
                                    program_id: result.value,
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
                                            if (result.isConfirmed) {
                                                // this.getUnits();
                                                
                                            }
                                            window.location.reload();
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

                                    Swal.fire(
                                        'Warning',
                                        'error: ' + error,
                                        'error'
                                    )
                                });

                        }
                    });
                    this.program_list = response.data;

                }).catch(error => {
                    console.log('error: ' + error);
                });



        },

        getUnits: function () {
            axios.get(localStorage.getItem("url")+'teacher',
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.teacher_list = response.data;

                }).catch(error => {
                    console.log('error: ' + error);
                });

            axios.get(localStorage.getItem("url")+'program',
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.program_list = response.data;

                }).catch(error => {
                    console.log('error: ' + error);
                });
            axios.get(localStorage.getItem("url")+'hod',
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.hod_list = response.data;
                    console.log('sdad');
                    console.log(response.data);


                }).catch(error => {
                    console.log('error: ' + error);
                });
        },
        // edit(teacher_id) {
        //     let url = 'http://127.0.0.1:8000/api/teacher/' + teacher_id;
        //     axios.get(url,
        //         {
        //             headers: {
        //                 'Content-type': 'application/json',
        //                 'Authorization': 'Bearer ' + localStorage.getItem('token')
        //             }
        //         }).then((response) => {
        //             // alert(teacher_id);
        //             // this.name=response.data;
        //             this.name = response.data.user.name;
        //             this.username = response.data.user.username;
        //             this.email = response.data.user.email;
        //             this.gender = response.data.gender;
        //             this.address = response.data.address;
        //             this.dob = response.data.dob;
        //             this.phone = response.data.phone;
        //             this.profile = response.data.profile;
        //             this.btn = 'Update';
        //             this.update_record = 'true';
        //             this.teacher_id = response.data.id;
        //             this.update_user_id = response.data.id;
        //             console.log(response.data);
        //         }).catch(error => {
        //             console.log('error: ' + error);
        //         });
        // },
    },
    mounted() {
        this.getUnits()
    },
    created() {

    },
    watch: {
        info: function (val, oldVal) {
            let result = axios.post(localStorage.getItem("url")+'hod-search',
                {
                    info: this.info,
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {

                    this.hod_list = response.data;

                }).catch(error => {

                    if (error.response.status == 422) {
                        $.each(error.response.data.errors, function (key, value) {
                            if (key == 'faculty') {
                                document.getElementById('facultyHelp').innerHTML = error.response.data.errors.faculty[0];

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
    
}
</script>
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
                                <h4>Teacher</h4>
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
                <div class="product-wrap">
                    <div class="product-detail-wrap mb-30">
                        <div class="row">

                            <div class="col-lg-4 col-md-12 col-sm-12">
                                <div class="product-detail-desc pd-20 card-box">
                                    <div class="row">
                                        <div class="form-group col-12">
                                            <label for="exampleInputEmail1">Teacher name</label>
                                            <select class="form-control select2 " data-select2-id="9" tabindex="-1"
                                                aria-hidden="true" v-model="user_id" id="txtFaculty">

                                                <option value="" selected>Please select Faculty</option>
                                                <option v-for="item in teacher_list" v-bind:key="item.id"
                                                    :value="item.id">
                                                    {{ item.name }}
                                                </option>
                                            </select>
                                            <small id="bookHelp" class="form-text text-danger"></small>
                                        </div>
                                        <div class="form-group col-12">
                                            <label for="exampleInputEmail1">Program Name</label>
                                            <select class="form-control select2 " data-select2-id="9" tabindex="-1"
                                                aria-hidden="true" v-model="program_id" id="txtFaculty">

                                                <option value="" selected>Please select Faculty</option>
                                                <option v-for="item in program_list" v-bind:key="item.id"
                                                    :value="item.id">
                                                    {{ item.program }}
                                                </option>
                                            </select>
                                            <small id="publicationHelp" class="form-text text-danger"></small>
                                        </div>
                                        <button class="btn btn-success float-right" v-on:click="appoind">{{ btn_hod
                                        }}</button>
                                    </div>


                                </div>
                            </div>

                            <div class="col-lg-8 col-md-12 col-sm-12">
                                <div class="product-detail-desc pd-20 card-box">
                                    <div class="row">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Username</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Faculty</th>
                                                    <th scope="col">Program</th>
                                                    <th scope="col">Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in hod_list" v-bind:key="item.id">
                                                    <td scope="row">{{ item.id }}</td>
                                                    <td scope="row">{{ item.program.faculty.faculty }}</td>
                                                    <td scope="row">{{ item.program.program }}</td>
                                                    <td scope="row">{{ item.user.name }}</td>
                                                    <td scope="row">{{ item.user.username }}</td>
                                                    <td scope="row">{{ item.user.email }}</td>

                                                    <td>
                                                        <div class="row">
                                                            <a href="#" class="text-success" v-on:click="assignMore(item.user.id)">
                                                                <i class="icon-copy dw dw-add-file fa-2x"></i>
                                                            </a>
                                                            <a href="#" class="text-warning ml-3"><i
                                                                    class="icon-copy fa fa-edit fa-2x"
                                                                    aria-hidden="true"
                                                                    v-on:click="edit(item.teacher[0].id)"></i></a>
                                                            <a href="#" class="text-danger ml-3"><i
                                                                    class="icon-copy fa fa-trash fa-2x"
                                                                    aria-hidden="true"
                                                                    v-on:click="deleteTeacher(item.teacher[0].id)"></i></a>

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
        <!-- <div class="footer-wrap pd-20 mb-20 card-box">
                DeskApp - Bootstrap 4 Admin Template By
                <a href="https://github.com/dropways" target="_blank">Ankit Hingarajiya</a>
            </div> -->
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
            'btn_hod': 'Save',
        }
    },
    methods: {
        appoind() {
            let result = axios.post('http://127.0.0.1:8000/api/hod',
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
                                this.getUnits()

                            }
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

            return result;
        },
        assignMore(user_id) {
            var options = {};
            axios.get('http://127.0.0.1:8000/api/program',
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
                        title: 'Select Outage Tier',
                        input: 'select',
                        inputOptions: options,
                        inputPlaceholder: 'Please select a program name',
                        showCancelButton: true,
                        inputValidator: function (value) {
                            return new Promise(function (resolve, reject) {
                                if (value !== '') {
                                    resolve();
                                } else {
                                    resolve('You need to select a Tier');
                                }
                            });
                        }
                    }).then(function (result) {
                        if (result.isConfirmed) {

                            let val = result.value;
                            return axios.post('http://127.0.0.1:8000/api/hod',
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
                                                window.location.reload();
                                                // this.getUnits();

                                            }
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
        regineCourse(hod_id) {
            let url = 'http://127.0.0.1:8000/api/hod/' + hod_id;
            Swal.fire({
                title: 'Are you sure?',
                text: "You want to regine HOD of selected program",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, remove !'
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
        getUnits: function () {
            axios.get('http://127.0.0.1:8000/api/teacher',
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

            axios.get('http://127.0.0.1:8000/api/program',
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
            axios.get('http://127.0.0.1:8000/api/hod',
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.hod_list = response.data;

                }).catch(error => {
                    console.log('error: ' + error);
                });
        },
    },
    mounted() {
        this.getUnits()
    },
    created() {

    },
}
</script>
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
                                <h4>Student</h4>
                            </div>
                            <nav aria-label="breadcrumb" role="navigation">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="index.html">Dashboard</a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        Student
                                    </li>

                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="product-wrap">
                    <div class="product-detail-wrap mb-30">


                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="product-detail-desc pd-20 card-box">
                                <div class="row">
                                    <div class="col-lg-9">
                                        <div class="row">
                                            <label
                                                class="col-12 mb-4 text-black-50 text-uppercase text-monospace">Personal
                                                Informations</label>
                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">Name*</label>
                                                <input type="text" class="form-control" v-model="name" id="txtFirstName"
                                                    aria-describedby="bookHelp" placeholder="Enter Name">
                                                <small id="firstnameHelp" class="form-text text-danger"></small>
                                            </div>




                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">Email*</label>
                                                <input type="text" class="form-control" v-model="email" id="txtEmail"
                                                    aria-describedby="bookHelp" placeholder="Enter Email">
                                                <small id="emailHelp" class="form-text text-danger"></small>
                                            </div>


                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">Gender*</label>
                                                <select class="form-control select2  " data-select2-id="9" tabindex="-1"
                                                    aria-hidden="true" v-model="gender" id="txtGender">

                                                    <option value="" selected>Please select your gender</option>
                                                    <option value="Male" selected>Male</option>
                                                    <option value="Female" selected>Female</option>

                                                </select>
                                                <small id="genderHelp" class="form-text text-danger"></small>
                                            </div>
                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">Address*</label>
                                                <input type="text" class="form-control" v-model="address"
                                                    id="txtAddress" aria-describedby="bookHelp"
                                                    placeholder="Enter Address">
                                                <small id="addressHelp" class="form-text text-danger"></small>
                                            </div>
                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">DOB*</label>
                                                <input type="date" class="form-control" v-model="dob" id="txtDOB"
                                                    aria-describedby="bookHelp" placeholder="Enter DOB">
                                                <small id="dobHelp" class="form-text text-danger"></small>
                                            </div>
                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">Phone*</label>
                                                <input type="number" class="form-control" v-model="phone" id="txtPhone"
                                                    aria-describedby="bookHelp" placeholder="Enter Phone number">
                                                <small id="phoneHelp" class="form-text text-danger"></small>
                                            </div>




                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">Program*</label>
                                                <select class="form-control select2" data-select2-id="9" tabindex="-1"
                                                    aria-hidden="true" v-model="program_id" id="txtProgram">

                                                    <option value="" selected>Please select Program</option>
                                                    <option v-for="item in program_list" v-bind:key="item.id"
                                                        :value="item.id">
                                                        {{ item.program }}
                                                    </option>
                                                </select>
                                                <small id="programHelp" class="form-text text-danger"></small>
                                            </div>

                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">Father's Name*</label>
                                                <input type="text" class="form-control" v-model="f_name" id="txtPhone"
                                                    aria-describedby="bookHelp" placeholder="Enter Father's Name">
                                                <small id="fnameHelp" class="form-text text-danger"></small>
                                            </div>

                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">Mother's Name*</label>
                                                <input type="text" class="form-control" v-model="m_name" id="txtPhone"
                                                    aria-describedby="bookHelp" placeholder="Enter Mother's Name">
                                                <small id="mnameHelp" class="form-text text-danger"></small>
                                            </div>

                                            <label class="col-12 mb-4 text-black-50 text-uppercase text-monospace">Login
                                                Informations</label>

                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">Username*</label>
                                                <input type="text" class="form-control" v-model="username"
                                                    id="txtUsername" aria-describedby="bookHelp"
                                                    placeholder="Enter Username">
                                                <small id="usernameHelp" class="form-text text-danger"></small>
                                            </div>
                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">Password*</label>
                                                <input type="password" class="form-control" v-model="password"
                                                    id="txtPassword" aria-describedby="bookHelp"
                                                    placeholder="Enter Password">
                                                <small id="passwordHelp" class="form-text text-danger"></small>
                                            </div>
                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">Password Confirmation*</label>
                                                <input type="password" class="form-control"
                                                    v-model="password_confirmation" id="txtPassword"
                                                    aria-describedby="bookHelp" placeholder="Enter Confirm Password">
                                                <small id="passwordHelp" class="form-text text-danger"></small>
                                            </div>


                                        </div>
                                    </div>

                                    <div class="col-lg-3 ">
                                        <div class="rounded-circle border-secondary teacher-profile">
                                            <div class="form-group">

                                                <img v-if="url" :src="url" class="profile_img" />
                                                <!-- <img :src="'./assets/img/user.png'" alt="" class="school-img" /> -->
                                            </div>
                                            <div class="txtprofile form-group">
                                                <input type="file" :v-model="profile" id="txtprofile"
                                                    class="form-control" @change="onFileChange">
                                                <!-- <label class="">Choose your profile</label> -->
                                                <small id="profileHelp" class="form-text text-danger"></small>
                                            </div>
                                            <div class="form-group col-12">
                                                <button class="btn btn-success mt-2 col-12" v-on:click="save">{{
                                                btn
                                                }}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-12 col-md-12 col-sm-12 mt-5">
                            <div class="product-detail-desc pd-20 card-box">
                                <div class="row">
                                    <h3 class="text-uppercase mb-3 ml-2 col-4">Students List</h3>


                                    <!-- Program -->
                                    <div class="form-group col-2">
                                        <select class="custom-select text-white select2 my-select bg-info"
                                            data-select2-id="9" tabindex="-1" aria-hidden="true" v-model="program_id"
                                            id="txtProgram">

                                            <option value="" selected class="bg-white text-dark" disabled>Program
                                            </option>
                                            <option class="bg-white text-dark" v-for="item in program_list"
                                                v-bind:key="item.id" :value="item.id">
                                                {{ item.program }}
                                            </option>
                                        </select>
                                        <small id="programHelp" class="form-text text-danger"></small>
                                    </div>

                                    <!-- Semester -->

                                    <div class="form-group col-2">
                                        <select class="custom-select text-white select2 my-select bg-info"
                                            data-select2-id="9" tabindex="-1" aria-hidden="true"
                                            v-model="search_semester" id="txtProgram">

                                            <option value="" selected class="bg-white text-dark" disabled>Semester
                                            </option>
                                            <option value="1" selected class="bg-white text-dark">First Semester
                                            </option>
                                            <option value="2" selected class="bg-white text-dark">Second Semester
                                            </option>
                                            <option value="3" selected class="bg-white text-dark">Third Semester
                                            </option>
                                            <option value="4" selected class="bg-white text-dark">Fourth Semester
                                            </option>
                                            <option value="5" selected class="bg-white text-dark">Fifth Semester
                                            </option>
                                            <option value="6" selected class="bg-white text-dark">Sixth Semester
                                            </option>
                                            <option value="7" selected class="bg-white text-dark">Seventh Semester
                                            </option>

                                        </select>
                                        <small id="programHelp" class="form-text text-danger"></small>
                                    </div>

                                    <form class="nosubmit">
                                        <input class="nosubmit" type="search" placeholder="Search Teacher..."
                                            v-model="search_data">
                                    </form>

                                    <div class="form-group">

                                        <button class="btn btn-success btn-sm ml-2" v-on:click="filter"><i
                                                class="icon-copy fa fa-eye" aria-hidden="true"></i> Filter</button>


                                    </div>

                                </div>
                                <div class="row">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Username</th>
                                                <th scope="col">Gender</th>
                                                <th scope="col">Program</th>
                                                <th scope="col">Semester</th>
                                                <th scope="col">DOB</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Profile</th>
                                                <th scope="col" class="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <div v-if="!student_list || !student_list.length">
                                                <div class="div-empity-table">

                                                    <p class="col-12 text-center empity-table text-black-50"> Oops! No
                                                        record found.</p>
                                                </div>


                                            </div>
                                            <tr v-else v-for="item in student_list" v-bind:key="item.id">
                                                <td scope="row">{{ item.id }}</td>
                                                <td scope="row">{{ item.name }}</td>
                                                <td scope="row">{{ item.username }}</td>
                                                <td scope="row">{{ item.student[0].gender }}</td>
                                                <td scope="row">{{ item.student[0].program.program }}</td>
                                                <td scope="row">{{ item.student[0].semester }}</td>
                                                <!-- <td scope="row">{{ item.student[0].roll_number }}</td> -->
                                                <td scope="row">{{ item.student[0].dob }}</td>
                                                <td scope="row">{{ item.student[0].phone }}</td>
                                                <td scope="row">{{ item.student[0].profile }}</td>
                                                <td>
                                                    <div class="row btn-action">
                                                        <a href="#" class="btn btn-success btn-sm ml-1"><i
                                                                class="icon-copy fa fa-eye" aria-hidden="true"
                                                                v-on:click="deleteStudent(item.student[0].id)"></i></a>

                                                        <a href="#" class="btn btn-danger btn-sm ml-1"><i
                                                                class="icon-copy fa fa-edit" aria-hidden="true"
                                                                v-on:click="edit(item.student[0].id)"></i></a>


                                                        <a href="#" class="btn btn-warning btn-sm ml-1"><i
                                                                class="icon-copy fa fa-trash" aria-hidden="true"
                                                                v-on:click="deleteStudent(item.student[0].id)"></i></a>




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
import { program } from '@babel/types';
export default {
    name: "Index",
    data() {
        return {
            'program_list': '',
            'student_list': '',
            'name': '',
            'username': '',
            'email': '',
            'password': '',
            'program_id': '',
            'gender': '',
            'address': '',
            'dob': '',
            'phone': '',
            'profile': '',
            'update_student': '',
            'students_id': '',
            'f_name': '',
            'm_name': '',
            'btn': 'Save',
            'password_confirmation':'',
            'url':'./assets/img/user.png',
            'search_semester':'',
            'search_program':'',
            'search_data':'',
        }
    },
    components: { Navbar, Sidebar },
    methods: {
        onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        },
        getUnits: function () {


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

            axios.get('http://127.0.0.1:8000/api/student',
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.student_list = response.data;
                    console.log(response.data);

                }).catch(error => {
                    console.log('error: ' + error);
                });


        },
        save() {
            document.getElementById('firstnameHelp').innerHTML='';
            document.getElementById('emailHelp').innerHTML='';
            document.getElementById('genderHelp').innerHTML='';
            document.getElementById('addressHelp').innerHTML='';
            document.getElementById('dobHelp').innerHTML='';
            document.getElementById('phoneHelp').innerHTML='';
            document.getElementById('programHelp').innerHTML='';
            document.getElementById('usernameHelp').innerHTML='';
            document.getElementById('passwordHelp').innerHTML='';
            document.getElementById('fnameHelp').innerHTML='';
            document.getElementById('mnameHelp').innerHTML='';
                if (this.update_student != 'true') {


                    let result = axios.post('http://127.0.0.1:8000/api/student',
                        {
                            name: this.name,
                            username: this.username,
                            email: this.email,
                            password: this.password,
                            password_confirmation:this.password_confirmation,
                            program_id: this.program_id,
                            gender: this.gender,
                            address: this.address,
                            dob: this.dob,
                            phone: this.phone,
                            f_name:this.f_name,
                            m_name:this.m_name,
                            profile: this.profile,
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

                                        this.getUnits();

                                    }
                                })
                                this.name='';
                                this.email='';
                                this.gender='';
                                this.address='';
                                this.dob='';
                                this.phone='';
                                this.program_id='';
                                this.f_name='';
                                this.m_name='';
                                this.username='';
                                this.password='';
                                this.password_confirmation='';
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
                                if (key == 'name') {
                                    document.getElementById('firstnameHelp').innerHTML = error.response.data.errors.name[0];

                                }
                                if (key == 'email') {
                                    document.getElementById('emailHelp').innerHTML = error.response.data.errors.email[0];

                                }
                                if (key == 'gender') {
                                    document.getElementById('genderHelp').innerHTML = error.response.data.errors.gender[0];

                                }
                                if (key == 'address') {
                                    document.getElementById('addressHelp').innerHTML = error.response.data.errors.address[0];

                                }
                                if (key == 'dob') {
                                    document.getElementById('dobHelp').innerHTML = error.response.data.errors.dob[0];

                                }

                                if (key == 'phone') {
                                    document.getElementById('phoneHelp').innerHTML = error.response.data.errors.phone[0];

                                }
                                if (key == 'program_id') {
                                    document.getElementById('programHelp').innerHTML = error.response.data.errors.program_id[0];

                                }
                                if (key == 'username') {
                                    document.getElementById('usernameHelp').innerHTML = error.response.data.errors.username[0];

                                }
                                if (key == 'password') {
                                    document.getElementById('passwordHelp').innerHTML = error.response.data.errors.password[0];

                                }
                                if (key == 'f_name') {
                                    document.getElementById('fnameHelp').innerHTML = error.response.data.errors.f_name[0];

                                }
                                if (key == 'm_name') {
                                    document.getElementById('mnameHelp').innerHTML = error.response.data.errors.m_name[0];

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
                if (this.update_student == 'true') {
                    let result = axios.put('http://127.0.0.1:8000/api/student/' + this.students_id,
                        {
                            name: this.name,
                            username: this.username,
                            email: this.email,
                            password: this.password,
                            program_id: this.program_id,
                            gender: this.gender,
                            address: this.address,
                            dob: this.dob,
                            phone: this.phone,
                            f_name:this.f_name,
                            m_name:this.m_name,
                            profile: this.profile,
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
                                        this.getUnits();
                                        this.btn = 'Save';
                                        this.name = '';
                                        this.username = '';
                                        this.email = '';
                                        this.password = '';
                                        this.program_id = '';
                                        this.gender = '';
                                        this.address = '';
                                        this.dob = '';
                                        this.phone = '';
                                        this.profile = '';
                                        this.update_student = '';

                                    }
                                })
                                this.name='';
                                this.email='';
                                this.gender='';
                                this.address='';
                                this.dob='';
                                this.phone='';
                                this.program_id='';
                                this.f_name='';
                                this.m_name='';
                                this.username='';
                                this.password='';
                                this.password_confirmation='';

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
                }
            // }
        },
        filter(){
           
            let result = axios.post('http://127.0.0.1:8000/api/student-search',
                        {
                           
                            program_id: this.program_id,
                            search_data:this.search_data,
                            semester:this.semester, 
                        },
                        {
                            headers: {
                                'Content-type': 'application/json',
                                'Authorization': 'Bearer ' + localStorage.getItem('token')
                            }
                        }).then((response) => {
                            this.student_list = response.data;
                            console.log(response.data);
                        }).catch(error => {

                            
                        if (error.response.status == 401) {
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
        },
        edit(student_id) {
            axios.get('http://127.0.0.1:8000/api/student/' + student_id,
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.name = response.data.user.name;
                    this.username = response.data.user.username;
                    this.email = response.data.user.email;
                    this.program_id = response.data.program.id;
                    this.gender = response.data.gender;
                    this.address = response.data.address;
                    this.dob = response.data.dob;
                    this.phone = response.data.phone;
                    this.profile = response.data.profile;
                    this.f_name = response.data.f_name;
                    this.m_name = response.data.m_name;

                    this.update_student = 'true';
                    this.students_id = response.data.id;
                    this.btn = 'Update';

                }).catch(error => {
                    console.log('error: ' + error);
                });
        },
        deleteStudent(student_id) {
            let url = 'http://127.0.0.1:8000/api/student/' + student_id;
            Swal.fire({
                title: 'Are you sure?',
                text: "You want to delete selected book from course ?",
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
    },
    beforeMount() {
        this.getUnits()
    },
    watch: {
        search_data: function(val, oldVal) {
             let result = axios.post('http://127.0.0.1:8000/api/student-search',
                    {
                        search_data: this.search_data,
                    },
                    {
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem('token')
                        }
                    }).then((response) => {
                        
                            this.student_list=response.data;
                        
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
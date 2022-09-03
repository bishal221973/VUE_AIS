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
                                <h4>Program</h4>
                            </div>
                            <nav aria-label="breadcrumb" role="navigation">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="index.html">Dashboard</a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        Program
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
                                                <label for="exampleInputEmail1">First Name</label>
                                                <input type="text" class="form-control" v-model="first_name"
                                                    id="txtFirstName" aria-describedby="bookHelp"
                                                    placeholder="Enter First Name">
                                                <small id="firstnameHelp" class="form-text text-danger"></small>
                                            </div>


                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">Last Name</label>
                                                <input type="text" class="form-control" v-model="last_name"
                                                    id="txtLastName" aria-describedby="bookHelp"
                                                    placeholder="Enter Last Name">
                                                <small id="lastnameHelp" class="form-text text-danger"></small>
                                            </div>


                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">Email</label>
                                                <input type="text" class="form-control" v-model="email" id="txtEmail"
                                                    aria-describedby="bookHelp" placeholder="Enter Email">
                                                <small id="emailHelp" class="form-text text-danger"></small>
                                            </div>


                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">Gender</label>
                                                <select class="form-control select2  " data-select2-id="9" tabindex="-1"
                                                    aria-hidden="true" v-model="gender" id="txtGender">

                                                    <option value="" selected>Please select your gender</option>
                                                    <option value="Male" selected>Male</option>
                                                    <option value="Female" selected>Female</option>

                                                </select>
                                                <small id="genderHelp" class="form-text text-danger"></small>
                                            </div>
                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">Address</label>
                                                <input type="text" class="form-control" v-model="address"
                                                    id="txtAddress" aria-describedby="bookHelp"
                                                    placeholder="Enter Address">
                                                <small id="addressHelp" class="form-text text-danger"></small>
                                            </div>
                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">DOB</label>
                                                <input type="date" class="form-control" v-model="dob" id="txtDOB"
                                                    aria-describedby="bookHelp" placeholder="Enter DOB">
                                                <small id="dobHelp" class="form-text text-danger"></small>
                                            </div>
                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">Phone</label>
                                                <input type="number" class="form-control" v-model="phone" id="txtPhone"
                                                    aria-describedby="bookHelp" placeholder="Enter Phone number">
                                                <small id="phoneHelp" class="form-text text-danger"></small>
                                            </div>




                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">Faculty Name</label>
                                                <select class="form-control select2" data-select2-id="9" tabindex="-1"
                                                    aria-hidden="true" v-model="program_id" id="txtProgram">

                                                    <option value="" selected>Please select Faculty</option>
                                                    <option v-for="item in program_list" v-bind:key="item.id"
                                                        :value="item.id">
                                                        {{ item.program }}
                                                    </option>
                                                </select>
                                                <small id="programHelp" class="form-text text-danger"></small>
                                            </div>

                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">Program Name</label>
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


                                            <label class="col-12 mb-4 text-black-50 text-uppercase text-monospace">Login
                                                Informations</label>

                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">Username</label>
                                                <input type="text" class="form-control" v-model="username"
                                                    id="txtUsername" aria-describedby="bookHelp"
                                                    placeholder="Enter Username">
                                                <small id="usernameHelp" class="form-text text-danger"></small>
                                            </div>
                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">Password</label>
                                                <input type="password" class="form-control" v-model="password"
                                                    id="txtPassword" aria-describedby="bookHelp"
                                                    placeholder="Enter Password">
                                                <small id="passwordHelp" class="form-text text-danger"></small>
                                            </div>
                                            <div class="form-group col-lg-4">
                                                <label for="exampleInputEmail1">Password Confirmation*</label>
                                                <input type="password" class="form-control" v-model="password"
                                                    id="txtPassword" aria-describedby="bookHelp"
                                                    placeholder="Enter Confirm Password">
                                                <small id="passwordHelp" class="form-text text-danger"></small>
                                            </div>


                                        </div>
                                    </div>

                                    <div class="col-lg-3 ">
                                        <div class="rounded-circle border-secondary teacher-profile">
                                            <div class="form-group">
                                                <img :src="'./assets/img/user.png'" alt="" class="school-img" />
                                            </div>
                                            <div class="txtprofile form-group">
                                                <input type="file" :v-model="profile" id="txtprofile"
                                                    class="form-control">
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
                                    <h3 class="text-uppercase mb-3 ml-2 col-5">Students List</h3>

                                    <!-- Faculty -->
                                    <div class="dropdown ml-4 mr-2">
                                        <button class="btn btn-info dropdown-toggle" type="button"
                                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Faculty
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>

                                     <!-- Program -->
                                     <div class="dropdown mr-2">
                                        <button class="btn btn-info dropdown-toggle" type="button"
                                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Program
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>

                                     <!-- Semester -->
                                     <div class="dropdown mr-5">
                                        <button class="btn btn-info dropdown-toggle" type="button"
                                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Semester
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>


                                    <form class="nosubmit">
                                        <input class="nosubmit" type="search" placeholder="Search Teacher...">
                                    </form>
                                </div>
                                <div class="row">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Username</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Gender</th>
                                                <th scope="col">Program</th>
                                                <th scope="col">Semester</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">DOB</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Profile</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <div v-if="!teacher_list || !teacher_list.length">
                                                <div class="div-empity-table">

                                                    <p class="col-12 text-center empity-table text-black-50"> Oops! No
                                                        record found.</p>
                                                </div>


                                            </div>
                                            <tr v-else v-for="item in student_list" v-bind:key="item.id">
                                                <th scope="row">{{ item.id }}</th>
                                                <th scope="row">{{ item.name }}</th>
                                                <th scope="row">{{ item.username }}</th>
                                                <th scope="row">{{ item.email }}</th>
                                                <th scope="row">{{ item.student[0].gender }}</th>
                                                <th scope="row">{{ item.student[0].program.program }}</th>
                                                <th scope="row">{{ item.student[0].semester }}</th>
                                                <!-- <th scope="row">{{ item.student[0].roll_number }}</th> -->
                                                <th scope="row">{{ item.student[0].address }}</th>
                                                <th scope="row">{{ item.student[0].dob }}</th>
                                                <th scope="row">{{ item.student[0].phone }}</th>
                                                <th scope="row">{{ item.student[0].profile }}</th>
                                                <td>
                                                    <div class="row btn-action">
                                                        <a href="#" class="text-warning"><i
                                                                class="icon-copy fa fa-edit fa-2x" aria-hidden="true"
                                                                v-on:click="edit(item.student[0].id)"></i></a>
                                                        <a href="#" class="text-danger ml-3"><i
                                                                class="icon-copy fa fa-trash fa-2x" aria-hidden="true"
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
            'btn': 'Save',
        }
    },
    components: { Navbar, Sidebar },
    methods: {
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
            if (this.name == '') {
                document.getElementById('firstnameHelp').innerHTML = "Please enter name";
                document.getElementById('txtFirstName').style.borderColor = "red";
            } else {
                document.getElementById('nameHelp').innerHTML = "";
                document.getElementById('txtName').style.borderColor = "gray";
            }

            if (this.username == '') {
                document.getElementById('usernameHelp').innerHTML = "Please enter username";
                document.getElementById('txtUsername').style.borderColor = "red";
            } else {
                document.getElementById('usernameHelp').innerHTML = "";
                document.getElementById('txtUsername').style.borderColor = "gray";
            }

            if (this.email == '') {
                document.getElementById('emailHelp').innerHTML = "Please enter email";
                document.getElementById('txtEmail').style.borderColor = "red";
            } else {
                document.getElementById('emailHelp').innerHTML = "";
                document.getElementById('txtEmail').style.borderColor = "gray";
            }

            if (this.password == '') {
                document.getElementById('passwordHelp').innerHTML = "Please enter password";
                document.getElementById('txtPassword').style.borderColor = "red";
            } else {
                document.getElementById('passwordHelp').innerHTML = "";
                document.getElementById('txtPassword').style.borderColor = "gray";
            }

            if (this.program_id == '') {
                document.getElementById('programHelp').innerHTML = "Please select program";
                document.getElementById('txtProgram').style.borderColor = "red";
            } else {
                document.getElementById('programHelp').innerHTML = "";
                document.getElementById('txtProgram').style.borderColor = "gray";
            }

            if (this.gender == '') {
                document.getElementById('genderHelp').innerHTML = "Please enter gender";
                document.getElementById('txtGender').style.borderColor = "red";
            } else {
                document.getElementById('genderHelp').innerHTML = "";
                document.getElementById('txtGender').style.borderColor = "gray";
            }

            if (this.address == '') {
                document.getElementById('addressHelp').innerHTML = "Please enter address";
                document.getElementById('txtAddress').style.borderColor = "red";
            } else {
                document.getElementById('addressHelp').innerHTML = "";
                document.getElementById('txtAddress').style.borderColor = "gray";
            }

            if (this.dob == '') {
                document.getElementById('dobHelp').innerHTML = "Please enter dob";
                document.getElementById('txtDOB').style.borderColor = "red";
            } else {
                document.getElementById('dobHelp').innerHTML = "";
                document.getElementById('txtDOB').style.borderColor = "gray";
            }
            if (this.phone == '') {
                document.getElementById('phoneHelp').innerHTML = "Please enter phone";
                document.getElementById('txtPhone').style.borderColor = "red";
            } else {
                document.getElementById('phoneHelp').innerHTML = "";
                document.getElementById('txtPhone').style.borderColor = "gray";
            }

            if (this.name != '' && this.username != '' && this.email != '' && this.password != '' && this.gender != '' && this.address != '' && this.dob != '' && this.phone != '') {
                if (this.update_student != 'true') {


                    let result = axios.post('http://127.0.0.1:8000/api/student',
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
            }
            else if (this.name != '' && this.username != '' && this.email != '' && this.gender != '' && this.address != '' && this.dob != '' && this.phone != '') {
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
            }
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
}
</script>
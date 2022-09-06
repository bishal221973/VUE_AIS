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
                                        Teacher
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
                                        <div class="col-lg-9">
                                            <div class="row">
                                                <label
                                                    class="col-12 mb-4 text-black-50 text-uppercase text-monospace">Personal
                                                    Informations</label>
                                                <div class="form-group col-lg-4">
                                                    <label for="exampleInputEmail1">Name*</label>
                                                    <input type="text" class="form-control" v-model="name" name="name"
                                                        id="txtName" aria-describedby="bookHelp"
                                                        placeholder="Enter Name">
                                                    <small id="nameHelp" class="form-text text-danger"></small>
                                                </div>


                                                <div class="form-group col-lg-4">
                                                    <label for="exampleInputEmail1">Email*</label>
                                                    <input type="text" class="form-control" v-model="email"
                                                        id="txtEmail" aria-describedby="bookHelp"
                                                        placeholder="Enter Email">
                                                    <small id="emailHelp" class="form-text text-danger"></small>
                                                </div>
                                                <div class="form-group col-lg-4">
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
                                                    <input type="number" class="form-control" v-model="phone"
                                                        id="txtPhone" aria-describedby="bookHelp"
                                                        placeholder="Enter phone number">
                                                    <small id="phoneHelp" class="form-text text-danger"></small>
                                                </div>

                                                <label
                                                    class="col-12 mb-4 mt-4 text-black-50 text-uppercase text-monospace">Login
                                                    Informations</label>

                                                <div class="form-group col-lg-4">
                                                    <label for="exampleInputEmail1">Username*</label>
                                                    <input type="text" class="form-control" v-model="username"
                                                        id="txtUsername" aria-describedby="bookHelp"
                                                        placeholder="Enter Username">
                                                    <small id="usernameHelp" class="form-text text-danger"></small>
                                                </div>

                                                <div class="form-group col-lg-4" v-if="update_record === ''">
                                                    <label for="exampleInputEmail1">Password*</label>
                                                    <input type="password" class="form-control" v-model="password"
                                                        id="txtPassword" aria-describedby="bookHelp"
                                                        placeholder="Enter Password">
                                                    <small id="passwordHelp" class="form-text text-danger"></small>
                                                </div>
                                                <div class="form-group col-lg-4" v-if="update_record === ''">
                                                    <label for="exampleInputEmail1">Password Confirmation*</label>

                                                    <input type="password" class="form-control"
                                                        v-model="password_confirmation" id="txtPassword"
                                                        aria-describedby="bookHelp"
                                                        placeholder="Enter Confirm Password">
                                                </div>

                                            </div>
                                        </div>

                                        <div class="col-lg-3 ">
                                            <div class="rounded-circle border-secondary teacher-profile">
                                                <div class="form-group">
                                                   
                                                        <img v-if="url" :src="url" class="profile_img"/>
                                                    <!-- <img :src="'./assets/img/user.png'" alt="" class="school-img" /> -->
                                                </div>
                                                <div class="txtprofile form-group">
                                                    <input type="file" :v-model="profile" id="txtprofile"
                                                        class="form-control" @change="onFileChange">
                                                    <!-- <label class="">Choose your profile</label> -->
                                                    <small id="profileHelp" class="form-text text-danger"></small>
                                                </div>
                                                <div class="form-group col-12">
                                                    <button class="btn btn-success d-flex float-right px-5 mt-5"
                                                        v-on:click="save">{{ btn }}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 mt-5">
                                <div class="product-detail-desc pd-20 card-box">
                                    <div class="row">
                                        <h3 class="text-uppercase col-9 mb-3 ml-2">Teachers List</h3>
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
                                                    <th scope="col"></th>
                                                    <th scope="col">Username</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Gender</th>
                                                    <th scope="col">Address</th>
                                                    <th scope="col">DOB</th>
                                                    <th scope="col">Phone</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <div v-if="!teacher_list || !teacher_list.length">
                                                    <div class="div-empity-table">

                                                        <p class="col-12 text-center empity-table text-black-50"> Oops!
                                                            No
                                                            record found.</p>
                                                    </div>


                                                </div>

                                                <tr v-else v-for="item in teacher_list" v-bind:key="item.id">
                                                    <td scope="row">{{ item.teacher[0].id }}</td>
                                                    <td scope="row">{{ item.name }}</td>
                                                    <td scope="row">{{ item.profile }}
                                                        <span class="user-icon">
                                                            <img :src="'./assets/vendors/images/photo1.jpg'" alt="" />
                                                        </span>
                                                    </td>
                                                    <td scope="row">{{ item.username }}</td>
                                                    <td scope="row">{{ item.email }}</td>
                                                    <td scope="row">{{ item.teacher[0].gender }}</td>
                                                    <td scope="row">{{ item.teacher[0].address }}</td>
                                                    <td scope="row">{{ item.teacher[0].dob }}</td>
                                                    <td scope="row">{{ item.teacher[0].phone }}</td>
                                                    <td>
                                                        <div class="row">
                                                            <button class="btn btn-warning text-white"
                                                                v-on:click="edit(item.teacher[0].id)">Edit</button>
                                                            <button class="btn btn-danger text-white ml-1"
                                                                v-on:click="deleteTeacher(item.teacher[0].id)">Delete</button>

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
    name: "Add",
    components: { Navbar, Sidebar },
    data() {
        return {
            'name': '',
            'username': '',
            'email': '',
            'password': '',
            'password_confirmation': '',
            'gender': '',
            'address': '',
            'dob': '',
            'phone': '',
            'profile': '',
            'update_teacher': '',
            'teacher_list': '',
            'btn': 'Save',
            'update_record': '',
            'teacher_id': '',
            'url':'./assets/img/user.png',
        }
    },
    methods: {

        onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        },
        save() {
            document.getElementById('nameHelp').innerHTML = '';
            document.getElementById('usernameHelp').innerHTML = '';
            document.getElementById('emailHelp').innerHTML = '';
            document.getElementById('genderHelp').innerHTML = '';
            document.getElementById('addressHelp').innerHTML = '';
            document.getElementById('dobHelp').innerHTML = '';
            document.getElementById('phoneHelp').innerHTML = '';
            document.getElementById('profileHelp').innerHTML = '';
            document.getElementById('passwordHelp').innerHTML = '';

            // if (this.name != '' && this.username != '' && this.email != '' && this.password != '' && this.gender != '' && this.address != '' && this.dob != '' && this.phone != '') {
            if (this.update_record == 'true') {
                let url = 'http://127.0.0.1:8000/api/teacher/' + this.teacher_id;



                let result = axios.put(url,
                    {
                        name: this.name,
                        username: this.username,
                        email: this.email,
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
                                    // this.$router.push({ path: "/teacher-list" });
                                    this.update_record = '';
                                    this.btn = 'Save';
                                    this.name = '';
                                    this.username = '';
                                    this.email = '';
                                    this.password = '';
                                    this.gender = '';
                                    this.address = '';
                                    this.dob = '';
                                    this.phone = '';
                                    this.profile = '';
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
                        if (error.response.status == 422) {
                            $.each(error.response.data.errors, function (key, value) {
                                if (key == 'name') {
                                    document.getElementById('nameHelp').innerHTML = error.response.data.errors.name[0];

                                }
                                if (key == 'username') {
                                    document.getElementById('usernameHelp').innerHTML = error.response.data.errors.username[0];

                                }

                                if (key == 'email') {
                                    document.getElementById('emailHelp').innerHTML = error.response.data.errors.email[0];

                                }
                                if (key == 'password') {
                                    document.getElementById('passwordHelp').innerHTML = error.response.data.errors.password[0];

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
                                if (key == 'profile') {
                                    document.getElementById('profileHelp').innerHTML = error.response.data.errors.profile[0];

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
                let result = axios.post('http://127.0.0.1:8000/api/teacher',
                    {
                        name: this.name,
                        username: this.username,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.password_confirmation,
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

                        if (error.response.status == 422) {
                            $.each(error.response.data.errors, function (key, value) {
                                if (key == 'name') {
                                    document.getElementById('nameHelp').innerHTML = error.response.data.errors.name[0];

                                }
                                if (key == 'username') {
                                    document.getElementById('usernameHelp').innerHTML = error.response.data.errors.username[0];

                                }

                                if (key == 'email') {
                                    document.getElementById('emailHelp').innerHTML = error.response.data.errors.email[0];

                                }
                                if (key == 'password') {
                                    document.getElementById('passwordHelp').innerHTML = error.response.data.errors.password[0];

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
                                if (key == 'profile') {
                                    document.getElementById('profileHelp').innerHTML = error.response.data.errors.profile[0];

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
            }
            // }
        },
        edit(teacher_id) {
            let url = 'http://127.0.0.1:8000/api/teacher/' + teacher_id;
            axios.get(url,
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    // alert(teacher_id);
                    // this.name=response.data;
                    this.name = response.data.user.name;
                    this.username = response.data.user.username;
                    this.email = response.data.user.email;
                    this.gender = response.data.gender;
                    this.address = response.data.address;
                    this.dob = response.data.dob;
                    this.phone = response.data.phone;
                    this.profile = response.data.profile;
                    this.btn = 'Update';
                    this.update_record = 'true';
                    this.teacher_id = response.data.id;
                }).catch(error => {
                    console.log('error: ' + error);
                });
        },
        deleteTeacher(teacher_id) {

            let url = 'http://127.0.0.1:8000/api/teacher/' + teacher_id;
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
                                    text: response,
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
                    console.log(response.data);
                }).catch(error => {
                    console.log('error: ' + error);
                });




        },
    },
    beforeMount() {
        this.getUnits()
    },
}
</script>

<style>
.user-icon img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
}

.teacher-profile {
    height: 200px;
    width: 200px;
    margin: 0 auto;
    /* background-color: rgba(210, 210, 210, 210); */
}

.div-search {
    float: right;
}

form.nosubmit {
    border: none;
    padding: 0;
}

input.nosubmit {
    width: 260px;
    border: 1px solid gray;
    border-radius: 10px;
    display: block;
    padding: 7px 4px 7px 40px;
    background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center;
}

.empity-table {
    position: absolute;
    font-size: 3rem;
    margin-top: 40px;
}

.div-empity-table {
    height: 110px;
}
.profile_img{
    border-radius: 50%;
    height: 200px;
    width: 200px;
}
</style>
<template>
    <Navbar />
    <Sidebar />
    <div class="content-wrapper" style="min-height: 792px;">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Teacher</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="/">Dashboard</a></li>
                            <li class="breadcrumb-item active">Teacher</li>
                            <li class="breadcrumb-item active">Edit</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <div class="container-fluid">
            <div class="card">
                <div class="card-header bg-secondary">
                    <strong>Add new teacher</strong>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="form-group col-lg-3">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" class="form-control p-4" v-model="name" id="txtName"
                                aria-describedby="bookHelp" placeholder="Enter Name">
                            <small id="nameHelp" class="form-text text-danger"></small>
                        </div>

                        <div class="form-group col-lg-3">
                            <label for="exampleInputEmail1">Username</label>
                            <input type="text" class="form-control p-4" v-model="username" id="txtUsername"
                                aria-describedby="bookHelp" placeholder="Enter Username">
                            <small id="usernameHelp" class="form-text text-danger"></small>
                        </div>

                        <div class="form-group col-lg-3">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="text" class="form-control p-4" v-model="email" id="txtEmail"
                                aria-describedby="bookHelp" placeholder="Enter Email">
                            <small id="emailHelp" class="form-text text-danger"></small>
                        </div>
                        <div class="form-group col-lg-3">
                            <label for="exampleInputEmail1">Gender</label>
                            <input type="text" class="form-control p-4" v-model="gender" id="txtGender"
                                aria-describedby="bookHelp" placeholder="Enter Book Name">
                            <small id="genderHelp" class="form-text text-danger"></small>
                        </div>
                        <div class="form-group col-lg-3">
                            <label for="exampleInputEmail1">Address</label>
                            <input type="text" class="form-control p-4" v-model="address" id="txtAddress"
                                aria-describedby="bookHelp" placeholder="Enter Address">
                            <small id="addressHelp" class="form-text text-danger"></small>
                        </div>
                        <div class="form-group col-lg-3">
                            <label for="exampleInputEmail1">DOB</label>
                            <input type="date" class="form-control p-4" v-model="dob" id="txtDOB"
                                aria-describedby="bookHelp" placeholder="Enter DOB">
                            <small id="dobHelp" class="form-text text-danger"></small>
                        </div>
                        <div class="form-group col-lg-3">
                            <label for="exampleInputEmail1">Phone</label>
                            <input type="number" class="form-control p-4" v-model="phone" id="txtPhone"
                                aria-describedby="bookHelp" placeholder="Enter Book Name">
                            <small id="phoneHelp" class="form-text text-danger"></small>
                        </div>
                        <div class="form-group col-lg-3">
                            <label for="exampleInputEmail1">Profile</label>
                            <input type="text" class="form-control p-4" v-model="profile" id="txtprofile"
                                aria-describedby="bookHelp" placeholder="Enter Book Name">
                            <small id="profileHelp" class="form-text text-danger"></small>
                        </div>
                    </div>

                    <div>
                        <button class="btn btn-success float-right"
                            v-on:click="updateTeacher(teacher_id)">Update</button>
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
// import ''
export default {
    name: "Edit",
    components: { Navbar, Sidebar },
    data() {
        return {
            'name': 'dfsd',
            'username': 'f',
            'email': '',
            'gender': '',
            'address': '',
            'dob': '',
            'phone': '',
            'profile': '',
            'teacher_id': this.$route.params.id
        }
    },
    methods: {
        updateTeacher(teacher_id) {


            let url = localStorage.getItem("url")+'teacher/' + teacher_id;



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
                                this.$router.push({ path: "/teacher-list" });

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

            return result;
        }
    },
    created() {
        let url = localStorage.getItem("url")+'teacher/' + this.teacher_id;
        axios.get(url,
            {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then((response) => {
                this.name = response.data.user.name;
                this.username = response.data.user.username;
                this.email = response.data.user.email;
                this.gender = response.data.gender;
                this.address = response.data.address;
                this.dob = response.data.dob;
                this.phone = response.data.phone;
                this.profile = response.data.profile;
                console.log(response.data.user);
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
}
</script>
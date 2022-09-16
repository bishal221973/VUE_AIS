<template>

    <div class="main-container">
        <div class="pd-ltr-20 xs-pd-20-10">
            <div class="min-height-200px">
                <div class="page-header">
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <div class="title">
                                <h4>Student Profile</h4>

                            </div>
                            <nav aria-label="breadcrumb" role="navigation">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="/">Dashboard</a>
                                    </li>
                                    <li class="breadcrumb-item" aria-current="page">
                                        <a href="/student">Student</a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        Profile
                                    </li>

                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-30">
                        <div class="pd-20 card-box height-100-p">
                            <div class="profile-photo">
                                <a href="modal" data-toggle="modal" data-target="#modal" class="edit-avatar"><i
                                        class="fa fa-pencil"></i></a>
                                <img :src="'./assets/vendors/images/photo1.jpg'" alt="" class="avatar-photo">
                                <div class="modal fade" id="modal" tabindex="-1" role="dialog"
                                    aria-labelledby="modalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-body pd-5">
                                                <div class="img-container">
                                                    <img id="image" :src="'./assets/vendors/images/photo1.jpg'"
                                                        alt="Picture">
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <input type="submit" value="Update" class="btn btn-primary">
                                                <button type="button" class="btn btn-default" data-dismiss="modal">
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h5 class="text-center h5 mb-0">{{name}}</h5>
                            <label class=" col-12 text-center mb-0 font-weight-bold text-black-50">Student
                                ID: {{student_detail.id}}</label>
                            <div class="profile-info mt-3">
                                <h5 class="mb-20 h5 text-blue">Contact Information</h5>
                                <ul>
                                    <li>
                                        <span>Email Address:</span>
                                        <i class="icon-copy fa fa-envelope" aria-hidden="true"></i> {{email}}
                                    </li>
                                    <li>
                                        <span>Phone Number:</span>
                                        <i class="icon-copy fa fa-phone-square" aria-hidden="true"></i> {{phone}}
                                    </li>
                                    <li>
                                        <span>Address:</span>
                                        <i class="icon-copy fa fa-home" aria-hidden="true"></i> {{address}}
                                    </li>
                                </ul>
                            </div>

                            <div class="profile-info">
                                <h5 class="mb-20 h5 text-blue">Update Password</h5>
                                <ul>
                                    <li>
                                        <span>New Password</span>
                                        <input type="text" class="form-control" placeholder="New Password">
                                    </li>
                                    <li>
                                        <span>Password Confirmation</span>
                                        <input type="text" class="form-control" placeholder="Password Confirmation">
                                    </li>
                                    <li>
                                        <button class="btn col-12 bg-success text-white">Update</button>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 mb-30">
                        <div class="card-box overflow-hidden">
                            <div class="profile-tab height-100-p">

                                <div class="tab height-100-p">
                                    <ul class="nav nav-tabs customtab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link  active" data-toggle="tab" href="#timeline" role="tab"
                                                aria-selected="false">User Profile</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#academic" role="tab"
                                                aria-selected="false">Academic Profile</a>
                                        </li>
                                        <!-- <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#setting" role="tab"
                                                aria-selected="true">Update Profile</a>
                                        </li> -->
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane fade  active show" id="timeline" role="tabpanel">
                                            <div class="pd-15">
                                                <div class="profile-timeline">
                                                    <div class="timeline-month">
                                                        <h2>Personal Information</h2>
                                                    </div>
                                                    <div class="profile-timeline-list">
                                                        <div class="col-12 border-bottom p-2">
                                                            <label
                                                                class="ml-4 font-weight-bold col-lg-3 col-md-5 col-sm-12">Full
                                                                name</label>
                                                            <label class="font-weight-bold">:</label>
                                                            <label class="ml-3 text-monospace text-lg">{{name}}</label>
                                                        </div>
                                                        <div class="col-12 border-bottom p-2  mt-4">
                                                            <label
                                                                class="ml-4 font-weight-bold col-lg-3 col-md-5 col-sm-12">Username</label>
                                                            <label class="font-weight-bold">:</label>
                                                            <label
                                                                class="ml-3 text-monospace text-lg">{{username}}</label>
                                                        </div>
                                                        <div class="col-12 border-bottom p-2  mt-4">
                                                            <label
                                                                class="ml-4 font-weight-bold col-lg-3 col-md-5 col-sm-12">DOB</label>
                                                            <label class="font-weight-bold">:</label>
                                                            <label class="ml-3 text-monospace text-lg">{{dob}}</label>
                                                        </div>
                                                        <div class="col-12 border-bottom p-2  mt-4">
                                                            <label
                                                                class="ml-4 font-weight-bold col-lg-3 col-md-5 col-sm-12">Gender</label>
                                                            <label class="font-weight-bold">:</label>
                                                            <label
                                                                class="ml-3 text-monospace text-lg">{{gender}}</label>
                                                        </div>
                                                        <div class="col-12 border-bottom p-2  mt-4">
                                                            <label
                                                                class="ml-4 font-weight-bold col-lg-3 col-md-5 col-sm-12">Father's
                                                                name</label>
                                                            <label class="font-weight-bold">:</label>
                                                            <label
                                                                class="ml-3 text-monospace text-lg">{{f_name}}</label>
                                                        </div>
                                                        <div class="col-12 border-bottom p-2  mt-4">
                                                            <label
                                                                class="ml-4 font-weight-bold col-lg-3 col-md-5 col-sm-12">Mother's
                                                                name</label>
                                                            <label class="font-weight-bold">:</label>
                                                            <label
                                                                class="ml-3 text-monospace text-lg">{{m_name}}</label>
                                                        </div>

                                                    </div>

                                                </div>



                                            </div>
                                        </div>



                                        <div class="tab-pane fade " id="academic" role="tabpanel">
                                            <div class="pd-15">


                                                <div class="profile-timeline">
                                                    <div class="timeline-month">
                                                        <h2>Academic Information</h2>
                                                    </div>
                                                    <div class="profile-timeline-list">
                                                        <div class="col-12 border-bottom p-2">
                                                            <label
                                                                class="ml-4 font-weight-bold col-lg-3 col-md-5 col-sm-12">Faculty</label>
                                                            <label class="font-weight-bold">:</label>
                                                            <label
                                                                class="ml-3 text-monospace text-lg">{{faculty}}</label>
                                                        </div>
                                                        <div class="col-12 border-bottom p-2  mt-4">
                                                            <label
                                                                class="ml-4 font-weight-bold col-lg-3 col-md-5 col-sm-12">Program</label>
                                                            <label class="font-weight-bold">:</label>
                                                            <label
                                                                class="ml-3 text-monospace text-lg">{{program_name}}</label>
                                                        </div>
                                                        <div class="col-12 border-bottom p-2  mt-4">
                                                            <label
                                                                class="ml-4 font-weight-bold col-lg-3 col-md-5 col-sm-12">Semester</label>
                                                            <label class="font-weight-bold">:</label>
                                                            <label
                                                                class="ml-3 text-monospace text-lg">{{semester}}</label>
                                                        </div>
                                                        <div class="col-12 border-bottom p-2  mt-4">
                                                            <label
                                                                class="ml-4 font-weight-bold col-lg-3 col-md-5 col-sm-12">Class
                                                                Roll no.</label>
                                                            <label class="font-weight-bold">:</label>
                                                            <label class="ml-3 text-monospace text-lg">{{roll}}</label>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                        <!-- <div class="tab-pane fade height-100-p" id="setting" role="tabpanel">
                                            <div class="profile-setting">
                                                <form>
                                                    <ul class="profile-edit-list">
                                                        <li class="weight-500 row col-md-12">
                                                            <h4 class="text-blue h5 mb-20 col-12">
                                                                Update Student's Details
                                                            </h4>
                                                            <div class="form-group col-lg-6">
                                                                <label>Full Name</label>
                                                                <input class="form-control form-control-lg"
                                                                    v-model="name" type="text">
                                                            </div>
                                                            <div class="form-group col-lg-6">
                                                                <label>Username</label>
                                                                <input class="form-control form-control-lg"
                                                                    v-model="username" type="text">
                                                            </div>
                                                            <div class="form-group col-lg-6">
                                                                <label>Email</label>
                                                                <input class="form-control form-control-lg" type="email"
                                                                    v-model="email">
                                                            </div>
                                                            <div class="form-group col-lg-6">
                                                                <label>Date of birth</label>
                                                                <input
                                                                    class="form-control form-control-lg  date-picker "
                                                                    type="date" v-model="dob">
                                                            </div>
                                                            <div class="form-group col-lg-6">
                                                                <label for="exampleInputEmail1">Gender*</label>
                                                                <select class="form-control select2  "
                                                                    data-select2-id="9" tabindex="-1" aria-hidden="true"
                                                                    v-model="gender" id="txtGender">

                                                                    <option value="" selected>Please select your gender
                                                                    </option>
                                                                    <option value="Male" selected>Male</option>
                                                                    <option value="Female" selected>Female</option>

                                                                </select>
                                                                <small id="genderHelp"
                                                                    class="form-text text-danger"></small>
                                                            </div>
                                                            <div class="form-group col-lg-6">
                                                                <label>Address</label>
                                                                <input class="form-control form-control-lg" type="text"
                                                                    v-model="address">
                                                            </div>
                                                            <div class="form-group col-lg-6">
                                                                <label>Phone number</label>
                                                                <input class="form-control form-control-lg" type="text"
                                                                    v-model="phone">
                                                            </div>
                                                            <div class="form-group col-lg-6">
                                                                <label>Father's Name</label>
                                                                <input class="form-control form-control-lg" type="text"
                                                                    v-model="f_name">
                                                            </div>

                                                            <div class="form-group col-lg-6">
                                                                <label>Mother's Name</label>
                                                                <input class="form-control form-control-lg" type="text"
                                                                    v-model="m_name">
                                                            </div>

                                                            <div class="form-group col-lg-6">
                                                                <label for="exampleInputEmail1">Program*</label>
                                                                <select class="form-control select2" data-select2-id="9"
                                                                    tabindex="-1" aria-hidden="true" v-model="program"
                                                                    id="txtProgram">

                                                                    <option value="" selected>Please select Program
                                                                    </option>
                                                                    <option v-for="item in program_list"
                                                                        v-bind:key="item.id" :value="item.id">
                                                                        {{ item.program }}
                                                                    </option>
                                                                </select>
                                                                <small id="programHelp"
                                                                    class="form-text text-danger"></small>
                                                            </div>

                                                            <button class="btn btn-primary ml-3" v-on:click="update">Update Information</button>
                                                        </li>

                                                    </ul>
                                                </form>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>





                            </div>
                            <h3 class="text-center">Attendance Information of {{name}}</h3>
                            <label class="col-12 text-center h5 ">{{program_name}} <p>{{semester}}</p></label>
                            <div class="row">

                                <div class="p-5 col-lg-8 m-auto">
                                    <BarChart :chartData="testDatas" />

                                  
                                </div>

                                <div class="col-lg-4 attendance-display">
                                    <h5 class="text-success">
                                        <i class="fa fa-circle"></i> Total Present
                                    </h5>
                                    <label class="text-monospace ml-4"> <i class="icon-copy fa fa-hand-o-right"
                                            aria-hidden="true"></i> {{totalPresent}} Days</label>

                                    <h5 class="text-danger mt-4">
                                        <i class="fa fa-circle"></i> Total Absent
                                    </h5>
                                    <label class="text-monospace ml-4"> <i class="icon-copy fa fa-hand-o-right"
                                            aria-hidden="true"></i> {{totalAbsent}} Days</label>

                                    <h5 class="text-warning mt-4">
                                        <i class="fa fa-circle"></i> Total Leave
                                    </h5>
                                    <label class="text-monospace ml-4"> <i class="icon-copy fa fa-hand-o-right"
                                            aria-hidden="true"></i> {{totalLeave}} Days</label>
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
import axios from 'axios';
import { program } from '@babel/types';
import { defineComponent } from 'vue';
import {
    BarChart

} from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
export default {
    name: 'View',
    props: ['id'],
    data() {
        return {

            'student_id': '',
            's_id': '',
            'student_detail': '',
            'name': '',
            'email': '',
            'phone': '',
            'address': '',
            'username': '',
            'dob': '',
            'gender': '',
            'f_name': '',
            'm_name': '',
            'program': '',
            'program_name': '',
            'semester': '',
            'roll': '',
            'faculty': '',
            'program_list': '',
            'totalPresent': '0',
            'totalAbsent': '0',
            'totalLeave': '0',

            'testDatas': '',
        }
    },
    components: {
        BarChart


    },

    methods: {
        update() {
            let result = axios.put(localStorage.getItem("url")+'student/' + this.s_id,
                {
                    name: this.name,
                    username: this.username,
                    email: this.email,
                    program_id: this.program,
                    gender: this.gender,
                    address: this.address,
                    dob: this.dob,
                    phone: this.phone,
                    f_name: this.f_name,
                    m_name: this.m_name,
                    profile: this.profile,
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    console.log(response.data);
                    if (response.data.status == 'success') {
                        Swal.fire({
                            title: 'Congratulation',
                            text: response.data.message,
                            icon: 'success',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'OK'
                        }).then((result) => {
                            if (result.isConfirmed) {

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
    },
    created() {
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

        axios.get(localStorage.getItem("url")+'student/' + this.id,
            {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then((response) => {
                this.student_detail = response.data;
                this.name = response.data.data.user.name;
                this.email = response.data.data.user.email;
                this.phone = response.data.data.phone;
                this.s_id = response.data.data.id;
                this.address = response.data.data.address;
                this.username = response.data.data.user.username;
                this.dob = response.data.data.dob;
                this.gender = response.data.data.gender;
                this.f_name = response.data.data.f_name;
                this.m_name = response.data.data.m_name;
                this.faculty = response.data.data.program.faculty.faculty;
                this.program = response.data.data.program.id;
                this.program_name = response.data.data.program.program;
                this.roll = response.data.data.roll_number;

                this.totalPresent=response.data.totalPresent;
                this.totalAbsent=response.data.totalAbsent;
                this.totalLeave=response.data.totalLeave;

                if (response.data.data.semester == '1') {
                    this.semester = 'First Semester';
                }

                if (response.data.data.semester == '2') {
                    this.semester = 'Second Semester';
                }

                if (response.data.data.semester == '3') {
                    this.semester = 'Third Semester';
                }

                if (response.data.data.semester == '4') {
                    this.semester = 'Fourth Semester';
                }

                if (response.data.data.semester == '5') {
                    this.semester = 'Fifth Semester';
                }

                if (response.data.data.semester == '6') {
                    this.semester = 'Sixth Semester';
                }

                if (response.data.data.semester == '7') {
                    this.semester = 'Seventh Semester';
                }

                if (response.data.data.semester == '8') {
                    this.semester = 'Eight Semester';
                }

// graph or chart data
                this.testDatas = {
                    labels: ['Present', 'Absent', 'Leave'],
                    datasets: [
                        {
                            data: [response.data.present, response.data.absent, response.data.leave],
                            backgroundColor: ['#4BB543', '#cc0000', '#ff8800'],
                        },
                    ],
                }


            }).catch(error => {
                console.log('error: ' + error);
            });
    },
    

}




</script>

<style>
.attendance-display {
    margin-top: 130px;
}
</style>
<template>

    <div class="main-container">
        <div class="pd-ltr-20 xs-pd-20-10">
            <div class="min-height-200px">
                <div class="page-header">
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <div class="title">
                                <h4>Teacher Profile</h4>

                            </div>
                            <nav aria-label="breadcrumb" role="navigation">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="/">Dashboard</a>
                                    </li>
                                    <li class="breadcrumb-item" aria-current="page">
                                        <a href="/teacher">Teacher</a>
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
                            <label class=" col-12 text-center mb-0 font-weight-bold text-black-50"
                                v-if="role === 'HOD'">HOD
                                ID: 001</label>
                            <label class=" col-12 text-center mb-0 font-weight-bold text-black-50" v-else>Teacher
                                ID: 001</label>

                            <label class=" col-12 text-center mb-0 font-weight-bold text-black-50">User Role:
                                {{role}}</label>


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
                                                aria-selected="false">Assigned Subject</a>
                                        </li>
                                        <li class="nav-item" v-if="role === 'HOD'">
                                            <a class="nav-link" data-toggle="tab" href="#hod" role="tab"
                                                aria-selected="false">HOD</a>
                                        </li>
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



                                                    </div>

                                                </div>



                                            </div>
                                        </div>



                                        <div class="tab-pane fade " id="academic" role="tabpanel">
                                            <div class="pd-15">


                                                <div class="profile-timeline">
                                                    <h3 class="text-center mb-4">Assigned subjects to {{name}}</h3>
                                                    <table class="table mt-5">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Program</th>
                                                                <th scope="col">Semester</th>
                                                                <th scope="col">Book</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <div v-if="!assign_subject || !assign_subject.length">
                                                                <div class="div-empity-table">

                                                                    <p
                                                                        class="col-12 text-center empity-table text-black-50">
                                                                        Oops!
                                                                        No
                                                                        record found.</p>
                                                                </div>


                                                            </div>
                                                            <tr v-else v-for="item in assign_subject" v-bind:key="item.id">
                                                                <td scope="row">{{id}}</td>
                                                                <td scope="row">{{item.course.program.program}}</td>
                                                                <td scope="row">{{item.course.semester}}</td>
                                                                <td scope="row">{{item.course.book.book}}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>


                                                </div>

                                            </div>
                                        </div>

                                        <div class="tab-pane fade " id="hod" role="tabpanel">
                                            <div class="pd-15">


                                                <div class="profile-timeline">
                                                    <h3 class="mb-4">Head of Department</h3>
                                                   
                                                    <div class="profile-timeline-list">
															<ul v-for="item in hod" v-bind:key="item.id">
																<li>
																	<div class="date">HOD</div>
																	<div class="task-name">
																		<i class="ion-android-alarm-clock"></i>Program ID : {{item.program.id}}
																	</div>
																	<p>
																		{{item.program.program}}
																	</p>
																	<div class="task-time">{{item.program.faculty.faculty}}</div>
																</li>
																
															</ul>
														</div>



                                                </div>

                                            </div>
                                        </div>

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
            'teacher_id': '',
            'name': '',
            'email': '',
            'phone': '',
            'address': '',
            'username': '',
            'dob': '',
            'gender': '',
            'role': '',
            'assign_subject': '',
            'hod':'',
        }
    },
    components: {
        BarChart


    },

    methods: {

    },
    created() {

        axios.get('http://127.0.0.1:8000/api/teacher/' + this.id,
            {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then((response) => {
                this.name = response.data.user.name;
                this.email = response.data.user.email;
                this.phone = response.data.phone;
                this.address = response.data.address;
                this.username = response.data.user.username;
                this.dob = response.data.dob;
                this.gender = response.data.gender;
                this.role = response.data.user.role.user_role;
                this.assign_subject = response.data.teacher.assign;
                this.hod=response.data.teacher.user.hod;

            }).catch(error => {
                console.log('error: ' + error);
            });
    },


}




</script>

<style>
.my-card1{
    height: 150px;
}
</style>
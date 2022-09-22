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
                                <h4>Leave</h4>
                            </div>
                            <nav aria-label="breadcrumb" role="navigation">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="index.html">Dashboard</a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        Leave
                                    </li>

                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="product-wrap">
                    <div class="product-detail-wrap mb-30">

                        <div class="row">
                            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog"
                                aria-labelledby="myLargeModalLabel" aria-hidden="true" id="myModal">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Student Leave Application
                                            </h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>

                                        <div class="modal-body">

                                            <label>To,</label> <br>
                                            <label>The Head of Department</label><br>
                                            <label>Dhangadhi Engineering College</label><br>
                                            <p class="text-center mt-4">Subject: About leave</p>
                                            <p class="mt-3">Dear Sir/Madam,</p>
                                            <div>
                                                <label> With due respect, i beg to state that, i am a regular student of
                                                    our class. Due to {{view_reason}}, i will not able to present in my
                                                    class. I need leave for {{view_day}} day.</label>
                                                <label class="float-right mt-5">{{student_name}}</label>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="product-detail-desc pd-20 card-box">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <!-- <th scope="col">Username</th> -->
                                                <th scope="col">Program</th>
                                                <th scope="col">Semester</th>
                                                <th scope="col">From</th>
                                                <th scope="col">To</th>
                                                <th scope="col">Day</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Application</th>

                                                <th scope="col" >Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in leave_list" v-bind:key="item.id">
                                                <td scope="row">{{ item.id }}</td>
                                                <td scope="row">{{ item.student.user.name }}</td>
                                                <!-- <td scope="row">{{ item.student.user.username }}</td> -->
                                                <td scope="row">{{ item.student.program.program }}</td>
                                                <td scope="row">{{ item.student.semester}}</td>
                                                <td scope="row">{{ item.from}}</td>
                                                <td scope="row">{{ item.to}}</td>
                                                <td scope="row">{{ item.days}}</td>
                                                <!-- <td scope="row">{{ item.status}}</td> -->

                                                <td scope="row">
                                                    <span class="badge badge-info" v-if="item.status=='Pending'">{{
                                                    item.status }}</span>
                                                    <span class="badge badge-success" v-if="item.status=='Accepted'">{{
                                                    item.status }}</span>
                                                    <span class="badge badge-danger" v-if="item.status=='Rejected'">{{
                                                    item.status }}</span>
                                                </td>

                                                <td>
                                                    <a href="#" class="border-bottom text-blue" data-toggle="modal"
                                                        data-target="#myModal"
                                                        v-on:click="view(item.id)">Application</a>
                                                </td>

                                                <td>
                                                    <div class="row btn-action" >
                                                        <button class="btn btn-success btn-sm mr-2" 
                                                            v-on:click="accept(item.id)" v-if="item.status=='Pending'"><i class="icon-copy ion-checkmark-round"></i></button>
                                                            <button class="btn btn-danger btn-sm" 
                                                            v-on:click="reject(item.id)" v-if="item.status=='Pending'"><i class="icon-copy ion-close-round"></i></button>
                                                        

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
            'update_student': '',
            'reason': '',
            'from': '',
            'to': '',
            'leave_list': '',
            'btn': 'Apply Leave',
            'update_leave': '',
            'leave_id': '',

            'view_from': '',
            'view_to': '',
            'view_reason': '',
            'view_day': '',
            'student_name': localStorage.getItem('name'),
        }
    },
    methods: {
        reject(l_id) {

            Swal.fire({
                title: 'Are you sure?',
                text: "You want to reject leave ?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    let result = axios.put(localStorage.getItem("url") + 'update-status/' + l_id,
                        {
                            choice: 'Rejected'
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

                                    }
                                })
                                this.getUnits();


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
                }
            });




        },
        accept(l_id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You want to accept leave ?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    let result = axios.put(localStorage.getItem("url") + 'update-status/' + l_id,
                        {
                            choice: 'Accepted'
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

                                    }
                                })
                                this.getUnits();


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
                }
            });
        },

        view(leave_id) {
            axios.get(localStorage.getItem("url") + 'get-leave/' + leave_id,
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.view_reason = response.data.reason;
                    this.view_from = response.data.from;
                    this.view_to = response.data.to;
                    this.view_day = response.data.days;
                    console.log(response.data);

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

            axios.get(localStorage.getItem("url") + 'leave',
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.leave_list = response.data.data;

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
    },
    beforeMount() {
        this.getUnits()
    },

}
</script>

<style>

</style>
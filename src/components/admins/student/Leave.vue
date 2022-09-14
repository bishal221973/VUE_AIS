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
                                        Apply Leave
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
                                        <label>From</label>
                                        <input type="date" class="form-control" v-model="from">
                                        <small id="fromHelp" class="form-text text-danger"></small>
                                    </div>

                                    <div class="form-group">
                                        <label>To</label>
                                        <input type="date" class="form-control" v-model="to">
                                        <small id="toHelp" class="form-text text-danger"></small>
                                    </div>

                                    <div class="form-group">
                                        <label>Reason</label>
                                        <textarea class="form-control" v-model="reason"></textarea>
                                        <small id="reasonHelp" class="form-text text-danger"></small>
                                    </div>
                                    <button class="btn btn-success col-12" v-on:click="save">{{btn}}</button>




                                </div>
                            </div>

                            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog"
                                aria-labelledby="myLargeModalLabel" aria-hidden="true" id="myModal">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Student Leave Application</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>

                                        <div class="modal-body">
                                            
                                            <label >To,</label> <br>
                                            <label >The Head of Department</label><br>
                                            <label >Dhangadhi Engineering College</label><br>
                                            <p class="text-center mt-4">Subject: About leave</p>
                                            <p class="mt-3">Dear Sir/Madam,</p>
                                            <div>
                                            <label> With due respect, i beg to state that, i am a regular student of our class. Due to {{view_reason}}, i will not able to present in my class. I need leave for {{view_day}} day.</label>
                                            <label class="float-right mt-5" >{{student_name}}</label>

                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-8 col-md-12 col-sm-12">
                                <div class="product-detail-desc pd-20 card-box">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">From</th>
                                                <th scope="col">To</th>
                                                <th scope="col">Day</th>
                                                <th scope="col">Status</th>

                                                <th scope="col" class="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in leave_list" v-bind:key="item.id">
                                                <td scope="row">{{ item.id }}</td>
                                                <td scope="row">{{ item.from }}</td>
                                                <td scope="row">{{ item.to }}</td>
                                                <td scope="row">{{ item.days }}</td>
                                                <td scope="row">
                                                    <span class="badge badge-info" v-if="item.status=='Pending'">{{
                                                    item.status }}</span>
                                                    <span class="badge badge-success" v-if="item.status=='Accepted'">{{
                                                    item.status }}</span>
                                                    <span class="badge badge-danger" v-if="item.status=='Rejected'">{{
                                                    item.status }}</span>
                                                </td>


                                                <td>
                                                    <div class="row btn-action">
                                                        <a href="#" class="btn btn-info btn-sm" data-toggle="modal" data-target="#myModal" v-on:click="view(item.id)"><i
                                                                class="icon-copy fa fa-eye" aria-hidden="true"
                                                                ></i></a>
                                                        <a href="#" class="btn btn-warning btn-sm ml-1"
                                                            v-on:click="edit(item.id)"><i class="icon-copy fa fa-edit"
                                                                aria-hidden="true"></i></a>
                                                        <a href="#" class="btn btn-danger btn-sm ml-1"
                                                            v-on:click="deleteLeave(item.id)"><i
                                                                class="icon-copy fa fa-trash"
                                                                aria-hidden="true"></i></a>


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
            'student_name':localStorage.getItem('name'),
        }
    },
    methods: {
        save() {
            if (this.update_student == '') {


                let result = axios.post('http://127.0.0.1:8000/api/leave',
                    {
                        user_id: localStorage.getItem('id'),
                        reason: this.reason,
                        from: this.from,
                        to: this.to,

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
                            this.from = '';
                            this.to = '';
                            this.reason = '';
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
                        console.log('error' + error);
                        if (error.response.status == 422) {
                            $.each(error.response.data.errors, function (key, value) {
                                if (key == 'reason') {
                                    document.getElementById('reasonHelp').innerHTML = error.response.data.errors.reason[0];

                                }
                                if (key == 'from') {
                                    document.getElementById('fromHelp').innerHTML = error.response.data.errors.from[0];

                                }
                                if (key == 'to') {
                                    document.getElementById('toHelp').innerHTML = error.response.data.errors.to[0];

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
            else {
                let result = axios.put('http://127.0.0.1:8000/api/leave/' + this.leave_id,
                    {
                        user_id: localStorage.getItem('id'),
                        reason: this.reason,
                        from: this.from,
                        to: this.to,

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
                            this.btn = "Apply Leave";
                            this.update_leave = '';

                            this.from = '';
                            this.to = '';
                            this.reason = '';

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
                        console.log('error' + error);
                        if (error.response.status == 422) {
                            $.each(error.response.data.errors, function (key, value) {
                                if (key == 'reason') {
                                    document.getElementById('reasonHelp').innerHTML = error.response.data.errors.reason[0];

                                }
                                if (key == 'from') {
                                    document.getElementById('fromHelp').innerHTML = error.response.data.errors.from[0];

                                }
                                if (key == 'to') {
                                    document.getElementById('toHelp').innerHTML = error.response.data.errors.to[0];

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

            // }
        },
        deleteLeave(leave_id) {
            let url = 'http://127.0.0.1:8000/api/leave/' + leave_id;
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
        edit(leave_id) {
            axios.get('http://127.0.0.1:8000/api/get-leave/' + leave_id,
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.reason = response.data.reason;
                    this.from = response.data.from;
                    this.to = response.data.to;
                    this.btn = "Update";
                    this.update_student = 'true';
                    this.leave_id = response.data.id;
                }).catch(error => {
                    console.log('error: ' + error);
                });
        },
        view(leave_id) {
            axios.get('http://127.0.0.1:8000/api/get-leave/' + leave_id,
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
                    console.log('error: ' + error);
                });
        },
        getUnits: function () {

            axios.get('http://127.0.0.1:8000/api/leave/' + localStorage.getItem('id'),
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.leave_list = response.data;

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

</style>
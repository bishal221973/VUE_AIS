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
                                <h4>Report</h4>
                            </div>
                            <nav aria-label="breadcrumb" role="navigation">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="index.html">Dashboard</a>
                                    </li>
                                    <li class="breadcrumb-item" aria-current="page">
                                        Attendance
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        Report
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
                                    <!-- <div class="btn-group mt-3" >
                                            <button type="button" class="btn btn-secondary form-control  dropdown-toggle text-white"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Please select faculty name
                                            </button>
                                            <b-form-select  class="dropdown-menu dropdown-menu-right" v-model="search_text" >
                                                <button  class="dropdown-item" type="button" v-for="item in attendance_list" v-bind:key="item.id" :value="item.id">{{item.faculty}}</button>     
                                            </b-form-select>
                                        </div> -->
                                    <!-- <div class="form-group col-lg-2">
                                        <select class="form-control select2" data-select2-id="9" tabindex="-1"
                                            aria-hidden="true" v-model="program_id" id="txtProgram">

                                            <option value="" selected>Please select Faculty</option>
                                            <option v-for="item in program_list" v-bind:key="item.id" :value="item.id">
                                                {{ item.program }}
                                            </option>
                                        </select>
                                        <small id="programHelp" class="form-text text-danger"></small>
                                    </div> -->


                                    <!-- ======================Model================= -->
                                    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog"
                                        aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalCenterTitle">Filter Student
                                                        Attendance
                                                    </h5>
                                                    <button type="button" class="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="row">
                                                        <div class="form-group  col-lg-4">
                                                            <label>Program</label>
                                                            <select class="form-control" v-model="program_id"
                                                                aria-label="Default select example">
                                                                <option selected disabled>Select Program</option>
                                                                <option v-for="item in program_list"
                                                                    v-bind:key="item.id" :value="item.id">
                                                                    {{ item.program }}
                                                                </option>
                                                            </select>
                                                        </div>

                                                        <div class="form-group col-lg-4">
                                                            <label>Semester</label>
                                                            <select class="form-control " v-model="semester"
                                                                aria-label="Default select example">
                                                                <option selected disabled>Select Semester</option>
                                                                <option value="1">First Semester</option>
                                                                <option value="2">Second Semester</option>
                                                                <option value="3">Third Semester</option>
                                                                <option value="4">Fourth Semester</option>
                                                                <option value="5">Fifth Semester</option>
                                                                <option value="6">Sixth Semester</option>
                                                                <option value="7">Seventh Semester</option>
                                                                <option value="8">Eighth Semester</option>
                                                            </select>
                                                        </div>

                                                        <div class="form-group col-lg-4">
                                                            <label>Subject</label>
                                                            <select class="form-control " v-model="course_id"
                                                                aria-label="Default select example">
                                                                <option selected disabled>Select Subject</option>
                                                                <option v-for="item in book_list" v-bind:key="item.id"
                                                                    :value="item.id">
                                                                    {{ item.book.subject }}
                                                                </option>
                                                            </select>
                                                        </div>

                                                        <div class="form-group col-lg-3">

                                                            <button class=" btn btn-info mt-2"
                                                                v-on:click="normal_filter" aria-hidden="true"
                                                                data-dismiss="modal" aria-label="Close"><i
                                                                    class="icon-copy fa fa-filter"
                                                                    aria-hidden="true"></i> Filter</button>

                                                        </div>

                                                    </div>
                                                    <div class="modal-body">
                                                        <h5>Date Filter</h5>
                                                    </div>
                                                </div>
                                                <div class="modal-header">
                                                    <div class="form-group col-lg-6">
                                                        <label for="">From</label>
                                                        <input type="date" v-model="startDate" class="form-control">

                                                    </div>
                                                    <div class="form-group col-lg-6">
                                                        <label for="">To</label>
                                                        <input type="date" v-model="endDate" class="form-control">

                                                    </div>

                                                </div>
                                                <div class="form-group col-lg-3">

                                                    <button class=" btn btn-info mt-2" v-on:click="date_filter"
                                                        aria-hidden="true" data-dismiss="modal" aria-label="Close"><i
                                                            class="icon-copy fa fa-filter" aria-hidden="true"></i>
                                                        Filter</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- =================End Model================== -->
                                    <input type="text" class="form-control col-lg-5 search-input  m-3"
                                        v-model="search_text" v-on:change="search" placeholder="Search program" />
                                    <div class="col-lg-4"></div>
                                    <a href="#" class=" text-white btn btn-info form-control mt-3 col-1"
                                        v-on:click="display_all" data-toggle="modal" data-target=".bd-example-modal-lg">
                                        Filter
                                    </a>
                                    <a href="#" class="btn btn-danger ml-3 form-control mt-3 col-1"
                                        v-on:click="display_all">
                                        <i class="icon-copy fi-x"></i>
                                    </a>

                                </div>
                                <div class="row">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Username</th>
                                                <th scope="col">Profile</th>
                                                <th scope="col">Class roll number</th>
                                                <th scope="col">Faculty</th>
                                                <th scope="col">Program</th>
                                                <th scope="col">Semester</th>
                                                <th scope="col">Subject</th>
                                                <th scope="col">Attendance</th>
                                                <!-- <th scope="col">Action</th> -->
                                            </tr>
                                        </thead>
                                        <tbody v-for="item in attendance_list" v-bind:key="item.id">
                                            <!-- <tr v-for="item in attendance_list" v-bind:key="item.id"> -->
                                            <tr class="col-12">
                                                <td scope="row" class="col-1">{{ item[0].attendance_date }}</td>
                                                <td scope="row" class="col-1"></td>
                                                <td scope="row" class="col-1"></td>
                                                <td scope="row" class="col-1"></td>
                                                <td scope="row" class="col-1"></td>
                                                <td scope="row" class="col-1"></td>
                                                <td scope="row" class="col-1"></td>
                                                <td scope="row" class="col-1"></td>
                                                <td scope="row" class="col-1"></td>
                                                <td scope="row" class="col-1"></td>
                                            </tr>
                                            <tr v-for="data in item">
                                                <td>{{ data.id }}</td>
                                                <td>{{ data.student.user.name }}</td>
                                                <td>{{ data.student.user.username }}</td>
                                                <td>{{ data.student.profile }}</td>
                                                <td>{{ data.student.roll_number }}</td>
                                                <td>{{ data.course.program.faculty.faculty }}</td>
                                                <td>{{ data.course.program.program }}</td>
                                                <td>{{ data.course.semester }}</td>
                                                <td>{{ data.course.book.subject }}</td>
                                                <td>{{ data.attendance }}</td>
                                                <!-- <td>
                                                    <div class="row btn-action">
                                                        <a href="#" class="text-warning"><i
                                                                class="icon-copy fa fa-edit fa-2x" aria-hidden="true"
                                                                v-on:click="edit(item.id)"></i></a>
                                                        <a href="#" class="text-danger ml-3"><i
                                                                class="icon-copy fa fa-trash fa-2x" aria-hidden="true"
                                                                v-on:click="deleteProgram(item.id)"></i></a>
                                                    </div>
                                                </td> -->
                                            </tr>
                                            <!-- <td scope="row">{{ item[0].student.user.name}}</td> -->
                                            <!-- <td scope="row">{{ item[0].student.user.username}}</td>
                                                <td scope="row">{{ item[0].student.profile}}</td>
                                                <td scope="row">{{ item[0].student.roll_number}}</td>
                                                <td scope="row">{{ item[0].course.program.faculty.faculty}}</td>
                                                <td scope="row">{{ item[0].course.program.program}}</td>
                                                <td scope="row">{{ item[0].semester}}</td>
                                                <td scope="row">{{ item[0].course.book.book}}</td>
                                                <td scope="row">{{ item[0].attendance}}</td> -->


                                            <!-- </tr> -->
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
export default {
    name: "Index",
    components: { Navbar, Sidebar },
    data() {
        return {
            'attendance_list': '',
            'program_list': '',
            'program_id': '',
            'semester': '',
            'course_id': '',
            'book_list': '',
        }
    },
    watch: {
        semester(newValue, oldValue) {

            if (this.program_id == '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please select a program first!',
                })
                this.semester = '';
            } else {
                axios.post(localStorage.getItem("url") + 'select-subject',
                    {
                        program_id: this.program_id,
                        semester: newValue,

                    },
                    {
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem('token')
                        }
                    }).then((response) => {
                        this.book_list = response.data;


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
            }
        },
    },
    methods: {
        display_all() {
            this.search_text = '';
        },

        normal_filter() {
            let result = axios.post(localStorage.getItem("url") + 'attendance-filter',
                {
                    program: this.program_id,
                    semester: this.semester,
                    subject: this.course_id,

                },
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    if (response.data.status == 'success') {
                        console.log(response.data.data);
                        this.attendance_list = response.data.data;
                    } else if (response.data.status == 'failed') {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: response.data.message,
                            footer: 'We are sorry'
                        })

                    } else {
                        console.log(response.data.message)
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
        },

        date_filter() {
            let result = axios.post(localStorage.getItem("url") + 'date-filter',
                {
                    startDate: this.startDate,
                    endDate: this.endDate,
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    if (response.data.status == 'success') {
                        console.log(response.data.data);
                        // this.attendance_list = response.data.data;
                        this.attendance_list = response.data.data;
                    } else if (response.data.status == 'failed') {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: response.data.message,
                            footer: 'We are sorry'
                        })

                    } else {
                        console.log(response.data.message)
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
        },


        getUnits: function () {
            let result = axios.get(localStorage.getItem("url") + 'attendance',
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.attendance_list = response.data.data;

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

            axios.get(localStorage.getItem("url") + 'program',
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.program_list = response.data;


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
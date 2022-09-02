<template>
    <Navbar />
    <Sidebar />

    <!-- <div class="content-wrapper" style="min-height: 792px;">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Student Attendance</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="/">Dashboard</a></li>
                            <li class="breadcrumb-item active">Student Attendance</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div id="clockContainer" v-bind:style="{ 'background-image': 'url(' + './assets/img/clock.png' + ')' }">
                    <div id="hour"></div>
                    <div id="minute"></div>
                    <div id="second"></div>
                </div>
                <div id="digital_time">
                    <h1 id="date-time"></h1>
                </div>

            </div>

            <div class="col-lg-5">
                <div class="card">
                    <div class="card-header bg-secondary">
                        TAKE STUDENT ATTENDANCE
                    </div>
                    <div class="card-body">

                        <div class="row">

                            <div class="form-group col-lg-4">
                                <label for="exampleInputEmail1">Program Name</label>
                                <select class="form-control select2 select2-hidden-accessible" data-select2-id="9"
                                    tabindex="-1" aria-hidden="true" v-model="program_id" id="txtProgram">

                                    <option value="" selected>Please select Faculty</option>
                                    <option v-for="item in program_list" v-bind:key="item.id" :value="item.id">
                                        {{ item.program }}
                                    </option>
                                </select>
                                <small id="programHelp" class="form-text text-danger"></small>
                            </div>
                            <div class="form-group col-lg-4">
                                <label for="exampleInputEmail1">Semester</label>
                                <select class="form-control" data-select2-id="9" v-model="semester" id="txtSemester">

                                    <option value="" selected>Please select Faculty</option>
                                    <option value="1">First Semester</option>
                                    <option value="2">Second Semester</option>
                                    <option value="3">Third Semester</option>
                                    <option value="4">Fourth Semester</option>
                                    <option value="5">Fifth Semester</option>
                                    <option value="6">Sixth Semester</option>
                                    <option value="7">Seven Semester</option>
                                    <option value="8">Eight Semester</option>
                                </select>
                                <small id="semesterHelp" class="form-text text-danger"></small>
                            </div>
                            <div class="form-group col-lg-4">
                                <label for="exampleInputEmail1">Book name</label>
                                <select class="form-control select2 select2-hidden-accessible" data-select2-id="9"
                                    tabindex="-1" aria-hidden="true" v-model="course_id" id="txtBook">

                                    <option value="" selected>Please select Faculty</option>
                                    <option v-for="item in book_list" v-bind:key="item.id" :value="item.id">
                                        {{ item.book.book }}
                                    </option>
                                </select>
                                <small id="bookHelp" class="form-text text-danger"></small>
                            </div>
                        </div>
                        <button class="col-12 btn btn-success" v-on:click="getStudent">OK</button>

                        <div class="card mt-4">
                            <table class="table">
                                <thead class="thead-light">
                                    <tr>

                                        <th scope="col">Name</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">
                                            Attendance
                                        </th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in student_list" v-bind:key="item.id">
                                        <input type="hidden" v-model="item.id">

                                        <th scope="row">{{ item.user.name }}</th>
                                        <th scope="row">{{ item.user.username }}</th>
                                        <th>
                                            <select class="form-control" data-select2-id="9" v-model="item.user.id"
                                                id="txtSemester">
                                                <option value="Persent">Persent</option>
                                                <option value="Absent">Absent</option>
                                                <option value="Leave">Leave</option>

                                            </select>

                                        </th>

                                    </tr>


                                    <button class="btn btn-warning col-12 mt-4 ml-5" v-on:click="takeAttendance">Take
                                        Attendance</button>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

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

                            <div class="form-group col-lg-4">
                                <label for="exampleInputEmail1">Program Name</label>
                                <select class="form-control select2" data-select2-id="9"
                                    tabindex="-1" aria-hidden="true" v-model="program_id" id="txtProgram">

                                    <option value="" selected>Please select Faculty</option>
                                    <option v-for="item in program_list" v-bind:key="item.id" :value="item.id">
                                        {{ item.program }}
                                    </option>
                                </select>
                                <small id="programHelp" class="form-text text-danger"></small>
                            </div>
                            <div class="form-group col-lg-4">
                                <label for="exampleInputEmail1">Semester</label>
                                <select class="form-control" data-select2-id="9" v-model="semester" id="txtSemester">

                                    <option value="" selected>Please select Faculty</option>
                                    <option value="1">First Semester</option>
                                    <option value="2">Second Semester</option>
                                    <option value="3">Third Semester</option>
                                    <option value="4">Fourth Semester</option>
                                    <option value="5">Fifth Semester</option>
                                    <option value="6">Sixth Semester</option>
                                    <option value="7">Seven Semester</option>
                                    <option value="8">Eight Semester</option>
                                </select>
                                <small id="semesterHelp" class="form-text text-danger"></small>
                            </div>
                            <div class="form-group col-lg-4">
                                <label for="exampleInputEmail1">Book name</label>
                                <select class="form-control select2" data-select2-id="9"
                                    tabindex="-1" aria-hidden="true" v-model="course_id" id="txtBook">

                                    <option value="" selected>Please select Faculty</option>
                                    <option v-for="item in book_list" v-bind:key="item.id" :value="item.id">
                                        {{ item.book.book }}
                                    </option>
                                </select>
                                <small id="bookHelp" class="form-text text-danger"></small>
                            </div>
                             <button class="col-12 btn btn-success" v-on:click="getStudent">OK</button>



                             <table class="table mt-5">
                                <thead class="thead-light">
                                    <tr>

                                        <th scope="col">Roll number</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">
                                            Attendance
                                        </th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in student_list" v-bind:key="item.id">
                                        <input type="hidden" v-model="item.id">

                                        <th scope="row">{{ item.user.student[0].roll_number }}</th>
                                        <th scope="row">{{ item.user.name }}</th>
                                        <th scope="row">{{ item.user.username }}</th>
                                        <th>
                                            <select class="form-control" data-select2-id="9" v-model="item.user.id"
                                                id="txtSemester">
                                                <option value="Persent">Persent</option>
                                                <option value="Absent">Absent</option>
                                                <option value="Leave">Leave</option>

                                            </select>

                                        </th>

                                    </tr>


                                    <button class="btn btn-warning col-12 mt-4 ml-5" v-on:click="takeAttendance">Take
                                        Attendance</button>
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
    data() {
        return {
            'student_id': '',
            'program_id': '',
            'semester': '',
            'attendance': '',
            'book_list': '',
            'program_list': '',
            'student_list': '',
            'course_id': '',
            'i': '',

        }
    },
    components: { Navbar, Sidebar },
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
                axios.post('http://127.0.0.1:8000/api/select-subject',
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
                        console.log('error: ' + error);
                    });
            }
        },

        program_id(newValue, oldValue) {

            axios.post('http://127.0.0.1:8000/api/select-subject',
                {
                    program_id: newValue,
                    semester: this.semester,

                },
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.book_list = response.data;


                }).catch(error => {
                    console.log('error: ' + error);
                });

        }
    },
    methods: {
        takeAttendance() {
            // if (this.program_id == '') {
            //     document.getElementById('programHelp').innerHTML = "Please enter name";
            //     document.getElementById('txtProgram').style.borderColor = "red";
            // } else {
            //     document.getElementById('programHelp').innerHTML = "";
            //     document.getElementById('txtProgram').style.borderColor = "gray";
            // }

            // if (this.semester == '') {
            //     document.getElementById('semesterHelp').innerHTML = "Please enter name";
            //     document.getElementById('txtSemester').style.borderColor = "red";
            // } else {
            //     document.getElementById('semesterHelp').innerHTML = "";
            //     document.getElementById('txtSemester').style.borderColor = "gray";
            // }

            // if (this.course_id == '') {
            //     document.getElementById('bookHelp').innerHTML = "Please enter name";
            //     document.getElementById('txtBook').style.borderColor = "red";
            // } else {
            //     document.getElementById('bookHelp').innerHTML = "";
            //     document.getElementById('txtBook').style.borderColor = "gray";
            // }

            // if (this.program_id != '' && this.semester != '' && this.course_id != '') {
            // }
            for (let item of this.student_list) {
                console.log(item.id);
                if (item.user.id != 'Persent' || item.user.id != 'Absent' || item.user.id != 'Leave') {
                    let result = axios.post('http://127.0.0.1:8000/api/attendance',
                        {
                            student_id: item.id,
                            program_id: this.program_id,
                            semester: this.semester,
                            course_id: this.course_id,
                            attendance: item.user.id,
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
                }
            }


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



        },
        getStudent() {
            let result = axios.post('http://127.0.0.1:8000/api/get-students',
                {
                    program_id: this.program_id,
                    semester: this.semester,
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    let num = 0;
                    for (let item of response.data) {
                        num = num + 1;
                    }
                    this.i = num;
                    this.student_list = response.data;
                }).catch(error => {

                    Swal.fire(
                        'Warning',
                        'error: ' + error,
                        'error'
                    )
                });

            return result;
        },
    },
    beforeMount() {
        this.getUnits()
    },
}


</script>

<style>
#digital_time {
    width: 200px;
    height: 50px;
    border-radius: 10px;
    margin-top: 150px;
    margin-left: 37%;

    padding: 1px;
    text-align: center;
    font-size: 0px;
    font-family: Orbitron, sans-serif;
}

#clockContainer {
    position: relative;
    margin: auto;
    height: 20vw;
    width: 20vw;
    background: url() no-repeat;
    background-size: 100%;
    top: 10vh;
}

#hour,
#minute,
#second {
    position: absolute;
    background: black;
    border-radius: 10px;
    transform-origin: bottom;
    z-index: 1;
}

#hour {
    width: 1.8%;
    height: 25%;
    top: 25%;
    left: 48.85%;
    opacity: 0.8;
    z-index: 1;

}

#minute {
    width: 1.6%;
    height: 30%;
    top: 19%;
    left: 48.9%;
    opacity: 0.8;
    z-index: 1;

}

#second {
    width: 1%;
    height: 40%;
    top: 9%;
    left: 49.25%;
    opacity: 0.8;

}
</style>


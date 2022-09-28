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


                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-12 mb-30">
                                <div class="pd-20 card-box height-100-p">
                                    <h4 class="mb-20 h4">Student's on leave</h4>
                                    <ul class="list-group list-group-flush">

                                        <li class="list-group-item" v-for="item in my_leave" v-bind:key="item.id">
                                            <a v-for="item1 in item" v-bind:key="item1.id">
                                                {{item1.student.user.name}}
                                                (Roll Number {{item1.student.roll_number}})
                                            </a>
                                            
                                        </li>

                                    </ul>
                                </div>
                            </div>


                            <div class="col-lg-7 col-md-12 col-sm-12">
                                <div class="product-detail-desc pd-20 card-box">
                                    <div class="row">

                                        <div class="form-group col-lg-4" v-if="role === 'Admin'">
                                            <label for="exampleInputEmail1">Program Name</label>
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
                                        <div class="form-group col-lg-4" v-if="role === 'Admin'">
                                            <label for="exampleInputEmail1">Semester</label>
                                            <select class="form-control" data-select2-id="9" v-model="semester"
                                                id="txtSemester">

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
                                        <div class="form-group col-lg-4" v-if="role === 'Admin'">
                                            <label for="exampleInputEmail1">Subject</label>
                                            <select class="form-control select2" data-select2-id="9" tabindex="-1"
                                                aria-hidden="true" v-model="course_id" id="txtBook">

                                                <option value="" selected>Please select Subject</option>
                                                <option v-for="item in book_list" v-bind:key="item.id" :value="item.id">
                                                    {{ item.book.subject}}
                                                </option>
                                            </select>
                                            <small id="bookHelp" class="form-text text-danger"></small>
                                        </div>
                                        <div class="form-group col-lg-12" v-if="role === 'Admin'">
                                            <label for="exampleInputEmail1">Date</label>
                                            <input type="date" v-model="date" class="form-control">
                                            <small id="bookHelp" class="form-text text-danger"></small>
                                        </div>

                                        <div v-if="role === 'Admin'"></div>
                                        <div v-else-if="role === 'Student'"></div>
                                        <div v-else class="row col-12">
                                            <div class="col-lg-8">
                                                <h3>Take student's Attendance</h3>
                                                <label>{{new_program}}</label>
                                                <label> {{new_semester}}</label>
                                            </div>
                                            <div class="col-lg-4">
                                                <label for="">Appoinded Subjects</label>
                                                <select class="form-control" aria-label="Default select example"
                                                    v-model="subject">
                                                    <option selected>Select a subject</option>
                                                    <!-- <option :value="item.course.id"  v-for="item in assigned_sub" v-bind:key="item.id" :value="item.id">
                                                        {{item.course.book.subject}}
                                                    </option> -->

                                                    <option v-for="item in assigned_sub" v-bind:key="item.id"
                                                        :value="item.course.id">
                                                        {{item.course.book.subject}} </option>

                                                </select>
                                            </div>
                                            <div class="form-group col-lg-12" v-if="role === 'Teacher'">
                                                <label for="exampleInputEmail1">Date</label>
                                                <input type="date" v-model="date" class="form-control">
                                                <small id="bookHelp" class="form-text text-danger"></small>
                                                <button class="btn btn-success" v-on:click="attend">Take
                                                    Attendance</button>
                                            </div>

                                        </div>
                                        <button v-if="role === 'Admin'" class="col-3 btn btn-success"
                                            v-on:click="getStudent">OK</button>



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

                                                    <td>{{ item.user.student.roll_number }}</td>
                                                    <td scope="row">{{ item.user.name }}</td>
                                                    <td scope="row">{{ item.user.username }}</td>
                                                    <td>
                                                        <select class="form-control" data-select2-id="9"
                                                            v-model="item.user.id" id="txtSemester">
                                                            <option value="Present">Present</option>
                                                            <option value="Absent">Absent</option>
                                                            <option value="Leave">Leave</option>

                                                        </select>

                                                    </td>
                                                </tr>

                                            </tbody>

                                        </table>

                                    </div>
                                    <div class="row  btn-attendance">
                                        <div class="col-lg-9">

                                        </div>
                                        <div class="col-lg-3" v-if="student_list">
                                            <button class="btn btn-warning mt-4 ml-5" v-on:click="takeAttendance">Take
                                                Attendance</button>
                                        </div>
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
            'assigned_sub': '',
            'subject': '',
            'new_program_id': '',
            'new_program': '',
            'new_semester': '',
            'new_subject_id': '',
            'role': localStorage.getItem('role'),
            'leave_list': '',
            'my_leave':'',
            'date': '',
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
        subject(newValue, oldValue) {

            let result = axios.post(localStorage.getItem("url") + 'select-sub',
                {
                    course_id: newValue,
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    // this.assigned_sub = response.data;

                    this.program_id = response.data.program.id;
                    this.new_program = response.data.program.program;
                    this.new_semester = response.data.semester;
                    this.semester = response.data.semester;
                    this.course_id = response.data.id;


                    console.log(response.data.program.id);

                    // let result = axios.post(localStorage.getItem("url") + 'get-students',
                    //     {
                    //         program_id: response.data.program.id,
                    //         semester: response.data.semester,
                    //         date:this.date,
                    //     },
                    //     {
                    //         headers: {
                    //             'Content-type': 'application/json',
                    //             'Authorization': 'Bearer ' + localStorage.getItem('token')
                    //         }
                    //     }).then((response) => {
                    //         let num = 0;
                    //         for (let item of response.data) {
                    //             num = num + 1;
                    //         }
                    //         this.i = num;
                    //         this.student_list = response.data;
                    //     }).catch(error => {

                    //         Swal.fire(
                    //             'Warning',
                    //             'error: ' + error,
                    //             'error'
                    //         )
                    //     });

                    // return result;

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
        },

        program_id(newValue, oldValue) {

            axios.post(localStorage.getItem("url") + 'select-subject',
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
                    if (error.response.status === 401) {
                        this.$router.push({ name: "login" });

                    }
                    else if (error.response.status === 422) {
                        

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
    methods: {
        attend() {
            let result = axios.post(localStorage.getItem("url") + 'get-students',
                {
                    program_id: this.program_id,
                    semester: this.semester,
                    course_id: this.course_id,
                    date: this.date,
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    console.log(response.data);
                    if (response.data.status == "failed") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: response.data.message,
                            footer: 'We are sorry'
                        })
                    } else {
                        let num = 0;
                        for (let item of response.data.data) {
                            num = num + 1;
                        }
                        this.i = num;
                        this.student_list = response.data.data;
                        this.my_leave=response.data.leave;
                        console.log(response.data);
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
        takeAttendance() {

            for (let item of this.student_list) {
                
                // console.log();
                if (item.user.id != 'Present' || item.user.id != 'Absent' || item.user.id != 'Leave') {
                    let result = axios.post(localStorage.getItem("url") + 'attendance',
                        {
                            student_id: item.id,
                            program_id: this.program_id,
                            semester: this.semester,
                            course_id: this.course_id,
                            attendance: item.user.id,
                            date: this.date,
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
                                        // window.location.reload();
                                        this.getUnits();

                                    }
                                })
                            } else if (response.data.status == 'failed') {
                                console.log(response.data);
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: response.data.message,
                                    footer: 'We are sorry'
                                })

                            } else {
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
                        }).catch(error => {
                            console.log('error: ' + error,);
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


            axios.post(localStorage.getItem("url") + 'get-leaves',
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
                    this.leave_list = response.data;
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
        getStudent() {

            let result = axios.post(localStorage.getItem("url") + 'get-students',
                {
                    program_id: this.program_id,
                    semester: this.semester,
                    course_id: this.course_id,
                    date: this.date,
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    console.log(response.data);
                    if (response.data.status == "failed") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: response.data.message,
                            footer: 'We are sorry'
                        })
                    } else {
                        let num = 0;
                        for (let item of response.data.data) {
                            num = num + 1;
                        }
                        this.i = num;
                        this.student_list = response.data.data;
                        this.my_leave=response.data.leave;
                        console.log(response.data.leave);
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
    },
    beforeMount() {
        this.getUnits()
        let result = axios.post(localStorage.getItem("url") + 'assigned-teacher',
            {
                user_id: localStorage.getItem('id'),

            },
            {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then((response) => {
                this.assigned_sub = response.data;
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

        return result;
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

/* .btn-attendance{
    position: relative;
    left: 210%;
} */
</style>


<template>
    <Navbar />
    <Sidebar />

    <!-- <div class="content-wrapper" style="min-height: 792px;">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Assign Teacher</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="/">Dashboard</a></li>
                            <li class="breadcrumb-item active">Assign teacher</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid ml-5 mcard">
            <div class="row ml-5">
                <div class="col-lg-3 ml-5">
                    <div class="card ml-5 ">
                        <div class="card-header bg-secondary">
                            <strong>Manage Books</strong>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Teacher Name</label>
                                <select class="form-control select2 select2-hidden-accessible" data-select2-id="9"
                                    tabindex="-1" aria-hidden="true" v-model="teacher_id" id="txtTeacher">

                                    <option value="" selected>Please select Faculty</option>
                                    <option v-for="item in teacher_list" v-bind:key="item.id"
                                        :value="item.teacher[0].id">
                                        {{ item.name }}
                                    </option>
                                </select>
                                <small id="teacherHelp" class="form-text text-danger"></small>
                            </div>
                            <div class="form-group">
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
                            <div class="form-group">
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
                            <div class="form-group">
                                <label for="exampleInputEmail1">Book Name</label>
                                <select class="form-control select2 select2-hidden-accessible" data-select2-id="9"
                                    tabindex="-1" aria-hidden="true" v-model="course_id" id="txtBook">

                                    <option value="" selected>Please select Faculty</option>
                                    <option v-for="item in book_list" v-bind:key="item.id" :value="item.id">
                                        {{ item.book.book }}
                                    </option>
                                </select>
                                <small id="bookHelp" class="form-text text-danger"></small>
                            </div>

                            <div>
                                <button class="btn btn-success float-right" v-on:click="save">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="card">
                        <table class="table">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Program</th>
                                    <th scope="col">Semester</th>
                                    <th scope="col">Book</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in assigned_teachers" v-bind:key="item.id">
                                    <th scope="row">{{ item.id }}</th>
                                    <th scope="row">{{ item.teacher.user.name }}</th>
                                    <th scope="row">{{ item.teacher.user.username }}</th>
                                    <th scope="row">{{ item.teacher.user.email }}</th>
                                    <th scope="row">{{ item.course.program.program }}</th>
                                    <th scope="row">{{ item.course.semester }}</th>
                                    <th scope="row">{{ item.course.book.book }}</th>

                                    <td>
                                        <div class="row btn-action">
                                            <i class="fas fa-edit ml-2 text-warning" v-on:click="edit(item.id)"></i>
                                            <i class="fas fa-trash ml-2 text-danger"
                                                v-on:click="deleteAssign(item.id)"></i>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
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

                        <div class="row">
                            <div class="col-lg-4 col-md-12 col-sm-12">
                                <div class="product-detail-desc pd-20 card-box">

                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Teacher Name</label>
                                        <select class="form-control select2" data-select2-id="9" tabindex="-1"
                                            aria-hidden="true" v-model="teacher_id" id="txtTeacher">

                                            <option value="" selected>Please select Faculty</option>
                                            <option v-for="item in teacher_list" v-bind:key="item.id"
                                                :value="item.teacher[0].id">
                                                {{ item.name }}
                                            </option>
                                        </select>
                                        <small id="teacherHelp" class="form-text text-danger"></small>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Program Name</label>
                                        <select class="form-control select2" data-select2-id="9" tabindex="-1"
                                            aria-hidden="true" v-model="program_id" id="txtProgram">

                                            <option value="" selected>Please select Faculty</option>
                                            <option v-for="item in program_list" v-bind:key="item.id" :value="item.id">
                                                {{ item.program }}
                                            </option>
                                        </select>
                                        <small id="programHelp" class="form-text text-danger"></small>
                                    </div>
                                    <div class="form-group">
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
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Book Name</label>
                                        <select class="form-control select2 " data-select2-id="9" tabindex="-1"
                                            aria-hidden="true" v-model="course_id" id="txtBook">

                                            <option value="" selected>Please select Faculty</option>
                                            <option v-for="item in book_list" v-bind:key="item.id" :value="item.id">
                                                {{ item.book.book }}
                                            </option>
                                        </select>
                                        <small id="bookHelp" class="form-text text-danger"></small>
                                    </div>
                                    <button class="btn btn-success col-12" v-on:click="save">Submit</button>
                                </div>
                            </div>

                            <div class="col-lg-8 col-md-12 col-sm-12">
                                <div class="product-detail-desc pd-20 card-box">
                                    <div class="row">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Username</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Program</th>
                                                    <th scope="col">Semester</th>
                                                    <th scope="col">Book</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in assigned_teachers" v-bind:key="item.id">
                                                    <th scope="row">{{ item.id }}</th>
                                                    <th scope="row">{{ item.teacher.user.name }}</th>
                                                    <th scope="row">{{ item.teacher.user.username }}</th>
                                                    <th scope="row">{{ item.teacher.user.email }}</th>
                                                    <th scope="row">{{ item.course.program.program }}</th>
                                                    <th scope="row">{{ item.course.semester }}</th>
                                                    <th scope="row">{{ item.course.book.book }}</th>

                                                    <td>
                                                        <div class="row btn-action">
                                                            <a href="#" class="text-warning"><i class="icon-copy fa fa-edit fa-2x"
                                                                    aria-hidden="true"
                                                                    v-on:click="edit(item.id)"></i></a>
                                                            <a href="#" class="text-danger ml-3"><i class="icon-copy fa fa-trash fa-2x"
                                                                    aria-hidden="true"
                                                                     v-on:click="deleteAssign(item.id)"></i></a>


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
    name: "Index",
    components: { Navbar, Sidebar },
    data() {
        return {
            'teacher_list': '',
            'program_list': '',
            'program_id': '',
            'semester': '',
            'book_list': '',
            'teacher_id': '',
            'course_id': '',
            'assigned_teachers': '',
            'update_assign': '',
            'assigned_id': '',
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
        save() {
            if (this.teacher_id == '') {
                document.getElementById('teacherHelp').innerHTML = "Please select a teacher";
                document.getElementById('txtTeacher').style.borderColor = "red";
            } else {
                document.getElementById('teacherHelp').innerHTML = "";
                document.getElementById('txtTeacher').style.borderColor = "gray";
            }

            if (this.program_id == '') {
                document.getElementById('programHelp').innerHTML = "Please select a program";
                document.getElementById('txtProgram').style.borderColor = "red";
            } else {
                document.getElementById('programHelp').innerHTML = "";
                document.getElementById('txtProgram').style.borderColor = "gray";
            }

            if (this.semester == '') {
                document.getElementById('semesterHelp').innerHTML = "Please select a semester";
                document.getElementById('txtSemester').style.borderColor = "red";
            } else {
                document.getElementById('semesterHelp').innerHTML = "";
                document.getElementById('txtSemester').style.borderColor = "gray";
            }

            if (this.course_id == '') {
                document.getElementById('bookHelp').innerHTML = "Please select a Book";
                document.getElementById('txtBook').style.borderColor = "red";
            } else {
                document.getElementById('bookHelp').innerHTML = "";
                document.getElementById('txtBook').style.borderColor = "gray";
            }

            if (this.teacher_id != '' && this.program_id != '' && this.semester != '' && this.course_id != '') {

                // alert('book ID='+this.course_id);
                if (this.update_assign == 'true') {
                    let result = axios.put('http://127.0.0.1:8000/api/assign-teacher/' + this.assigned_id,
                        {
                            teacher_id: this.teacher_id,
                            course_id: this.course_id,

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
                } else {
                    let result = axios.post('http://127.0.0.1:8000/api/assign-teacher',
                        {
                            teacher_id: this.teacher_id,
                            course_id: this.course_id,

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
        },
        deleteAssign(assign_id) {
            let url = 'http://127.0.0.1:8000/api/assign-teacher/' + assign_id;
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
        edit(assign_id) {
            axios.get('http://127.0.0.1:8000/api/assign-teacher/' + assign_id,
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.teacher_id = response.data.teacher.id;
                    this.program_id = response.data.course.program.id;
                    this.semester = response.data.course.semester;
                    this.course_id = response.data.course.id;
                    this.update_assign = 'true';
                    this.assigned_id = response.data.id;


                }).catch(error => {
                    console.log('error: ' + error);
                });

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


                }).catch(error => {
                    console.log('error: ' + error);
                });

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

            axios.get('http://127.0.0.1:8000/api/assign-teacher',
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.assigned_teachers = response.data;


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



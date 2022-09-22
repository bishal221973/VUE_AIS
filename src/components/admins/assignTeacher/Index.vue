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
                                <h4>Assign Subject</h4>
                            </div>
                            <nav aria-label="breadcrumb" role="navigation">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="index.html">Dashboard</a>
                                    </li>
                                    <li class="breadcrumb-item" aria-current="page">
                                        HOD
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        Assign Subject
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
                                        <label for="exampleInputEmail1">Teacher Name*</label>
                                        <select class="form-control select2" data-select2-id="9" tabindex="-1"
                                            aria-hidden="true" v-model="teacher_id" id="txtTeacher">

                                            <option value="" selected>Please select Teacher</option>
                                            <option v-for="item in teacher_list" v-bind:key="item.id"
                                                :value="item.teacher[0].id">
                                                {{item.name }}
                                            </option>
                                        </select>
                                        <small id="teacherHelp" class="form-text text-danger"></small>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Program Name</label>
                                        <select class="form-control select2" data-select2-id="9" tabindex="-1"
                                            aria-hidden="true" v-model="program_id" id="txtProgram">

                                            <option value="" selected>Please select Program</option>
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

                                            <option value="" selected>Please select Semester</option>
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
                                        <label for="exampleInputEmail1">Subject Name*</label>
                                        <select class="form-control select2 " data-select2-id="9" tabindex="-1"
                                            aria-hidden="true" v-model="course_id" id="txtBook">

                                            <option value="" selected>Please select Subject</option>
                                            <option v-for="item in book_list" v-bind:key="item.id" :value="item.id">
                                                {{ item.book.subject}}
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
                                        <div class="form-group  col-lg-3">
                                            <label>Program</label>
                                            <select class="form-control" v-model="program_filter"
                                                aria-label="Default select example">
                                                <option selected disabled>Select Program</option>
                                                <option v-for="item in program_list" v-bind:key="item.id"
                                                    :value="item.id">
                                                    {{ item.program }}
                                                </option>
                                            </select>
                                        </div>

                                        <div class="form-group col-lg-3">
                                            <label>Semester</label>
                                            <select class="form-control " v-model="semester_filter"
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

                                        <div class="form-group col-lg-3">
                                            <label>Subject</label>
                                            <select class="form-control " v-model="book_filter"
                                                aria-label="Default select example">
                                                <option selected disabled>Select Subject</option>
                                                <option v-for="item in book_list1" v-bind:key="item.id"
                                                    :value="item.id">
                                                    {{ item.book.subject }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group col-lg-3 mt-4">
                                            <button class=" btn btn-info mt-2" v-on:click="filter"><i
                                                    class="icon-copy fa fa-filter" aria-hidden="true"></i>
                                                Filter</button>

                                        </div>
                                        <!-- <div class="form-group col-lg-12 ">
                                            <input type="text" class="form-control col-lg-12" v-model="data_filter"
                                            placeholder="Search Teacher">
                                        </div> -->
                                    </div>
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
                                                    <th scope="col">Subject</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in assigned_teachers" v-bind:key="item.id">
                                                    <td scope="row">{{ item.id }}</td>
                                                    <td scope="row">{{ item.teacher.user.name }}</td>
                                                    <td scope="row">{{ item.teacher.user.username }}</td>
                                                    <td scope="row">{{ item.teacher.user.email }}</td>
                                                    <td scope="row">{{ item.course.program.program }}</td>
                                                    <td scope="row">{{ item.course.semester }}</td>
                                                    <td scope="row">{{ item.course.book.subject }}</td>

                                                    <td>
                                                        <div class="row btn-action">
                                                            <a href="#" class="text-warning"><i
                                                                    class="icon-copy fa fa-edit fa-2x"
                                                                    aria-hidden="true"
                                                                    v-on:click="edit(item.id)"></i></a>
                                                            <a href="#" class="text-danger ml-3"><i
                                                                    class="icon-copy fa fa-trash fa-2x"
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
            'book_list1': '',
            'teacher_id': '',
            'course_id': '',
            'assigned_teachers': '',
            'update_assign': '',
            'assigned_id': '',
            'program_filter': '',
            'semester_filter': '',
            'book_filter': '',
            'data_filter': '',
        }
    },
    watch: {
        semester_filter(newValue, oldValue) {
            if (this.program_filter == '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please select a program first!',
                })
                this.semester = '';
            } else {
                axios.post(localStorage.getItem("url") + 'select-subject',
                    {
                        program_id: this.program_filter,
                        semester: this.semester_filter,

                    },
                    {
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem('token')
                        }
                    }).then((response) => {
                        this.book_list1 = response.data;


                    }).catch(error => {
                        if (error.response.status === 401) {
                            this.$router.push({ name: "login" });

                        }
                        console.log('error: ' + error);
                    });
            }
        },

        program_filter(newValue, oldValue) {

            axios.post(localStorage.getItem("url") + 'select-subject',
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
                    this.book_list1 = response.data;


                }).catch(error => {
                    if (error.response.status === 401) {
                        this.$router.push({ name: "login" });

                    }
                    console.log('error: ' + error);
                });

        },
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

                        }
                        console.log('error: ' + error);
                    });
            }
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
                    console.log('error: ' + error);
                });

        }
    },
    methods: {
        filter() {
            axios.post(localStorage.getItem("url") + 'hod-filter',
                {
                    program: this.program_filter,
                    semester: this.semester_filter,
                    book: this.book_filter,

                },
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.assigned_teachers = response.data;

                    console.log();


                }).catch(error => {
                    if (error.response.status === 401) {
                        this.$router.push({ name: "login" });

                    }
                    console.log('error: ' + error);
                });
        },
        save() {
            document.getElementById('teacherHelp').innerHTML = '';
            document.getElementById('bookHelp').innerHTML = '';
            // alert('book ID='+this.course_id);
            if (this.update_assign == 'true') {
                let result = axios.put(localStorage.getItem("url") + 'assign-teacher/' + this.assigned_id,
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
                        console.log(response);
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
                            console.log(response);
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: response.data.message,
                                footer: 'We are sorry'
                            })
                        } else {
                            console.log(response);
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
            } else {
                let result = axios.post(localStorage.getItem("url") + 'assign-teacher',
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
                        console.log(response);
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
                            if (error.response.status === 401) {
                                this.$router.push({ name: "login" });

                            }
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
                                if (key == 'teacher_id') {
                                    document.getElementById('teacherHelp').innerHTML = error.response.data.errors.teacher_id[0];

                                }
                                if (key == 'course_id') {
                                    document.getElementById('bookHelp').innerHTML = error.response.data.errors.course_id[0];

                                }

                                if (key == 'phone') {
                                    document.getElementById('phoneHelp').innerHTML = error.response.data.errors.phone[0];

                                }
                                if (key == 'address') {
                                    document.getElementById('addressHelp').innerHTML = error.response.data.errors.address[0];

                                }


                            });
                        }
                        else if (error.response.status === 401) {
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

        },
        deleteAssign(assign_id) {
            alert("sdf");
            let url = localStorage.getItem("url") + 'assign-teacher/' + assign_id;
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
            })
        },
        edit(assign_id) {
            axios.get(localStorage.getItem("url") + 'assign-teacher/' + assign_id,
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

            axios.get(localStorage.getItem("url") + "teacher",
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.teacher_list = response.data;

                    console.log("rssss");
                    console.log(this.teacher_list);

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

            axios.get(localStorage.getItem("url") + 'assign-teacher',
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.assigned_teachers = response.data;


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



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
                                <h4>Course</h4>
                            </div>
                            <nav aria-label="breadcrumb" role="navigation">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="/">Dashboard</a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        Course
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
                                        <label for="exampleInputEmail1">Program Name*</label>
                                        <select class="form-control select2" data-select2-id="9" tabindex="-1"
                                            aria-hidden="true" v-model="program_id" id="txtProgram">

                                            <option value="" selected>Please select Program*</option>
                                            <option v-for="item in program_list" v-bind:key="item.id" :value="item.id">
                                                {{ item.program }}
                                            </option>
                                        </select>
                                        <small id="programHelp" class="form-text text-danger"></small>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Semester*</label>
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
                                        <select class="form-control select2" data-select2-id="9" tabindex="-1"
                                            aria-hidden="true" v-model="book_id" id="txtBook">

                                            <option value="" selected>Please select Subject</option>
                                            <option v-for="item in book_list" v-bind:key="item.id" :value="item.id">
                                                {{ item.subject }}
                                            </option>
                                        </select>
                                        <small id="bookHelp" class="form-text text-danger"></small>
                                    </div>
                                    <button class="btn btn-success col-12" v-on:click="save">{{ edit ? 'Update' : 'Save' }}</button>
                                </div>
                            </div>

                            <div class="col-lg-8 col-md-12 col-sm-12">
                                <div class="product-detail-desc pd-20 card-box">
                                    <div class="row">

                                        <div class="form-group col-4">
                                            <select class="custom-select  select2 my-select" data-select2-id="9"
                                                tabindex="-1" aria-hidden="true" v-model="search_program" id="txtProgram">

                                                <option value="" selected disabled class="bg-white text-dark">Program
                                                </option>
                                                <option class="bg-white text-dark" v-for="item in program_list"
                                                    v-bind:key="item.id" :value="item.program">
                                                    {{ item.program }}
                                                </option>
                                            </select>
                                            <small id="programHelp" class="form-text text-danger"></small>
                                        </div>

                                        <div class="form-group col-4">
                                            <select class="custom-select  select2 my-select" data-select2-id="9"
                                                tabindex="-1" aria-hidden="true" v-model="search_semester" id="txtProgram">

                                                <option value="" selected disabled class="bg-white text-dark">Semester
                                                </option>
                                                <option class="bg-white text-dark" href="#" value="1">First semester
                                                </option>
                                                <option class="bg-white text-dark" href="#" value="2">Second semester
                                                </option>
                                                <option class="bg-white text-dark" href="#" value="3">Third semester
                                                </option>
                                                <option class="bg-white text-dark" href="#" value="4">Fourth semester
                                                </option>
                                                <option class="bg-white text-dark" href="#" value="5">Fifth semester
                                                </option>
                                                <option class="bg-white text-dark" href="#" value="6">Sixth semester
                                                </option>
                                                <option class="bg-white text-dark" href="#" value="7">Seventh semester
                                                </option>
                                            </select>
                                            <small id="programHelp" class="form-text text-danger"></small>
                                        </div>
                                        <div class="form-group col-lg-2">
                                            <button class=" btn btn-info mt-2 btn_filter" v-on:click="filter"><i
                                                    class="icon-copy fa fa-filter" aria-hidden="true"></i>
                                                Filter</button>
                                        </div>

                                        <div class="form-group col-lg-2">
                                            <button class=" btn btn-danger mt-2 btn_filter" v-on:click="displayAll"><i
                                                    class="icon-copy fi-x"></i></button>

                                        </div>
                                    </div>
                                    <div class="row">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Program</th>
                                                    <th scope="col">Semester</th>
                                                    <th scope="col">Subject</th>

                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in course_list" v-bind:key="item.id">
                                                    <td scope="row">{{ item.id }}</td>
                                                    <td scope="row">{{ item.program.program }}</td>
                                                    <td scope="row">{{ item.semester }}</td>
                                                    <td scope="row">{{ item.book.subject }}</td>


                                                    <td>
                                                        <div class="row btn-action">

                                                            <a href="#" class="text-warning"><i
                                                                    class="icon-copy fa fa-edit fa-2x" aria-hidden="true"
                                                                    v-on:click="editCourse(item.id)"></i></a>
                                                            <a href="#" class="text-danger ml-3"><i
                                                                    class="icon-copy fa fa-trash fa-2x" aria-hidden="true"
                                                                    v-on:click="deleteCourse(item.id)"></i></a>


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
            'program_list': '',
            'book_list': '',
            'course_list': '',
            'program_id': '',
            'course_id': '',
            'semester': '',
            'book_id': '',
            'edit': '',
            'search_text': '',
            'search_program': '',
            'search_semester': '',
        }
    },
    methods: {
        save() {
            this.edit ? this.updateCourse() : this.addNewCourse();


        },
        addNewCourse() {
            let result = axios.post('course',
                {
                    program_id: this.program_id,
                    semester: this.semester,
                    book_id: this.book_id,

                }).then((response) => {
                    if (response.data.status == 'success') {
                        this.toastMessage("success", response.data.message);
                        this.getUnits();
                        this.clear();
                    } else if (response.data.status == 'failed') {
                        this.toastMessage("error", response.data.message);
                    } else {
                        this.toastMessage("error", response.data);
                    }
                });

        },
        updateCourse() {
            let result = axios.put('course/' + this.course_id,
                {
                    program_id: this.program_id,
                    semester: this.semester,
                    book_id: this.book_id,

                }).then((response) => {
                    if (response.data.status == 'success') {
                        this.toastMessage("success", response.data.message);
                        this.getUnits();
                        this.clear();
                        this.edit = false;
                    } else if (response.data.status == 'failed') {
                        this.toastMessage("error", response.data.message);
                    } else {
                        this.toastMessage("error", response.data);
                    }
                });
        },
        deleteCourse(course_id) {
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
                    let result = axios.delete('course/' + course_id).then((response) => {
                        if (response.data.status == 'success') {
                            this.toastMessage("success", response.data.message);
                            this.getUnits();
                        }
                    });
                }
            })
        },
        editCourse(course_id) {

            let result = axios.get('course/' + course_id).then((response) => {
                this.program_id = response.data.program_id;
                this.semester = response.data.semester;
                this.book_id = response.data.book_id;
                this.course_id = response.data.id;
                this.edit = true;
            });
        },
        displayAll() {
            this.getUnits();
        },
        getUnits: function () {

            axios.get('book').then((response) => {
                this.book_list = response.data;


            });

            axios.get('program').then((response) => {
                this.program_list = response.data;


            });

            axios.get('course').then((response) => {
                this.course_list = response.data.data;
            })
        },
        filter() {

            let result = axios.post(localStorage.getItem("url") + 'course-search',
                {
                    program: this.search_program,
                    semester: this.search_semester
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {

                    this.course_list = response.data;

                }).catch(error => {

                    if (error.response.status == 422) {
                        $.each(error.response.data.errors, function (key, value) {
                            if (key == 'faculty') {
                                document.getElementById('facultyHelp').innerHTML = error.response.data.errors.faculty[0];

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
        },
        toastMessage(icons, title) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: icons,
                title: title
            });
        },
        clear() {
            this.program_id = '';
            this.semester = '';
            this.book_id = '';
        },
        verificationError(error) {
            const errorFields = {
                'subject': 'bookHelp',
                'publication': 'publicationHelp',
                'author': 'authorHelp',
            };
            Object.keys(error.response.data.errors).forEach(key => {
                const errorKey = errorFields[key];
                if (errorKey) {
                    document.getElementById(errorKey).innerHTML = error.response.data.errors[key][0];
                }
            });
        }
    },
    beforeMount() {
        this.getUnits()
    },

}
</script>

<style>
.btn_filter {
    position: relative;
    top: -10px;
}
</style>
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
                                        <a href="/">Dashboard</a>
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

                            <div class="col-lg-5 col-md-12 col-sm-12">
                                <div class="product-detail-desc pd-20 card-box">
                                    <div class="form-group col-lg-12">
                                        <label for="exampleInputEmail1">Faculty Name</label>
                                        <select class="form-control select2 " data-select2-id="9" tabindex="-1"
                                            aria-hidden="true" v-model="faculty_id" id="txtFaculty">

                                            <option value="" selected>Please select Faculty</option>
                                            <option v-for="item in faculty_list" v-bind:key="item.id" :value="item.id">
                                                {{ item.faculty }}
                                            </option>
                                        </select>

                                        <small id="facultyHelp" class="form-text text-danger"></small>
                                    </div>
                                    <div class="form-group col-lg-12">
                                        <label for="exampleInputEmail1">Program Name</label>
                                        <input type="text" class="form-control" v-model="program" id="txtProgram"
                                            aria-describedby="programHelp" placeholder="Enter Program Name">
                                        <small id="programHelp" class="form-text text-danger"></small>
                                    </div>
                                    <div class="form-group col-lg-10">
                                        <button class="btn btn-success px-5" v-on:click="save">{{ edit ? 'Update' : 'Save' }}</button>
                                    </div>



                                </div>
                            </div>

                            <div class="col-lg-7 col-md-12 col-sm-12">
                                <div class="product-detail-desc pd-20 card-box">
                                    <div class="row">
                                       
                                        <input type="text" class="form-control col-10 search-input  m-3"
                                            v-model="search_text" v-on:change="search" placeholder="Search program" />
                                        <a href="#" class="btn btn-danger form-control mt-3 col-1" v-on:click="display_all">
                                            <i class="icon-copy fi-x"></i>
                                        </a>

                                    </div>
                                    <div class="row">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Program</th>
                                                    <th scope="col">Faculty</th>

                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in program_list" v-bind:key="item.id">
                                                    <td scope="row">{{ item.id }}</td>
                                                    <td scope="row">{{ item.program }}</td>
                                                    <td scope="row">{{ item.faculty.faculty }}</td>
                                                    <td>
                                                        <div class="row btn-action">
                                                            <a href="#" class="text-warning"><i
                                                                    class="icon-copy fa fa-edit fa-2x" aria-hidden="true"
                                                                    v-on:click="editProgram(item.id)"></i></a>
                                                            <a href="#" class="text-danger ml-3"><i
                                                                    class="icon-copy fa fa-trash fa-2x" aria-hidden="true"
                                                                    v-on:click="deleteProgram(item.id)"></i></a>
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
            'faculty_id': '',
            'program': '',
            edit: false,
            'faculty_list': '',
            'program_list': '',
            'program_id': '',
            'search_text': '',
        }
    },
    methods: {
        display_all() {
            this.search_text = '';
        },
        save() {
            document.getElementById('facultyHelp').innerHTML = '';
            document.getElementById('programHelp').innerHTML = '';

            this.edit ? this.update() : this.add();
        },
        add() {
            let result = axios.post('program',
                {
                    faculty_id: this.faculty_id,
                    program: this.program,
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
                }).catch(error => {

                    if (error.response.status == 422) {
                        this.verificationError(error);
                    }
                    else {
                        Swal.fire(
                            'Warning',
                            'error: ' + error,
                            'error'
                        )
                    }
                });
        },
        update() {
            let result = axios.put('program/' + this.program_id,
                {
                    faculty_id: this.faculty_id,
                    program: this.program,
                }).then((response) => {
                    if (response.data.status == 'success') {
                        this.toastMessage("success", response.data.message);

                        this.edit = false;
                        this.getUnits();
                        this.clear();
                    } else if (response.data.status == 'failed') {
                        this.toastMessage("error", response.data.message);

                    } else {
                        this.toastMessage("error", response.data);
                    }
                }).catch(error => {
                    if (error.response.status == 422) {
                        this.verificationError(error);
                    }
                });
        },
        deleteProgram(program_id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You want to delete program ?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    let result = axios.delete('program/' + program_id).then((response) => {
                            if (response.data.status == 'success') {
                                this.toastMessage("success", response.data.message);
                                this.getUnits();
                            } else {
                                this.toastMessage("error", "Something went wrong");
                            }
                        });
                }
            })
        },
        editProgram(program_id) {

            let result = axios.get('program/' + program_id).then((response) => {
                    this.faculty_id = response.data.faculty_id;
                    this.program = response.data.program;
                    this.program_id = response.data.id;
                    this.edit = true;
                });
        },
        getUnits: function () {
            let result = axios.get('faculty').then((response) => {
                this.faculty_list = response.data.data;

            });

            return axios.get('program').then((response) => {
                this.program_list = response.data;
            });


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
            this.faculty_id = '';
            this.program = '';
        },
        verificationError(error) {
            const errorFields = {
                'faculty_id': 'facultyHelp',
                'program': 'programHelp'
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
    watch: {
        search_text: function (val, oldVal) {

            let result = axios.post(localStorage.getItem("url") + 'program-search',
                {
                    search: this.search_text,
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {

                    this.program_list = response.data;

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
        }
    },
}
</script>
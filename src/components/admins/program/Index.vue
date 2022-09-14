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
                                        <button class="btn btn-success px-5" v-on:click="save">{{ btn_save }}</button>
                                    </div>



                                </div>
                            </div>

                            <div class="col-lg-7 col-md-12 col-sm-12">
                                <div class="product-detail-desc pd-20 card-box">
                                    <div class="row">
                                        <!-- <div class="btn-group mt-3" >
                                            <button type="button" class="btn btn-secondary form-control  dropdown-toggle text-white"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Please select faculty name
                                            </button>
                                            <b-form-select  class="dropdown-menu dropdown-menu-right" v-model="search_text" >
                                                <button  class="dropdown-item" type="button" v-for="item in faculty_list" v-bind:key="item.id" :value="item.id">{{item.faculty}}</button>     
                                            </b-form-select>
                                        </div> -->

                                        <input type="text" class="form-control col-10 search-input  m-3"
                                            v-model="search_text" v-on:change="search" placeholder="Search program" />
                                        <a href="#" class="btn btn-danger form-control mt-3 col-1"
                                            v-on:click="display_all">
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
                                                                    class="icon-copy fa fa-edit fa-2x"
                                                                    aria-hidden="true"
                                                                    v-on:click="edit(item.id)"></i></a>
                                                            <a href="#" class="text-danger ml-3"><i
                                                                    class="icon-copy fa fa-trash fa-2x"
                                                                    aria-hidden="true"
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
            'update_program': '',
            'faculty_list': '',
            'program_list': '',
            'program_id': '',
            'btn_save': 'Save',
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
            if (this.update_program == 'true') {
                let url = 'http://127.0.0.1:8000/api/program/' + this.program_id;
                let result = axios.put(url,
                    {
                        faculty_id: this.faculty_id,
                        program: this.program,
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


                                }

                                this.btn_save = 'Save';
                                this.faculty_id = '';
                                this.program = '';
                                this.update_program = '';
                                this.getUnits();
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
                        if (error.response.status == 422) {
                            $.each(error.response.data.errors, function (key, value) {
                                if (key == 'faculty_id') {
                                    document.getElementById('facultyHelp').innerHTML = error.response.data.errors.faculty_id[0];

                                }
                                if (key == 'program') {
                                    document.getElementById('programHelp').innerHTML = error.response.data.errors.program[0];

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
            } else {
                let result = axios.post('http://127.0.0.1:8000/api/program',
                    {
                        faculty_id: this.faculty_id,
                        program: this.program,
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
                                   

                                }
                                this.getUnits();
                                this.faculty_id='';
                                this.program='';
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

                        if (error.response.status == 422) {
                            $.each(error.response.data.errors, function (key, value) {
                                if (key == 'faculty_id') {
                                    document.getElementById('facultyHelp').innerHTML = error.response.data.errors.faculty_id[0];

                                }
                                if (key == 'program') {
                                    document.getElementById('programHelp').innerHTML = error.response.data.errors.program[0];

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

        },
        deleteProgram(program_id) {

            let url = 'http://127.0.0.1:8000/api/program/' + program_id;
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
                                        


                                    }

                                })
                                this.getUnits();
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
        edit(program_id) {
            let url = 'http://127.0.0.1:8000/api/program/' + program_id;

            let result = axios.get(url,
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.faculty_id = response.data.faculty_id;
                    this.program = response.data.program;
                    this.program_id = response.data.id;
                    this.update_program = 'true';
                    this.btn_save = 'Update';
                }).catch(error => {
                    console.log('error: ' + error);
                });
        },
        getUnits: function () {
            let result = axios.get('http://127.0.0.1:8000/api/faculty',
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.faculty_list = response.data;

                }).catch(error => {
                    console.log('error: ' + error);
                });

            return axios.get('http://127.0.0.1:8000/api/program',
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.program_list = response.data;
                    console.log(response.data);

                }).catch(error => {
                    console.log('error: ' + error);
                });



        },
    },
    beforeMount() {
        this.getUnits()
    },
    watch: {
        search_text: function (val, oldVal) {

            let result = axios.post('http://127.0.0.1:8000/api/program-search',
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
}
</script>
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
                                <h4>Fculty</h4>
                            </div>
                            <nav aria-label="breadcrumb" role="navigation">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="/">Dashboard</a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        Faculty
                                    </li>

                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="product-wrap">
                    <div class="product-detail-wrap mb-30">
                        <div class="row">

                            <div class="col-md-12 col-sm-12">
                                <div class="product-detail-desc pd-20 card-box">
                                    <div class="form-group col-lg-12">
                                        <label for="exampleInputEmail1">Faculty Name</label>
                                        <input type="text" class="form-control" v-model="faculty" name="name" id="txtName"
                                            aria-describedby="bookHelp" placeholder="Enter Name">
                                        <small id="facultyHelp" class="form-text text-danger"></small>
                                    </div>
                                    <div class="form-group col-lg-12 d-flex justify-content-end">
                                        <button class="btn btn-success px-5" v-on:click="save">{{ edit ? 'Update' : 'Save' }}</button>
                                    </div>



                                </div>
                            </div>

                            <div class="col-md-12 col-sm-12 mt-2">
                                <div class="product-detail-desc pd-20 card-box">
                                    <!-- <input type="text" placeholder="Search"/> -->

                                    

                                    <div class="row mt-1">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Faculty Name</th>

                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in list" v-bind:key="item.id">
                                                    <td scope="row">{{ item.id }}</td>
                                                    <td scope="row">{{ item.faculty }}</td>
                                                    <td>
                                                        <div class="row btn-action">
                                                            <a href="#" class="text-warning"><i
                                                                    class="icon-copy fa fa-edit fa-2x" aria-hidden="true"
                                                                    v-on:click="editFaculty(item.id)"></i></a>
                                                            <a href="#" class="text-danger ml-3"><i
                                                                    class="icon-copy fa fa-trash fa-2x" aria-hidden="true"
                                                                    v-on:click="deleteFaculty(item.id)"></i></a>

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
    data() {
        return {
            'faculty': '',
            'list': '',
            edit: false,
            'faculty_id': '',
            'search_text': '',

        }
    },
    components: { Navbar, Sidebar },
    methods: {

        
        save() {
            document.getElementById('facultyHelp').innerHTML = '';
            this.edit ? this.update() : this.add();
        },
        update() {
            let result = axios.put('faculty/' + this.faculty_id,
                {
                    faculty: this.faculty,
                }).then((response) => {
                    if (response.data.status == 'success') {
                        this.toastMessage("success", response.data.message);
                        this.faculty = '';
                        this.edit = false;
                        this.getUnits();
                    } else if (response.data.status == 'failed') {
                        this.toastMessage("error", response.data.message);
                    } else {
                        this.toastMessage("error", response.data);
                    }
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
        },
        add() {
            let result = axios.post('faculty',
                {
                    faculty: this.faculty,
                }).then((response) => {
                    if (response.data.status == 'success') {
                        this.getUnits();
                        this.faculty = '';
                        this.toastMessage("success", response.data.message);
                    } else if (response.data.status == 'failed') {
                        this.toastMessage("error", response.data.message);
                    } else {
                        this.toastMessage("error", response.data);
                    }
                }).catch(error => {

                    if (error.response.status == 422) {
                        $.each(error.response.data.errors, function (key, value) {
                            if (key == 'faculty') {
                                document.getElementById('facultyHelp').innerHTML = error.response.data.errors.faculty[0];

                            }
                        });
                    }
                });
        },
        deleteFaculty(faculty_id) {

            Swal.fire({
                title: 'Are you sure?',
                text: "You want to delete Faculty ?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    let result = axios.delete('faculty/' + faculty_id).then((response) => {
                            if (response.data.status == 'success') {
                                this.toastMessage("success", response.data.message);
                                this.getUnits();
                            }else if (response.data.status == 'error') {
                                this.toastMessage("error", response.data.message);
                                this.getUnits();
                            }
                             else {
                                this.toastMessage("error", "Some thing went wrong");
                            }
                        }).catch(error => {
                           
                        });


                }
            })
        },
        editFaculty(faculty_id) {

            let result = axios.get('faculty/' + faculty_id).then((response) => {
                    this.faculty = response.data.faculty;
                    this.faculty_id = response.data.id;
                    this.edit = true;
                }).catch(error => {
                  
                });
        },
        getUnits: function () {
            let result = axios.get('faculty').then((response) => {
                    this.list = response.data.data;


                }).catch(error => {
                    
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
    },
    beforeMount() {
        this.getUnits();
    },
    watch: {
        search_text: function (val, oldVal) {
            let result = axios.post(localStorage.getItem("url") + 'faculty-search',
                {
                    search: this.search_text,
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {

                    this.list = response.data;

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

<style>
.btn-action {
    cursor: pointer;
}
</style>
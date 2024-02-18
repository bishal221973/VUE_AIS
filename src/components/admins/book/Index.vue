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
                                <h4>Subject</h4>
                            </div>
                            <nav aria-label="breadcrumb" role="navigation">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="/">Dashboard</a>
                                    </li>

                                    <li class="breadcrumb-item active" aria-current="page">
                                        Subject
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
                                    <div class="row">
                                        <div class="form-group col-12">
                                            <label for="exampleInputEmail1">Subject Name*</label>
                                            <input type="text" class="form-control" v-model="book" id="txtBook"
                                                aria-describedby="bookHelp" placeholder="Enter subject Name">
                                            <small id="bookHelp" class="form-text text-danger"></small>
                                        </div>
                                        <div class="form-group col-12">
                                            <label for="exampleInputEmail1">Publication Name*</label>
                                            <input type="text" class="form-control" v-model="publication"
                                                id="txtPublication" aria-describedby="publicationHelp"
                                                placeholder="Enter Publication">
                                            <small id="publicationHelp" class="form-text text-danger"></small>
                                        </div>
                                        <div class="form-group col-12">
                                            <label for="exampleInputEmail1">Author Name*</label>
                                            <input type="text" class="form-control" v-model="author" id="txtAuthor"
                                                aria-describedby="authorHelp" placeholder="Enter Author Name">
                                            <small id="authorHelp" class="form-text text-danger"></small>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-success col-12" v-on:click="save">{{
                                                edit ? 'Update' : 'Save' }}</button>
                                            <!-- <button class="btn btn-danger float-right ml-2" v-on:click="clear">Clear</button> -->
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div class="col-lg-8 col-md-12 col-sm-12">


                                <div class="card">
                                    <div class="row m-2">

                                        <input type="text" class="form-control col-3 search-input  m-3"
                                            v-model="search_text" placeholder="Search subject" />
                                        <!-- <a href="#" class="btn btn-danger form-control mt-3 col-1"
                                            v-on:click="display_all">
                                            <i class="icon-copy fi-x"></i>
                                        </a> -->

                                    </div>
                                    <table class="table">
                                        <thead class="thead-light">
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Book</th>
                                                <th scope="col">Publication</th>
                                                <th scope="col">Author</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in book_list" v-bind:key="item.id">
                                                <td scope="row">{{ item.id }}</td>
                                                <td scope="row">{{ item.subject }}</td>
                                                <td scope="row">{{ item.publication }}</td>

                                                <td scope="row">{{ item.author }}</td>

                                                <td>
                                                    <div class="row btn-action">
                                                        <a href="#" class="text-warning ml-3"><i
                                                                class="icon-copy fa fa-edit fa-2x" aria-hidden="true"
                                                                v-on:click="editBook(item.id)"></i></a>
                                                        <a href="#" class="text-danger ml-3"><i
                                                                class="icon-copy fa fa-trash fa-2x" aria-hidden="true"
                                                                v-on:click="deleteBook(item.id)"></i></a>

                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>


                                <!-- </div> -->
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
            'book': '',
            'publication': '',
            'author': '',
           
            'edit': '',
            'book_list': '',
            'book_id': '',
            'btn_save': 'Save',
            'search_text': '',
        }
    },
    methods: {
        display_all() {
            this.search_text = '';
        },
        save() {

            document.getElementById('bookHelp').innerHTML = '';
            document.getElementById('publicationHelp').innerHTML = '';
            document.getElementById('authorHelp').innerHTML = '';

            this.edit ? this.update() : this.add();

        },
        add() {
            let result = axios.post('book',
                {
                    subject: this.book,
                    publication: this.publication,
                    author: this.author,
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
                });
        },
        update() {
            let result = axios.put('book/' + this.book_id,
                {
                    subject: this.book,
                    publication: this.publication,
                    author: this.author,
                }).then((response) => {
                    if (response.data.status == 'success') {

                        this.toastMessage("success", response.data.message);
                        this.clear();
                        this.edit = false;
                        this.getUnits();
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
        deleteBook(book_id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You want to delete selected Book ?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    let result = axios.delete('book/' + book_id).then((response) => {
                            if (response.data.status == 'success') {
                                this.toastMessage("success", response.data.message);

                                this.getUnits();
                            } else {
                                
                                this.toastMessage("success", "Something went wrong");

                            }
                        });
                }
            })
        },
        editBook(book_id) {

            let result = axios.get("book/"+book_id).then((response) => {
                    this.book = response.data.subject;
                    this.publication = response.data.publication;
                    this.author = response.data.author;
                    
                    this.book_id = response.data.id;
                    this.edit = true;
                });
        },
        getUnits: function () {

            return axios.get('book').then((response) => {
                this.book_list = response.data;
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
            this.book = '';
            this.publication = '';
            this.author = '';
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
    watch: {
        search_text: function (val, oldVal) {

            let result = axios.post(localStorage.getItem("url") + 'book-search',
                {
                    search: this.search_text,
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    console.log(response.data);
                    this.book_list = response.data;

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
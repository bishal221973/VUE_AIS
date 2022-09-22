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
                                            btn_save}}</button>
                                            <!-- <button class="btn btn-danger float-right ml-2" v-on:click="clear">Clear</button> -->
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div class="col-lg-8 col-md-12 col-sm-12">
                                <!-- <div class="product-detail-desc pd-20 card-box"> -->
                                <!-- <div class="row">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Book</th>
                                                    <th scope="col">Publication</th>
                                                    <th scope="col">Author</th>
                                                    <th scope="col">Page Number</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in book_list" v-bind:key="item.id">
                                                    <th scope="row">{{ item.id }}</th>
                                                    <th scope="row">{{ item.book }}</th>
                                                    <th scope="row">{{ item.publication }}</th>
                                                    <th scope="row">{{ item.author }}</th>
                                                    <th scope="row">{{ item.page }}</th>
                                                    <th scope="row">RS. {{ item.price }} /-</th>
                                                    <td>
                                                        <div class="row">
                                                            <button class="btn btn-warning text-white"
                                                                v-on:click="edit(item.teacher[0].id)">Edit</button>
                                                            <button class="btn btn-danger text-white ml-1"
                                                                v-on:click="deleteTeacher(item.teacher[0].id)">Delete</button>

                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> -->

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
                                                                v-on:click="edit(item.id)"></i></a>
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
            'page': '',
            'price': '',
            'update_book': '',
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

            if (this.update_book == 'true') {
                let url = localStorage.getItem("url") + 'book/' + this.book_id
                let result = axios.put(url,
                    {
                        subject: this.book,
                        publication: this.publication,
                        author: this.author,
                        page: this.page,
                        price: this.price,
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
                            })
                            this.book = '';
                            this.publication = '';
                            this.author = '';
                            this.page = '';
                            this.price = '';
                            this.update_book = '';
                            this.btn_save = 'Save'
                            this.getUnits();
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
                                if (key == 'book') {
                                    document.getElementById('bookHelp').innerHTML = error.response.data.errors.book[0];

                                }
                                if (key == 'publication') {
                                    document.getElementById('publicationHelp').innerHTML = error.response.data.errors.publication[0];

                                }
                                if (key == 'author') {
                                    document.getElementById('authorHelp').innerHTML = error.response.data.errors.author[0];

                                }
                                if (key == 'page') {
                                    document.getElementById('pageHelp').innerHTML = error.response.data.errors.page[0];

                                }
                                if (key == 'price') {
                                    document.getElementById('priceHelp').innerHTML = error.response.data.errors.price[0];

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

                let result = axios.post(localStorage.getItem("url") + 'book',
                    {
                        subject: this.book,
                        publication: this.publication,
                        author: this.author,
                        page: this.page,
                        price: this.price,
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
                                this.book = '';
                                this.publication = '';
                                this.author = '';
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
                                if (key == 'subject') {
                                    document.getElementById('bookHelp').innerHTML = error.response.data.errors.subject[0];

                                }
                                if (key == 'publication') {
                                    document.getElementById('publicationHelp').innerHTML = error.response.data.errors.publication[0];

                                }
                                if (key == 'author') {
                                    document.getElementById('authorHelp').innerHTML = error.response.data.errors.author[0];

                                }
                                if (key == 'page') {
                                    document.getElementById('pageHelp').innerHTML = error.response.data.errors.page[0];

                                }
                                if (key == 'price') {
                                    document.getElementById('priceHelp').innerHTML = error.response.data.errors.price[0];

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
        deleteBook(book_id) {

            let url = localStorage.getItem("url") + 'book/' + book_id;
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
                                    this.getUnits();
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
        edit(book_id) {
            let url = localStorage.getItem("url") + 'book/' + book_id;

            let result = axios.get(url,
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.book = response.data.subject;
                    this.publication = response.data.publication;
                    this.author = response.data.author;
                    this.page = response.data.page;
                    this.price = response.data.price;
                    this.book_id = response.data.id;
                    this.update_book = 'true';
                    this.btn_save = 'Update';
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

            return axios.get(localStorage.getItem("url") + 'book',
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.book_list = response.data;
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
<template>
    <Navbar />
    <Sidebar />

    <div class="content-wrapper" style="min-height: 792px;">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Teacher</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="/">Dashboard</a></li>
                            <li class="breadcrumb-item active">Teacher</li>
                            <li class="breadcrumb-item active">List</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <div class="container-fluid">
            <div class="card">
                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Address</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Profile</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in teacher_list" v-bind:key="item.id">
                            <th scope="row">{{ item.id }}</th>
                            <th scope="row">{{ item.name }}</th>
                            <th scope="row">{{ item.username }}</th>
                            <th scope="row">{{ item.email }}</th>
                            <th scope="row">{{ item.teacher[0].gender }}</th>
                            <th scope="row">{{ item.teacher[0].address }}</th>
                            <th scope="row">{{ item.teacher[0].dob }}</th>
                            <th scope="row">{{ item.teacher[0].phone }}</th>
                            <th scope="row">{{ item.teacher[0].profile }}</th>
                            <td>
                                <div class="row btn-action">
                                    <i class="fas fa-edit ml-2 text-warning" v-on:click="edit(item.teacher[0].id)"></i>
                                    <i class="fas fa-trash ml-2 text-danger"
                                        v-on:click="deleteTeacher(item.teacher[0].id)"></i>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>


</template>
<script>
import Navbar from '../Navbar.vue';
import Sidebar from '../Sidebar.vue';
import axios from 'axios';
export default {
    name: "List",
    components: { Navbar, Sidebar },
    data() {
        return {
            'teacher_list': '',
        }
    },
    methods: {
        getUnits: function () {

            axios.get('http://127.0.0.1:8000/api/teacher',
                {
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }).then((response) => {
                    this.teacher_list = response.data;
                    console.log(response.data);
                }).catch(error => {
                    console.log('error: ' + error);
                });




        },
        edit(teacher_id) {

            this.$router.push({ path: "/teacher/" + teacher_id + "/edit" });
        },
        showTeacher(teacher_id) {
            this.$router.push({ path: "/teacher/" + teacher_id + "/show" });
        },
        deleteTeacher(teacher_id) {

            let url = 'http://127.0.0.1:8000/api/teacher/' + teacher_id;
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
                                    text: response,
                                    footer: 'We are sorry'
                                })
                            }
                        }).catch(error => {
                            console.log('error: ' + error);
                        });


                }
            })
        },
    },
    beforeMount() {
        this.getUnits()
    },

}
</script>
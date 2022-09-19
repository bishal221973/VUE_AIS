<template>
    <Navbar />
    <Sidebar />
    <div class="main-container">
        <div class="pd-ltr-20">
            <div class="card-box pd-20 height-100-p mb-30">
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <img :src="'./assets/vendors/images/banner-img.png'" alt="" />
                    </div>
                    <div class="col-md-8">
                        <h4 class="font-20 weight-500 mb-10 text-capitalize">
                            Welcome
                            <div class="weight-600 font-30 text-blue">{{user_name}}</div>
                        </h4>
                       
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-3 mb-30">
                    <div class="card-box height-100-p widget-style1">
                        <div class="d-flex flex-wrap align-items-center">
                            <div class="progress-data">
                                <div id="chart"></div>
                            </div>
                            <div class="widget-data">
                                <div class="h4 mb-0">2020</div>
                                <div class="weight-600 font-14">Program</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 mb-30">
                    <div class="card-box height-100-p widget-style1">
                        <div class="d-flex flex-wrap align-items-center">
                            <div class="progress-data">
                                <div id="chart2"></div>
                            </div>
                            <div class="widget-data">
                                <div class="h4 mb-0">400</div>
                                <div class="weight-600 font-14">HOD</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 mb-30">
                    <div class="card-box height-100-p widget-style1">
                        <div class="d-flex flex-wrap align-items-center">
                            <div class="progress-data">
                                <div id="chart3"></div>
                            </div>
                            <div class="widget-data">
                                <div class="h4 mb-0">350</div>
                                <div class="weight-600 font-14">Teacher</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 mb-30">
                    <div class="card-box height-100-p widget-style1">
                        <div class="d-flex flex-wrap align-items-center">
                            <div class="progress-data">
                                <div id="chart4"></div>
                            </div>
                            <div class="widget-data">
                                <div class="h4 mb-0">$6060</div>
                                <div class="weight-600 font-14">Student</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row">
                <div v-if="role === 'Admin'"></div>
                <div v-else-if="role === 'Student'"></div>
                <div class="col-xl-7 mb-30" v-else>
                    <div class="card-box height-100-p widget-style1">

                        <div class="card-body">
                            <h3 class="mb-4">Assigned Subjects</h3>


                            <table class="table mt-4">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Program</th>
                                        <th scope="col">Semester</th>
                                        <th scope="col">Subject</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in assigned_sub" v-bind:key="item.id">
                                        <td scope="row">{{ item.id }}</td>
                                        <td scope="row">{{ item.course.program.program }}</td>
                                        <td scope="row">{{ item.course.semester}}</td>
                                        <td scope="row">{{ item.course.book.subject}}</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 mb-30">
                    <div class="card-box height-100-p widget-style1">
                        <h3 class="text-center mb-4">Numbers of student's</h3>
                        <div class="p-1 col-lg-12 m-auto mt-4">
                            <BarChart :chartData="testDatas" />


                        </div>
                    </div>
                </div>
                <div class="col-lg-8" v-if="role==='HOD'">
                    <div class="card-box height-100-p widget-style1">
                        <h3 class="text-center mb-4">Other Information</h3>
                        <div class="p-1 col-lg-12 m-auto mt-4">
                            <LineChart :chartData="testDatas1" />


                        </div>
                    </div>>

                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 mb-30" v-if="role==='HOD'">
                    <div class="pd-20 card-box height-100-p">
                        <h4 class="mb-20 h4">Head of Department</h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" v-for="item in hod_list" v-bind:key="item.id">
                                {{item.program.program}}
                            </li>
                           
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';
import axios from 'axios';


import {LineChart} from 'vue-chart-3';
import {BarChart} from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
    name: "Dashboard",
    created() {
        this.testDatas = {
            labels: ['Boy', 'Girl'],
            datasets: [
                {
                    data: [20, 10],
                    backgroundColor: ['#cc0000', '#ff8800'],
                },
            ],
        }

        this.testDatas1 = {
            labels: ['Faculty', 'Program','Teacher','HOD'],
            datasets: [
                {
                    data: [20, 25,50,27],
                    backgroundColor: ['#cc0000', '#ff8800', 'pink','yellow'],
                },
            ],
        }


    },

    data() {
        return {
            'user_name': localStorage.getItem('name'),
            'role': localStorage.getItem('role'),
            'assigned_sub': '',
            'hod_list': '',
        }
    },
    components: { Sidebar, Navbar, Sidebar, LineChart,BarChart },
    beforeMount() {

        axios.post(localStorage.getItem("url")+'assigned-teacher',
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
                console.log('error:' + error);
                Swal.fire(
                    'Warning',
                    'error: ' + error,
                    'error'
                )
            });

            axios.post(localStorage.getItem("url")+'hod-list',
            {
                user_id: localStorage.getItem('id'),

            },
            {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then((response) => {
                this.hod_list = response.data;
                console.log(response.data);

            }).catch(error => {
                console.log('error:' + error);
                Swal.fire(
                    'Warning',
                    'error: ' + error,
                    'error'
                )
            });
            
    },

}
</script>

<style>
.main-header {
    display: block;
}
</style>



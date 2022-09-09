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
                        <p class="font-18 max-width-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                            hic non repellendus debitis iure, doloremque assumenda. Autem
                            modi, corrupti, nobis ea iure fugiat, veniam non quaerat
                            mollitia animi error corporis.
                        </p>
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
                                <div class="weight-600 font-14">Contact</div>
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
                                <div class="weight-600 font-14">Deals</div>
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
                                <div class="weight-600 font-14">Campaign</div>
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
                                <div class="weight-600 font-14">Worth</div>
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
                            <h5 class="card-title">Assigned Subjects</h5>


                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Program</th>
                                        <th scope="col">Semester</th>
                                        <th scope="col">Subject</th>
                                        <th scope="col">Attendance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in assigned_sub" v-bind:key="item.id">
                                        <td scope="row">{{ item.id }}</td>
                                        <td scope="row">{{ item.course.program.program }}</td>
                                        <td scope="row">{{ item.course.semester}}</td>
                                        <td scope="row">{{ item.course.book.subject}}</td>
                                        <td>
                                            <a href="/attendance" class="btn btn-info btn-sm">Attendance</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 mb-30">
                    <div class="card-box height-100-p widget-style1">
                        <div class="p-5 col-lg-12 m-auto">
                            <BarChart :chartData="testDatas" />


                        </div>
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


import {
    BarChart

} from 'vue-chart-3';
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


    },

    data() {
        return {
            'user_name': localStorage.getItem('name'),
            'role': localStorage.getItem('role'),
            'assigned_sub': '',
        }
    },
    components: { Sidebar, Navbar, Sidebar, BarChart },
    beforeMount() {

        let result = axios.post('http://127.0.0.1:8000/api/assigned-teacher',
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

        return result;
    },

}
</script>

<style>
.main-header {
    display: block;
}
</style>



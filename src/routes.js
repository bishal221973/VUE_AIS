import { createWebHistory, createRouter } from 'vue-router'
import Dashboard from './components/admins/Dashboard.vue';
import Home from './components/admins/Home.vue';
import Login from './components/Login.vue';
import SchoolSetup from './components/admins/school/Index.vue';
import Faculty from './components/admins/faculty/Index.vue';
import Program from './components/admins/program/Index.vue';
import Book from './components/admins/book/Index.vue';
import Course from './components/admins/course/Index.vue';
import AddTeacher from './components/admins/teacher/Add.vue';
import ListTeacher from './components/admins/teacher/List.vue';
import EditTeacher from './components/admins/teacher/Edit.vue';
import ShowTeacher from './components/admins/teacher/Show.vue';
import AppoindHod from './components/admins/hod/Index.vue';
import assignHod from './components/admins/hod/assign.vue';
import AssignTeacher from './components/admins/assignTeacher/Index.vue';
import Student from './components/admins/student/Index.vue';
import StudentDetail from './components/admins/student/View.vue';
import ApplyLeave from './components/admins/student/Leave.vue';
import TeacherDetail from './components/admins/teacher/Show.vue';
import Attendance from './components/admins/attendance/Index.vue';
import AttendanceReport from './components/admins/attendance/report.vue';
import LeaveApprove from './components/admins/leave/Index.vue';

import UserLogin from './components/MainPage.vue';
const routes = [
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'Dashboard',
        path: '/',
        component: Dashboard
    },
    {
        name: 'SchoolSetup',
        path: '/school-setup',
        component: SchoolSetup
    },
    {
        name: 'Faculty',
        path: '/faculty',
        component: Faculty
    },
    {
        name: 'Course',
        path: '/course',
        component: Course
    },
    {
        name: 'Program',
        path: '/program',
        component: Program
    },
    {
        name: 'Book',
        path: '/book',
        component: Book
    },
    {
        name: 'AddTeacher',
        path: '/teacher',
        component: AddTeacher
    },
    {
        name: 'ListTeacher',
        path: '/teacher-list',
        component: ListTeacher
    },
    {
        name: 'EditTeacher',
        path: '/teacher/:id/edit',
        component: EditTeacher
    },
    {
        name: 'ShowTeacher',
        path: '/teacher/:id/show',
        component: ShowTeacher
    },
    {
        name: 'AppoindHod',
        path: '/appoind-hod',
        component: AppoindHod
    },
    {
        name: 'AssignTeacher',
        path: '/assign-teacher',
        component: AssignTeacher
    },
    {
        name: 'Student',
        path: '/student',
        component: Student
    },
    {
        name: 'StudentDetail',
        path: '/student-detail',
        component: StudentDetail
    },
    {
        name: 'ApplyLeave',
        path: '/apply-leave',
        component: ApplyLeave
    },
    {
        name: 'TeacherDetail',
        path: '/teacher-detail',
        component: TeacherDetail
    },
    {
        name: 'Attendance',
        path: '/attendance',
        component:Attendance
    },
    {
        name: 'AttendanceReport',
        path: '/attendance-report',
        component:AttendanceReport
    },
    {
        name: 'AssignHod',
        path: '/assign-hod',
        component:assignHod
    },

    {
        name: 'LeaveApprove',
        path: '/leave-approve',
        component:LeaveApprove
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router; 
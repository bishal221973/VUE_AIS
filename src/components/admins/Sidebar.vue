<template>

    <div class="right-sidebar">
        <div class="sidebar-title">
            <h3 class="weight-600 font-16 text-blue">
                Layout Settings
                <span class="btn-block font-weight-400 font-12">User Interface Settings</span>
            </h3>
            <div class="close-sidebar" data-toggle="right-sidebar-close">
                <i class="icon-copy ion-close-round"></i>
            </div>
        </div>
        <div class="right-sidebar-body customscroll">
            <div class="right-sidebar-body-content">
                <h4 class="weight-600 font-18 pb-10">Header Background</h4>
                <div class="sidebar-btn-group pb-30 mb-10">
                    <a href="javascript:void(0);" class="btn btn-outline-primary header-white active">White</a>
                    <a href="javascript:void(0);" class="btn btn-outline-primary header-dark">Dark</a>
                </div>

                <h4 class="weight-600 font-18 pb-10">Sidebar Background</h4>
                <div class="sidebar-btn-group pb-30 mb-10">
                    <a href="javascript:void(0);" class="btn btn-outline-primary sidebar-light">White</a>
                    <a href="javascript:void(0);" class="btn btn-outline-primary sidebar-dark active">Dark</a>
                </div>

                <h4 class="weight-600 font-18 pb-10">Menu Dropdown Icon</h4>
                <div class="sidebar-radio-group pb-10 mb-10">
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="sidebaricon-1" name="menu-dropdown-icon" class="custom-control-input"
                            value="icon-style-1" checked="" />
                        <label class="custom-control-label" for="sidebaricon-1"><i class="fa fa-angle-down"></i></label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="sidebaricon-2" name="menu-dropdown-icon" class="custom-control-input"
                            value="icon-style-2" />
                        <label class="custom-control-label" for="sidebaricon-2"><i class="ion-plus-round"></i></label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="sidebaricon-3" name="menu-dropdown-icon" class="custom-control-input"
                            value="icon-style-3" />
                        <label class="custom-control-label" for="sidebaricon-3"><i
                                class="fa fa-angle-double-right"></i></label>
                    </div>
                </div>

                <h4 class="weight-600 font-18 pb-10">Menu List Icon</h4>
                <div class="sidebar-radio-group pb-30 mb-10">
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="sidebariconlist-1" name="menu-list-icon" class="custom-control-input"
                            value="icon-list-style-1" checked="" />
                        <label class="custom-control-label" for="sidebariconlist-1"><i
                                class="ion-minus-round"></i></label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="sidebariconlist-2" name="menu-list-icon" class="custom-control-input"
                            value="icon-list-style-2" />
                        <label class="custom-control-label" for="sidebariconlist-2"><i class="fa fa-circle-o"
                                aria-hidden="true"></i></label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="sidebariconlist-3" name="menu-list-icon" class="custom-control-input"
                            value="icon-list-style-3" />
                        <label class="custom-control-label" for="sidebariconlist-3"><i class="dw dw-check"></i></label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="sidebariconlist-4" name="menu-list-icon" class="custom-control-input"
                            value="icon-list-style-4" checked="" />
                        <label class="custom-control-label" for="sidebariconlist-4"><i
                                class="icon-copy dw dw-next-2"></i></label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="sidebariconlist-5" name="menu-list-icon" class="custom-control-input"
                            value="icon-list-style-5" />
                        <label class="custom-control-label" for="sidebariconlist-5"><i
                                class="dw dw-fast-forward-1"></i></label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="sidebariconlist-6" name="menu-list-icon" class="custom-control-input"
                            value="icon-list-style-6" />
                        <label class="custom-control-label" for="sidebariconlist-6"><i class="dw dw-next"></i></label>
                    </div>
                </div>

                <div class="reset-options pt-30 text-center">
                    <button class="btn btn-danger" id="reset-settings">
                        Reset Settings
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="left-side-bar">
        <div class="brand-logo">
            <a href="index.html">
                <img :src="'./assets/vendors/images/deskapp-logo.svg'" alt="" class="dark-logo" />
                <img :src="'./assets/vendors/images/deskapp-logo-white.svg'" alt="" class="light-logo" />
            </a>
            <div class="close-sidebar" data-toggle="left-sidebar-close">
                <i class="ion-close-round"></i>
            </div>
        </div>
        <div class="menu-block customscroll">
            <div class="sidebar-menu">
                <ul id="accordion-menu">
                    <li class="dropdown">
                        <a href="/" class="dropdown-toggle no-arrow">
                            <span class="micon bi bi-house"></span><span class="mtext">Dashboard</span>
                        </a>

                    </li>
                    <li>
                        <div class="sidebar-small-cap">Users</div>
                    </li>
                   
                    <li class="dropdown" v-if="role === 'Admin'">
                        <a href="javascript:;" class="dropdown-toggle">
                            <i class="micon icon-copy fa fa-user-circle" aria-hidden="true"></i><span
                                class="mtext">Hod</span>
                        </a>
                        <ul class="submenu">
                            <li><a href="/appoind-hod">Manage</a></li>
                            <li><a href="/assign-hod">Assign Subject</a></li>
                            
                        </ul>
                    </li>
                    <li v-if="role === 'Teacher'"></li>
                    <li class="dropdown" v-else>
                        <a href="javascript:;" class="dropdown-toggle">
                            <i class="micon icon-copy fa fa-user" aria-hidden="true"></i><span
                                class="mtext">Teacher</span>
                        </a>
                        <ul class="submenu">
                            <li><a href="/teacher">Manage</a></li>
                            <li><a href="/assign-teacher">Assign Subject</a></li>
                            
                        </ul>
                    </li>



                  
                   
                    <li class="dropdown">
                        <a href="javascript:;" class="dropdown-toggle">
                            <i class="micon bi bi-people-fill" aria-hidden="true"></i><span
                                class="mtext">Student</span>
                        </a>
                        <ul class="submenu">
                            <li><a href="/student">Manage</a></li>
                            <li><a href="#">Prompt</a></li>
                            
                        </ul>
                    </li>



                    <li>
                        <div class="sidebar-small-cap" v-if="role === 'Admin'">configuration</div>
                    </li>
                    <li class="dropdown" v-if="role === 'Admin'">
                        <a href="/school-setup" class="dropdown-toggle no-arrow">
                            <i class="micon icon-copy fa fa-building" aria-hidden="true"></i><span
                                class="mtext">School</span>
                        </a>

                    </li>
                    <li class="dropdown" v-if="role === 'Admin'">
                        <a href="/faculty" class="dropdown-toggle no-arrow">
                            <i class="micon icon-copy fa fa-fax" aria-hidden="true"></i><span
                                class="mtext">Faculty</span>
                        </a>

                    </li>
                    <li class="dropdown" v-if="role === 'Admin'">
                        <a href="/program" class="dropdown-toggle no-arrow">
                            <i class="micon icon-copy fi-projection-screen"></i><span class="mtext">Program</span>
                        </a>

                    </li>
                    <li class="dropdown" v-if="role === 'Admin'">
                        <a href="/book" class="dropdown-toggle no-arrow">
                            <i class="micon icon-copy fa fa-book" aria-hidden="true"></i><span class="mtext">Book</span>
                        </a>

                    </li>
                    <li class="dropdown" v-if="role === 'Admin'">
                        <a href="/course" class="dropdown-toggle no-arrow">
                            <i class="micon icon-copy bi bi-book-fill"></i><span class="mtext">course</span>
                        </a>

                    </li>
                    <li>
                        <div class="sidebar-small-cap">Attendance</div>
                    </li>

                    <li>
                        <a href="/attendance" class="dropdown-toggle no-arrow">
                            <span class="micon bi bi-calendar4-week"></span><span class="mtext">Take Attendance</span>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="dropdown-toggle no-arrow">
                            <i class="micon icon-copy fi-results"></i><span class="mtext">Student's Leave</span>
                        </a>
                    </li>
                    <li v-if="role === 'Admin'">
                        <a href="/attendance-report" class="dropdown-toggle no-arrow">
                            <i class="micon icon-copy fi-results"></i><span class="mtext">Attendance Report</span>
                        </a>
                    </li>

                    <li class="dropdown" v-if="role === 'Admin'">
                        <a href="javascript:;" class="dropdown-toggle">
                            <span class="micon bi bi-bug"></span><span class="mtext">Error Pages</span>
                        </a>
                        <ul class="submenu">
                            <li><a href="400.html">400</a></li>
                            <li><a href="403.html">403</a></li>
                            <li><a href="404.html">404</a></li>
                            <li><a href="500.html">500</a></li>
                            <li><a href="503.html">503</a></li>
                        </ul>
                    </li>


                </ul>
            </div>
        </div>
    </div>
    <div class="mobile-menu-overlay"></div>
</template>
<script>
export default {
    name: 'Sidebar',
    data(){
        return{
            'role':localStorage.getItem('role')
        }
    },
}
</script>

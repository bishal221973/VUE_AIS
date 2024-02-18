
<template>
    <div class="context">
        <router-view></router-view>
        <div class="login-container">
            <h1 class="text-center mt-5 text-dark">Welcome In</h1>
            <h1 class="text-center text-dark">Attendance Information System</h1>

            <div class="row mt-5">
                <div class="col-lg-4">

                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-header">
                            <h3>AIS</h3>
                        </div>

                        <div class="card-body">
                            <div class="form-group">
                                <label>Username</label>
                                <input type="text" v-model="username" id="txt_username" class="form-control">
                                <small id="err_username"></small>
                            </div>
                            <div class="form-group">
                                <label>password</label>
                                <input type="password" v-model="password" id="txt_password" class="form-control" required>
                                <small id="err_password"></small>
                            </div>
                            <div>
                                <button class="btn btn-success mt-3" v-on:click="login">Login</button>
                            </div>
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    

    


</template>
<script>
import axios from 'axios';
export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
             
            if (this.username == '') {
                $("#txt_username").addClass('error');
                document.getElementById('err_username').innerHTML = "Username can not be empity";
            } else if (this.password == '') {
                console.log('Please enter Password');
                document.getElementById('txt_password').style.borderColor = "red";
                document.getElementById('err_password').innerHTML = "password can not be empity";
            }
            else {
                let result = axios.post('login',
                {
                    username: this.username,
                    password: this.password
                }).then((response) => {
                        if (response.data.status == 'success') {
                            localStorage.setItem('token', response.data.token);
                            localStorage.setItem('role', response.data.role);
                            localStorage.setItem('id', response.data.id);
                            localStorage.setItem('name', response.data.name);
                            this.$router.push({name: "Dashboard"});

                        } else if (response.data.status == 'failed') {
                            console.log(response.data.message);
                        }
                    }).catch(error => {
                        console.log('error: ' + error);
                    });

                return result;
            }

            async function login() {
    try {
        const response = await axios.post('login', {
            username: this.username,
            password: this.password
        }, {
            headers: {
                'Content-type': 'application/json'
            }
        });

        if (response.data.status === 'success') {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('role', response.data.role);
            localStorage.setItem('id', response.data.id);
            localStorage.setItem('name', response.data.name);
            this.$router.push({ name: "Dashboard" });
            console.log(response.data.token);
        } else if (response.data.status === 'failed') {
            console.log(response.data.message);
        }
        
        return response; // Return the entire response object if needed
    } catch (error) {
        console.error('Error:', error);
        throw error; // Rethrow the error if needed
    }
}

// You can call the login function elsewhere in your code



        }
    },
}
</script>
<style>
.login-container h1 {
    color: aliceblue;
}

#err_username {
    color: #DC3545;
}

#err_password {
    color: #DC3545;
}
.form-control.error{
    border-color: #DC3545;
}
</style>
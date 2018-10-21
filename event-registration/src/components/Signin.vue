<template>
    <div id="wrapper">
        <div class="left">  </div>
        <div class="middle">Welcome!  <br>Nice to see you again! </div>
        <div class="signin">
            <div class="form">
                <input type="email" id="username" @keyup="email = $event.target.value" placeholder="Email">
                <span> 
                    <input v-bind:type="passwordField" id="password"  @keyup="password=$event.target.value" placeholder="Password">  
                    <!-- <button type="password" > show </button> -->
                    <img src="../assets/show.png" alt="" @click="switchVisibility" class="show"/>
                </span> 
            </div>
            <button class="button" @click="submit"> Login </button>
                <router-link to="/signup" class="link"> New user? <b>Sign up</b></router-link>
            </div>
    </div>
</template>
<script>
import swal from "sweetalert";
export default {
  data() {
    return {
      email: "",
      password: "",
      passwordField: "password",
      login: login
    };
  },
  methods: {
    submit() {
      console.log("submit", this.login);
      console.log(this.login[0].name, this.email, "email");
      console.log(this.login[0].password, this.password, "pass");
      // let emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/;
      // if (emailRegex.test(this.email)) {
      if (
        this.email === this.login[0].name &&
        this.password === this.login[0].password
      ) {
        this.$router.push({ name: "home", params: { flag: true } });
        // }
      } else {
        swal({
          title: "Enter Valid user info",
          className: "alert"
        });
      }
    },
    switchVisibility() {
      this.passwordField =
        this.passwordField === "password" ? "text" : "password";
    }
  }
};
import { login } from "../helper/login.js";
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

#wrapper {
  width: 100vw;
  display: flex;
  flex-direction: row;
  height: 100vh;
}
.left {
  width: 10vw;
  height: inherit;
}
.middle {
  width: 30vw;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-family: "Open Sans";
  font-weight: 700;
}
.signin {
  width: 50vw;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.form {
  display: flex;
  flex-direction: column;
}
input {
  outline: none;
  border: none;
  border-bottom: 2px solid #000;
  margin: 10px;
  padding: 10px;
  font-size: 15px;
  width: 320px;
}
input:focus {
  border: none;
  border-bottom: 2px solid #3ba3f8;
  transition: all 0.5s ease-in-out;
  outline: none !important;
}
.button {
  background: #000;
  color: #fff;
  font-size: 15px;
  border: none;
  outline: none;
  padding: 12px 35px;
  border-radius: 4px;
  margin: 10px 0;
}
.link {
  text-decoration: none;
  color: #000;
  font-family: "Open Sans";
  font-size: 15px;
  margin: 30px;
}
.show {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>



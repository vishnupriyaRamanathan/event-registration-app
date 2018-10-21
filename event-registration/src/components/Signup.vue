<template>
    <div id="wrapper">
        <div class="left">  </div>
        <div class="middle">Join us and start discovering </div>
        <div class="signup">
            <div class="form">
                <input type="text" id="firstname" @keyup="firstname=$event.target.value" placeholder="First Name">
                <input type="text" id="lastname" @keyup="lastname=$event.target.value" placeholder="Last Name">
                <input type="email" id="email" @keyup="email=$event.target.value" placeholder="Email">
                <span>
                    <input v-bind:type="passwordField" id="password" @keyup="password=$event.target.value" placeholder="Password">
                    <!-- <button type="password" @click="switchVisibility" class="show"> show </button> -->
                    <img src="../assets/show.png" alt="" @click="switchVisibility" class="show"/>
                </span>
            </div>
            <button class="button" @click="submit"> Signup </button>
        </div>
    </div>
</template>
<script>
import swal from "sweetalert";
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      passwordField: "password"
    };
  },
  methods: {
    submit() {
      let emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/;
      if (this.firstname.length > 5 && this.firstname.length < 20) {
        if (this.lastname.length > 5 && this.lastname.length < 20) {
          if (emailRegex.test(this.email)) {
            if (this.password.length > 8 && this.password.length < 20) {
              this.$router.push("/signin");
            }
          }
        }
      } else {
        swal({
          title: "Invalid Details"
        });
      }
    },
    switchVisibility() {
      this.passwordField =
        this.passwordField === "password" ? "text" : "password";
    }
  }
};
</script>

<style scoped>
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
.signup {
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

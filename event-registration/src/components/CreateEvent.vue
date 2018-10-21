<template>
    <div class="wrapper">
        <p> Create Event </p> 
        <div class="event-details">
            <div class="form">
                <div class="form-left">
                    <label for ="title" > Title </label>
                    <input type="text" id="title" @keyup="title = $event.target.value">
                    <label for ="duration"> Duration </label>
                    <input type="text" id="duration" @keyup="duration=$event.target.value">
                    <label for="fees"> Fees </label> 
                    <input type="text" id="fees" @keyup="fees=$event.target.value">
                    <label for="tags"> Tags </label> 
                    <input type="text" id="tags" @keyup="tagToArray">
                    <label for="attendees"> Maximum Number of Attendees </label> 
                    <input type="text" id="attendees" @keyup="attendees = $event.target.value">
                </div>
                <div class="form-right">

                    <div>
                        <label for ="location" > Location </label>
                    <input type="text" id="location" @keyup="location = $event.target.value">
                    <label for="desc"> Description </label>
                    <textarea id="desc" @keyup="description = $event.target.value"> </textarea></div>
                    <div>
                    <button class="button" @click="submit"> Create Event</button></div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
import swal from "sweetalert";
export default {
  data() {
    return {
      title: "",
      description: "",
      duration: null,
      location: "",
      fees: "",
      tags: [],
      attendees: "",
      array: [],
      jsonData: {
        title: "",
        description: "",
        backgroundImage: "https://source.unsplash.com/random",
        hostImage: require("../assets/user1.jpeg"),
        location: "",
        // event_date: "Oct 2, 2018",
        // event_time: "6:30 PM",
        duration: "",
        goingCount: 3,
        invitesCount: "",
        price: "",
        going: [
          {
            name: "John Doe",
            picture: require("../assets/user1.jpeg")
          },
          {
            name: "Jane Doe",
            picture: require("../assets/user3.jpeg")
          }
        ]
      }
    };
  },
  methods: {
    tagToArray() {
      let array = event.target.value.split(",");
      this.tags = array;
    },
    submit() {
      if (
        this.title.length > 0 &&
        this.description.length > 0 &&
        this.duration &&
        this.location &&
        this.fees &&
        this.tags.length > 0 &&
        this.attendees
      ) {
        // alert("okay");
        this.jsonData.title = this.title;
        this.jsonData.description = this.description;
        this.jsonData.location = this.location;
        this.jsonData.duration = this.duration;
        this.jsonData.invitesCount = this.attendees;
        this.jsonData.price = this.fees;
        // console.log(this.jsonData);
        // this.array.push(this.jsonData);
        // location.href = "/home";
        this.$router.push({
          name: "home",
          params: { dataProp: this.jsonData }
        });
      } else {
        swal({
          title: "Oops!",
          text: "Something seems wrong! Re enter the details",
          className: "alert"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
.wrapper {
  font-family: "Open Sans";
  padding: 50px;
  p {
    font-size: 20px;
    font-weight: 700;
  }
}
.event-details {
}
.form {
  display: flex;
  flex-direction: row;
  &-left {
    display: flex;
    flex-direction: column;
    padding: 50px;
  }
  &-right {
    div {
      display: flex;
      flex-direction: column;
    }
    display: flex;
    flex-direction: column;
    padding: 50px;
    justify-content: space-between;
  }
}
label {
  font-weight: 20px;
  font-weight: 600;
  margin: 5px;
  margin-bottom: 10px;
}
input,
textarea {
  margin-left: 15px;
  width: 451px;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.34);
  margin-bottom: 20px;
}
textarea {
  height: 150px;
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
  margin-bottom: 40px;
  cursor: pointer;
  align-self: flex-end;
  justify-content: flex-end;
}
.alert .swal-title {
  font-family: "Source Sans Pro" !important;
  font-size: 25px !important;
}

.alert .swal-text {
  font-family: "Open Sans" !important;
  font-size: 18px !important;
}
</style>



<template>
    <div class="wrapper">
        <p> Edit Event </p> 
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
                    <button class="button" @click="submit"> Update Event</button></div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
import swal from "sweetalert";
export default {
  props: ["allData", "index", "details"],
  data() {
    return {
      title: "",
      description: "",
      duration: null,
      location: "",
      fees: "",
      tags: [],
      attendees: "",
      array: []
    };
  },
  methods: {
    tagToArray() {
      let array = event.target.value.split(",");
      this.tags = array;
    },
    submit() {
      if (this.title.length > 0) this.allData[this.index].title = this.title;
      if (this.description && this.description.length > 0)
        this.allData[this.index].description = this.description;
      if (this.duration && this.duration.length > 0)
        this.allData[this.index].duration = this.duration;
      if (this.location && this.location.length > 0)
        this.allData[this.index].location = this.location;
      if (this.fees && this.fees.length > 0)
        this.allData[this.index].fees = this.fees;
      if (this.attendees && this.attendees.length > 0)
        this.allData[this.index].attendees = this.attendees;
      this.$router.push({ name: "home", params: { flag: true } });
      swal({
        title: "Event Modified"
      });
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



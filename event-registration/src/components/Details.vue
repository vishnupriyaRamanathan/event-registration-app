<template>
    <div class="wrapper">
        <div class="image" :style="{backgroundImage: 'url(' + details.backgroundImage + ')'}"></div>
        <div class="title"> {{details.title}} </div>
        <div class="location"> {{details.location}} </div>
        <div class="desc"> {{details.description}}</div>
        <div class="price"> Price: Rs.{{details.price}}</div>
        <div class="goers"> Event Goers </div>
        <div  v-for="(item, index) in details.going" v-if="details.going.length > 0" class="going">
            <div  class="profile"  :index = "index" :style="{backgroundImage: 'url(' + item.picture + ')'}"> </div>
            <div  class="proname"  :index = "index"> {{item.name}}</div>
        </div>
        <div class="buttons-container"> 
            <button class="edit" @click="modifyEvent"> Modify Event </button>
            <button class="delete" @click="deleteEvent"> Delete Event </button>
            <button class="participate" @click="participate"> Join Event</button>
        </div>
    </div>    
</template>

<script>
import swal from "sweetalert";
export default {
  props: ["details", "allData", "index"],
  methods: {
    mounted() {
      console.log(this.details);
    },
    modifyEvent() {
      console.log("modify");
      this.$router.push({
        name: "edit",
        params: {
          allData: this.allData,
          index: this.index,
          details: this.details
        }
      });
    },
    deleteEvent() {
      console.log("delete");
      //   for (let c = this.index; c < this.allData.length - 1; c++)
      //     this.allData[c] = this.allData[c + 1];
      this.allData.splice(this.index, 1);
      this.$router.push({ name: "home" });
      swal({
        title: "Event Deleted"
      });
    },
    participate() {
      console.log("join");
      swal({
        title: "Event Joined"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
.wrapper {
  display: flex;
  padding: 40px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.image {
  width: 576px;
  height: 324px;
  background-size: cover;
  border-radius: 16px;
}

.title {
  width: 576px;
  padding: 40px;
  padding-bottom: 10px;
  font-size: 25px;
  font-family: "Open Sans";
  font-weight: 700;
  text-align: center;
}
.location {
  font-size: 15px;
  color: #5c5c64;
  padding: 30px;
  padding-top: 0;
  font-family: "Open Sans";
  font-weight: 400;
}
.desc {
  text-align: justify;
  width: 576px;
  font-family: "Source Sans Pro";
  font-size: 18px;
}
.price {
  width: 576px;
  font-size: 25px;
  padding: 20px;
  font-family: "Source Sans Pro";
}
.buttons-container {
  padding: 30px;
  .edit {
    background: #2fc3e9;
  }

  .delete {
    background: #e79091;
  }
  .participate {
    background: #84bc54;
  }
  button {
    padding: 10px 25px;
    font-size: 16px;
    font-family: "Open Sans";
    outline: none;
    border: none;
    color: #eee;
    font-weight: 600;
    border-radius: 8px;
    margin: 30px;
    cursor: pointer;
  }
}
.going {
  width: 576px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.profile {
  height: 50px;
  width: 50px;
  background-size: cover;
  border-radius: 8px;
}
.proname {
  font-family: "Open Sans";
  font-size: 18px;
  font-weight: 400;
  margin-left: 30px;
}
.goers {
  font-family: "Source Sans Pro";
  font-size: 25px;
  font-weight: 700;
  padding: 30px;
}
</style>



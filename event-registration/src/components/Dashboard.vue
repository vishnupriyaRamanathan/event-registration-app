
<template>
<div class="wrapper" v-if="flag">
    <div class="header">
        <span class="title"> Event Management </span>
        <span class="details"> 
            <span class="item" @click="openPage"> Create Event </span>
        </span>
    </div>
    <div class="card-container">
        <!-- <Card > </Card>
        <Card > </Card>
        <Card > </Card> -->
        <!-- <li v-for="item in cardData"> 
            {item.title}
        </li> -->
		
        <template v-for="(item,index) in data" v-if="data.length > 0">
          <div :key="index" @click="cardClick(index)" class="renderCard"> 
            <Card  :title="item.title" :index="index" :image="item.backgroundImage" :coming="item.goingCount" :total="item.invitesCount" :user="item.hostImage"/>
          </div>
       </template>
		  
          <!-- <template  v-if="dataArray.length > 0" v-for="(item, index) in dataArray">
            <Card :key="item.title" :title="item.title" :index="index"  :image="item.backgroundImage" :coming="item.goingCount" :total="item.invitesCount" :user="item.hostImage"/>
          </template> -->
    </div>
</div>
<div v-else class="unauthorised">
  Login to view the page! 
</div>
</template>


<script>
import Card from "../components/Card";
export default {
  components: { Card },
  props: ["dataProp", "flag"],
  data() {
    return {
      data: cardData
    };
  },
  methods: {
    openPage() {
      this.$router.push({ name: "create" });
    },
    cardClick(index) {
      console.log("cardClick", index);
      this.$router.push({
        name: "details",
        params: { details: this.data[index], allData: this.data, index: index }
      });
    }
  },
  mounted() {
    if (this.dataProp) this.data.push(this.dataProp);
    console.log(this.flag);
  }
};
import { cardData } from "../helper/data.js";
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
.wrapper {
  overflow-x: hidden;
}
.header {
  width: 100vw;
  height: 12vh;
  background: rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  color: #fff;
  font-family: "Source Sans Pro";
  font-size: 30px;
  padding-left: 100px;
}
.details {
  .item {
    font-size: 15px;
    color: #eee;
    font-family: "Open Sans";
    padding: 0 50px;
    cursor: pointer;
    font-weight: 700;
  }
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  padding: 50px;
}
.renderCard {
  cursor: pointer;
}
.unauthorised {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  font-family: "Open Sans";
}
</style>


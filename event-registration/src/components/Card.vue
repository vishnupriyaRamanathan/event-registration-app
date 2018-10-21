<template>
    <div class="wrapper">
        <div class="card" :style="{backgroundImage: 'url(' + this.image + ')'}">
        </div>
        <div class="title">
            <div class="image" :style="{backgroundImage: 'url(' + this.user + ')'}"> </div>
            <div class="text">
                <div class="heading">    {{this.title}} </div>
                <div class="count">  {{this.coming}} of {{this.total}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["title", "index", "image", "coming", "total", "user"]
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
.wrapper {
  width: 576px;
  height: 389px;
  margin: 0px 40px 40px 0;
  overflow-y: hidden;
}
.card {
  // background-image: uri(this.image);
  width: 576px;
  height: 324px;
  background-size: cover;
  //   margin: 40px 0 40px 40px;
  border-radius: 16px;
}
.title {
  height: 65px;
  width: inherit;
  padding: 10px 0px 0 0px;
  margin: 0 0 0 20px;
  font-family: "Source Sans Pro";
  font-size: 20px;
  font-weight: 600;
  display: grid;
  grid-template-columns: 10% auto;
  .image{
      width: 50px;
      height: 50px;
      background-size: cover;
      border-radius: 10px;
  }
}
.text {
  .heading {
    font-size: 20px;
    font-weight: 700;
  }
  .count {
    font-size: 14px;
    color: #808080;
  }
}
</style>



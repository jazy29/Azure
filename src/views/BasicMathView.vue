<template>

  <body>

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.m
in.css"
      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPv
g6uqKI2xXr2"
      crossorigin="anonymous"
    />
    <v-card class="bg">
       
    <h2>CASIO</h2>
    <v-text-field class="tfcolor" label="Enter number" v-model.number="fNumber"></v-text-field>
   
    <p></p>
    <v-text-field class="tfcolor" label="Enter number" v-model.number="sNumber"></v-text-field>
    <p></p>
      <v-btn class=btn color="#bec0c4" dark @click="add" >+</v-btn>
      <v-btn class=btn color="#bec0c4" dark @click="sub" >-</v-btn>
      <v-btn class=btn color="#bec0c4" dark @click="mult" >x</v-btn>
      <v-btn class=btn color="#bec0c4" dark @click="div" >/</v-btn>
    <p>Total = {{ total }}</p>

   </v-card>
    
    

  </body>

</template>


<script>
export default {
  data() {
    return {
      name: 'MidtermLab2',
      fNumber: 0,
      sNumber: 0,
      total: 0
    }
  },
  methods: {
    add: function () {
      this.total = this.fNumber + this.sNumber
    },
    sub: function () {
      this.total = this.fNumber - this.sNumber
    },
    mult: function () {
      this.total = this.fNumber * this.sNumber
    },
    div: function () {
      this.total = this.fNumber / this.sNumber
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  text-align: center;
}

body {
  background-color: rgb(20, 21, 21);
  padding: 3% 5% 19% 5%;
  background-image: url(../assets/bgbod.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.bg {
  border: 5px solid #0f0f0f;
  background-color: rgb(20, 21, 21);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 50%;
  position: relative;
  left: 25%;
  margin-top: 7%;
}
h2 {
  color: rgb(243, 152, 32);
  margin-right: 20px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
p {
  margin-right: 20px;
  text-align: center;
  color: rgb(214, 209, 202);
  font-size: 30px;
  width: 50%;
  left: 23.5%;
  margin-bottom: 20px;
  position: relative;
  background: rgb(51, 49, 49);
}
input {
  font-size: 24px;
  width: 75%;
  margin-right: 10px;
  text-align: center;
  position: relative;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 13px;
}
.btn {
  position: relative;
  left:13%;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 4%;
}
.tfcolor {
  color: green !important;
  width: 75%;
  font-size: 24px;
  position: relative;
  left: 10%;
  padding-top: 10px;
  padding-bottom: 5px;
  margin-bottom: 13px;
}
</style>
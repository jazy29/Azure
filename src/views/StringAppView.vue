<template>
  <head>
    <title>Bootstrap Tutorial Sample Page</title>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width,
initial-scale=1"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.m
in.css"
      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPv
g6uqKI2xXr2"
      crossorigin="anonymous"
    />
    <nav class="navbar navbar-expand-md">
      <a class="navbar-brand" href="#" style="font-weight: bold"></a>
    </nav>
  </head>
  <body>

      <div id="app">
        
      <v-card class="vcard"  color="rgba(232, 224, 224, 0.8)">
       
      <v-card-title class="title"><h1>String Manipulation</h1></v-card-title>
          <br>
         <h1>
          <v-text-field 
            class="tfcolor"
            label="Enter number"
            v-model="text"
          ></v-text-field>
        </h1>
      <v-btn class=btn color="green" dark @click="count" >Count</v-btn>
      <v-btn class=btn color="#f54b42" dark @click="reset" >Reset</v-btn>
      <v-card-subtitle > 
        <p>Vowel Count : {{ vCount }}</p>
        <p>Consonant Count: {{ cCount }}</p>
        <p>Number Count: {{ numCount }}</p>
        <p>Conver Vowels to * : {{ convert }}</p>
 
      </v-card-subtitle>  
</v-card>

      <br />
    </div>

  </body>
</template>
<script>
export default {
  data() {
    return {
      text: "",
      vCount: 0,
      cCount: 0,
      numCount: 0,
      convert: "",
    };
  },
  methods: {
    count: function () {
      this.vCount = this.text.match(/[aeiou]/gi).length;
      this.cCount = this.text.match(/[bcdfghjklmnpqrstvwxys]/gi).length;
      this.numCount = this.text.match(/[0-9]/gi).length;
      this.convert = this.text.replace(/[aeiou]/gi, "*");
    },
    reset: function () {
      this.vCount = 0;
      this.cCount = 0;
      this.convert = "";
      this.numCount = 0;
      this.text = "";
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background-color: rgb(20, 21, 21);
  padding: 3% 5% 19% 5%;
}

.header {
  background-size: cover;
  background-position: center;
  position: relative;
}
.overlay {
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  left: 0;
  top: 0;
}


.title h1 {
  color:#061837;
  text-align: center;
  font-size: 150%;
}
.vcard p {
  padding-top: 10px;
  color: #140836;
  text-align: left;
  font-size: 1.3rem;
  line-height: 1.5;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 20px;
  width:70%;
  position:relative;
  left:13%;
  background-color: #97a3b9;
}
.tfcolor {
  color: rgb(3, 44, 16) !important;
  width: 80%;
  font-size: 24px;
  position: relative;
  left: 10%;
  padding-top: 10px;
  padding-bottom: 5px;
  margin-bottom: 13px;
}
.btn {
  position: relative;
  left:2%;
  margin-left: 20px;
  margin-right: 20px;
  width: 25%;
  margin-bottom: 2%;
}

.vcard {
  left: 30%;
  position: relative;
  top: 2em;
  padding-top: 20px;
  text-align: center;
  background-image: url("../assets/bgf.jpg");
  border-radius: 20px;
  padding-bottom: 3%;
  width: 40%
  
}
</style>
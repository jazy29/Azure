<template>
  <body>
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
    
  </head>

  <v-card class="vcard"  color="rgba(232, 224, 224, 0.8)">
 
    <v-card-title class="title"><h1> About The Developer</h1></v-card-title>
    <div class="sub">
  
       <p>
        
        The owner of this website is Jonathan Bucat an IT student, I am 20 years 
        and He lives at Pasig  City. He aims to be good  web designer and game devloper.
        The program that he partake in Technological Institute of the Philippines is BSIT.
        
      </p>

  </div>
  <br>
      <img alt="Profile"  src="../assets/jonathan.png" width="200" height="200" class="img"/>
    
   
  </v-card>
  </body>

</template>
<script>
    
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background-color: rgb(20, 21, 21);
  padding: 3% 5% 19% 5%;
  background-image: url(../assets/bgbod.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.img{
  border-radius:200px;
   display: block;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
  height: auto;
  
}
.navbar {
  background: #1f1001;
  overflow: hidden;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
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
.description {
  position: relative;
  left: 13%;
  top: 3em;
  padding-top: 25px;
  text-align: justify;
  background: rgba(232, 224, 224, 0.8);
  border-radius: 20px;
  width: 75%;
  height: 40%;

}
.title h1 {
  color:#061837;
  text-align: center;
  font-size: 170%;
  font-family:Georgia, 'Times New Roman', Times, serif
}


.promovid {
  text-align: center;
}
.sub p{
  padding-top: 10px;
  color: #221a0d;
  font-size: 130%;
  line-height: 1.5;
  margin-left: 50px;
  margin-right: 50px;
  font-family:Georgia, 'Times New Roman', Times, serif;
}

.vcard {
  position: relative;
  left: 13%;
  top: 3em;
  padding-top: 25px;
  padding-bottom:2%;
  text-align: justify;
  background: rgba(232, 224, 224, 0.8);
  border-radius: 20px;
  width: 75%;
  height: 40%;
}

</style>
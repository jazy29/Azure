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
 
    <v-card-title class="title"><h1> About Myself</h1></v-card-title>
    <div class="sub">
  
       <p>
        The firs page is about myself this is just an web page that shows who I am, this explores
        how V card and Vtitle is used.
        <img alt="Profile"  src="../assets/abmyself.jpg" width="100%" height="50%" class="img"/>
      </p>
  </div>
  </v-card>
  <v-card class="vcard"  color="rgba(232, 224, 224, 0.8)">
 
 <v-card-title class="title"><h1> Calculator</h1></v-card-title>
 <div class="sub">

    <p>
      This application is a simple calculator application, this is use to add, subtract, multiply and
      divide the number that you inputted.
      <img alt="Profile"  src="../assets/cacl.jpg" width="100%" height="50%" class="img"/>
   </p>
 

</div>

 

</v-card>

<v-card class="vcard"  color="rgba(232, 224, 224, 0.8)">
 
 <v-card-title class="title"><h1> String Manipulation</h1></v-card-title>
 <div class="sub">

    <p>
      This application is a string manipulator applicaiton, by clicking the count button 
      the string that you have inputted will be inspect and the program will count the number of
      vowels, consonant, numbers and then it will convert the vowels into asteries '*'.
      <img alt="Profile"  src="../assets/sm.jpg" width="100%" height="50%" class="img"/>
   </p>
 

</div>

 

</v-card>
<v-card class="vcard"  color="rgba(232, 224, 224, 0.8)">
 
 <v-card-title class="title"><h1> Quiz</h1></v-card-title>
 <div class="sub">

    <p>
      This application is a quiz app that uses axios api to input the question and the right answer.
      The question that I have use is about the Greek Mythology.
      <img alt="Profile"  src="../assets/quiz.jpg" width="100%" height="50%" class="img"/>
   </p>
 

</div>

 

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
 
   display: block;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
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
  margin-bottom: 2%;
}
.vcard p {
    position: relative;
    padding-top: 25px;
    padding-right: 25px;
    padding-left: 25px;
    padding-bottom: 25px;
    margin-top: 2%;
    margin-left: 5.5%;
    text-align: justify;
    background: rgba(232, 224, 224, 0.8);
    border-radius: 20px;
    width: 90%;
    height: 40%;

}

</style>
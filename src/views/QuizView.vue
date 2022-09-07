<template>
  <bodY>


  <div id="quiz-container">
    <v-card class="vcard"  color="">
     <h5>Score: {{score}}/{{questions.length}}</h5>

     <hr class="divider" />
     <h3>Question: {{currentnumberQuestion}} / {{questions.length}}</h3>
     <div>
       <h1 v-html="loading ? 'Loading...' : currentQuestion.question"></h1>
       <form v-if="currentQuestion">
         <button
           v-for="answer in currentQuestion.answers"
           :index="currentQuestion.key"
           :key="answer"
           v-html="answer"
           @click.prevent="handleButtonClick"
         ></button>
       </form>
       <hr class="divider" />
     </div>
    </v-card>
   </div>
  </bodY>
 </template>
   
   <script>
 export default {
   name: "Quiz",
   data() {
     return {
       questions: [],
       loading: true,
       index: 0,
       score: 0,
       currentnumberQuestion:1
     };
   },
   computed: {
     currentQuestion() {
       if (this.questions !== []) {
         return this.questions[this.index];
       }
       return null;
     },
   },

   methods: {
     async fetchQuestions() {
       this.loading = true;
       let response = await fetch(
         "https://opentdb.com/api.php?amount=10&category=20&difficulty=hard"
       );
       let jsonResponse = await response.json();
       let index = 0; 
       let data = jsonResponse.results.map((question) => {

         question.answers = [
           question.correct_answer,
           ...question.incorrect_answers,
         ];

         for (let i = question.answers.length - 1; i > 0; i--) {
           const j = Math.floor(Math.random() * (i + 1));
           [question.answers[i], question.answers[j]] = [
             question.answers[j],
             question.answers[i],
           ];
         }

         question.rightAnswer = null;
         question.key = index;
         index++;
         return question;
       });
       this.questions = data;
       this.loading = false;
     },
     handleButtonClick: function (event) {

       let index = event.target.getAttribute("index");
 
       let pollutedUserAnswer = event.target.innerHTML; 

       let userAnswer = pollutedUserAnswer.replace(/'/, "&#039;");
 

       this.questions[index].userAnswer = userAnswer;
 
       event.target.classList.add("clicked");
       let allButtons = document.querySelectorAll(`[index="${index}"]`);
 
       for (let i = 0; i < allButtons.length; i++) {
         if (allButtons[i] === event.target) continue;
 
         allButtons[i].setAttribute("disabled", "");
       }
 

       this.checkAnswer(event, index);
     },
     checkAnswer: function (event, index) {
       let question = this.questions[index];
 
       if (question.userAnswer) {
         if (this.index < this.questions.length - 1) {
           setTimeout(
             function () {
               this.index += 1;
               this.currentnumberQuestion+=1;
             }.bind(this),
             1000
           );
         }
         if (question.userAnswer === question.correct_answer) {
      
           event.target.classList.add("rightAnswer");
      
           this.questions[index].rightAnswer = true;
           this.score++;
         } else {

           event.target.classList.add("wrongAnswer");
           this.questions[index].rightAnswer = false;

           let correctAnswer = this.questions[index].correct_answer;
           let allButtons = document.querySelectorAll(`[index="${index}"]`);
           allButtons.forEach(function (button) {
             if (button.innerHTML === correctAnswer) {
               button.classList.add("showRightAnswer");
             }
           });
         }
       }
     },
   },

   mounted() {
     this.fetchQuestions();
   },
 };
 </script>
   
   <style scoped>
    body {
  background-color: rgb(20, 21, 21);
  padding: 3% 5% 19% 5%;
}
 #quiz-container {
   margin: 1rem auto;
   padding: 1rem;
   max-width: 750px;
 }
 
 

 
 h1 {
   font-size: 1.3rem;
   padding: 0.7rem;
 }
 
 .divider {
   margin: 0.5rem 0;
   border-radius: 2px;
   box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.3);
 }
 
 form {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
 }
 
 button {
   font-size: 1.1rem;
   box-sizing: border-box;
   padding: 1rem;
   margin: 0.3rem;
   width: 47%;
   background-color: rgba(100, 100, 100, 0.3);
   border: none;
   border-radius: 0.4rem;
   box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.2);
 }
 
 button:hover:enabled {
   transform: scale(1.02);
   box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12),
     0 3px 1px -1px rgba(0, 0, 0, 0.2);
 }
 
 button:focus {
   outline: none;
 }
 
 button:active:enabled {
   transform: scale(1.05);
 }
 
 @keyframes flashButton {
   0% {
     opacity: 1;
     transform: scale(1.01);
   }
   50% {
     opacity: 0.7;
     transform: scale(1.02);
   }
   100% {
     opacity: 1;
     transform: scale(1);
   }
 }
 
 button.clicked {
   pointer-events: none;
 }
 
 button.rightAnswer {
   animation: flashButton;
   animation-duration: 700ms;
   animation-delay: 200ms;
   animation-iteration-count: 3;
   animation-timing-function: ease-in-out;
   color: black;
   background: linear-gradient(
     210deg,
     rgba(0, 178, 72, 0.25),
     rgba(0, 178, 72, 0.5)
   );
 }
 
 button.wrongAnswer {
   color: black;
   background: linear-gradient(
     210deg,
     rgba(245, 0, 87, 0.25),
     rgba(245, 0, 87, 0.5)
   );
 }
 
 button.showRightAnswer {
   animation: flashButton;
   animation-duration: 700ms;
   animation-delay: 200ms;
   animation-iteration-count: 2;
   animation-timing-function: ease-in-out;
   color: black;
   background: linear-gradient(
     210deg,
     rgba(0, 178, 72, 0.25),
     rgba(0, 178, 72, 0.5)
   );
 }


 .vcard {
  left: 10%;
  position: relative;
  top: 2em;
  padding-top: 20px;
  text-align: center;
  background-image: url("../assets/bgf.jpg");
  border-radius: 20px;
  padding-bottom: 3%;
  width: 80%
  
}
 </style>
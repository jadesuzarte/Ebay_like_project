// import Axios from "axios";

$(document).ready(function () {
const button = document.querySelector("button"); 
const body =document.querySelector("body")

const form = document.querySelector("form")

// var axios = require('axios');


// $("#button").click(event => {
//     console.log('working')
// axios({
//   method: 'post',
//   url: 'http://localhost:8080/advert',
// })
// .then(function (res) {
//   console.log(res.data);
// })
// .catch(function (err) {
//   console.log(err);
// });
// })






});


$("button").click(event => {
    const form = document.querySelector("form")
    console.log('working')
    event.preventDefault();
    axios.get('http://localhost:8080/advert').then(response => {
      console.log(response.data)
    //   $("body").append(`${form.input}`);
    });
  });



// ANOTHER ATTEMPT 
// $("#button").click(event => {
//     console.log('working')
// axios({
//   method: 'post',
//   url: 'http://localhost:8080/advert',
// })
// .then(function (res) {
//   console.log(res.data);
// })
// .catch(function (err) {
//   console.log(err);
// });
// })









// button.addEventListener("click", event => {
//     event.preventDefault();
//     console.log('working');
//     window.location.replace("http://localhost:8080/advert");
// });





// TRYING WITH LAST ASSIGNMENT METHOS 

//       $("body").html();
//    });
// TRYING WITH AXIOS AND TWO PARAMS 
// button.addEventListener("click", event => {
//     event.preventDefault();
//    Axios.post(("https://localhost:8080/advert", {data}))

//   });





















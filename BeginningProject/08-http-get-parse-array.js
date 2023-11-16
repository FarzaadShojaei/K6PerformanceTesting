import http  from "k6/http";


// Returns Below Array
/*
[
    {
        "name": "Ali",
        "email": "Ali@gmail.com",
        "job" : "Web Developer",
        "location" : "london"

    },
      {
        "name": "Reza",
        "email": "Reza@gmail.com",
        "job" : "Front-End Developer",
        "location" : "Torrento"

    },
      {
        "name": "Hossein",
        "email": "Hossein@gmail.com",
        "job" : "Back-End Developer",
        "location" : "Sao Paulo"

    },
      {
        "name": "Ahmad",
        "email": "Ahmad@gmail.com",
        "job" : "Wordpress Developer",
        "location" : "Paris"

    },






]


*/

export default function(){
 let response=   http.get('https://run.mocky.io/v3/0a08ccd3-27e4-4a42-a3db-0392a59b52fe');

    let body=JSON.parse(response)
    body.foreach(element =>{
        console.log(`name is ${element.name}`)
    })
}
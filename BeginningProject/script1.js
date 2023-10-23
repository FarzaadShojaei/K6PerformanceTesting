//Js Code

//Call Google.com - Https://www.google.com

//When 1000s of Users call google.com , What will happen

// Call means get

import http from 'k6/http';


export default function(){
    http.get('https://www.google.com/');
}
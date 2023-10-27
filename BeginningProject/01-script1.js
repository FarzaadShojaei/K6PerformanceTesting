//Js Code

//Call Google.com - Https://www.google.com

//When 1000s of Users call google.com , What will happen

// Call means get

import http from 'k6/http';
//RampUp

export let options={
stages:[
{duration: '10s', target: 5},
{duration: '20s', target: 3},


]


}

export default function(){
    http.get('https://www.google.com/');
}
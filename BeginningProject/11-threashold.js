import {http} from 'k6/http';

import { Rate } from 'k6/metrics';


const failureRate=new Rate('failed Requests')

export let options={
    threasholds:{
        'failed Requests' :['rate<0.1'],
        'http_req_duration':['p(95)<200','p(99)<400'],

    }
};

export default function(){
    let res=http.get('https://run.mocky.io/v3/06037804-8e27-4b42-ac00-79f0bf3a5005') //this api returns 200, so we checked for 200 response code


    failureRate.add(res.status !==200) //if response is not 200 then fail
}
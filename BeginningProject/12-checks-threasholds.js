import {http} from 'k6/http';
import { check } from 'k6';





export let options={
    vus:10,
    duration: '10s',
    threasholds:{
        'checks':['rate>0.95']
    }
}

export default function(){
    const response=http.get('https://run.mocky.io/v3/06037804-8e27-4b42-ac00-79f0bf3a5005');

    check(response,{
        'is status is 200' : r=> r.status ===200
    })
}
import { check } from 'k6';
import http from 'k6/http';


export default function(){
    var url='https://run.mocky.io/v3/06037804-8e27-4b42-ac00-79f0bf3a5005';

    var headerParam={
        headers:{
            'Content-Type' : 'application/json'
        }


    }
    const response=http.get(url,headerParam)

    check({
        'is status is 200' : (r) => r.status===200

    })

    let body=JSON.parse(response.body);


    console.log(`response body is ${JSON.stringify(body)}`);
    console.log(`Message is ${body.Message}`);

    check(response,{
        'is Message is Success:' :(r) => JSON.parse(r.body).Message === "Data Fetched successfully" 
    })
}
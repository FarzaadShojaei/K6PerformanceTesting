import http from 'k6/http';
import check from k6;
import Rate from 'k6/metrics'


export let errorRate=new Rate('errors');

export let options={
    vus:10,
    duration:'20s',
    threashold:{
        errors:['rate<0.1'] //10% errors
    }

}

ext: {
  loadimpact:{
    projectID:343433

    
  }

}

export default function(){
    const response=http.get('https://run.mocky.io/v3/06037804-8e27-4b42-ac00-79f0bf3a5005');
    const checkApi1=check(response,{
        "is response of API1 is 200 :" : r=> r.status === 200

    })

    errorRate.add(!checkApi1)
}








import {http} from 'k6/http';
import { check } from 'k6';


export default function(){
  let response=  http.get('https://run.mocky.io/v3/0a08ccd3-27e4-4a42-a3db-0392a59b52fe')
  check(response,{

    'is response status is 200 :' : (r) => r.status===200,
  })

}

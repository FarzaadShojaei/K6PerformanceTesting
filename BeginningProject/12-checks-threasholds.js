import {http} from 'k6/http';
import { check } from 'k6';





export let options={
    vus:10,
    duration: '10s',
    threasholds:{
        
    }
}

// @if PLATFORM!='electron'
import axios from 'axios'

let instance = axios.create({
    baseURL: location.protocol+'//'+location.hostname+':'+8007+'/',
    timeout: 3000,
    headers: {
        "canyouseeme": "Hello World Public-CARON"
    }
})
// @ts-ignore
export default instance;
// @endif
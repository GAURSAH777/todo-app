import axios from 'axios'

class HelloWorldService {
    executeHelloWorldService(){
        return axios.get('http://localhost:8081/hello');
    }
}
export default new HelloWorldService()
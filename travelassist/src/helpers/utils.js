// import axios from '../axios'
import axios from "axios";

const resources = {}
const makeRequestCreator = () => {
    let cancel;

    return async(query) => {
        //check if request is made
        if(cancel){
            // cancel previous request before making new request
            cancel.cancel()
        }
        //create a new cancel token
        cancel = axios.CancelToken.source()
        try{
            if(resources[query]){
                // return result if exists
                console.log('this returned')
                return resources[query]
            }
            const res = await axios(query, {cancelToken: cancel.token})
            const result = res.data
            resources[query] = result
            return result
        }catch(err){
            if(axios.isCancel(err)){
                //handle is request is canceled
                console.log('Request cancel', err.message)
            }else{
                //handle other errors
                console.log('Someting went wrong', err.message)
            }
        }
    }
}

export const search = makeRequestCreator()
// import KhaltiCheckout from "khalti-checkout-web";
import axios from '../../helpers/axios'

let config = {
    // replace this key with yours
    "publicKey": "test_public_key_0d46853fa2ae44a78de315eac05d4d0f",
    "productIdentity": "1234567890",
    "productName": "Travel Assist",
    "productUrl": "http://localhost:3000",
    "eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            console.log(payload, ' :payload');
            let data = {
                token: payload.token,
                amount: payload.amount,
            };
              axios
              .post(
                `/payment/khalti`, data, {headers: {'Authorization': 'key test_secret_key_e69ea815b1f9408b85525d8df82fee6a'}}
              )
              .then((response) => {
                console.log(response.data);
                alert("Payment Successful");
              })
              .catch((error) => {
                console.log(error);
              });
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log('error: ',error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};

export default config
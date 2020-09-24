import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class MyApp extends React.Component {
    render() {
        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
                    console.log("The payment was succeeded!", payment);
                    this.clearCart();
                    this.props.history.push("./");
            		// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
        }
 
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
         
        const client = {
            sandbox:  "AchFTSr8RFHxe8xSQm9hRZIDf73_ry2BLynd9g-t7ilbX3PGOxFXIErz-aKwc8giVrkrdtShg_iCxJjc",
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        
        return (
            <PaypalExpressBtn env={env}
             client={client} 
             currency={currency}
             total={this.props.total} 
             onError={onError} 
             onSuccess={onSuccess}
              onCancel={onCancel} />
        );
    }
}

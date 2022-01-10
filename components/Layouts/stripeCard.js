import React from 'react';
import { FlexCol, LoadingIndicator, Flex } from '@components';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { STRIPE_PUBLIC_KEY } from '@env';

const PaymentView = (props) => {
	const { data } = props;
	const { email, address, city, state, zip, country } = data;

	const onCheckStatus = (response) => {
		props.onCheckStatus(response);
	};

	const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Payment Page</title>
      <script src="https://js.stripe.com/v3/"></script>
      <style>
        .card-holder {
          display: flex;
          flex-direction: column;
          background-color: transparent;
        }
        .card-element {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin: 0px 20px 0px 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid gray;
        }
        .card-name, .card-address,
        .card-city, .card-state, 
        .card-zip, .card-country  {
          display: none;
        }
        .row {
          margin-top: '20px';
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
      </style>
    </head>
    <body>
      <!-- product info -->
        <div class="container">
          <!-- form -->
          <form class="card-form">
            <div class="card-holder">
              <!-- card holder form input -->
              <input type="text" placeholder="Card Holder Email" id="card-name" class="card-name" value="${email}"/>
              <input type="text" placeholder="Card Holder Address" id="card-address" class="card-address" value="${address}"/>
              <input type="text" placeholder="Card Holder City" id="card-city" class="card-city" value="${city}"/>
              <input type="text" placeholder="Card Holder State" id="card-state" class="card-state" value="${state}"/>
              <input type="text" placeholder="Card Holder Zip" id="card-zip" class="card-zip" value="${zip}"/>
              <input type="text" placeholder="Card Holder Country" id="card-country" class="card-country" value="${country}"/>

              <!-- card form -->
              <div id="card-element" class="card-element"></div>
              <!-- error message -->
            </div>
          </form>
        </div>
        
      <script>
        let stripe = Stripe('${STRIPE_PUBLIC_KEY}');
        let elements = stripe.elements();
        let card = elements.create("card", {
          hidePostalCode: true,
          style: {
            base: {
              color: '#FFF',
              fontWeight: 500,
              fontFamily: 'Source Code Pro, Consolas, Menlo, monospace',
              fontSize: '16px',
              fontSmoothing: 'antialiased',
              '::placeholder': {
                color: 'gray',
              },
              ':-webkit-autofill': {
                color: '#e39f48',
              },
            },
            invalid: {
              color: '#FC011F',
              '::placeholder': {
                color: '#FFCCA5',
              },
            },
          }
        });
        
        // Add an instance of the card Element into the 'card-element'
        card.mount('#card-element');
        
        card.on('change', (event) => {
          const cardElement = document.getElementById('card-element');
          cardElement.style.borderBottom = '1.5px solid #009A74';
          if (event.complete) {
            // enable payment button
            validateCard(card);
          } else if (event.error) {
            const { message} = event.error
            console.log(message)
          }
        });
            
        card.mount('#card-element');
        /**
         * validate card
         */
        function validateCard(card) {
          let cardInfo = {};

          let additionalData = {
            name: document.getElementById('card-name').value,
            address_line1: document.getElementById('card-address').value,
            address_city:  document.getElementById('card-city').value,
            address_state: document.getElementById('card-state').value,
            address_zip: document.getElementById('card-zip').value,
            address_country: document.getElementById('card-country').value
          };

          /**
           * Create token
           */
          stripe.createToken(card, additionalData).then((result) => {
             console.log(result + 'token')
            if (result.token) {
              Object.assign(cardInfo, {token_id: result.token.id})
            } else {
              Object.assign(cardInfo, {token: result})
            }
          });

          /**
          * Create payment method
          */
          stripe.createPaymentMethod({ 
            type: 'card', 
            card: card, 
            billing_details: {
              name: '${email}',
            }
          })
          .then((result) => {
            console.log(result + 'paymetmethod')
            if (result.paymentMethod) {
              Object.assign(cardInfo, {paymentMethod_id: result.paymentMethod.id})
              if ((cardInfo.hasOwnProperty('token_id') && cardInfo.hasOwnProperty('paymentMethod_id'))) {
                window.postMessage(JSON.stringify(cardInfo));
              }
            } else {
              window.postMessage(JSON.stringify(cardInfo));
            }
          })
        }
      </script>
    </body>
    </html>`;

	const injectedJavaScript = `(() => {
    window.postMessage = (data) => {
      window.ReactNativeWebView.postMessage(data);
    };
  })()`;

	const onMessage = (event) => {
		const { data } = event.nativeEvent;
		onCheckStatus(data);
	};

	const LoadingIndicatorView = () => {
		return (
			<Flex customStyle={{ justifyContent: 'center' }}>
				<LoadingIndicator color="#009b88" />
			</Flex>
		);
	};
	//  <WebView
	// 		javaScriptEnabled={true}
	// 		style={{ flex: 1 }}
	// 		originWhitelist={['*']}
	// 		source={{ html: htmlContent, baseUrl: 'https://example.com' }}
	// 		injectedJavaScript={injectedJavaScript}
	// 		onMessage={onMessage}
	//  />;
	return (
		<FlexCol customStyle={styles.container}>
			<WebView
				javaScriptEnabled={true}
				style={{
					flex: 0,
					flexDirection: 'column',
					paddingVertical: 20,
					backgroundColor: 'transparent'
				}}
				originWhitelist={['*']}
				source={{ html: htmlContent, baseUrl: 'https://example.com' }}
				domStorageEnabled={true}
				// useWebKit={true}
				injectedJavaScript={injectedJavaScript}
				onMessage={onMessage}
				showsVerticalScrollIndicator={false}
				renderLoading={LoadingIndicatorView}
				startInLoadingState={true}
			/>
		</FlexCol>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	}
});

export default PaymentView;

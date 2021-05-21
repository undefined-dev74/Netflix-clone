import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import db from '../../firebase.config';
import { loadStripe } from '@stripe/stripe-js';
import './Plans.css';

const Plans = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);

  // ? Using UseEffect Hooks to fetch the Product (Plans) details from Firabase cloudfare

  useEffect(() => {
    db.collection('products')
      .where('active', '==', true)
      .get()
      .then(querySnapShot => {
        const products = {};

        querySnapShot.forEach(async productDoc => {
          products[productDoc.id] = productDoc.data();

          const priceSnap = await productDoc.ref.collection('prices').get();
          priceSnap.docs.forEach(price => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  const loadCheckout = async priceId => {
    const docRef = await db
      .collection('customers')
      .doc(user.uid)
      .collection('checkout_sessions')
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async snap => {
      const { error, sessionId } = snap.data();

      if (error) {
        // ? Show an error to your customer and
        // ? Inspect your Cloud function logs in the firebase console

        alert(`An error occured: ${error.message}`);
      }

      if (sessionId) {
        //? We have a session, let's redirect to Checkout
        //? Init Stripe

        const stripe = await loadStripe(
          'sk_test_51Irn4ESHZzefkvSdQ5SxiKEdlpVC4JluLx0gz52NLQPzJHrcvRxzVMpnlpLfkaGlG10n46cSLinKR4dlqVSkndU700mO2oSUxu'
        );

        stripe.redirectToCheckout({ sessionId });
      }
    });
  };
  return (
    <div className="plans">
      {Object.entries(products).map(([productId, productData]) => {
        // TODO Add Some logic to check weather user has subscription or not...
        console.log(productData.prices.priceId);
        return (
          <div className="plans__plan" key={productId}>
            <div className="plans__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button onClick={() => loadCheckout(productData.prices.priceId)}>
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Plans;

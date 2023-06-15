import React, { useState } from "react";
import { API } from "aws-amplify";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import { onError } from "../../lib/errorLib";
import config from "../../config";
import { Elements } from "@stripe/react-stripe-js";
import BillingForm from "../../components/BillingForm/BillingForm";
import "./Settings.css";

export default function Settings() {
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const stripePromise = loadStripe(config.STRIPE_KEY);

  function billUser(details: any) {
    return API.post("notes", "/billing", {
      body: details,
    });
  }

  async function handleFormSubmit(storage: any, { token, error }: any) {
    if (error) {
      onError(error);
      return;
    }

    setIsLoading(true);

    try {
      await billUser({
        storage,
        source: token.id,
      });

      alert("Your card has been charged successfully!");
      nav("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  return (
    <div className="Settings">
      <Elements stripe={stripePromise}>
        <BillingForm isLoading={isLoading} onSubmit={handleFormSubmit} />
      </Elements>
    </div>
  );
}

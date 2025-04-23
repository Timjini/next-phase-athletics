// /src/services/paymentClientService.ts
export const createCheckoutSession = async (formData: any) => {
    console.log("Creating Stripe Checkout session with form data:", formData);
    const res = await fetch("/api/checkout/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Failed to create Stripe Checkout Session");
    }
  
    return await res.json();
  };
  
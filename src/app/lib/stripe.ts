export const createCheckoutSession = async (data: unknown) => {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log("response", res)
      if (!res.ok) throw new Error("Failed to create Stripe Checkout Session");
    
      return await res.json();
    };
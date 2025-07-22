function PayButton() {
  return (
    <>
      <button className="paybtn" onClick={handleStripeCheckout}>
        Buy Now!
      </button>
    </>
  );
}

async function handleStripeCheckout(): Promise<void> {
  console.log("checkout....");

  const apiUrl = import.meta.env.VITE_API_URL;
  fetch(`${apiUrl}/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      line_items: [
        {
          price: "price_1Rf37sL0NTCtB400x8nnFg9P",
          quantity: 1,
        },
      ],
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        console.error("No URL returned:", data);
      }
    })
    .catch((err) => {
      console.error("Checkout session error:", err);
    });
}

export default PayButton;

import "./App.css";
import PayButton from "./components/PayButton";

function App() {
  return (
    <>
      <div className="container">
        <div className="cta">
          <h1>Lightpay Demo</h1>
          <p>
            Experience a smooth <span className="bold">Stripe Checkout</span>{" "}
            flow with just one click.
          </p>
          <PayButton></PayButton>
        </div>
        <div className="credits">
          <small>
            Built with ❤️ using React, Vite, Stripe, Netlify, and Railway.
          </small>
        </div>
      </div>
    </>
  );
}

export default App;

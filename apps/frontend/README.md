# Lightpay Demo UI

**Lightpay Demo UI** is a simple Vite-based frontend for testing and showcasing Stripe Checkout integrations using the Lightpay backend.

This project is part of the Lightpay demo stack:

- 🔧 [lightpay](https://github.com/yourusername/lightpay): A Node.js + Express backend that handles Stripe Checkout sessions
- 🖥️ lightpay-demo-ui: This Vite-powered frontend for launching test payments

---

## Live Demo

👉 [lightpaydemo.netlify.app](https://lightpaydemo.netlify.app)  
🔗 Connected to: [`https://lightpay-production.up.railway.app`](https://lightpay-production.up.railway.app)

---

## 🧰 Tech Stack

- [Vite](https://vitejs.dev/) — frontend tooling
- [TypeScript](https://www.typescriptlang.org/) — typed components
- [Stripe Checkout](https://stripe.com/docs/checkout) — payments UI
- [Netlify](https://www.netlify.com/) — deployment

---

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/lightpay-demo-ui.git
cd lightpay-demo-ui
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set environment variable

Create a .env file:

```env
VITE_API_URL=https://your-lightpay-backend-url.up.railway.app
```

### 4. Run locally

```bash
npm run dev
```

Visit http://localhost:5173

## Deploying to Netlify

Connect this repo to Netlify.

Set environment variable VITE_API_URL in the Netlify dashboard.

Build command: npm run build
Publish directory: dist

Deploy and test it live!

## Development Features

Click the button to initiate a payment

Redirects to a live Stripe checkout session

## Backend Requirements

Make sure you're running or deploying the Lightpay backend, and that it exposes a POST /checkout-session route.

Example Express setup:

```ts
app.post("/checkout-session", async (req, res) => {
  // Stripe checkout logic
});
```

Also configure CORS to allow requests from your frontend's domain.

## License

MIT — free to use, remix, and extend.

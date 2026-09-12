import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Home.jsx"),
  route("shop", "routes/Shop.jsx"),
  route("about", "routes/About.jsx"),
  route("cart", "routes/Cart.jsx"),
  route("checkout", "routes/Checkout.jsx"),
  route("contact", "routes/Contact.jsx"),
  route("faq", "routes/FAQ.jsx"),
  route("login", "routes/Login.jsx"),
  route("register", "routes/Register.jsx"),
  route("reseller", "routes/Reseller.jsx"),
  route("dashboard", "routes/Dashboard.jsx"),
  route("forgot-password", "routes/ForgotPassword.jsx"),
  route("reset-password", "routes/ResetPassword.jsx"),
  route("vs-viagra", "routes/VaromaxVsViagra.jsx"),
] satisfies RouteConfig;
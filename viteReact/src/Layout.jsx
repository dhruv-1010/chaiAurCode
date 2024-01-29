import { Outlet } from "react-router-dom";
import Footer from "./RouterComponents/Footer";
import Header from "./RouterComponents/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

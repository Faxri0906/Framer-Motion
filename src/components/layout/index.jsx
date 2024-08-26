import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SmoothScroll from "../shared/SmoothScroll";
import { AnimatePresence } from "framer-motion";

export default function Layout() {
  return (
    <SmoothScroll>
      <Navbar />
      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
    </SmoothScroll>
  );
};
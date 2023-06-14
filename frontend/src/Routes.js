import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />;
    </Routes>
  );
}

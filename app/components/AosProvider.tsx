"use client";

import AOS from "aos";
import { useEffect } from "react";

export default function AosProvider() {
  useEffect(() => {
    AOS.init({
      duration: 720,
      easing: "ease-out-cubic",
      once: true,
      offset: 80
    });
  }, []);

  return null;
}

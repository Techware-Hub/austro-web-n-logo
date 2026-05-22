import Image from "next/image";
import logo from "./assets/images/logo/Austro Web-N-Logo-Header.png";

export default function Loading() {
  return (
    <div className="route-loader" role="status" aria-live="polite">
      <Image src={logo} alt="Austro Web & Logo" className="route-loader-logo" priority />
      <span className="route-loader-spinner" aria-hidden="true" />
      <span className="route-loader-text">Loading</span>
    </div>
  );
}

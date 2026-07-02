"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/images/logo/Austro Web-N-Logo-Header.png";
import { navItems, serviceMenuItems } from "../content";
import { useDiscountPopup } from "./PopupProvider";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { openPopup } = useDiscountPopup();

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const closeDrawer = () => setOpen(false);

  const handleStartProject = () => {
    closeDrawer();
    openPopup();
  };

  return (
    <>
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Austro Web & Logo home">
        <Image src={logo} alt="Austro Web N Logo" className="brand-logo" priority />
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) =>
          item.label === "Services" ? (
            <div className="nav-dropdown" key={item.href}>
              <Link href={item.href}>{item.label}</Link>
              <div className="services-menu" aria-label="Services submenu">
                {serviceMenuItems.map((service) => (
                  <Link href={service.href} key={service.href}>{service.label}</Link>
                ))}
              </div>
            </div>
          ) : (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          )
        )}
      </nav>

      <button type="button" className="quote-link" onClick={handleStartProject}>Start a Project</button>

      <button
        type="button"
        className="nav-toggle"
        aria-label="Open navigation menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <Menu size={24} aria-hidden="true" />
      </button>
    </header>

      <div
        className={`nav-overlay${open ? " is-open" : ""}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      <aside className={`nav-drawer${open ? " is-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!open}>
        <div className="nav-drawer-head">
          <Image src={logo} alt="Austro Web N Logo" className="nav-drawer-logo" />
          <button type="button" className="nav-drawer-close" aria-label="Close navigation menu" onClick={closeDrawer}>
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <nav className="nav-drawer-links" aria-label="Mobile navigation links">
          {navItems.map((item) =>
            item.label === "Services" ? (
              <div className="nav-drawer-group" key={item.href}>
                <button
                  type="button"
                  className={`nav-drawer-sub-toggle${servicesOpen ? " is-open" : ""}`}
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((value) => !value)}
                >
                  Services <ChevronDown size={18} aria-hidden="true" />
                </button>
                <div className={`nav-drawer-sublinks${servicesOpen ? " is-open" : ""}`}>
                  {serviceMenuItems.map((service) => (
                    <Link href={service.href} key={service.href} onClick={closeDrawer}>
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link href={item.href} key={item.href} className="nav-drawer-link" onClick={closeDrawer}>
                {item.label}
              </Link>
            )
          )}
          <button type="button" className="button primary nav-drawer-cta" onClick={handleStartProject}>
            Start a Project
          </button>
        </nav>
      </aside>
    </>
  );
}

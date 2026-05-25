"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type PopupContextValue = {
  open: boolean;
  openPopup: () => void;
  closePopup: () => void;
};

const PopupContext = createContext<PopupContextValue | null>(null);

export function PopupProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openPopup = useCallback(() => setOpen(true), []);
  const closePopup = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ open, openPopup, closePopup }), [open, openPopup, closePopup]);

  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>;
}

export function useDiscountPopup(): PopupContextValue {
  const ctx = useContext(PopupContext);
  if (!ctx) throw new Error("useDiscountPopup must be used within <PopupProvider>");
  return ctx;
}

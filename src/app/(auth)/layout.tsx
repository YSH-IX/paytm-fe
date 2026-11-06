import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <main className="bg-neutral-100 overflow-hidden">{children}</main>;
}

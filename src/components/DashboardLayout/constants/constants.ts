export type NavItems = "dashboard" | "kanban";
import { LayoutDashboard, SquareKanban } from "lucide-react";

export const NAV_TEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "kanban", label: "Kanban", icon: SquareKanban },
] as const;

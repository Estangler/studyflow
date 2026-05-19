import {
  BowArrow,
  ChevronDown,
  ChevronUp,
  ChevronsLeft,
  ChevronsRight,
  Settings,
  LogOut,
} from "lucide-react";
import useAuth from "../../hooks/useAuth";
import { useState, type ReactNode } from "react";
import { NAV_TEMS, type NavItems } from "./constants/constants";
import AddTaskModal from "../../features/kanban/components/AddTaskModal";
import useTasks from "../../hooks/useTasks";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { currentUser, logout } = useAuth();
  const [userMenu, setUserMenu] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState<NavItems>("dashboard");
  const { openAddTaskModal, isAddTaskModalOpen, onAddTask, closeAddTaskModal } =
    useTasks();

  const initials =
    (currentUser?.name ?? "")
      .split(" ")
      .filter(Boolean) // remove espaços duplos
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "?"; // fallback se resultado for string vazia

  return (
    <div className="h-dvh flex">
      <aside
        className={`hidden h-full flex-col border-r border-border bg-card transition-all duration-300 md:flex ${collapsed ? "w-16" : "w-64"}`}
      >
        <div
          className={`flex h-14 items-center border-b border-border ${
            collapsed ? "justify-center px-0" : "px-4"
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 shrink-0 rounded-lg flex items-center justify-center bg-primary text-primary-foreground">
              <BowArrow size={16} />
            </div>
            {!collapsed && (
              <div>
                <p className="font-semibold text-sm">StudyFlow</p>
                <p className="text-[10px] text-muted-foreground uppercase">
                  system · v1.0
                </p>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-2">
          {!collapsed && (
            <p className="px-2 pb-2 pt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Workspace
            </p>
          )}

          <ul className="space-y-1.5">
            {NAV_TEMS.map((item) => {
              const isActive = activeItem === item.id;
              const Icon = item.icon;

              return (
                <li key={item.id}>
                  <button
                    className={`relative flex w-full items-center gap-3 px-3 py-2 text-sm transition-all duration-300  focus:outline-none ${isActive ? "bg-primary/15 text-foreground ring-ring ring-2" : "hover:bg-accent-foreground/10 hover:text-accent-foreground text-muted-foreground"} ${collapsed ? "justify-center" : ""} capitalize`}
                    onClick={() => setActiveItem(item.id)}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-r bg-primary" />
                    )}

                    <Icon
                      size={18}
                      className={`
                      transition-colors duration-300
                      ${isActive ? "text-primary" : ""}
                     `}
                    />

                    {!collapsed && (
                      <span className="font-medium">{item.label}</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="border-t border-border p-2">
          {collapsed ? (
            <div className="relative flex items-center justify-center">
              <button
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary to-success text-xs font-semibold text-primary-foreground cursor-pointer hover:bg-accent-foreground/10 hover:text-accent-foreground"
                onClick={() => setUserMenu(!userMenu)}
              >
                {initials}
              </button>
              {userMenu && (
                <div className="absolute bottom-full left-0 right-0 z-50 mb-3 overflow-hidden rounded-md border border-border bg-popover shadow-xl">
                  <button className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-all hover:bg-accent-foreground/10 hover:text-accent-foreground">
                    <Settings size={16} />
                  </button>
                  <div className="border-t border-border" />
                  <button
                    className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-all 
              text-destructive hover:bg-accent-foreground/10 hover:font-semibold"
                    onClick={logout}
                  >
                    <LogOut size={16} />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="relative">
              <button
                className="flex w-full items-center gap-2.5 rounded-md p-2 text-left transition-all duration-300 hover:bg-accent-foreground/10 hover:text-accent-foreground"
                onClick={() => setUserMenu(!userMenu)}
              >
                <p className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary to-success text-xs font-semibold text-primary-foreground">
                  AD
                </p>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground capitalize">
                    {currentUser?.name}
                  </p>
                  <p className="truncate text-[11px] font-medium text-muted-foreground">
                    {currentUser?.email}
                  </p>
                </div>
                <div>
                  {userMenu ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </div>
              </button>
              {userMenu && (
                <div className="absolute bottom-full left-0 right-0 z-50 mb-3 overflow-hidden rounded-md border border-border bg-popover shadow-xl">
                  <button className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-all hover:bg-accent-foreground/10 hover:text-accent-foreground">
                    Configurações
                  </button>
                  <div className="border-t border-border" />
                  <button
                    className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-all 
              text-destructive hover:bg-accent-foreground/10 hover:font-semibold"
                    onClick={logout}
                  >
                    Sair
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 shrink-0 border-b border-border flex items-center justify-between gap-3 bg-card/40 px-4 backdrop-blur-xl">
          <button
            className="rounded-md p-1.5 text-muted-foreground transition-all duration-300 hover:bg-accent-foreground/10 hover:text-foreground flex items-center justify-center cursor-pointer"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <ChevronsRight /> : <ChevronsLeft />}
          </button>
          <button
            onClick={openAddTaskModal}
            className="bg-primary text-foreground rounded-md p-2 text-sm"
          >
            AddTask
          </button>
        </header>
        <AddTaskModal
          onAddTask={onAddTask}
          isAddTaskModalOpen={isAddTaskModalOpen}
          closeAddTaskModal={closeAddTaskModal}
        />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

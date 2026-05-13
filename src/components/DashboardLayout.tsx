import type { ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { currentUser, logout } = useAuth();
  return (
    <div className="flex flex-col h-dvh">
      <div className="grid grid-cols-4 flex-1">
        <aside className="border-r border-slate-200 flex flex-col justify-between px-2 py-4 shadow-gray-400 shadow-md">
          <h1 className="text-xl font-semibold">StudyFlow</h1>

          <nav>
            <ul>
              <li>
                <button className="bg-green-600/40 rounded-lg px-2 py-1 font-semibold text-xs w-full text-start">
                  Kanban
                </button>
              </li>
            </ul>
          </nav>

          <div className="flex justify-between">
            <div>
              <p className="capitalize">{currentUser?.name}</p>
              <p className="capitalize text-xs">front end developer</p>
            </div>
          </div>
        </aside>

        <div className="col-span-3  flex flex-col ">
          <header className="flex justify-between py-2 h-16 border-b border-slate-200 px-6 items-center sticky top-0 z-50 shadow-gray-400 shadow-md/20">
            <h2>Kanban</h2>
            <button
              onClick={logout}
              className="bg-red-600/80 rounded-lg px-2 py-1 font-semibold  cursor-pointer hover:bg-red-600/60 text-slate-50"
            >
              Sair
            </button>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}

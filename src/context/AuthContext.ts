import { createContext } from "react";
import type { IContext } from "../types/context";

export const AuthContext = createContext<IContext | null>(null);

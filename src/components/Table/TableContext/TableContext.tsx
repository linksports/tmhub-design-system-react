"use client";

import { createContext, useContext } from "react";
import { TableContextType } from "./TableContext.types";

const TableContext = createContext<TableContextType | null>(null);
export const TableProvider: React.FC<TableContextType> = ({
  children,
  ...value
}) => <TableContext.Provider value={value}>{children}</TableContext.Provider>;

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context)
    throw new Error("useTableContext must be used within TableProvider");
  return context as TableContextType;
};

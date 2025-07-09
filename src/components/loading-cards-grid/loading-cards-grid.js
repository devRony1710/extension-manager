import { jsx as _jsx } from "react/jsx-runtime";
import { Skeleton } from "@mui/material";
import styles from "./loading-cards-grid.module.css";
export const LoadingCardsGrid = () => {
    return (_jsx("section", { className: styles["loadingCardsGridContainer"], children: Array.from({ length: 9 }).map((_, index) => (_jsx("div", { children: _jsx(Skeleton, { sx: { backgroundColor: "hsl(225, 23%, 24%)", opacity: 0.2 }, variant: "rounded", width: 500, height: 200 }) }, index))) }));
};

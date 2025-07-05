import { Skeleton } from "@mui/material";
import styles from "./loading-cards-grid.module.css";

export const LoadingCardsGrid = () => {
  return (
    <section className={styles["loadingCardsGridContainer"]}>
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index}>
          <Skeleton
            sx={{ backgroundColor: "hsl(225, 23%, 24%)", opacity: 0.2 }}
            variant="rounded"
            width={500}
            height={200}
          />
        </div>
      ))}
    </section>
  );
};

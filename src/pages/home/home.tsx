import { Filters } from "@/components/filters/filters";
import styles from "./home.module.css";
import { FILTERS_OPTIONS } from "@/lib/constants/general-constants";
import { OptionType } from "@/components/filters/filters.types";

export const Home = () => {
  // MOVER LUEGO
  const getActiveOption = (option: OptionType) => {
    console.log(option);
  };

  return (
    <section className={styles["homeMainContainer"]}>
      <h1 className={styles["homeTitle"]}>Extension List</h1>

      <Filters options={FILTERS_OPTIONS} getActiveOption={getActiveOption} />
    </section>
  );
};

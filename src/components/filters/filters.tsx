import { FC, useEffect, useState } from "react";
import { FiltersProps, OptionType } from "./filters.types";
import styles from "./filters.module.css";

export const Filters: FC<FiltersProps> = ({ options, getActiveOption }) => {
  const [optionsCopy, setOptionsCopy] = useState<OptionType[]>(options);

  const handleFilterClick = (option: OptionType) => {
    // Si la opción ya está activa, no hace nada evitando render innecesario
    if (option.active) return;

    setOptionsCopy((prev) =>
      prev.map((item) =>
        item.id === option.id
          ? { ...item, active: true }
          : { ...item, active: false }
      )
    );
  };

  useEffect(() => {
    getActiveOption(optionsCopy.find((option) => option.active));
  }, [optionsCopy, getActiveOption]);

  return (
    <section className={styles["filtersContainer"]}>
      {optionsCopy.map((option) => (
        <button
          // aria-pressed ayuda a la accesibilidad a los lectores de pantalla para conocer el estado de la opción (activa o inactiva)
          aria-pressed={option.active}
          key={option.id}
          onClick={() => handleFilterClick(option)}
          className={`${styles["filterButton"]} ${
            option.active
              ? styles["filterButtonActive"]
              : styles["filterButtonDefault"]
          }`}
        >
          {option.label}
        </button>
      ))}
    </section>
  );
};

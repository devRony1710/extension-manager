import { FC, useEffect, useState } from "react";
import { FiltersProps, OptionType } from "./filters.types";

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
    <section>
      <div>
        {optionsCopy.map((option) => (
          <button
            aria-pressed={option.active}
            key={option.id}
            onClick={() => handleFilterClick(option)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </section>
  );
};

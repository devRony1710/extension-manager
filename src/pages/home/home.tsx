import { Filters } from "@/components/filters/filters";
import styles from "./home.module.css";
import { FILTERS_OPTIONS } from "@/lib/constants/general-constants";
import { OptionType } from "@/components/filters/filters.types";
import { useQuery } from "@tanstack/react-query";
import { GET_EXTENSIONS_LIST } from "@/lib/constants/request-keys";
import {
  ExtensionListDataResponse,
  getExtensionsList,
} from "@/api/get/get-extensions-list";
import { useEffect, useState } from "react";
import { ExtensionCardList } from "@/components/extension-card-list/extension-card-list";
import { useThemeContext } from "@/hooks/use-theme-context";

export const Home = () => {
  const { isDarkTheme } = useThemeContext();
  const [filterSelected, setFilterSelected] = useState<string | null>("all");
  const [extensionsData, setExtensionsData] = useState<
    ExtensionListDataResponse[]
  >([]);

  const { data, isLoading } = useQuery({
    queryKey: [GET_EXTENSIONS_LIST],
    queryFn: () => getExtensionsList(),
  });

  // MOVER LUEGO
  const getActiveOption = (option: OptionType) => {
    setFilterSelected(option.value);
  };

  const handleOnToggle = (extensionName: string) => {
    setExtensionsData((prev) =>
      prev.map((item) =>
        item.name === extensionName
          ? { ...item, isActive: !item.isActive }
          : item
      )
    );
  };

  useEffect(() => {
    if (filterSelected === "all") {
      setExtensionsData(data);
    }

    if (filterSelected === "active") {
      setExtensionsData(data.filter((item) => item.isActive));
    }

    if (filterSelected === "inactive") {
      setExtensionsData(data.filter((item) => !item.isActive));
    }
  }, [filterSelected, data]);

  return (
    <section className={styles["homeContainer"]}>
      <div className={styles["homeMainContainer"]}>
        <h1
          className={`${styles["homeTitle"]} ${
            isDarkTheme ? styles["homeTitleDark"] : styles["homeTitleLight"]
          }`}
        >
          Extension List
        </h1>

        <Filters options={FILTERS_OPTIONS} getActiveOption={getActiveOption} />
      </div>

      <ExtensionCardList
        extensionsData={extensionsData}
        handleOnToggle={handleOnToggle}
        isLoading={isLoading}
      />
    </section>
  );
};

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Filters } from "@/components/filters/filters";
import styles from "./home.module.css";
import { FILTERS_OPTIONS } from "@/lib/constants/general-constants";
import { useQuery } from "@tanstack/react-query";
import { GET_EXTENSIONS_LIST } from "@/lib/constants/request-keys";
import { getExtensionsList, } from "@/api/get/get-extensions-list";
import { useEffect, useState } from "react";
import { ExtensionCardList } from "@/components/extension-card-list/extension-card-list";
import { useThemeContext } from "@/hooks/use-theme-context";
export const Home = () => {
    const { isDarkTheme } = useThemeContext();
    const [filterSelected, setFilterSelected] = useState("all");
    const [extensionsData, setExtensionsData] = useState([]);
    const { data, isLoading } = useQuery({
        queryKey: [GET_EXTENSIONS_LIST],
        queryFn: () => getExtensionsList(),
    });
    // MOVER LUEGO
    const getActiveOption = (option) => {
        setFilterSelected(option.value);
    };
    const handleOnToggle = (extensionName) => {
        setExtensionsData((prev) => prev.map((item) => item.name === extensionName
            ? { ...item, isActive: !item.isActive }
            : item));
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
    return (_jsxs("section", { className: styles["homeContainer"], children: [_jsxs("div", { className: styles["homeMainContainer"], children: [_jsx("h1", { className: `${styles["homeTitle"]} ${isDarkTheme ? styles["homeTitleDark"] : styles["homeTitleLight"]}`, children: "Extension List" }), _jsx(Filters, { options: FILTERS_OPTIONS, getActiveOption: getActiveOption })] }), _jsx(ExtensionCardList, { extensionsData: extensionsData, handleOnToggle: handleOnToggle, isLoading: isLoading })] }));
};

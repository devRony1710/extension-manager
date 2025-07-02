export type OptionType = {
  label: string;
  value: string;
  id: string;
  active: boolean;
};

export interface FiltersProps {
  options: OptionType[];
  getActiveOption: (option: OptionType) => void;
}

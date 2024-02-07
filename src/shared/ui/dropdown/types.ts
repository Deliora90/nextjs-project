export type MenuItem = {
  value: string;
  label?: string;
  icon?: React.ReactNode;
};

export type DropdownProps = {
  items: MenuItem[];
  label?: string;
  placeholder?: string;
  current?: string;
  title?: React.ReactNode;
  onClick?: (value: string) => void;
};

export type DropdownItemProps = {
  item: MenuItem;
  isCurrent?: boolean;
  onClick?: (value: string) => void;
};

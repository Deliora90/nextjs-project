import React from "react";
import { Menu } from "@headlessui/react";
import { DropdownItemProps } from "./types";

export const DropdownItem = ({
  item,
  isCurrent,
  onClick,
}: DropdownItemProps) => {
  const handleClick = () => {
    onClick?.(item.value);
  };

  return (
    <Menu.Item>
      {({ active }) => (
        <button
          onClick={handleClick}
          className={`${active ? "bg-gray-100" : "bg-white"} ${
            isCurrent ? "text-green-500" : "text-green-900"
          } group flex min-w-[50px] items-center gap-x-2 rounded px-2 py-2 text-sm`}
        >
          {!!item.icon && <span>{item.icon}</span>}
          {item.label}
        </button>
      )}
    </Menu.Item>
  );
};

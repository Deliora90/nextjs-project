"use client";
import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { DropdownProps } from "./types";
import { DropdownItem } from "./dropdown-item";

export const Dropdown = ({ current, items, onClick }: DropdownProps) => {
  const currentItem = items.find((item) => item.value === current);
  return (
    <Menu as="div" className="relative inline-block m-1 text-left">
      {({ open }) => (
        <>
          <Menu.Button className="inline-flex min-w-[50px] justify-center rounded border-solid border-grey-500 border bg-transparent px-2 py-2 text-sm font-medium text-green-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            {!!currentItem && (
              <div className="flex items-center gap-x-2">
                <span>{currentItem.icon}</span>
                {currentItem.label}
                <span>
                  {open ? (
                    <ChevronUpIcon className="-mr-1 ml-2 h-5 w-5 text-green-900" />
                  ) : (
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-green-900" />
                  )}
                </span>
              </div>
            )}
          </Menu.Button>
          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute w-fit right-0 mt-2s origin-top-right rounded bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              {items.map((item) => (
                <DropdownItem
                  key={item.value}
                  isCurrent={currentItem?.value === item.value}
                  item={item}
                  onClick={onClick}
                />
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

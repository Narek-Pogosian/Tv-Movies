import { cn } from "@/lib/utils";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronsUpDownIcon } from "lucide-react";
import React, { Fragment } from "react";

export const Select = Listbox;

interface SelectWrapper extends React.HTMLAttributes<HTMLDivElement> {}

export function SelectWrapper({
  children,
  className,
  ...props
}: SelectWrapper) {
  return (
    <div className={cn("relative", className)} {...props}>
      {children}
    </div>
  );
}

export function SelectButton({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <Listbox.Button
      id={id}
      className="relative w-full border cursor-pointer text-sm font-medium rounded bg-white dark:bg-white/5 py-2 pl-3 pr-10 text-left "
    >
      <span className="block truncate">{children}</span>
      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <ChevronsUpDownIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </span>
    </Listbox.Button>
  );
}

export function SelectOptions({ children }: { children: React.ReactNode }) {
  return (
    <Transition
      as={Fragment}
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Listbox.Options className="absolute z-10 mt-1 w-full bg-element shadow-lg rounded-lg p-1.5 text-base focus:outline-none sm:text-sm border">
        {children}
      </Listbox.Options>
    </Transition>
  );
}

export function SelectOption({
  children,
  value,
}: {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
}) {
  return (
    <Listbox.Option
      value={value}
      className={({ active }) =>
        `cursor-pointer m-0.5 font-medium rounded ${
          active ? "dark:bg-white/10 bg-neutral-400/10" : ""
        }`
      }
    >
      {({ selected }) => (
        <>
          <span
            className={`block rounded pointer-events-none py-1.5 pl-4  ${
              selected
                ? "bg-black text-white dark:bg-white dark:text-black"
                : ""
            }`}
          >
            {children}
          </span>
        </>
      )}
    </Listbox.Option>
  );
}

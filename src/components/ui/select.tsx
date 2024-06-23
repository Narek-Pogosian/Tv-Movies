import { Listbox, Transition } from "@headlessui/react";
import { ChevronsUpDownIcon } from "lucide-react";
import { Fragment } from "react";

export const Select = Listbox;

export function SelectWrapper({ children }: { children: React.ReactNode }) {
  return <div className="relative w-full">{children}</div>;
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
      className="relative w-full shadow shadow-slate-500/10 dark:shadow-[inset_0_1px_1px_1px_#ffffff08] cursor-pointer text-sm font-medium rounded dark:bg-white/5 bg-slate-400/5 py-2 pl-3 pr-10 text-left "
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
          active ? "dark:bg-white/10 bg-slate-400/10" : ""
        }`
      }
    >
      {({ selected }) => (
        <>
          <span
            className={`block rounded pointer-events-none py-1.5 pl-4  ${
              selected ? "bg-primary text-primary-foreground" : ""
            }`}
          >
            {children}
          </span>
        </>
      )}
    </Listbox.Option>
  );
}

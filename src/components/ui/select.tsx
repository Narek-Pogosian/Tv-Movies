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
      className="relative w-full cursor-pointer rounded-lg dark:bg-white/5 bg-slate-400/5 py-2 pl-3 pr-10 text-left "
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
      <Listbox.Options className="absolute z-10 mt-1 w-full bg-element shadow-lg rounded-lg py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border">
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
        `cursor-pointer ${active ? "dark:bg-white/5 bg-slate-400/5" : ""}`
      }
    >
      {({ selected }) => (
        <>
          <span
            className={`block pointer-events-none py-2 pl-4  ${
              selected
                ? "font-medium bg-slate-400/10 dark:bg-white/10"
                : "font-normal"
            }`}
          >
            {children}
          </span>
        </>
      )}
    </Listbox.Option>
  );
}

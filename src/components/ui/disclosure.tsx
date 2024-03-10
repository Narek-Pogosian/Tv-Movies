import { cn } from "@/lib/utils";
import { Disclosure } from "@headlessui/react";

type Props = {
  buttonText: string;
  children: JSX.Element | JSX.Element[];
  openByDefault?: boolean;
};

function MyDisclosure({ buttonText, children, openByDefault }: Props) {
  return (
    <Disclosure as="div" className="w-full xl:w-72" defaultOpen={openByDefault}>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={cn(
              "flex justify-between w-full p-4 bg-element border rounded",
              { "border-b-transparent rounded-b-none": open }
            )}
          >
            <span className="font-bold tracking-wider ">{buttonText}</span>
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
                fill="currentColor"
              />
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pb-4 border border-t-transparent bg-element">
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default MyDisclosure;

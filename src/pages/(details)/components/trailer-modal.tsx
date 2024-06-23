import { Button } from "@/components/ui/button";
import { Video } from "@/lib/types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const TestModal = ({ trailer }: { trailer: Video }) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Button onClick={openModal}>
        <img src="/play.svg" alt="" />
        <span>Play Trailer</span>
      </Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="fixed inset-0">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Dialog.Panel className="w-full relative max-w-4xl rounded-lg bg-element border py-10 h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden text-left align-middle transition-all transform bg-black shadow-xl">
                <button
                  className="absolute text-xl top-1 right-2"
                  aria-label="close"
                  onClick={closeModal}
                >
                  &#x2715;
                </button>
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${trailer.key}`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default TestModal;

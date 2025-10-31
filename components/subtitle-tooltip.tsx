import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function SubtitleTooltip({
  label,
  header,
  children,
  onClick,
  disabled = false,
}: {
  label: string;
  children: React.ReactNode;
  header: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover.Root open={isOpen && !disabled} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          aria-label={`Open Chapter: ${header}`}
          data-umami-event={`${header} Button Clicked`}
          //   title={`Open Chapter: ${header}`}
          className="flex gap-2 items-center group cursor-pointer hover:underline"
          onMouseEnter={() => !disabled && setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          onClick={onClick}
        >
          {children}
        </button>
      </Popover.Trigger>
      <AnimatePresence>
        {isOpen && !disabled && (
          <Popover.Portal forceMount>
            <Popover.Content
              side="right"
              sideOffset={8}
              asChild
              className="z-50"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: -5 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -5 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="rounded-lg bg-primary p-3 shadow-md text-sm text-stone-800 
                  font-body focus-visible:outline-none max-w-48"
              >
                {label}
                <Popover.Arrow className="fill-primary" height={8} width={16} />
              </motion.div>
            </Popover.Content>
          </Popover.Portal>
        )}
      </AnimatePresence>
    </Popover.Root>
  );
}

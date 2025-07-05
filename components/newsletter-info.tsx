import * as Popover from "@radix-ui/react-popover";
import { FaInfoCircle } from "react-icons/fa";

export default function NewsletterInfo() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          type="button"
          aria-describedby="newsletter-info"
          aria-label="Learn more about the newsletter"
          title="Learn more about the newsletter"
          className="cursor-pointer text-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-full p-1"
        >
          <FaInfoCircle aria-hidden="true" focusable="false" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          id="newsletter-info-content"
          side="top"
          sideOffset={4}
          className={`z-50 rounded-lg bg-primary p-3 shadow-md text-sm text-stone-800 
                  font-body w-64 focus-visible:outline-none`}
        >
          <p className="mb-1">
            <strong>Every other Wednesday</strong> I share what I&apos;ve been
            building, creating or thinking about with a few hundred readers.
            Come join us!
          </p>
          <p className="mb-1">
            You can check out{" "}
            <a
              href="https://blog.jonadrew.com/profile"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-secondary-text hover:text-secondary"
              data-umami-event={`Past Posts Clicked`}
              title="View past newsletter posts"
              aria-label="View past newsletter posts on Jonadrew’s blog"
            >
              past posts here
            </a>
            .
          </p>
          <Popover.Arrow className="fill-primary" height={8} width={16} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

import { FaLink } from "react-icons/fa6";
import React from "react";

export function InlineLinkListItem({
  label,
  links,
  accentClass,
}: {
  label: string;
  links: string[];
  accentClass?: string;
}) {
  return (
    <li className="flex items-center gap-2">
      - <span>{label}:</span>
      <span className="flex gap-1">
        {links.map((href, i) => (
          <a
            key={i}
            data-umami-event={`__Aux Link Clicked: ${label}`}
            href={href}
            title={links.length > 1 ? `${label} link ${i + 1}` : label}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:opacity-80 ${accentClass}`}
          >
            <FaLink />
          </a>
        ))}
      </span>
    </li>
  );
}

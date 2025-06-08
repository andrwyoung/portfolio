"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const NEWSLETTER_FORM_ID = "YOUR_FORM_ID";
const CONVERTKIT_API_KEY = "YOUR_PUBLIC_API_KEY";

function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "invalid_email"
  >("idle");

  //   const activeBorderColor = active
  //     ? projectStyles[active]?.colors?.border || ""
  //     : "border-neutral-500";

  //   const activeHoverColor = active
  //     ? projectStyles[active]?.colors?.hover || ""
  //     : "hover:text-secondary";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    if (!validateEmail(email)) {
      setStatus("invalid_email");
      return;
    }

    try {
      const res = await fetch(
        `https://api.convertkit.com/v3/forms/${NEWSLETTER_FORM_ID}/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            api_key: CONVERTKIT_API_KEY,
            email,
          }),
        }
      );

      const data = await res.json();
      if (data.subscription) {
        setStatus("success");
        setEmail("");
      } else {
        throw new Error("Subscription failed");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col items-center gap-1 font-body">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row max-w-sm transition-all duration-200
        focus-within:ring-2 rounded-md focus-within:ring-stone-300 border-2 border-stone-600"
      >
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setStatus("idle");
          }}
          placeholder="Your email"
          className={` py-1.5 px-3 text-xs rounded-l-md 
            focus:outline-none     transition-all duration-200
          `}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`
            pl-2 pr-2.5 py-1 text-sm text-white
            rounded-r bg-stone-600 cursor-pointer
            transition-all duration-200
            ${status === "loading" ? "opacity-60" : ""}
            hover:text-stone-600 hover:bg-white
            `}
          title="Subscribe"
        >
          <FaArrowRight />
        </button>
      </form>
      {status === "success" && (
        <p className="text-green-600 text-xs">
          Yay! Check your email for confirmation.
        </p>
      )}
      {status === "error" && (
        <p className="text-rose-500 text-xs">
          Something went wrong. Please try again.
        </p>
      )}
      {status === "invalid_email" && (
        <p className="text-rose-500 text-xs">Please enter a valid email.</p>
      )}
    </div>
  );
}

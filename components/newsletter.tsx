"use client";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa6";
import NewsletterInfo from "./newsletter-info";

function validateEmail(email: string): boolean {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email.toLowerCase());
}

const COOLDOWN_KEY = "newsletter_signup_timestamp";
const COOLDOWN_MS = 60 * 1000;

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  //   const activeBorderColor = active
  //     ? projectStyles[active]?.colors?.border || ""
  //     : "border-neutral-500";

  //   const activeHoverColor = active
  //     ? projectStyles[active]?.colors?.hover || ""
  //     : "hover:text-secondary";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // rate limiting
    const lastSubmit = localStorage.getItem(COOLDOWN_KEY);
    if (lastSubmit && Date.now() - parseInt(lastSubmit, 10) < COOLDOWN_MS) {
      setStatus("error");
      setErrorMessage("Too many attempts. Try again soon.");
      return;
    }

    setStatus("loading");

    if (email.trim() === "") {
      setStatus("error");
      setErrorMessage("Please enter an email");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email.");
      return;
    }

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.success) {
        localStorage.setItem(COOLDOWN_KEY, Date.now().toString());
        setStatus("success");
        setEmail("");
      } else {
        console.error("Subscription failed: ", data);
        throw new Error("Subscription failed");
      }
    } catch (e) {
      setStatus("error");
      console.error("Email signup failed: ", e);
      setErrorMessage("Something went wrong. Please try again");
    }
  };

  return (
    <div className="flex flex-col items-center gap-1 font-body">
      <div className="flex items-center gap-2">
        <form
          onSubmit={handleSubmit}
          className="flex flex-row max-w-sm transition-all duration-200
        focus-within:ring-2 rounded-md focus-within:ring-stone-300 border-2 border-stone-600"
        >
          <input
            id="newsletter-input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus("idle");
            }}
            placeholder="Sign up for the newsletter"
            className={` py-1.5 px-3 text-xs rounded-l-md 
            focus:outline-none transition-all duration-200 placeholder:text-stone-500`}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className={`
            pl-2.5 pr-2.5 py-1 text-sm text-white
            rounded-r bg-stone-600 cursor-pointer
            transition-all duration-200
            ${status === "loading" ? "opacity-60" : ""}
            hover:text-stone-600 hover:bg-white
            `}
            title="Subscribe"
            data-umami-event="Subscribe Button Clicked"
          >
            <FaEnvelope />
          </button>
        </form>
        <NewsletterInfo />
      </div>
      {status === "success" && (
        <p className="text-green-600 text-xs">
          Yay! Check your email for confirmation.
        </p>
      )}
      {status === "error" && (
        <p className="text-rose-500 text-xs">{errorMessage}</p>
      )}
    </div>
  );
}

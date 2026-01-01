import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="
        w-full
        px-4
        py-2
        border
        rounded-md
        outline-none
        focus:ring-2
        focus:ring-black
      "
    />
  );
}

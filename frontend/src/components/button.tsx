import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className="
        w-full
        bg-black
        text-white
        py-2
        rounded-md
        hover:bg-gray-800
        transition
      "
    />
  );
}

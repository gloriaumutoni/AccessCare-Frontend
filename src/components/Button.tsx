import clsx from "clsx"
import { ComponentProps, PropsWithChildren } from "react"

type Props = PropsWithChildren & ComponentProps<"button">

export default function Button({ className, children }: Props) {
  return (
    <button
      className={clsx("bg-primary-400 cursor-pointer text-white", className)}
    >
      {children}
    </button>
  )
}

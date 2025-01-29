import clsx from "clsx"
import { ComponentProps } from "react"

interface Props extends ComponentProps<"input"> {
  label: string
}

function Input({ label, placeholder, type, className }: Props) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        className={clsx(
          "border rounded-xs bg-gray-100 py-1 border-primary-400 indent-3",
          className,
        )}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input

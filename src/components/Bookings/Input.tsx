import clsx from "clsx"
import { ComponentProps } from "react"
import { UseFormRegisterReturn } from "react-hook-form"

interface Props extends ComponentProps<"input"> {
  label?: string
  register?: UseFormRegisterReturn
  errorMessage?: string
}

function Input({
  label,
  placeholder,
  type,
  className,
  register,
  errorMessage,
}: Props) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        className={clsx(
          "border bg-gray-100 py-1 border-primary-400 indent-3 outline-none",
          className,
        )}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {errorMessage && <span className="text-red-600">{errorMessage}</span>}
    </div>
  )
}

export default Input

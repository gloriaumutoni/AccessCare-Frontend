import clsx from "clsx"
import { ComponentProps, PropsWithChildren } from "react"

type Props = PropsWithChildren & ComponentProps<"button">

interface ButtonProps extends Props {
  buttonType?: boolean
  title?: string
  text?: string
  imgSrc?: string
  alt?: string
}

export default function Button({
  title,
  text,
  imgSrc,
  alt,
  buttonType,
  className,
  children,
}: ButtonProps) {
  return (
    <>
      {buttonType ? (
        <div className="flex items-center cursor-pointer">
          <div className="p-3 rounded-lg bg-white w-2xs shadow-gray-500 shadow-2xs">
            <div className="flex">
              <img src={imgSrc} alt={alt} />
              <h1 className="text-md font-bold">{title}</h1>
            </div>
            <p>{text}</p>
          </div>
        </div>
      ) : (
        <button
          className={clsx(
            "bg-primary-400 cursor-pointer text-white",
            className,
          )}
        >
          {children}
        </button>
      )}
    </>
  )
}

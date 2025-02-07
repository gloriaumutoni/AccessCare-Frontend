import { ComponentProps } from "react"

interface Props extends ComponentProps<"div"> {
  title: string
  list: Array<string>
}

function List({ list, title }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold py-3">{title}</h2>
      <ul className="space-y-2">
        {list.map((links) => (
          <li key={links}>{links}</li>
        ))}
      </ul>
    </div>
  )
}

export default List

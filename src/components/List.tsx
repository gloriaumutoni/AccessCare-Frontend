import { ComponentProps } from "react"

interface Props extends ComponentProps<"div"> {
  title: string
  quickLinks: Array<string>
}

function List({ quickLinks, title }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold py-3">{title}</h2>
      <ul className="space-y-2">
        {quickLinks.map((links) => (
          <li key={links}>{links}</li>
        ))}
      </ul>
    </div>
  )
}

export default List

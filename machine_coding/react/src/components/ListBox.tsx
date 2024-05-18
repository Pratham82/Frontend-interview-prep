export interface IListBox {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films?: string[] | null
  species?: any[] | null
  vehicles?: string[] | null
  starships?: string[] | null
  created: string
  edited: string
  url: string
}

export interface IListBoxProps {
  items: IListBox[] | undefined
  activeIndex: number
}

export default function ListBox(props: IListBoxProps) {
  const { items = [], activeIndex } = props
  console.log('🚀 ~ ListBox ~ props:', props)

  if (!items) {
    return null
  }

  return (
    <ul
      style={{
        marginTop: 0,
        padding: 0,
        border: `1px solid white`,
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
      }}
    >
      {items.map((item, i) => (
        <li
          style={{
            listStyle: 'none',
            padding: '10px',
            borderBottom: i !== items.length - 1 ? '1px solid white' : 0,
            backgroundColor: activeIndex === i ? 'red' : '',
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  )
}

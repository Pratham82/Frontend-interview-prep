import { useState } from 'react'

interface IFileExplorerData {
  name: string
  type: string
  children?: IChildren[] | null
}
export interface IChildren {
  name: string
  type: string
  children?: IChildren[] | null
}

export default function FileExplorer({ data }: { data: IFileExplorerData }) {
  const { name = '', children, type = '' } = data
  const [collapse, setCollapse] = useState(false)
  const toggleCollapse = () => setCollapse(!collapse)

  if (type === 'file') {
    return <div>📄 &nbsp;{name}</div>
  }

  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <div
        style={{
          marginTop: 5,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Render top level parent i.e folder */}
        <div
          style={{
            marginLeft: 7,
            border: '1px solid white',
            cursor: 'pointer',
          }}
          onClick={toggleCollapse}
        >
          📁 &nbsp; {name}
        </div>
        {/* Render Children/Items inside the folder */}
        {collapse && (
          <div
            style={{
              paddingLeft: 20,
            }}
          >
            {children &&
              children.map((exp: IFileExplorerData) => {
                return <FileExplorer data={exp} />
              })}
          </div>
        )}
      </div>
    </div>
  )
}

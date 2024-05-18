import './App.css'
import { AutoCompleteSearch, ListBox } from './components'

function App() {
  return (
    <div className="container">
      <h1>Vite + React</h1>
      <AutoCompleteSearch
        id="personName"
        name="personName"
        label="Enter person name"
        placeholder="Enter you fav star wars character"
        autoComplete
        maxItems={5}
        styles={{
          label: {
            marginLeft: `2px`,
          },
          input: {
            padding: `10px`,
            marginTop: '10px',
            width: '400px',
          },
        }}
        debounceWait={500}
        listBox={(items, activeIndex) => (
          <ListBox items={items} activeIndex={activeIndex} />
        )}
        noItemsMessage={() => <div>No items found!!</div>}
        errorMessage={() => <div>Something went wrong</div>}
      />
    </div>
  )
}

export default App

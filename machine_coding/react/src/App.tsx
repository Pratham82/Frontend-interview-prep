import { Provider } from "react-redux"
import "./App.css"
import { AutoCompleteSearch, AutoCompleteSearchSimple, Comp10 } from "./components"
import { store } from "./redux-project/store/store"
import AnimatedBackground from "./components3/AnimatedBG"
import AutoCompleteSimpler from "./components/AutoCompleteSimpler"
import GithubComponent from "./components3/GithubComponent"

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Vite + React</h1>
        {/* <FileExplorer data={fileExplorerData} />
      <GoogleDrive data={fileExplorerData} /> */}
        {/* <Comp10 /> */}
        {/* <PokeAPIComponent /> */}
        {/* <AutoCompleteSearchSimple /> */}
        {/* <AutoCompleteSimpler /> */}
        <GithubComponent />
      </div>
      {/* <AnimatedBackground /> */}
    </Provider>
  )
}

export default App

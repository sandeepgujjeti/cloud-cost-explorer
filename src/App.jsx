import "./App.css"
import SideBar from './components/SideBar'
import GraphArea from './components/GraphArea'
import TableArea from './components/TableArea'
import { useState } from "react";
import { analysisTypes } from "./constants/contants"

const App = () => {
  const [analysisType, setAnalysisType] = useState(analysisTypes.team);

  return (
    <>
      <nav className="sidebar">
        {/* sidebar code goes here */}
        <SideBar analysisType={analysisType} setAnalysisType={setAnalysisType} />
      </nav>
      <main className="main-wrapper">
        <section className='graph-wrapper'>
          {/* Graph Area code goes here */}
          {/* <GraphArea analysisType={analysisType} setAnalysisType={setAnalysisType} /> */}
          <GraphArea analysisType={analysisType} setAnalysisType={setAnalysisType} />
          {/* <div className="dropdown">
            Dropdown code goes here
            <Dropdown setAnalysisType={setAnalysisType} />
          </div> */}
        </section>
        <div className="table">
          {/* table code goes here */}
          <TableArea setAnalysisType={setAnalysisType} />
        </div>
      </main>
    </>
  )
}

export default App
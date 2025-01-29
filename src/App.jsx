import "./App.css"
import SideBar from './components/SideBar'
import GraphArea from './components/GraphArea'
import Dropdown from './components/Dropdown'
import TableArea from './components/TableArea'

const App = () => {
  return (
    <>
      <nav className="sidebar">
        {/* sidebar code goes here */}
        <SideBar />
      </nav>
      <main className="main-wrapper">
        <section className='graph-wrapper'>
          <div className="graph-area">
            {/* Graph Area code goes here */}
            <GraphArea />
          </div>
          <div className="dropdown">
            {/* Dropdown code goes here */}
            <Dropdown />
          </div>
        </section>
        <div className="table">
          {/* table code goes here */}
          <TableArea />
        </div>
      </main>
    </>
  )
}

export default App
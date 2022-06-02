import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"

const Dashboard = () => {
  return (
    <>
    <div id="layout-wrapper">
      <Header/>
      <Sidebar/>
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
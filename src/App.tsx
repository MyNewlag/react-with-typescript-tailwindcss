
import { ToastContainer } from "react-toastify";
import AppContainer from "./component/container/AppContainer";
import Content from "./layout/content/Content";
import Header from "./layout/header/Header";
import Sidebar from "./layout/sidebar/Sidebar";

function App() {

  return (
    <AppContainer >
        <div className="dark:text-gray-100">
          <Content/>
          <Header />
          <Sidebar/>
      </div>
        <ToastContainer stacked/>
    </AppContainer>
  )
}

export default App
import { Route, Routes } from "react-router";
import Dashbords from "../../pages/dashbords/Dashbords";
import Categories from "../../pages/Categories/Categories";
import Taskes from "../../pages/taskes/Taskes";


const Content = () => {
    
    return (
        <div>
            <section id="content" 
            className="fixed top-0 left-0 w-full h-screen  pt-app_header_h md:pr-app_sidebar_w bg-gray-200
            dark:bg-gray-600 overflow-y-auto ">
                <div className="w-full p-4">

                    <Routes>
                        <Route path="/"  element={<Dashbords/>}/>
                        <Route path="/categories"  element={<Categories/>}/>
                        <Route path="/tasks"  element={<Taskes/>}/>
                    </Routes>

                </div>
        </section>
        </div>
    );
}

export default Content;

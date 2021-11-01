import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react"
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Home from './pages/Home';
import Login from './pages/Login';
import useToast from "Alerts";
import User from "pages/User";
import Courses from "pages/Courses";
import Test from "pages/CA";
import TestPage from "pages/TestPage";
import Result from "pages/Result";

export const ToastContext = React.createContext<any>(null)
function App() {
const { showAlert, Toast } = useToast();
const UserRoutes = ({location}) => (
  <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
            </Switch>
)
const AdminRoutes = ({location}) => (
  <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/ca" component={Test} />
              <Route exact path="/courses" component={Courses} />
              <Route exact path="/course/:id" component={Login} />
              <Route exact path="/user" component={User} />
              <Route exact path="/test/:userId" component={TestPage} />
              <Route exact path="/result/:courseId" component={Result} />
            </Switch>
)
  return (
    <>
          <ToastContext.Provider value={showAlert}>
      <AnimateSharedLayout>
        <BrowserRouter>
        <Route
        render={({location}) => (
          <AnimatePresence exitBeforeEnter>
          <Toast />
            {/* {
              localStorage?.token && localStorage?.token!==undefined ? <AdminRoutes location={location} /> : <UserRoutes location={location} />
            } */}
            <AdminRoutes location={location} />
          </AnimatePresence>
        )}
         />
        </BrowserRouter>
      </AnimateSharedLayout>
          </ToastContext.Provider>
    </>
  );
}

export default App;

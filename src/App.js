import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import { userValue } from "./Context";
import { useState } from "react";

import Login from "./Login";

export default function App() {
  const { user, login } = userValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <h1>
            <Login />
          </h1>
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
              {/* React-Router ->  Chat screen */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

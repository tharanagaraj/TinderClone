import React from "react";
import Header from "./components/Header/Header";
import TinderCards from "./components/TinderCards/TinderCards";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";
import Chats from "./components/Chats/Chats";
import Chat from "./components/Chat/Chat";
import ChatScreen from "./components/ChatScreen/ChatScreen";

import "./App.css";
import "./components/Header/Header.css";
import "./components/TinderCards/TinderCards.css";
import "./components/SwipeButtons/SwipeButtons.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          // : is a wildcard, indicating that any value there is valid
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen> </ChatScreen>
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          /* Default at the bottom */
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
        {/* Header */}
        {/* Cards */}
        {/* Buttons */}
        {/* All chats */}
        {/* Individual Chat screen */}
      </Router>
    </div>
  );
}

export default App;

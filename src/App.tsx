import React from "react";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import store from "./store";
import { tasks, members } from "./MockData";
import TaskBoard from "./components/TaskBoard";

class App extends React.Component {
  componentDidMount() {
    if (!localStorage.getItem("tasts")) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    if (!localStorage.getItem("members")) {
      localStorage.setItem("members", JSON.stringify(members));
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Navbar />
        <TaskBoard />
      </Provider>
    );
  }
}

export default App;

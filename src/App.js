import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state);

  useEffect(() => {
    const locallyStoredStore = JSON.parse(localStorage.getItem("todoStore"));
    if (locallyStoredStore) {
      dispatch({ type: "ADD_STORE", state: locallyStoredStore });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todoStore", JSON.stringify(appState));
  }, [appState]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 align-self-center">
          <TodoForm />
        </div>
        <div className="col-lg-8 mt-5 mt-lg-0 todo-list-column">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;

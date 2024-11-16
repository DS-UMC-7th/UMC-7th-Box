import TodoList from "./components/TodoList";
import { TodoContextProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoContextProvider>
      <TodoList />
    </TodoContextProvider>
  );
}

export default App;

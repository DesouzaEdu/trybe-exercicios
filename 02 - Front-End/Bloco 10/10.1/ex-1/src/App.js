import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const tarefas = ['CSS', 'Inglês', 'C#', 'Javascript', 'Matemática'];
function App() {
  return (
    <ul>{tarefas.map((e) => Task(e))}</ul>
  );
}

export default App;

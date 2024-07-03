
import './App.css'
import Counter from './features/counter/Counter'
import Todo from './features/todo/Todo'

function App() {

  return (
    <>
      <h1 className='text-green-400 font-sans font-semibold'>Redux Counter</h1>
      <Counter />
      <Todo />
    </>
  )
}

export default App

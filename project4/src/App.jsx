import Item from "./component/Item"

const App = () => {
  const header="Stationary list";
  const items= [' pen ', ' pencil ', ' ruler ', ' eraser '];

  return (
    <>    
    <div>App</div>
    <Item header={header} items={ items }/>
    </>

  )
}
export default App
import Btn from "./component/Btn";

const App = () => {
  const style={
    backgroundColor: 'lightgreen',
 color:'darkgreen',
 borderRadius :'5px',
 padding :'10px'
  };
  return (
    <>
    <div>App</div>
    <Btn style={style} text="Start" / >

    </>

  )
}

export default App
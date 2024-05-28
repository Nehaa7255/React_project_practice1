import Student_details from "./components/Student_details"

const App = () => {
  const student = {
    name: 'John Doe',
    english: 90,
    maths: 80,
    computers: 70,
}
  return (
    <div>
    <Student_details studentDetail={student}/>
    </div>
  )
}

export default App
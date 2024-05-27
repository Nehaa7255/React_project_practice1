
import "./EmployeeCard.css";
const EmployeeCard = (props) => {
  return (
    <>
    <div>EmployeeCard</div>
    <h2>{props.name}</h2>
    <h2 className="desig">{props.Designation}</h2>
    <h2 className="work">{props.workexperience}</h2>
    </>
  )
}

export default EmployeeCard;
const EmployesDetails = () => {
    const employees = [
        {
        name: 'Jack Smith',
        level: 2,
        dept: 'Tech',
        designation: 'Manager',
        salary: 24000,
        },
        {
        name: 'Mary Robbins',
        level: 3,
        dept: 'Fin',
        designation: 'Manager',
        salary: 28000,
        },
        {
        name: 'Steve Williams',
        level: 4,
        dept: 'Ops',
        designation: 'President',
        salary: 35000,
        },
        {
        name: 'Bob Andrews',
        level: 1,
        dept: 'Fin',
        designation: 'Trainee',
        salary: 16500,
        },
        {
        name: 'Dave Martin',
        level: 2,
        dept: 'Fin',
        designation: 'Manager',
        salary: 21700,
        },
        {
        name: 'Julia Clarke',
        level: 3,
        dept: 'Ops',
        designation: 'Manager',
        salary: 26900,
        },
        {
            name: 'Kathy Jones',
            level: 4,
            dept: 'Tech',
            designation: 'President',
            salary: 42500,
            },
            {
            name: 'Tom Bresnan',
            level: 2,
            dept: 'Tech',
            designation: 'Manager',
            salary: 22200,
            },
        ]
  return (
    <>
    <div>
    <h1>Employees Details</h1>
    <ul>
    {employees.map((EmployesDetails)=>(
    <li><h4>
    name: {EmployesDetails.name},
    level: {EmployesDetails.level},
    dept: {EmployesDetails.dept},
    designation: {EmployesDetails.designation},
    salary: {EmployesDetails.salary}, 
    </h4></li>
))}
    </ul>

    </div>
    </>
  )
}

export default EmployesDetails
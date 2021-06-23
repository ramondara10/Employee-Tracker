import React from "react";
const Card = ({ sortedEmployees }) => {

    return (
        <table className="table">
            <thread>
            <tr>
                <th scope = "col">Profile</th>
                <th scope = "col">Name</th>
                <th scope = "col">Phone</th>
                <th scope = "col">Email</th>
                <th scope = "col">BIrth Date</th>
            </tr>
            </thread>
            <tbody>
                {sortedEmployees.map((emp,index) => (
                    <tr key={index}>
                        <th scope='row'><img src={emp.picture.large} alt=''/></th>
                        <td>{emp.name.first} {emp.name.last}</td>
                        <td>{emp.phone}</td>
                        <td>{emp.email}</td>
                        <td>{emp.dob.date}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}

export default Card;

import React, { useState } from "react";
import "../Styles/TaskView.css";

const TaskView = () => {
  const [employeurs, setEmployeurs] = useState([
    {
      name: "John Doe",
      position: "Marketing Manager",
      department: "Marketing",
      email: "john.doe@example.com",
      phone: "+1 (123) 456-7890",
      createdAt: "2023-12-15T08:00:00Z",
      updatedAt: "2024-03-20T11:30:00Z",
    },
    {
      name: "Jane Smith",
      position: "Software Engineer",
      department: "Engineering",
      email: "jane.smith@example.com",
      phone: "+1 (234) 567-8901",
      createdAt: "2023-11-20T10:15:00Z",
      updatedAt: "2024-04-10T14:45:00Z",
    },
    {
      name: "Michael Johnson",
      position: "Sales Manager",
      department: "Sales",
      email: "michael.johnson@example.com",
      phone: "+1 (345) 678-9012",
      createdAt: "2024-01-05T09:45:00Z",
      updatedAt: "2024-04-15T09:00:00Z",
    },
  ]);

<<<<<<< HEAD
    const formatDateByDays = (dateString) => {
        const date = new Date(dateString);
        return date.getDate();
    };
=======
  const formatDateByDays = (dateString: any) => {
    const date = new Date(dateString);
    return date.getDate();
  };
>>>>>>> bc844e1cbbae224afd5ecdd489f9e3f23a7d5d57

  const ToggleButton = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
      setIsChecked((prevState) => !prevState);
    };

    return (
<<<<<<< HEAD
        <div className="container">

            <div className="parent">
                <div className="child">
                    <table>
                        {employeurs.map((value, index) => (
                            <tr key={index}>
                                <td>{value.position}</td>
                                <td>{value.name}</td>
                                <td>{formatDateByDays(value.createdAt)} Days</td>
                                <td>
                                    <ToggleButton />
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </div>
=======
      <button
        className={isChecked ? "toggle-button checked" : "toggle-button"}
        onClick={handleToggle}
      >
        <span>Faire</span>
      </button>
>>>>>>> bc844e1cbbae224afd5ecdd489f9e3f23a7d5d57
    );
  };

  return (
    <div className="container">
      <div className="parent">
        <div className="child">
          <table>
            {employeurs.map((value, index) => (
              <tr key={index}>
                <td>{value.position}</td>
                <td>{value.name}</td>
                <td>{formatDateByDays(value.createdAt)} Days</td>
                <td>
                  <ToggleButton />
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskView;
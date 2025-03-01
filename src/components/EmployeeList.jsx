import styles from "./EmployeeList.module.css";
import EmployeeListItem from "./EmployeeListItem";

function EmployeeList() {
    const employees = [
        { name: "James King", title: "President and CEO" }, // No img
        { img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/47ec0e23428951.5632324ea8f1e.jpg", name: "Julie Taylor", title: "VP of Marketing" },
        { name: "Eugene Lee", title: "CFO" }, // No img
        { img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/bacb4823428951.563232aa254c4.jpg", name: "John Williams", title: "VP of Engineering" },
        { img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/bfd13b23428951.56323292dc3f5.jpg", name: "Ray Moore", title: "VP of Sales" },
        { name: "Paul Jones", title: "QA Manager" } // No img
    ];

    return (
        <div className={styles.employeeList}>
            {employees.map((employee, index) => (
                <EmployeeListItem key={index} img={employee.img} name={employee.name} title={employee.title} />
            ))}
        </div>
    );
}

export default EmployeeList;

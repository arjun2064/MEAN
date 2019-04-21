
import {Users} from "./users.=";

export class GetUsersServices {

    //Get All Users
    getUser(){
    
        const EMPLOYEE_DATA: Users[] = [
            {code: "Emp-001", empName: 'Mr.India', designation: "Project Manager", department: 'Tech'},
            {code: "Emp-002", empName: 'Gabbar Singh', designation: "Team Leader", department: 'Tech'},
            {code: "Emp-003", empName: 'Mahismati', designation: "Module Lead", department: 'Tech'},
            {code: "Emp-004", empName: 'Bhallaldev', designation: "Software Developer", department: 'IT'},
            {code: "Emp-005", empName: 'Kattapa', designation: "Sr. Software Developer", department: 'IT'},
            {code: "Emp-006", empName: 'Bahubali', designation: "Software Developer", department: 'IT'},
            {code: "Emp-007", empName: 'Mogamgo', designation: "Quality Analyst", department: 'QA'},
            {code: "Emp-008", empName: 'Dr.Dang', designation: "Quality Analyst", department: 'QA'},
            {code: "Emp-009", empName: 'Kanchacheena', designation: "Customer Support", department: 'Support'},
            {code: "Emp-010", empName: 'Vijay Deenanath Chauchan', designation: "Customer Support", department: 'Support'},
            ];
            return EMPLOYEE_DATA;
        }
}

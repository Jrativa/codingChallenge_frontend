import React from 'react';
import {RadarChart} from './RadarChart';

export type Employee = {
    id: number,
    first_name: string,
    last_name: string,
    date_of_birth: string,
    date_of_hire: string,
    date_of_termination:string,
    avatar: string,
    position: string,
    email: string,
    phone_number: string,
    department: string,
    salary: number
}
interface Skill {
    name: string;
    level: number;
  }
export interface ChartData {
    labels: string[];
    data: number[];
  }

interface DashBoardProps {
  employee?: Employee;
}

interface DashBoardDataProps {
    title: string,
    description: string
  }

const DashBoardData: React.FC<DashBoardDataProps> = ({title, description}) => {  
    return (
        <div className="row">
        <div className="col-sm-3">
            <p className="mb-0">{title}</p>
        </div>
        <div className="col-sm-9">
            <p className="text-muted mb-0">{description}</p>
        </div>
    </div>
    );
  }

// eslint-disable-next-line no-empty-pattern
const DashBoard: React.FC<DashBoardProps> = ({ }) => {
    
    const storedEmployee = localStorage.getItem('employee');
        if (storedEmployee!==null) {
            const employee = JSON.parse(storedEmployee);
            
            const labels: string[] = employee.skills.map((skill: Skill) => skill.name);
            // Esto devolverá un array de nombres: ["Js", "Ts", "React", "Docker", "AWS"]

            const data: number[] = employee.skills.map((skill: Skill) => skill.level);
            // Esto devolverá un array de niveles: [5, 4, 4, 2, 3]
                          
        
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-4">
                    <div className="card mb-4 row">
                        <div className="card-body text-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                        <h5 className="my-3">{employee.first_name} {employee.last_name}</h5>
                        <p className="text-muted mb-1">{employee.position}</p>
                        <p className="text-muted mb-1">{employee.department}</p>
                        </div>
                        <RadarChart labels={labels} data={data}/>
                    </div>  
                    
                    </div>
                    <div className="col-lg-8">
                    <div className="card mb-4">
                        <div className="card-body">
                        <DashBoardData title='' description=''/>
                        <hr />
                        <DashBoardData title='First Name' description={employee.first_name}/>
                        <hr />
                        <DashBoardData title='Last Name' description={employee.last_name}/>
                        <hr />
                        <DashBoardData title='Email' description={employee.email}/>
                        <hr />
                        <DashBoardData title='Date of birth' description={employee.date_of_birth}/>
                        <hr />
                        <DashBoardData title='Position' description={employee.position}/>
                        <hr />
                        <DashBoardData title='Date of hire' description={employee.date_of_hire}/>
                        <hr />
                        <DashBoardData title='Date of termination' description={employee.date_of_termination ? employee.date_of_termination : 'NA'}/>
                        <hr />
                        <DashBoardData title='Phone number' description={employee.phone_number}/>
                        <hr />
                        <DashBoardData title='Salary' description={employee.salary}/>
                        <hr/>
                        <DashBoardData title='' description=''/>
                        </div>
                    </div>
                    
                    </div>
                </div>
                </div>
            );
        }
    
  };
  
  export default DashBoard;
  
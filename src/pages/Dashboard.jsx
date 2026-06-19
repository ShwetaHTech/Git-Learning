import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <style>
        {`
          *{
            margin:0;
            padding:0;
            box-sizing:border-box;
          }

          .navbar{
            background-color:#333;
            padding:15px;
            display:flex;
            justify-content:center;
            gap:30px;
          }

          .navbar a{
            color:white;
            text-decoration:none;
            font-size:18px;
            font-weight:bold;
          }

          .navbar a:hover{
            color:#ffd700;
          }

          .content{
            text-align:center;
            margin-top:50px;
          }
        `}
      </style>

      <nav className="navbar">
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/students">Student List</Link>
        <Link to="/add-student">Add Student</Link>
      </nav>

      <div className="content">
        <h1>Student Management System</h1>
        <p>Welcome to Dashboard</p>
      </div>
    </>
  );
}

export default Dashboard;
import { Outlet, Link } from "react-router-dom";

const Layout = () =>{
    return <div>
        <nav>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className=" text-decoration-none">Inicio</Link>
                </li>
                <li>
                    <Link to="/login" className=" text-decoration-none">Login</Link>
                </li>
                <li>
                    <Link to="/registro" className=" text-decoration-none">Registro</Link>
                </li>  
          </ul>
        </nav>
        <hr />
        <Outlet />
    </div>;
}

export default Layout;
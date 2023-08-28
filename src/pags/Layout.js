import { Outlet, Link } from "react-router-dom";

const Layout = () =>{
    return <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/registro">Registro</Link>
                </li>
          </ul>
        </nav>
        <hr />
        <Outlet />
    </div>;
}

export default Layout;
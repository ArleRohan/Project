import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { NavLink as ReactLink } from 'react-router-dom';

function ShopkeeperNavBar() {
    const [loading, setLoading] = useState(false)

    const [object, setObject] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        init();
    }, []);

    const init = () => {
        var val = localStorage.getItem('user-token');
        var object = JSON.parse(val);
        setObject(object)
    }

    const logout = () => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            localStorage.removeItem('user-token');
            console.log('Logged Out')
            navigate('/')
        }, 3500);

    }
    return (
        <>
        <div>
            {loading ? "" :
            <>
             <div>
            <nav className="navbar navbar-expand-lg navbar-NavItemght bg-NavItemght bg-white py-1 shadow-lg">
                <div className='container'>
                    <NavbarBrand className="navbar-brand fw-bold fs-6" >
                        <b> Local Market</b></NavbarBrand>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <NavItem className="nav-item active">
                                <NavLink className="nav-NavItemnk" tag={ReactLink} to="/shopkeeper/profile">Profile <span className="sr-only">(current)</span></NavLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavLink className="nav-NavItemnk" tag={ReactLink} to="/wishlist">
                                    <i className='fa fa-heart'> Wish List</i>
                                </NavLink>
                            </NavItem>

                        </ul>
                        <div className="buttons">
                            <a href="/login" className="btn btn-outline-dark " >
                                <i className="fa fa-sign-out me-1"></i> Logout</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
            
            </>     
            }
            {loading ? navigate('/pageload') : ""}
        </div>
        </>
    );
}

export default ShopkeeperNavBar;
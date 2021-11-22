import { Link } from 'react-router-dom';
import { removeCookie } from '../../helpers/cookie';




export const Header = () => {

	return (
		<div className="side-menu" id="side-menu">
			<div className="brand-name">
				<div className="logo">
					<Link to="/" className="brand-logo">
						<img src="img/Logotype.png" alt="" className="logo" />
					</Link>
				</div>
				<div className="profile-details">
					<div className="text">
						<p className="profile-mail">MY ACCOUNT</p>
					</div>
				</div>

				<ul>
					<li className="menu-item">
						<Link to="/dashboard" className="menu-link active">
							<span className="icon"><i className="fa fa-envelope"></i></span>
							<span className="menu-text">Dashboard</span>
						</Link>
					</li>
					
					
					
					<li>
						<Link to="/payment" className="menu-link">
							<span className="icon"><i className="fa fa-user"></i></span>
							<span className="menu-text"> Payouts</span>
						</Link>
					</li>
					<li>
						<Link to="/account" className="menu-link">
							<span className="icon"><i className="fa fa-user"></i></span>
							<span className="menu-text"> Account</span>
						</Link>
					</li>
                    <li>
						<Link to="/help" className="menu-link">
							<span className="icon"><i className="fa fa-user"></i></span>
							<span className="menu-text"> Help</span>
						</Link>
					</li>
				
					<li>
						<a onClick={() => removeCookie("token")} href="#!" className="menu-link-out">
							<span className="icon-out"><i className="fa fa-sign-out"></i></span>
							<span className="menu-text">Logout</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
    )
}
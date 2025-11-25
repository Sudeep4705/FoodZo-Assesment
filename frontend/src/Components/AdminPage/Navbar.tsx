// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Navbar.css"
import { motion } from "motion/react"
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from "react-router-dom";
export default function Navbar() {
	// const [isloggedIn, setisloggedIn] = useState(false)

	// useEffect(() => {
	// 	const getdata = async () => {
	// 		const res = await axios.get("http://localhost:8080/admin/verify", { withCredentials: true })
	// 		setisloggedIn(res.data.isloggedIn)
	// 	}
	// 	getdata()
	// }, [])

	// const handlelogout = async () => {
	// 	const res = await axios.post("http://localhost:8080/admin/logout", {}, { withCredentials: true })
	// 	setisloggedIn(res.data.isloggedIn)
	// }
	return (
		<>
			<motion.div className="navbar rounded-lg" initial={{ opacity: 0, y: -150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }}>
				<div className="navbar-start ">
					<a className="navbar-item text-black" href='/'>FoodZo</a>
				</div>
				<div className="navbar-center">
					<Link className="navbar-item text-black" to="/admin/support">
						Contact
					</Link>

					<Link className="navbar-item text-black" to="/admin">
						AddFood
					</Link>

					<Link className="navbar-item text-black" to="/admin/foodlist">
						FoodList
					</Link>

				</div>
				<div className="navbar-end">
					{/* <div className="avatar avatar-ring avatar-md">
						<div className="dropdown-container">
							<div className="dropdown">
								<label className=" flex cursor-pointer px-0" tabIndex={0}>
									<AccountCircleIcon />
								</label>
								<div className="dropdown-menu dropdown-menu-bottom-left">
									{!isloggedIn && (
										<>
											<Link tabIndex={-1} className="dropdown-item text-sm" to="/admin/signin">
												SignIn
											</Link>
										</>
									)}
									{isloggedIn && (
										<button
											tabIndex={-1}
											className="dropdown-item text-sm"
											onClick={handlelogout}
										>
											Logout
										</button>

									)}


								</div>
							</div>
						</div>
					</div> */}
				</div>
			</motion.div>
		</>
	)
}
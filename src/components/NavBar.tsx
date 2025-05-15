import { NavLink } from "react-router-dom";
import style from "../assets/styles/NavBar.module.css";

import pictoHome from "../assets/pictogram/picto_home.svg";
import pictoLoup from "../assets/pictogram/picto_loup.svg";
import pictoHeart from "../assets/pictogram/picto_heart.svg";

const navIcon = [
	{ to: "/", src: pictoHome, alt: "home" },
	{ to: "/search", src: pictoLoup, alt: "search" },
	{ to: "/favorite", src: pictoHeart, alt: "favorite" },
];

function NavBar() {
	return (
		<>
			<nav className={style.navbar}>
				{navIcon.map((icon) => (
					<NavLink
						key={icon.to}
						to={icon.to}
						className={({ isActive }) =>
							isActive ? `${style.navIcon} ${style.active}` : style.navIcon
						}
					>
						<img src={icon.src} alt={icon.alt} />
					</NavLink>
				))}
			</nav>
		</>
	);
}

export default NavBar;

/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
	HomeOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
	FundOutlined,
	MenuOutlined,
	CalculatorOutlined,
} from "@ant-design/icons";

import icon from "../images/cryptocurrency.png";

const Navbar = () => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [screenSize, setScreenSize] = useState(undefined);
	const [scroll, setScroll] = React.useState(false);

	// const navbar = document.querySelectorAll(".nav-container");

	// // console.log(navbar.classList);
	// // console.log(sticky);

	// function stickynavbar() {
	// 	if (window.scrollY >= 0) {
	// 		navbar.classList.add("sticky");
	// 		console.log(navbar.classList);
	// 	} else {
	// 		navbar.classList.remove("sticky");
	// 		console.log(navbar.classList);
	// 	}
	// }
	// window.addEventListener("scroll", stickynavbar);

	function scrollListner() {
		if (window.scrollY > 100) {
			setScroll(true);
		} else setScroll(false);
	}
	React.useEffect(() => {
		window.addEventListener("scroll", scrollListner);
		return () => window.removeEventListener("scroll", scrollListner);
	}, []);

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (screenSize <= 800) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

	return (
		<div className={`nav-container ${scroll && "sticky"}`}>
			<div className="logo-container">
				<Avatar src={icon} size="large" />
				<Typography.Title level={2} className="logo">
					<Link to="/">Fin Assist</Link>
				</Typography.Title>
				<Button
					className="menu-control-container"
					onClick={() => setActiveMenu(!activeMenu)}
				>
					<MenuOutlined />
				</Button>
			</div>
			{activeMenu && (
				<Menu theme="light">
					<Menu.Item icon={<HomeOutlined />}>
						<Link to="/">Home</Link>
					</Menu.Item>
					<Menu.Item icon={<FundOutlined />}>
						<Link to="/cryptocurrencies">Cryptocurrencies</Link>
					</Menu.Item>
					<Menu.Item icon={<CalculatorOutlined />}>
						<Link to="/cryptocurrencies">Expense Buddy</Link>
					</Menu.Item>
					<Menu.Item icon={<MoneyCollectOutlined />}>
						<Link to="/exchanges">Exchanges</Link>
					</Menu.Item>
					<Menu.Item icon={<BulbOutlined />}>
						<Link to="/news">News</Link>
					</Menu.Item>
				</Menu>
			)}
		</div>
	);
};

export default Navbar;

/* eslint-enable */

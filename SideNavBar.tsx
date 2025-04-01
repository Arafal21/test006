'use client';

import styles from './SideNavBar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import SideNavItem from '../SideNavItem/SideNavItem';

import Logo from '../../icons/logo-desktop-sidenavbar.svg';

import LogoutIcon from '../../icons/nav-icons/logout-icon.svg';
import ShowHideIcon from '../../icons/nav-icons/show-hide-sidebar-menu.svg';
import { HomeIcon } from '../../icons/HomeIcon';
import { CalendarIcon } from '../../icons/CalendarIcon';
import { ScheduleIcon } from '../../icons/ScheduleIcon';
import { PresenceIcon } from '../../icons/PresenceIcon';
import { GradesIcon } from '../../icons/GradesIcon';
import { AdminIcon } from '../../icons/AdminIcon';
import { ProfileIcon } from '../../icons/ProfileIcon';

import { performLogout } from '../../api/logout';

import { SideModalMobile } from '../SideModalMobile/SideModalMobile';
import { SideNavBarMobileExtendedItems } from '../ExtendedItemsMobileSideNavBar/SideNavBarMobileExtendedItems';

// import { usePrincipalOrTeacher } from '../../hooks/usePrincipalOrTeacher';

export function SideNavBar({ children }: { children: React.ReactNode }) {
	const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
	// const { isAllowed } = usePrincipalOrTeacher();

	const router = useRouter();

	function hideMobileMenu() {
		setIsMobileMoreOpen(false);
	}

	async function handleLogout() {
		await performLogout(router);
	}

	return (
		<nav className={styles.nav}>
			<div className={styles.primaryItems}>
				<div className={styles.navHeading}>
					<Link href='/logged/announcements'>
						<Image src={Logo} width='148' height='40' alt='XJournal Logo' className={styles.logo} />
					</Link>
					<div className={styles.personalInfo}>{children}</div>
				</div>

				<SideNavItem icon={HomeIcon} itemPath='announcements' onClick={hideMobileMenu}>
					Home
				</SideNavItem>

				<SideNavItem icon={CalendarIcon} itemPath='calendar' onClick={hideMobileMenu}>
					Calendar
				</SideNavItem>

				<SideNavItem icon={ScheduleIcon} itemPath='lesson-schedule' onClick={hideMobileMenu}>
					Schedule
				</SideNavItem>

				<SideNavItem icon={PresenceIcon} itemPath='presence' onClick={hideMobileMenu}>
					Presence
				</SideNavItem>

				<button
					className={styles.mobileExtendBtn}
					onClick={() => setIsMobileMoreOpen((prevState) => !prevState)}>
					<Image src={ShowHideIcon} width='24' height='24' alt='More button' />
					More
				</button>

				<SideNavItem icon={GradesIcon} itemPath='grades' className={styles.desktopOnly}>
					Grades
				</SideNavItem>

				{/* {isAllowed && ( */}
				<SideNavItem icon={AdminIcon} itemPath='principal-panel' className={styles.desktopOnly}>
					Admin
				</SideNavItem>
				{/* // )} */}
			</div>

			<SideModalMobile isModalVisible={isMobileMoreOpen} setIsMobileMoreOpen={setIsMobileMoreOpen}>
				<SideNavBarMobileExtendedItems hideMobileMenu={hideMobileMenu} />
			</SideModalMobile>

			<div className={styles.lowerDesktopItems}>
				<SideNavItem icon={ProfileIcon} itemPath='profile'>
					Profile
				</SideNavItem>

				<button onClick={handleLogout} className={styles.logoutBtn}>
					<Image src={LogoutIcon} alt='Logout button' />
					<span className={styles.linkText}>Logout</span>
				</button>
			</div>
		</nav>
	);
}
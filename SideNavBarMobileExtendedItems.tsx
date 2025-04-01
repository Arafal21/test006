'use client';

import styles from './SideNavBarMobileExtendedItems.module.scss';
import Image from 'next/image';
import SideNavItem from '../SideNavItem/SideNavItem';

import Logo from '../../icons/logo-desktop-sidenavbar.svg';
import Avatar from '../../icons/avatar.svg';

import LogoutIcon from '../../icons/nav-icons/logout-icon.svg';
import { GradesIcon } from '../../icons/GradesIcon';
import { AdminIcon } from '../../icons/AdminIcon';
import { ProfileIcon } from '../../icons/ProfileIcon';
import { UserBadge } from '../UserBadge/UserBadge';

export function SideNavBarMobileExtendedItems({ hideMobileMenu, handleLogout }) {
	return (
		<div className={styles.modalContent}>
			<div className={styles.mobileExtendedOptions}>


				<Image src={Logo} alt='' />
				
				<Image src={Avatar} alt='' />
				<p>John Doe</p>
				<p>Principal</p>

			

				<span className={styles.mobileExtendedOption} onClick={hideMobileMenu}>
					<SideNavItem icon={GradesIcon} itemPath='grades'>
						Grades
					</SideNavItem>
				</span>

				{/* {isAllowed && ( */}
				<span className={styles.mobileExtendedOption} onClick={hideMobileMenu}>
					<SideNavItem icon={AdminIcon} itemPath='principal-panel'>
						Admin
					</SideNavItem>
				</span>
				{/* // )} */}

				<span className={styles.mobileExtendedOption} onClick={hideMobileMenu}>
					<SideNavItem icon={ProfileIcon} itemPath='profile'>
						Profile
					</SideNavItem>
				</span>
				<span className={styles.mobileExtendedOption} onClick={hideMobileMenu}>
					<button className={styles.logoutBtn} onClick={handleLogout}>
						<Image src={LogoutIcon} alt='Logout button' />
						<span className={styles.linkText}>Logout</span>
					</button>
				</span>
			</div>
		</div>
	);
}

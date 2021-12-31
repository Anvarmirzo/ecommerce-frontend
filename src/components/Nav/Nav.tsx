import cn from 'classnames';
import React, { useState } from 'react';
import { Button, Select } from '..';
import { ReactComponent as BurgerIcon } from '../../assets/img/svg/burger.svg';
import { ReactComponent as CallIcon } from '../../assets/img/svg/call.svg';
import { ReactComponent as CartIcon } from '../../assets/img/svg/cart.svg';
import { ReactComponent as HeartIcon } from '../../assets/img/svg/heart.svg';
import { ReactComponent as SearchIcon } from '../../assets/img/svg/mail.svg';
import { ReactComponent as UserIcon } from '../../assets/img/svg/user.svg';
import styles from './Nav.module.css';

export const Nav = () => {
	// React hooks:
	const [isHidden, setIsHidden] = useState(true);

	// Custom functions:

	const toggleMenu = () => setIsHidden(!isHidden);

	return (
		<nav className={styles.nav}>
			<div className={cn('container', styles.navFlex)}>
				<div
					className={cn(styles.navMenuFlex, styles.navMd, {
						[styles.hiddenMd]: isHidden,
					})}
				>
					<div className={styles.navStart}>
						<a className={styles.link} href='mailto:user@gmail.com'>
							<SearchIcon />
							user@gmail.com
						</a>
						<a className={styles.link} href='tel:+1234567890'>
							<CallIcon />
							(12345)67890
						</a>
					</div>

					<div className={styles.navEnd}>
						<Select options={{ en: 'English', ru: 'Russian' }} />
						<Select options={{ usd: 'USD', rub: '₽' }} />
						<a className={cn(styles.link)} href='##'>
							Login
							<UserIcon />
						</a>
						<a className={styles.link} href='##'>
							Wishlist
							<HeartIcon />
						</a>
					</div>
				</div>
				<Button className={styles.link} type='button' title='Cart'>
					<CartIcon />
				</Button>
				<Button
					className={cn(styles.link, styles.burgerBtn)}
					type='button'
					title='Toggle menu'
					onClick={toggleMenu}
				>
					<BurgerIcon />
				</Button>
			</div>
		</nav>
	);
};

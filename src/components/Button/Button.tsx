import cn from 'classnames';
import React from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

export const Button = ({ className, children, ...props }: ButtonProps) => {
	return (
		<button className={cn(styles.btn, className)} {...props}>
			{children}
		</button>
	);
};

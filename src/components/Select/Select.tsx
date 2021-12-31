import cn from 'classnames';
import React from 'react';
import styles from './Select.module.css';
import { SelectProps } from './Select.props';

export const Select = ({ options, className, ...props }: SelectProps) => {
	return (
		<select className={cn(styles.select, className)} {...props}>
			{Object.entries(options).map((opt, i) => (
				<option key={`${opt[0]}_${i}`} value={opt[0]}>
					{opt[1]}
				</option>
			))}
		</select>
	);
};

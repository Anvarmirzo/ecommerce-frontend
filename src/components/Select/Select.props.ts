import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
export interface SelectProps
	extends DetailedHTMLProps<
		SelectHTMLAttributes<HTMLSelectElement>,
		HTMLSelectElement
	> {
	options: { [key: string]: string };
}

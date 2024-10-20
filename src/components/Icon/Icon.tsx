import React, { forwardRef, HTMLAttributes } from 'react';

import UsersIcon from '@assets/icons/users.svg?react';
import AmountIcon from '@assets/icons/amount.svg?react';

export const icons = {
    users: UsersIcon,
    amount: AmountIcon,
};

export type IconKind = keyof typeof icons;

export type IconProps = {
    name: IconKind;
} & HTMLAttributes<SVGElement>;

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const { name, ...otherProps } = props;
    const Tag = icons[name];

    return <Tag {...otherProps} ref={ref} />;
});

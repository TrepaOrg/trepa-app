import React, { forwardRef, HTMLAttributes } from 'react';

import UsersIcon from '@assets/icons/users.svg?react';
import AmountIcon from '@assets/icons/amount.svg?react';
import HomeIcon from '@assets/icons/home.svg?react';
import PollsIcon from '@assets/icons/polls.svg?react';
import PortfolioIcon from '@assets/icons/portfolio.svg?react';
import ProfileIcon from '@assets/icons/profile.svg?react';
import PulseIcon from '@assets/icons/pulse.svg?react';
import PointsIcon from '@assets/icons/points.svg?react';
import SearchIcon from '@assets/icons/search.svg?react';

export const icons = {
    users: UsersIcon,
    amount: AmountIcon,
    home: HomeIcon,
    polls: PollsIcon,
    portfolio: PortfolioIcon,
    profile: ProfileIcon,
    pulse: PulseIcon,
    points: PointsIcon,
    search: SearchIcon,
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

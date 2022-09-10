import React, { ReactNode } from 'react';
import ICountry from '../../../ICountry';
import './style.scss';
export interface ListItemProps {
    classPrefix: string;
    country: ICountry;
    active: boolean;
    countryLabelFormatter: (country: ICountry) => ReactNode;
    flags: boolean;
    onClick: () => void;
}
declare const ListItem: React.ForwardRefExoticComponent<ListItemProps & React.RefAttributes<HTMLLIElement>>;
export default ListItem;

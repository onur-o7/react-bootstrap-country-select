import { ReactNode } from 'react';
import ICountry from '../../ICountry';
import './style.scss';
export interface ListProps {
    classPrefix: string;
    containerEl?: HTMLDivElement;
    list: ICountry[];
    activeItemIndex: number;
    countryLabelFormatter: (country: ICountry) => ReactNode;
    flags: boolean;
    onItemClick: (itemIndex: number) => void;
    onActiveItemOverflow: (overflowAmount: number) => void;
}
declare const List: ({ classPrefix, containerEl, list, activeItemIndex, countryLabelFormatter, flags, onItemClick, onActiveItemOverflow, }: ListProps) => JSX.Element;
export default List;

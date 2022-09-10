import { ReactNode } from 'react';
import ICountry from '../ICountry';
import './style.scss';
export interface OverlayContentProps {
    classPrefix: string;
    list: ICountry[];
    activeListItemIndex: number;
    countryLabelFormatter: (country: ICountry) => ReactNode;
    flags: boolean;
    noMatchesText: ReactNode;
    maxHeight?: number;
    onListItemClick: (itemIndex: number) => void;
}
declare const OverlayContent: ({ classPrefix, list, activeListItemIndex, countryLabelFormatter, flags, noMatchesText, maxHeight, onListItemClick, }: OverlayContentProps) => JSX.Element;
export default OverlayContent;

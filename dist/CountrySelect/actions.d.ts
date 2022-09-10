import ICountry from '../CountrySelect/ICountry';
import { IAction, IActionInit, IActionTextChange, IActionActiveListItemChange } from './reducer';
export declare const init: (dispatch: React.Dispatch<IActionInit>) => (combinedCountries: ICountry[]) => void;
export declare const focus: (dispatch: React.Dispatch<IAction>) => () => void;
export declare const blur: (dispatch: React.Dispatch<IAction>) => () => void;
export declare const textChange: (dispatch: React.Dispatch<IActionTextChange>) => (inputText: string, list: ICountry[], activeListItemIndex: number) => void;
export declare const activeListItemChange: (dispatch: React.Dispatch<IActionActiveListItemChange>) => (activeListItemIndex: number) => void;
export declare const countrySelect: (dispatch: React.Dispatch<IAction>) => () => void;
export declare const clear: (dispatch: React.Dispatch<IAction>) => () => void;

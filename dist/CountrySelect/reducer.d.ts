import ICountry from '../CountrySelect/ICountry';
export interface IReducerState {
    focused: boolean;
    filterOptions: any;
    combinedCountries: ICountry[];
    inputText: string;
    list: ICountry[];
    activeListItemIndex: number;
}
export interface IAction {
    type: string;
}
export interface IActionInit extends IAction {
    combinedCountries: ICountry[];
}
export interface IActionTextChange extends IAction {
    inputText: string;
    list: ICountry[];
    activeListItemIndex: number;
}
export interface IActionActiveListItemChange extends IAction {
    activeListItemIndex: number;
}
export declare const INITIAL_STATE: IReducerState;
declare const reducer: (state: IReducerState, action: IAction) => IReducerState;
export default reducer;

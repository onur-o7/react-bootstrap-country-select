import ICountry from './ICountry';
export declare const applyExclusionsAndAdditions: (countries: ICountry[], exclusions?: string[], additions?: ICountry[]) => ICountry[];
export declare const filter: (matchNameFromStart: boolean, matchAbbreviations: boolean) => (inputText: string) => ({ name, alpha2, alpha3, ioc }: {
    name: string;
    alpha2: string;
    alpha3: string;
    ioc: string;
}) => boolean;
export declare const getInitialList: (countries: ICountry[], sort?: ((c1: ICountry, c2: ICountry) => number) | undefined) => ICountry[];
export declare const getUpdatedList: (inputText: string, list: ICountry[], activeListItemIndex: number, countries: ICountry[], matchNameFromStart: boolean, matchAbbreviations: boolean, sort?: ((c1: ICountry, c2: ICountry) => number) | undefined) => [ICountry[], number];
export declare const areEqual: (v1: string | ICountry, v2: string | ICountry) => boolean;
export declare const isEmojiFlag: (str: string) => boolean;
export declare const removeEmojiFlag: (str: string) => string;
export declare const classNames: (items: (string | undefined | null | false | 0)[]) => string;

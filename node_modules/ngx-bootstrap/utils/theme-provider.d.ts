export declare type AvailableBsVersions = 'bs3' | 'bs4' | 'bs5';
interface IObjectKeys {
    [key: string]: boolean;
}
export interface IBsVersion extends IObjectKeys {
    isBs3: boolean;
    isBs4: boolean;
    isBs5: boolean;
}
export declare enum BsVerions {
    isBs3 = "bs3",
    isBs4 = "bs4",
    isBs5 = "bs5"
}
export declare function setTheme(theme: AvailableBsVersions): void;
export declare function isBs3(): boolean;
export declare function isBs4(): boolean;
export declare function isBs5(): boolean;
export declare function getBsVer(): IBsVersion;
export declare function currentBsVersion(): AvailableBsVersions;
export {};

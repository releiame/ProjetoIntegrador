import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export interface BsCustomDates {
    label: string;
    value: Date | Date[];
}
export declare class BsCustomDatesViewComponent {
    ranges?: BsCustomDates[];
    selectedRange?: Date[];
    customRangeLabel?: string;
    onSelect: EventEmitter<BsCustomDates>;
    selectFromRanges(range?: BsCustomDates): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BsCustomDatesViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BsCustomDatesViewComponent, "bs-custom-date-view", never, { "ranges": "ranges"; "selectedRange": "selectedRange"; "customRangeLabel": "customRangeLabel"; }, { "onSelect": "onSelect"; }, never, never>;
}

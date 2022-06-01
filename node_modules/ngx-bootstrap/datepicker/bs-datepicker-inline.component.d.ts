import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { Subscription } from 'rxjs';
import { BsDatepickerInlineConfig } from './bs-datepicker-inline.config';
import { DatepickerDateCustomClasses, DatepickerDateTooltipText } from './models';
import * as i0 from "@angular/core";
export declare class BsDatepickerInlineDirective implements OnInit, OnDestroy, OnChanges {
    _config: BsDatepickerInlineConfig;
    private _elementRef;
    /**
     * Config object for datepicker
     */
    bsConfig?: Partial<BsDatepickerInlineConfig>;
    /**
     * Indicates whether datepicker is enabled or not
     */
    isDisabled: boolean;
    /**
     * Minimum date which is available for selection
     */
    minDate?: Date;
    /**
     * Maximum date which is available for selection
     */
    maxDate?: Date;
    /**
     * Date custom classes
     */
    dateCustomClasses?: DatepickerDateCustomClasses[];
    /**
     * Date tooltip text
     */
    dateTooltipTexts?: DatepickerDateTooltipText[];
    /**
     * Disable specific dates
     */
    datesEnabled?: Date[];
    /**
     * Enable specific dates
     */
    datesDisabled?: Date[];
    /**
     * Emits when datepicker value has been changed
     */
    bsValueChange: EventEmitter<Date>;
    protected _subs: Subscription[];
    private readonly _datepicker;
    private _datepickerRef?;
    constructor(_config: BsDatepickerInlineConfig, _elementRef: ElementRef, _renderer: Renderer2, _viewContainerRef: ViewContainerRef, cis: ComponentLoaderFactory);
    _bsValue?: Date;
    /**
     * Initial value of datepicker
     */
    set bsValue(value: Date | undefined);
    ngOnInit(): void;
    initSubscribes(): void;
    unsubscribeSubscriptions(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Set config for datepicker
     */
    setConfig(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BsDatepickerInlineDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BsDatepickerInlineDirective, "bs-datepicker-inline", ["bsDatepickerInline"], { "bsConfig": "bsConfig"; "isDisabled": "isDisabled"; "minDate": "minDate"; "maxDate": "maxDate"; "dateCustomClasses": "dateCustomClasses"; "dateTooltipTexts": "dateTooltipTexts"; "datesEnabled": "datesEnabled"; "datesDisabled": "datesDisabled"; "bsValue": "bsValue"; }, { "bsValueChange": "bsValueChange"; }, never>;
}

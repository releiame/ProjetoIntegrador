import { AfterViewInit, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { BsDaterangepickerConfig } from './bs-daterangepicker.config';
import { Observable, Subscription, Subject, BehaviorSubject } from 'rxjs';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { DatepickerDateCustomClasses } from './models';
import * as i0 from "@angular/core";
export declare class BsDaterangepickerDirective implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    _config: BsDaterangepickerConfig;
    private _elementRef;
    private _renderer;
    /**
     * Placement of a daterangepicker. Accepts: "top", "bottom", "left", "right"
     */
    placement: 'top' | 'bottom' | 'left' | 'right';
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     */
    triggers: string;
    /**
     * Close daterangepicker on outside click
     */
    outsideClick: boolean;
    /**
     * A selector specifying the element the daterangepicker should be appended to.
     */
    container: string;
    outsideEsc: boolean;
    /**
     * Returns whether or not the daterangepicker is currently being shown
     */
    get isOpen(): boolean;
    set isOpen(value: boolean);
    /**
     * Emits an event when the daterangepicker is shown
     */
    onShown: EventEmitter<unknown>;
    /**
     * Emits an event when the daterangepicker is hidden
     */
    onHidden: EventEmitter<unknown>;
    _bsValue?: (Date | undefined)[];
    isOpen$: BehaviorSubject<boolean>;
    isDestroy$: Subject<unknown>;
    /**
     * Initial value of daterangepicker
     */
    set bsValue(value: (Date | undefined)[] | undefined);
    /**
     * Config object for daterangepicker
     */
    bsConfig?: Partial<BsDaterangepickerConfig>;
    /**
     * Indicates whether daterangepicker's content is enabled or not
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
     * Disable specific days, e.g. [0,6] will disable all Saturdays and Sundays
     */
    daysDisabled?: number[];
    /**
     * Disable specific dates
     */
    datesDisabled?: Date[];
    /**
     * Enable specific dates
     */
    datesEnabled?: Date[];
    /**
     * Emits when daterangepicker value has been changed
     */
    bsValueChange: EventEmitter<(Date | undefined)[] | undefined>;
    get rangeInputFormat$(): Observable<string>;
    protected _subs: Subscription[];
    private _datepicker;
    private _datepickerRef?;
    private readonly _rangeInputFormat$;
    constructor(_config: BsDaterangepickerConfig, _elementRef: ElementRef, _renderer: Renderer2, _viewContainerRef: ViewContainerRef, cis: ComponentLoaderFactory);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    show(): void;
    initSubscribes(): void;
    /**
     * Set config for daterangepicker
     */
    setConfig(): void;
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    hide(): void;
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     */
    toggle(): void;
    unsubscribeSubscriptions(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BsDaterangepickerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BsDaterangepickerDirective, "[bsDaterangepicker]", ["bsDaterangepicker"], { "placement": "placement"; "triggers": "triggers"; "outsideClick": "outsideClick"; "container": "container"; "outsideEsc": "outsideEsc"; "isOpen": "isOpen"; "bsValue": "bsValue"; "bsConfig": "bsConfig"; "isDisabled": "isDisabled"; "minDate": "minDate"; "maxDate": "maxDate"; "dateCustomClasses": "dateCustomClasses"; "daysDisabled": "daysDisabled"; "datesDisabled": "datesDisabled"; "datesEnabled": "datesEnabled"; }, { "onShown": "onShown"; "onHidden": "onHidden"; "bsValueChange": "bsValueChange"; }, never>;
}

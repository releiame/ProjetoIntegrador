import { Component, Input, Output, EventEmitter, forwardRef, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DraggableItemService } from './draggable-item.service';
import * as i0 from "@angular/core";
import * as i1 from "./draggable-item.service";
import * as i2 from "@angular/common";
export class SortableComponent {
    constructor(transfer) {
        /** class name for items wrapper */
        this.wrapperClass = '';
        /** style object for items wrapper */
        this.wrapperStyle = {};
        /** class name for item */
        this.itemClass = '';
        /** style object for item */
        this.itemStyle = {};
        /** class name for active item */
        this.itemActiveClass = '';
        /** style object for active item */
        this.itemActiveStyle = {};
        /** class name for placeholder */
        this.placeholderClass = '';
        /** style object for placeholder */
        this.placeholderStyle = {};
        /** placeholder item which will be shown if collection is empty */
        this.placeholderItem = '';
        /** fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
         *  Returns new items collection as a payload.
         */
        this.onChange = new EventEmitter();
        this.showPlaceholder = false;
        this.activeItem = -1;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.onTouched = Function.prototype;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.onChanged = Function.prototype;
        this._items = [];
        this.transfer = transfer;
        this.currentZoneIndex = SortableComponent.globalZoneIndex++;
        this.transfer
            .onCaptureItem()
            .subscribe((item) => this.onDrop(item));
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
        const out = this.items.map((x) => x.initData);
        this.onChanged(out);
        this.onChange.emit(out);
    }
    onItemDragstart(event, item, i) {
        this.initDragstartEvent(event);
        this.onTouched();
        this.transfer.dragStart({
            event,
            item,
            i,
            initialIndex: i,
            lastZoneIndex: this.currentZoneIndex,
            overZoneIndex: this.currentZoneIndex
        });
    }
    onItemDragover(event, i) {
        if (!this.transfer.getItem()) {
            return;
        }
        event.preventDefault();
        const dragItem = this.transfer.captureItem(this.currentZoneIndex, this.items.length);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let newArray = [];
        if (!dragItem) {
            return;
        }
        if (!this.items.length) {
            newArray = [dragItem.item];
        }
        else if (dragItem.i > i) {
            newArray = [
                ...this.items.slice(0, i),
                dragItem.item,
                ...this.items.slice(i, dragItem.i),
                ...this.items.slice(dragItem.i + 1)
            ];
        }
        else {
            // this.draggedItem.i < i
            newArray = [
                ...this.items.slice(0, dragItem.i),
                ...this.items.slice(dragItem.i + 1, i + 1),
                dragItem.item,
                ...this.items.slice(i + 1)
            ];
        }
        this.items = newArray;
        dragItem.i = i;
        this.activeItem = i;
        this.updatePlaceholderState();
    }
    cancelEvent(event) {
        if (!this.transfer.getItem() || !event) {
            return;
        }
        event.preventDefault();
    }
    onDrop(item) {
        if (item &&
            item.overZoneIndex !== this.currentZoneIndex &&
            item.lastZoneIndex === this.currentZoneIndex) {
            this.items = this.items.filter((x, i) => i !== item.i);
            this.updatePlaceholderState();
        }
        this.resetActiveItem();
    }
    resetActiveItem(event) {
        this.cancelEvent(event);
        this.activeItem = -1;
    }
    registerOnChange(callback) {
        this.onChanged = callback;
    }
    registerOnTouched(callback) {
        this.onTouched = callback;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    writeValue(value) {
        if (value) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.items = value.map((x, i) => ({
                id: i,
                initData: x,
                value: this.fieldName ? x[this.fieldName] : x
            }));
        }
        else {
            this.items = [];
        }
        this.updatePlaceholderState();
    }
    updatePlaceholderState() {
        this.showPlaceholder = !this._items.length;
    }
    getItemStyle(isActive) {
        return isActive
            ? Object.assign({}, this.itemStyle, this.itemActiveStyle)
            : this.itemStyle;
    }
    initDragstartEvent(event) {
        // it is necessary for mozilla
        // data type should be 'Text' instead of 'text/plain' to keep compatibility
        // with IE
        event.dataTransfer?.setData('Text', 'placeholder');
    }
}
SortableComponent.globalZoneIndex = 0;
SortableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SortableComponent, deps: [{ token: i1.DraggableItemService }], target: i0.ɵɵFactoryTarget.Component });
SortableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: SortableComponent, selector: "bs-sortable", inputs: { fieldName: "fieldName", wrapperClass: "wrapperClass", wrapperStyle: "wrapperStyle", itemClass: "itemClass", itemStyle: "itemStyle", itemActiveClass: "itemActiveClass", itemActiveStyle: "itemActiveStyle", placeholderClass: "placeholderClass", placeholderStyle: "placeholderStyle", placeholderItem: "placeholderItem", itemTemplate: "itemTemplate" }, outputs: { onChange: "onChange" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SortableComponent),
            multi: true
        }
    ], exportAs: ["bs-sortable"], ngImport: i0, template: `
<div
    [ngClass]="wrapperClass"
    [ngStyle]="wrapperStyle"
    (dragover)="cancelEvent($event)"
    (dragenter)="cancelEvent($event)"
    (drop)="resetActiveItem($event)"
    (mouseleave)="resetActiveItem($event)">
  <div
        *ngIf="showPlaceholder"
        [ngClass]="placeholderClass"
        [ngStyle]="placeholderStyle"
        (dragover)="onItemDragover($event, 0)"
        (dragenter)="cancelEvent($event)"
    >{{placeholderItem}}</div>
    <div
        *ngFor="let item of items; let i=index;"
        [ngClass]="[ itemClass, i === activeItem ? itemActiveClass : '' ]"
        [ngStyle]="getItemStyle(i === activeItem)"
        draggable="true"
        (dragstart)="onItemDragstart($event, item, i)"
        (dragend)="resetActiveItem($event)"
        (dragover)="onItemDragover($event, i)"
        (dragenter)="cancelEvent($event)"
        aria-dropeffect="move"
        [attr.aria-grabbed]="i === activeItem"
    ><ng-template [ngTemplateOutlet]="itemTemplate || defItemTemplate"
  [ngTemplateOutletContext]="{item:item, index: i}"></ng-template></div>
</div>

<ng-template #defItemTemplate let-item="item">{{item.value}}</ng-template>
`, isInline: true, directives: [{ type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SortableComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bs-sortable',
                    exportAs: 'bs-sortable',
                    template: `
<div
    [ngClass]="wrapperClass"
    [ngStyle]="wrapperStyle"
    (dragover)="cancelEvent($event)"
    (dragenter)="cancelEvent($event)"
    (drop)="resetActiveItem($event)"
    (mouseleave)="resetActiveItem($event)">
  <div
        *ngIf="showPlaceholder"
        [ngClass]="placeholderClass"
        [ngStyle]="placeholderStyle"
        (dragover)="onItemDragover($event, 0)"
        (dragenter)="cancelEvent($event)"
    >{{placeholderItem}}</div>
    <div
        *ngFor="let item of items; let i=index;"
        [ngClass]="[ itemClass, i === activeItem ? itemActiveClass : '' ]"
        [ngStyle]="getItemStyle(i === activeItem)"
        draggable="true"
        (dragstart)="onItemDragstart($event, item, i)"
        (dragend)="resetActiveItem($event)"
        (dragover)="onItemDragover($event, i)"
        (dragenter)="cancelEvent($event)"
        aria-dropeffect="move"
        [attr.aria-grabbed]="i === activeItem"
    ><ng-template [ngTemplateOutlet]="itemTemplate || defItemTemplate"
  [ngTemplateOutletContext]="{item:item, index: i}"></ng-template></div>
</div>

<ng-template #defItemTemplate let-item="item">{{item.value}}</ng-template>
`,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SortableComponent),
                            multi: true
                        }
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i1.DraggableItemService }]; }, propDecorators: { fieldName: [{
                type: Input
            }], wrapperClass: [{
                type: Input
            }], wrapperStyle: [{
                type: Input
            }], itemClass: [{
                type: Input
            }], itemStyle: [{
                type: Input
            }], itemActiveClass: [{
                type: Input
            }], itemActiveStyle: [{
                type: Input
            }], placeholderClass: [{
                type: Input
            }], placeholderStyle: [{
                type: Input
            }], placeholderItem: [{
                type: Input
            }], itemTemplate: [{
                type: Input
            }], onChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NvcnRhYmxlL3NvcnRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBNkNoRSxNQUFNLE9BQU8saUJBQWlCO0lBK0Q1QixZQUFZLFFBQThCO1FBMUQxQyxtQ0FBbUM7UUFDMUIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFFM0IscUNBQXFDO1FBQzVCLGlCQUFZLEdBQTJCLEVBQUUsQ0FBQztRQUVuRCwwQkFBMEI7UUFDakIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUV4Qiw0QkFBNEI7UUFDbkIsY0FBUyxHQUEyQixFQUFFLENBQUM7UUFFaEQsaUNBQWlDO1FBQ3hCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBRTlCLG1DQUFtQztRQUMxQixvQkFBZSxHQUEyQixFQUFFLENBQUM7UUFFdEQsaUNBQWlDO1FBQ3hCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUUvQixtQ0FBbUM7UUFDMUIscUJBQWdCLEdBQTJCLEVBQUUsQ0FBQztRQUV2RCxrRUFBa0U7UUFDekQsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFLOUI7O1dBRUc7UUFDTyxhQUFRLEdBQTRCLElBQUksWUFBWSxFQUFhLENBQUM7UUFFNUUsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsZUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBYWhCLDhEQUE4RDtRQUM5RCxjQUFTLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNwQyw4REFB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ZSxHQUFHLENBQUUsQ0FBQTs4R0FEeEIsaUJBQWlCO2tHQUFqQixpQkFBaUIsK2FBUmpCO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUM7WUFDaEQsS0FBSyxFQUFFLElBQUk7U0FDWjtLQUNGLHFEQXRDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQStCWDsyRkFTWSxpQkFBaUI7a0JBM0M3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBK0JYO29CQUNDLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxrQkFBa0IsQ0FBQzs0QkFDaEQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7MkdBSVUsU0FBUztzQkFBakIsS0FBSztnQkFHRyxZQUFZO3NCQUFwQixLQUFLO2dCQUdHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBR0csU0FBUztzQkFBakIsS0FBSztnQkFHRyxTQUFTO3NCQUFqQixLQUFLO2dCQUdHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBR0csZUFBZTtzQkFBdkIsS0FBSztnQkFHRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBR0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUdHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBR0csWUFBWTtzQkFBcEIsS0FBSztnQkFLSSxRQUFRO3NCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlSXRlbSB9IGZyb20gJy4vZHJhZ2dhYmxlLWl0ZW0nO1xuaW1wb3J0IHsgRHJhZ2dhYmxlSXRlbVNlcnZpY2UgfSBmcm9tICcuL2RyYWdnYWJsZS1pdGVtLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1zb3J0YWJsZScsXG4gIGV4cG9ydEFzOiAnYnMtc29ydGFibGUnLFxuICB0ZW1wbGF0ZTogYFxuPGRpdlxuICAgIFtuZ0NsYXNzXT1cIndyYXBwZXJDbGFzc1wiXG4gICAgW25nU3R5bGVdPVwid3JhcHBlclN0eWxlXCJcbiAgICAoZHJhZ292ZXIpPVwiY2FuY2VsRXZlbnQoJGV2ZW50KVwiXG4gICAgKGRyYWdlbnRlcik9XCJjYW5jZWxFdmVudCgkZXZlbnQpXCJcbiAgICAoZHJvcCk9XCJyZXNldEFjdGl2ZUl0ZW0oJGV2ZW50KVwiXG4gICAgKG1vdXNlbGVhdmUpPVwicmVzZXRBY3RpdmVJdGVtKCRldmVudClcIj5cbiAgPGRpdlxuICAgICAgICAqbmdJZj1cInNob3dQbGFjZWhvbGRlclwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInBsYWNlaG9sZGVyQ2xhc3NcIlxuICAgICAgICBbbmdTdHlsZV09XCJwbGFjZWhvbGRlclN0eWxlXCJcbiAgICAgICAgKGRyYWdvdmVyKT1cIm9uSXRlbURyYWdvdmVyKCRldmVudCwgMClcIlxuICAgICAgICAoZHJhZ2VudGVyKT1cImNhbmNlbEV2ZW50KCRldmVudClcIlxuICAgID57e3BsYWNlaG9sZGVySXRlbX19PC9kaXY+XG4gICAgPGRpdlxuICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGk9aW5kZXg7XCJcbiAgICAgICAgW25nQ2xhc3NdPVwiWyBpdGVtQ2xhc3MsIGkgPT09IGFjdGl2ZUl0ZW0gPyBpdGVtQWN0aXZlQ2xhc3MgOiAnJyBdXCJcbiAgICAgICAgW25nU3R5bGVdPVwiZ2V0SXRlbVN0eWxlKGkgPT09IGFjdGl2ZUl0ZW0pXCJcbiAgICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXG4gICAgICAgIChkcmFnc3RhcnQpPVwib25JdGVtRHJhZ3N0YXJ0KCRldmVudCwgaXRlbSwgaSlcIlxuICAgICAgICAoZHJhZ2VuZCk9XCJyZXNldEFjdGl2ZUl0ZW0oJGV2ZW50KVwiXG4gICAgICAgIChkcmFnb3Zlcik9XCJvbkl0ZW1EcmFnb3ZlcigkZXZlbnQsIGkpXCJcbiAgICAgICAgKGRyYWdlbnRlcik9XCJjYW5jZWxFdmVudCgkZXZlbnQpXCJcbiAgICAgICAgYXJpYS1kcm9wZWZmZWN0PVwibW92ZVwiXG4gICAgICAgIFthdHRyLmFyaWEtZ3JhYmJlZF09XCJpID09PSBhY3RpdmVJdGVtXCJcbiAgICA+PG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIml0ZW1UZW1wbGF0ZSB8fCBkZWZJdGVtVGVtcGxhdGVcIlxuICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2l0ZW06aXRlbSwgaW5kZXg6IGl9XCI+PC9uZy10ZW1wbGF0ZT48L2Rpdj5cbjwvZGl2PlxuXG48bmctdGVtcGxhdGUgI2RlZkl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIj57e2l0ZW0udmFsdWV9fTwvbmctdGVtcGxhdGU+XG5gLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvcnRhYmxlQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcml2YXRlIHN0YXRpYyBnbG9iYWxab25lSW5kZXggPSAwO1xuICAvKiogZmllbGQgbmFtZSBpZiBpbnB1dCBhcnJheSBjb25zaXN0cyBvZiBvYmplY3RzICovXG4gIEBJbnB1dCgpIGZpZWxkTmFtZT86IHN0cmluZztcblxuICAvKiogY2xhc3MgbmFtZSBmb3IgaXRlbXMgd3JhcHBlciAqL1xuICBASW5wdXQoKSB3cmFwcGVyQ2xhc3MgPSAnJztcblxuICAvKiogc3R5bGUgb2JqZWN0IGZvciBpdGVtcyB3cmFwcGVyICovXG4gIEBJbnB1dCgpIHdyYXBwZXJTdHlsZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXG4gIC8qKiBjbGFzcyBuYW1lIGZvciBpdGVtICovXG4gIEBJbnB1dCgpIGl0ZW1DbGFzcyA9ICcnO1xuXG4gIC8qKiBzdHlsZSBvYmplY3QgZm9yIGl0ZW0gKi9cbiAgQElucHV0KCkgaXRlbVN0eWxlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG5cbiAgLyoqIGNsYXNzIG5hbWUgZm9yIGFjdGl2ZSBpdGVtICovXG4gIEBJbnB1dCgpIGl0ZW1BY3RpdmVDbGFzcyA9ICcnO1xuXG4gIC8qKiBzdHlsZSBvYmplY3QgZm9yIGFjdGl2ZSBpdGVtICovXG4gIEBJbnB1dCgpIGl0ZW1BY3RpdmVTdHlsZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXG4gIC8qKiBjbGFzcyBuYW1lIGZvciBwbGFjZWhvbGRlciAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlckNsYXNzID0gJyc7XG5cbiAgLyoqIHN0eWxlIG9iamVjdCBmb3IgcGxhY2Vob2xkZXIgKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXJTdHlsZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXG4gIC8qKiBwbGFjZWhvbGRlciBpdGVtIHdoaWNoIHdpbGwgYmUgc2hvd24gaWYgY29sbGVjdGlvbiBpcyBlbXB0eSAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlckl0ZW0gPSAnJztcblxuICAvKiogdXNlZCB0byBzcGVjaWZ5IGEgY3VzdG9tIGl0ZW0gdGVtcGxhdGUuIFRlbXBsYXRlIHZhcmlhYmxlczogaXRlbSBhbmQgaW5kZXg7ICovXG4gIEBJbnB1dCgpIGl0ZW1UZW1wbGF0ZT86IFRlbXBsYXRlUmVmPHVua25vd24+O1xuXG4gIC8qKiBmaXJlZCBvbiBhcnJheSBjaGFuZ2UgKHJlb3JkZXJpbmcsIGluc2VydCwgcmVtb3ZlKSwgc2FtZSBhcyA8Y29kZT5uZ01vZGVsQ2hhbmdlPC9jb2RlPi5cbiAgICogIFJldHVybnMgbmV3IGl0ZW1zIGNvbGxlY3Rpb24gYXMgYSBwYXlsb2FkLlxuICAgKi9cbiAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8dW5rbm93bltdPiA9IG5ldyBFdmVudEVtaXR0ZXI8dW5rbm93bltdPigpO1xuXG4gIHNob3dQbGFjZWhvbGRlciA9IGZhbHNlO1xuICBhY3RpdmVJdGVtID0gLTE7XG5cbiAgZ2V0IGl0ZW1zKCk6IFNvcnRhYmxlSXRlbVtdIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cblxuICBzZXQgaXRlbXModmFsdWU6IFNvcnRhYmxlSXRlbVtdKSB7XG4gICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcbiAgICBjb25zdCBvdXQgPSB0aGlzLml0ZW1zLm1hcCgoeDogU29ydGFibGVJdGVtKSA9PiB4LmluaXREYXRhKTtcbiAgICB0aGlzLm9uQ2hhbmdlZChvdXQpO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdChvdXQpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgb25Ub3VjaGVkOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIG9uQ2hhbmdlZDogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIHByaXZhdGUgdHJhbnNmZXI6IERyYWdnYWJsZUl0ZW1TZXJ2aWNlO1xuICBwcml2YXRlIGN1cnJlbnRab25lSW5kZXg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfaXRlbXM6IFNvcnRhYmxlSXRlbVtdID0gW107XG5cbiAgY29uc3RydWN0b3IodHJhbnNmZXI6IERyYWdnYWJsZUl0ZW1TZXJ2aWNlKSB7XG4gICAgdGhpcy50cmFuc2ZlciA9IHRyYW5zZmVyO1xuICAgIHRoaXMuY3VycmVudFpvbmVJbmRleCA9IFNvcnRhYmxlQ29tcG9uZW50Lmdsb2JhbFpvbmVJbmRleCsrO1xuICAgIHRoaXMudHJhbnNmZXJcbiAgICAgIC5vbkNhcHR1cmVJdGVtKClcbiAgICAgIC5zdWJzY3JpYmUoKGl0ZW06IERyYWdnYWJsZUl0ZW0pID0+IHRoaXMub25Ecm9wKGl0ZW0pKTtcbiAgfVxuXG4gIG9uSXRlbURyYWdzdGFydChcbiAgICBldmVudDogRHJhZ0V2ZW50LFxuICAgIGl0ZW06IFNvcnRhYmxlSXRlbSxcbiAgICBpOiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5pbml0RHJhZ3N0YXJ0RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy50cmFuc2Zlci5kcmFnU3RhcnQoe1xuICAgICAgZXZlbnQsXG4gICAgICBpdGVtLFxuICAgICAgaSxcbiAgICAgIGluaXRpYWxJbmRleDogaSxcbiAgICAgIGxhc3Rab25lSW5kZXg6IHRoaXMuY3VycmVudFpvbmVJbmRleCxcbiAgICAgIG92ZXJab25lSW5kZXg6IHRoaXMuY3VycmVudFpvbmVJbmRleFxuICAgIH0pO1xuICB9XG5cbiAgb25JdGVtRHJhZ292ZXIoZXZlbnQ6IERyYWdFdmVudCwgaTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnRyYW5zZmVyLmdldEl0ZW0oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRyYWdJdGVtID0gdGhpcy50cmFuc2Zlci5jYXB0dXJlSXRlbShcbiAgICAgIHRoaXMuY3VycmVudFpvbmVJbmRleCxcbiAgICAgIHRoaXMuaXRlbXMubGVuZ3RoXG4gICAgKTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgbGV0IG5ld0FycmF5OiBhbnlbXSA9IFtdO1xuXG4gICAgaWYgKCFkcmFnSXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgIG5ld0FycmF5ID0gW2RyYWdJdGVtLml0ZW1dO1xuICAgIH0gZWxzZSBpZiAoZHJhZ0l0ZW0uaSA+IGkpIHtcbiAgICAgIG5ld0FycmF5ID0gW1xuICAgICAgICAuLi50aGlzLml0ZW1zLnNsaWNlKDAsIGkpLFxuICAgICAgICBkcmFnSXRlbS5pdGVtLFxuICAgICAgICAuLi50aGlzLml0ZW1zLnNsaWNlKGksIGRyYWdJdGVtLmkpLFxuICAgICAgICAuLi50aGlzLml0ZW1zLnNsaWNlKGRyYWdJdGVtLmkgKyAxKVxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy5kcmFnZ2VkSXRlbS5pIDwgaVxuICAgICAgbmV3QXJyYXkgPSBbXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoMCwgZHJhZ0l0ZW0uaSksXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoZHJhZ0l0ZW0uaSArIDEsIGkgKyAxKSxcbiAgICAgICAgZHJhZ0l0ZW0uaXRlbSxcbiAgICAgICAgLi4udGhpcy5pdGVtcy5zbGljZShpICsgMSlcbiAgICAgIF07XG4gICAgfVxuICAgIHRoaXMuaXRlbXMgPSBuZXdBcnJheTtcbiAgICBkcmFnSXRlbS5pID0gaTtcbiAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBpO1xuICAgIHRoaXMudXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpO1xuICB9XG5cbiAgY2FuY2VsRXZlbnQoZXZlbnQ/OiBEcmFnRXZlbnR8TW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy50cmFuc2Zlci5nZXRJdGVtKCkgfHwgIWV2ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBvbkRyb3AoaXRlbTogRHJhZ2dhYmxlSXRlbSk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIGl0ZW0gJiZcbiAgICAgIGl0ZW0ub3ZlclpvbmVJbmRleCAhPT0gdGhpcy5jdXJyZW50Wm9uZUluZGV4ICYmXG4gICAgICBpdGVtLmxhc3Rab25lSW5kZXggPT09IHRoaXMuY3VycmVudFpvbmVJbmRleFxuICAgICkge1xuICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKFxuICAgICAgICAoeDogU29ydGFibGVJdGVtLCBpOiBudW1iZXIpID0+IGkgIT09IGl0ZW0uaVxuICAgICAgKTtcbiAgICAgIHRoaXMudXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpO1xuICAgIH1cbiAgICB0aGlzLnJlc2V0QWN0aXZlSXRlbSgpO1xuICB9XG5cbiAgcmVzZXRBY3RpdmVJdGVtKGV2ZW50PzogRHJhZ0V2ZW50fE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbEV2ZW50KGV2ZW50KTtcbiAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAtMTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlZCA9IGNhbGxiYWNrO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGNhbGxiYWNrO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55W10pOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICB0aGlzLml0ZW1zID0gdmFsdWUubWFwKCh4OiBhbnksIGk6IG51bWJlcikgPT4gKHtcbiAgICAgICAgaWQ6IGksXG4gICAgICAgIGluaXREYXRhOiB4LFxuICAgICAgICB2YWx1ZTogdGhpcy5maWVsZE5hbWUgPyB4W3RoaXMuZmllbGROYW1lXSA6IHhcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVBsYWNlaG9sZGVyU3RhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZVBsYWNlaG9sZGVyU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93UGxhY2Vob2xkZXIgPSAhdGhpcy5faXRlbXMubGVuZ3RoO1xuICB9XG5cbiAgZ2V0SXRlbVN0eWxlKGlzQWN0aXZlOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIGlzQWN0aXZlXG4gICAgICA/IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaXRlbVN0eWxlLCB0aGlzLml0ZW1BY3RpdmVTdHlsZSlcbiAgICAgIDogdGhpcy5pdGVtU3R5bGU7XG4gIH1cblxuICBwcml2YXRlIGluaXREcmFnc3RhcnRFdmVudChldmVudDogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgLy8gaXQgaXMgbmVjZXNzYXJ5IGZvciBtb3ppbGxhXG4gICAgLy8gZGF0YSB0eXBlIHNob3VsZCBiZSAnVGV4dCcgaW5zdGVhZCBvZiAndGV4dC9wbGFpbicgdG8ga2VlcCBjb21wYXRpYmlsaXR5XG4gICAgLy8gd2l0aCBJRVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlcj8uc2V0RGF0YSgnVGV4dCcsICdwbGFjZWhvbGRlcicpO1xuICB9XG59XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBTb3J0YWJsZUl0ZW0ge1xuICBpZDogbnVtYmVyO1xuICB2YWx1ZTogc3RyaW5nO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBpbml0RGF0YTogYW55O1xufVxuIl19
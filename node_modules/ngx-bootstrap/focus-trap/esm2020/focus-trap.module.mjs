import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusTrapManager } from './focus-trap-manager';
import { InteractivityChecker } from './interactivity-checker';
import { FocusTrapDirective } from './focus-trap';
import { Platform } from './platform';
import * as i0 from "@angular/core";
export class FocusTrapModule {
    static forRoot() {
        return {
            ngModule: FocusTrapModule,
            providers: [
                FocusTrapManager,
                Platform,
                InteractivityChecker
            ]
        };
    }
}
FocusTrapModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: FocusTrapModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FocusTrapModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: FocusTrapModule, declarations: [FocusTrapDirective], imports: [CommonModule], exports: [FocusTrapDirective] });
FocusTrapModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: FocusTrapModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: FocusTrapModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [FocusTrapDirective],
                    exports: [FocusTrapDirective]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtdHJhcC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZm9jdXMtdHJhcC9mb2N1cy10cmFwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7O0FBT3RDLE1BQU0sT0FBTyxlQUFlO0lBQzFCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDVCxnQkFBZ0I7Z0JBQ2hCLFFBQVE7Z0JBQ1Isb0JBQW9CO2FBQ3JCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OzRHQVZVLGVBQWU7NkdBQWYsZUFBZSxpQkFIWCxrQkFBa0IsYUFEdkIsWUFBWSxhQUVaLGtCQUFrQjs2R0FFakIsZUFBZSxZQUpqQixDQUFDLFlBQVksQ0FBQzsyRkFJWixlQUFlO2tCQUwzQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2lCQUM5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGb2N1c1RyYXBNYW5hZ2VyIH0gZnJvbSAnLi9mb2N1cy10cmFwLW1hbmFnZXInO1xuaW1wb3J0IHsgSW50ZXJhY3Rpdml0eUNoZWNrZXIgfSBmcm9tICcuL2ludGVyYWN0aXZpdHktY2hlY2tlcic7XG5pbXBvcnQgeyBGb2N1c1RyYXBEaXJlY3RpdmUgfSBmcm9tICcuL2ZvY3VzLXRyYXAnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuL3BsYXRmb3JtJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0ZvY3VzVHJhcERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtGb2N1c1RyYXBEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIEZvY3VzVHJhcE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Rm9jdXNUcmFwTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBGb2N1c1RyYXBNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRm9jdXNUcmFwTWFuYWdlcixcbiAgICAgICAgUGxhdGZvcm0sXG4gICAgICAgIEludGVyYWN0aXZpdHlDaGVja2VyXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19
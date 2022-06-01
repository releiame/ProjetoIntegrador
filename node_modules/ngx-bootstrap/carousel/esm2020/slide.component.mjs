import { Component, HostBinding, Input } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import * as i0 from "@angular/core";
import * as i1 from "./carousel.component";
export class SlideComponent {
    constructor(carousel) {
        /** Is current slide active */
        this.active = false;
        this.itemWidth = '100%';
        this.order = 0;
        this.isAnimated = false;
        /** Wraps element by appropriate CSS classes */
        this.addClass = true;
        this.multilist = false;
        this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    ngOnInit() {
        this.carousel.addSlide(this);
        this.itemWidth = `${100 / this.carousel.itemsPerSlide}%`;
        this.multilist = this.carousel?.itemsPerSlide > 1;
    }
    /** Fires changes in container collection after removing of this slide instance */
    ngOnDestroy() {
        this.carousel.removeSlide(this);
    }
}
SlideComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SlideComponent, deps: [{ token: i1.CarouselComponent }], target: i0.ɵɵFactoryTarget.Component });
SlideComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: SlideComponent, selector: "slide", inputs: { active: "active" }, host: { properties: { "attr.aria-hidden": "!active", "class.multilist-margin": "multilist", "class.active": "this.active", "style.width": "this.itemWidth", "style.order": "this.order", "class.carousel-animation": "this.isAnimated", "class.item": "this.addClass", "class.carousel-item": "this.addClass" } }, ngImport: i0, template: `
    <div [class.active]="active" class="item">
      <ng-content></ng-content>
    </div>
  `, isInline: true, styles: [":host.carousel-animation{transition:opacity .6s ease,visibility .6s ease;float:left}:host.carousel-animation.active{opacity:1;visibility:visible}:host.carousel-animation:not(.active){display:block;position:absolute;opacity:0;visibility:hidden}:host.multilist-margin{margin-right:auto}:host.carousel-item{perspective:1000px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SlideComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'slide',
                    template: `
    <div [class.active]="active" class="item">
      <ng-content></ng-content>
    </div>
  `,
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        '[attr.aria-hidden]': '!active',
                        '[class.multilist-margin]': 'multilist'
                    },
                    styles: [`
    :host.carousel-animation {
       transition: opacity 0.6s ease, visibility 0.6s ease;
       float: left;
    }
    :host.carousel-animation.active {
      opacity: 1;
      visibility: visible;
    }
    :host.carousel-animation:not(.active) {
      display: block;
      position: absolute;
      opacity: 0;
      visibility: hidden;
    }
    :host.multilist-margin {
      margin-right: auto;
    }
    :host.carousel-item {
      perspective: 1000px;
    }
  `]
                }]
        }], ctorParameters: function () { return [{ type: i1.CarouselComponent }]; }, propDecorators: { active: [{
                type: HostBinding,
                args: ['class.active']
            }, {
                type: Input
            }], itemWidth: [{
                type: HostBinding,
                args: ['style.width']
            }], order: [{
                type: HostBinding,
                args: ['style.order']
            }], isAnimated: [{
                type: HostBinding,
                args: ['class.carousel-animation']
            }], addClass: [{
                type: HostBinding,
                args: ['class.item']
            }, {
                type: HostBinding,
                args: ['class.carousel-item']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2Nhcm91c2VsL3NsaWRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFFWCxLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQXFDekQsTUFBTSxPQUFPLGNBQWM7SUFrQnpCLFlBQVksUUFBMkI7UUFqQnZDLDhCQUE4QjtRQUc5QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWEsY0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNuQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ0csZUFBVSxHQUFHLEtBQUssQ0FBQztRQUU1RCwrQ0FBK0M7UUFHL0MsYUFBUSxHQUFHLElBQUksQ0FBQztRQUloQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWhCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCw4RUFBOEU7SUFDOUUsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsa0ZBQWtGO0lBQ2xGLFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzsyR0FoQ1UsY0FBYzsrRkFBZCxjQUFjLDhYQWpDZjs7OztHQUlUOzJGQTZCVSxjQUFjO2tCQW5DMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsT0FBTztvQkFDakIsUUFBUSxFQUFFOzs7O0dBSVQ7b0JBQ0QscUVBQXFFO29CQUNyRSxJQUFJLEVBQUU7d0JBQ0osb0JBQW9CLEVBQUUsU0FBUzt3QkFDL0IsMEJBQTBCLEVBQUUsV0FBVztxQkFDeEM7b0JBQ0QsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCUixDQUFDO2lCQUNIO3dHQUtDLE1BQU07c0JBRkwsV0FBVzt1QkFBQyxjQUFjOztzQkFDMUIsS0FBSztnQkFHc0IsU0FBUztzQkFBcEMsV0FBVzt1QkFBQyxhQUFhO2dCQUNFLEtBQUs7c0JBQWhDLFdBQVc7dUJBQUMsYUFBYTtnQkFDZSxVQUFVO3NCQUFsRCxXQUFXO3VCQUFDLDBCQUEwQjtnQkFLdkMsUUFBUTtzQkFGUCxXQUFXO3VCQUFDLFlBQVk7O3NCQUN4QixXQUFXO3VCQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tICcuL2Nhcm91c2VsLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NsaWRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtjbGFzcy5hY3RpdmVdPVwiYWN0aXZlXCIgY2xhc3M9XCJpdGVtXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxuICBob3N0OiB7XG4gICAgJ1thdHRyLmFyaWEtaGlkZGVuXSc6ICchYWN0aXZlJyxcbiAgICAnW2NsYXNzLm11bHRpbGlzdC1tYXJnaW5dJzogJ211bHRpbGlzdCdcbiAgfSxcbiAgc3R5bGVzOiBbYFxuICAgIDpob3N0LmNhcm91c2VsLWFuaW1hdGlvbiB7XG4gICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2UsIHZpc2liaWxpdHkgMC42cyBlYXNlO1xuICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgICA6aG9zdC5jYXJvdXNlbC1hbmltYXRpb24uYWN0aXZlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbiAgICA6aG9zdC5jYXJvdXNlbC1hbmltYXRpb246bm90KC5hY3RpdmUpIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG4gICAgOmhvc3QubXVsdGlsaXN0LW1hcmdpbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxuICAgIDpob3N0LmNhcm91c2VsLWl0ZW0ge1xuICAgICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKiogSXMgY3VycmVudCBzbGlkZSBhY3RpdmUgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBASW5wdXQoKVxuICBhY3RpdmUgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoJykgaXRlbVdpZHRoID0gJzEwMCUnO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm9yZGVyJykgb3JkZXIgPSAwO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNhcm91c2VsLWFuaW1hdGlvbicpIGlzQW5pbWF0ZWQgPSBmYWxzZTtcblxuICAvKiogV3JhcHMgZWxlbWVudCBieSBhcHByb3ByaWF0ZSBDU1MgY2xhc3NlcyAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLml0ZW0nKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNhcm91c2VsLWl0ZW0nKVxuICBhZGRDbGFzcyA9IHRydWU7XG5cbiAgLyoqIExpbmsgdG8gUGFyZW50KGNvbnRhaW5lci1jb2xsZWN0aW9uKSBjb21wb25lbnQgKi9cbiAgcHJvdGVjdGVkIGNhcm91c2VsOiBDYXJvdXNlbENvbXBvbmVudDtcbiAgbXVsdGlsaXN0ID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKGNhcm91c2VsOiBDYXJvdXNlbENvbXBvbmVudCkge1xuICAgIHRoaXMuY2Fyb3VzZWwgPSBjYXJvdXNlbDtcbiAgfVxuXG4gIC8qKiBGaXJlcyBjaGFuZ2VzIGluIGNvbnRhaW5lciBjb2xsZWN0aW9uIGFmdGVyIGFkZGluZyBhIG5ldyBzbGlkZSBpbnN0YW5jZSAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhcm91c2VsLmFkZFNsaWRlKHRoaXMpO1xuICAgIHRoaXMuaXRlbVdpZHRoID0gYCR7MTAwIC8gdGhpcy5jYXJvdXNlbC5pdGVtc1BlclNsaWRlfSVgO1xuICAgIHRoaXMubXVsdGlsaXN0ID0gdGhpcy5jYXJvdXNlbD8uaXRlbXNQZXJTbGlkZSA+IDE7XG4gIH1cblxuICAvKiogRmlyZXMgY2hhbmdlcyBpbiBjb250YWluZXIgY29sbGVjdGlvbiBhZnRlciByZW1vdmluZyBvZiB0aGlzIHNsaWRlIGluc3RhbmNlICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2Fyb3VzZWwucmVtb3ZlU2xpZGUodGhpcyk7XG4gIH1cbn1cbiJdfQ==
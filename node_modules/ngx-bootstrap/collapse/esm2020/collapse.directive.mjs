import { AnimationBuilder } from '@angular/animations';
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2 } from '@angular/core';
import { collapseAnimation, expandAnimation } from './collapse-animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/animations";
export class CollapseDirective {
    constructor(_el, _renderer, _builder) {
        this._el = _el;
        this._renderer = _renderer;
        /** This event fires as soon as content collapses */
        this.collapsed = new EventEmitter();
        /** This event fires when collapsing is started */
        this.collapses = new EventEmitter();
        /** This event fires as soon as content becomes visible */
        this.expanded = new EventEmitter();
        /** This event fires when expansion is started */
        this.expands = new EventEmitter();
        // shown
        this.isExpanded = true;
        this.collapseNewValue = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
        /** turn on/off animation */
        this.isAnimated = false;
        this._display = 'block';
        this._stylesLoaded = false;
        this._COLLAPSE_ACTION_NAME = 'collapse';
        this._EXPAND_ACTION_NAME = 'expand';
        this._factoryCollapseAnimation = _builder.build(collapseAnimation);
        this._factoryExpandAnimation = _builder.build(expandAnimation);
    }
    set display(value) {
        this._display = value;
        if (value === 'none') {
            this.hide();
            return;
        }
        this.isAnimated ? this.toggle() : this.show();
    }
    /** A flag indicating visibility of content (shown or hidden) */
    set collapse(value) {
        this.collapseNewValue = value;
        if (!this._player || this._isAnimationDone) {
            this.isExpanded = value;
            this.toggle();
        }
    }
    get collapse() {
        return this.isExpanded;
    }
    ngAfterViewChecked() {
        this._stylesLoaded = true;
        if (!this._player || !this._isAnimationDone) {
            return;
        }
        this._player.reset();
        this._renderer.setStyle(this._el.nativeElement, 'height', '*');
    }
    /** allows to manually toggle content visibility */
    toggle() {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /** allows to manually hide content */
    hide() {
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapsing = false;
        this.collapses.emit(this);
        this._isAnimationDone = false;
        this.animationRun(this.isAnimated, this._COLLAPSE_ACTION_NAME)(() => {
            this._isAnimationDone = true;
            if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
                this.show();
                return;
            }
            this.collapsed.emit(this);
            this._renderer.setStyle(this._el.nativeElement, 'display', 'none');
        });
    }
    /** allows to manually show collapsed content */
    show() {
        this._renderer.setStyle(this._el.nativeElement, 'display', this._display);
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.isCollapsing = false;
        this.expands.emit(this);
        this._isAnimationDone = false;
        this.animationRun(this.isAnimated, this._EXPAND_ACTION_NAME)(() => {
            this._isAnimationDone = true;
            if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
                this.hide();
                return;
            }
            this.expanded.emit(this);
            this._renderer.removeStyle(this._el.nativeElement, 'overflow');
        });
    }
    animationRun(isAnimated, action) {
        if (!isAnimated || !this._stylesLoaded) {
            return (callback) => callback();
        }
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');
        this._renderer.addClass(this._el.nativeElement, 'collapse');
        const factoryAnimation = (action === this._EXPAND_ACTION_NAME)
            ? this._factoryExpandAnimation
            : this._factoryCollapseAnimation;
        if (this._player) {
            this._player.destroy();
        }
        this._player = factoryAnimation.create(this._el.nativeElement);
        this._player.play();
        return (callback) => this._player?.onDone(callback);
    }
}
CollapseDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: CollapseDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.AnimationBuilder }], target: i0.ɵɵFactoryTarget.Directive });
CollapseDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.1.1", type: CollapseDirective, selector: "[collapse]", inputs: { display: "display", isAnimated: "isAnimated", collapse: "collapse" }, outputs: { collapsed: "collapsed", collapses: "collapses", expanded: "expanded", expands: "expands" }, host: { properties: { "class.collapse": "this.isCollapse", "class.in": "this.isExpanded", "class.show": "this.isExpanded", "attr.aria-hidden": "this.isCollapsed", "class.collapsing": "this.isCollapsing" } }, exportAs: ["bs-collapse"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: CollapseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[collapse]',
                    exportAs: 'bs-collapse',
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        '[class.collapse]': 'true'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.AnimationBuilder }]; }, propDecorators: { collapsed: [{
                type: Output
            }], collapses: [{
                type: Output
            }], expanded: [{
                type: Output
            }], expands: [{
                type: Output
            }], isExpanded: [{
                type: HostBinding,
                args: ['class.in']
            }, {
                type: HostBinding,
                args: ['class.show']
            }], isCollapsed: [{
                type: HostBinding,
                args: ['attr.aria-hidden']
            }], isCollapse: [{
                type: HostBinding,
                args: ['class.collapse']
            }], isCollapsing: [{
                type: HostBinding,
                args: ['class.collapsing']
            }], display: [{
                type: Input
            }], isAnimated: [{
                type: Input
            }], collapse: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbGxhcHNlL2NvbGxhcHNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBR2pCLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDaEIsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBVS9CLE1BQU0sT0FBTyxpQkFBaUI7SUE0RDVCLFlBQ1UsR0FBZSxFQUNmLFNBQW9CLEVBQzVCLFFBQTBCO1FBRmxCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBN0Q5QixvREFBb0Q7UUFDMUMsY0FBUyxHQUFvQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFFLGtEQUFrRDtRQUN4QyxjQUFTLEdBQW9DLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUUsMERBQTBEO1FBQ2hELGFBQVEsR0FBb0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6RSxpREFBaUQ7UUFDdkMsWUFBTyxHQUFvQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hFLFFBQVE7UUFJUixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixTQUFTO1FBQ3dCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3JELGNBQWM7UUFDaUIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNqRCxrQkFBa0I7UUFDZSxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQWF0RCw0QkFBNEI7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQWVwQixhQUFRLEdBQUcsT0FB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V0FBVzt1QkFBQyxVQUFVOztzQkFDdEIsV0FBVzt1QkFBQyxZQUFZO2dCQUtRLFdBQVc7c0JBQTNDLFdBQVc7dUJBQUMsa0JBQWtCO2dCQUVBLFVBQVU7c0JBQXhDLFdBQVc7dUJBQUMsZ0JBQWdCO2dCQUVJLFlBQVk7c0JBQTVDLFdBQVc7dUJBQUMsa0JBQWtCO2dCQUczQixPQUFPO3NCQURWLEtBQUs7Z0JBWUcsVUFBVTtzQkFBbEIsS0FBSztnQkFHRixRQUFRO3NCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBbmltYXRpb25CdWlsZGVyLFxuICBBbmltYXRpb25GYWN0b3J5LFxuICBBbmltYXRpb25QbGF5ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7XG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBjb2xsYXBzZUFuaW1hdGlvbixcbiAgZXhwYW5kQW5pbWF0aW9uXG59IGZyb20gJy4vY29sbGFwc2UtYW5pbWF0aW9ucyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjb2xsYXBzZV0nLFxuICBleHBvcnRBczogJ2JzLWNvbGxhcHNlJyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1ob3N0LW1ldGFkYXRhLXByb3BlcnR5XG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmNvbGxhcHNlXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIENvbGxhcHNlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIC8qKiBUaGlzIGV2ZW50IGZpcmVzIGFzIHNvb24gYXMgY29udGVudCBjb2xsYXBzZXMgKi9cbiAgQE91dHB1dCgpIGNvbGxhcHNlZDogRXZlbnRFbWl0dGVyPENvbGxhcHNlRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIFRoaXMgZXZlbnQgZmlyZXMgd2hlbiBjb2xsYXBzaW5nIGlzIHN0YXJ0ZWQgKi9cbiAgQE91dHB1dCgpIGNvbGxhcHNlczogRXZlbnRFbWl0dGVyPENvbGxhcHNlRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIFRoaXMgZXZlbnQgZmlyZXMgYXMgc29vbiBhcyBjb250ZW50IGJlY29tZXMgdmlzaWJsZSAqL1xuICBAT3V0cHV0KCkgZXhwYW5kZWQ6IEV2ZW50RW1pdHRlcjxDb2xsYXBzZURpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKiBUaGlzIGV2ZW50IGZpcmVzIHdoZW4gZXhwYW5zaW9uIGlzIHN0YXJ0ZWQgKi9cbiAgQE91dHB1dCgpIGV4cGFuZHM6IEV2ZW50RW1pdHRlcjxDb2xsYXBzZURpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIHNob3duXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW4nKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNob3cnKVxuXG4gIGlzRXhwYW5kZWQgPSB0cnVlO1xuICBjb2xsYXBzZU5ld1ZhbHVlID0gdHJ1ZTtcbiAgLy8gaGlkZGVuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWhpZGRlbicpIGlzQ29sbGFwc2VkID0gZmFsc2U7XG4gIC8vIHN0YWxlIHN0YXRlXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29sbGFwc2UnKSBpc0NvbGxhcHNlID0gdHJ1ZTtcbiAgLy8gYW5pbWF0aW9uIHN0YXRlXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29sbGFwc2luZycpIGlzQ29sbGFwc2luZyA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNwbGF5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNwbGF5ID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlID09PSAnbm9uZScpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaXNBbmltYXRlZCA/IHRoaXMudG9nZ2xlKCkgOiB0aGlzLnNob3coKTtcbiAgfVxuXG4gIC8qKiB0dXJuIG9uL29mZiBhbmltYXRpb24gKi9cbiAgQElucHV0KCkgaXNBbmltYXRlZCA9IGZhbHNlO1xuICAvKiogQSBmbGFnIGluZGljYXRpbmcgdmlzaWJpbGl0eSBvZiBjb250ZW50IChzaG93biBvciBoaWRkZW4pICovXG4gIEBJbnB1dCgpXG4gIHNldCBjb2xsYXBzZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY29sbGFwc2VOZXdWYWx1ZSA9IHZhbHVlO1xuICAgIGlmICghdGhpcy5fcGxheWVyIHx8IHRoaXMuX2lzQW5pbWF0aW9uRG9uZSkge1xuICAgICAgdGhpcy5pc0V4cGFuZGVkID0gdmFsdWU7XG4gICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjb2xsYXBzZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0V4cGFuZGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGlzcGxheSA9ICdibG9jayc7XG4gIHByaXZhdGUgX2lzQW5pbWF0aW9uRG9uZT86IGJvb2xlYW47XG4gIHByaXZhdGUgX3BsYXllcj86IEFuaW1hdGlvblBsYXllcjtcbiAgcHJpdmF0ZSBfc3R5bGVzTG9hZGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfQ09MTEFQU0VfQUNUSU9OX05BTUUgPSAnY29sbGFwc2UnO1xuICBwcml2YXRlIF9FWFBBTkRfQUNUSU9OX05BTUUgPSAnZXhwYW5kJztcblxuICBwcml2YXRlIHJlYWRvbmx5IF9mYWN0b3J5Q29sbGFwc2VBbmltYXRpb246IEFuaW1hdGlvbkZhY3Rvcnk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2ZhY3RvcnlFeHBhbmRBbmltYXRpb246IEFuaW1hdGlvbkZhY3Rvcnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBfYnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlclxuICApIHtcbiAgICB0aGlzLl9mYWN0b3J5Q29sbGFwc2VBbmltYXRpb24gPSBfYnVpbGRlci5idWlsZChjb2xsYXBzZUFuaW1hdGlvbik7XG4gICAgdGhpcy5fZmFjdG9yeUV4cGFuZEFuaW1hdGlvbiA9IF9idWlsZGVyLmJ1aWxkKGV4cGFuZEFuaW1hdGlvbik7XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fc3R5bGVzTG9hZGVkID0gdHJ1ZTtcblxuICAgIGlmICghdGhpcy5fcGxheWVyIHx8ICF0aGlzLl9pc0FuaW1hdGlvbkRvbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9wbGF5ZXIucmVzZXQoKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgJyonKTtcbiAgfVxuXG4gIC8qKiBhbGxvd3MgdG8gbWFudWFsbHkgdG9nZ2xlIGNvbnRlbnQgdmlzaWJpbGl0eSAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNFeHBhbmRlZCkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBhbGxvd3MgdG8gbWFudWFsbHkgaGlkZSBjb250ZW50ICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5pc0NvbGxhcHNpbmcgPSB0cnVlO1xuICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSB0cnVlO1xuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLmNvbGxhcHNlcy5lbWl0KHRoaXMpO1xuXG4gICAgdGhpcy5faXNBbmltYXRpb25Eb25lID0gZmFsc2U7XG5cbiAgICB0aGlzLmFuaW1hdGlvblJ1bih0aGlzLmlzQW5pbWF0ZWQsIHRoaXMuX0NPTExBUFNFX0FDVElPTl9OQU1FKSgoKSA9PiB7XG4gICAgICB0aGlzLl9pc0FuaW1hdGlvbkRvbmUgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuY29sbGFwc2VOZXdWYWx1ZSAhPT0gdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLmlzQW5pbWF0ZWQpIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jb2xsYXBzZWQuZW1pdCh0aGlzKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9KTtcbiAgfVxuICAvKiogYWxsb3dzIHRvIG1hbnVhbGx5IHNob3cgY29sbGFwc2VkIGNvbnRlbnQgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsIHRoaXMuX2Rpc3BsYXkpO1xuXG4gICAgdGhpcy5pc0NvbGxhcHNpbmcgPSB0cnVlO1xuICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWU7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLmV4cGFuZHMuZW1pdCh0aGlzKTtcblxuICAgIHRoaXMuX2lzQW5pbWF0aW9uRG9uZSA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbWF0aW9uUnVuKHRoaXMuaXNBbmltYXRlZCwgdGhpcy5fRVhQQU5EX0FDVElPTl9OQU1FKSgoKSA9PiB7XG4gICAgICB0aGlzLl9pc0FuaW1hdGlvbkRvbmUgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuY29sbGFwc2VOZXdWYWx1ZSAhPT0gdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLmlzQW5pbWF0ZWQpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5leHBhbmRlZC5lbWl0KHRoaXMpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ292ZXJmbG93Jyk7XG4gICAgfSk7XG4gIH1cblxuICBhbmltYXRpb25SdW4oaXNBbmltYXRlZDogYm9vbGVhbiwgYWN0aW9uOiBzdHJpbmcpIHtcbiAgICBpZiAoIWlzQW5pbWF0ZWQgfHwgIXRoaXMuX3N0eWxlc0xvYWRlZCkge1xuICAgICAgcmV0dXJuIChjYWxsYmFjazogKCkgPT4gdm9pZCkgPT4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2NvbGxhcHNlJyk7XG5cbiAgICBjb25zdCBmYWN0b3J5QW5pbWF0aW9uID0gKGFjdGlvbiA9PT0gdGhpcy5fRVhQQU5EX0FDVElPTl9OQU1FKVxuICAgICAgPyB0aGlzLl9mYWN0b3J5RXhwYW5kQW5pbWF0aW9uXG4gICAgICA6IHRoaXMuX2ZhY3RvcnlDb2xsYXBzZUFuaW1hdGlvbjtcblxuICAgIGlmICh0aGlzLl9wbGF5ZXIpIHtcbiAgICAgIHRoaXMuX3BsYXllci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcGxheWVyID0gZmFjdG9yeUFuaW1hdGlvbi5jcmVhdGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5fcGxheWVyLnBsYXkoKTtcblxuICAgIHJldHVybiAoY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHRoaXMuX3BsYXllcj8ub25Eb25lKGNhbGxiYWNrKTtcbiAgfVxufVxuIl19
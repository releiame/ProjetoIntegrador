/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/* eslint-disable */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
let hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    hasV8BreakIterator = (typeof Intl !== 'undefined' && Intl.v8BreakIterator);
}
catch {
    hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
export class Platform {
    constructor(_platformId) {
        this._platformId = _platformId;
        // We want to use the Angular platform check because if the Document is shimmed
        // without the navigator, the following checks will fail. This is preferred because
        // sometimes the Document may be shimmed without the user's knowledge or intention
        /** Whether the Angular application is being rendered in the browser. */
        this.isBrowser = this._platformId ?
            isPlatformBrowser(this._platformId) : typeof document === 'object' && !!document;
        /** Whether the current browser is Microsoft Edge. */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /** Whether the current rendering engine is Microsoft Trident. */
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
        /** Whether the current rendering engine is Blink. */
        this.BLINK = this.isBrowser && (!!(window.chrome || hasV8BreakIterator) &&
            typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.
        /** Whether the current rendering engine is WebKit. */
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /** Whether the current platform is Apple iOS. */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !('MSStream' in window);
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        /** Whether the current browser is Firefox. */
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /** Whether the current platform is Android. */
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.
        /** Whether the current browser is Safari. */
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
}
Platform.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: Platform, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
Platform.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: Platform, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: Platform, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZm9jdXMtdHJhcC9wbGF0Zm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxvQkFBb0I7QUFFcEIsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUVwRCw0RUFBNEU7QUFDNUUsbURBQW1EO0FBQ25ELElBQUksa0JBQTJCLENBQUM7QUFFaEMsNkZBQTZGO0FBQzdGLDhGQUE4RjtBQUM5RixxREFBcUQ7QUFDckQsc0RBQXNEO0FBQ3RELHFEQUFxRDtBQUNyRCxJQUFJO0lBQ0Ysa0JBQWtCLEdBQUcsQ0FBQyxPQUFPLElBQUksS0FBSyxXQUFXLElBQUssSUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0NBQ3JGO0FBQUMsTUFBTTtJQUNOLGtCQUFrQixHQUFHLEtBQUssQ0FBQztDQUM1QjtBQUVEOzs7R0FHRztBQUVILE1BQU0sT0FBTyxRQUFRO0lBOENuQixZQUF5QyxXQUFtQjtRQUFuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQTdDNUQsK0VBQStFO1FBQy9FLG1GQUFtRjtRQUNuRixrRkFBa0Y7UUFDbEYsd0VBQXdFO1FBQ3hFLGNBQVMsR0FBWSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLFFBQVEsS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUVuRixxREFBcUQ7UUFDckQsU0FBSSxHQUFZLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdEUsaUVBQWlFO1FBQ2pFLFlBQU8sR0FBWSxJQUFJLENBQUMsU0FBUyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakYsMkZBQTJGO1FBQzNGLHFEQUFxRDtRQUNyRCxVQUFLLEdBQVksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFFLE1BQWMsQ0FBQyxNQUFNLElBQUksa0JBQWtCLENBQUM7WUFDbEYsT0FBTyxHQUFHLEtBQUssV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU3RCx1RkFBdUY7UUFDdkYsK0VBQStFO1FBQy9FLHNEQUFzRDtRQUN0RCxXQUFNLEdBQVksSUFBSSxDQUFDLFNBQVM7WUFDOUIsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFekYsaURBQWlEO1FBQ2pELFFBQUcsR0FBWSxJQUFJLENBQUMsU0FBUyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1lBQzNFLENBQUMsQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDLENBQUM7UUFFMUIseUZBQXlGO1FBQ3pGLGlGQUFpRjtRQUNqRixpRkFBaUY7UUFDakYsaURBQWlEO1FBQ2pELDhDQUE4QztRQUM5QyxZQUFPLEdBQVksSUFBSSxDQUFDLFNBQVMsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXRGLCtDQUErQztRQUM3QyxvRkFBb0Y7UUFDdEYsWUFBTyxHQUFZLElBQUksQ0FBQyxTQUFTLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTNGLDZGQUE2RjtRQUM3Riw4RkFBOEY7UUFDOUYsOERBQThEO1FBQzlELDZDQUE2QztRQUM3QyxXQUFNLEdBQVksSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBR3ZGLENBQUM7O3FHQS9DVSxRQUFRLGtCQThDQyxXQUFXO3lHQTlDcEIsUUFBUSxjQURLLE1BQU07MkZBQ25CLFFBQVE7a0JBRHBCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzBEQStDc0IsTUFBTTswQkFBL0MsTUFBTTsyQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLy8gV2hldGhlciB0aGUgY3VycmVudCBwbGF0Zm9ybSBzdXBwb3J0cyB0aGUgVjggQnJlYWsgSXRlcmF0b3IuIFRoZSBWOCBjaGVja1xuLy8gaXMgbmVjZXNzYXJ5IHRvIGRldGVjdCBhbGwgQmxpbmsgYmFzZWQgYnJvd3NlcnMuXG5sZXQgaGFzVjhCcmVha0l0ZXJhdG9yOiBib29sZWFuO1xuXG4vLyBXZSBuZWVkIGEgdHJ5L2NhdGNoIGFyb3VuZCB0aGUgcmVmZXJlbmNlIHRvIGBJbnRsYCwgYmVjYXVzZSBhY2Nlc3NpbmcgaXQgaW4gc29tZSBjYXNlcyBjYW5cbi8vIGNhdXNlIElFIHRvIHRocm93LiBUaGVzZSBjYXNlcyBhcmUgdGllZCB0byBwYXJ0aWN1bGFyIHZlcnNpb25zIG9mIFdpbmRvd3MgYW5kIGNhbiBoYXBwZW4gaWZcbi8vIHRoZSBjb25zdW1lciBpcyBwcm92aWRpbmcgYSBwb2x5ZmlsbGVkIGBNYXBgLiBTZWU6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L0NoYWtyYUNvcmUvaXNzdWVzLzMxODlcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2NvbXBvbmVudHMvaXNzdWVzLzE1Njg3XG50cnkge1xuICBoYXNWOEJyZWFrSXRlcmF0b3IgPSAodHlwZW9mIEludGwgIT09ICd1bmRlZmluZWQnICYmIChJbnRsIGFzIGFueSkudjhCcmVha0l0ZXJhdG9yKTtcbn0gY2F0Y2gge1xuICBoYXNWOEJyZWFrSXRlcmF0b3IgPSBmYWxzZTtcbn1cblxuLyoqXG4gKiBTZXJ2aWNlIHRvIGRldGVjdCB0aGUgY3VycmVudCBwbGF0Zm9ybSBieSBjb21wYXJpbmcgdGhlIHVzZXJBZ2VudCBzdHJpbmdzIGFuZFxuICogY2hlY2tpbmcgYnJvd3Nlci1zcGVjaWZpYyBnbG9iYWwgcHJvcGVydGllcy5cbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSB7XG4gIC8vIFdlIHdhbnQgdG8gdXNlIHRoZSBBbmd1bGFyIHBsYXRmb3JtIGNoZWNrIGJlY2F1c2UgaWYgdGhlIERvY3VtZW50IGlzIHNoaW1tZWRcbiAgLy8gd2l0aG91dCB0aGUgbmF2aWdhdG9yLCB0aGUgZm9sbG93aW5nIGNoZWNrcyB3aWxsIGZhaWwuIFRoaXMgaXMgcHJlZmVycmVkIGJlY2F1c2VcbiAgLy8gc29tZXRpbWVzIHRoZSBEb2N1bWVudCBtYXkgYmUgc2hpbW1lZCB3aXRob3V0IHRoZSB1c2VyJ3Mga25vd2xlZGdlIG9yIGludGVudGlvblxuICAvKiogV2hldGhlciB0aGUgQW5ndWxhciBhcHBsaWNhdGlvbiBpcyBiZWluZyByZW5kZXJlZCBpbiB0aGUgYnJvd3Nlci4gKi9cbiAgaXNCcm93c2VyOiBib29sZWFuID0gdGhpcy5fcGxhdGZvcm1JZCA/XG4gICAgaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5fcGxhdGZvcm1JZCkgOiB0eXBlb2YgZG9jdW1lbnQgPT09ICdvYmplY3QnICYmICEhZG9jdW1lbnQ7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBpcyBNaWNyb3NvZnQgRWRnZS4gKi9cbiAgRURHRTogYm9vbGVhbiA9IHRoaXMuaXNCcm93c2VyICYmIC8oZWRnZSkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBjdXJyZW50IHJlbmRlcmluZyBlbmdpbmUgaXMgTWljcm9zb2Z0IFRyaWRlbnQuICovXG4gIFRSSURFTlQ6IGJvb2xlYW4gPSB0aGlzLmlzQnJvd3NlciAmJiAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4gIC8vIEVkZ2VIVE1MIGFuZCBUcmlkZW50IG1vY2sgQmxpbmsgc3BlY2lmaWMgdGhpbmdzIGFuZCBuZWVkIHRvIGJlIGV4Y2x1ZGVkIGZyb20gdGhpcyBjaGVjay5cbiAgLyoqIFdoZXRoZXIgdGhlIGN1cnJlbnQgcmVuZGVyaW5nIGVuZ2luZSBpcyBCbGluay4gKi9cbiAgQkxJTks6IGJvb2xlYW4gPSB0aGlzLmlzQnJvd3NlciAmJiAoISEoKHdpbmRvdyBhcyBhbnkpLmNocm9tZSB8fCBoYXNWOEJyZWFrSXRlcmF0b3IpICYmXG4gICAgdHlwZW9mIENTUyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuRURHRSAmJiAhdGhpcy5UUklERU5UKTtcblxuICAvLyBXZWJraXQgaXMgcGFydCBvZiB0aGUgdXNlckFnZW50IGluIEVkZ2VIVE1MLCBCbGluayBhbmQgVHJpZGVudC4gVGhlcmVmb3JlIHdlIG5lZWQgdG9cbiAgLy8gZW5zdXJlIHRoYXQgV2Via2l0IHJ1bnMgc3RhbmRhbG9uZSBhbmQgaXMgbm90IHVzZWQgYXMgYW5vdGhlciBlbmdpbmUncyBiYXNlLlxuICAvKiogV2hldGhlciB0aGUgY3VycmVudCByZW5kZXJpbmcgZW5naW5lIGlzIFdlYktpdC4gKi9cbiAgV0VCS0lUOiBib29sZWFuID0gdGhpcy5pc0Jyb3dzZXIgJiZcbiAgICAvQXBwbGVXZWJLaXQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF0aGlzLkJMSU5LICYmICF0aGlzLkVER0UgJiYgIXRoaXMuVFJJREVOVDtcblxuICAvKiogV2hldGhlciB0aGUgY3VycmVudCBwbGF0Zm9ybSBpcyBBcHBsZSBpT1MuICovXG4gIElPUzogYm9vbGVhbiA9IHRoaXMuaXNCcm93c2VyICYmIC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmXG4gICAgISgnTVNTdHJlYW0nIGluIHdpbmRvdyk7XG5cbiAgLy8gSXQncyBkaWZmaWN1bHQgdG8gZGV0ZWN0IHRoZSBwbGFpbiBHZWNrbyBlbmdpbmUsIGJlY2F1c2UgbW9zdCBvZiB0aGUgYnJvd3NlcnMgaWRlbnRpZnlcbiAgLy8gdGhlbSBzZWxmIGFzIEdlY2tvLWxpa2UgYnJvd3NlcnMgYW5kIG1vZGlmeSB0aGUgdXNlckFnZW50J3MgYWNjb3JkaW5nIHRvIHRoYXQuXG4gIC8vIFNpbmNlIHdlIG9ubHkgY292ZXIgb25lIGV4cGxpY2l0IEZpcmVmb3ggY2FzZSwgd2UgY2FuIHNpbXBseSBjaGVjayBmb3IgRmlyZWZveFxuICAvLyBpbnN0ZWFkIG9mIGhhdmluZyBhbiB1bnN0YWJsZSBjaGVjayBmb3IgR2Vja28uXG4gIC8qKiBXaGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgaXMgRmlyZWZveC4gKi9cbiAgRklSRUZPWDogYm9vbGVhbiA9IHRoaXMuaXNCcm93c2VyICYmIC8oZmlyZWZveHxtaW5lZmllbGQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAvKiogV2hldGhlciB0aGUgY3VycmVudCBwbGF0Zm9ybSBpcyBBbmRyb2lkLiAqL1xuICAgIC8vIFRyaWRlbnQgb24gbW9iaWxlIGFkZHMgdGhlIGFuZHJvaWQgcGxhdGZvcm0gdG8gdGhlIHVzZXJBZ2VudCB0byB0cmljayBkZXRlY3Rpb25zLlxuICBBTkRST0lEOiBib29sZWFuID0gdGhpcy5pc0Jyb3dzZXIgJiYgL2FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF0aGlzLlRSSURFTlQ7XG5cbiAgLy8gU2FmYXJpIGJyb3dzZXJzIHdpbGwgaW5jbHVkZSB0aGUgU2FmYXJpIGtleXdvcmQgaW4gdGhlaXIgdXNlckFnZW50LiBTb21lIGJyb3dzZXJzIG1heSBmYWtlXG4gIC8vIHRoaXMgYW5kIGp1c3QgcGxhY2UgdGhlIFNhZmFyaSBrZXl3b3JkIGluIHRoZSB1c2VyQWdlbnQuIFRvIGJlIG1vcmUgc2FmZSBhYm91dCBTYWZhcmkgZXZlcnlcbiAgLy8gU2FmYXJpIGJyb3dzZXIgc2hvdWxkIGFsc28gdXNlIFdlYmtpdCBhcyBpdHMgbGF5b3V0IGVuZ2luZS5cbiAgLyoqIFdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBpcyBTYWZhcmkuICovXG4gIFNBRkFSSTogYm9vbGVhbiA9IHRoaXMuaXNCcm93c2VyICYmIC9zYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIHRoaXMuV0VCS0lUO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgX3BsYXRmb3JtSWQ6IE9iamVjdCkge1xuICB9XG59XG4iXX0=
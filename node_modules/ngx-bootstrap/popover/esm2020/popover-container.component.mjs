import { ChangeDetectionStrategy, Input, Component } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { getBsVer } from 'ngx-bootstrap/utils';
import { PlacementForBs5, checkMargins } from 'ngx-bootstrap/positioning';
import * as i0 from "@angular/core";
import * as i1 from "./popover.config";
import * as i2 from "@angular/common";
export class PopoverContainerComponent {
    constructor(config) {
        this._placement = 'top';
        Object.assign(this, config);
    }
    set placement(value) {
        if (!this._bsVersions.isBs5) {
            this._placement = value;
        }
        else {
            this._placement = PlacementForBs5[value];
        }
    }
    ;
    get _bsVersions() {
        return getBsVer();
    }
    checkMarginNecessity() {
        return checkMargins(this._placement);
    }
}
PopoverContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: PopoverContainerComponent, deps: [{ token: i1.PopoverConfig }], target: i0.ɵɵFactoryTarget.Component });
PopoverContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: PopoverContainerComponent, selector: "popover-container", inputs: { placement: "placement", title: "title" }, host: { attributes: { "role": "tooltip" }, properties: { "attr.id": "popoverId", "class": "\"popover in popover-\" + _placement + \" \" + \"bs-popover-\" + _placement + \" \" + _placement + \" \" + containerClass + \" \" + checkMarginNecessity()", "class.show": "!_bsVersions.isBs3", "class.bs3": "_bsVersions.isBs3" }, styleAttribute: "display:block;" }, ngImport: i0, template: "<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\n<div class=\"popover-content popover-body\">\n  <ng-content></ng-content>\n</div>\n", styles: [":host.bs3.popover-top{margin-bottom:10px}:host.bs3.popover.top>.arrow{margin-left:-2px}:host.bs3.popover.top{margin-bottom:10px}:host.popover.bottom>.arrow{margin-left:-4px}:host.bs3.bs-popover-left{margin-right:.5rem}:host.bs3.bs-popover-right .arrow,:host.bs3.bs-popover-left .arrow{margin:.3rem 0}\n"], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: PopoverContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'popover-container', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[attr.id]': 'popoverId',
                        '[class]': '"popover in popover-" + _placement + " " + "bs-popover-" + _placement + " " + _placement + " " + containerClass + " " + checkMarginNecessity()',
                        '[class.show]': '!_bsVersions.isBs3',
                        '[class.bs3]': '_bsVersions.isBs3',
                        role: 'tooltip',
                        style: 'display:block;'
                    }, styles: [
                        `
    :host.bs3.popover-top {
      margin-bottom: 10px;
    }
    :host.bs3.popover.top>.arrow {
      margin-left: -2px;
    }
    :host.bs3.popover.top {
      margin-bottom: 10px;
    }
    :host.popover.bottom>.arrow {
      margin-left: -4px;
    }
    :host.bs3.bs-popover-left {
      margin-right: .5rem;
    }
    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{
      margin: .3rem 0;
    }
    `
                    ], template: "<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\n<div class=\"popover-content popover-body\">\n  <ng-content></ng-content>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.PopoverConfig }]; }, propDecorators: { placement: [{
                type: Input
            }], title: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3BvcG92ZXIvcG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vc3JjL3BvcG92ZXIvcG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQWMsTUFBTSxxQkFBcUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBdUIsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQXVDL0YsTUFBTSxPQUFPLHlCQUF5QjtJQW1CcEMsWUFBWSxNQUFxQjtRQU5qQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBT2pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFwQkQsSUFBYSxTQUFTLENBQUMsS0FBMEI7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFJLGVBQWUsQ0FBQyxLQUFxQyxDQUFDLENBQUM7U0FDM0U7SUFDSCxDQUFDO0lBQUEsQ0FBQztJQVFGLElBQUksV0FBVztRQUNiLE9BQU8sUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQU1ELG9CQUFvQjtRQUNsQixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7c0hBekJVLHlCQUF5QjswR0FBekIseUJBQXlCLGlkQzFDdEMsNk1BS0E7MkZEcUNhLHlCQUF5QjtrQkFyQ3JDLFNBQVM7K0JBQ0UsbUJBQW1CLG1CQUNaLHVCQUF1QixDQUFDLE1BQU0sUUFFekM7d0JBQ0osV0FBVyxFQUFFLFdBQVc7d0JBQ3hCLFNBQVMsRUFDUCxnSkFBZ0o7d0JBQ2xKLGNBQWMsRUFBRSxvQkFBb0I7d0JBQ3BDLGFBQWEsRUFBRSxtQkFBbUI7d0JBQ2xDLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxnQkFBZ0I7cUJBQ3hCLFVBQ087d0JBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FtQkM7cUJBQ0Y7b0dBSVksU0FBUztzQkFBckIsS0FBSztnQkFRRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9wb3ZlckNvbmZpZyB9IGZyb20gJy4vcG9wb3Zlci5jb25maWcnO1xuaW1wb3J0IHsgZ2V0QnNWZXIsIElCc1ZlcnNpb24gfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcbmltcG9ydCB7IFBsYWNlbWVudEZvckJzNSwgY2hlY2tNYXJnaW5zLCBBdmFpbGJsZUJTUG9zaXRpb25zIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BvcG92ZXItY29udGFpbmVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxuICBob3N0OiB7XG4gICAgJ1thdHRyLmlkXSc6ICdwb3BvdmVySWQnLFxuICAgICdbY2xhc3NdJzpcbiAgICAgICdcInBvcG92ZXIgaW4gcG9wb3Zlci1cIiArIF9wbGFjZW1lbnQgKyBcIiBcIiArIFwiYnMtcG9wb3Zlci1cIiArIF9wbGFjZW1lbnQgKyBcIiBcIiArIF9wbGFjZW1lbnQgKyBcIiBcIiArIGNvbnRhaW5lckNsYXNzICsgXCIgXCIgKyBjaGVja01hcmdpbk5lY2Vzc2l0eSgpJyxcbiAgICAnW2NsYXNzLnNob3ddJzogJyFfYnNWZXJzaW9ucy5pc0JzMycsXG4gICAgJ1tjbGFzcy5iczNdJzogJ19ic1ZlcnNpb25zLmlzQnMzJyxcbiAgICByb2xlOiAndG9vbHRpcCcsXG4gICAgc3R5bGU6ICdkaXNwbGF5OmJsb2NrOydcbiAgfSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIDpob3N0LmJzMy5wb3BvdmVyLXRvcCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICA6aG9zdC5iczMucG9wb3Zlci50b3A+LmFycm93IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xuICAgIH1cbiAgICA6aG9zdC5iczMucG9wb3Zlci50b3Age1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgOmhvc3QucG9wb3Zlci5ib3R0b20+LmFycm93IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICAgIH1cbiAgICA6aG9zdC5iczMuYnMtcG9wb3Zlci1sZWZ0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgfVxuICAgIDpob3N0LmJzMy5icy1wb3BvdmVyLXJpZ2h0IC5hcnJvdywgOmhvc3QuYnMzLmJzLXBvcG92ZXItbGVmdCAuYXJyb3d7XG4gICAgICBtYXJnaW46IC4zcmVtIDA7XG4gICAgfVxuICAgIGBcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3BvcG92ZXItY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgc2V0IHBsYWNlbWVudCh2YWx1ZTogQXZhaWxibGVCU1Bvc2l0aW9ucykge1xuICAgIGlmICghdGhpcy5fYnNWZXJzaW9ucy5pc0JzNSkge1xuICAgICAgdGhpcy5fcGxhY2VtZW50ID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BsYWNlbWVudCA9ICBQbGFjZW1lbnRGb3JCczVbdmFsdWUgYXMga2V5b2YgdHlwZW9mIFBsYWNlbWVudEZvckJzNV07XG4gICAgfVxuICB9O1xuXG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nO1xuXG4gIGNvbnRhaW5lckNsYXNzPzogc3RyaW5nO1xuICBwb3BvdmVySWQ/OiBzdHJpbmc7XG4gIF9wbGFjZW1lbnQgPSAndG9wJztcblxuICBnZXQgX2JzVmVyc2lvbnMoKTogSUJzVmVyc2lvbiB7XG4gICAgcmV0dXJuIGdldEJzVmVyKCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFBvcG92ZXJDb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cblxuICBjaGVja01hcmdpbk5lY2Vzc2l0eSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBjaGVja01hcmdpbnModGhpcy5fcGxhY2VtZW50KTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInBvcG92ZXItYXJyb3cgYXJyb3dcIj48L2Rpdj5cbjxoMyBjbGFzcz1cInBvcG92ZXItdGl0bGUgcG9wb3Zlci1oZWFkZXJcIiAqbmdJZj1cInRpdGxlXCI+e3sgdGl0bGUgfX08L2gzPlxuPGRpdiBjbGFzcz1cInBvcG92ZXItY29udGVudCBwb3BvdmVyLWJvZHlcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG4iXX0=
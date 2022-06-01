import { window } from './facade/browser';
import { currentBsVersion } from './theme-provider';
export class Utils {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static reflow(element) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ((bs) => bs)(element.offsetHeight);
    }
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static getStyles(elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        let view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = window;
        }
        return view.getComputedStyle(elem);
    }
    static stackOverflowConfig() {
        const bsVer = currentBsVersion();
        return {
            crossorigin: bsVer !== 'bs3' ? "anonymous" : undefined,
            integrity: bsVer === 'bs5' ? 'sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We' : bsVer === 'bs4' ? 'sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2' : undefined,
            cdnLink: bsVer === 'bs5' ? 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css' : bsVer === 'bs4' ? 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css' : 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbHMvdXRpbHMuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXBELE1BQU0sT0FBTyxLQUFLO0lBQ2hCLDhEQUE4RDtJQUM5RCxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQVk7UUFDeEIsOERBQThEO1FBQzlELENBQUMsQ0FBQyxFQUFPLEVBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsZ0ZBQWdGO0lBQ2hGLDhEQUE4RDtJQUM5RCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQVM7UUFDeEIsdURBQXVEO1FBQ3ZELDBDQUEwQztRQUMxQywrRUFBK0U7UUFDL0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFFMUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDekIsSUFBSSxHQUFHLE1BQU0sQ0FBQztTQUNmO1FBRUQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVBLE1BQU0sQ0FBQyxtQkFBbUI7UUFDekIsTUFBTSxLQUFLLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQztRQUMvQixPQUFPO1lBQ1AsV0FBVyxFQUFFLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUN0RCxTQUFTLEVBQUUsS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMseUVBQXlFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLHlFQUF5RSxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQ2hOLE9BQU8sRUFBRSxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMseUVBQXlFLENBQUMsQ0FBQyxDQUFDLHVFQUF1RTtTQUM3USxDQUFDO0lBQ0gsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2luZG93IH0gZnJvbSAnLi9mYWNhZGUvYnJvd3Nlcic7XG5pbXBvcnQgeyBjdXJyZW50QnNWZXJzaW9uIH0gZnJvbSAnLi90aGVtZS1wcm92aWRlcic7XG5cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIHN0YXRpYyByZWZsb3coZWxlbWVudDogYW55KTogdm9pZCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAoKGJzOiBhbnkpOiB2b2lkID0+IGJzKShlbGVtZW50Lm9mZnNldEhlaWdodCk7XG4gIH1cblxuICAvLyBzb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L2Jsb2IvbWFzdGVyL3NyYy9jc3MvdmFyL2dldFN0eWxlcy5qc1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBzdGF0aWMgZ2V0U3R5bGVzKGVsZW06IGFueSk6IGFueSB7XG4gICAgLy8gU3VwcG9ydDogSUUgPD0xMSBvbmx5LCBGaXJlZm94IDw9MzAgKCMxNTA5OCwgIzE0MTUwKVxuICAgIC8vIElFIHRocm93cyBvbiBlbGVtZW50cyBjcmVhdGVkIGluIHBvcHVwc1xuICAgIC8vIEZGIG1lYW53aGlsZSB0aHJvd3Mgb24gZnJhbWUgZWxlbWVudHMgdGhyb3VnaCBcImRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGVcIlxuICAgIGxldCB2aWV3ID0gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXG4gICAgaWYgKCF2aWV3IHx8ICF2aWV3Lm9wZW5lcikge1xuICAgICAgdmlldyA9IHdpbmRvdztcbiAgICB9XG5cbiAgICByZXR1cm4gdmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICB9XG5cbiAgIHN0YXRpYyBzdGFja092ZXJmbG93Q29uZmlnKCk6IHsgY3Jvc3NvcmlnaW4/OiBzdHJpbmcsIGludGVncml0eT86IHN0cmluZywgY2RuTGluazogc3RyaW5nIH0ge1xuICAgIGNvbnN0IGJzVmVyID0gY3VycmVudEJzVmVyc2lvbigpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgIGNyb3Nzb3JpZ2luOiBic1ZlciAhPT0gJ2JzMycgPyBcImFub255bW91c1wiIDogdW5kZWZpbmVkLFxuICAgICAgaW50ZWdyaXR5OiBic1ZlciA9PT0gJ2JzNScgPyAnc2hhMzg0LUt5WlhFQWczUWhxTE1wRzhyKzhmaEFYTFJrMnZ2b0MyZjNCMDl6VlhuOENBNVFJVmZaT0ozQkNzdzJQMHAvV2UnIDogYnNWZXIgPT09ICdiczQnID8gJ3NoYTM4NC1UWDh0MjdFY1JFM2UvaWhVN3ptUXhWbmNEQXk1dUlLejRyRWtnSVhlTWVkNE0wamxmSURQdmc2dXFLSTJ4WHIyJyA6IHVuZGVmaW5lZCxcbiAgICAgIGNkbkxpbms6IGJzVmVyID09PSAnYnM1JyA/ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjEuMC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcycgOiBic1ZlciA9PT0gJ2JzNCcgPyAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANC41LjMvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnIDogJ2h0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMy43L2Nzcy9ib290c3RyYXAubWluLmNzcycsXG4gICAgfTtcbiAgIH1cbn1cbiJdfQ==
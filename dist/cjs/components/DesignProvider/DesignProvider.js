'use strict';

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var reactSlot = require('@radix-ui/react-slot');
var theme_css = require('../../tokens/theme.css.js');
var DesignProvider_css = require('./DesignProvider.css.js');

var DesignProvider = function (_a) {
    var _b = _a.asChild, asChild = _b === void 0 ? false : _b, props = tslib.__rest(_a, ["asChild"]);
    var Component = asChild ? reactSlot.Slot : "body";
    var _c = props.theme, theme = _c === void 0 ? 'teamhub' : _c, _d = props.mode, mode = _d === void 0 ? 'auto' : _d, className = props.className, others = tslib.__rest(props, ["theme", "mode", "className"]);
    var _e = react.useState(mode), colorMode = _e[0], setColorMode = _e[1];
    var themeClass = theme_css.teamhubLightTheme;
    if (theme == 'teamhub' && colorMode == 'dark') {
        themeClass = theme_css.teamhubDarkTheme;
    }
    else if (theme == 'play') {
        themeClass = theme_css.playTheme;
    }
    else if (theme == 'joynup') {
        themeClass = theme_css.playTheme;
    }
    react.useEffect(function () {
        if (mode == 'auto') {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setColorMode('dark');
            }
            else {
                setColorMode('light');
            }
        }
    }, []);
    return (jsxRuntime.jsx(Component, tslib.__assign({ className: [
            'tmhub-design-system-root',
            themeClass,
            DesignProvider_css.designProviderRecipe(),
            className
        ].filter(Boolean).join(' ') }, others)));
};

module.exports = DesignProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVzaWduUHJvdmlkZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rlc2lnblByb3ZpZGVyL0Rlc2lnblByb3ZpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2xvdCB9IGZyb20gJ0ByYWRpeC11aS9yZWFjdC1zbG90JztcbmltcG9ydCB7IEFzQ2hpbGRQcm9wcyB9IGZyb20gJy4uLy4uL3V0aWwvQXNDaGlsZFByb3BzJztcbmltcG9ydCB7IERlc2lnblByb3ZpZGVyUHJvcHMgfSBmcm9tICcuL0Rlc2lnblByb3ZpZGVyLnR5cGVzJztcbmltcG9ydCB7XG4gIHRlYW1odWJMaWdodFRoZW1lLFxuICB0ZWFtaHViRGFya1RoZW1lLFxuICBwbGF5VGhlbWUsXG59IGZyb20gJy4uLy4uL3Rva2Vucy90aGVtZS5jc3MnO1xuaW1wb3J0IHsgZGVzaWduUHJvdmlkZXJSZWNpcGUgfSBmcm9tICcuL0Rlc2lnblByb3ZpZGVyLmNzcyc7XG5cbmNvbnN0IERlc2lnblByb3ZpZGVyOiBSZWFjdC5GQzxBc0NoaWxkUHJvcHM8RGVzaWduUHJvdmlkZXJQcm9wcywgXCJib2R5XCI+PiA9ICh7XG4gIGFzQ2hpbGQgPSBmYWxzZSxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgQ29tcG9uZW50ID0gYXNDaGlsZCA/IFNsb3QgOiBcImJvZHlcIjtcblxuICBjb25zdCB7XG4gICAgdGhlbWUgPSAndGVhbWh1YicsXG4gICAgbW9kZSA9ICdhdXRvJyxcbiAgICBjbGFzc05hbWUsXG4gICAgLi4ub3RoZXJzXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbY29sb3JNb2RlLCBzZXRDb2xvck1vZGVdID0gdXNlU3RhdGUobW9kZSk7XG5cbiAgbGV0IHRoZW1lQ2xhc3MgPSB0ZWFtaHViTGlnaHRUaGVtZTtcbiAgaWYgKHRoZW1lID09ICd0ZWFtaHViJyAmJiBjb2xvck1vZGUgPT0gJ2RhcmsnKSB7XG4gICAgdGhlbWVDbGFzcyA9IHRlYW1odWJEYXJrVGhlbWU7XG4gIH0gZWxzZSBpZiAodGhlbWUgPT0gJ3BsYXknKSB7XG4gICAgdGhlbWVDbGFzcyA9IHBsYXlUaGVtZTtcbiAgfSBlbHNlIGlmICh0aGVtZSA9PSAnam95bnVwJykge1xuICAgIHRoZW1lQ2xhc3MgPSBwbGF5VGhlbWU7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobW9kZSA9PSAnYXV0bycpIHtcbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlcykge1xuICAgICAgICBzZXRDb2xvck1vZGUoJ2RhcmsnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldENvbG9yTW9kZSgnbGlnaHQnKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbXBvbmVudCBjbGFzc05hbWU9e1tcbiAgICAgICd0bWh1Yi1kZXNpZ24tc3lzdGVtLXJvb3QnLFxuICAgICAgdGhlbWVDbGFzcyxcbiAgICAgIGRlc2lnblByb3ZpZGVyUmVjaXBlKCksXG4gICAgICBjbGFzc05hbWVcbiAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHsuLi5vdGhlcnN9IC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXNpZ25Qcm92aWRlcjtcbiJdLCJuYW1lcyI6WyJfX3Jlc3QiLCJTbG90IiwidXNlU3RhdGUiLCJ0ZWFtaHViTGlnaHRUaGVtZSIsInRlYW1odWJEYXJrVGhlbWUiLCJwbGF5VGhlbWUiLCJ1c2VFZmZlY3QiLCJfanN4IiwiX19hc3NpZ24iLCJkZXNpZ25Qcm92aWRlclJlY2lwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBV00sSUFBQSxjQUFjLEdBQXdELFVBQUMsRUFHNUUsRUFBQTtJQUZDLElBQUEsRUFBQSxHQUFBLEVBQUEsQ0FBQSxPQUFlLEVBQWYsT0FBTyxHQUFHLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFLLEtBQUEsRUFDWixLQUFLLEdBRm1FQSxZQUFBLENBQUEsRUFBQSxFQUFBLENBQUEsU0FBQSxDQUc1RSxDQURTLENBQUE7SUFFUixJQUFNLFNBQVMsR0FBRyxPQUFPLEdBQUdDLGNBQUksR0FBRyxNQUFNLENBQUM7QUFHeEMsSUFBQSxJQUFBLEVBSUUsR0FBQSxLQUFLLENBSlUsS0FBQSxFQUFqQixLQUFLLEdBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFHLFNBQVMsR0FBQSxFQUFBLEVBQ2pCLEVBQUEsR0FHRSxLQUFLLENBQUEsSUFITSxFQUFiLElBQUksR0FBRyxFQUFBLEtBQUEsS0FBQSxDQUFBLEdBQUEsTUFBTSxHQUFBLEVBQUEsRUFDYixTQUFTLEdBRVAsS0FBSyxDQUFBLFNBRkUsRUFDTixNQUFNLEdBQ1BELFlBQUEsQ0FBQSxLQUFLLEVBTEgsQ0FBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLFdBQUEsQ0FLTCxDQURVLENBQ0Q7SUFFSixJQUFBLEVBQUEsR0FBNEJFLGNBQVEsQ0FBQyxJQUFJLENBQUMsRUFBekMsU0FBUyxHQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsRUFBRSxZQUFZLEdBQUEsRUFBQSxDQUFBLENBQUEsQ0FBa0IsQ0FBQztJQUVqRCxJQUFJLFVBQVUsR0FBR0MsMkJBQWlCLENBQUM7SUFDbkMsSUFBSSxLQUFLLElBQUksU0FBUyxJQUFJLFNBQVMsSUFBSSxNQUFNLEVBQUU7UUFDN0MsVUFBVSxHQUFHQywwQkFBZ0IsQ0FBQztLQUMvQjtBQUFNLFNBQUEsSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1FBQzFCLFVBQVUsR0FBR0MsbUJBQVMsQ0FBQztLQUN4QjtBQUFNLFNBQUEsSUFBSSxLQUFLLElBQUksUUFBUSxFQUFFO1FBQzVCLFVBQVUsR0FBR0EsbUJBQVMsQ0FBQztLQUN4QjtBQUVELElBQUFDLGVBQVMsQ0FBQyxZQUFBO0FBQ1IsUUFBQSxJQUFJLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDbEIsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLENBQUMsT0FBTyxFQUFFO2dCQUM3RCxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0wsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3ZCO1NBQ0Y7S0FDRixFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRVAsSUFBQSxRQUNFQyxjQUFBLENBQUMsU0FBUyxFQUFBQyxjQUFBLENBQUEsRUFBQyxTQUFTLEVBQUU7WUFDcEIsMEJBQTBCO1lBQzFCLFVBQVU7QUFDVixZQUFBQyx1Q0FBb0IsRUFBRTtZQUN0QixTQUFTO0FBQ1YsU0FBQSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUEsRUFBTSxNQUFNLENBQUEsQ0FBSSxFQUMzQztBQUNKOzs7OyJ9

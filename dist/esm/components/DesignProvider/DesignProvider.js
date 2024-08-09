import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import { j as jsxRuntimeExports } from '../../node_modules/react/jsx-runtime.js';
import { useState, useEffect } from 'react';
import { Slot } from '../../node_modules/@radix-ui/react-slot/dist/index.js';
import { teamhubLightTheme, teamhubDarkTheme, playTheme } from '../../tokens/theme.css.vanilla.js';
import { designProviderRecipe } from './DesignProvider.css.vanilla.js';

var DesignProvider = function (_a) {
    var _b = _a.asChild, asChild = _b === void 0 ? false : _b, props = __rest(_a, ["asChild"]);
    var Component = asChild ? Slot : "body";
    var _c = props.theme, theme = _c === void 0 ? 'teamhub' : _c, _d = props.mode, mode = _d === void 0 ? 'auto' : _d, className = props.className, others = __rest(props, ["theme", "mode", "className"]);
    var _e = useState(mode), colorMode = _e[0], setColorMode = _e[1];
    var themeClass = teamhubLightTheme;
    if (theme == 'teamhub' && colorMode == 'dark') {
        themeClass = teamhubDarkTheme;
    }
    else if (theme == 'play') {
        themeClass = playTheme;
    }
    else if (theme == 'joynup') {
        themeClass = playTheme;
    }
    useEffect(function () {
        if (mode == 'auto') {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setColorMode('dark');
            }
            else {
                setColorMode('light');
            }
        }
    }, []);
    return (jsxRuntimeExports.jsx(Component, __assign({ className: [
            'tmhub-design-system-root',
            themeClass,
            designProviderRecipe(),
            className
        ].filter(Boolean).join(' ') }, others)));
};

export { DesignProvider as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVzaWduUHJvdmlkZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rlc2lnblByb3ZpZGVyL0Rlc2lnblByb3ZpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2xvdCB9IGZyb20gJ0ByYWRpeC11aS9yZWFjdC1zbG90JztcbmltcG9ydCB7IEFzQ2hpbGRQcm9wcyB9IGZyb20gJy4uLy4uL3V0aWwvQXNDaGlsZFByb3BzJztcbmltcG9ydCB7IERlc2lnblByb3ZpZGVyUHJvcHMgfSBmcm9tICcuL0Rlc2lnblByb3ZpZGVyLnR5cGVzJztcbmltcG9ydCB7XG4gIHRlYW1odWJMaWdodFRoZW1lLFxuICB0ZWFtaHViRGFya1RoZW1lLFxuICBwbGF5VGhlbWUsXG59IGZyb20gJy4uLy4uL3Rva2Vucy90aGVtZS5jc3MnO1xuaW1wb3J0IHsgZGVzaWduUHJvdmlkZXJSZWNpcGUgfSBmcm9tICcuL0Rlc2lnblByb3ZpZGVyLmNzcyc7XG5cbmNvbnN0IERlc2lnblByb3ZpZGVyOiBSZWFjdC5GQzxBc0NoaWxkUHJvcHM8RGVzaWduUHJvdmlkZXJQcm9wcywgXCJib2R5XCI+PiA9ICh7XG4gIGFzQ2hpbGQgPSBmYWxzZSxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgQ29tcG9uZW50ID0gYXNDaGlsZCA/IFNsb3QgOiBcImJvZHlcIjtcblxuICBjb25zdCB7XG4gICAgdGhlbWUgPSAndGVhbWh1YicsXG4gICAgbW9kZSA9ICdhdXRvJyxcbiAgICBjbGFzc05hbWUsXG4gICAgLi4ub3RoZXJzXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbY29sb3JNb2RlLCBzZXRDb2xvck1vZGVdID0gdXNlU3RhdGUobW9kZSk7XG5cbiAgbGV0IHRoZW1lQ2xhc3MgPSB0ZWFtaHViTGlnaHRUaGVtZTtcbiAgaWYgKHRoZW1lID09ICd0ZWFtaHViJyAmJiBjb2xvck1vZGUgPT0gJ2RhcmsnKSB7XG4gICAgdGhlbWVDbGFzcyA9IHRlYW1odWJEYXJrVGhlbWU7XG4gIH0gZWxzZSBpZiAodGhlbWUgPT0gJ3BsYXknKSB7XG4gICAgdGhlbWVDbGFzcyA9IHBsYXlUaGVtZTtcbiAgfSBlbHNlIGlmICh0aGVtZSA9PSAnam95bnVwJykge1xuICAgIHRoZW1lQ2xhc3MgPSBwbGF5VGhlbWU7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobW9kZSA9PSAnYXV0bycpIHtcbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlcykge1xuICAgICAgICBzZXRDb2xvck1vZGUoJ2RhcmsnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldENvbG9yTW9kZSgnbGlnaHQnKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbXBvbmVudCBjbGFzc05hbWU9e1tcbiAgICAgICd0bWh1Yi1kZXNpZ24tc3lzdGVtLXJvb3QnLFxuICAgICAgdGhlbWVDbGFzcyxcbiAgICAgIGRlc2lnblByb3ZpZGVyUmVjaXBlKCksXG4gICAgICBjbGFzc05hbWVcbiAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHsuLi5vdGhlcnN9IC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXNpZ25Qcm92aWRlcjtcbiJdLCJuYW1lcyI6WyJfanN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBV00sSUFBQSxjQUFjLEdBQXdELFVBQUMsRUFHNUUsRUFBQTtJQUZDLElBQUEsRUFBQSxHQUFBLEVBQUEsQ0FBQSxPQUFlLEVBQWYsT0FBTyxHQUFHLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFLLEtBQUEsRUFDWixLQUFLLEdBRm1FLE1BQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQSxTQUFBLENBRzVFLENBRFMsQ0FBQTtJQUVSLElBQU0sU0FBUyxHQUFHLE9BQU8sR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBR3hDLElBQUEsSUFBQSxFQUlFLEdBQUEsS0FBSyxDQUpVLEtBQUEsRUFBakIsS0FBSyxHQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBRyxTQUFTLEdBQUEsRUFBQSxFQUNqQixFQUFBLEdBR0UsS0FBSyxDQUFBLElBSE0sRUFBYixJQUFJLEdBQUcsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLE1BQU0sR0FBQSxFQUFBLEVBQ2IsU0FBUyxHQUVQLEtBQUssQ0FBQSxTQUZFLEVBQ04sTUFBTSxHQUNQLE1BQUEsQ0FBQSxLQUFLLEVBTEgsQ0FBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLFdBQUEsQ0FLTCxDQURVLENBQ0Q7SUFFSixJQUFBLEVBQUEsR0FBNEIsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUF6QyxTQUFTLEdBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQSxFQUFFLFlBQVksR0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFrQixDQUFDO0lBRWpELElBQUksVUFBVSxHQUFHLGlCQUFpQixDQUFDO0lBQ25DLElBQUksS0FBSyxJQUFJLFNBQVMsSUFBSSxTQUFTLElBQUksTUFBTSxFQUFFO1FBQzdDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztLQUMvQjtBQUFNLFNBQUEsSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1FBQzFCLFVBQVUsR0FBRyxTQUFTLENBQUM7S0FDeEI7QUFBTSxTQUFBLElBQUksS0FBSyxJQUFJLFFBQVEsRUFBRTtRQUM1QixVQUFVLEdBQUcsU0FBUyxDQUFDO0tBQ3hCO0FBRUQsSUFBQSxTQUFTLENBQUMsWUFBQTtBQUNSLFFBQUEsSUFBSSxJQUFJLElBQUksTUFBTSxFQUFFO1lBQ2xCLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLE9BQU8sRUFBRTtnQkFDN0QsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNMLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN2QjtTQUNGO0tBQ0YsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUVQLElBQUEsUUFDRUEscUJBQUEsQ0FBQyxTQUFTLEVBQUEsUUFBQSxDQUFBLEVBQUMsU0FBUyxFQUFFO1lBQ3BCLDBCQUEwQjtZQUMxQixVQUFVO0FBQ1YsWUFBQSxvQkFBb0IsRUFBRTtZQUN0QixTQUFTO0FBQ1YsU0FBQSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUEsRUFBTSxNQUFNLENBQUEsQ0FBSSxFQUMzQztBQUNKOzs7OyJ9

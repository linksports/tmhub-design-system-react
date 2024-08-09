import{__rest as o,__assign as e}from"tslib";import{jsx as a}from"react/jsx-runtime";import{useState as r,useEffect as t}from"react";import{Slot as m}from"@radix-ui/react-slot";import{teamhubLightTheme as i,teamhubDarkTheme as s,playTheme as d}from"../../tokens/theme.css.vanilla.js";import{designProviderRecipe as l}from"./DesignProvider.css.vanilla.js";var n=function(n){var c=n.asChild,h=void 0!==c&&c,u=o(n,["asChild"]),f=h?m:"body",p=u.theme,v=void 0===p?"teamhub":p,b=u.mode,j=void 0===b?"auto":b,k=u.className,y=o(u,["theme","mode","className"]),g=r(j),x=g[0],N=g[1],w=i;return"teamhub"==v&&"dark"==x?w=s:("play"==v||"joynup"==v)&&(w=d),t((function(){"auto"==j&&(window.matchMedia("(prefers-color-scheme: dark)").matches?N("dark"):N("light"))}),[]),a(f,e({className:["tmhub-design-system-root",w,l(),k].filter(Boolean).join(" ")},y))};export{n as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVzaWduUHJvdmlkZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rlc2lnblByb3ZpZGVyL0Rlc2lnblByb3ZpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2xvdCB9IGZyb20gJ0ByYWRpeC11aS9yZWFjdC1zbG90JztcbmltcG9ydCB7IEFzQ2hpbGRQcm9wcyB9IGZyb20gJy4uLy4uL3V0aWwvQXNDaGlsZFByb3BzJztcbmltcG9ydCB7IERlc2lnblByb3ZpZGVyUHJvcHMgfSBmcm9tICcuL0Rlc2lnblByb3ZpZGVyLnR5cGVzJztcbmltcG9ydCB7XG4gIHRlYW1odWJMaWdodFRoZW1lLFxuICB0ZWFtaHViRGFya1RoZW1lLFxuICBwbGF5VGhlbWUsXG59IGZyb20gJy4uLy4uL3Rva2Vucy90aGVtZS5jc3MnO1xuaW1wb3J0IHsgZGVzaWduUHJvdmlkZXJSZWNpcGUgfSBmcm9tICcuL0Rlc2lnblByb3ZpZGVyLmNzcyc7XG5cbmNvbnN0IERlc2lnblByb3ZpZGVyOiBSZWFjdC5GQzxBc0NoaWxkUHJvcHM8RGVzaWduUHJvdmlkZXJQcm9wcywgXCJib2R5XCI+PiA9ICh7XG4gIGFzQ2hpbGQgPSBmYWxzZSxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgQ29tcG9uZW50ID0gYXNDaGlsZCA/IFNsb3QgOiBcImJvZHlcIjtcblxuICBjb25zdCB7XG4gICAgdGhlbWUgPSAndGVhbWh1YicsXG4gICAgbW9kZSA9ICdhdXRvJyxcbiAgICBjbGFzc05hbWUsXG4gICAgLi4ub3RoZXJzXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbY29sb3JNb2RlLCBzZXRDb2xvck1vZGVdID0gdXNlU3RhdGUobW9kZSk7XG5cbiAgbGV0IHRoZW1lQ2xhc3MgPSB0ZWFtaHViTGlnaHRUaGVtZTtcbiAgaWYgKHRoZW1lID09ICd0ZWFtaHViJyAmJiBjb2xvck1vZGUgPT0gJ2RhcmsnKSB7XG4gICAgdGhlbWVDbGFzcyA9IHRlYW1odWJEYXJrVGhlbWU7XG4gIH0gZWxzZSBpZiAodGhlbWUgPT0gJ3BsYXknKSB7XG4gICAgdGhlbWVDbGFzcyA9IHBsYXlUaGVtZTtcbiAgfSBlbHNlIGlmICh0aGVtZSA9PSAnam95bnVwJykge1xuICAgIHRoZW1lQ2xhc3MgPSBwbGF5VGhlbWU7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobW9kZSA9PSAnYXV0bycpIHtcbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlcykge1xuICAgICAgICBzZXRDb2xvck1vZGUoJ2RhcmsnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldENvbG9yTW9kZSgnbGlnaHQnKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbXBvbmVudCBjbGFzc05hbWU9e1tcbiAgICAgICd0bWh1Yi1kZXNpZ24tc3lzdGVtLXJvb3QnLFxuICAgICAgdGhlbWVDbGFzcyxcbiAgICAgIGRlc2lnblByb3ZpZGVyUmVjaXBlKCksXG4gICAgICBjbGFzc05hbWVcbiAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHsuLi5vdGhlcnN9IC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXNpZ25Qcm92aWRlcjtcbiJdLCJuYW1lcyI6WyJEZXNpZ25Qcm92aWRlciIsIl9hIiwiX2IiLCJhc0NoaWxkIiwicHJvcHMiLCJfX3Jlc3QiLCJDb21wb25lbnQiLCJTbG90IiwiX2MiLCJ0aGVtZSIsIl9kIiwibW9kZSIsImNsYXNzTmFtZSIsIm90aGVycyIsIl9lIiwidXNlU3RhdGUiLCJjb2xvck1vZGUiLCJzZXRDb2xvck1vZGUiLCJ0aGVtZUNsYXNzIiwidGVhbWh1YkxpZ2h0VGhlbWUiLCJ0ZWFtaHViRGFya1RoZW1lIiwicGxheVRoZW1lIiwidXNlRWZmZWN0Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJfanN4IiwiX19hc3NpZ24iLCJkZXNpZ25Qcm92aWRlclJlY2lwZSIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIl0sIm1hcHBpbmdzIjoibVdBV00sSUFBQUEsRUFBc0UsU0FBQ0MsR0FDM0UsSUFBQUMsRUFBQUQsRUFBQUUsUUFBQUEsT0FBVSxJQUFBRCxLQUNQRSxFQUZ3RUMsRUFBQUosRUFBQSxDQUFBLFlBSXJFSyxFQUFZSCxFQUFVSSxFQUFPLE9BR2pDQyxFQUlFSixFQUplSyxNQUFqQkEsT0FBSyxJQUFBRCxFQUFHLFVBQVNBLEVBQ2pCRSxFQUdFTixFQUFLTyxLQUhQQSxPQUFPLElBQUFELEVBQUEsT0FBTUEsRUFDYkUsRUFFRVIsRUFBS1EsVUFESkMsRUFDRFIsRUFBQUQsRUFMRSxDQUFBLFFBQUEsT0FBQSxjQU9BVSxFQUE0QkMsRUFBU0osR0FBcENLLEVBQVNGLEVBQUEsR0FBRUcsRUFBWUgsRUFBQSxHQUUxQkksRUFBYUMsRUFtQmpCLE1BbEJhLFdBQVRWLEdBQW1DLFFBQWJPLEVBQ3hCRSxFQUFhRSxHQUNLLFFBQVRYLEdBRVMsVUFBVEEsS0FEVFMsRUFBYUcsR0FLZkMsR0FBVSxXQUNJLFFBQVJYLElBQ0VZLE9BQU9DLFdBQVcsZ0NBQWdDQyxRQUNwRFIsRUFBYSxRQUViQSxFQUFhLFNBR2xCLEdBQUUsSUFHRFMsRUFBQ3BCLEVBQVNxQixFQUFBLENBQUNmLFVBQVcsQ0FDcEIsMkJBQ0FNLEVBQ0FVLElBQ0FoQixHQUNBaUIsT0FBT0MsU0FBU0MsS0FBSyxNQUFVbEIsR0FFckMifQ==

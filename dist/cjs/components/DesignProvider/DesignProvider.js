"use strict";var e=require("tslib"),r=require("react/jsx-runtime"),s=require("react"),t=require("@radix-ui/react-slot"),a=require("../../tokens/theme.css.js"),i=require("./DesignProvider.css.js");module.exports=function(o){var u=o.asChild,m=void 0!==u&&u,d=e.__rest(o,["asChild"]),h=m?t.Slot:"div",c=d.theme,l=void 0===c?"teamhub":c,n=d.mode,v=void 0===n?"auto":n,b=d.className,f=e.__rest(d,["theme","mode","className"]),g=s.useState(v),j=g[0],p=g[1],q=a.teamhubLightTheme;return"teamhub"==l&&"dark"==j?q=a.teamhubDarkTheme:("play"==l||"joynup"==l)&&(q=a.playTheme),s.useEffect((function(){"auto"==v?window.matchMedia("(prefers-color-scheme: dark)").matches?p("dark"):p("light"):p(v)}),[v]),r.jsx(h,e.__assign({className:["tmhub-design-system-root",q,i.designProviderRecipe(),b].filter(Boolean).join(" ")},f))};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVzaWduUHJvdmlkZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rlc2lnblByb3ZpZGVyL0Rlc2lnblByb3ZpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2xvdCB9IGZyb20gJ0ByYWRpeC11aS9yZWFjdC1zbG90JztcbmltcG9ydCB7IEFzQ2hpbGRQcm9wcyB9IGZyb20gJy4uLy4uL3V0aWwvQXNDaGlsZFByb3BzJztcbmltcG9ydCB7IERlc2lnblByb3ZpZGVyUHJvcHMgfSBmcm9tICcuL0Rlc2lnblByb3ZpZGVyLnR5cGVzJztcbmltcG9ydCB7XG4gIHRlYW1odWJMaWdodFRoZW1lLFxuICB0ZWFtaHViRGFya1RoZW1lLFxuICBwbGF5VGhlbWUsXG59IGZyb20gJy4uLy4uL3Rva2Vucy90aGVtZS5jc3MnO1xuaW1wb3J0IHsgZGVzaWduUHJvdmlkZXJSZWNpcGUgfSBmcm9tICcuL0Rlc2lnblByb3ZpZGVyLmNzcyc7XG5cbmNvbnN0IERlc2lnblByb3ZpZGVyOiBSZWFjdC5GQzxBc0NoaWxkUHJvcHM8RGVzaWduUHJvdmlkZXJQcm9wcywgXCJkaXZcIj4+ID0gKHtcbiAgYXNDaGlsZCA9IGZhbHNlLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBDb21wb25lbnQgPSBhc0NoaWxkID8gU2xvdCA6IFwiZGl2XCI7XG5cbiAgY29uc3Qge1xuICAgIHRoZW1lID0gJ3RlYW1odWInLFxuICAgIG1vZGUgPSAnYXV0bycsXG4gICAgY2xhc3NOYW1lLFxuICAgIC4uLm90aGVyc1xuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW2NvbG9yTW9kZSwgc2V0Q29sb3JNb2RlXSA9IHVzZVN0YXRlKG1vZGUpO1xuXG4gIGxldCB0aGVtZUNsYXNzID0gdGVhbWh1YkxpZ2h0VGhlbWU7XG4gIGlmICh0aGVtZSA9PSAndGVhbWh1YicgJiYgY29sb3JNb2RlID09ICdkYXJrJykge1xuICAgIHRoZW1lQ2xhc3MgPSB0ZWFtaHViRGFya1RoZW1lO1xuICB9IGVsc2UgaWYgKHRoZW1lID09ICdwbGF5Jykge1xuICAgIHRoZW1lQ2xhc3MgPSBwbGF5VGhlbWU7XG4gIH0gZWxzZSBpZiAodGhlbWUgPT0gJ2pveW51cCcpIHtcbiAgICB0aGVtZUNsYXNzID0gcGxheVRoZW1lO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1vZGUgPT0gJ2F1dG8nKSB7XG4gICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgc2V0Q29sb3JNb2RlKCdkYXJrJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRDb2xvck1vZGUoJ2xpZ2h0Jyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDb2xvck1vZGUobW9kZSk7XG4gICAgfTs7XG4gIH0sIFttb2RlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29tcG9uZW50IGNsYXNzTmFtZT17W1xuICAgICAgJ3RtaHViLWRlc2lnbi1zeXN0ZW0tcm9vdCcsXG4gICAgICB0aGVtZUNsYXNzLFxuICAgICAgZGVzaWduUHJvdmlkZXJSZWNpcGUoKSxcbiAgICAgIGNsYXNzTmFtZVxuICAgIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gey4uLm90aGVyc30gLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlc2lnblByb3ZpZGVyO1xuIl0sIm5hbWVzIjpbIl9hIiwiX2IiLCJhc0NoaWxkIiwicHJvcHMiLCJfX3Jlc3QiLCJDb21wb25lbnQiLCJTbG90IiwiX2MiLCJ0aGVtZSIsIl9kIiwibW9kZSIsImNsYXNzTmFtZSIsIm90aGVycyIsIl9lIiwidXNlU3RhdGUiLCJjb2xvck1vZGUiLCJzZXRDb2xvck1vZGUiLCJ0aGVtZUNsYXNzIiwidGVhbWh1YkxpZ2h0VGhlbWUiLCJ0ZWFtaHViRGFya1RoZW1lIiwicGxheVRoZW1lIiwidXNlRWZmZWN0Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJfanN4IiwiX19hc3NpZ24iLCJkZXNpZ25Qcm92aWRlclJlY2lwZSIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIl0sIm1hcHBpbmdzIjoibU5BVzJFLFNBQUNBLEdBQzFFLElBQUFDLEVBQUFELEVBQUFFLFFBQUFBLE9BQVUsSUFBQUQsS0FDUEUsRUFGdUVDLEVBQUFBLE9BQUFKLEVBQUEsQ0FBQSxZQUlwRUssRUFBWUgsRUFBVUksRUFBSUEsS0FBRyxNQUdqQ0MsRUFJRUosRUFKZUssTUFBakJBLE9BQUssSUFBQUQsRUFBRyxVQUFTQSxFQUNqQkUsRUFHRU4sRUFBS08sS0FIUEEsT0FBTyxJQUFBRCxFQUFBLE9BQU1BLEVBQ2JFLEVBRUVSLEVBQUtRLFVBREpDLEVBQ0RSLEVBQUFBLE9BQUFELEVBTEUsQ0FBQSxRQUFBLE9BQUEsY0FPQVUsRUFBNEJDLEVBQUFBLFNBQVNKLEdBQXBDSyxFQUFTRixFQUFBLEdBQUVHLEVBQVlILEVBQUEsR0FFMUJJLEVBQWFDLEVBQUFBLGtCQXFCakIsTUFwQmEsV0FBVFYsR0FBbUMsUUFBYk8sRUFDeEJFLEVBQWFFLEVBQUFBLGtCQUNLLFFBQVRYLEdBRVMsVUFBVEEsS0FEVFMsRUFBYUcsRUFBQUEsV0FLZkMsRUFBQUEsV0FBVSxXQUNJLFFBQVJYLEVBQ0VZLE9BQU9DLFdBQVcsZ0NBQWdDQyxRQUNwRFIsRUFBYSxRQUViQSxFQUFhLFNBR2ZBLEVBQWFOLEVBRWpCLEdBQUcsQ0FBQ0EsSUFHRmUsTUFBQ3BCLEVBQVNxQixFQUFBQSxTQUFBLENBQUNmLFVBQVcsQ0FDcEIsMkJBQ0FNLEVBQ0FVLHlCQUNBaEIsR0FDQWlCLE9BQU9DLFNBQVNDLEtBQUssTUFBVWxCLEdBRXJDIn0=

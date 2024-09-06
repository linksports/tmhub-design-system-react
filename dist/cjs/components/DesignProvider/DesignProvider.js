"use strict";var e=require("../../node_modules/tslib/tslib.es6.js"),s=require("react/jsx-runtime"),r=require("react"),t=require("../../node_modules/@radix-ui/react-slot/dist/index.js"),i=require("../../tokens/theme.css.js"),a=require("./DesignProvider.css.js");module.exports=function(o){var d=o.asChild,u=void 0!==d&&d,m=e.__rest(o,["asChild"]),h=u?t.Slot:"div",l=m.theme,n=void 0===l?"teamhub":l,c=m.mode,j=void 0===c?"auto":c,v=m.className,_=e.__rest(m,["theme","mode","className"]),b=r.useState(j),f=b[0],g=b[1],p=i.teamhubLightTheme;return"teamhub"==n&&"dark"==f?p=i.teamhubDarkTheme:("play"==n||"joynup"==n)&&(p=i.playTheme),r.useEffect((function(){"auto"==j?window.matchMedia("(prefers-color-scheme: dark)").matches?g("dark"):g("light"):g(j)}),[j]),s.jsx(h,e.__assign({className:["tmhub-design-system-root",p,a.designProviderRecipe(),v].filter(Boolean).join(" ")},_))};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVzaWduUHJvdmlkZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rlc2lnblByb3ZpZGVyL0Rlc2lnblByb3ZpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2xvdCB9IGZyb20gJ0ByYWRpeC11aS9yZWFjdC1zbG90JztcbmltcG9ydCB7IERlc2lnblByb3ZpZGVyUHJvcHMgfSBmcm9tICcuL0Rlc2lnblByb3ZpZGVyLnR5cGVzJztcbmltcG9ydCB7XG4gIHRlYW1odWJMaWdodFRoZW1lLFxuICB0ZWFtaHViRGFya1RoZW1lLFxuICBwbGF5VGhlbWUsXG59IGZyb20gJy4uLy4uL3Rva2Vucy90aGVtZS5jc3MnO1xuaW1wb3J0IHsgZGVzaWduUHJvdmlkZXJSZWNpcGUgfSBmcm9tICcuL0Rlc2lnblByb3ZpZGVyLmNzcyc7XG5cbmNvbnN0IERlc2lnblByb3ZpZGVyOiBSZWFjdC5GQzxEZXNpZ25Qcm92aWRlclByb3BzPiA9ICh7XG4gIGFzQ2hpbGQgPSBmYWxzZSxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgQ29tcG9uZW50ID0gYXNDaGlsZCA/IFNsb3QgOiBcImRpdlwiO1xuXG4gIGNvbnN0IHtcbiAgICB0aGVtZSA9ICd0ZWFtaHViJyxcbiAgICBtb2RlID0gJ2F1dG8nLFxuICAgIGNsYXNzTmFtZSxcbiAgICAuLi5vdGhlcnNcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtjb2xvck1vZGUsIHNldENvbG9yTW9kZV0gPSB1c2VTdGF0ZShtb2RlKTtcblxuICBsZXQgdGhlbWVDbGFzcyA9IHRlYW1odWJMaWdodFRoZW1lO1xuICBpZiAodGhlbWUgPT0gJ3RlYW1odWInICYmIGNvbG9yTW9kZSA9PSAnZGFyaycpIHtcbiAgICB0aGVtZUNsYXNzID0gdGVhbWh1YkRhcmtUaGVtZTtcbiAgfSBlbHNlIGlmICh0aGVtZSA9PSAncGxheScpIHtcbiAgICB0aGVtZUNsYXNzID0gcGxheVRoZW1lO1xuICB9IGVsc2UgaWYgKHRoZW1lID09ICdqb3ludXAnKSB7XG4gICAgdGhlbWVDbGFzcyA9IHBsYXlUaGVtZTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtb2RlID09ICdhdXRvJykge1xuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzKSB7XG4gICAgICAgIHNldENvbG9yTW9kZSgnZGFyaycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Q29sb3JNb2RlKCdsaWdodCcpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q29sb3JNb2RlKG1vZGUpO1xuICAgIH07O1xuICB9LCBbbW9kZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbXBvbmVudCBjbGFzc05hbWU9e1tcbiAgICAgICd0bWh1Yi1kZXNpZ24tc3lzdGVtLXJvb3QnLFxuICAgICAgdGhlbWVDbGFzcyxcbiAgICAgIGRlc2lnblByb3ZpZGVyUmVjaXBlKCksXG4gICAgICBjbGFzc05hbWVcbiAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHsuLi5vdGhlcnN9IC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXNpZ25Qcm92aWRlcjtcbiJdLCJuYW1lcyI6WyJfYSIsIl9iIiwiYXNDaGlsZCIsInByb3BzIiwiX19yZXN0IiwiQ29tcG9uZW50IiwiU2xvdCIsIl9jIiwidGhlbWUiLCJfZCIsIm1vZGUiLCJjbGFzc05hbWUiLCJvdGhlcnMiLCJfZSIsInVzZVN0YXRlIiwiY29sb3JNb2RlIiwic2V0Q29sb3JNb2RlIiwidGhlbWVDbGFzcyIsInRlYW1odWJMaWdodFRoZW1lIiwidGVhbWh1YkRhcmtUaGVtZSIsInBsYXlUaGVtZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiX2pzeCIsIl9fYXNzaWduIiwiZGVzaWduUHJvdmlkZXJSZWNpcGUiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiJdLCJtYXBwaW5ncyI6Im9SQVVzRCxTQUFDQSxHQUNyRCxJQUFBQyxFQUFBRCxFQUFBRSxRQUFBQSxPQUFVLElBQUFELEtBQ1BFLEVBRmtEQyxFQUFBQSxPQUFBSixFQUFBLENBQUEsWUFJL0NLLEVBQVlILEVBQVVJLEVBQUlBLEtBQUcsTUFHakNDLEVBSUVKLEVBSmVLLE1BQWpCQSxPQUFLLElBQUFELEVBQUcsVUFBU0EsRUFDakJFLEVBR0VOLEVBQUtPLEtBSFBBLE9BQU8sSUFBQUQsRUFBQSxPQUFNQSxFQUNiRSxFQUVFUixFQUFLUSxVQURKQyxFQUNEUixFQUFBQSxPQUFBRCxFQUxFLENBQUEsUUFBQSxPQUFBLGNBT0FVLEVBQTRCQyxFQUFBQSxTQUFTSixHQUFwQ0ssRUFBU0YsRUFBQSxHQUFFRyxFQUFZSCxFQUFBLEdBRTFCSSxFQUFhQyxFQUFBQSxrQkFxQmpCLE1BcEJhLFdBQVRWLEdBQW1DLFFBQWJPLEVBQ3hCRSxFQUFhRSxFQUFBQSxrQkFDSyxRQUFUWCxHQUVTLFVBQVRBLEtBRFRTLEVBQWFHLEVBQUFBLFdBS2ZDLEVBQUFBLFdBQVUsV0FDSSxRQUFSWCxFQUNFWSxPQUFPQyxXQUFXLGdDQUFnQ0MsUUFDcERSLEVBQWEsUUFFYkEsRUFBYSxTQUdmQSxFQUFhTixFQUVqQixHQUFHLENBQUNBLElBR0ZlLE1BQUNwQixFQUFTcUIsRUFBQUEsU0FBQSxDQUFDZixVQUFXLENBQ3BCLDJCQUNBTSxFQUNBVSx5QkFDQWhCLEdBQ0FpQixPQUFPQyxTQUFTQyxLQUFLLE1BQVVsQixHQUVyQyJ9

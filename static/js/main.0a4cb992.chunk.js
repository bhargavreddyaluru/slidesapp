(this["webpackJsonpnxt-slides"]=this["webpackJsonpnxt-slides"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(9),s=n.n(a),r=n(6),o=n(2),d=n(3),l=n(5),u=n(4),h=n(7),j=(n(14),n(15),n(0)),b=function(){return Object(j.jsxs)("div",{className:"header-container",children:[Object(j.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png",alt:"nxt slides logo",className:"logo"}),Object(j.jsx)("h1",{className:"title",children:"Nxt Slides"})]})},g=n(23),p=(n(17),c.a.createContext({initialList:[],activeIndex:0,changeActiveTab:function(){},addNewItem:function(){},changeHeading:function(){},ChangeDescription:function(){}})),v=function(){return Object(j.jsx)(p.Consumer,{children:function(e){var t=e.addNewItem,n=e.activeIndex,i=e.changeActiveTab;return Object(j.jsx)("div",{children:Object(j.jsxs)("button",{type:"button",className:"add-new-button",onClick:function(){var e=Object(g.a)();t({id:e,heading:"Heading",description:"Description"}),i(n+1)},onDoubleClick:function(){console.log("Hi")},children:[Object(j.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png",alt:"new plus icon",className:"plus-icon"}),"New"]})})}})},O=(n(18),n(19),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.details,n=e.serialNumber,i=t.heading,c=t.description;return Object(j.jsx)(p.Consumer,{children:function(e){var t=e.changeActiveTab,a=e.activeIndex===n-1?"active-styling":"";return Object(j.jsxs)("li",{className:"slide-list-item ".concat(a),onClick:function(){t(n-1)},testid:"slideTab".concat(n),children:[Object(j.jsx)("p",{className:"slide-number",children:n}),Object(j.jsxs)("div",{className:"slide-tab",children:[Object(j.jsx)("h1",{className:"tab-heading",children:i}),Object(j.jsx)("p",{className:"tab-description",children:c})]})]})}})}}]),n}(i.Component)),f=O,x=(n(20),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={headingActive:!0,descriptionActive:!0},e.onClickHeading=function(){e.setState({headingActive:!1})},e.onClickDescription=function(){e.setState({descriptionActive:!1})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.headingActive,i=t.descriptionActive;return Object(j.jsx)(p.Consumer,{children:function(t){var c=t.initialList,a=t.activeIndex,s=t.changeHeading,r=t.ChangeDescription,o=c[a],d=o.description,l=o.heading;return Object(j.jsx)("div",{className:"slide-view-container",children:Object(j.jsxs)("div",{className:"slide-container",children:[n?Object(j.jsx)("h1",{onClick:e.onClickHeading,className:"slide-heading",children:l}):Object(j.jsx)("input",{type:"text",value:l,onChange:function(e){s(e.target.value)},onBlur:function(t){""===t.target.value&&s("Heading"),e.setState({headingActive:!0})},className:"slide-heading-input"}),i?Object(j.jsx)("p",{onClick:e.onClickDescription,className:"slide-description",children:d}):Object(j.jsx)("input",{type:"text",value:d,onChange:function(e){r(e.target.value)},className:"slide-description-input",onBlur:function(t){""===t.target.value&&r("Description"),e.setState({descriptionActive:!0})}})]})})}})}}]),n}(i.Component)),m=x,C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsx)(p.Consumer,{children:function(e){var t=e.initialList;return Object(j.jsxs)("div",{className:"slides-container",children:[Object(j.jsx)("ol",{className:"slides-list",children:t.map((function(e,t){return Object(j.jsx)(f,{details:e,serialNumber:t+1},e.id)}))}),Object(j.jsx)(m,{})]})}})}}]),n}(i.Component),N=C,y=[{id:"cc6e1752-a063-11ec-b909-0242ac120002",heading:"Welcome",description:"Rahul"},{id:"cc6e1aae-a063-11ec-b909-0242ac120002",heading:"Agenda",description:"Technologies in focus"},{id:"cc6e1e78-a063-11ec-b909-0242ac120002",heading:"Cyber Security",description:"Ethical Hacking"},{id:"cc6e1fc2-a063-11ec-b909-0242ac120002",heading:"IoT",description:"Wireless Technologies"},{id:"cc6e20f8-a063-11ec-b909-0242ac120002",heading:"AI-ML",description:"Cutting-Edge Technology"},{id:"cc6e2224-a063-11ec-b909-0242ac120002",heading:"Blockchain",description:"Emerging Technology"},{id:"cc6e233c-a063-11ec-b909-0242ac120002",heading:"XR Technologies",description:"AR/VR Technologies"}],A=function(e,t,n){return[].concat(Object(h.a)(e.slice(0,t)),[n],Object(h.a)(e.slice(t)))},I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={initialList:y,activeIndex:0},e.changeHeading=function(t){var n=e.state.activeIndex;e.setState((function(e){return{initialList:e.initialList.map((function(e,i){return n===i?Object(r.a)(Object(r.a)({},e),{},{heading:t}):e}))}}))},e.ChangeDescription=function(t){var n=e.state.activeIndex;e.setState((function(e){return{initialList:e.initialList.map((function(e,i){return n===i?Object(r.a)(Object(r.a)({},e),{},{description:t}):e}))}}))},e.changeActiveTab=function(t){e.setState({activeIndex:t})},e.addNewItem=function(t){var n=e.state.activeIndex;e.setState((function(e){var i=e.initialList,c=A(i,n+1,t);return{initialList:Object(h.a)(c)}}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.initialList,n=e.activeIndex;return console.log(n),Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{}),Object(j.jsx)(p.Provider,{value:{initialList:t,activeIndex:n,changeActiveTab:this.changeActiveTab,addNewItem:this.addNewItem,changeHeading:this.changeHeading,ChangeDescription:this.ChangeDescription},children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v,{}),Object(j.jsx)(N,{})]})})]})}}]),n}(i.Component),k=I;s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.0a4cb992.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(53)},30:function(e,t,n){},32:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),i=n.n(o),c=(n(30),n(7)),s=n.n(c),l=n(11),u=n(17),p=n(18),d=n(22),m=n(19),h=n(23),f=n(21),R=n.n(f),L=(n(32),n(9)),U=n.n(L),w=n(10),E=n.n(w),y=function(e){return r.a.createElement("form",null,r.a.createElement(U.a.Row,null,r.a.createElement(U.a.Control,{style:{width:"50em",fontSize:"0.5em"},size:"lg",type:"text",placeholder:"Incert URL",onChange:e.NewinputURL,onKeyPress:function(t){"Enter"===t.key&&(t.preventDefault(),e.GetURL())}}),r.a.createElement(E.a,{style:{fontSize:"0.5em"},variant:"primary",onClick:e.GetURL},"Get URL")))},v=n(20),b=n.n(v),k=function(e){var t=""===e.shortenURL?"none":"inline-block";return r.a.createElement("form",null,r.a.createElement(U.a.Row,null,r.a.createElement("p",{style:{display:"inline-block",margin:"2em"}},e.shortenURL),r.a.createElement(b.a,{text:e.shortenURL,onCopy:e.setCopiedToTrue},r.a.createElement(E.a,{style:{fontSize:"0.5em",display:t}},"Copy to Clipboard"))),r.a.createElement(U.a.Row,null,e.copied?r.a.createElement("span",{style:{color:"green"}},"Copied"):null))},x=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state=void 0,n.ValidURL=function(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)},n.GetURL=Object(l.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.ValidURL(n.state.inputURL)){e.next=11;break}return t={url:n.state.inputURL},e.next=4,fetch("/api/shortenurl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return a=e.sent,e.next=7,a.json();case 7:a=e.sent,n.setState({shortenURL:a.shortURL,copied:!1}),e.next=12;break;case 11:alert("".concat(n.state.inputURL," is not a valid URL"));case 12:case"end":return e.stop()}},e)})),n.NewinputURL=function(){var e=Object(l.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({inputURL:t.target.value});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.setCopiedToTrue=Object(l.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({copied:!0});case 2:case"end":return e.stop()}},e)})),n.state={inputURL:"",shortenURL:"",message:"",copied:!1},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(R.a,null,r.a.createElement("h2",null,"Get A Shorter URL"),r.a.createElement(y,{NewinputURL:this.NewinputURL,GetURL:this.GetURL}),r.a.createElement(k,{shortenURL:this.state.shortenURL,copied:this.state.copied,setCopiedToTrue:this.setCopiedToTrue}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.10402763.chunk.js.map
(this.webpackJsonpyashry=this.webpackJsonpyashry||[]).push([[0],{129:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),i=(a(85),a(14)),o=a(15),s=a(17),u=a(16),m=a(12),d=a(25),p=a(67),f=a.n(p),E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e={className:"slick",dots:!0,focusOnSelect:!1,arrows:!1,infinite:!0,slidesPerRow:this.props.Testimonials?1:4,autoplay:!!this.props.Testimonials,responsive:[{breakpoint:1100,settings:{slidesPerRow:this.props.Testimonials?1:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesPerRow:this.props.Testimonials?1:2,initialSlide:2}},{breakpoint:480,settings:{slidesPerRow:(this.props.Testimonials,1)}}]};return r.a.createElement(f.a,e,this.props.children)}}]),a}(n.Component),h=a(140),b=a(69),y=a(6),g=function(e){return r.a.createElement(h.a,{style:{width:"18rem"}},r.a.createElement("figure",null,r.a.createElement(h.a.Img,{variant:"top",src:e.item.image})),r.a.createElement("div",{className:"price"},r.a.createElement("span",{className:"badge badge-success"},(e.storage.currency.price_to_default*e.item.price).toFixed(2),"dollar"===e.storage.currency.key?r.a.createElement(y.FontAwesome,{name:"dollar",color:"white",size:20}):"euro"===e.storage.currency.key?r.a.createElement(y.FontAwesome,{name:"euro",color:"white",size:20}):"Pound sterling"===e.storage.currency.key?r.a.createElement(y.FontAwesome,{name:"gbp",color:"white",size:20}):null)),e.item.discount>0?r.a.createElement("div",{className:"discount"},r.a.createElement("span",{className:"badge badge-secondary"},e.item.discount," %")):null,r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,e.item.title),r.a.createElement(h.a.Text,null,e.item.info),e.storage.cart.find((function(t){return t.id==e.item.id}))?r.a.createElement("div",{className:"flex-center product-no"},r.a.createElement(b.a,{className:"form-control flex-center",onClick:function(){e.handelPlusItem(e.item.id)}},r.a.createElement(y.Feather,{name:"plus",color:"#fff",size:18})),r.a.createElement("div",{className:"numbers"},e.storage.cart.find((function(t){return t.id==e.item.id})).qty),r.a.createElement(b.a,{className:"form-control flex-center",onClick:function(){e.handelMinsItem(e.item.id)}},r.a.createElement(y.Feather,{name:"minus",color:"#fff",size:18})),r.a.createElement(m.b,{to:"/cart"},"go to cart")):r.a.createElement(b.a,{className:"form-control flex-center",onClick:function(){e.handelPlusCart(e.item)}},"Add To Cart",r.a.createElement(y.Feather,{name:"shopping-cart",color:"#fff",size:18}))))},v=function(e){return{type:"PLUS_PRODUCT",id:e}},O=function(e){return{type:"MINS_PRODUCT",id:e}},N=a(20),k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handelPlusCart=function(t){t.qty=1,e.props._PlusCart(t)},e.handelPlusItem=function(t){e.props._plusProduct(t)},e.handelMinsItem=function(t){e.props._minsProduct(t)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"section_title text-center mb-80 "},r.a.createElement("span",null,"Yashry Products"))),r.a.createElement(E,null,this.props.storage.products?this.props.storage.products.map((function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(g,{item:t,storage:e.props.storage,handelPlusCart:function(t){e.handelPlusCart(t)},handelPlusItem:function(t){e.handelPlusItem(t)},handelMinsItem:function(t){e.handelMinsItem(t)}}))})):null))}}]),a}(n.Component),_=Object(N.b)(null,(function(e){return{_PlusCart:function(t){e(function(e){return{type:"PLUS_CART",item:e}}(t))},_plusProduct:function(t){e(v(t))},_minsProduct:function(t){e(O(t))}}}))(k),j=function(e){return r.a.createElement(h.a,null,r.a.createElement("figure",null,r.a.createElement(h.a.Img,{variant:"top",src:e.item.image})),r.a.createElement("div",{className:"price"},r.a.createElement("span",{className:"badge badge-success"},(e.storage.currency.price_to_default*e.item.price).toFixed(2),"dollar"===e.storage.currency.key?r.a.createElement(y.FontAwesome,{name:"dollar",color:"white",size:20}):"euro"===e.storage.currency.key?r.a.createElement(y.FontAwesome,{name:"euro",color:"white",size:20}):"Pound sterling"===e.storage.currency.key?r.a.createElement(y.FontAwesome,{name:"gbp",color:"white",size:20}):null)),e.item.discount>0?r.a.createElement("div",{className:"discount"},r.a.createElement("span",{className:"badge badge-secondary"},e.item.discount," %")):null,r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,e.item.title),r.a.createElement(h.a.Text,null,e.item.info),r.a.createElement("div",{className:"flex-center product-no"},r.a.createElement(b.a,{className:"form-control flex-center",onClick:function(){e.handelPlusItem(e.item.id)}},r.a.createElement(y.Feather,{name:"plus",color:"#fff",size:18})),r.a.createElement("div",{className:"numbers"},e.storage.cart.find((function(t){return t.id==e.item.id})).qty),r.a.createElement(b.a,{className:"form-control flex-center",onClick:function(){e.handelMinsItem(e.item.id)}},r.a.createElement(y.Feather,{name:"minus",color:"#fff",size:18})))))},C=function(e){var t=null;return"dollar"===e.bill.currency.key?t=r.a.createElement(y.FontAwesome,{name:"dollar",color:"#a5a5a5",size:20}):("euro"===e.bill.currency.key||"Pound sterling"===e.bill.currency.key)&&(t=r.a.createElement(y.FontAwesome,{name:"euro",color:"#a5a5a5",size:20})),r.a.createElement("div",{className:"bill-item"},r.a.createElement("div",null,r.a.createElement("h3",null,"YASHRY"),r.a.createElement("div",null,r.a.createElement("label",null," Date : "),r.a.createElement("label",null," ",e.bill.date," ")),r.a.createElement("h5",null)),r.a.createElement("div",null,r.a.createElement("label",null," items "),r.a.createElement("ul",null,e.bill.items.map((function(e,a){return r.a.createElement("li",{key:a}," ",e.qty," - ",e.title,"  - ",e.price,t)})))),r.a.createElement("div",null,r.a.createElement("label",null," Subtotal : "),r.a.createElement("label",null," ",e.bill.subtotal.toFixed(2)," ",t," ")),r.a.createElement("div",null,r.a.createElement("label",null," Taxes : "),r.a.createElement("label",null," ",e.bill.tax.toFixed(2)," ",t," ")),e.bill.discounts?r.a.createElement("div",null,r.a.createElement("label",null," Discounts : "),r.a.createElement("ul",null,e.bill.discounts.map((function(e,a){return r.a.createElement("li",{key:a}," ",e," ",t)})))):null,r.a.createElement("div",null,r.a.createElement("label",null," Total : "),r.a.createElement("label",null," ",(e.bill.subtotal+e.bill.tax-e.bill.discount).toFixed(2)," ",t," ")))},P=a(52),w=a.n(P),x=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handelPlusItem=function(t){e.props._plusProduct(t)},e.handelMinsItem=function(t){e.props._minsProduct(t)},e.handelCreateBill=function(){e.setState({loading:!0});var t={bill:e.props.storage.cart,currency:e.props.storage.currency.id};w.a.post("https://yashry.herokuapp.com/api/bill/create",t).then((function(t){1==t.data.status&&e.setState({loading:!1,bill:t.data.bill})}))},e.handelStoreBill=function(){e.setState({loading:!0});var t={bill:e.state.bill};w.a.post("https://yashry.herokuapp.com/api/bill/store",t).then((function(t){1==t.data.status&&(e.setState({loading:!1,bill:null}),e.props._plusBill(t.data.bill),e.props.history.push("/bills"))}))},e.state={loading:!1,bill:!1},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.bill?r.a.createElement("div",{className:"cart-section"},r.a.createElement(C,{bill:this.state.bill}),r.a.createElement("br",null),this.state.loading?null:r.a.createElement(b.a,{className:"form-control flex-center",onClick:function(){e.handelStoreBill()}},"Confirm Bill")):r.a.createElement("div",{className:"cart-section"},r.a.createElement("div",{className:"section_title text-center mb-80 "},r.a.createElement("span",null,r.a.createElement(y.Feather,{name:"shopping-cart",color:"#F0542C",size:40}),"Yashry Cart")),r.a.createElement("div",{className:"cart-body"},this.props.storage.cart.length>0?r.a.createElement("div",null,this.props.storage.cart.map((function(t){return r.a.createElement("div",{key:t.id,className:"cart-item"},r.a.createElement(j,{item:t,storage:e.props.storage,handelPlusItem:function(t){e.handelPlusItem(t)},handelMinsItem:function(t){e.handelMinsItem(t)}}))})),r.a.createElement("div",{className:"bill-section"},this.state.loading?null:r.a.createElement(b.a,{className:"form-control flex-center",onClick:function(){e.handelCreateBill()}},"Make Bill"))):r.a.createElement("div",{className:"cart-empry"},"There are no purchases in your cart !"))))}}]),a}(n.Component),T=Object(N.b)((function(e){return{storage:e.user_storage}}),(function(e){return{_plusProduct:function(t){e(v(t))},_minsProduct:function(t){e(O(t))},_plusBill:function(t){e(function(e){return{type:"PLUS_BILL",bill:e}}(t))}}}))(Object(d.f)(x)),I=function(e){return r.a.createElement("div",{className:"bills-sections"},e.storage.bills.length>0?e.storage.bills.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(C,{bill:e}))})):r.a.createElement("div",{className:"cart-empry"},"No Bills Fount !"))},F=a(138),S=a(139),A=a(72),z=a(30),B=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handelCurrency=function(t){e.props._setCurrency(t)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(F.a,{bg:"dark",expand:"lg",variant:"dark"},r.a.createElement(F.a.Brand,null,r.a.createElement(m.b,{to:"/",style:{color:"white"}},"Yashery")),r.a.createElement(F.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(F.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(S.a,{className:"mr-auto"},r.a.createElement(m.b,{to:"/"},"Home"),r.a.createElement(m.b,{to:"/cart"},r.a.createElement(y.Feather,{name:"shopping-cart",color:"#fff",size:18}),"Cart",r.a.createElement("span",{className:"header-cart-number"},this.props.storage.cart.length)),r.a.createElement(m.b,{to:"/bills"},"Bills"),r.a.createElement(A.a,{id:"dropdown-basic-button",title:this.props.storage.currency.key},this.props.storage.currencies.map((function(t){return r.a.createElement(z.a.Item,{key:t.id,href:"#/action-"+t.id,onClick:function(){e.handelCurrency(t)}},t.key)})))),r.a.createElement(m.b,{to:"#"},r.a.createElement(y.Feather,{name:"instagram",color:"#fff",size:30})),r.a.createElement(m.b,{to:"#"}),r.a.createElement(m.b,{to:"#"},r.a.createElement(y.Feather,{name:"twitter",color:"#fff",size:30}))))}}]),a}(n.Component),R=Object(N.b)(null,(function(e){return{_setCurrency:function(t){e({type:"SET_CURRENCY",item:t})}}}))(B),M=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"copy-right_view"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"footer_border"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-12 copy_right_text"},"Copyright \xa92020 All rights reserved to  ",r.a.createElement("b",null,r.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=++201121388128",className:"copy_right_name"},"M_Taher")," "))))))}}]),a}(n.Component),U=(a(126),a(127),a(128),a(129),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://yashry.herokuapp.com/api/products").then((function(e){return e.json()})).then((function(t){e.props._storeData(t.data)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,null,r.a.createElement(R,{storage:this.props.storage}),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/cart"},r.a.createElement(T,{storage:this.props.storage})),r.a.createElement(d.a,{path:"/bills"},r.a.createElement(I,{storage:this.props.storage})),r.a.createElement(d.a,{path:"/"},r.a.createElement(_,{storage:this.props.storage}))),r.a.createElement(M,null)))}}]),a}(n.Component)),D=Object(N.b)((function(e){return{storage:e.user_storage}}),(function(e){return{_storeData:function(t){e({type:"STORE_DATA",data:t})}}}))(U);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(36),q=a(56),Y=a(31),$=a(21),H=a(55),J=a(76),G=a.n(J),K=a(54),Q=a.n(K),V={products:null,cuurency:null,currencies:[],cart:[],bills:[],currency:"dolar"},W={key:"root",storage:G.a},X=Object($.b)({user_storage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STORE_DATA":return Object(Y.a)({},e,{products:t.data.products,currencies:t.data.currencies,currency:t.data.currencies.find((function(e){return 1==e.default}))});case"SET_CURRENCY":return Object(Y.a)({},e,{currency:t.item});case"PLUS_CART":return Object(Y.a)({},e,{cart:[t.item].concat(Object(q.a)(e.cart))});case"PLUS_PRODUCT":var a=e.cart.findIndex((function(e){return e.id==t.id}));return Q()(e,{cart:Object(L.a)({},a,{qty:{$set:e.cart[a].qty+1}})});case"MINS_PRODUCT":var n=e.cart.findIndex((function(e){return e.id==t.id}));return 1!=e.cart[n].qty?Q()(e,{cart:Object(L.a)({},n,{qty:{$set:e.cart[n].qty-1}})}):Object(Y.a)({},e,{cart:e.cart.filter((function(e){return e.id!=t.id}))});case"PLUS_BILL":return Object(Y.a)({},e,{bills:[t.bill].concat(Object(q.a)(e.bills)),cart:[]});default:return e}}}),Z=Object(H.a)(W,X),ee=Object($.c)(Z),te=Object(H.b)(ee),ae=a(77);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N.a,{store:ee},r.a.createElement(ae.a,{loading:null,persistor:te},r.a.createElement(D,null)))),document.getElementById("root"))},80:function(e,t,a){e.exports=a(133)},85:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.f3930723.chunk.js.map
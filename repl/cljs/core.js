goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__17672 = (((x == null))?null:x);
if((p[goog.typeOf(x__17672)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__17673__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__17673 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__17673__delegate.call(this, array, i, idxs);
};
G__17673.cljs$lang$maxFixedArity = 2;
G__17673.cljs$lang$applyTo = (function (arglist__17674){
var array = cljs.core.first(arglist__17674);
var i = cljs.core.first(cljs.core.next(arglist__17674));
var idxs = cljs.core.rest(cljs.core.next(arglist__17674));
return G__17673__delegate(array, i, idxs);
});
G__17673.cljs$lang$arity$variadic = G__17673__delegate;
return G__17673;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____17759 = this$;
if(and__3822__auto____17759)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____17759;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2452__auto____17760 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17761 = (cljs.core._invoke[goog.typeOf(x__2452__auto____17760)]);
if(or__3824__auto____17761)
{return or__3824__auto____17761;
} else
{var or__3824__auto____17762 = (cljs.core._invoke["_"]);
if(or__3824__auto____17762)
{return or__3824__auto____17762;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____17763 = this$;
if(and__3822__auto____17763)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____17763;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2452__auto____17764 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17765 = (cljs.core._invoke[goog.typeOf(x__2452__auto____17764)]);
if(or__3824__auto____17765)
{return or__3824__auto____17765;
} else
{var or__3824__auto____17766 = (cljs.core._invoke["_"]);
if(or__3824__auto____17766)
{return or__3824__auto____17766;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____17767 = this$;
if(and__3822__auto____17767)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____17767;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2452__auto____17768 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17769 = (cljs.core._invoke[goog.typeOf(x__2452__auto____17768)]);
if(or__3824__auto____17769)
{return or__3824__auto____17769;
} else
{var or__3824__auto____17770 = (cljs.core._invoke["_"]);
if(or__3824__auto____17770)
{return or__3824__auto____17770;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____17771 = this$;
if(and__3822__auto____17771)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____17771;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2452__auto____17772 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17773 = (cljs.core._invoke[goog.typeOf(x__2452__auto____17772)]);
if(or__3824__auto____17773)
{return or__3824__auto____17773;
} else
{var or__3824__auto____17774 = (cljs.core._invoke["_"]);
if(or__3824__auto____17774)
{return or__3824__auto____17774;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____17775 = this$;
if(and__3822__auto____17775)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____17775;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2452__auto____17776 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17777 = (cljs.core._invoke[goog.typeOf(x__2452__auto____17776)]);
if(or__3824__auto____17777)
{return or__3824__auto____17777;
} else
{var or__3824__auto____17778 = (cljs.core._invoke["_"]);
if(or__3824__auto____17778)
{return or__3824__auto____17778;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____17779 = this$;
if(and__3822__auto____17779)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____17779;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2452__auto____17780 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17781 = (cljs.core._invoke[goog.typeOf(x__2452__auto____17780)]);
if(or__3824__auto____17781)
{return or__3824__auto____17781;
} else
{var or__3824__auto____17782 = (cljs.core._invoke["_"]);
if(or__3824__auto____17782)
{return or__3824__auto____17782;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____17783 = this$;
if(and__3822__auto____17783)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____17783;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2452__auto____17784 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17785 = (cljs.core._invoke[goog.typeOf(x__2452__auto____17784)]);
if(or__3824__auto____17785)
{return or__3824__auto____17785;
} else
{var or__3824__auto____17786 = (cljs.core._invoke["_"]);
if(or__3824__auto____17786)
{return or__3824__auto____17786;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____17787 = this$;
if(and__3822__auto____17787)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____17787;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2452__auto____17788 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17789 = (cljs.core._invoke[goog.typeOf(x__2452__auto____17788)]);
if(or__3824__auto____17789)
{return or__3824__auto____17789;
} else
{var or__3824__auto____17790 = (cljs.core._invoke["_"]);
if(or__3824__auto____17790)
{return or__3824__auto____17790;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____17791 = this$;
if(and__3822__auto____17791)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____17791;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2452__auto____17792 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17793 = (cljs.core._invoke[goog.typeOf(x__2452__auto____17792)]);
if(or__3824__auto____17793)
{return or__3824__auto____17793;
} else
{var or__3824__auto____17794 = (cljs.core._invoke["_"]);
if(or__3824__auto____17794)
{return or__3824__auto____17794;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____17795 = this$;
if(and__3822__auto____17795)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____17795;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2452__auto____17796 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17797 = (cljs.core._invoke[goog.typeOf(x__2452__auto____17796)]);
if(or__3824__auto____17797)
{return or__3824__auto____17797;
} else
{var or__3824__auto____17798 = (cljs.core._invoke["_"]);
if(or__3824__auto____17798)
{return or__3824__auto____17798;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____17799 = this$;
if(and__3822__auto____17799)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____17799;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2452__auto____17800 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17801 = (cljs.core._invoke[goog.typeOf(x__2452__auto____17800)]);
if(or__3824__auto____17801)
{return or__3824__auto____17801;
} else
{var or__3824__auto____17802 = (cljs.core._invoke["_"]);
if(or__3824__auto____17802)
{return or__3824__auto____17802;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____17803 = this$;
if(and__3822__auto____17803)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____17803;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2452__auto____17804 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17805 = (cljs.core._invoke[goog.typeOf(x__2452__auto____17804)]);
if(or__3824__auto____17805)
{return or__3824__auto____17805;
} else
{var or__3824__auto____17806 = (cljs.core._invoke["_"]);
if(or__3824__auto____17806)
{return or__3824__auto____17806;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____17807 = this$;
if(and__3822__auto____17807)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____17807;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2452__auto____17808 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17809 = (cljs.core._invoke[goog.typeOf(x__2452__auto____17808)]);
if(or__3824__auto____17809)
{return or__3824__auto____17809;
} else
{var or__3824__auto____17810 = (cljs.core._invoke["_"]);
if(or__3824__auto____17810)
{return or__3824__auto____17810;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____17811 = this$;
if(and__3822__auto____17811)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____17811;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2452__auto____17812 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17813 = (cljs.core._invoke[goog.typeOf(x__2452__auto____17812)]);
if(or__3824__auto____17813)
{return or__3824__auto____17813;
} else
{var or__3824__auto____17814 = (cljs.core._invoke["_"]);
if(or__3824__auto____17814)
{return or__3824__auto____17814;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____17815 = this$;
if(and__3822__auto____17815)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____17815;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2452__auto____17816 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17817 = (cljs.core._invoke[goog.typeOf(x__2452__auto____17816)]);
if(or__3824__auto____17817)
{return or__3824__auto____17817;
} else
{var or__3824__auto____17818 = (cljs.core._invoke["_"]);
if(or__3824__auto____17818)
{return or__3824__auto____17818;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____17819 = this$;
if(and__3822__auto____17819)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____17819;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2452__auto____17820 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17821 = (cljs.core._invoke[goog.typeOf(x__2452__auto____17820)]);
if(or__3824__auto____17821)
{return or__3824__auto____17821;
} else
{var or__3824__auto____17822 = (cljs.core._invoke["_"]);
if(or__3824__auto____17822)
{return or__3824__auto____17822;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____17823 = this$;
if(and__3822__auto____17823)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____17823;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2452__auto____17824 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17825 = (cljs.core._invoke[goog.typeOf(x__2452__auto____17824)]);
if(or__3824__auto____17825)
{return or__3824__auto____17825;
} else
{var or__3824__auto____17826 = (cljs.core._invoke["_"]);
if(or__3824__auto____17826)
{return or__3824__auto____17826;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____17827 = this$;
if(and__3822__auto____17827)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____17827;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2452__auto____17828 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17829 = (cljs.core._invoke[goog.typeOf(x__2452__auto____17828)]);
if(or__3824__auto____17829)
{return or__3824__auto____17829;
} else
{var or__3824__auto____17830 = (cljs.core._invoke["_"]);
if(or__3824__auto____17830)
{return or__3824__auto____17830;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____17831 = this$;
if(and__3822__auto____17831)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____17831;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2452__auto____17832 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17833 = (cljs.core._invoke[goog.typeOf(x__2452__auto____17832)]);
if(or__3824__auto____17833)
{return or__3824__auto____17833;
} else
{var or__3824__auto____17834 = (cljs.core._invoke["_"]);
if(or__3824__auto____17834)
{return or__3824__auto____17834;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____17835 = this$;
if(and__3822__auto____17835)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____17835;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2452__auto____17836 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17837 = (cljs.core._invoke[goog.typeOf(x__2452__auto____17836)]);
if(or__3824__auto____17837)
{return or__3824__auto____17837;
} else
{var or__3824__auto____17838 = (cljs.core._invoke["_"]);
if(or__3824__auto____17838)
{return or__3824__auto____17838;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____17839 = this$;
if(and__3822__auto____17839)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____17839;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2452__auto____17840 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____17841 = (cljs.core._invoke[goog.typeOf(x__2452__auto____17840)]);
if(or__3824__auto____17841)
{return or__3824__auto____17841;
} else
{var or__3824__auto____17842 = (cljs.core._invoke["_"]);
if(or__3824__auto____17842)
{return or__3824__auto____17842;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____17847 = coll;
if(and__3822__auto____17847)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____17847;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2452__auto____17848 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17849 = (cljs.core._count[goog.typeOf(x__2452__auto____17848)]);
if(or__3824__auto____17849)
{return or__3824__auto____17849;
} else
{var or__3824__auto____17850 = (cljs.core._count["_"]);
if(or__3824__auto____17850)
{return or__3824__auto____17850;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____17855 = coll;
if(and__3822__auto____17855)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____17855;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2452__auto____17856 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17857 = (cljs.core._empty[goog.typeOf(x__2452__auto____17856)]);
if(or__3824__auto____17857)
{return or__3824__auto____17857;
} else
{var or__3824__auto____17858 = (cljs.core._empty["_"]);
if(or__3824__auto____17858)
{return or__3824__auto____17858;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____17863 = coll;
if(and__3822__auto____17863)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____17863;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2452__auto____17864 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17865 = (cljs.core._conj[goog.typeOf(x__2452__auto____17864)]);
if(or__3824__auto____17865)
{return or__3824__auto____17865;
} else
{var or__3824__auto____17866 = (cljs.core._conj["_"]);
if(or__3824__auto____17866)
{return or__3824__auto____17866;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____17875 = coll;
if(and__3822__auto____17875)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____17875;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2452__auto____17876 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17877 = (cljs.core._nth[goog.typeOf(x__2452__auto____17876)]);
if(or__3824__auto____17877)
{return or__3824__auto____17877;
} else
{var or__3824__auto____17878 = (cljs.core._nth["_"]);
if(or__3824__auto____17878)
{return or__3824__auto____17878;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____17879 = coll;
if(and__3822__auto____17879)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____17879;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2452__auto____17880 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17881 = (cljs.core._nth[goog.typeOf(x__2452__auto____17880)]);
if(or__3824__auto____17881)
{return or__3824__auto____17881;
} else
{var or__3824__auto____17882 = (cljs.core._nth["_"]);
if(or__3824__auto____17882)
{return or__3824__auto____17882;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____17887 = coll;
if(and__3822__auto____17887)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____17887;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2452__auto____17888 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17889 = (cljs.core._first[goog.typeOf(x__2452__auto____17888)]);
if(or__3824__auto____17889)
{return or__3824__auto____17889;
} else
{var or__3824__auto____17890 = (cljs.core._first["_"]);
if(or__3824__auto____17890)
{return or__3824__auto____17890;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____17895 = coll;
if(and__3822__auto____17895)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____17895;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2452__auto____17896 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17897 = (cljs.core._rest[goog.typeOf(x__2452__auto____17896)]);
if(or__3824__auto____17897)
{return or__3824__auto____17897;
} else
{var or__3824__auto____17898 = (cljs.core._rest["_"]);
if(or__3824__auto____17898)
{return or__3824__auto____17898;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____17903 = coll;
if(and__3822__auto____17903)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____17903;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2452__auto____17904 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17905 = (cljs.core._next[goog.typeOf(x__2452__auto____17904)]);
if(or__3824__auto____17905)
{return or__3824__auto____17905;
} else
{var or__3824__auto____17906 = (cljs.core._next["_"]);
if(or__3824__auto____17906)
{return or__3824__auto____17906;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____17915 = o;
if(and__3822__auto____17915)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____17915;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2452__auto____17916 = (((o == null))?null:o);
return (function (){var or__3824__auto____17917 = (cljs.core._lookup[goog.typeOf(x__2452__auto____17916)]);
if(or__3824__auto____17917)
{return or__3824__auto____17917;
} else
{var or__3824__auto____17918 = (cljs.core._lookup["_"]);
if(or__3824__auto____17918)
{return or__3824__auto____17918;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____17919 = o;
if(and__3822__auto____17919)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____17919;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2452__auto____17920 = (((o == null))?null:o);
return (function (){var or__3824__auto____17921 = (cljs.core._lookup[goog.typeOf(x__2452__auto____17920)]);
if(or__3824__auto____17921)
{return or__3824__auto____17921;
} else
{var or__3824__auto____17922 = (cljs.core._lookup["_"]);
if(or__3824__auto____17922)
{return or__3824__auto____17922;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____17927 = coll;
if(and__3822__auto____17927)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____17927;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2452__auto____17928 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17929 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2452__auto____17928)]);
if(or__3824__auto____17929)
{return or__3824__auto____17929;
} else
{var or__3824__auto____17930 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____17930)
{return or__3824__auto____17930;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____17935 = coll;
if(and__3822__auto____17935)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____17935;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2452__auto____17936 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17937 = (cljs.core._assoc[goog.typeOf(x__2452__auto____17936)]);
if(or__3824__auto____17937)
{return or__3824__auto____17937;
} else
{var or__3824__auto____17938 = (cljs.core._assoc["_"]);
if(or__3824__auto____17938)
{return or__3824__auto____17938;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____17943 = coll;
if(and__3822__auto____17943)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____17943;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2452__auto____17944 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17945 = (cljs.core._dissoc[goog.typeOf(x__2452__auto____17944)]);
if(or__3824__auto____17945)
{return or__3824__auto____17945;
} else
{var or__3824__auto____17946 = (cljs.core._dissoc["_"]);
if(or__3824__auto____17946)
{return or__3824__auto____17946;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____17951 = coll;
if(and__3822__auto____17951)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____17951;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2452__auto____17952 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17953 = (cljs.core._key[goog.typeOf(x__2452__auto____17952)]);
if(or__3824__auto____17953)
{return or__3824__auto____17953;
} else
{var or__3824__auto____17954 = (cljs.core._key["_"]);
if(or__3824__auto____17954)
{return or__3824__auto____17954;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____17959 = coll;
if(and__3822__auto____17959)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____17959;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2452__auto____17960 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17961 = (cljs.core._val[goog.typeOf(x__2452__auto____17960)]);
if(or__3824__auto____17961)
{return or__3824__auto____17961;
} else
{var or__3824__auto____17962 = (cljs.core._val["_"]);
if(or__3824__auto____17962)
{return or__3824__auto____17962;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____17967 = coll;
if(and__3822__auto____17967)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____17967;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2452__auto____17968 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17969 = (cljs.core._disjoin[goog.typeOf(x__2452__auto____17968)]);
if(or__3824__auto____17969)
{return or__3824__auto____17969;
} else
{var or__3824__auto____17970 = (cljs.core._disjoin["_"]);
if(or__3824__auto____17970)
{return or__3824__auto____17970;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____17975 = coll;
if(and__3822__auto____17975)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____17975;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2452__auto____17976 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17977 = (cljs.core._peek[goog.typeOf(x__2452__auto____17976)]);
if(or__3824__auto____17977)
{return or__3824__auto____17977;
} else
{var or__3824__auto____17978 = (cljs.core._peek["_"]);
if(or__3824__auto____17978)
{return or__3824__auto____17978;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____17983 = coll;
if(and__3822__auto____17983)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____17983;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2452__auto____17984 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17985 = (cljs.core._pop[goog.typeOf(x__2452__auto____17984)]);
if(or__3824__auto____17985)
{return or__3824__auto____17985;
} else
{var or__3824__auto____17986 = (cljs.core._pop["_"]);
if(or__3824__auto____17986)
{return or__3824__auto____17986;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____17991 = coll;
if(and__3822__auto____17991)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____17991;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2452__auto____17992 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____17993 = (cljs.core._assoc_n[goog.typeOf(x__2452__auto____17992)]);
if(or__3824__auto____17993)
{return or__3824__auto____17993;
} else
{var or__3824__auto____17994 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____17994)
{return or__3824__auto____17994;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____17999 = o;
if(and__3822__auto____17999)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____17999;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2452__auto____18000 = (((o == null))?null:o);
return (function (){var or__3824__auto____18001 = (cljs.core._deref[goog.typeOf(x__2452__auto____18000)]);
if(or__3824__auto____18001)
{return or__3824__auto____18001;
} else
{var or__3824__auto____18002 = (cljs.core._deref["_"]);
if(or__3824__auto____18002)
{return or__3824__auto____18002;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____18007 = o;
if(and__3822__auto____18007)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____18007;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2452__auto____18008 = (((o == null))?null:o);
return (function (){var or__3824__auto____18009 = (cljs.core._deref_with_timeout[goog.typeOf(x__2452__auto____18008)]);
if(or__3824__auto____18009)
{return or__3824__auto____18009;
} else
{var or__3824__auto____18010 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____18010)
{return or__3824__auto____18010;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____18015 = o;
if(and__3822__auto____18015)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____18015;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2452__auto____18016 = (((o == null))?null:o);
return (function (){var or__3824__auto____18017 = (cljs.core._meta[goog.typeOf(x__2452__auto____18016)]);
if(or__3824__auto____18017)
{return or__3824__auto____18017;
} else
{var or__3824__auto____18018 = (cljs.core._meta["_"]);
if(or__3824__auto____18018)
{return or__3824__auto____18018;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____18023 = o;
if(and__3822__auto____18023)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____18023;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2452__auto____18024 = (((o == null))?null:o);
return (function (){var or__3824__auto____18025 = (cljs.core._with_meta[goog.typeOf(x__2452__auto____18024)]);
if(or__3824__auto____18025)
{return or__3824__auto____18025;
} else
{var or__3824__auto____18026 = (cljs.core._with_meta["_"]);
if(or__3824__auto____18026)
{return or__3824__auto____18026;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____18035 = coll;
if(and__3822__auto____18035)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____18035;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2452__auto____18036 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18037 = (cljs.core._reduce[goog.typeOf(x__2452__auto____18036)]);
if(or__3824__auto____18037)
{return or__3824__auto____18037;
} else
{var or__3824__auto____18038 = (cljs.core._reduce["_"]);
if(or__3824__auto____18038)
{return or__3824__auto____18038;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____18039 = coll;
if(and__3822__auto____18039)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____18039;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2452__auto____18040 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18041 = (cljs.core._reduce[goog.typeOf(x__2452__auto____18040)]);
if(or__3824__auto____18041)
{return or__3824__auto____18041;
} else
{var or__3824__auto____18042 = (cljs.core._reduce["_"]);
if(or__3824__auto____18042)
{return or__3824__auto____18042;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____18047 = coll;
if(and__3822__auto____18047)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____18047;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2452__auto____18048 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18049 = (cljs.core._kv_reduce[goog.typeOf(x__2452__auto____18048)]);
if(or__3824__auto____18049)
{return or__3824__auto____18049;
} else
{var or__3824__auto____18050 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____18050)
{return or__3824__auto____18050;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____18055 = o;
if(and__3822__auto____18055)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____18055;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2452__auto____18056 = (((o == null))?null:o);
return (function (){var or__3824__auto____18057 = (cljs.core._equiv[goog.typeOf(x__2452__auto____18056)]);
if(or__3824__auto____18057)
{return or__3824__auto____18057;
} else
{var or__3824__auto____18058 = (cljs.core._equiv["_"]);
if(or__3824__auto____18058)
{return or__3824__auto____18058;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____18063 = o;
if(and__3822__auto____18063)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____18063;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2452__auto____18064 = (((o == null))?null:o);
return (function (){var or__3824__auto____18065 = (cljs.core._hash[goog.typeOf(x__2452__auto____18064)]);
if(or__3824__auto____18065)
{return or__3824__auto____18065;
} else
{var or__3824__auto____18066 = (cljs.core._hash["_"]);
if(or__3824__auto____18066)
{return or__3824__auto____18066;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____18071 = o;
if(and__3822__auto____18071)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____18071;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2452__auto____18072 = (((o == null))?null:o);
return (function (){var or__3824__auto____18073 = (cljs.core._seq[goog.typeOf(x__2452__auto____18072)]);
if(or__3824__auto____18073)
{return or__3824__auto____18073;
} else
{var or__3824__auto____18074 = (cljs.core._seq["_"]);
if(or__3824__auto____18074)
{return or__3824__auto____18074;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____18079 = coll;
if(and__3822__auto____18079)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____18079;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2452__auto____18080 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18081 = (cljs.core._rseq[goog.typeOf(x__2452__auto____18080)]);
if(or__3824__auto____18081)
{return or__3824__auto____18081;
} else
{var or__3824__auto____18082 = (cljs.core._rseq["_"]);
if(or__3824__auto____18082)
{return or__3824__auto____18082;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____18087 = coll;
if(and__3822__auto____18087)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____18087;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2452__auto____18088 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18089 = (cljs.core._sorted_seq[goog.typeOf(x__2452__auto____18088)]);
if(or__3824__auto____18089)
{return or__3824__auto____18089;
} else
{var or__3824__auto____18090 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____18090)
{return or__3824__auto____18090;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____18095 = coll;
if(and__3822__auto____18095)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____18095;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2452__auto____18096 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18097 = (cljs.core._sorted_seq_from[goog.typeOf(x__2452__auto____18096)]);
if(or__3824__auto____18097)
{return or__3824__auto____18097;
} else
{var or__3824__auto____18098 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____18098)
{return or__3824__auto____18098;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____18103 = coll;
if(and__3822__auto____18103)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____18103;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2452__auto____18104 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18105 = (cljs.core._entry_key[goog.typeOf(x__2452__auto____18104)]);
if(or__3824__auto____18105)
{return or__3824__auto____18105;
} else
{var or__3824__auto____18106 = (cljs.core._entry_key["_"]);
if(or__3824__auto____18106)
{return or__3824__auto____18106;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____18111 = coll;
if(and__3822__auto____18111)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____18111;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2452__auto____18112 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18113 = (cljs.core._comparator[goog.typeOf(x__2452__auto____18112)]);
if(or__3824__auto____18113)
{return or__3824__auto____18113;
} else
{var or__3824__auto____18114 = (cljs.core._comparator["_"]);
if(or__3824__auto____18114)
{return or__3824__auto____18114;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____18119 = o;
if(and__3822__auto____18119)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____18119;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2452__auto____18120 = (((o == null))?null:o);
return (function (){var or__3824__auto____18121 = (cljs.core._pr_seq[goog.typeOf(x__2452__auto____18120)]);
if(or__3824__auto____18121)
{return or__3824__auto____18121;
} else
{var or__3824__auto____18122 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____18122)
{return or__3824__auto____18122;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____18127 = d;
if(and__3822__auto____18127)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____18127;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2452__auto____18128 = (((d == null))?null:d);
return (function (){var or__3824__auto____18129 = (cljs.core._realized_QMARK_[goog.typeOf(x__2452__auto____18128)]);
if(or__3824__auto____18129)
{return or__3824__auto____18129;
} else
{var or__3824__auto____18130 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____18130)
{return or__3824__auto____18130;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____18135 = this$;
if(and__3822__auto____18135)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____18135;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2452__auto____18136 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____18137 = (cljs.core._notify_watches[goog.typeOf(x__2452__auto____18136)]);
if(or__3824__auto____18137)
{return or__3824__auto____18137;
} else
{var or__3824__auto____18138 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____18138)
{return or__3824__auto____18138;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____18143 = this$;
if(and__3822__auto____18143)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____18143;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2452__auto____18144 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____18145 = (cljs.core._add_watch[goog.typeOf(x__2452__auto____18144)]);
if(or__3824__auto____18145)
{return or__3824__auto____18145;
} else
{var or__3824__auto____18146 = (cljs.core._add_watch["_"]);
if(or__3824__auto____18146)
{return or__3824__auto____18146;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____18151 = this$;
if(and__3822__auto____18151)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____18151;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2452__auto____18152 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____18153 = (cljs.core._remove_watch[goog.typeOf(x__2452__auto____18152)]);
if(or__3824__auto____18153)
{return or__3824__auto____18153;
} else
{var or__3824__auto____18154 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____18154)
{return or__3824__auto____18154;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____18159 = coll;
if(and__3822__auto____18159)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____18159;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2452__auto____18160 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18161 = (cljs.core._as_transient[goog.typeOf(x__2452__auto____18160)]);
if(or__3824__auto____18161)
{return or__3824__auto____18161;
} else
{var or__3824__auto____18162 = (cljs.core._as_transient["_"]);
if(or__3824__auto____18162)
{return or__3824__auto____18162;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____18167 = tcoll;
if(and__3822__auto____18167)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____18167;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2452__auto____18168 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____18169 = (cljs.core._conj_BANG_[goog.typeOf(x__2452__auto____18168)]);
if(or__3824__auto____18169)
{return or__3824__auto____18169;
} else
{var or__3824__auto____18170 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____18170)
{return or__3824__auto____18170;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____18175 = tcoll;
if(and__3822__auto____18175)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____18175;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2452__auto____18176 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____18177 = (cljs.core._persistent_BANG_[goog.typeOf(x__2452__auto____18176)]);
if(or__3824__auto____18177)
{return or__3824__auto____18177;
} else
{var or__3824__auto____18178 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____18178)
{return or__3824__auto____18178;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____18183 = tcoll;
if(and__3822__auto____18183)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____18183;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2452__auto____18184 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____18185 = (cljs.core._assoc_BANG_[goog.typeOf(x__2452__auto____18184)]);
if(or__3824__auto____18185)
{return or__3824__auto____18185;
} else
{var or__3824__auto____18186 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____18186)
{return or__3824__auto____18186;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____18191 = tcoll;
if(and__3822__auto____18191)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____18191;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2452__auto____18192 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____18193 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2452__auto____18192)]);
if(or__3824__auto____18193)
{return or__3824__auto____18193;
} else
{var or__3824__auto____18194 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____18194)
{return or__3824__auto____18194;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____18199 = tcoll;
if(and__3822__auto____18199)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____18199;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2452__auto____18200 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____18201 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2452__auto____18200)]);
if(or__3824__auto____18201)
{return or__3824__auto____18201;
} else
{var or__3824__auto____18202 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____18202)
{return or__3824__auto____18202;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____18207 = tcoll;
if(and__3822__auto____18207)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____18207;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2452__auto____18208 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____18209 = (cljs.core._pop_BANG_[goog.typeOf(x__2452__auto____18208)]);
if(or__3824__auto____18209)
{return or__3824__auto____18209;
} else
{var or__3824__auto____18210 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____18210)
{return or__3824__auto____18210;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____18215 = tcoll;
if(and__3822__auto____18215)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____18215;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2452__auto____18216 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____18217 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2452__auto____18216)]);
if(or__3824__auto____18217)
{return or__3824__auto____18217;
} else
{var or__3824__auto____18218 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____18218)
{return or__3824__auto____18218;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____18223 = x;
if(and__3822__auto____18223)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____18223;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2452__auto____18224 = (((x == null))?null:x);
return (function (){var or__3824__auto____18225 = (cljs.core._compare[goog.typeOf(x__2452__auto____18224)]);
if(or__3824__auto____18225)
{return or__3824__auto____18225;
} else
{var or__3824__auto____18226 = (cljs.core._compare["_"]);
if(or__3824__auto____18226)
{return or__3824__auto____18226;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____18231 = coll;
if(and__3822__auto____18231)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____18231;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2452__auto____18232 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18233 = (cljs.core._drop_first[goog.typeOf(x__2452__auto____18232)]);
if(or__3824__auto____18233)
{return or__3824__auto____18233;
} else
{var or__3824__auto____18234 = (cljs.core._drop_first["_"]);
if(or__3824__auto____18234)
{return or__3824__auto____18234;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____18239 = coll;
if(and__3822__auto____18239)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____18239;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2452__auto____18240 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18241 = (cljs.core._chunked_first[goog.typeOf(x__2452__auto____18240)]);
if(or__3824__auto____18241)
{return or__3824__auto____18241;
} else
{var or__3824__auto____18242 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____18242)
{return or__3824__auto____18242;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____18247 = coll;
if(and__3822__auto____18247)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____18247;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2452__auto____18248 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18249 = (cljs.core._chunked_rest[goog.typeOf(x__2452__auto____18248)]);
if(or__3824__auto____18249)
{return or__3824__auto____18249;
} else
{var or__3824__auto____18250 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____18250)
{return or__3824__auto____18250;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____18255 = coll;
if(and__3822__auto____18255)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____18255;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2452__auto____18256 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____18257 = (cljs.core._chunked_next[goog.typeOf(x__2452__auto____18256)]);
if(or__3824__auto____18257)
{return or__3824__auto____18257;
} else
{var or__3824__auto____18258 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____18258)
{return or__3824__auto____18258;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____18260 = (x === y);
if(or__3824__auto____18260)
{return or__3824__auto____18260;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__18261__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__18262 = y;
var G__18263 = cljs.core.first.call(null,more);
var G__18264 = cljs.core.next.call(null,more);
x = G__18262;
y = G__18263;
more = G__18264;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__18261 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18261__delegate.call(this, x, y, more);
};
G__18261.cljs$lang$maxFixedArity = 2;
G__18261.cljs$lang$applyTo = (function (arglist__18265){
var x = cljs.core.first(arglist__18265);
var y = cljs.core.first(cljs.core.next(arglist__18265));
var more = cljs.core.rest(cljs.core.next(arglist__18265));
return G__18261__delegate(x, y, more);
});
G__18261.cljs$lang$arity$variadic = G__18261__delegate;
return G__18261;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__18266 = null;
var G__18266__2 = (function (o,k){
return null;
});
var G__18266__3 = (function (o,k,not_found){
return not_found;
});
G__18266 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__18266__2.call(this,o,k);
case 3:
return G__18266__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18266;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__18267 = null;
var G__18267__2 = (function (_,f){
return f.call(null);
});
var G__18267__3 = (function (_,f,start){
return start;
});
G__18267 = function(_,f,start){
switch(arguments.length){
case 2:
return G__18267__2.call(this,_,f);
case 3:
return G__18267__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18267;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__18268 = null;
var G__18268__2 = (function (_,n){
return null;
});
var G__18268__3 = (function (_,n,not_found){
return not_found;
});
G__18268 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__18268__2.call(this,_,n);
case 3:
return G__18268__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18268;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3822__auto____18269 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____18269)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____18269;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__18282 = cljs.core._count.call(null,cicoll);
if((cnt__18282 === 0))
{return f.call(null);
} else
{var val__18283 = cljs.core._nth.call(null,cicoll,0);
var n__18284 = 1;
while(true){
if((n__18284 < cnt__18282))
{var nval__18285 = f.call(null,val__18283,cljs.core._nth.call(null,cicoll,n__18284));
if(cljs.core.reduced_QMARK_.call(null,nval__18285))
{return cljs.core.deref.call(null,nval__18285);
} else
{{
var G__18294 = nval__18285;
var G__18295 = (n__18284 + 1);
val__18283 = G__18294;
n__18284 = G__18295;
continue;
}
}
} else
{return val__18283;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__18286 = cljs.core._count.call(null,cicoll);
var val__18287 = val;
var n__18288 = 0;
while(true){
if((n__18288 < cnt__18286))
{var nval__18289 = f.call(null,val__18287,cljs.core._nth.call(null,cicoll,n__18288));
if(cljs.core.reduced_QMARK_.call(null,nval__18289))
{return cljs.core.deref.call(null,nval__18289);
} else
{{
var G__18296 = nval__18289;
var G__18297 = (n__18288 + 1);
val__18287 = G__18296;
n__18288 = G__18297;
continue;
}
}
} else
{return val__18287;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__18290 = cljs.core._count.call(null,cicoll);
var val__18291 = val;
var n__18292 = idx;
while(true){
if((n__18292 < cnt__18290))
{var nval__18293 = f.call(null,val__18291,cljs.core._nth.call(null,cicoll,n__18292));
if(cljs.core.reduced_QMARK_.call(null,nval__18293))
{return cljs.core.deref.call(null,nval__18293);
} else
{{
var G__18298 = nval__18293;
var G__18299 = (n__18292 + 1);
val__18291 = G__18298;
n__18292 = G__18299;
continue;
}
}
} else
{return val__18291;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__18312 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__18313 = (arr[0]);
var n__18314 = 1;
while(true){
if((n__18314 < cnt__18312))
{var nval__18315 = f.call(null,val__18313,(arr[n__18314]));
if(cljs.core.reduced_QMARK_.call(null,nval__18315))
{return cljs.core.deref.call(null,nval__18315);
} else
{{
var G__18324 = nval__18315;
var G__18325 = (n__18314 + 1);
val__18313 = G__18324;
n__18314 = G__18325;
continue;
}
}
} else
{return val__18313;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__18316 = arr.length;
var val__18317 = val;
var n__18318 = 0;
while(true){
if((n__18318 < cnt__18316))
{var nval__18319 = f.call(null,val__18317,(arr[n__18318]));
if(cljs.core.reduced_QMARK_.call(null,nval__18319))
{return cljs.core.deref.call(null,nval__18319);
} else
{{
var G__18326 = nval__18319;
var G__18327 = (n__18318 + 1);
val__18317 = G__18326;
n__18318 = G__18327;
continue;
}
}
} else
{return val__18317;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__18320 = arr.length;
var val__18321 = val;
var n__18322 = idx;
while(true){
if((n__18322 < cnt__18320))
{var nval__18323 = f.call(null,val__18321,(arr[n__18322]));
if(cljs.core.reduced_QMARK_.call(null,nval__18323))
{return cljs.core.deref.call(null,nval__18323);
} else
{{
var G__18328 = nval__18323;
var G__18329 = (n__18322 + 1);
val__18321 = G__18328;
n__18322 = G__18329;
continue;
}
}
} else
{return val__18321;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__18330 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__18331 = this;
if(((this__18331.i + 1) < this__18331.a.length))
{return (new cljs.core.IndexedSeq(this__18331.a,(this__18331.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18332 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__18333 = this;
var c__18334 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__18334 > 0))
{return (new cljs.core.RSeq(coll,(c__18334 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__18335 = this;
var this__18336 = this;
return cljs.core.pr_str.call(null,this__18336);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__18337 = this;
if(cljs.core.counted_QMARK_.call(null,this__18337.a))
{return cljs.core.ci_reduce.call(null,this__18337.a,f,(this__18337.a[this__18337.i]),(this__18337.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__18337.a[this__18337.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__18338 = this;
if(cljs.core.counted_QMARK_.call(null,this__18338.a))
{return cljs.core.ci_reduce.call(null,this__18338.a,f,start,this__18338.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__18339 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__18340 = this;
return (this__18340.a.length - this__18340.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__18341 = this;
return (this__18341.a[this__18341.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__18342 = this;
if(((this__18342.i + 1) < this__18342.a.length))
{return (new cljs.core.IndexedSeq(this__18342.a,(this__18342.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18343 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__18344 = this;
var i__18345 = (n + this__18344.i);
if((i__18345 < this__18344.a.length))
{return (this__18344.a[i__18345]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__18346 = this;
var i__18347 = (n + this__18346.i);
if((i__18347 < this__18346.a.length))
{return (this__18346.a[i__18347]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__18348 = null;
var G__18348__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__18348__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__18348 = function(array,f,start){
switch(arguments.length){
case 2:
return G__18348__2.call(this,array,f);
case 3:
return G__18348__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18348;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__18349 = null;
var G__18349__2 = (function (array,k){
return (array[k]);
});
var G__18349__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__18349 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__18349__2.call(this,array,k);
case 3:
return G__18349__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18349;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__18350 = null;
var G__18350__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__18350__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__18350 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__18350__2.call(this,array,n);
case 3:
return G__18350__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18350;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__18351 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18352 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__18353 = this;
var this__18354 = this;
return cljs.core.pr_str.call(null,this__18354);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18355 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__18356 = this;
return (this__18356.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__18357 = this;
return cljs.core._nth.call(null,this__18357.ci,this__18357.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__18358 = this;
if((this__18358.i > 0))
{return (new cljs.core.RSeq(this__18358.ci,(this__18358.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18359 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__18360 = this;
return (new cljs.core.RSeq(this__18360.ci,this__18360.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18361 = this;
return this__18361.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__18365__18366 = coll;
if(G__18365__18366)
{if((function (){var or__3824__auto____18367 = (G__18365__18366.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____18367)
{return or__3824__auto____18367;
} else
{return G__18365__18366.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__18365__18366.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__18365__18366);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__18365__18366);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__18372__18373 = coll;
if(G__18372__18373)
{if((function (){var or__3824__auto____18374 = (G__18372__18373.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____18374)
{return or__3824__auto____18374;
} else
{return G__18372__18373.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__18372__18373.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__18372__18373);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__18372__18373);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__18375 = cljs.core.seq.call(null,coll);
if((s__18375 == null))
{return null;
} else
{return cljs.core._first.call(null,s__18375);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__18380__18381 = coll;
if(G__18380__18381)
{if((function (){var or__3824__auto____18382 = (G__18380__18381.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____18382)
{return or__3824__auto____18382;
} else
{return G__18380__18381.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__18380__18381.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__18380__18381);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__18380__18381);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__18383 = cljs.core.seq.call(null,coll);
if(!((s__18383 == null)))
{return cljs.core._rest.call(null,s__18383);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__18387__18388 = coll;
if(G__18387__18388)
{if((function (){var or__3824__auto____18389 = (G__18387__18388.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____18389)
{return or__3824__auto____18389;
} else
{return G__18387__18388.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__18387__18388.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__18387__18388);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__18387__18388);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__18391 = cljs.core.next.call(null,s);
if(!((sn__18391 == null)))
{{
var G__18392 = sn__18391;
s = G__18392;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__18393__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__18394 = conj.call(null,coll,x);
var G__18395 = cljs.core.first.call(null,xs);
var G__18396 = cljs.core.next.call(null,xs);
coll = G__18394;
x = G__18395;
xs = G__18396;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__18393 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18393__delegate.call(this, coll, x, xs);
};
G__18393.cljs$lang$maxFixedArity = 2;
G__18393.cljs$lang$applyTo = (function (arglist__18397){
var coll = cljs.core.first(arglist__18397);
var x = cljs.core.first(cljs.core.next(arglist__18397));
var xs = cljs.core.rest(cljs.core.next(arglist__18397));
return G__18393__delegate(coll, x, xs);
});
G__18393.cljs$lang$arity$variadic = G__18393__delegate;
return G__18393;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__18400 = cljs.core.seq.call(null,coll);
var acc__18401 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__18400))
{return (acc__18401 + cljs.core._count.call(null,s__18400));
} else
{{
var G__18402 = cljs.core.next.call(null,s__18400);
var G__18403 = (acc__18401 + 1);
s__18400 = G__18402;
acc__18401 = G__18403;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__18410__18411 = coll;
if(G__18410__18411)
{if((function (){var or__3824__auto____18412 = (G__18410__18411.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____18412)
{return or__3824__auto____18412;
} else
{return G__18410__18411.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__18410__18411.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__18410__18411);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__18410__18411);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__18413__18414 = coll;
if(G__18413__18414)
{if((function (){var or__3824__auto____18415 = (G__18413__18414.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____18415)
{return or__3824__auto____18415;
} else
{return G__18413__18414.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__18413__18414.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__18413__18414);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__18413__18414);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__18418__delegate = function (coll,k,v,kvs){
while(true){
var ret__18417 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__18419 = ret__18417;
var G__18420 = cljs.core.first.call(null,kvs);
var G__18421 = cljs.core.second.call(null,kvs);
var G__18422 = cljs.core.nnext.call(null,kvs);
coll = G__18419;
k = G__18420;
v = G__18421;
kvs = G__18422;
continue;
}
} else
{return ret__18417;
}
break;
}
};
var G__18418 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18418__delegate.call(this, coll, k, v, kvs);
};
G__18418.cljs$lang$maxFixedArity = 3;
G__18418.cljs$lang$applyTo = (function (arglist__18423){
var coll = cljs.core.first(arglist__18423);
var k = cljs.core.first(cljs.core.next(arglist__18423));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18423)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18423)));
return G__18418__delegate(coll, k, v, kvs);
});
G__18418.cljs$lang$arity$variadic = G__18418__delegate;
return G__18418;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__18426__delegate = function (coll,k,ks){
while(true){
var ret__18425 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__18427 = ret__18425;
var G__18428 = cljs.core.first.call(null,ks);
var G__18429 = cljs.core.next.call(null,ks);
coll = G__18427;
k = G__18428;
ks = G__18429;
continue;
}
} else
{return ret__18425;
}
break;
}
};
var G__18426 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18426__delegate.call(this, coll, k, ks);
};
G__18426.cljs$lang$maxFixedArity = 2;
G__18426.cljs$lang$applyTo = (function (arglist__18430){
var coll = cljs.core.first(arglist__18430);
var k = cljs.core.first(cljs.core.next(arglist__18430));
var ks = cljs.core.rest(cljs.core.next(arglist__18430));
return G__18426__delegate(coll, k, ks);
});
G__18426.cljs$lang$arity$variadic = G__18426__delegate;
return G__18426;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__18434__18435 = o;
if(G__18434__18435)
{if((function (){var or__3824__auto____18436 = (G__18434__18435.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____18436)
{return or__3824__auto____18436;
} else
{return G__18434__18435.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__18434__18435.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__18434__18435);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__18434__18435);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__18439__delegate = function (coll,k,ks){
while(true){
var ret__18438 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__18440 = ret__18438;
var G__18441 = cljs.core.first.call(null,ks);
var G__18442 = cljs.core.next.call(null,ks);
coll = G__18440;
k = G__18441;
ks = G__18442;
continue;
}
} else
{return ret__18438;
}
break;
}
};
var G__18439 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18439__delegate.call(this, coll, k, ks);
};
G__18439.cljs$lang$maxFixedArity = 2;
G__18439.cljs$lang$applyTo = (function (arglist__18443){
var coll = cljs.core.first(arglist__18443);
var k = cljs.core.first(cljs.core.next(arglist__18443));
var ks = cljs.core.rest(cljs.core.next(arglist__18443));
return G__18439__delegate(coll, k, ks);
});
G__18439.cljs$lang$arity$variadic = G__18439__delegate;
return G__18439;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__18445 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__18445);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__18445;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__18447 = (cljs.core.string_hash_cache[k]);
if(!((h__18447 == null)))
{return h__18447;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____18449 = goog.isString(o);
if(and__3822__auto____18449)
{return check_cache;
} else
{return and__3822__auto____18449;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__18453__18454 = x;
if(G__18453__18454)
{if((function (){var or__3824__auto____18455 = (G__18453__18454.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____18455)
{return or__3824__auto____18455;
} else
{return G__18453__18454.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__18453__18454.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__18453__18454);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__18453__18454);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__18459__18460 = x;
if(G__18459__18460)
{if((function (){var or__3824__auto____18461 = (G__18459__18460.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____18461)
{return or__3824__auto____18461;
} else
{return G__18459__18460.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__18459__18460.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__18459__18460);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__18459__18460);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__18465__18466 = x;
if(G__18465__18466)
{if((function (){var or__3824__auto____18467 = (G__18465__18466.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____18467)
{return or__3824__auto____18467;
} else
{return G__18465__18466.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__18465__18466.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__18465__18466);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__18465__18466);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__18471__18472 = x;
if(G__18471__18472)
{if((function (){var or__3824__auto____18473 = (G__18471__18472.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____18473)
{return or__3824__auto____18473;
} else
{return G__18471__18472.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__18471__18472.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__18471__18472);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__18471__18472);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__18477__18478 = x;
if(G__18477__18478)
{if((function (){var or__3824__auto____18479 = (G__18477__18478.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____18479)
{return or__3824__auto____18479;
} else
{return G__18477__18478.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__18477__18478.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__18477__18478);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__18477__18478);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__18483__18484 = x;
if(G__18483__18484)
{if((function (){var or__3824__auto____18485 = (G__18483__18484.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____18485)
{return or__3824__auto____18485;
} else
{return G__18483__18484.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__18483__18484.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__18483__18484);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__18483__18484);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__18489__18490 = x;
if(G__18489__18490)
{if((function (){var or__3824__auto____18491 = (G__18489__18490.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____18491)
{return or__3824__auto____18491;
} else
{return G__18489__18490.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__18489__18490.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__18489__18490);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__18489__18490);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__18495__18496 = x;
if(G__18495__18496)
{if((function (){var or__3824__auto____18497 = (G__18495__18496.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____18497)
{return or__3824__auto____18497;
} else
{return G__18495__18496.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__18495__18496.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__18495__18496);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__18495__18496);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__18501__18502 = x;
if(G__18501__18502)
{if((function (){var or__3824__auto____18503 = (G__18501__18502.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____18503)
{return or__3824__auto____18503;
} else
{return G__18501__18502.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__18501__18502.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__18501__18502);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__18501__18502);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__18507__18508 = x;
if(G__18507__18508)
{if(cljs.core.truth_((function (){var or__3824__auto____18509 = null;
if(cljs.core.truth_(or__3824__auto____18509))
{return or__3824__auto____18509;
} else
{return G__18507__18508.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__18507__18508.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__18507__18508);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__18507__18508);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__18510__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__18510 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__18510__delegate.call(this, keyvals);
};
G__18510.cljs$lang$maxFixedArity = 0;
G__18510.cljs$lang$applyTo = (function (arglist__18511){
var keyvals = cljs.core.seq(arglist__18511);;
return G__18510__delegate(keyvals);
});
G__18510.cljs$lang$arity$variadic = G__18510__delegate;
return G__18510;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__18513 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__18513.push(key);
}));
return keys__18513;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__18517 = i;
var j__18518 = j;
var len__18519 = len;
while(true){
if((len__18519 === 0))
{return to;
} else
{(to[j__18518] = (from[i__18517]));
{
var G__18520 = (i__18517 + 1);
var G__18521 = (j__18518 + 1);
var G__18522 = (len__18519 - 1);
i__18517 = G__18520;
j__18518 = G__18521;
len__18519 = G__18522;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__18526 = (i + (len - 1));
var j__18527 = (j + (len - 1));
var len__18528 = len;
while(true){
if((len__18528 === 0))
{return to;
} else
{(to[j__18527] = (from[i__18526]));
{
var G__18529 = (i__18526 - 1);
var G__18530 = (j__18527 - 1);
var G__18531 = (len__18528 - 1);
i__18526 = G__18529;
j__18527 = G__18530;
len__18528 = G__18531;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__18535__18536 = s;
if(G__18535__18536)
{if((function (){var or__3824__auto____18537 = (G__18535__18536.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____18537)
{return or__3824__auto____18537;
} else
{return G__18535__18536.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__18535__18536.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__18535__18536);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__18535__18536);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__18541__18542 = s;
if(G__18541__18542)
{if((function (){var or__3824__auto____18543 = (G__18541__18542.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____18543)
{return or__3824__auto____18543;
} else
{return G__18541__18542.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__18541__18542.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__18541__18542);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__18541__18542);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____18546 = goog.isString(x);
if(and__3822__auto____18546)
{return !((function (){var or__3824__auto____18547 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____18547)
{return or__3824__auto____18547;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____18546;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____18549 = goog.isString(x);
if(and__3822__auto____18549)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____18549;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____18551 = goog.isString(x);
if(and__3822__auto____18551)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____18551;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____18556 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____18556)
{return or__3824__auto____18556;
} else
{var G__18557__18558 = f;
if(G__18557__18558)
{if((function (){var or__3824__auto____18559 = (G__18557__18558.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____18559)
{return or__3824__auto____18559;
} else
{return G__18557__18558.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__18557__18558.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__18557__18558);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__18557__18558);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____18561 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____18561)
{return (n == n.toFixed());
} else
{return and__3822__auto____18561;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____18564 = coll;
if(cljs.core.truth_(and__3822__auto____18564))
{var and__3822__auto____18565 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____18565)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____18565;
}
} else
{return and__3822__auto____18564;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__18574__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__18570 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__18571 = more;
while(true){
var x__18572 = cljs.core.first.call(null,xs__18571);
var etc__18573 = cljs.core.next.call(null,xs__18571);
if(cljs.core.truth_(xs__18571))
{if(cljs.core.contains_QMARK_.call(null,s__18570,x__18572))
{return false;
} else
{{
var G__18575 = cljs.core.conj.call(null,s__18570,x__18572);
var G__18576 = etc__18573;
s__18570 = G__18575;
xs__18571 = G__18576;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__18574 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18574__delegate.call(this, x, y, more);
};
G__18574.cljs$lang$maxFixedArity = 2;
G__18574.cljs$lang$applyTo = (function (arglist__18577){
var x = cljs.core.first(arglist__18577);
var y = cljs.core.first(cljs.core.next(arglist__18577));
var more = cljs.core.rest(cljs.core.next(arglist__18577));
return G__18574__delegate(x, y, more);
});
G__18574.cljs$lang$arity$variadic = G__18574__delegate;
return G__18574;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__18581__18582 = x;
if(G__18581__18582)
{if(cljs.core.truth_((function (){var or__3824__auto____18583 = null;
if(cljs.core.truth_(or__3824__auto____18583))
{return or__3824__auto____18583;
} else
{return G__18581__18582.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__18581__18582.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__18581__18582);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__18581__18582);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__18588 = cljs.core.count.call(null,xs);
var yl__18589 = cljs.core.count.call(null,ys);
if((xl__18588 < yl__18589))
{return -1;
} else
{if((xl__18588 > yl__18589))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__18588,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__18590 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____18591 = (d__18590 === 0);
if(and__3822__auto____18591)
{return ((n + 1) < len);
} else
{return and__3822__auto____18591;
}
})())
{{
var G__18592 = xs;
var G__18593 = ys;
var G__18594 = len;
var G__18595 = (n + 1);
xs = G__18592;
ys = G__18593;
len = G__18594;
n = G__18595;
continue;
}
} else
{return d__18590;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__18597 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__18597))
{return r__18597;
} else
{if(cljs.core.truth_(r__18597))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__18599 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__18599,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__18599);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____18605 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____18605)
{var s__18606 = temp__3971__auto____18605;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__18606),cljs.core.next.call(null,s__18606));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__18607 = val;
var coll__18608 = cljs.core.seq.call(null,coll);
while(true){
if(coll__18608)
{var nval__18609 = f.call(null,val__18607,cljs.core.first.call(null,coll__18608));
if(cljs.core.reduced_QMARK_.call(null,nval__18609))
{return cljs.core.deref.call(null,nval__18609);
} else
{{
var G__18610 = nval__18609;
var G__18611 = cljs.core.next.call(null,coll__18608);
val__18607 = G__18610;
coll__18608 = G__18611;
continue;
}
}
} else
{return val__18607;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__18613 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__18613);
return cljs.core.vec.call(null,a__18613);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__18620__18621 = coll;
if(G__18620__18621)
{if((function (){var or__3824__auto____18622 = (G__18620__18621.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____18622)
{return or__3824__auto____18622;
} else
{return G__18620__18621.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__18620__18621.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__18620__18621);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__18620__18621);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__18623__18624 = coll;
if(G__18623__18624)
{if((function (){var or__3824__auto____18625 = (G__18623__18624.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____18625)
{return or__3824__auto____18625;
} else
{return G__18623__18624.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__18623__18624.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__18623__18624);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__18623__18624);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__18626 = this;
return this__18626.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__18627__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__18627 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18627__delegate.call(this, x, y, more);
};
G__18627.cljs$lang$maxFixedArity = 2;
G__18627.cljs$lang$applyTo = (function (arglist__18628){
var x = cljs.core.first(arglist__18628);
var y = cljs.core.first(cljs.core.next(arglist__18628));
var more = cljs.core.rest(cljs.core.next(arglist__18628));
return G__18627__delegate(x, y, more);
});
G__18627.cljs$lang$arity$variadic = G__18627__delegate;
return G__18627;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__18629__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__18629 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18629__delegate.call(this, x, y, more);
};
G__18629.cljs$lang$maxFixedArity = 2;
G__18629.cljs$lang$applyTo = (function (arglist__18630){
var x = cljs.core.first(arglist__18630);
var y = cljs.core.first(cljs.core.next(arglist__18630));
var more = cljs.core.rest(cljs.core.next(arglist__18630));
return G__18629__delegate(x, y, more);
});
G__18629.cljs$lang$arity$variadic = G__18629__delegate;
return G__18629;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__18631__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__18631 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18631__delegate.call(this, x, y, more);
};
G__18631.cljs$lang$maxFixedArity = 2;
G__18631.cljs$lang$applyTo = (function (arglist__18632){
var x = cljs.core.first(arglist__18632);
var y = cljs.core.first(cljs.core.next(arglist__18632));
var more = cljs.core.rest(cljs.core.next(arglist__18632));
return G__18631__delegate(x, y, more);
});
G__18631.cljs$lang$arity$variadic = G__18631__delegate;
return G__18631;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__18633__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__18633 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18633__delegate.call(this, x, y, more);
};
G__18633.cljs$lang$maxFixedArity = 2;
G__18633.cljs$lang$applyTo = (function (arglist__18634){
var x = cljs.core.first(arglist__18634);
var y = cljs.core.first(cljs.core.next(arglist__18634));
var more = cljs.core.rest(cljs.core.next(arglist__18634));
return G__18633__delegate(x, y, more);
});
G__18633.cljs$lang$arity$variadic = G__18633__delegate;
return G__18633;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__18635__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__18636 = y;
var G__18637 = cljs.core.first.call(null,more);
var G__18638 = cljs.core.next.call(null,more);
x = G__18636;
y = G__18637;
more = G__18638;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__18635 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18635__delegate.call(this, x, y, more);
};
G__18635.cljs$lang$maxFixedArity = 2;
G__18635.cljs$lang$applyTo = (function (arglist__18639){
var x = cljs.core.first(arglist__18639);
var y = cljs.core.first(cljs.core.next(arglist__18639));
var more = cljs.core.rest(cljs.core.next(arglist__18639));
return G__18635__delegate(x, y, more);
});
G__18635.cljs$lang$arity$variadic = G__18635__delegate;
return G__18635;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__18640__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__18641 = y;
var G__18642 = cljs.core.first.call(null,more);
var G__18643 = cljs.core.next.call(null,more);
x = G__18641;
y = G__18642;
more = G__18643;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__18640 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18640__delegate.call(this, x, y, more);
};
G__18640.cljs$lang$maxFixedArity = 2;
G__18640.cljs$lang$applyTo = (function (arglist__18644){
var x = cljs.core.first(arglist__18644);
var y = cljs.core.first(cljs.core.next(arglist__18644));
var more = cljs.core.rest(cljs.core.next(arglist__18644));
return G__18640__delegate(x, y, more);
});
G__18640.cljs$lang$arity$variadic = G__18640__delegate;
return G__18640;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__18645__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__18646 = y;
var G__18647 = cljs.core.first.call(null,more);
var G__18648 = cljs.core.next.call(null,more);
x = G__18646;
y = G__18647;
more = G__18648;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__18645 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18645__delegate.call(this, x, y, more);
};
G__18645.cljs$lang$maxFixedArity = 2;
G__18645.cljs$lang$applyTo = (function (arglist__18649){
var x = cljs.core.first(arglist__18649);
var y = cljs.core.first(cljs.core.next(arglist__18649));
var more = cljs.core.rest(cljs.core.next(arglist__18649));
return G__18645__delegate(x, y, more);
});
G__18645.cljs$lang$arity$variadic = G__18645__delegate;
return G__18645;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__18650__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__18651 = y;
var G__18652 = cljs.core.first.call(null,more);
var G__18653 = cljs.core.next.call(null,more);
x = G__18651;
y = G__18652;
more = G__18653;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__18650 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18650__delegate.call(this, x, y, more);
};
G__18650.cljs$lang$maxFixedArity = 2;
G__18650.cljs$lang$applyTo = (function (arglist__18654){
var x = cljs.core.first(arglist__18654);
var y = cljs.core.first(cljs.core.next(arglist__18654));
var more = cljs.core.rest(cljs.core.next(arglist__18654));
return G__18650__delegate(x, y, more);
});
G__18650.cljs$lang$arity$variadic = G__18650__delegate;
return G__18650;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__18655__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__18655 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18655__delegate.call(this, x, y, more);
};
G__18655.cljs$lang$maxFixedArity = 2;
G__18655.cljs$lang$applyTo = (function (arglist__18656){
var x = cljs.core.first(arglist__18656);
var y = cljs.core.first(cljs.core.next(arglist__18656));
var more = cljs.core.rest(cljs.core.next(arglist__18656));
return G__18655__delegate(x, y, more);
});
G__18655.cljs$lang$arity$variadic = G__18655__delegate;
return G__18655;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__18657__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__18657 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18657__delegate.call(this, x, y, more);
};
G__18657.cljs$lang$maxFixedArity = 2;
G__18657.cljs$lang$applyTo = (function (arglist__18658){
var x = cljs.core.first(arglist__18658);
var y = cljs.core.first(cljs.core.next(arglist__18658));
var more = cljs.core.rest(cljs.core.next(arglist__18658));
return G__18657__delegate(x, y, more);
});
G__18657.cljs$lang$arity$variadic = G__18657__delegate;
return G__18657;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__18660 = (n % d);
return cljs.core.fix.call(null,((n - rem__18660) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__18662 = cljs.core.quot.call(null,n,d);
return (n - (d * q__18662));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__18665 = (v - ((v >> 1) & 1431655765));
var v__18666 = ((v__18665 & 858993459) + ((v__18665 >> 2) & 858993459));
return ((((v__18666 + (v__18666 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__18667__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__18668 = y;
var G__18669 = cljs.core.first.call(null,more);
var G__18670 = cljs.core.next.call(null,more);
x = G__18668;
y = G__18669;
more = G__18670;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__18667 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18667__delegate.call(this, x, y, more);
};
G__18667.cljs$lang$maxFixedArity = 2;
G__18667.cljs$lang$applyTo = (function (arglist__18671){
var x = cljs.core.first(arglist__18671);
var y = cljs.core.first(cljs.core.next(arglist__18671));
var more = cljs.core.rest(cljs.core.next(arglist__18671));
return G__18667__delegate(x, y, more);
});
G__18667.cljs$lang$arity$variadic = G__18667__delegate;
return G__18667;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__18675 = n;
var xs__18676 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____18677 = xs__18676;
if(and__3822__auto____18677)
{return (n__18675 > 0);
} else
{return and__3822__auto____18677;
}
})()))
{{
var G__18678 = (n__18675 - 1);
var G__18679 = cljs.core.next.call(null,xs__18676);
n__18675 = G__18678;
xs__18676 = G__18679;
continue;
}
} else
{return xs__18676;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__18680__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__18681 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__18682 = cljs.core.next.call(null,more);
sb = G__18681;
more = G__18682;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__18680 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__18680__delegate.call(this, x, ys);
};
G__18680.cljs$lang$maxFixedArity = 1;
G__18680.cljs$lang$applyTo = (function (arglist__18683){
var x = cljs.core.first(arglist__18683);
var ys = cljs.core.rest(arglist__18683);
return G__18680__delegate(x, ys);
});
G__18680.cljs$lang$arity$variadic = G__18680__delegate;
return G__18680;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__18684__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__18685 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__18686 = cljs.core.next.call(null,more);
sb = G__18685;
more = G__18686;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__18684 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__18684__delegate.call(this, x, ys);
};
G__18684.cljs$lang$maxFixedArity = 1;
G__18684.cljs$lang$applyTo = (function (arglist__18687){
var x = cljs.core.first(arglist__18687);
var ys = cljs.core.rest(arglist__18687);
return G__18684__delegate(x, ys);
});
G__18684.cljs$lang$arity$variadic = G__18684__delegate;
return G__18684;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__18688){
var fmt = cljs.core.first(arglist__18688);
var args = cljs.core.rest(arglist__18688);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__18691 = cljs.core.seq.call(null,x);
var ys__18692 = cljs.core.seq.call(null,y);
while(true){
if((xs__18691 == null))
{return (ys__18692 == null);
} else
{if((ys__18692 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__18691),cljs.core.first.call(null,ys__18692)))
{{
var G__18693 = cljs.core.next.call(null,xs__18691);
var G__18694 = cljs.core.next.call(null,ys__18692);
xs__18691 = G__18693;
ys__18692 = G__18694;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__18695_SHARP_,p2__18696_SHARP_){
return cljs.core.hash_combine.call(null,p1__18695_SHARP_,cljs.core.hash.call(null,p2__18696_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__18700 = 0;
var s__18701 = cljs.core.seq.call(null,m);
while(true){
if(s__18701)
{var e__18702 = cljs.core.first.call(null,s__18701);
{
var G__18703 = ((h__18700 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__18702)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__18702)))) % 4503599627370496);
var G__18704 = cljs.core.next.call(null,s__18701);
h__18700 = G__18703;
s__18701 = G__18704;
continue;
}
} else
{return h__18700;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__18708 = 0;
var s__18709 = cljs.core.seq.call(null,s);
while(true){
if(s__18709)
{var e__18710 = cljs.core.first.call(null,s__18709);
{
var G__18711 = ((h__18708 + cljs.core.hash.call(null,e__18710)) % 4503599627370496);
var G__18712 = cljs.core.next.call(null,s__18709);
h__18708 = G__18711;
s__18709 = G__18712;
continue;
}
} else
{return h__18708;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__18733__18734 = cljs.core.seq.call(null,fn_map);
if(G__18733__18734)
{var G__18736__18738 = cljs.core.first.call(null,G__18733__18734);
var vec__18737__18739 = G__18736__18738;
var key_name__18740 = cljs.core.nth.call(null,vec__18737__18739,0,null);
var f__18741 = cljs.core.nth.call(null,vec__18737__18739,1,null);
var G__18733__18742 = G__18733__18734;
var G__18736__18743 = G__18736__18738;
var G__18733__18744 = G__18733__18742;
while(true){
var vec__18745__18746 = G__18736__18743;
var key_name__18747 = cljs.core.nth.call(null,vec__18745__18746,0,null);
var f__18748 = cljs.core.nth.call(null,vec__18745__18746,1,null);
var G__18733__18749 = G__18733__18744;
var str_name__18750 = cljs.core.name.call(null,key_name__18747);
(obj[str_name__18750] = f__18748);
var temp__3974__auto____18751 = cljs.core.next.call(null,G__18733__18749);
if(temp__3974__auto____18751)
{var G__18733__18752 = temp__3974__auto____18751;
{
var G__18753 = cljs.core.first.call(null,G__18733__18752);
var G__18754 = G__18733__18752;
G__18736__18743 = G__18753;
G__18733__18744 = G__18754;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__18755 = this;
var h__2281__auto____18756 = this__18755.__hash;
if(!((h__2281__auto____18756 == null)))
{return h__2281__auto____18756;
} else
{var h__2281__auto____18757 = cljs.core.hash_coll.call(null,coll);
this__18755.__hash = h__2281__auto____18757;
return h__2281__auto____18757;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__18758 = this;
if((this__18758.count === 1))
{return null;
} else
{return this__18758.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18759 = this;
return (new cljs.core.List(this__18759.meta,o,coll,(this__18759.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__18760 = this;
var this__18761 = this;
return cljs.core.pr_str.call(null,this__18761);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18762 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__18763 = this;
return this__18763.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__18764 = this;
return this__18764.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__18765 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__18766 = this;
return this__18766.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__18767 = this;
if((this__18767.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__18767.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18768 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18769 = this;
return (new cljs.core.List(meta,this__18769.first,this__18769.rest,this__18769.count,this__18769.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18770 = this;
return this__18770.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18771 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__18772 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__18773 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18774 = this;
return (new cljs.core.List(this__18774.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__18775 = this;
var this__18776 = this;
return cljs.core.pr_str.call(null,this__18776);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18777 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__18778 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__18779 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__18780 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__18781 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__18782 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18783 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18784 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18785 = this;
return this__18785.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18786 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__18790__18791 = coll;
if(G__18790__18791)
{if((function (){var or__3824__auto____18792 = (G__18790__18791.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____18792)
{return or__3824__auto____18792;
} else
{return G__18790__18791.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__18790__18791.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__18790__18791);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__18790__18791);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__18793__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__18793 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18793__delegate.call(this, x, y, z, items);
};
G__18793.cljs$lang$maxFixedArity = 3;
G__18793.cljs$lang$applyTo = (function (arglist__18794){
var x = cljs.core.first(arglist__18794);
var y = cljs.core.first(cljs.core.next(arglist__18794));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18794)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18794)));
return G__18793__delegate(x, y, z, items);
});
G__18793.cljs$lang$arity$variadic = G__18793__delegate;
return G__18793;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__18795 = this;
var h__2281__auto____18796 = this__18795.__hash;
if(!((h__2281__auto____18796 == null)))
{return h__2281__auto____18796;
} else
{var h__2281__auto____18797 = cljs.core.hash_coll.call(null,coll);
this__18795.__hash = h__2281__auto____18797;
return h__2281__auto____18797;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__18798 = this;
if((this__18798.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__18798.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18799 = this;
return (new cljs.core.Cons(null,o,coll,this__18799.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__18800 = this;
var this__18801 = this;
return cljs.core.pr_str.call(null,this__18801);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18802 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__18803 = this;
return this__18803.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__18804 = this;
if((this__18804.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__18804.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18805 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18806 = this;
return (new cljs.core.Cons(meta,this__18806.first,this__18806.rest,this__18806.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18807 = this;
return this__18807.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18808 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__18808.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____18813 = (coll == null);
if(or__3824__auto____18813)
{return or__3824__auto____18813;
} else
{var G__18814__18815 = coll;
if(G__18814__18815)
{if((function (){var or__3824__auto____18816 = (G__18814__18815.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____18816)
{return or__3824__auto____18816;
} else
{return G__18814__18815.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__18814__18815.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__18814__18815);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__18814__18815);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__18820__18821 = x;
if(G__18820__18821)
{if((function (){var or__3824__auto____18822 = (G__18820__18821.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____18822)
{return or__3824__auto____18822;
} else
{return G__18820__18821.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__18820__18821.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__18820__18821);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__18820__18821);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__18823 = null;
var G__18823__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__18823__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__18823 = function(string,f,start){
switch(arguments.length){
case 2:
return G__18823__2.call(this,string,f);
case 3:
return G__18823__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18823;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__18824 = null;
var G__18824__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__18824__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__18824 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__18824__2.call(this,string,k);
case 3:
return G__18824__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18824;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__18825 = null;
var G__18825__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__18825__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__18825 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__18825__2.call(this,string,n);
case 3:
return G__18825__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18825;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__18837 = null;
var G__18837__2 = (function (this_sym18828,coll){
var this__18830 = this;
var this_sym18828__18831 = this;
var ___18832 = this_sym18828__18831;
if((coll == null))
{return null;
} else
{var strobj__18833 = coll.strobj;
if((strobj__18833 == null))
{return cljs.core._lookup.call(null,coll,this__18830.k,null);
} else
{return (strobj__18833[this__18830.k]);
}
}
});
var G__18837__3 = (function (this_sym18829,coll,not_found){
var this__18830 = this;
var this_sym18829__18834 = this;
var ___18835 = this_sym18829__18834;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__18830.k,not_found);
}
});
G__18837 = function(this_sym18829,coll,not_found){
switch(arguments.length){
case 2:
return G__18837__2.call(this,this_sym18829,coll);
case 3:
return G__18837__3.call(this,this_sym18829,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18837;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym18826,args18827){
var this__18836 = this;
return this_sym18826.call.apply(this_sym18826,[this_sym18826].concat(args18827.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__18846 = null;
var G__18846__2 = (function (this_sym18840,coll){
var this_sym18840__18842 = this;
var this__18843 = this_sym18840__18842;
return cljs.core._lookup.call(null,coll,this__18843.toString(),null);
});
var G__18846__3 = (function (this_sym18841,coll,not_found){
var this_sym18841__18844 = this;
var this__18845 = this_sym18841__18844;
return cljs.core._lookup.call(null,coll,this__18845.toString(),not_found);
});
G__18846 = function(this_sym18841,coll,not_found){
switch(arguments.length){
case 2:
return G__18846__2.call(this,this_sym18841,coll);
case 3:
return G__18846__3.call(this,this_sym18841,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18846;
})()
;
String.prototype.apply = (function (this_sym18838,args18839){
return this_sym18838.call.apply(this_sym18838,[this_sym18838].concat(args18839.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__18848 = lazy_seq.x;
if(lazy_seq.realized)
{return x__18848;
} else
{lazy_seq.x = x__18848.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__18849 = this;
var h__2281__auto____18850 = this__18849.__hash;
if(!((h__2281__auto____18850 == null)))
{return h__2281__auto____18850;
} else
{var h__2281__auto____18851 = cljs.core.hash_coll.call(null,coll);
this__18849.__hash = h__2281__auto____18851;
return h__2281__auto____18851;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__18852 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18853 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__18854 = this;
var this__18855 = this;
return cljs.core.pr_str.call(null,this__18855);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18856 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__18857 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__18858 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18859 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18860 = this;
return (new cljs.core.LazySeq(meta,this__18860.realized,this__18860.x,this__18860.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18861 = this;
return this__18861.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18862 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__18862.meta);
});
cljs.core.LazySeq;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__18863 = this;
return this__18863.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__18864 = this;
var ___18865 = this;
(this__18864.buf[this__18864.end] = o);
return this__18864.end = (this__18864.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__18866 = this;
var ___18867 = this;
var ret__18868 = (new cljs.core.ArrayChunk(this__18866.buf,0,this__18866.end));
this__18866.buf = null;
return ret__18868;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__18869 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__18869.arr[this__18869.off]),(this__18869.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__18870 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__18870.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__18871 = this;
if((this__18871.off === this__18871.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__18871.arr,(this__18871.off + 1),this__18871.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__18872 = this;
return (this__18872.arr[(this__18872.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__18873 = this;
if((function (){var and__3822__auto____18874 = (i >= 0);
if(and__3822__auto____18874)
{return (i < (this__18873.end - this__18873.off));
} else
{return and__3822__auto____18874;
}
})())
{return (this__18873.arr[(this__18873.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__18875 = this;
return (this__18875.end - this__18875.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__18876 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18877 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__18878 = this;
return cljs.core._nth.call(null,this__18878.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__18879 = this;
if((cljs.core._count.call(null,this__18879.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__18879.chunk),this__18879.more,this__18879.meta));
} else
{if((this__18879.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__18879.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__18880 = this;
if((this__18880.more == null))
{return null;
} else
{return this__18880.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18881 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__18882 = this;
return (new cljs.core.ChunkedCons(this__18882.chunk,this__18882.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18883 = this;
return this__18883.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__18884 = this;
return this__18884.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__18885 = this;
if((this__18885.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__18885.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__18889__18890 = s;
if(G__18889__18890)
{if(cljs.core.truth_((function (){var or__3824__auto____18891 = null;
if(cljs.core.truth_(or__3824__auto____18891))
{return or__3824__auto____18891;
} else
{return G__18889__18890.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__18889__18890.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__18889__18890);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__18889__18890);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__18894 = [];
var s__18895 = s;
while(true){
if(cljs.core.seq.call(null,s__18895))
{ary__18894.push(cljs.core.first.call(null,s__18895));
{
var G__18896 = cljs.core.next.call(null,s__18895);
s__18895 = G__18896;
continue;
}
} else
{return ary__18894;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__18900 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__18901 = 0;
var xs__18902 = cljs.core.seq.call(null,coll);
while(true){
if(xs__18902)
{(ret__18900[i__18901] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__18902)));
{
var G__18903 = (i__18901 + 1);
var G__18904 = cljs.core.next.call(null,xs__18902);
i__18901 = G__18903;
xs__18902 = G__18904;
continue;
}
} else
{}
break;
}
return ret__18900;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__18912 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__18913 = cljs.core.seq.call(null,init_val_or_seq);
var i__18914 = 0;
var s__18915 = s__18913;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____18916 = s__18915;
if(and__3822__auto____18916)
{return (i__18914 < size);
} else
{return and__3822__auto____18916;
}
})()))
{(a__18912[i__18914] = cljs.core.first.call(null,s__18915));
{
var G__18919 = (i__18914 + 1);
var G__18920 = cljs.core.next.call(null,s__18915);
i__18914 = G__18919;
s__18915 = G__18920;
continue;
}
} else
{return a__18912;
}
break;
}
} else
{var n__2616__auto____18917 = size;
var i__18918 = 0;
while(true){
if((i__18918 < n__2616__auto____18917))
{(a__18912[i__18918] = init_val_or_seq);
{
var G__18921 = (i__18918 + 1);
i__18918 = G__18921;
continue;
}
} else
{}
break;
}
return a__18912;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__18929 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__18930 = cljs.core.seq.call(null,init_val_or_seq);
var i__18931 = 0;
var s__18932 = s__18930;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____18933 = s__18932;
if(and__3822__auto____18933)
{return (i__18931 < size);
} else
{return and__3822__auto____18933;
}
})()))
{(a__18929[i__18931] = cljs.core.first.call(null,s__18932));
{
var G__18936 = (i__18931 + 1);
var G__18937 = cljs.core.next.call(null,s__18932);
i__18931 = G__18936;
s__18932 = G__18937;
continue;
}
} else
{return a__18929;
}
break;
}
} else
{var n__2616__auto____18934 = size;
var i__18935 = 0;
while(true){
if((i__18935 < n__2616__auto____18934))
{(a__18929[i__18935] = init_val_or_seq);
{
var G__18938 = (i__18935 + 1);
i__18935 = G__18938;
continue;
}
} else
{}
break;
}
return a__18929;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__18946 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__18947 = cljs.core.seq.call(null,init_val_or_seq);
var i__18948 = 0;
var s__18949 = s__18947;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____18950 = s__18949;
if(and__3822__auto____18950)
{return (i__18948 < size);
} else
{return and__3822__auto____18950;
}
})()))
{(a__18946[i__18948] = cljs.core.first.call(null,s__18949));
{
var G__18953 = (i__18948 + 1);
var G__18954 = cljs.core.next.call(null,s__18949);
i__18948 = G__18953;
s__18949 = G__18954;
continue;
}
} else
{return a__18946;
}
break;
}
} else
{var n__2616__auto____18951 = size;
var i__18952 = 0;
while(true){
if((i__18952 < n__2616__auto____18951))
{(a__18946[i__18952] = init_val_or_seq);
{
var G__18955 = (i__18952 + 1);
i__18952 = G__18955;
continue;
}
} else
{}
break;
}
return a__18946;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__18960 = s;
var i__18961 = n;
var sum__18962 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____18963 = (i__18961 > 0);
if(and__3822__auto____18963)
{return cljs.core.seq.call(null,s__18960);
} else
{return and__3822__auto____18963;
}
})()))
{{
var G__18964 = cljs.core.next.call(null,s__18960);
var G__18965 = (i__18961 - 1);
var G__18966 = (sum__18962 + 1);
s__18960 = G__18964;
i__18961 = G__18965;
sum__18962 = G__18966;
continue;
}
} else
{return sum__18962;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__18971 = cljs.core.seq.call(null,x);
if(s__18971)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__18971))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__18971),concat.call(null,cljs.core.chunk_rest.call(null,s__18971),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__18971),concat.call(null,cljs.core.rest.call(null,s__18971),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__18975__delegate = function (x,y,zs){
var cat__18974 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__18973 = cljs.core.seq.call(null,xys);
if(xys__18973)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__18973))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__18973),cat.call(null,cljs.core.chunk_rest.call(null,xys__18973),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__18973),cat.call(null,cljs.core.rest.call(null,xys__18973),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__18974.call(null,concat.call(null,x,y),zs);
};
var G__18975 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18975__delegate.call(this, x, y, zs);
};
G__18975.cljs$lang$maxFixedArity = 2;
G__18975.cljs$lang$applyTo = (function (arglist__18976){
var x = cljs.core.first(arglist__18976);
var y = cljs.core.first(cljs.core.next(arglist__18976));
var zs = cljs.core.rest(cljs.core.next(arglist__18976));
return G__18975__delegate(x, y, zs);
});
G__18975.cljs$lang$arity$variadic = G__18975__delegate;
return G__18975;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__18977__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__18977 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__18977__delegate.call(this, a, b, c, d, more);
};
G__18977.cljs$lang$maxFixedArity = 4;
G__18977.cljs$lang$applyTo = (function (arglist__18978){
var a = cljs.core.first(arglist__18978);
var b = cljs.core.first(cljs.core.next(arglist__18978));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18978)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__18978))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__18978))));
return G__18977__delegate(a, b, c, d, more);
});
G__18977.cljs$lang$arity$variadic = G__18977__delegate;
return G__18977;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__19020 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__19021 = cljs.core._first.call(null,args__19020);
var args__19022 = cljs.core._rest.call(null,args__19020);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__19021);
} else
{return f.call(null,a__19021);
}
} else
{var b__19023 = cljs.core._first.call(null,args__19022);
var args__19024 = cljs.core._rest.call(null,args__19022);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__19021,b__19023);
} else
{return f.call(null,a__19021,b__19023);
}
} else
{var c__19025 = cljs.core._first.call(null,args__19024);
var args__19026 = cljs.core._rest.call(null,args__19024);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__19021,b__19023,c__19025);
} else
{return f.call(null,a__19021,b__19023,c__19025);
}
} else
{var d__19027 = cljs.core._first.call(null,args__19026);
var args__19028 = cljs.core._rest.call(null,args__19026);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__19021,b__19023,c__19025,d__19027);
} else
{return f.call(null,a__19021,b__19023,c__19025,d__19027);
}
} else
{var e__19029 = cljs.core._first.call(null,args__19028);
var args__19030 = cljs.core._rest.call(null,args__19028);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__19021,b__19023,c__19025,d__19027,e__19029);
} else
{return f.call(null,a__19021,b__19023,c__19025,d__19027,e__19029);
}
} else
{var f__19031 = cljs.core._first.call(null,args__19030);
var args__19032 = cljs.core._rest.call(null,args__19030);
if((argc === 6))
{if(f__19031.cljs$lang$arity$6)
{return f__19031.cljs$lang$arity$6(a__19021,b__19023,c__19025,d__19027,e__19029,f__19031);
} else
{return f__19031.call(null,a__19021,b__19023,c__19025,d__19027,e__19029,f__19031);
}
} else
{var g__19033 = cljs.core._first.call(null,args__19032);
var args__19034 = cljs.core._rest.call(null,args__19032);
if((argc === 7))
{if(f__19031.cljs$lang$arity$7)
{return f__19031.cljs$lang$arity$7(a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033);
} else
{return f__19031.call(null,a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033);
}
} else
{var h__19035 = cljs.core._first.call(null,args__19034);
var args__19036 = cljs.core._rest.call(null,args__19034);
if((argc === 8))
{if(f__19031.cljs$lang$arity$8)
{return f__19031.cljs$lang$arity$8(a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035);
} else
{return f__19031.call(null,a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035);
}
} else
{var i__19037 = cljs.core._first.call(null,args__19036);
var args__19038 = cljs.core._rest.call(null,args__19036);
if((argc === 9))
{if(f__19031.cljs$lang$arity$9)
{return f__19031.cljs$lang$arity$9(a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037);
} else
{return f__19031.call(null,a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037);
}
} else
{var j__19039 = cljs.core._first.call(null,args__19038);
var args__19040 = cljs.core._rest.call(null,args__19038);
if((argc === 10))
{if(f__19031.cljs$lang$arity$10)
{return f__19031.cljs$lang$arity$10(a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039);
} else
{return f__19031.call(null,a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039);
}
} else
{var k__19041 = cljs.core._first.call(null,args__19040);
var args__19042 = cljs.core._rest.call(null,args__19040);
if((argc === 11))
{if(f__19031.cljs$lang$arity$11)
{return f__19031.cljs$lang$arity$11(a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039,k__19041);
} else
{return f__19031.call(null,a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039,k__19041);
}
} else
{var l__19043 = cljs.core._first.call(null,args__19042);
var args__19044 = cljs.core._rest.call(null,args__19042);
if((argc === 12))
{if(f__19031.cljs$lang$arity$12)
{return f__19031.cljs$lang$arity$12(a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039,k__19041,l__19043);
} else
{return f__19031.call(null,a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039,k__19041,l__19043);
}
} else
{var m__19045 = cljs.core._first.call(null,args__19044);
var args__19046 = cljs.core._rest.call(null,args__19044);
if((argc === 13))
{if(f__19031.cljs$lang$arity$13)
{return f__19031.cljs$lang$arity$13(a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039,k__19041,l__19043,m__19045);
} else
{return f__19031.call(null,a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039,k__19041,l__19043,m__19045);
}
} else
{var n__19047 = cljs.core._first.call(null,args__19046);
var args__19048 = cljs.core._rest.call(null,args__19046);
if((argc === 14))
{if(f__19031.cljs$lang$arity$14)
{return f__19031.cljs$lang$arity$14(a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039,k__19041,l__19043,m__19045,n__19047);
} else
{return f__19031.call(null,a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039,k__19041,l__19043,m__19045,n__19047);
}
} else
{var o__19049 = cljs.core._first.call(null,args__19048);
var args__19050 = cljs.core._rest.call(null,args__19048);
if((argc === 15))
{if(f__19031.cljs$lang$arity$15)
{return f__19031.cljs$lang$arity$15(a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039,k__19041,l__19043,m__19045,n__19047,o__19049);
} else
{return f__19031.call(null,a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039,k__19041,l__19043,m__19045,n__19047,o__19049);
}
} else
{var p__19051 = cljs.core._first.call(null,args__19050);
var args__19052 = cljs.core._rest.call(null,args__19050);
if((argc === 16))
{if(f__19031.cljs$lang$arity$16)
{return f__19031.cljs$lang$arity$16(a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039,k__19041,l__19043,m__19045,n__19047,o__19049,p__19051);
} else
{return f__19031.call(null,a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039,k__19041,l__19043,m__19045,n__19047,o__19049,p__19051);
}
} else
{var q__19053 = cljs.core._first.call(null,args__19052);
var args__19054 = cljs.core._rest.call(null,args__19052);
if((argc === 17))
{if(f__19031.cljs$lang$arity$17)
{return f__19031.cljs$lang$arity$17(a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039,k__19041,l__19043,m__19045,n__19047,o__19049,p__19051,q__19053);
} else
{return f__19031.call(null,a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039,k__19041,l__19043,m__19045,n__19047,o__19049,p__19051,q__19053);
}
} else
{var r__19055 = cljs.core._first.call(null,args__19054);
var args__19056 = cljs.core._rest.call(null,args__19054);
if((argc === 18))
{if(f__19031.cljs$lang$arity$18)
{return f__19031.cljs$lang$arity$18(a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039,k__19041,l__19043,m__19045,n__19047,o__19049,p__19051,q__19053,r__19055);
} else
{return f__19031.call(null,a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039,k__19041,l__19043,m__19045,n__19047,o__19049,p__19051,q__19053,r__19055);
}
} else
{var s__19057 = cljs.core._first.call(null,args__19056);
var args__19058 = cljs.core._rest.call(null,args__19056);
if((argc === 19))
{if(f__19031.cljs$lang$arity$19)
{return f__19031.cljs$lang$arity$19(a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039,k__19041,l__19043,m__19045,n__19047,o__19049,p__19051,q__19053,r__19055,s__19057);
} else
{return f__19031.call(null,a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039,k__19041,l__19043,m__19045,n__19047,o__19049,p__19051,q__19053,r__19055,s__19057);
}
} else
{var t__19059 = cljs.core._first.call(null,args__19058);
var args__19060 = cljs.core._rest.call(null,args__19058);
if((argc === 20))
{if(f__19031.cljs$lang$arity$20)
{return f__19031.cljs$lang$arity$20(a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039,k__19041,l__19043,m__19045,n__19047,o__19049,p__19051,q__19053,r__19055,s__19057,t__19059);
} else
{return f__19031.call(null,a__19021,b__19023,c__19025,d__19027,e__19029,f__19031,g__19033,h__19035,i__19037,j__19039,k__19041,l__19043,m__19045,n__19047,o__19049,p__19051,q__19053,r__19055,s__19057,t__19059);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__19075 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__19076 = cljs.core.bounded_count.call(null,args,(fixed_arity__19075 + 1));
if((bc__19076 <= fixed_arity__19075))
{return cljs.core.apply_to.call(null,f,bc__19076,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__19077 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__19078 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__19079 = cljs.core.bounded_count.call(null,arglist__19077,(fixed_arity__19078 + 1));
if((bc__19079 <= fixed_arity__19078))
{return cljs.core.apply_to.call(null,f,bc__19079,arglist__19077);
} else
{return f.cljs$lang$applyTo(arglist__19077);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__19077));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__19080 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__19081 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__19082 = cljs.core.bounded_count.call(null,arglist__19080,(fixed_arity__19081 + 1));
if((bc__19082 <= fixed_arity__19081))
{return cljs.core.apply_to.call(null,f,bc__19082,arglist__19080);
} else
{return f.cljs$lang$applyTo(arglist__19080);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__19080));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__19083 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__19084 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__19085 = cljs.core.bounded_count.call(null,arglist__19083,(fixed_arity__19084 + 1));
if((bc__19085 <= fixed_arity__19084))
{return cljs.core.apply_to.call(null,f,bc__19085,arglist__19083);
} else
{return f.cljs$lang$applyTo(arglist__19083);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__19083));
}
});
var apply__6 = (function() { 
var G__19089__delegate = function (f,a,b,c,d,args){
var arglist__19086 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__19087 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__19088 = cljs.core.bounded_count.call(null,arglist__19086,(fixed_arity__19087 + 1));
if((bc__19088 <= fixed_arity__19087))
{return cljs.core.apply_to.call(null,f,bc__19088,arglist__19086);
} else
{return f.cljs$lang$applyTo(arglist__19086);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__19086));
}
};
var G__19089 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__19089__delegate.call(this, f, a, b, c, d, args);
};
G__19089.cljs$lang$maxFixedArity = 5;
G__19089.cljs$lang$applyTo = (function (arglist__19090){
var f = cljs.core.first(arglist__19090);
var a = cljs.core.first(cljs.core.next(arglist__19090));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19090)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19090))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19090)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19090)))));
return G__19089__delegate(f, a, b, c, d, args);
});
G__19089.cljs$lang$arity$variadic = G__19089__delegate;
return G__19089;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__19091){
var obj = cljs.core.first(arglist__19091);
var f = cljs.core.first(cljs.core.next(arglist__19091));
var args = cljs.core.rest(cljs.core.next(arglist__19091));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__19092__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__19092 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19092__delegate.call(this, x, y, more);
};
G__19092.cljs$lang$maxFixedArity = 2;
G__19092.cljs$lang$applyTo = (function (arglist__19093){
var x = cljs.core.first(arglist__19093);
var y = cljs.core.first(cljs.core.next(arglist__19093));
var more = cljs.core.rest(cljs.core.next(arglist__19093));
return G__19092__delegate(x, y, more);
});
G__19092.cljs$lang$arity$variadic = G__19092__delegate;
return G__19092;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__19094 = pred;
var G__19095 = cljs.core.next.call(null,coll);
pred = G__19094;
coll = G__19095;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto____19097 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____19097))
{return or__3824__auto____19097;
} else
{{
var G__19098 = pred;
var G__19099 = cljs.core.next.call(null,coll);
pred = G__19098;
coll = G__19099;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__19100 = null;
var G__19100__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__19100__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__19100__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__19100__3 = (function() { 
var G__19101__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__19101 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19101__delegate.call(this, x, y, zs);
};
G__19101.cljs$lang$maxFixedArity = 2;
G__19101.cljs$lang$applyTo = (function (arglist__19102){
var x = cljs.core.first(arglist__19102);
var y = cljs.core.first(cljs.core.next(arglist__19102));
var zs = cljs.core.rest(cljs.core.next(arglist__19102));
return G__19101__delegate(x, y, zs);
});
G__19101.cljs$lang$arity$variadic = G__19101__delegate;
return G__19101;
})()
;
G__19100 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__19100__0.call(this);
case 1:
return G__19100__1.call(this,x);
case 2:
return G__19100__2.call(this,x,y);
default:
return G__19100__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__19100.cljs$lang$maxFixedArity = 2;
G__19100.cljs$lang$applyTo = G__19100__3.cljs$lang$applyTo;
return G__19100;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__19103__delegate = function (args){
return x;
};
var G__19103 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19103__delegate.call(this, args);
};
G__19103.cljs$lang$maxFixedArity = 0;
G__19103.cljs$lang$applyTo = (function (arglist__19104){
var args = cljs.core.seq(arglist__19104);;
return G__19103__delegate(args);
});
G__19103.cljs$lang$arity$variadic = G__19103__delegate;
return G__19103;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__19111 = null;
var G__19111__0 = (function (){
return f.call(null,g.call(null));
});
var G__19111__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__19111__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__19111__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__19111__4 = (function() { 
var G__19112__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__19112 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19112__delegate.call(this, x, y, z, args);
};
G__19112.cljs$lang$maxFixedArity = 3;
G__19112.cljs$lang$applyTo = (function (arglist__19113){
var x = cljs.core.first(arglist__19113);
var y = cljs.core.first(cljs.core.next(arglist__19113));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19113)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19113)));
return G__19112__delegate(x, y, z, args);
});
G__19112.cljs$lang$arity$variadic = G__19112__delegate;
return G__19112;
})()
;
G__19111 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__19111__0.call(this);
case 1:
return G__19111__1.call(this,x);
case 2:
return G__19111__2.call(this,x,y);
case 3:
return G__19111__3.call(this,x,y,z);
default:
return G__19111__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__19111.cljs$lang$maxFixedArity = 3;
G__19111.cljs$lang$applyTo = G__19111__4.cljs$lang$applyTo;
return G__19111;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__19114 = null;
var G__19114__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__19114__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__19114__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__19114__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__19114__4 = (function() { 
var G__19115__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__19115 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19115__delegate.call(this, x, y, z, args);
};
G__19115.cljs$lang$maxFixedArity = 3;
G__19115.cljs$lang$applyTo = (function (arglist__19116){
var x = cljs.core.first(arglist__19116);
var y = cljs.core.first(cljs.core.next(arglist__19116));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19116)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19116)));
return G__19115__delegate(x, y, z, args);
});
G__19115.cljs$lang$arity$variadic = G__19115__delegate;
return G__19115;
})()
;
G__19114 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__19114__0.call(this);
case 1:
return G__19114__1.call(this,x);
case 2:
return G__19114__2.call(this,x,y);
case 3:
return G__19114__3.call(this,x,y,z);
default:
return G__19114__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__19114.cljs$lang$maxFixedArity = 3;
G__19114.cljs$lang$applyTo = G__19114__4.cljs$lang$applyTo;
return G__19114;
})()
});
var comp__4 = (function() { 
var G__19117__delegate = function (f1,f2,f3,fs){
var fs__19108 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__19118__delegate = function (args){
var ret__19109 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__19108),args);
var fs__19110 = cljs.core.next.call(null,fs__19108);
while(true){
if(fs__19110)
{{
var G__19119 = cljs.core.first.call(null,fs__19110).call(null,ret__19109);
var G__19120 = cljs.core.next.call(null,fs__19110);
ret__19109 = G__19119;
fs__19110 = G__19120;
continue;
}
} else
{return ret__19109;
}
break;
}
};
var G__19118 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19118__delegate.call(this, args);
};
G__19118.cljs$lang$maxFixedArity = 0;
G__19118.cljs$lang$applyTo = (function (arglist__19121){
var args = cljs.core.seq(arglist__19121);;
return G__19118__delegate(args);
});
G__19118.cljs$lang$arity$variadic = G__19118__delegate;
return G__19118;
})()
;
};
var G__19117 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19117__delegate.call(this, f1, f2, f3, fs);
};
G__19117.cljs$lang$maxFixedArity = 3;
G__19117.cljs$lang$applyTo = (function (arglist__19122){
var f1 = cljs.core.first(arglist__19122);
var f2 = cljs.core.first(cljs.core.next(arglist__19122));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19122)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19122)));
return G__19117__delegate(f1, f2, f3, fs);
});
G__19117.cljs$lang$arity$variadic = G__19117__delegate;
return G__19117;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__19123__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__19123 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19123__delegate.call(this, args);
};
G__19123.cljs$lang$maxFixedArity = 0;
G__19123.cljs$lang$applyTo = (function (arglist__19124){
var args = cljs.core.seq(arglist__19124);;
return G__19123__delegate(args);
});
G__19123.cljs$lang$arity$variadic = G__19123__delegate;
return G__19123;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__19125__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__19125 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19125__delegate.call(this, args);
};
G__19125.cljs$lang$maxFixedArity = 0;
G__19125.cljs$lang$applyTo = (function (arglist__19126){
var args = cljs.core.seq(arglist__19126);;
return G__19125__delegate(args);
});
G__19125.cljs$lang$arity$variadic = G__19125__delegate;
return G__19125;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__19127__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__19127 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19127__delegate.call(this, args);
};
G__19127.cljs$lang$maxFixedArity = 0;
G__19127.cljs$lang$applyTo = (function (arglist__19128){
var args = cljs.core.seq(arglist__19128);;
return G__19127__delegate(args);
});
G__19127.cljs$lang$arity$variadic = G__19127__delegate;
return G__19127;
})()
;
});
var partial__5 = (function() { 
var G__19129__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__19130__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__19130 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19130__delegate.call(this, args);
};
G__19130.cljs$lang$maxFixedArity = 0;
G__19130.cljs$lang$applyTo = (function (arglist__19131){
var args = cljs.core.seq(arglist__19131);;
return G__19130__delegate(args);
});
G__19130.cljs$lang$arity$variadic = G__19130__delegate;
return G__19130;
})()
;
};
var G__19129 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__19129__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__19129.cljs$lang$maxFixedArity = 4;
G__19129.cljs$lang$applyTo = (function (arglist__19132){
var f = cljs.core.first(arglist__19132);
var arg1 = cljs.core.first(cljs.core.next(arglist__19132));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19132)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19132))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19132))));
return G__19129__delegate(f, arg1, arg2, arg3, more);
});
G__19129.cljs$lang$arity$variadic = G__19129__delegate;
return G__19129;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__19133 = null;
var G__19133__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__19133__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__19133__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__19133__4 = (function() { 
var G__19134__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__19134 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19134__delegate.call(this, a, b, c, ds);
};
G__19134.cljs$lang$maxFixedArity = 3;
G__19134.cljs$lang$applyTo = (function (arglist__19135){
var a = cljs.core.first(arglist__19135);
var b = cljs.core.first(cljs.core.next(arglist__19135));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19135)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19135)));
return G__19134__delegate(a, b, c, ds);
});
G__19134.cljs$lang$arity$variadic = G__19134__delegate;
return G__19134;
})()
;
G__19133 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__19133__1.call(this,a);
case 2:
return G__19133__2.call(this,a,b);
case 3:
return G__19133__3.call(this,a,b,c);
default:
return G__19133__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__19133.cljs$lang$maxFixedArity = 3;
G__19133.cljs$lang$applyTo = G__19133__4.cljs$lang$applyTo;
return G__19133;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__19136 = null;
var G__19136__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__19136__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__19136__4 = (function() { 
var G__19137__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__19137 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19137__delegate.call(this, a, b, c, ds);
};
G__19137.cljs$lang$maxFixedArity = 3;
G__19137.cljs$lang$applyTo = (function (arglist__19138){
var a = cljs.core.first(arglist__19138);
var b = cljs.core.first(cljs.core.next(arglist__19138));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19138)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19138)));
return G__19137__delegate(a, b, c, ds);
});
G__19137.cljs$lang$arity$variadic = G__19137__delegate;
return G__19137;
})()
;
G__19136 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__19136__2.call(this,a,b);
case 3:
return G__19136__3.call(this,a,b,c);
default:
return G__19136__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__19136.cljs$lang$maxFixedArity = 3;
G__19136.cljs$lang$applyTo = G__19136__4.cljs$lang$applyTo;
return G__19136;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__19139 = null;
var G__19139__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__19139__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__19139__4 = (function() { 
var G__19140__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__19140 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19140__delegate.call(this, a, b, c, ds);
};
G__19140.cljs$lang$maxFixedArity = 3;
G__19140.cljs$lang$applyTo = (function (arglist__19141){
var a = cljs.core.first(arglist__19141);
var b = cljs.core.first(cljs.core.next(arglist__19141));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19141)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19141)));
return G__19140__delegate(a, b, c, ds);
});
G__19140.cljs$lang$arity$variadic = G__19140__delegate;
return G__19140;
})()
;
G__19139 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__19139__2.call(this,a,b);
case 3:
return G__19139__3.call(this,a,b,c);
default:
return G__19139__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__19139.cljs$lang$maxFixedArity = 3;
G__19139.cljs$lang$applyTo = G__19139__4.cljs$lang$applyTo;
return G__19139;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__19157 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____19165 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19165)
{var s__19166 = temp__3974__auto____19165;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19166))
{var c__19167 = cljs.core.chunk_first.call(null,s__19166);
var size__19168 = cljs.core.count.call(null,c__19167);
var b__19169 = cljs.core.chunk_buffer.call(null,size__19168);
var n__2616__auto____19170 = size__19168;
var i__19171 = 0;
while(true){
if((i__19171 < n__2616__auto____19170))
{cljs.core.chunk_append.call(null,b__19169,f.call(null,(idx + i__19171),cljs.core._nth.call(null,c__19167,i__19171)));
{
var G__19172 = (i__19171 + 1);
i__19171 = G__19172;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19169),mapi.call(null,(idx + size__19168),cljs.core.chunk_rest.call(null,s__19166)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__19166)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__19166)));
}
} else
{return null;
}
}),null));
});
return mapi__19157.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____19182 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19182)
{var s__19183 = temp__3974__auto____19182;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19183))
{var c__19184 = cljs.core.chunk_first.call(null,s__19183);
var size__19185 = cljs.core.count.call(null,c__19184);
var b__19186 = cljs.core.chunk_buffer.call(null,size__19185);
var n__2616__auto____19187 = size__19185;
var i__19188 = 0;
while(true){
if((i__19188 < n__2616__auto____19187))
{var x__19189 = f.call(null,cljs.core._nth.call(null,c__19184,i__19188));
if((x__19189 == null))
{} else
{cljs.core.chunk_append.call(null,b__19186,x__19189);
}
{
var G__19191 = (i__19188 + 1);
i__19188 = G__19191;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19186),keep.call(null,f,cljs.core.chunk_rest.call(null,s__19183)));
} else
{var x__19190 = f.call(null,cljs.core.first.call(null,s__19183));
if((x__19190 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__19183));
} else
{return cljs.core.cons.call(null,x__19190,keep.call(null,f,cljs.core.rest.call(null,s__19183)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__19217 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____19227 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19227)
{var s__19228 = temp__3974__auto____19227;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19228))
{var c__19229 = cljs.core.chunk_first.call(null,s__19228);
var size__19230 = cljs.core.count.call(null,c__19229);
var b__19231 = cljs.core.chunk_buffer.call(null,size__19230);
var n__2616__auto____19232 = size__19230;
var i__19233 = 0;
while(true){
if((i__19233 < n__2616__auto____19232))
{var x__19234 = f.call(null,(idx + i__19233),cljs.core._nth.call(null,c__19229,i__19233));
if((x__19234 == null))
{} else
{cljs.core.chunk_append.call(null,b__19231,x__19234);
}
{
var G__19236 = (i__19233 + 1);
i__19233 = G__19236;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19231),keepi.call(null,(idx + size__19230),cljs.core.chunk_rest.call(null,s__19228)));
} else
{var x__19235 = f.call(null,idx,cljs.core.first.call(null,s__19228));
if((x__19235 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__19228));
} else
{return cljs.core.cons.call(null,x__19235,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__19228)));
}
}
} else
{return null;
}
}),null));
});
return keepi__19217.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19322 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____19322))
{return p.call(null,y);
} else
{return and__3822__auto____19322;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19323 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____19323))
{var and__3822__auto____19324 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____19324))
{return p.call(null,z);
} else
{return and__3822__auto____19324;
}
} else
{return and__3822__auto____19323;
}
})());
});
var ep1__4 = (function() { 
var G__19393__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19325 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____19325))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____19325;
}
})());
};
var G__19393 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19393__delegate.call(this, x, y, z, args);
};
G__19393.cljs$lang$maxFixedArity = 3;
G__19393.cljs$lang$applyTo = (function (arglist__19394){
var x = cljs.core.first(arglist__19394);
var y = cljs.core.first(cljs.core.next(arglist__19394));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19394)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19394)));
return G__19393__delegate(x, y, z, args);
});
G__19393.cljs$lang$arity$variadic = G__19393__delegate;
return G__19393;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19337 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____19337))
{return p2.call(null,x);
} else
{return and__3822__auto____19337;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19338 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____19338))
{var and__3822__auto____19339 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____19339))
{var and__3822__auto____19340 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____19340))
{return p2.call(null,y);
} else
{return and__3822__auto____19340;
}
} else
{return and__3822__auto____19339;
}
} else
{return and__3822__auto____19338;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19341 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____19341))
{var and__3822__auto____19342 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____19342))
{var and__3822__auto____19343 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____19343))
{var and__3822__auto____19344 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____19344))
{var and__3822__auto____19345 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____19345))
{return p2.call(null,z);
} else
{return and__3822__auto____19345;
}
} else
{return and__3822__auto____19344;
}
} else
{return and__3822__auto____19343;
}
} else
{return and__3822__auto____19342;
}
} else
{return and__3822__auto____19341;
}
})());
});
var ep2__4 = (function() { 
var G__19395__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19346 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____19346))
{return cljs.core.every_QMARK_.call(null,(function (p1__19192_SHARP_){
var and__3822__auto____19347 = p1.call(null,p1__19192_SHARP_);
if(cljs.core.truth_(and__3822__auto____19347))
{return p2.call(null,p1__19192_SHARP_);
} else
{return and__3822__auto____19347;
}
}),args);
} else
{return and__3822__auto____19346;
}
})());
};
var G__19395 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19395__delegate.call(this, x, y, z, args);
};
G__19395.cljs$lang$maxFixedArity = 3;
G__19395.cljs$lang$applyTo = (function (arglist__19396){
var x = cljs.core.first(arglist__19396);
var y = cljs.core.first(cljs.core.next(arglist__19396));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19396)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19396)));
return G__19395__delegate(x, y, z, args);
});
G__19395.cljs$lang$arity$variadic = G__19395__delegate;
return G__19395;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19366 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____19366))
{var and__3822__auto____19367 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____19367))
{return p3.call(null,x);
} else
{return and__3822__auto____19367;
}
} else
{return and__3822__auto____19366;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19368 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____19368))
{var and__3822__auto____19369 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____19369))
{var and__3822__auto____19370 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____19370))
{var and__3822__auto____19371 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____19371))
{var and__3822__auto____19372 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____19372))
{return p3.call(null,y);
} else
{return and__3822__auto____19372;
}
} else
{return and__3822__auto____19371;
}
} else
{return and__3822__auto____19370;
}
} else
{return and__3822__auto____19369;
}
} else
{return and__3822__auto____19368;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19373 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____19373))
{var and__3822__auto____19374 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____19374))
{var and__3822__auto____19375 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____19375))
{var and__3822__auto____19376 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____19376))
{var and__3822__auto____19377 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____19377))
{var and__3822__auto____19378 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____19378))
{var and__3822__auto____19379 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____19379))
{var and__3822__auto____19380 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____19380))
{return p3.call(null,z);
} else
{return and__3822__auto____19380;
}
} else
{return and__3822__auto____19379;
}
} else
{return and__3822__auto____19378;
}
} else
{return and__3822__auto____19377;
}
} else
{return and__3822__auto____19376;
}
} else
{return and__3822__auto____19375;
}
} else
{return and__3822__auto____19374;
}
} else
{return and__3822__auto____19373;
}
})());
});
var ep3__4 = (function() { 
var G__19397__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19381 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____19381))
{return cljs.core.every_QMARK_.call(null,(function (p1__19193_SHARP_){
var and__3822__auto____19382 = p1.call(null,p1__19193_SHARP_);
if(cljs.core.truth_(and__3822__auto____19382))
{var and__3822__auto____19383 = p2.call(null,p1__19193_SHARP_);
if(cljs.core.truth_(and__3822__auto____19383))
{return p3.call(null,p1__19193_SHARP_);
} else
{return and__3822__auto____19383;
}
} else
{return and__3822__auto____19382;
}
}),args);
} else
{return and__3822__auto____19381;
}
})());
};
var G__19397 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19397__delegate.call(this, x, y, z, args);
};
G__19397.cljs$lang$maxFixedArity = 3;
G__19397.cljs$lang$applyTo = (function (arglist__19398){
var x = cljs.core.first(arglist__19398);
var y = cljs.core.first(cljs.core.next(arglist__19398));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19398)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19398)));
return G__19397__delegate(x, y, z, args);
});
G__19397.cljs$lang$arity$variadic = G__19397__delegate;
return G__19397;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__19399__delegate = function (p1,p2,p3,ps){
var ps__19384 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__19194_SHARP_){
return p1__19194_SHARP_.call(null,x);
}),ps__19384);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__19195_SHARP_){
var and__3822__auto____19389 = p1__19195_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____19389))
{return p1__19195_SHARP_.call(null,y);
} else
{return and__3822__auto____19389;
}
}),ps__19384);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__19196_SHARP_){
var and__3822__auto____19390 = p1__19196_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____19390))
{var and__3822__auto____19391 = p1__19196_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____19391))
{return p1__19196_SHARP_.call(null,z);
} else
{return and__3822__auto____19391;
}
} else
{return and__3822__auto____19390;
}
}),ps__19384);
});
var epn__4 = (function() { 
var G__19400__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____19392 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____19392))
{return cljs.core.every_QMARK_.call(null,(function (p1__19197_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__19197_SHARP_,args);
}),ps__19384);
} else
{return and__3822__auto____19392;
}
})());
};
var G__19400 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19400__delegate.call(this, x, y, z, args);
};
G__19400.cljs$lang$maxFixedArity = 3;
G__19400.cljs$lang$applyTo = (function (arglist__19401){
var x = cljs.core.first(arglist__19401);
var y = cljs.core.first(cljs.core.next(arglist__19401));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19401)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19401)));
return G__19400__delegate(x, y, z, args);
});
G__19400.cljs$lang$arity$variadic = G__19400__delegate;
return G__19400;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__19399 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19399__delegate.call(this, p1, p2, p3, ps);
};
G__19399.cljs$lang$maxFixedArity = 3;
G__19399.cljs$lang$applyTo = (function (arglist__19402){
var p1 = cljs.core.first(arglist__19402);
var p2 = cljs.core.first(cljs.core.next(arglist__19402));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19402)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19402)));
return G__19399__delegate(p1, p2, p3, ps);
});
G__19399.cljs$lang$arity$variadic = G__19399__delegate;
return G__19399;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____19483 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____19483))
{return or__3824__auto____19483;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____19484 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____19484))
{return or__3824__auto____19484;
} else
{var or__3824__auto____19485 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____19485))
{return or__3824__auto____19485;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__19554__delegate = function (x,y,z,args){
var or__3824__auto____19486 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____19486))
{return or__3824__auto____19486;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__19554 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19554__delegate.call(this, x, y, z, args);
};
G__19554.cljs$lang$maxFixedArity = 3;
G__19554.cljs$lang$applyTo = (function (arglist__19555){
var x = cljs.core.first(arglist__19555);
var y = cljs.core.first(cljs.core.next(arglist__19555));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19555)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19555)));
return G__19554__delegate(x, y, z, args);
});
G__19554.cljs$lang$arity$variadic = G__19554__delegate;
return G__19554;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____19498 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____19498))
{return or__3824__auto____19498;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____19499 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____19499))
{return or__3824__auto____19499;
} else
{var or__3824__auto____19500 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____19500))
{return or__3824__auto____19500;
} else
{var or__3824__auto____19501 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____19501))
{return or__3824__auto____19501;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____19502 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____19502))
{return or__3824__auto____19502;
} else
{var or__3824__auto____19503 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____19503))
{return or__3824__auto____19503;
} else
{var or__3824__auto____19504 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____19504))
{return or__3824__auto____19504;
} else
{var or__3824__auto____19505 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____19505))
{return or__3824__auto____19505;
} else
{var or__3824__auto____19506 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____19506))
{return or__3824__auto____19506;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__19556__delegate = function (x,y,z,args){
var or__3824__auto____19507 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____19507))
{return or__3824__auto____19507;
} else
{return cljs.core.some.call(null,(function (p1__19237_SHARP_){
var or__3824__auto____19508 = p1.call(null,p1__19237_SHARP_);
if(cljs.core.truth_(or__3824__auto____19508))
{return or__3824__auto____19508;
} else
{return p2.call(null,p1__19237_SHARP_);
}
}),args);
}
};
var G__19556 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19556__delegate.call(this, x, y, z, args);
};
G__19556.cljs$lang$maxFixedArity = 3;
G__19556.cljs$lang$applyTo = (function (arglist__19557){
var x = cljs.core.first(arglist__19557);
var y = cljs.core.first(cljs.core.next(arglist__19557));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19557)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19557)));
return G__19556__delegate(x, y, z, args);
});
G__19556.cljs$lang$arity$variadic = G__19556__delegate;
return G__19556;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____19527 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____19527))
{return or__3824__auto____19527;
} else
{var or__3824__auto____19528 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____19528))
{return or__3824__auto____19528;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____19529 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____19529))
{return or__3824__auto____19529;
} else
{var or__3824__auto____19530 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____19530))
{return or__3824__auto____19530;
} else
{var or__3824__auto____19531 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____19531))
{return or__3824__auto____19531;
} else
{var or__3824__auto____19532 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____19532))
{return or__3824__auto____19532;
} else
{var or__3824__auto____19533 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____19533))
{return or__3824__auto____19533;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____19534 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____19534))
{return or__3824__auto____19534;
} else
{var or__3824__auto____19535 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____19535))
{return or__3824__auto____19535;
} else
{var or__3824__auto____19536 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____19536))
{return or__3824__auto____19536;
} else
{var or__3824__auto____19537 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____19537))
{return or__3824__auto____19537;
} else
{var or__3824__auto____19538 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____19538))
{return or__3824__auto____19538;
} else
{var or__3824__auto____19539 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____19539))
{return or__3824__auto____19539;
} else
{var or__3824__auto____19540 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____19540))
{return or__3824__auto____19540;
} else
{var or__3824__auto____19541 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____19541))
{return or__3824__auto____19541;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__19558__delegate = function (x,y,z,args){
var or__3824__auto____19542 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____19542))
{return or__3824__auto____19542;
} else
{return cljs.core.some.call(null,(function (p1__19238_SHARP_){
var or__3824__auto____19543 = p1.call(null,p1__19238_SHARP_);
if(cljs.core.truth_(or__3824__auto____19543))
{return or__3824__auto____19543;
} else
{var or__3824__auto____19544 = p2.call(null,p1__19238_SHARP_);
if(cljs.core.truth_(or__3824__auto____19544))
{return or__3824__auto____19544;
} else
{return p3.call(null,p1__19238_SHARP_);
}
}
}),args);
}
};
var G__19558 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19558__delegate.call(this, x, y, z, args);
};
G__19558.cljs$lang$maxFixedArity = 3;
G__19558.cljs$lang$applyTo = (function (arglist__19559){
var x = cljs.core.first(arglist__19559);
var y = cljs.core.first(cljs.core.next(arglist__19559));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19559)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19559)));
return G__19558__delegate(x, y, z, args);
});
G__19558.cljs$lang$arity$variadic = G__19558__delegate;
return G__19558;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__19560__delegate = function (p1,p2,p3,ps){
var ps__19545 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__19239_SHARP_){
return p1__19239_SHARP_.call(null,x);
}),ps__19545);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__19240_SHARP_){
var or__3824__auto____19550 = p1__19240_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____19550))
{return or__3824__auto____19550;
} else
{return p1__19240_SHARP_.call(null,y);
}
}),ps__19545);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__19241_SHARP_){
var or__3824__auto____19551 = p1__19241_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____19551))
{return or__3824__auto____19551;
} else
{var or__3824__auto____19552 = p1__19241_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____19552))
{return or__3824__auto____19552;
} else
{return p1__19241_SHARP_.call(null,z);
}
}
}),ps__19545);
});
var spn__4 = (function() { 
var G__19561__delegate = function (x,y,z,args){
var or__3824__auto____19553 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____19553))
{return or__3824__auto____19553;
} else
{return cljs.core.some.call(null,(function (p1__19242_SHARP_){
return cljs.core.some.call(null,p1__19242_SHARP_,args);
}),ps__19545);
}
};
var G__19561 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19561__delegate.call(this, x, y, z, args);
};
G__19561.cljs$lang$maxFixedArity = 3;
G__19561.cljs$lang$applyTo = (function (arglist__19562){
var x = cljs.core.first(arglist__19562);
var y = cljs.core.first(cljs.core.next(arglist__19562));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19562)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19562)));
return G__19561__delegate(x, y, z, args);
});
G__19561.cljs$lang$arity$variadic = G__19561__delegate;
return G__19561;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__19560 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19560__delegate.call(this, p1, p2, p3, ps);
};
G__19560.cljs$lang$maxFixedArity = 3;
G__19560.cljs$lang$applyTo = (function (arglist__19563){
var p1 = cljs.core.first(arglist__19563);
var p2 = cljs.core.first(cljs.core.next(arglist__19563));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19563)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19563)));
return G__19560__delegate(p1, p2, p3, ps);
});
G__19560.cljs$lang$arity$variadic = G__19560__delegate;
return G__19560;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____19582 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19582)
{var s__19583 = temp__3974__auto____19582;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19583))
{var c__19584 = cljs.core.chunk_first.call(null,s__19583);
var size__19585 = cljs.core.count.call(null,c__19584);
var b__19586 = cljs.core.chunk_buffer.call(null,size__19585);
var n__2616__auto____19587 = size__19585;
var i__19588 = 0;
while(true){
if((i__19588 < n__2616__auto____19587))
{cljs.core.chunk_append.call(null,b__19586,f.call(null,cljs.core._nth.call(null,c__19584,i__19588)));
{
var G__19600 = (i__19588 + 1);
i__19588 = G__19600;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19586),map.call(null,f,cljs.core.chunk_rest.call(null,s__19583)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__19583)),map.call(null,f,cljs.core.rest.call(null,s__19583)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__19589 = cljs.core.seq.call(null,c1);
var s2__19590 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____19591 = s1__19589;
if(and__3822__auto____19591)
{return s2__19590;
} else
{return and__3822__auto____19591;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__19589),cljs.core.first.call(null,s2__19590)),map.call(null,f,cljs.core.rest.call(null,s1__19589),cljs.core.rest.call(null,s2__19590)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__19592 = cljs.core.seq.call(null,c1);
var s2__19593 = cljs.core.seq.call(null,c2);
var s3__19594 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____19595 = s1__19592;
if(and__3822__auto____19595)
{var and__3822__auto____19596 = s2__19593;
if(and__3822__auto____19596)
{return s3__19594;
} else
{return and__3822__auto____19596;
}
} else
{return and__3822__auto____19595;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__19592),cljs.core.first.call(null,s2__19593),cljs.core.first.call(null,s3__19594)),map.call(null,f,cljs.core.rest.call(null,s1__19592),cljs.core.rest.call(null,s2__19593),cljs.core.rest.call(null,s3__19594)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__19601__delegate = function (f,c1,c2,c3,colls){
var step__19599 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__19598 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__19598))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__19598),step.call(null,map.call(null,cljs.core.rest,ss__19598)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__19403_SHARP_){
return cljs.core.apply.call(null,f,p1__19403_SHARP_);
}),step__19599.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__19601 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__19601__delegate.call(this, f, c1, c2, c3, colls);
};
G__19601.cljs$lang$maxFixedArity = 4;
G__19601.cljs$lang$applyTo = (function (arglist__19602){
var f = cljs.core.first(arglist__19602);
var c1 = cljs.core.first(cljs.core.next(arglist__19602));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19602)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19602))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19602))));
return G__19601__delegate(f, c1, c2, c3, colls);
});
G__19601.cljs$lang$arity$variadic = G__19601__delegate;
return G__19601;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____19605 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19605)
{var s__19606 = temp__3974__auto____19605;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__19606),take.call(null,(n - 1),cljs.core.rest.call(null,s__19606)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__19612 = (function (n,coll){
while(true){
var s__19610 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____19611 = (n > 0);
if(and__3822__auto____19611)
{return s__19610;
} else
{return and__3822__auto____19611;
}
})()))
{{
var G__19613 = (n - 1);
var G__19614 = cljs.core.rest.call(null,s__19610);
n = G__19613;
coll = G__19614;
continue;
}
} else
{return s__19610;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__19612.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__19617 = cljs.core.seq.call(null,coll);
var lead__19618 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__19618)
{{
var G__19619 = cljs.core.next.call(null,s__19617);
var G__19620 = cljs.core.next.call(null,lead__19618);
s__19617 = G__19619;
lead__19618 = G__19620;
continue;
}
} else
{return s__19617;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__19626 = (function (pred,coll){
while(true){
var s__19624 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____19625 = s__19624;
if(and__3822__auto____19625)
{return pred.call(null,cljs.core.first.call(null,s__19624));
} else
{return and__3822__auto____19625;
}
})()))
{{
var G__19627 = pred;
var G__19628 = cljs.core.rest.call(null,s__19624);
pred = G__19627;
coll = G__19628;
continue;
}
} else
{return s__19624;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__19626.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____19631 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19631)
{var s__19632 = temp__3974__auto____19631;
return cljs.core.concat.call(null,s__19632,cycle.call(null,s__19632));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__19637 = cljs.core.seq.call(null,c1);
var s2__19638 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____19639 = s1__19637;
if(and__3822__auto____19639)
{return s2__19638;
} else
{return and__3822__auto____19639;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__19637),cljs.core.cons.call(null,cljs.core.first.call(null,s2__19638),interleave.call(null,cljs.core.rest.call(null,s1__19637),cljs.core.rest.call(null,s2__19638))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__19641__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__19640 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__19640))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__19640),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__19640)));
} else
{return null;
}
}),null));
};
var G__19641 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19641__delegate.call(this, c1, c2, colls);
};
G__19641.cljs$lang$maxFixedArity = 2;
G__19641.cljs$lang$applyTo = (function (arglist__19642){
var c1 = cljs.core.first(arglist__19642);
var c2 = cljs.core.first(cljs.core.next(arglist__19642));
var colls = cljs.core.rest(cljs.core.next(arglist__19642));
return G__19641__delegate(c1, c2, colls);
});
G__19641.cljs$lang$arity$variadic = G__19641__delegate;
return G__19641;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__19652 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____19650 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____19650)
{var coll__19651 = temp__3971__auto____19650;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__19651),cat.call(null,cljs.core.rest.call(null,coll__19651),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__19652.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__19653__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__19653 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19653__delegate.call(this, f, coll, colls);
};
G__19653.cljs$lang$maxFixedArity = 2;
G__19653.cljs$lang$applyTo = (function (arglist__19654){
var f = cljs.core.first(arglist__19654);
var coll = cljs.core.first(cljs.core.next(arglist__19654));
var colls = cljs.core.rest(cljs.core.next(arglist__19654));
return G__19653__delegate(f, coll, colls);
});
G__19653.cljs$lang$arity$variadic = G__19653__delegate;
return G__19653;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____19664 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19664)
{var s__19665 = temp__3974__auto____19664;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19665))
{var c__19666 = cljs.core.chunk_first.call(null,s__19665);
var size__19667 = cljs.core.count.call(null,c__19666);
var b__19668 = cljs.core.chunk_buffer.call(null,size__19667);
var n__2616__auto____19669 = size__19667;
var i__19670 = 0;
while(true){
if((i__19670 < n__2616__auto____19669))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__19666,i__19670))))
{cljs.core.chunk_append.call(null,b__19668,cljs.core._nth.call(null,c__19666,i__19670));
} else
{}
{
var G__19673 = (i__19670 + 1);
i__19670 = G__19673;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19668),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__19665)));
} else
{var f__19671 = cljs.core.first.call(null,s__19665);
var r__19672 = cljs.core.rest.call(null,s__19665);
if(cljs.core.truth_(pred.call(null,f__19671)))
{return cljs.core.cons.call(null,f__19671,filter.call(null,pred,r__19672));
} else
{return filter.call(null,pred,r__19672);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__19676 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__19676.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__19674_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__19674_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__19680__19681 = to;
if(G__19680__19681)
{if((function (){var or__3824__auto____19682 = (G__19680__19681.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____19682)
{return or__3824__auto____19682;
} else
{return G__19680__19681.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__19680__19681.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__19680__19681);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__19680__19681);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__19683__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__19683 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__19683__delegate.call(this, f, c1, c2, c3, colls);
};
G__19683.cljs$lang$maxFixedArity = 4;
G__19683.cljs$lang$applyTo = (function (arglist__19684){
var f = cljs.core.first(arglist__19684);
var c1 = cljs.core.first(cljs.core.next(arglist__19684));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19684)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19684))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19684))));
return G__19683__delegate(f, c1, c2, c3, colls);
});
G__19683.cljs$lang$arity$variadic = G__19683__delegate;
return G__19683;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____19691 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19691)
{var s__19692 = temp__3974__auto____19691;
var p__19693 = cljs.core.take.call(null,n,s__19692);
if((n === cljs.core.count.call(null,p__19693)))
{return cljs.core.cons.call(null,p__19693,partition.call(null,n,step,cljs.core.drop.call(null,step,s__19692)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____19694 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____19694)
{var s__19695 = temp__3974__auto____19694;
var p__19696 = cljs.core.take.call(null,n,s__19695);
if((n === cljs.core.count.call(null,p__19696)))
{return cljs.core.cons.call(null,p__19696,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__19695)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__19696,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__19701 = cljs.core.lookup_sentinel;
var m__19702 = m;
var ks__19703 = cljs.core.seq.call(null,ks);
while(true){
if(ks__19703)
{var m__19704 = cljs.core._lookup.call(null,m__19702,cljs.core.first.call(null,ks__19703),sentinel__19701);
if((sentinel__19701 === m__19704))
{return not_found;
} else
{{
var G__19705 = sentinel__19701;
var G__19706 = m__19704;
var G__19707 = cljs.core.next.call(null,ks__19703);
sentinel__19701 = G__19705;
m__19702 = G__19706;
ks__19703 = G__19707;
continue;
}
}
} else
{return m__19702;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__19708,v){
var vec__19713__19714 = p__19708;
var k__19715 = cljs.core.nth.call(null,vec__19713__19714,0,null);
var ks__19716 = cljs.core.nthnext.call(null,vec__19713__19714,1);
if(cljs.core.truth_(ks__19716))
{return cljs.core.assoc.call(null,m,k__19715,assoc_in.call(null,cljs.core._lookup.call(null,m,k__19715,null),ks__19716,v));
} else
{return cljs.core.assoc.call(null,m,k__19715,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__19717,f,args){
var vec__19722__19723 = p__19717;
var k__19724 = cljs.core.nth.call(null,vec__19722__19723,0,null);
var ks__19725 = cljs.core.nthnext.call(null,vec__19722__19723,1);
if(cljs.core.truth_(ks__19725))
{return cljs.core.assoc.call(null,m,k__19724,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__19724,null),ks__19725,f,args));
} else
{return cljs.core.assoc.call(null,m,k__19724,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__19724,null),args));
}
};
var update_in = function (m,p__19717,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__19717, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__19726){
var m = cljs.core.first(arglist__19726);
var p__19717 = cljs.core.first(cljs.core.next(arglist__19726));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19726)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19726)));
return update_in__delegate(m, p__19717, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__19729 = this;
var h__2281__auto____19730 = this__19729.__hash;
if(!((h__2281__auto____19730 == null)))
{return h__2281__auto____19730;
} else
{var h__2281__auto____19731 = cljs.core.hash_coll.call(null,coll);
this__19729.__hash = h__2281__auto____19731;
return h__2281__auto____19731;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__19732 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__19733 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__19734 = this;
var new_array__19735 = this__19734.array.slice();
(new_array__19735[k] = v);
return (new cljs.core.Vector(this__19734.meta,new_array__19735,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__19766 = null;
var G__19766__2 = (function (this_sym19736,k){
var this__19738 = this;
var this_sym19736__19739 = this;
var coll__19740 = this_sym19736__19739;
return coll__19740.cljs$core$ILookup$_lookup$arity$2(coll__19740,k);
});
var G__19766__3 = (function (this_sym19737,k,not_found){
var this__19738 = this;
var this_sym19737__19741 = this;
var coll__19742 = this_sym19737__19741;
return coll__19742.cljs$core$ILookup$_lookup$arity$3(coll__19742,k,not_found);
});
G__19766 = function(this_sym19737,k,not_found){
switch(arguments.length){
case 2:
return G__19766__2.call(this,this_sym19737,k);
case 3:
return G__19766__3.call(this,this_sym19737,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19766;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym19727,args19728){
var this__19743 = this;
return this_sym19727.call.apply(this_sym19727,[this_sym19727].concat(args19728.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__19744 = this;
var new_array__19745 = this__19744.array.slice();
new_array__19745.push(o);
return (new cljs.core.Vector(this__19744.meta,new_array__19745,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__19746 = this;
var this__19747 = this;
return cljs.core.pr_str.call(null,this__19747);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__19748 = this;
return cljs.core.ci_reduce.call(null,this__19748.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__19749 = this;
return cljs.core.ci_reduce.call(null,this__19749.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__19750 = this;
if((this__19750.array.length > 0))
{var vector_seq__19751 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__19750.array.length))
{return cljs.core.cons.call(null,(this__19750.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__19751.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19752 = this;
return this__19752.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__19753 = this;
var count__19754 = this__19753.array.length;
if((count__19754 > 0))
{return (this__19753.array[(count__19754 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__19755 = this;
if((this__19755.array.length > 0))
{var new_array__19756 = this__19755.array.slice();
new_array__19756.pop();
return (new cljs.core.Vector(this__19755.meta,new_array__19756,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__19757 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19758 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19759 = this;
return (new cljs.core.Vector(meta,this__19759.array,this__19759.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19760 = this;
return this__19760.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__19761 = this;
if((function (){var and__3822__auto____19762 = (0 <= n);
if(and__3822__auto____19762)
{return (n < this__19761.array.length);
} else
{return and__3822__auto____19762;
}
})())
{return (this__19761.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__19763 = this;
if((function (){var and__3822__auto____19764 = (0 <= n);
if(and__3822__auto____19764)
{return (n < this__19763.array.length);
} else
{return and__3822__auto____19764;
}
})())
{return (this__19763.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19765 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__19765.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2399__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__19768 = pv.cnt;
if((cnt__19768 < 32))
{return 0;
} else
{return (((cnt__19768 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__19774 = level;
var ret__19775 = node;
while(true){
if((ll__19774 === 0))
{return ret__19775;
} else
{var embed__19776 = ret__19775;
var r__19777 = cljs.core.pv_fresh_node.call(null,edit);
var ___19778 = cljs.core.pv_aset.call(null,r__19777,0,embed__19776);
{
var G__19779 = (ll__19774 - 5);
var G__19780 = r__19777;
ll__19774 = G__19779;
ret__19775 = G__19780;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__19786 = cljs.core.pv_clone_node.call(null,parent);
var subidx__19787 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__19786,subidx__19787,tailnode);
return ret__19786;
} else
{var child__19788 = cljs.core.pv_aget.call(null,parent,subidx__19787);
if(!((child__19788 == null)))
{var node_to_insert__19789 = push_tail.call(null,pv,(level - 5),child__19788,tailnode);
cljs.core.pv_aset.call(null,ret__19786,subidx__19787,node_to_insert__19789);
return ret__19786;
} else
{var node_to_insert__19790 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__19786,subidx__19787,node_to_insert__19790);
return ret__19786;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____19794 = (0 <= i);
if(and__3822__auto____19794)
{return (i < pv.cnt);
} else
{return and__3822__auto____19794;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__19795 = pv.root;
var level__19796 = pv.shift;
while(true){
if((level__19796 > 0))
{{
var G__19797 = cljs.core.pv_aget.call(null,node__19795,((i >>> level__19796) & 31));
var G__19798 = (level__19796 - 5);
node__19795 = G__19797;
level__19796 = G__19798;
continue;
}
} else
{return node__19795.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__19801 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__19801,(i & 31),val);
return ret__19801;
} else
{var subidx__19802 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__19801,subidx__19802,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__19802),i,val));
return ret__19801;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__19808 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__19809 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__19808));
if((function (){var and__3822__auto____19810 = (new_child__19809 == null);
if(and__3822__auto____19810)
{return (subidx__19808 === 0);
} else
{return and__3822__auto____19810;
}
})())
{return null;
} else
{var ret__19811 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__19811,subidx__19808,new_child__19809);
return ret__19811;
}
} else
{if((subidx__19808 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__19812 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__19812,subidx__19808,null);
return ret__19812;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__19815 = this;
return (new cljs.core.TransientVector(this__19815.cnt,this__19815.shift,cljs.core.tv_editable_root.call(null,this__19815.root),cljs.core.tv_editable_tail.call(null,this__19815.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__19816 = this;
var h__2281__auto____19817 = this__19816.__hash;
if(!((h__2281__auto____19817 == null)))
{return h__2281__auto____19817;
} else
{var h__2281__auto____19818 = cljs.core.hash_coll.call(null,coll);
this__19816.__hash = h__2281__auto____19818;
return h__2281__auto____19818;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__19819 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__19820 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__19821 = this;
if((function (){var and__3822__auto____19822 = (0 <= k);
if(and__3822__auto____19822)
{return (k < this__19821.cnt);
} else
{return and__3822__auto____19822;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__19823 = this__19821.tail.slice();
(new_tail__19823[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__19821.meta,this__19821.cnt,this__19821.shift,this__19821.root,new_tail__19823,null));
} else
{return (new cljs.core.PersistentVector(this__19821.meta,this__19821.cnt,this__19821.shift,cljs.core.do_assoc.call(null,coll,this__19821.shift,this__19821.root,k,v),this__19821.tail,null));
}
} else
{if((k === this__19821.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__19821.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__19871 = null;
var G__19871__2 = (function (this_sym19824,k){
var this__19826 = this;
var this_sym19824__19827 = this;
var coll__19828 = this_sym19824__19827;
return coll__19828.cljs$core$ILookup$_lookup$arity$2(coll__19828,k);
});
var G__19871__3 = (function (this_sym19825,k,not_found){
var this__19826 = this;
var this_sym19825__19829 = this;
var coll__19830 = this_sym19825__19829;
return coll__19830.cljs$core$ILookup$_lookup$arity$3(coll__19830,k,not_found);
});
G__19871 = function(this_sym19825,k,not_found){
switch(arguments.length){
case 2:
return G__19871__2.call(this,this_sym19825,k);
case 3:
return G__19871__3.call(this,this_sym19825,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19871;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym19813,args19814){
var this__19831 = this;
return this_sym19813.call.apply(this_sym19813,[this_sym19813].concat(args19814.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__19832 = this;
var step_init__19833 = [0,init];
var i__19834 = 0;
while(true){
if((i__19834 < this__19832.cnt))
{var arr__19835 = cljs.core.array_for.call(null,v,i__19834);
var len__19836 = arr__19835.length;
var init__19840 = (function (){var j__19837 = 0;
var init__19838 = (step_init__19833[1]);
while(true){
if((j__19837 < len__19836))
{var init__19839 = f.call(null,init__19838,(j__19837 + i__19834),(arr__19835[j__19837]));
if(cljs.core.reduced_QMARK_.call(null,init__19839))
{return init__19839;
} else
{{
var G__19872 = (j__19837 + 1);
var G__19873 = init__19839;
j__19837 = G__19872;
init__19838 = G__19873;
continue;
}
}
} else
{(step_init__19833[0] = len__19836);
(step_init__19833[1] = init__19838);
return init__19838;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__19840))
{return cljs.core.deref.call(null,init__19840);
} else
{{
var G__19874 = (i__19834 + (step_init__19833[0]));
i__19834 = G__19874;
continue;
}
}
} else
{return (step_init__19833[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__19841 = this;
if(((this__19841.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__19842 = this__19841.tail.slice();
new_tail__19842.push(o);
return (new cljs.core.PersistentVector(this__19841.meta,(this__19841.cnt + 1),this__19841.shift,this__19841.root,new_tail__19842,null));
} else
{var root_overflow_QMARK___19843 = ((this__19841.cnt >>> 5) > (1 << this__19841.shift));
var new_shift__19844 = ((root_overflow_QMARK___19843)?(this__19841.shift + 5):this__19841.shift);
var new_root__19846 = ((root_overflow_QMARK___19843)?(function (){var n_r__19845 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__19845,0,this__19841.root);
cljs.core.pv_aset.call(null,n_r__19845,1,cljs.core.new_path.call(null,null,this__19841.shift,(new cljs.core.VectorNode(null,this__19841.tail))));
return n_r__19845;
})():cljs.core.push_tail.call(null,coll,this__19841.shift,this__19841.root,(new cljs.core.VectorNode(null,this__19841.tail))));
return (new cljs.core.PersistentVector(this__19841.meta,(this__19841.cnt + 1),new_shift__19844,new_root__19846,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__19847 = this;
if((this__19847.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__19847.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__19848 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__19849 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__19850 = this;
var this__19851 = this;
return cljs.core.pr_str.call(null,this__19851);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__19852 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__19853 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__19854 = this;
if((this__19854.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19855 = this;
return this__19855.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__19856 = this;
if((this__19856.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__19856.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__19857 = this;
if((this__19857.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__19857.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__19857.meta);
} else
{if((1 < (this__19857.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__19857.meta,(this__19857.cnt - 1),this__19857.shift,this__19857.root,this__19857.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__19858 = cljs.core.array_for.call(null,coll,(this__19857.cnt - 2));
var nr__19859 = cljs.core.pop_tail.call(null,coll,this__19857.shift,this__19857.root);
var new_root__19860 = (((nr__19859 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__19859);
var cnt_1__19861 = (this__19857.cnt - 1);
if((function (){var and__3822__auto____19862 = (5 < this__19857.shift);
if(and__3822__auto____19862)
{return (cljs.core.pv_aget.call(null,new_root__19860,1) == null);
} else
{return and__3822__auto____19862;
}
})())
{return (new cljs.core.PersistentVector(this__19857.meta,cnt_1__19861,(this__19857.shift - 5),cljs.core.pv_aget.call(null,new_root__19860,0),new_tail__19858,null));
} else
{return (new cljs.core.PersistentVector(this__19857.meta,cnt_1__19861,this__19857.shift,new_root__19860,new_tail__19858,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__19863 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19864 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19865 = this;
return (new cljs.core.PersistentVector(meta,this__19865.cnt,this__19865.shift,this__19865.root,this__19865.tail,this__19865.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19866 = this;
return this__19866.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__19867 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__19868 = this;
if((function (){var and__3822__auto____19869 = (0 <= n);
if(and__3822__auto____19869)
{return (n < this__19868.cnt);
} else
{return and__3822__auto____19869;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19870 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__19870.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__19875 = xs.length;
var xs__19876 = (((no_clone === true))?xs:xs.slice());
if((l__19875 < 32))
{return (new cljs.core.PersistentVector(null,l__19875,5,cljs.core.PersistentVector.EMPTY_NODE,xs__19876,null));
} else
{var node__19877 = xs__19876.slice(0,32);
var v__19878 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__19877,null));
var i__19879 = 32;
var out__19880 = cljs.core._as_transient.call(null,v__19878);
while(true){
if((i__19879 < l__19875))
{{
var G__19881 = (i__19879 + 1);
var G__19882 = cljs.core.conj_BANG_.call(null,out__19880,(xs__19876[i__19879]));
i__19879 = G__19881;
out__19880 = G__19882;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__19880);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__19883){
var args = cljs.core.seq(arglist__19883);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__19884 = this;
if(((this__19884.off + 1) < this__19884.node.length))
{var s__19885 = cljs.core.chunked_seq.call(null,this__19884.vec,this__19884.node,this__19884.i,(this__19884.off + 1));
if((s__19885 == null))
{return null;
} else
{return s__19885;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__19886 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__19887 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__19888 = this;
return (this__19888.node[this__19888.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__19889 = this;
if(((this__19889.off + 1) < this__19889.node.length))
{var s__19890 = cljs.core.chunked_seq.call(null,this__19889.vec,this__19889.node,this__19889.i,(this__19889.off + 1));
if((s__19890 == null))
{return cljs.core.List.EMPTY;
} else
{return s__19890;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__19891 = this;
var l__19892 = this__19891.node.length;
var s__19893 = ((((this__19891.i + l__19892) < cljs.core._count.call(null,this__19891.vec)))?cljs.core.chunked_seq.call(null,this__19891.vec,(this__19891.i + l__19892),0):null);
if((s__19893 == null))
{return null;
} else
{return s__19893;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19894 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__19895 = this;
return cljs.core.chunked_seq.call(null,this__19895.vec,this__19895.node,this__19895.i,this__19895.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__19896 = this;
return this__19896.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19897 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__19897.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__19898 = this;
return cljs.core.array_chunk.call(null,this__19898.node,this__19898.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__19899 = this;
var l__19900 = this__19899.node.length;
var s__19901 = ((((this__19899.i + l__19900) < cljs.core._count.call(null,this__19899.vec)))?cljs.core.chunked_seq.call(null,this__19899.vec,(this__19899.i + l__19900),0):null);
if((s__19901 == null))
{return cljs.core.List.EMPTY;
} else
{return s__19901;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__19904 = this;
var h__2281__auto____19905 = this__19904.__hash;
if(!((h__2281__auto____19905 == null)))
{return h__2281__auto____19905;
} else
{var h__2281__auto____19906 = cljs.core.hash_coll.call(null,coll);
this__19904.__hash = h__2281__auto____19906;
return h__2281__auto____19906;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__19907 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__19908 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__19909 = this;
var v_pos__19910 = (this__19909.start + key);
return (new cljs.core.Subvec(this__19909.meta,cljs.core._assoc.call(null,this__19909.v,v_pos__19910,val),this__19909.start,((this__19909.end > (v_pos__19910 + 1)) ? this__19909.end : (v_pos__19910 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__19936 = null;
var G__19936__2 = (function (this_sym19911,k){
var this__19913 = this;
var this_sym19911__19914 = this;
var coll__19915 = this_sym19911__19914;
return coll__19915.cljs$core$ILookup$_lookup$arity$2(coll__19915,k);
});
var G__19936__3 = (function (this_sym19912,k,not_found){
var this__19913 = this;
var this_sym19912__19916 = this;
var coll__19917 = this_sym19912__19916;
return coll__19917.cljs$core$ILookup$_lookup$arity$3(coll__19917,k,not_found);
});
G__19936 = function(this_sym19912,k,not_found){
switch(arguments.length){
case 2:
return G__19936__2.call(this,this_sym19912,k);
case 3:
return G__19936__3.call(this,this_sym19912,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19936;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym19902,args19903){
var this__19918 = this;
return this_sym19902.call.apply(this_sym19902,[this_sym19902].concat(args19903.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__19919 = this;
return (new cljs.core.Subvec(this__19919.meta,cljs.core._assoc_n.call(null,this__19919.v,this__19919.end,o),this__19919.start,(this__19919.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__19920 = this;
var this__19921 = this;
return cljs.core.pr_str.call(null,this__19921);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__19922 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__19923 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__19924 = this;
var subvec_seq__19925 = (function subvec_seq(i){
if((i === this__19924.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__19924.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__19925.call(null,this__19924.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19926 = this;
return (this__19926.end - this__19926.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__19927 = this;
return cljs.core._nth.call(null,this__19927.v,(this__19927.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__19928 = this;
if((this__19928.start === this__19928.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__19928.meta,this__19928.v,this__19928.start,(this__19928.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__19929 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__19930 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__19931 = this;
return (new cljs.core.Subvec(meta,this__19931.v,this__19931.start,this__19931.end,this__19931.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__19932 = this;
return this__19932.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__19933 = this;
return cljs.core._nth.call(null,this__19933.v,(this__19933.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__19934 = this;
return cljs.core._nth.call(null,this__19934.v,(this__19934.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__19935 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__19935.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__19938 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__19938,0,tl.length);
return ret__19938;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__19942 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__19943 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__19942,subidx__19943,(((level === 5))?tail_node:(function (){var child__19944 = cljs.core.pv_aget.call(null,ret__19942,subidx__19943);
if(!((child__19944 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__19944,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__19942;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__19949 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__19950 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__19951 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__19949,subidx__19950));
if((function (){var and__3822__auto____19952 = (new_child__19951 == null);
if(and__3822__auto____19952)
{return (subidx__19950 === 0);
} else
{return and__3822__auto____19952;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__19949,subidx__19950,new_child__19951);
return node__19949;
}
} else
{if((subidx__19950 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__19949,subidx__19950,null);
return node__19949;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____19957 = (0 <= i);
if(and__3822__auto____19957)
{return (i < tv.cnt);
} else
{return and__3822__auto____19957;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__19958 = tv.root;
var node__19959 = root__19958;
var level__19960 = tv.shift;
while(true){
if((level__19960 > 0))
{{
var G__19961 = cljs.core.tv_ensure_editable.call(null,root__19958.edit,cljs.core.pv_aget.call(null,node__19959,((i >>> level__19960) & 31)));
var G__19962 = (level__19960 - 5);
node__19959 = G__19961;
level__19960 = G__19962;
continue;
}
} else
{return node__19959.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__20002 = null;
var G__20002__2 = (function (this_sym19965,k){
var this__19967 = this;
var this_sym19965__19968 = this;
var coll__19969 = this_sym19965__19968;
return coll__19969.cljs$core$ILookup$_lookup$arity$2(coll__19969,k);
});
var G__20002__3 = (function (this_sym19966,k,not_found){
var this__19967 = this;
var this_sym19966__19970 = this;
var coll__19971 = this_sym19966__19970;
return coll__19971.cljs$core$ILookup$_lookup$arity$3(coll__19971,k,not_found);
});
G__20002 = function(this_sym19966,k,not_found){
switch(arguments.length){
case 2:
return G__20002__2.call(this,this_sym19966,k);
case 3:
return G__20002__3.call(this,this_sym19966,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20002;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym19963,args19964){
var this__19972 = this;
return this_sym19963.call.apply(this_sym19963,[this_sym19963].concat(args19964.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__19973 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__19974 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__19975 = this;
if(this__19975.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__19976 = this;
if((function (){var and__3822__auto____19977 = (0 <= n);
if(and__3822__auto____19977)
{return (n < this__19976.cnt);
} else
{return and__3822__auto____19977;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__19978 = this;
if(this__19978.root.edit)
{return this__19978.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__19979 = this;
if(this__19979.root.edit)
{if((function (){var and__3822__auto____19980 = (0 <= n);
if(and__3822__auto____19980)
{return (n < this__19979.cnt);
} else
{return and__3822__auto____19980;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__19979.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__19985 = (function go(level,node){
var node__19983 = cljs.core.tv_ensure_editable.call(null,this__19979.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__19983,(n & 31),val);
return node__19983;
} else
{var subidx__19984 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__19983,subidx__19984,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__19983,subidx__19984)));
return node__19983;
}
}).call(null,this__19979.shift,this__19979.root);
this__19979.root = new_root__19985;
return tcoll;
}
} else
{if((n === this__19979.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__19979.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__19986 = this;
if(this__19986.root.edit)
{if((this__19986.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__19986.cnt))
{this__19986.cnt = 0;
return tcoll;
} else
{if((((this__19986.cnt - 1) & 31) > 0))
{this__19986.cnt = (this__19986.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__19987 = cljs.core.editable_array_for.call(null,tcoll,(this__19986.cnt - 2));
var new_root__19989 = (function (){var nr__19988 = cljs.core.tv_pop_tail.call(null,tcoll,this__19986.shift,this__19986.root);
if(!((nr__19988 == null)))
{return nr__19988;
} else
{return (new cljs.core.VectorNode(this__19986.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____19990 = (5 < this__19986.shift);
if(and__3822__auto____19990)
{return (cljs.core.pv_aget.call(null,new_root__19989,1) == null);
} else
{return and__3822__auto____19990;
}
})())
{var new_root__19991 = cljs.core.tv_ensure_editable.call(null,this__19986.root.edit,cljs.core.pv_aget.call(null,new_root__19989,0));
this__19986.root = new_root__19991;
this__19986.shift = (this__19986.shift - 5);
this__19986.cnt = (this__19986.cnt - 1);
this__19986.tail = new_tail__19987;
return tcoll;
} else
{this__19986.root = new_root__19989;
this__19986.cnt = (this__19986.cnt - 1);
this__19986.tail = new_tail__19987;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__19992 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__19993 = this;
if(this__19993.root.edit)
{if(((this__19993.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__19993.tail[(this__19993.cnt & 31)] = o);
this__19993.cnt = (this__19993.cnt + 1);
return tcoll;
} else
{var tail_node__19994 = (new cljs.core.VectorNode(this__19993.root.edit,this__19993.tail));
var new_tail__19995 = cljs.core.make_array.call(null,32);
(new_tail__19995[0] = o);
this__19993.tail = new_tail__19995;
if(((this__19993.cnt >>> 5) > (1 << this__19993.shift)))
{var new_root_array__19996 = cljs.core.make_array.call(null,32);
var new_shift__19997 = (this__19993.shift + 5);
(new_root_array__19996[0] = this__19993.root);
(new_root_array__19996[1] = cljs.core.new_path.call(null,this__19993.root.edit,this__19993.shift,tail_node__19994));
this__19993.root = (new cljs.core.VectorNode(this__19993.root.edit,new_root_array__19996));
this__19993.shift = new_shift__19997;
this__19993.cnt = (this__19993.cnt + 1);
return tcoll;
} else
{var new_root__19998 = cljs.core.tv_push_tail.call(null,tcoll,this__19993.shift,this__19993.root,tail_node__19994);
this__19993.root = new_root__19998;
this__19993.cnt = (this__19993.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__19999 = this;
if(this__19999.root.edit)
{this__19999.root.edit = null;
var len__20000 = (this__19999.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__20001 = cljs.core.make_array.call(null,len__20000);
cljs.core.array_copy.call(null,this__19999.tail,0,trimmed_tail__20001,0,len__20000);
return (new cljs.core.PersistentVector(null,this__19999.cnt,this__19999.shift,this__19999.root,trimmed_tail__20001,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__20003 = this;
var h__2281__auto____20004 = this__20003.__hash;
if(!((h__2281__auto____20004 == null)))
{return h__2281__auto____20004;
} else
{var h__2281__auto____20005 = cljs.core.hash_coll.call(null,coll);
this__20003.__hash = h__2281__auto____20005;
return h__2281__auto____20005;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__20006 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__20007 = this;
var this__20008 = this;
return cljs.core.pr_str.call(null,this__20008);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__20009 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__20010 = this;
return cljs.core._first.call(null,this__20010.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__20011 = this;
var temp__3971__auto____20012 = cljs.core.next.call(null,this__20011.front);
if(temp__3971__auto____20012)
{var f1__20013 = temp__3971__auto____20012;
return (new cljs.core.PersistentQueueSeq(this__20011.meta,f1__20013,this__20011.rear,null));
} else
{if((this__20011.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__20011.meta,this__20011.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20014 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20015 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__20015.front,this__20015.rear,this__20015.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20016 = this;
return this__20016.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20017 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__20017.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__20018 = this;
var h__2281__auto____20019 = this__20018.__hash;
if(!((h__2281__auto____20019 == null)))
{return h__2281__auto____20019;
} else
{var h__2281__auto____20020 = cljs.core.hash_coll.call(null,coll);
this__20018.__hash = h__2281__auto____20020;
return h__2281__auto____20020;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__20021 = this;
if(cljs.core.truth_(this__20021.front))
{return (new cljs.core.PersistentQueue(this__20021.meta,(this__20021.count + 1),this__20021.front,cljs.core.conj.call(null,(function (){var or__3824__auto____20022 = this__20021.rear;
if(cljs.core.truth_(or__3824__auto____20022))
{return or__3824__auto____20022;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__20021.meta,(this__20021.count + 1),cljs.core.conj.call(null,this__20021.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__20023 = this;
var this__20024 = this;
return cljs.core.pr_str.call(null,this__20024);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__20025 = this;
var rear__20026 = cljs.core.seq.call(null,this__20025.rear);
if(cljs.core.truth_((function (){var or__3824__auto____20027 = this__20025.front;
if(cljs.core.truth_(or__3824__auto____20027))
{return or__3824__auto____20027;
} else
{return rear__20026;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__20025.front,cljs.core.seq.call(null,rear__20026),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__20028 = this;
return this__20028.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__20029 = this;
return cljs.core._first.call(null,this__20029.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__20030 = this;
if(cljs.core.truth_(this__20030.front))
{var temp__3971__auto____20031 = cljs.core.next.call(null,this__20030.front);
if(temp__3971__auto____20031)
{var f1__20032 = temp__3971__auto____20031;
return (new cljs.core.PersistentQueue(this__20030.meta,(this__20030.count - 1),f1__20032,this__20030.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__20030.meta,(this__20030.count - 1),cljs.core.seq.call(null,this__20030.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__20033 = this;
return cljs.core.first.call(null,this__20033.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__20034 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20035 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20036 = this;
return (new cljs.core.PersistentQueue(meta,this__20036.count,this__20036.front,this__20036.rear,this__20036.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20037 = this;
return this__20037.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20038 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__20039 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__20042 = array.length;
var i__20043 = 0;
while(true){
if((i__20043 < len__20042))
{if((k === (array[i__20043])))
{return i__20043;
} else
{{
var G__20044 = (i__20043 + incr);
i__20043 = G__20044;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__20047 = cljs.core.hash.call(null,a);
var b__20048 = cljs.core.hash.call(null,b);
if((a__20047 < b__20048))
{return -1;
} else
{if((a__20047 > b__20048))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__20056 = m.keys;
var len__20057 = ks__20056.length;
var so__20058 = m.strobj;
var out__20059 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__20060 = 0;
var out__20061 = cljs.core.transient$.call(null,out__20059);
while(true){
if((i__20060 < len__20057))
{var k__20062 = (ks__20056[i__20060]);
{
var G__20063 = (i__20060 + 1);
var G__20064 = cljs.core.assoc_BANG_.call(null,out__20061,k__20062,(so__20058[k__20062]));
i__20060 = G__20063;
out__20061 = G__20064;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__20061,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__20070 = {};
var l__20071 = ks.length;
var i__20072 = 0;
while(true){
if((i__20072 < l__20071))
{var k__20073 = (ks[i__20072]);
(new_obj__20070[k__20073] = (obj[k__20073]));
{
var G__20074 = (i__20072 + 1);
i__20072 = G__20074;
continue;
}
} else
{}
break;
}
return new_obj__20070;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__20077 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__20078 = this;
var h__2281__auto____20079 = this__20078.__hash;
if(!((h__2281__auto____20079 == null)))
{return h__2281__auto____20079;
} else
{var h__2281__auto____20080 = cljs.core.hash_imap.call(null,coll);
this__20078.__hash = h__2281__auto____20080;
return h__2281__auto____20080;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__20081 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__20082 = this;
if((function (){var and__3822__auto____20083 = goog.isString(k);
if(and__3822__auto____20083)
{return !((cljs.core.scan_array.call(null,1,k,this__20082.keys) == null));
} else
{return and__3822__auto____20083;
}
})())
{return (this__20082.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__20084 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____20085 = (this__20084.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____20085)
{return or__3824__auto____20085;
} else
{return (this__20084.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__20084.keys) == null)))
{var new_strobj__20086 = cljs.core.obj_clone.call(null,this__20084.strobj,this__20084.keys);
(new_strobj__20086[k] = v);
return (new cljs.core.ObjMap(this__20084.meta,this__20084.keys,new_strobj__20086,(this__20084.update_count + 1),null));
} else
{var new_strobj__20087 = cljs.core.obj_clone.call(null,this__20084.strobj,this__20084.keys);
var new_keys__20088 = this__20084.keys.slice();
(new_strobj__20087[k] = v);
new_keys__20088.push(k);
return (new cljs.core.ObjMap(this__20084.meta,new_keys__20088,new_strobj__20087,(this__20084.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__20089 = this;
if((function (){var and__3822__auto____20090 = goog.isString(k);
if(and__3822__auto____20090)
{return !((cljs.core.scan_array.call(null,1,k,this__20089.keys) == null));
} else
{return and__3822__auto____20090;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__20112 = null;
var G__20112__2 = (function (this_sym20091,k){
var this__20093 = this;
var this_sym20091__20094 = this;
var coll__20095 = this_sym20091__20094;
return coll__20095.cljs$core$ILookup$_lookup$arity$2(coll__20095,k);
});
var G__20112__3 = (function (this_sym20092,k,not_found){
var this__20093 = this;
var this_sym20092__20096 = this;
var coll__20097 = this_sym20092__20096;
return coll__20097.cljs$core$ILookup$_lookup$arity$3(coll__20097,k,not_found);
});
G__20112 = function(this_sym20092,k,not_found){
switch(arguments.length){
case 2:
return G__20112__2.call(this,this_sym20092,k);
case 3:
return G__20112__3.call(this,this_sym20092,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20112;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym20075,args20076){
var this__20098 = this;
return this_sym20075.call.apply(this_sym20075,[this_sym20075].concat(args20076.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__20099 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__20100 = this;
var this__20101 = this;
return cljs.core.pr_str.call(null,this__20101);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__20102 = this;
if((this__20102.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__20065_SHARP_){
return cljs.core.vector.call(null,p1__20065_SHARP_,(this__20102.strobj[p1__20065_SHARP_]));
}),this__20102.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__20103 = this;
return this__20103.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20104 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20105 = this;
return (new cljs.core.ObjMap(meta,this__20105.keys,this__20105.strobj,this__20105.update_count,this__20105.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20106 = this;
return this__20106.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20107 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__20107.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__20108 = this;
if((function (){var and__3822__auto____20109 = goog.isString(k);
if(and__3822__auto____20109)
{return !((cljs.core.scan_array.call(null,1,k,this__20108.keys) == null));
} else
{return and__3822__auto____20109;
}
})())
{var new_keys__20110 = this__20108.keys.slice();
var new_strobj__20111 = cljs.core.obj_clone.call(null,this__20108.strobj,this__20108.keys);
new_keys__20110.splice(cljs.core.scan_array.call(null,1,k,new_keys__20110),1);
cljs.core.js_delete.call(null,new_strobj__20111,k);
return (new cljs.core.ObjMap(this__20108.meta,new_keys__20110,new_strobj__20111,(this__20108.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__20116 = this;
var h__2281__auto____20117 = this__20116.__hash;
if(!((h__2281__auto____20117 == null)))
{return h__2281__auto____20117;
} else
{var h__2281__auto____20118 = cljs.core.hash_imap.call(null,coll);
this__20116.__hash = h__2281__auto____20118;
return h__2281__auto____20118;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__20119 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__20120 = this;
var bucket__20121 = (this__20120.hashobj[cljs.core.hash.call(null,k)]);
var i__20122 = (cljs.core.truth_(bucket__20121)?cljs.core.scan_array.call(null,2,k,bucket__20121):null);
if(cljs.core.truth_(i__20122))
{return (bucket__20121[(i__20122 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__20123 = this;
var h__20124 = cljs.core.hash.call(null,k);
var bucket__20125 = (this__20123.hashobj[h__20124]);
if(cljs.core.truth_(bucket__20125))
{var new_bucket__20126 = bucket__20125.slice();
var new_hashobj__20127 = goog.object.clone(this__20123.hashobj);
(new_hashobj__20127[h__20124] = new_bucket__20126);
var temp__3971__auto____20128 = cljs.core.scan_array.call(null,2,k,new_bucket__20126);
if(cljs.core.truth_(temp__3971__auto____20128))
{var i__20129 = temp__3971__auto____20128;
(new_bucket__20126[(i__20129 + 1)] = v);
return (new cljs.core.HashMap(this__20123.meta,this__20123.count,new_hashobj__20127,null));
} else
{new_bucket__20126.push(k,v);
return (new cljs.core.HashMap(this__20123.meta,(this__20123.count + 1),new_hashobj__20127,null));
}
} else
{var new_hashobj__20130 = goog.object.clone(this__20123.hashobj);
(new_hashobj__20130[h__20124] = [k,v]);
return (new cljs.core.HashMap(this__20123.meta,(this__20123.count + 1),new_hashobj__20130,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__20131 = this;
var bucket__20132 = (this__20131.hashobj[cljs.core.hash.call(null,k)]);
var i__20133 = (cljs.core.truth_(bucket__20132)?cljs.core.scan_array.call(null,2,k,bucket__20132):null);
if(cljs.core.truth_(i__20133))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__20158 = null;
var G__20158__2 = (function (this_sym20134,k){
var this__20136 = this;
var this_sym20134__20137 = this;
var coll__20138 = this_sym20134__20137;
return coll__20138.cljs$core$ILookup$_lookup$arity$2(coll__20138,k);
});
var G__20158__3 = (function (this_sym20135,k,not_found){
var this__20136 = this;
var this_sym20135__20139 = this;
var coll__20140 = this_sym20135__20139;
return coll__20140.cljs$core$ILookup$_lookup$arity$3(coll__20140,k,not_found);
});
G__20158 = function(this_sym20135,k,not_found){
switch(arguments.length){
case 2:
return G__20158__2.call(this,this_sym20135,k);
case 3:
return G__20158__3.call(this,this_sym20135,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20158;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym20114,args20115){
var this__20141 = this;
return this_sym20114.call.apply(this_sym20114,[this_sym20114].concat(args20115.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__20142 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__20143 = this;
var this__20144 = this;
return cljs.core.pr_str.call(null,this__20144);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__20145 = this;
if((this__20145.count > 0))
{var hashes__20146 = cljs.core.js_keys.call(null,this__20145.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__20113_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__20145.hashobj[p1__20113_SHARP_])));
}),hashes__20146);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__20147 = this;
return this__20147.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20148 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20149 = this;
return (new cljs.core.HashMap(meta,this__20149.count,this__20149.hashobj,this__20149.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20150 = this;
return this__20150.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20151 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__20151.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__20152 = this;
var h__20153 = cljs.core.hash.call(null,k);
var bucket__20154 = (this__20152.hashobj[h__20153]);
var i__20155 = (cljs.core.truth_(bucket__20154)?cljs.core.scan_array.call(null,2,k,bucket__20154):null);
if(cljs.core.not.call(null,i__20155))
{return coll;
} else
{var new_hashobj__20156 = goog.object.clone(this__20152.hashobj);
if((3 > bucket__20154.length))
{cljs.core.js_delete.call(null,new_hashobj__20156,h__20153);
} else
{var new_bucket__20157 = bucket__20154.slice();
new_bucket__20157.splice(i__20155,2);
(new_hashobj__20156[h__20153] = new_bucket__20157);
}
return (new cljs.core.HashMap(this__20152.meta,(this__20152.count - 1),new_hashobj__20156,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__20159 = ks.length;
var i__20160 = 0;
var out__20161 = cljs.core.HashMap.EMPTY;
while(true){
if((i__20160 < len__20159))
{{
var G__20162 = (i__20160 + 1);
var G__20163 = cljs.core.assoc.call(null,out__20161,(ks[i__20160]),(vs[i__20160]));
i__20160 = G__20162;
out__20161 = G__20163;
continue;
}
} else
{return out__20161;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__20167 = m.arr;
var len__20168 = arr__20167.length;
var i__20169 = 0;
while(true){
if((len__20168 <= i__20169))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__20167[i__20169]),k))
{return i__20169;
} else
{if("\uFDD0'else")
{{
var G__20170 = (i__20169 + 2);
i__20169 = G__20170;
continue;
}
} else
{return null;
}
}
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__20173 = this;
return (new cljs.core.TransientArrayMap({},this__20173.arr.length,this__20173.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__20174 = this;
var h__2281__auto____20175 = this__20174.__hash;
if(!((h__2281__auto____20175 == null)))
{return h__2281__auto____20175;
} else
{var h__2281__auto____20176 = cljs.core.hash_imap.call(null,coll);
this__20174.__hash = h__2281__auto____20176;
return h__2281__auto____20176;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__20177 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__20178 = this;
var idx__20179 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__20179 === -1))
{return not_found;
} else
{return (this__20178.arr[(idx__20179 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__20180 = this;
var idx__20181 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__20181 === -1))
{if((this__20180.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__20180.meta,(this__20180.cnt + 1),(function (){var G__20182__20183 = this__20180.arr.slice();
G__20182__20183.push(k);
G__20182__20183.push(v);
return G__20182__20183;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__20180.arr[(idx__20181 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__20180.meta,this__20180.cnt,(function (){var G__20184__20185 = this__20180.arr.slice();
(G__20184__20185[(idx__20181 + 1)] = v);
return G__20184__20185;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__20186 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__20218 = null;
var G__20218__2 = (function (this_sym20187,k){
var this__20189 = this;
var this_sym20187__20190 = this;
var coll__20191 = this_sym20187__20190;
return coll__20191.cljs$core$ILookup$_lookup$arity$2(coll__20191,k);
});
var G__20218__3 = (function (this_sym20188,k,not_found){
var this__20189 = this;
var this_sym20188__20192 = this;
var coll__20193 = this_sym20188__20192;
return coll__20193.cljs$core$ILookup$_lookup$arity$3(coll__20193,k,not_found);
});
G__20218 = function(this_sym20188,k,not_found){
switch(arguments.length){
case 2:
return G__20218__2.call(this,this_sym20188,k);
case 3:
return G__20218__3.call(this,this_sym20188,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20218;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym20171,args20172){
var this__20194 = this;
return this_sym20171.call.apply(this_sym20171,[this_sym20171].concat(args20172.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__20195 = this;
var len__20196 = this__20195.arr.length;
var i__20197 = 0;
var init__20198 = init;
while(true){
if((i__20197 < len__20196))
{var init__20199 = f.call(null,init__20198,(this__20195.arr[i__20197]),(this__20195.arr[(i__20197 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__20199))
{return cljs.core.deref.call(null,init__20199);
} else
{{
var G__20219 = (i__20197 + 2);
var G__20220 = init__20199;
i__20197 = G__20219;
init__20198 = G__20220;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__20200 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__20201 = this;
var this__20202 = this;
return cljs.core.pr_str.call(null,this__20202);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__20203 = this;
if((this__20203.cnt > 0))
{var len__20204 = this__20203.arr.length;
var array_map_seq__20205 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__20204))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__20203.arr[i]),(this__20203.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__20205.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__20206 = this;
return this__20206.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20207 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20208 = this;
return (new cljs.core.PersistentArrayMap(meta,this__20208.cnt,this__20208.arr,this__20208.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20209 = this;
return this__20209.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20210 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20210.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__20211 = this;
var idx__20212 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__20212 >= 0))
{var len__20213 = this__20211.arr.length;
var new_len__20214 = (len__20213 - 2);
if((new_len__20214 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__20215 = cljs.core.make_array.call(null,new_len__20214);
var s__20216 = 0;
var d__20217 = 0;
while(true){
if((s__20216 >= len__20213))
{return (new cljs.core.PersistentArrayMap(this__20211.meta,(this__20211.cnt - 1),new_arr__20215,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__20211.arr[s__20216])))
{{
var G__20221 = (s__20216 + 2);
var G__20222 = d__20217;
s__20216 = G__20221;
d__20217 = G__20222;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__20215[d__20217] = (this__20211.arr[s__20216]));
(new_arr__20215[(d__20217 + 1)] = (this__20211.arr[(s__20216 + 1)]));
{
var G__20223 = (s__20216 + 2);
var G__20224 = (d__20217 + 2);
s__20216 = G__20223;
d__20217 = G__20224;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__20225 = cljs.core.count.call(null,ks);
var i__20226 = 0;
var out__20227 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__20226 < len__20225))
{{
var G__20228 = (i__20226 + 1);
var G__20229 = cljs.core.assoc_BANG_.call(null,out__20227,(ks[i__20226]),(vs[i__20226]));
i__20226 = G__20228;
out__20227 = G__20229;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__20227);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__20230 = this;
if(cljs.core.truth_(this__20230.editable_QMARK_))
{var idx__20231 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__20231 >= 0))
{(this__20230.arr[idx__20231] = (this__20230.arr[(this__20230.len - 2)]));
(this__20230.arr[(idx__20231 + 1)] = (this__20230.arr[(this__20230.len - 1)]));
var G__20232__20233 = this__20230.arr;
G__20232__20233.pop();
G__20232__20233.pop();
G__20232__20233;
this__20230.len = (this__20230.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__20234 = this;
if(cljs.core.truth_(this__20234.editable_QMARK_))
{var idx__20235 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__20235 === -1))
{if(((this__20234.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__20234.len = (this__20234.len + 2);
this__20234.arr.push(key);
this__20234.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__20234.len,this__20234.arr),key,val);
}
} else
{if((val === (this__20234.arr[(idx__20235 + 1)])))
{return tcoll;
} else
{(this__20234.arr[(idx__20235 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__20236 = this;
if(cljs.core.truth_(this__20236.editable_QMARK_))
{if((function (){var G__20237__20238 = o;
if(G__20237__20238)
{if((function (){var or__3824__auto____20239 = (G__20237__20238.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____20239)
{return or__3824__auto____20239;
} else
{return G__20237__20238.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__20237__20238.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__20237__20238);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__20237__20238);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__20240 = cljs.core.seq.call(null,o);
var tcoll__20241 = tcoll;
while(true){
var temp__3971__auto____20242 = cljs.core.first.call(null,es__20240);
if(cljs.core.truth_(temp__3971__auto____20242))
{var e__20243 = temp__3971__auto____20242;
{
var G__20249 = cljs.core.next.call(null,es__20240);
var G__20250 = tcoll__20241.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__20241,cljs.core.key.call(null,e__20243),cljs.core.val.call(null,e__20243));
es__20240 = G__20249;
tcoll__20241 = G__20250;
continue;
}
} else
{return tcoll__20241;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__20244 = this;
if(cljs.core.truth_(this__20244.editable_QMARK_))
{this__20244.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__20244.len,2),this__20244.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__20245 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__20246 = this;
if(cljs.core.truth_(this__20246.editable_QMARK_))
{var idx__20247 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__20247 === -1))
{return not_found;
} else
{return (this__20246.arr[(idx__20247 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__20248 = this;
if(cljs.core.truth_(this__20248.editable_QMARK_))
{return cljs.core.quot.call(null,this__20248.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__20253 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__20254 = 0;
while(true){
if((i__20254 < len))
{{
var G__20255 = cljs.core.assoc_BANG_.call(null,out__20253,(arr[i__20254]),(arr[(i__20254 + 1)]));
var G__20256 = (i__20254 + 2);
out__20253 = G__20255;
i__20254 = G__20256;
continue;
}
} else
{return out__20253;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2399__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__20261__20262 = arr.slice();
(G__20261__20262[i] = a);
return G__20261__20262;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__20263__20264 = arr.slice();
(G__20263__20264[i] = a);
(G__20263__20264[j] = b);
return G__20263__20264;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__20266 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__20266,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__20266,(2 * i),(new_arr__20266.length - (2 * i)));
return new_arr__20266;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__20269 = inode.ensure_editable(edit);
(editable__20269.arr[i] = a);
return editable__20269;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__20270 = inode.ensure_editable(edit);
(editable__20270.arr[i] = a);
(editable__20270.arr[j] = b);
return editable__20270;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__20277 = arr.length;
var i__20278 = 0;
var init__20279 = init;
while(true){
if((i__20278 < len__20277))
{var init__20282 = (function (){var k__20280 = (arr[i__20278]);
if(!((k__20280 == null)))
{return f.call(null,init__20279,k__20280,(arr[(i__20278 + 1)]));
} else
{var node__20281 = (arr[(i__20278 + 1)]);
if(!((node__20281 == null)))
{return node__20281.kv_reduce(f,init__20279);
} else
{return init__20279;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__20282))
{return cljs.core.deref.call(null,init__20282);
} else
{{
var G__20283 = (i__20278 + 2);
var G__20284 = init__20282;
i__20278 = G__20283;
init__20279 = G__20284;
continue;
}
}
} else
{return init__20279;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__20285 = this;
var inode__20286 = this;
if((this__20285.bitmap === bit))
{return null;
} else
{var editable__20287 = inode__20286.ensure_editable(e);
var earr__20288 = editable__20287.arr;
var len__20289 = earr__20288.length;
editable__20287.bitmap = (bit ^ editable__20287.bitmap);
cljs.core.array_copy.call(null,earr__20288,(2 * (i + 1)),earr__20288,(2 * i),(len__20289 - (2 * (i + 1))));
(earr__20288[(len__20289 - 2)] = null);
(earr__20288[(len__20289 - 1)] = null);
return editable__20287;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__20290 = this;
var inode__20291 = this;
var bit__20292 = (1 << ((hash >>> shift) & 0x01f));
var idx__20293 = cljs.core.bitmap_indexed_node_index.call(null,this__20290.bitmap,bit__20292);
if(((this__20290.bitmap & bit__20292) === 0))
{var n__20294 = cljs.core.bit_count.call(null,this__20290.bitmap);
if(((2 * n__20294) < this__20290.arr.length))
{var editable__20295 = inode__20291.ensure_editable(edit);
var earr__20296 = editable__20295.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__20296,(2 * idx__20293),earr__20296,(2 * (idx__20293 + 1)),(2 * (n__20294 - idx__20293)));
(earr__20296[(2 * idx__20293)] = key);
(earr__20296[((2 * idx__20293) + 1)] = val);
editable__20295.bitmap = (editable__20295.bitmap | bit__20292);
return editable__20295;
} else
{if((n__20294 >= 16))
{var nodes__20297 = cljs.core.make_array.call(null,32);
var jdx__20298 = ((hash >>> shift) & 0x01f);
(nodes__20297[jdx__20298] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__20299 = 0;
var j__20300 = 0;
while(true){
if((i__20299 < 32))
{if((((this__20290.bitmap >>> i__20299) & 1) === 0))
{{
var G__20353 = (i__20299 + 1);
var G__20354 = j__20300;
i__20299 = G__20353;
j__20300 = G__20354;
continue;
}
} else
{(nodes__20297[i__20299] = ((!(((this__20290.arr[j__20300]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__20290.arr[j__20300])),(this__20290.arr[j__20300]),(this__20290.arr[(j__20300 + 1)]),added_leaf_QMARK_):(this__20290.arr[(j__20300 + 1)])));
{
var G__20355 = (i__20299 + 1);
var G__20356 = (j__20300 + 2);
i__20299 = G__20355;
j__20300 = G__20356;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__20294 + 1),nodes__20297));
} else
{if("\uFDD0'else")
{var new_arr__20301 = cljs.core.make_array.call(null,(2 * (n__20294 + 4)));
cljs.core.array_copy.call(null,this__20290.arr,0,new_arr__20301,0,(2 * idx__20293));
(new_arr__20301[(2 * idx__20293)] = key);
(new_arr__20301[((2 * idx__20293) + 1)] = val);
cljs.core.array_copy.call(null,this__20290.arr,(2 * idx__20293),new_arr__20301,(2 * (idx__20293 + 1)),(2 * (n__20294 - idx__20293)));
added_leaf_QMARK_.val = true;
var editable__20302 = inode__20291.ensure_editable(edit);
editable__20302.arr = new_arr__20301;
editable__20302.bitmap = (editable__20302.bitmap | bit__20292);
return editable__20302;
} else
{return null;
}
}
}
} else
{var key_or_nil__20303 = (this__20290.arr[(2 * idx__20293)]);
var val_or_node__20304 = (this__20290.arr[((2 * idx__20293) + 1)]);
if((key_or_nil__20303 == null))
{var n__20305 = val_or_node__20304.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__20305 === val_or_node__20304))
{return inode__20291;
} else
{return cljs.core.edit_and_set.call(null,inode__20291,edit,((2 * idx__20293) + 1),n__20305);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__20303))
{if((val === val_or_node__20304))
{return inode__20291;
} else
{return cljs.core.edit_and_set.call(null,inode__20291,edit,((2 * idx__20293) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__20291,edit,(2 * idx__20293),null,((2 * idx__20293) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__20303,val_or_node__20304,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__20306 = this;
var inode__20307 = this;
return cljs.core.create_inode_seq.call(null,this__20306.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__20308 = this;
var inode__20309 = this;
var bit__20310 = (1 << ((hash >>> shift) & 0x01f));
if(((this__20308.bitmap & bit__20310) === 0))
{return inode__20309;
} else
{var idx__20311 = cljs.core.bitmap_indexed_node_index.call(null,this__20308.bitmap,bit__20310);
var key_or_nil__20312 = (this__20308.arr[(2 * idx__20311)]);
var val_or_node__20313 = (this__20308.arr[((2 * idx__20311) + 1)]);
if((key_or_nil__20312 == null))
{var n__20314 = val_or_node__20313.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__20314 === val_or_node__20313))
{return inode__20309;
} else
{if(!((n__20314 == null)))
{return cljs.core.edit_and_set.call(null,inode__20309,edit,((2 * idx__20311) + 1),n__20314);
} else
{if((this__20308.bitmap === bit__20310))
{return null;
} else
{if("\uFDD0'else")
{return inode__20309.edit_and_remove_pair(edit,bit__20310,idx__20311);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__20312))
{(removed_leaf_QMARK_[0] = true);
return inode__20309.edit_and_remove_pair(edit,bit__20310,idx__20311);
} else
{if("\uFDD0'else")
{return inode__20309;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__20315 = this;
var inode__20316 = this;
if((e === this__20315.edit))
{return inode__20316;
} else
{var n__20317 = cljs.core.bit_count.call(null,this__20315.bitmap);
var new_arr__20318 = cljs.core.make_array.call(null,(((n__20317 < 0))?4:(2 * (n__20317 + 1))));
cljs.core.array_copy.call(null,this__20315.arr,0,new_arr__20318,0,(2 * n__20317));
return (new cljs.core.BitmapIndexedNode(e,this__20315.bitmap,new_arr__20318));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__20319 = this;
var inode__20320 = this;
return cljs.core.inode_kv_reduce.call(null,this__20319.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__20321 = this;
var inode__20322 = this;
var bit__20323 = (1 << ((hash >>> shift) & 0x01f));
if(((this__20321.bitmap & bit__20323) === 0))
{return not_found;
} else
{var idx__20324 = cljs.core.bitmap_indexed_node_index.call(null,this__20321.bitmap,bit__20323);
var key_or_nil__20325 = (this__20321.arr[(2 * idx__20324)]);
var val_or_node__20326 = (this__20321.arr[((2 * idx__20324) + 1)]);
if((key_or_nil__20325 == null))
{return val_or_node__20326.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__20325))
{return cljs.core.PersistentVector.fromArray([key_or_nil__20325,val_or_node__20326], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__20327 = this;
var inode__20328 = this;
var bit__20329 = (1 << ((hash >>> shift) & 0x01f));
if(((this__20327.bitmap & bit__20329) === 0))
{return inode__20328;
} else
{var idx__20330 = cljs.core.bitmap_indexed_node_index.call(null,this__20327.bitmap,bit__20329);
var key_or_nil__20331 = (this__20327.arr[(2 * idx__20330)]);
var val_or_node__20332 = (this__20327.arr[((2 * idx__20330) + 1)]);
if((key_or_nil__20331 == null))
{var n__20333 = val_or_node__20332.inode_without((shift + 5),hash,key);
if((n__20333 === val_or_node__20332))
{return inode__20328;
} else
{if(!((n__20333 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__20327.bitmap,cljs.core.clone_and_set.call(null,this__20327.arr,((2 * idx__20330) + 1),n__20333)));
} else
{if((this__20327.bitmap === bit__20329))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__20327.bitmap ^ bit__20329),cljs.core.remove_pair.call(null,this__20327.arr,idx__20330)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__20331))
{return (new cljs.core.BitmapIndexedNode(null,(this__20327.bitmap ^ bit__20329),cljs.core.remove_pair.call(null,this__20327.arr,idx__20330)));
} else
{if("\uFDD0'else")
{return inode__20328;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__20334 = this;
var inode__20335 = this;
var bit__20336 = (1 << ((hash >>> shift) & 0x01f));
var idx__20337 = cljs.core.bitmap_indexed_node_index.call(null,this__20334.bitmap,bit__20336);
if(((this__20334.bitmap & bit__20336) === 0))
{var n__20338 = cljs.core.bit_count.call(null,this__20334.bitmap);
if((n__20338 >= 16))
{var nodes__20339 = cljs.core.make_array.call(null,32);
var jdx__20340 = ((hash >>> shift) & 0x01f);
(nodes__20339[jdx__20340] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__20341 = 0;
var j__20342 = 0;
while(true){
if((i__20341 < 32))
{if((((this__20334.bitmap >>> i__20341) & 1) === 0))
{{
var G__20357 = (i__20341 + 1);
var G__20358 = j__20342;
i__20341 = G__20357;
j__20342 = G__20358;
continue;
}
} else
{(nodes__20339[i__20341] = ((!(((this__20334.arr[j__20342]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__20334.arr[j__20342])),(this__20334.arr[j__20342]),(this__20334.arr[(j__20342 + 1)]),added_leaf_QMARK_):(this__20334.arr[(j__20342 + 1)])));
{
var G__20359 = (i__20341 + 1);
var G__20360 = (j__20342 + 2);
i__20341 = G__20359;
j__20342 = G__20360;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__20338 + 1),nodes__20339));
} else
{var new_arr__20343 = cljs.core.make_array.call(null,(2 * (n__20338 + 1)));
cljs.core.array_copy.call(null,this__20334.arr,0,new_arr__20343,0,(2 * idx__20337));
(new_arr__20343[(2 * idx__20337)] = key);
(new_arr__20343[((2 * idx__20337) + 1)] = val);
cljs.core.array_copy.call(null,this__20334.arr,(2 * idx__20337),new_arr__20343,(2 * (idx__20337 + 1)),(2 * (n__20338 - idx__20337)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__20334.bitmap | bit__20336),new_arr__20343));
}
} else
{var key_or_nil__20344 = (this__20334.arr[(2 * idx__20337)]);
var val_or_node__20345 = (this__20334.arr[((2 * idx__20337) + 1)]);
if((key_or_nil__20344 == null))
{var n__20346 = val_or_node__20345.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__20346 === val_or_node__20345))
{return inode__20335;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__20334.bitmap,cljs.core.clone_and_set.call(null,this__20334.arr,((2 * idx__20337) + 1),n__20346)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__20344))
{if((val === val_or_node__20345))
{return inode__20335;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__20334.bitmap,cljs.core.clone_and_set.call(null,this__20334.arr,((2 * idx__20337) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__20334.bitmap,cljs.core.clone_and_set.call(null,this__20334.arr,(2 * idx__20337),null,((2 * idx__20337) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__20344,val_or_node__20345,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__20347 = this;
var inode__20348 = this;
var bit__20349 = (1 << ((hash >>> shift) & 0x01f));
if(((this__20347.bitmap & bit__20349) === 0))
{return not_found;
} else
{var idx__20350 = cljs.core.bitmap_indexed_node_index.call(null,this__20347.bitmap,bit__20349);
var key_or_nil__20351 = (this__20347.arr[(2 * idx__20350)]);
var val_or_node__20352 = (this__20347.arr[((2 * idx__20350) + 1)]);
if((key_or_nil__20351 == null))
{return val_or_node__20352.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__20351))
{return val_or_node__20352;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__20368 = array_node.arr;
var len__20369 = (2 * (array_node.cnt - 1));
var new_arr__20370 = cljs.core.make_array.call(null,len__20369);
var i__20371 = 0;
var j__20372 = 1;
var bitmap__20373 = 0;
while(true){
if((i__20371 < len__20369))
{if((function (){var and__3822__auto____20374 = !((i__20371 === idx));
if(and__3822__auto____20374)
{return !(((arr__20368[i__20371]) == null));
} else
{return and__3822__auto____20374;
}
})())
{(new_arr__20370[j__20372] = (arr__20368[i__20371]));
{
var G__20375 = (i__20371 + 1);
var G__20376 = (j__20372 + 2);
var G__20377 = (bitmap__20373 | (1 << i__20371));
i__20371 = G__20375;
j__20372 = G__20376;
bitmap__20373 = G__20377;
continue;
}
} else
{{
var G__20378 = (i__20371 + 1);
var G__20379 = j__20372;
var G__20380 = bitmap__20373;
i__20371 = G__20378;
j__20372 = G__20379;
bitmap__20373 = G__20380;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__20373,new_arr__20370));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__20381 = this;
var inode__20382 = this;
var idx__20383 = ((hash >>> shift) & 0x01f);
var node__20384 = (this__20381.arr[idx__20383]);
if((node__20384 == null))
{var editable__20385 = cljs.core.edit_and_set.call(null,inode__20382,edit,idx__20383,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__20385.cnt = (editable__20385.cnt + 1);
return editable__20385;
} else
{var n__20386 = node__20384.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__20386 === node__20384))
{return inode__20382;
} else
{return cljs.core.edit_and_set.call(null,inode__20382,edit,idx__20383,n__20386);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__20387 = this;
var inode__20388 = this;
return cljs.core.create_array_node_seq.call(null,this__20387.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__20389 = this;
var inode__20390 = this;
var idx__20391 = ((hash >>> shift) & 0x01f);
var node__20392 = (this__20389.arr[idx__20391]);
if((node__20392 == null))
{return inode__20390;
} else
{var n__20393 = node__20392.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__20393 === node__20392))
{return inode__20390;
} else
{if((n__20393 == null))
{if((this__20389.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__20390,edit,idx__20391);
} else
{var editable__20394 = cljs.core.edit_and_set.call(null,inode__20390,edit,idx__20391,n__20393);
editable__20394.cnt = (editable__20394.cnt - 1);
return editable__20394;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__20390,edit,idx__20391,n__20393);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__20395 = this;
var inode__20396 = this;
if((e === this__20395.edit))
{return inode__20396;
} else
{return (new cljs.core.ArrayNode(e,this__20395.cnt,this__20395.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__20397 = this;
var inode__20398 = this;
var len__20399 = this__20397.arr.length;
var i__20400 = 0;
var init__20401 = init;
while(true){
if((i__20400 < len__20399))
{var node__20402 = (this__20397.arr[i__20400]);
if(!((node__20402 == null)))
{var init__20403 = node__20402.kv_reduce(f,init__20401);
if(cljs.core.reduced_QMARK_.call(null,init__20403))
{return cljs.core.deref.call(null,init__20403);
} else
{{
var G__20422 = (i__20400 + 1);
var G__20423 = init__20403;
i__20400 = G__20422;
init__20401 = G__20423;
continue;
}
}
} else
{return null;
}
} else
{return init__20401;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__20404 = this;
var inode__20405 = this;
var idx__20406 = ((hash >>> shift) & 0x01f);
var node__20407 = (this__20404.arr[idx__20406]);
if(!((node__20407 == null)))
{return node__20407.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__20408 = this;
var inode__20409 = this;
var idx__20410 = ((hash >>> shift) & 0x01f);
var node__20411 = (this__20408.arr[idx__20410]);
if(!((node__20411 == null)))
{var n__20412 = node__20411.inode_without((shift + 5),hash,key);
if((n__20412 === node__20411))
{return inode__20409;
} else
{if((n__20412 == null))
{if((this__20408.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__20409,null,idx__20410);
} else
{return (new cljs.core.ArrayNode(null,(this__20408.cnt - 1),cljs.core.clone_and_set.call(null,this__20408.arr,idx__20410,n__20412)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__20408.cnt,cljs.core.clone_and_set.call(null,this__20408.arr,idx__20410,n__20412)));
} else
{return null;
}
}
}
} else
{return inode__20409;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__20413 = this;
var inode__20414 = this;
var idx__20415 = ((hash >>> shift) & 0x01f);
var node__20416 = (this__20413.arr[idx__20415]);
if((node__20416 == null))
{return (new cljs.core.ArrayNode(null,(this__20413.cnt + 1),cljs.core.clone_and_set.call(null,this__20413.arr,idx__20415,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__20417 = node__20416.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__20417 === node__20416))
{return inode__20414;
} else
{return (new cljs.core.ArrayNode(null,this__20413.cnt,cljs.core.clone_and_set.call(null,this__20413.arr,idx__20415,n__20417)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__20418 = this;
var inode__20419 = this;
var idx__20420 = ((hash >>> shift) & 0x01f);
var node__20421 = (this__20418.arr[idx__20420]);
if(!((node__20421 == null)))
{return node__20421.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__20426 = (2 * cnt);
var i__20427 = 0;
while(true){
if((i__20427 < lim__20426))
{if(cljs.core.key_test.call(null,key,(arr[i__20427])))
{return i__20427;
} else
{{
var G__20428 = (i__20427 + 2);
i__20427 = G__20428;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__20429 = this;
var inode__20430 = this;
if((hash === this__20429.collision_hash))
{var idx__20431 = cljs.core.hash_collision_node_find_index.call(null,this__20429.arr,this__20429.cnt,key);
if((idx__20431 === -1))
{if((this__20429.arr.length > (2 * this__20429.cnt)))
{var editable__20432 = cljs.core.edit_and_set.call(null,inode__20430,edit,(2 * this__20429.cnt),key,((2 * this__20429.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__20432.cnt = (editable__20432.cnt + 1);
return editable__20432;
} else
{var len__20433 = this__20429.arr.length;
var new_arr__20434 = cljs.core.make_array.call(null,(len__20433 + 2));
cljs.core.array_copy.call(null,this__20429.arr,0,new_arr__20434,0,len__20433);
(new_arr__20434[len__20433] = key);
(new_arr__20434[(len__20433 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__20430.ensure_editable_array(edit,(this__20429.cnt + 1),new_arr__20434);
}
} else
{if(((this__20429.arr[(idx__20431 + 1)]) === val))
{return inode__20430;
} else
{return cljs.core.edit_and_set.call(null,inode__20430,edit,(idx__20431 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__20429.collision_hash >>> shift) & 0x01f)),[null,inode__20430,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__20435 = this;
var inode__20436 = this;
return cljs.core.create_inode_seq.call(null,this__20435.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__20437 = this;
var inode__20438 = this;
var idx__20439 = cljs.core.hash_collision_node_find_index.call(null,this__20437.arr,this__20437.cnt,key);
if((idx__20439 === -1))
{return inode__20438;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__20437.cnt === 1))
{return null;
} else
{var editable__20440 = inode__20438.ensure_editable(edit);
var earr__20441 = editable__20440.arr;
(earr__20441[idx__20439] = (earr__20441[((2 * this__20437.cnt) - 2)]));
(earr__20441[(idx__20439 + 1)] = (earr__20441[((2 * this__20437.cnt) - 1)]));
(earr__20441[((2 * this__20437.cnt) - 1)] = null);
(earr__20441[((2 * this__20437.cnt) - 2)] = null);
editable__20440.cnt = (editable__20440.cnt - 1);
return editable__20440;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__20442 = this;
var inode__20443 = this;
if((e === this__20442.edit))
{return inode__20443;
} else
{var new_arr__20444 = cljs.core.make_array.call(null,(2 * (this__20442.cnt + 1)));
cljs.core.array_copy.call(null,this__20442.arr,0,new_arr__20444,0,(2 * this__20442.cnt));
return (new cljs.core.HashCollisionNode(e,this__20442.collision_hash,this__20442.cnt,new_arr__20444));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__20445 = this;
var inode__20446 = this;
return cljs.core.inode_kv_reduce.call(null,this__20445.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__20447 = this;
var inode__20448 = this;
var idx__20449 = cljs.core.hash_collision_node_find_index.call(null,this__20447.arr,this__20447.cnt,key);
if((idx__20449 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__20447.arr[idx__20449])))
{return cljs.core.PersistentVector.fromArray([(this__20447.arr[idx__20449]),(this__20447.arr[(idx__20449 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__20450 = this;
var inode__20451 = this;
var idx__20452 = cljs.core.hash_collision_node_find_index.call(null,this__20450.arr,this__20450.cnt,key);
if((idx__20452 === -1))
{return inode__20451;
} else
{if((this__20450.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__20450.collision_hash,(this__20450.cnt - 1),cljs.core.remove_pair.call(null,this__20450.arr,cljs.core.quot.call(null,idx__20452,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__20453 = this;
var inode__20454 = this;
if((hash === this__20453.collision_hash))
{var idx__20455 = cljs.core.hash_collision_node_find_index.call(null,this__20453.arr,this__20453.cnt,key);
if((idx__20455 === -1))
{var len__20456 = this__20453.arr.length;
var new_arr__20457 = cljs.core.make_array.call(null,(len__20456 + 2));
cljs.core.array_copy.call(null,this__20453.arr,0,new_arr__20457,0,len__20456);
(new_arr__20457[len__20456] = key);
(new_arr__20457[(len__20456 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__20453.collision_hash,(this__20453.cnt + 1),new_arr__20457));
} else
{if(cljs.core._EQ_.call(null,(this__20453.arr[idx__20455]),val))
{return inode__20454;
} else
{return (new cljs.core.HashCollisionNode(null,this__20453.collision_hash,this__20453.cnt,cljs.core.clone_and_set.call(null,this__20453.arr,(idx__20455 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__20453.collision_hash >>> shift) & 0x01f)),[null,inode__20454])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__20458 = this;
var inode__20459 = this;
var idx__20460 = cljs.core.hash_collision_node_find_index.call(null,this__20458.arr,this__20458.cnt,key);
if((idx__20460 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__20458.arr[idx__20460])))
{return (this__20458.arr[(idx__20460 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__20461 = this;
var inode__20462 = this;
if((e === this__20461.edit))
{this__20461.arr = array;
this__20461.cnt = count;
return inode__20462;
} else
{return (new cljs.core.HashCollisionNode(this__20461.edit,this__20461.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__20467 = cljs.core.hash.call(null,key1);
if((key1hash__20467 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__20467,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___20468 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__20467,key1,val1,added_leaf_QMARK___20468).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___20468);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__20469 = cljs.core.hash.call(null,key1);
if((key1hash__20469 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__20469,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___20470 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__20469,key1,val1,added_leaf_QMARK___20470).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___20470);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__20471 = this;
var h__2281__auto____20472 = this__20471.__hash;
if(!((h__2281__auto____20472 == null)))
{return h__2281__auto____20472;
} else
{var h__2281__auto____20473 = cljs.core.hash_coll.call(null,coll);
this__20471.__hash = h__2281__auto____20473;
return h__2281__auto____20473;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__20474 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__20475 = this;
var this__20476 = this;
return cljs.core.pr_str.call(null,this__20476);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__20477 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__20478 = this;
if((this__20478.s == null))
{return cljs.core.PersistentVector.fromArray([(this__20478.nodes[this__20478.i]),(this__20478.nodes[(this__20478.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__20478.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__20479 = this;
if((this__20479.s == null))
{return cljs.core.create_inode_seq.call(null,this__20479.nodes,(this__20479.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__20479.nodes,this__20479.i,cljs.core.next.call(null,this__20479.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20480 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20481 = this;
return (new cljs.core.NodeSeq(meta,this__20481.nodes,this__20481.i,this__20481.s,this__20481.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20482 = this;
return this__20482.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20483 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__20483.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__20490 = nodes.length;
var j__20491 = i;
while(true){
if((j__20491 < len__20490))
{if(!(((nodes[j__20491]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__20491,null,null));
} else
{var temp__3971__auto____20492 = (nodes[(j__20491 + 1)]);
if(cljs.core.truth_(temp__3971__auto____20492))
{var node__20493 = temp__3971__auto____20492;
var temp__3971__auto____20494 = node__20493.inode_seq();
if(cljs.core.truth_(temp__3971__auto____20494))
{var node_seq__20495 = temp__3971__auto____20494;
return (new cljs.core.NodeSeq(null,nodes,(j__20491 + 2),node_seq__20495,null));
} else
{{
var G__20496 = (j__20491 + 2);
j__20491 = G__20496;
continue;
}
}
} else
{{
var G__20497 = (j__20491 + 2);
j__20491 = G__20497;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__20498 = this;
var h__2281__auto____20499 = this__20498.__hash;
if(!((h__2281__auto____20499 == null)))
{return h__2281__auto____20499;
} else
{var h__2281__auto____20500 = cljs.core.hash_coll.call(null,coll);
this__20498.__hash = h__2281__auto____20500;
return h__2281__auto____20500;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__20501 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__20502 = this;
var this__20503 = this;
return cljs.core.pr_str.call(null,this__20503);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__20504 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__20505 = this;
return cljs.core.first.call(null,this__20505.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__20506 = this;
return cljs.core.create_array_node_seq.call(null,null,this__20506.nodes,this__20506.i,cljs.core.next.call(null,this__20506.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20507 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20508 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__20508.nodes,this__20508.i,this__20508.s,this__20508.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20509 = this;
return this__20509.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20510 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__20510.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__20517 = nodes.length;
var j__20518 = i;
while(true){
if((j__20518 < len__20517))
{var temp__3971__auto____20519 = (nodes[j__20518]);
if(cljs.core.truth_(temp__3971__auto____20519))
{var nj__20520 = temp__3971__auto____20519;
var temp__3971__auto____20521 = nj__20520.inode_seq();
if(cljs.core.truth_(temp__3971__auto____20521))
{var ns__20522 = temp__3971__auto____20521;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__20518 + 1),ns__20522,null));
} else
{{
var G__20523 = (j__20518 + 1);
j__20518 = G__20523;
continue;
}
}
} else
{{
var G__20524 = (j__20518 + 1);
j__20518 = G__20524;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__20527 = this;
return (new cljs.core.TransientHashMap({},this__20527.root,this__20527.cnt,this__20527.has_nil_QMARK_,this__20527.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__20528 = this;
var h__2281__auto____20529 = this__20528.__hash;
if(!((h__2281__auto____20529 == null)))
{return h__2281__auto____20529;
} else
{var h__2281__auto____20530 = cljs.core.hash_imap.call(null,coll);
this__20528.__hash = h__2281__auto____20530;
return h__2281__auto____20530;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__20531 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__20532 = this;
if((k == null))
{if(this__20532.has_nil_QMARK_)
{return this__20532.nil_val;
} else
{return not_found;
}
} else
{if((this__20532.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__20532.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__20533 = this;
if((k == null))
{if((function (){var and__3822__auto____20534 = this__20533.has_nil_QMARK_;
if(and__3822__auto____20534)
{return (v === this__20533.nil_val);
} else
{return and__3822__auto____20534;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__20533.meta,((this__20533.has_nil_QMARK_)?this__20533.cnt:(this__20533.cnt + 1)),this__20533.root,true,v,null));
}
} else
{var added_leaf_QMARK___20535 = (new cljs.core.Box(false));
var new_root__20536 = (((this__20533.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__20533.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___20535);
if((new_root__20536 === this__20533.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__20533.meta,((added_leaf_QMARK___20535.val)?(this__20533.cnt + 1):this__20533.cnt),new_root__20536,this__20533.has_nil_QMARK_,this__20533.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__20537 = this;
if((k == null))
{return this__20537.has_nil_QMARK_;
} else
{if((this__20537.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__20537.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__20560 = null;
var G__20560__2 = (function (this_sym20538,k){
var this__20540 = this;
var this_sym20538__20541 = this;
var coll__20542 = this_sym20538__20541;
return coll__20542.cljs$core$ILookup$_lookup$arity$2(coll__20542,k);
});
var G__20560__3 = (function (this_sym20539,k,not_found){
var this__20540 = this;
var this_sym20539__20543 = this;
var coll__20544 = this_sym20539__20543;
return coll__20544.cljs$core$ILookup$_lookup$arity$3(coll__20544,k,not_found);
});
G__20560 = function(this_sym20539,k,not_found){
switch(arguments.length){
case 2:
return G__20560__2.call(this,this_sym20539,k);
case 3:
return G__20560__3.call(this,this_sym20539,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20560;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym20525,args20526){
var this__20545 = this;
return this_sym20525.call.apply(this_sym20525,[this_sym20525].concat(args20526.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__20546 = this;
var init__20547 = ((this__20546.has_nil_QMARK_)?f.call(null,init,null,this__20546.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__20547))
{return cljs.core.deref.call(null,init__20547);
} else
{if(!((this__20546.root == null)))
{return this__20546.root.kv_reduce(f,init__20547);
} else
{if("\uFDD0'else")
{return init__20547;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__20548 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__20549 = this;
var this__20550 = this;
return cljs.core.pr_str.call(null,this__20550);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__20551 = this;
if((this__20551.cnt > 0))
{var s__20552 = ((!((this__20551.root == null)))?this__20551.root.inode_seq():null);
if(this__20551.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__20551.nil_val], true),s__20552);
} else
{return s__20552;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__20553 = this;
return this__20553.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20554 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20555 = this;
return (new cljs.core.PersistentHashMap(meta,this__20555.cnt,this__20555.root,this__20555.has_nil_QMARK_,this__20555.nil_val,this__20555.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20556 = this;
return this__20556.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20557 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__20557.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__20558 = this;
if((k == null))
{if(this__20558.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__20558.meta,(this__20558.cnt - 1),this__20558.root,false,null,null));
} else
{return coll;
}
} else
{if((this__20558.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__20559 = this__20558.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__20559 === this__20558.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__20558.meta,(this__20558.cnt - 1),new_root__20559,this__20558.has_nil_QMARK_,this__20558.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__20561 = ks.length;
var i__20562 = 0;
var out__20563 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__20562 < len__20561))
{{
var G__20564 = (i__20562 + 1);
var G__20565 = cljs.core.assoc_BANG_.call(null,out__20563,(ks[i__20562]),(vs[i__20562]));
i__20562 = G__20564;
out__20563 = G__20565;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__20563);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__20566 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__20567 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__20568 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__20569 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__20570 = this;
if((k == null))
{if(this__20570.has_nil_QMARK_)
{return this__20570.nil_val;
} else
{return null;
}
} else
{if((this__20570.root == null))
{return null;
} else
{return this__20570.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__20571 = this;
if((k == null))
{if(this__20571.has_nil_QMARK_)
{return this__20571.nil_val;
} else
{return not_found;
}
} else
{if((this__20571.root == null))
{return not_found;
} else
{return this__20571.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__20572 = this;
if(this__20572.edit)
{return this__20572.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__20573 = this;
var tcoll__20574 = this;
if(this__20573.edit)
{if((function (){var G__20575__20576 = o;
if(G__20575__20576)
{if((function (){var or__3824__auto____20577 = (G__20575__20576.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____20577)
{return or__3824__auto____20577;
} else
{return G__20575__20576.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__20575__20576.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__20575__20576);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__20575__20576);
}
})())
{return tcoll__20574.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__20578 = cljs.core.seq.call(null,o);
var tcoll__20579 = tcoll__20574;
while(true){
var temp__3971__auto____20580 = cljs.core.first.call(null,es__20578);
if(cljs.core.truth_(temp__3971__auto____20580))
{var e__20581 = temp__3971__auto____20580;
{
var G__20592 = cljs.core.next.call(null,es__20578);
var G__20593 = tcoll__20579.assoc_BANG_(cljs.core.key.call(null,e__20581),cljs.core.val.call(null,e__20581));
es__20578 = G__20592;
tcoll__20579 = G__20593;
continue;
}
} else
{return tcoll__20579;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__20582 = this;
var tcoll__20583 = this;
if(this__20582.edit)
{if((k == null))
{if((this__20582.nil_val === v))
{} else
{this__20582.nil_val = v;
}
if(this__20582.has_nil_QMARK_)
{} else
{this__20582.count = (this__20582.count + 1);
this__20582.has_nil_QMARK_ = true;
}
return tcoll__20583;
} else
{var added_leaf_QMARK___20584 = (new cljs.core.Box(false));
var node__20585 = (((this__20582.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__20582.root).inode_assoc_BANG_(this__20582.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___20584);
if((node__20585 === this__20582.root))
{} else
{this__20582.root = node__20585;
}
if(added_leaf_QMARK___20584.val)
{this__20582.count = (this__20582.count + 1);
} else
{}
return tcoll__20583;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__20586 = this;
var tcoll__20587 = this;
if(this__20586.edit)
{if((k == null))
{if(this__20586.has_nil_QMARK_)
{this__20586.has_nil_QMARK_ = false;
this__20586.nil_val = null;
this__20586.count = (this__20586.count - 1);
return tcoll__20587;
} else
{return tcoll__20587;
}
} else
{if((this__20586.root == null))
{return tcoll__20587;
} else
{var removed_leaf_QMARK___20588 = (new cljs.core.Box(false));
var node__20589 = this__20586.root.inode_without_BANG_(this__20586.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___20588);
if((node__20589 === this__20586.root))
{} else
{this__20586.root = node__20589;
}
if(cljs.core.truth_((removed_leaf_QMARK___20588[0])))
{this__20586.count = (this__20586.count - 1);
} else
{}
return tcoll__20587;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__20590 = this;
var tcoll__20591 = this;
if(this__20590.edit)
{this__20590.edit = null;
return (new cljs.core.PersistentHashMap(null,this__20590.count,this__20590.root,this__20590.has_nil_QMARK_,this__20590.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__20596 = node;
var stack__20597 = stack;
while(true){
if(!((t__20596 == null)))
{{
var G__20598 = ((ascending_QMARK_)?t__20596.left:t__20596.right);
var G__20599 = cljs.core.conj.call(null,stack__20597,t__20596);
t__20596 = G__20598;
stack__20597 = G__20599;
continue;
}
} else
{return stack__20597;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__20600 = this;
var h__2281__auto____20601 = this__20600.__hash;
if(!((h__2281__auto____20601 == null)))
{return h__2281__auto____20601;
} else
{var h__2281__auto____20602 = cljs.core.hash_coll.call(null,coll);
this__20600.__hash = h__2281__auto____20602;
return h__2281__auto____20602;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__20603 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__20604 = this;
var this__20605 = this;
return cljs.core.pr_str.call(null,this__20605);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__20606 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__20607 = this;
if((this__20607.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__20607.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__20608 = this;
return cljs.core.peek.call(null,this__20608.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__20609 = this;
var t__20610 = cljs.core.first.call(null,this__20609.stack);
var next_stack__20611 = cljs.core.tree_map_seq_push.call(null,((this__20609.ascending_QMARK_)?t__20610.right:t__20610.left),cljs.core.next.call(null,this__20609.stack),this__20609.ascending_QMARK_);
if(!((next_stack__20611 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__20611,this__20609.ascending_QMARK_,(this__20609.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20612 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20613 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__20613.stack,this__20613.ascending_QMARK_,this__20613.cnt,this__20613.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20614 = this;
return this__20614.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____20616 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____20616)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____20616;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____20618 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____20618)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____20618;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__20622 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__20622))
{return cljs.core.deref.call(null,init__20622);
} else
{var init__20623 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__20622):init__20622);
if(cljs.core.reduced_QMARK_.call(null,init__20623))
{return cljs.core.deref.call(null,init__20623);
} else
{var init__20624 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__20623):init__20623);
if(cljs.core.reduced_QMARK_.call(null,init__20624))
{return cljs.core.deref.call(null,init__20624);
} else
{return init__20624;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__20627 = this;
var h__2281__auto____20628 = this__20627.__hash;
if(!((h__2281__auto____20628 == null)))
{return h__2281__auto____20628;
} else
{var h__2281__auto____20629 = cljs.core.hash_coll.call(null,coll);
this__20627.__hash = h__2281__auto____20629;
return h__2281__auto____20629;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__20630 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__20631 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__20632 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__20632.key,this__20632.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__20680 = null;
var G__20680__2 = (function (this_sym20633,k){
var this__20635 = this;
var this_sym20633__20636 = this;
var node__20637 = this_sym20633__20636;
return node__20637.cljs$core$ILookup$_lookup$arity$2(node__20637,k);
});
var G__20680__3 = (function (this_sym20634,k,not_found){
var this__20635 = this;
var this_sym20634__20638 = this;
var node__20639 = this_sym20634__20638;
return node__20639.cljs$core$ILookup$_lookup$arity$3(node__20639,k,not_found);
});
G__20680 = function(this_sym20634,k,not_found){
switch(arguments.length){
case 2:
return G__20680__2.call(this,this_sym20634,k);
case 3:
return G__20680__3.call(this,this_sym20634,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20680;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym20625,args20626){
var this__20640 = this;
return this_sym20625.call.apply(this_sym20625,[this_sym20625].concat(args20626.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__20641 = this;
return cljs.core.PersistentVector.fromArray([this__20641.key,this__20641.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__20642 = this;
return this__20642.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__20643 = this;
return this__20643.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__20644 = this;
var node__20645 = this;
return ins.balance_right(node__20645);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__20646 = this;
var node__20647 = this;
return (new cljs.core.RedNode(this__20646.key,this__20646.val,this__20646.left,this__20646.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__20648 = this;
var node__20649 = this;
return cljs.core.balance_right_del.call(null,this__20648.key,this__20648.val,this__20648.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__20650 = this;
var node__20651 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__20652 = this;
var node__20653 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__20653,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__20654 = this;
var node__20655 = this;
return cljs.core.balance_left_del.call(null,this__20654.key,this__20654.val,del,this__20654.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__20656 = this;
var node__20657 = this;
return ins.balance_left(node__20657);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__20658 = this;
var node__20659 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__20659,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__20681 = null;
var G__20681__0 = (function (){
var this__20660 = this;
var this__20662 = this;
return cljs.core.pr_str.call(null,this__20662);
});
G__20681 = function(){
switch(arguments.length){
case 0:
return G__20681__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20681;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__20663 = this;
var node__20664 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__20664,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__20665 = this;
var node__20666 = this;
return node__20666;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__20667 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__20668 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__20669 = this;
return cljs.core.list.call(null,this__20669.key,this__20669.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__20670 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__20671 = this;
return this__20671.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__20672 = this;
return cljs.core.PersistentVector.fromArray([this__20672.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__20673 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__20673.key,this__20673.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20674 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__20675 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__20675.key,this__20675.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__20676 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__20677 = this;
if((n === 0))
{return this__20677.key;
} else
{if((n === 1))
{return this__20677.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__20678 = this;
if((n === 0))
{return this__20678.key;
} else
{if((n === 1))
{return this__20678.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__20679 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__20684 = this;
var h__2281__auto____20685 = this__20684.__hash;
if(!((h__2281__auto____20685 == null)))
{return h__2281__auto____20685;
} else
{var h__2281__auto____20686 = cljs.core.hash_coll.call(null,coll);
this__20684.__hash = h__2281__auto____20686;
return h__2281__auto____20686;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__20687 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__20688 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__20689 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__20689.key,this__20689.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__20737 = null;
var G__20737__2 = (function (this_sym20690,k){
var this__20692 = this;
var this_sym20690__20693 = this;
var node__20694 = this_sym20690__20693;
return node__20694.cljs$core$ILookup$_lookup$arity$2(node__20694,k);
});
var G__20737__3 = (function (this_sym20691,k,not_found){
var this__20692 = this;
var this_sym20691__20695 = this;
var node__20696 = this_sym20691__20695;
return node__20696.cljs$core$ILookup$_lookup$arity$3(node__20696,k,not_found);
});
G__20737 = function(this_sym20691,k,not_found){
switch(arguments.length){
case 2:
return G__20737__2.call(this,this_sym20691,k);
case 3:
return G__20737__3.call(this,this_sym20691,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20737;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym20682,args20683){
var this__20697 = this;
return this_sym20682.call.apply(this_sym20682,[this_sym20682].concat(args20683.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__20698 = this;
return cljs.core.PersistentVector.fromArray([this__20698.key,this__20698.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__20699 = this;
return this__20699.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__20700 = this;
return this__20700.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__20701 = this;
var node__20702 = this;
return (new cljs.core.RedNode(this__20701.key,this__20701.val,this__20701.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__20703 = this;
var node__20704 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__20705 = this;
var node__20706 = this;
return (new cljs.core.RedNode(this__20705.key,this__20705.val,this__20705.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__20707 = this;
var node__20708 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__20709 = this;
var node__20710 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__20710,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__20711 = this;
var node__20712 = this;
return (new cljs.core.RedNode(this__20711.key,this__20711.val,del,this__20711.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__20713 = this;
var node__20714 = this;
return (new cljs.core.RedNode(this__20713.key,this__20713.val,ins,this__20713.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__20715 = this;
var node__20716 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__20715.left))
{return (new cljs.core.RedNode(this__20715.key,this__20715.val,this__20715.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__20715.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__20715.right))
{return (new cljs.core.RedNode(this__20715.right.key,this__20715.right.val,(new cljs.core.BlackNode(this__20715.key,this__20715.val,this__20715.left,this__20715.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__20715.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__20716,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__20738 = null;
var G__20738__0 = (function (){
var this__20717 = this;
var this__20719 = this;
return cljs.core.pr_str.call(null,this__20719);
});
G__20738 = function(){
switch(arguments.length){
case 0:
return G__20738__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20738;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__20720 = this;
var node__20721 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__20720.right))
{return (new cljs.core.RedNode(this__20720.key,this__20720.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__20720.left,null)),this__20720.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__20720.left))
{return (new cljs.core.RedNode(this__20720.left.key,this__20720.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__20720.left.left,null)),(new cljs.core.BlackNode(this__20720.key,this__20720.val,this__20720.left.right,this__20720.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__20721,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__20722 = this;
var node__20723 = this;
return (new cljs.core.BlackNode(this__20722.key,this__20722.val,this__20722.left,this__20722.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__20724 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__20725 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__20726 = this;
return cljs.core.list.call(null,this__20726.key,this__20726.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__20727 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__20728 = this;
return this__20728.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__20729 = this;
return cljs.core.PersistentVector.fromArray([this__20729.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__20730 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__20730.key,this__20730.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20731 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__20732 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__20732.key,this__20732.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__20733 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__20734 = this;
if((n === 0))
{return this__20734.key;
} else
{if((n === 1))
{return this__20734.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__20735 = this;
if((n === 0))
{return this__20735.key;
} else
{if((n === 1))
{return this__20735.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__20736 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__20742 = comp.call(null,k,tree.key);
if((c__20742 === 0))
{(found[0] = tree);
return null;
} else
{if((c__20742 < 0))
{var ins__20743 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__20743 == null)))
{return tree.add_left(ins__20743);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__20744 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__20744 == null)))
{return tree.add_right(ins__20744);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__20747 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__20747))
{return (new cljs.core.RedNode(app__20747.key,app__20747.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__20747.left,null)),(new cljs.core.RedNode(right.key,right.val,app__20747.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__20747,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__20748 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__20748))
{return (new cljs.core.RedNode(app__20748.key,app__20748.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__20748.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__20748.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__20748,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__20754 = comp.call(null,k,tree.key);
if((c__20754 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__20754 < 0))
{var del__20755 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____20756 = !((del__20755 == null));
if(or__3824__auto____20756)
{return or__3824__auto____20756;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__20755,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__20755,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__20757 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____20758 = !((del__20757 == null));
if(or__3824__auto____20758)
{return or__3824__auto____20758;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__20757);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__20757,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__20761 = tree.key;
var c__20762 = comp.call(null,k,tk__20761);
if((c__20762 === 0))
{return tree.replace(tk__20761,v,tree.left,tree.right);
} else
{if((c__20762 < 0))
{return tree.replace(tk__20761,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__20761,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__20765 = this;
var h__2281__auto____20766 = this__20765.__hash;
if(!((h__2281__auto____20766 == null)))
{return h__2281__auto____20766;
} else
{var h__2281__auto____20767 = cljs.core.hash_imap.call(null,coll);
this__20765.__hash = h__2281__auto____20767;
return h__2281__auto____20767;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__20768 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__20769 = this;
var n__20770 = coll.entry_at(k);
if(!((n__20770 == null)))
{return n__20770.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__20771 = this;
var found__20772 = [null];
var t__20773 = cljs.core.tree_map_add.call(null,this__20771.comp,this__20771.tree,k,v,found__20772);
if((t__20773 == null))
{var found_node__20774 = cljs.core.nth.call(null,found__20772,0);
if(cljs.core._EQ_.call(null,v,found_node__20774.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__20771.comp,cljs.core.tree_map_replace.call(null,this__20771.comp,this__20771.tree,k,v),this__20771.cnt,this__20771.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__20771.comp,t__20773.blacken(),(this__20771.cnt + 1),this__20771.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__20775 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__20809 = null;
var G__20809__2 = (function (this_sym20776,k){
var this__20778 = this;
var this_sym20776__20779 = this;
var coll__20780 = this_sym20776__20779;
return coll__20780.cljs$core$ILookup$_lookup$arity$2(coll__20780,k);
});
var G__20809__3 = (function (this_sym20777,k,not_found){
var this__20778 = this;
var this_sym20777__20781 = this;
var coll__20782 = this_sym20777__20781;
return coll__20782.cljs$core$ILookup$_lookup$arity$3(coll__20782,k,not_found);
});
G__20809 = function(this_sym20777,k,not_found){
switch(arguments.length){
case 2:
return G__20809__2.call(this,this_sym20777,k);
case 3:
return G__20809__3.call(this,this_sym20777,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20809;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym20763,args20764){
var this__20783 = this;
return this_sym20763.call.apply(this_sym20763,[this_sym20763].concat(args20764.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__20784 = this;
if(!((this__20784.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__20784.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__20785 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__20786 = this;
if((this__20786.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__20786.tree,false,this__20786.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__20787 = this;
var this__20788 = this;
return cljs.core.pr_str.call(null,this__20788);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__20789 = this;
var coll__20790 = this;
var t__20791 = this__20789.tree;
while(true){
if(!((t__20791 == null)))
{var c__20792 = this__20789.comp.call(null,k,t__20791.key);
if((c__20792 === 0))
{return t__20791;
} else
{if((c__20792 < 0))
{{
var G__20810 = t__20791.left;
t__20791 = G__20810;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__20811 = t__20791.right;
t__20791 = G__20811;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__20793 = this;
if((this__20793.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__20793.tree,ascending_QMARK_,this__20793.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__20794 = this;
if((this__20794.cnt > 0))
{var stack__20795 = null;
var t__20796 = this__20794.tree;
while(true){
if(!((t__20796 == null)))
{var c__20797 = this__20794.comp.call(null,k,t__20796.key);
if((c__20797 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__20795,t__20796),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__20797 < 0))
{{
var G__20812 = cljs.core.conj.call(null,stack__20795,t__20796);
var G__20813 = t__20796.left;
stack__20795 = G__20812;
t__20796 = G__20813;
continue;
}
} else
{{
var G__20814 = stack__20795;
var G__20815 = t__20796.right;
stack__20795 = G__20814;
t__20796 = G__20815;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__20797 > 0))
{{
var G__20816 = cljs.core.conj.call(null,stack__20795,t__20796);
var G__20817 = t__20796.right;
stack__20795 = G__20816;
t__20796 = G__20817;
continue;
}
} else
{{
var G__20818 = stack__20795;
var G__20819 = t__20796.left;
stack__20795 = G__20818;
t__20796 = G__20819;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__20795 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__20795,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__20798 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__20799 = this;
return this__20799.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__20800 = this;
if((this__20800.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__20800.tree,true,this__20800.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__20801 = this;
return this__20801.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20802 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20803 = this;
return (new cljs.core.PersistentTreeMap(this__20803.comp,this__20803.tree,this__20803.cnt,meta,this__20803.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20804 = this;
return this__20804.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20805 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__20805.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__20806 = this;
var found__20807 = [null];
var t__20808 = cljs.core.tree_map_remove.call(null,this__20806.comp,this__20806.tree,k,found__20807);
if((t__20808 == null))
{if((cljs.core.nth.call(null,found__20807,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__20806.comp,null,0,this__20806.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__20806.comp,t__20808.blacken(),(this__20806.cnt - 1),this__20806.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__20822 = cljs.core.seq.call(null,keyvals);
var out__20823 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__20822)
{{
var G__20824 = cljs.core.nnext.call(null,in__20822);
var G__20825 = cljs.core.assoc_BANG_.call(null,out__20823,cljs.core.first.call(null,in__20822),cljs.core.second.call(null,in__20822));
in__20822 = G__20824;
out__20823 = G__20825;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__20823);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__20826){
var keyvals = cljs.core.seq(arglist__20826);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__20827){
var keyvals = cljs.core.seq(arglist__20827);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__20831 = [];
var obj__20832 = {};
var kvs__20833 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__20833)
{ks__20831.push(cljs.core.first.call(null,kvs__20833));
(obj__20832[cljs.core.first.call(null,kvs__20833)] = cljs.core.second.call(null,kvs__20833));
{
var G__20834 = cljs.core.nnext.call(null,kvs__20833);
kvs__20833 = G__20834;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__20831,obj__20832);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__20835){
var keyvals = cljs.core.seq(arglist__20835);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__20838 = cljs.core.seq.call(null,keyvals);
var out__20839 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__20838)
{{
var G__20840 = cljs.core.nnext.call(null,in__20838);
var G__20841 = cljs.core.assoc.call(null,out__20839,cljs.core.first.call(null,in__20838),cljs.core.second.call(null,in__20838));
in__20838 = G__20840;
out__20839 = G__20841;
continue;
}
} else
{return out__20839;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__20842){
var keyvals = cljs.core.seq(arglist__20842);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__20845 = cljs.core.seq.call(null,keyvals);
var out__20846 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__20845)
{{
var G__20847 = cljs.core.nnext.call(null,in__20845);
var G__20848 = cljs.core.assoc.call(null,out__20846,cljs.core.first.call(null,in__20845),cljs.core.second.call(null,in__20845));
in__20845 = G__20847;
out__20846 = G__20848;
continue;
}
} else
{return out__20846;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__20849){
var comparator = cljs.core.first(arglist__20849);
var keyvals = cljs.core.rest(arglist__20849);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__20850_SHARP_,p2__20851_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____20853 = p1__20850_SHARP_;
if(cljs.core.truth_(or__3824__auto____20853))
{return or__3824__auto____20853;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__20851_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__20854){
var maps = cljs.core.seq(arglist__20854);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__20862 = (function (m,e){
var k__20860 = cljs.core.first.call(null,e);
var v__20861 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__20860))
{return cljs.core.assoc.call(null,m,k__20860,f.call(null,cljs.core._lookup.call(null,m,k__20860,null),v__20861));
} else
{return cljs.core.assoc.call(null,m,k__20860,v__20861);
}
});
var merge2__20864 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__20862,(function (){var or__3824__auto____20863 = m1;
if(cljs.core.truth_(or__3824__auto____20863))
{return or__3824__auto____20863;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__20864,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__20865){
var f = cljs.core.first(arglist__20865);
var maps = cljs.core.rest(arglist__20865);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__20870 = cljs.core.ObjMap.EMPTY;
var keys__20871 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__20871)
{var key__20872 = cljs.core.first.call(null,keys__20871);
var entry__20873 = cljs.core._lookup.call(null,map,key__20872,"\uFDD0'cljs.core/not-found");
{
var G__20874 = ((cljs.core.not_EQ_.call(null,entry__20873,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__20870,key__20872,entry__20873):ret__20870);
var G__20875 = cljs.core.next.call(null,keys__20871);
ret__20870 = G__20874;
keys__20871 = G__20875;
continue;
}
} else
{return ret__20870;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__20879 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__20879.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__20880 = this;
var h__2281__auto____20881 = this__20880.__hash;
if(!((h__2281__auto____20881 == null)))
{return h__2281__auto____20881;
} else
{var h__2281__auto____20882 = cljs.core.hash_iset.call(null,coll);
this__20880.__hash = h__2281__auto____20882;
return h__2281__auto____20882;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__20883 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__20884 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__20884.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__20905 = null;
var G__20905__2 = (function (this_sym20885,k){
var this__20887 = this;
var this_sym20885__20888 = this;
var coll__20889 = this_sym20885__20888;
return coll__20889.cljs$core$ILookup$_lookup$arity$2(coll__20889,k);
});
var G__20905__3 = (function (this_sym20886,k,not_found){
var this__20887 = this;
var this_sym20886__20890 = this;
var coll__20891 = this_sym20886__20890;
return coll__20891.cljs$core$ILookup$_lookup$arity$3(coll__20891,k,not_found);
});
G__20905 = function(this_sym20886,k,not_found){
switch(arguments.length){
case 2:
return G__20905__2.call(this,this_sym20886,k);
case 3:
return G__20905__3.call(this,this_sym20886,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20905;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym20877,args20878){
var this__20892 = this;
return this_sym20877.call.apply(this_sym20877,[this_sym20877].concat(args20878.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__20893 = this;
return (new cljs.core.PersistentHashSet(this__20893.meta,cljs.core.assoc.call(null,this__20893.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__20894 = this;
var this__20895 = this;
return cljs.core.pr_str.call(null,this__20895);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__20896 = this;
return cljs.core.keys.call(null,this__20896.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__20897 = this;
return (new cljs.core.PersistentHashSet(this__20897.meta,cljs.core.dissoc.call(null,this__20897.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__20898 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20899 = this;
var and__3822__auto____20900 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____20900)
{var and__3822__auto____20901 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____20901)
{return cljs.core.every_QMARK_.call(null,(function (p1__20876_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__20876_SHARP_);
}),other);
} else
{return and__3822__auto____20901;
}
} else
{return and__3822__auto____20900;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20902 = this;
return (new cljs.core.PersistentHashSet(meta,this__20902.hash_map,this__20902.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20903 = this;
return this__20903.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20904 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__20904.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__20906 = cljs.core.count.call(null,items);
var i__20907 = 0;
var out__20908 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__20907 < len__20906))
{{
var G__20909 = (i__20907 + 1);
var G__20910 = cljs.core.conj_BANG_.call(null,out__20908,(items[i__20907]));
i__20907 = G__20909;
out__20908 = G__20910;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__20908);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__20928 = null;
var G__20928__2 = (function (this_sym20914,k){
var this__20916 = this;
var this_sym20914__20917 = this;
var tcoll__20918 = this_sym20914__20917;
if((cljs.core._lookup.call(null,this__20916.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__20928__3 = (function (this_sym20915,k,not_found){
var this__20916 = this;
var this_sym20915__20919 = this;
var tcoll__20920 = this_sym20915__20919;
if((cljs.core._lookup.call(null,this__20916.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__20928 = function(this_sym20915,k,not_found){
switch(arguments.length){
case 2:
return G__20928__2.call(this,this_sym20915,k);
case 3:
return G__20928__3.call(this,this_sym20915,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20928;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym20912,args20913){
var this__20921 = this;
return this_sym20912.call.apply(this_sym20912,[this_sym20912].concat(args20913.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__20922 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__20923 = this;
if((cljs.core._lookup.call(null,this__20923.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__20924 = this;
return cljs.core.count.call(null,this__20924.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__20925 = this;
this__20925.transient_map = cljs.core.dissoc_BANG_.call(null,this__20925.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__20926 = this;
this__20926.transient_map = cljs.core.assoc_BANG_.call(null,this__20926.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__20927 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__20927.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__20931 = this;
var h__2281__auto____20932 = this__20931.__hash;
if(!((h__2281__auto____20932 == null)))
{return h__2281__auto____20932;
} else
{var h__2281__auto____20933 = cljs.core.hash_iset.call(null,coll);
this__20931.__hash = h__2281__auto____20933;
return h__2281__auto____20933;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__20934 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__20935 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__20935.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__20961 = null;
var G__20961__2 = (function (this_sym20936,k){
var this__20938 = this;
var this_sym20936__20939 = this;
var coll__20940 = this_sym20936__20939;
return coll__20940.cljs$core$ILookup$_lookup$arity$2(coll__20940,k);
});
var G__20961__3 = (function (this_sym20937,k,not_found){
var this__20938 = this;
var this_sym20937__20941 = this;
var coll__20942 = this_sym20937__20941;
return coll__20942.cljs$core$ILookup$_lookup$arity$3(coll__20942,k,not_found);
});
G__20961 = function(this_sym20937,k,not_found){
switch(arguments.length){
case 2:
return G__20961__2.call(this,this_sym20937,k);
case 3:
return G__20961__3.call(this,this_sym20937,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20961;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym20929,args20930){
var this__20943 = this;
return this_sym20929.call.apply(this_sym20929,[this_sym20929].concat(args20930.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__20944 = this;
return (new cljs.core.PersistentTreeSet(this__20944.meta,cljs.core.assoc.call(null,this__20944.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__20945 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__20945.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__20946 = this;
var this__20947 = this;
return cljs.core.pr_str.call(null,this__20947);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__20948 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__20948.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__20949 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__20949.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__20950 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__20951 = this;
return cljs.core._comparator.call(null,this__20951.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__20952 = this;
return cljs.core.keys.call(null,this__20952.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__20953 = this;
return (new cljs.core.PersistentTreeSet(this__20953.meta,cljs.core.dissoc.call(null,this__20953.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__20954 = this;
return cljs.core.count.call(null,this__20954.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__20955 = this;
var and__3822__auto____20956 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____20956)
{var and__3822__auto____20957 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____20957)
{return cljs.core.every_QMARK_.call(null,(function (p1__20911_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__20911_SHARP_);
}),other);
} else
{return and__3822__auto____20957;
}
} else
{return and__3822__auto____20956;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__20958 = this;
return (new cljs.core.PersistentTreeSet(meta,this__20958.tree_map,this__20958.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__20959 = this;
return this__20959.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__20960 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__20960.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__20966__delegate = function (keys){
var in__20964 = cljs.core.seq.call(null,keys);
var out__20965 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__20964))
{{
var G__20967 = cljs.core.next.call(null,in__20964);
var G__20968 = cljs.core.conj_BANG_.call(null,out__20965,cljs.core.first.call(null,in__20964));
in__20964 = G__20967;
out__20965 = G__20968;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__20965);
}
break;
}
};
var G__20966 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__20966__delegate.call(this, keys);
};
G__20966.cljs$lang$maxFixedArity = 0;
G__20966.cljs$lang$applyTo = (function (arglist__20969){
var keys = cljs.core.seq(arglist__20969);;
return G__20966__delegate(keys);
});
G__20966.cljs$lang$arity$variadic = G__20966__delegate;
return G__20966;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.call(null,cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__20970){
var keys = cljs.core.seq(arglist__20970);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__20972){
var comparator = cljs.core.first(arglist__20972);
var keys = cljs.core.rest(arglist__20972);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__20978 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____20979 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____20979))
{var e__20980 = temp__3971__auto____20979;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__20980));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__20978,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__20971_SHARP_){
var temp__3971__auto____20981 = cljs.core.find.call(null,smap,p1__20971_SHARP_);
if(cljs.core.truth_(temp__3971__auto____20981))
{var e__20982 = temp__3971__auto____20981;
return cljs.core.second.call(null,e__20982);
} else
{return p1__20971_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__21012 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__21005,seen){
while(true){
var vec__21006__21007 = p__21005;
var f__21008 = cljs.core.nth.call(null,vec__21006__21007,0,null);
var xs__21009 = vec__21006__21007;
var temp__3974__auto____21010 = cljs.core.seq.call(null,xs__21009);
if(temp__3974__auto____21010)
{var s__21011 = temp__3974__auto____21010;
if(cljs.core.contains_QMARK_.call(null,seen,f__21008))
{{
var G__21013 = cljs.core.rest.call(null,s__21011);
var G__21014 = seen;
p__21005 = G__21013;
seen = G__21014;
continue;
}
} else
{return cljs.core.cons.call(null,f__21008,step.call(null,cljs.core.rest.call(null,s__21011),cljs.core.conj.call(null,seen,f__21008)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__21012.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__21017 = cljs.core.PersistentVector.EMPTY;
var s__21018 = s;
while(true){
if(cljs.core.next.call(null,s__21018))
{{
var G__21019 = cljs.core.conj.call(null,ret__21017,cljs.core.first.call(null,s__21018));
var G__21020 = cljs.core.next.call(null,s__21018);
ret__21017 = G__21019;
s__21018 = G__21020;
continue;
}
} else
{return cljs.core.seq.call(null,ret__21017);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____21023 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____21023)
{return or__3824__auto____21023;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__21024 = x.lastIndexOf("/");
if((i__21024 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__21024 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____21027 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____21027)
{return or__3824__auto____21027;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__21028 = x.lastIndexOf("/");
if((i__21028 > -1))
{return cljs.core.subs.call(null,x,2,i__21028);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__21035 = cljs.core.ObjMap.EMPTY;
var ks__21036 = cljs.core.seq.call(null,keys);
var vs__21037 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____21038 = ks__21036;
if(and__3822__auto____21038)
{return vs__21037;
} else
{return and__3822__auto____21038;
}
})())
{{
var G__21039 = cljs.core.assoc.call(null,map__21035,cljs.core.first.call(null,ks__21036),cljs.core.first.call(null,vs__21037));
var G__21040 = cljs.core.next.call(null,ks__21036);
var G__21041 = cljs.core.next.call(null,vs__21037);
map__21035 = G__21039;
ks__21036 = G__21040;
vs__21037 = G__21041;
continue;
}
} else
{return map__21035;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__21044__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__21029_SHARP_,p2__21030_SHARP_){
return max_key.call(null,k,p1__21029_SHARP_,p2__21030_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__21044 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21044__delegate.call(this, k, x, y, more);
};
G__21044.cljs$lang$maxFixedArity = 3;
G__21044.cljs$lang$applyTo = (function (arglist__21045){
var k = cljs.core.first(arglist__21045);
var x = cljs.core.first(cljs.core.next(arglist__21045));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__21045)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__21045)));
return G__21044__delegate(k, x, y, more);
});
G__21044.cljs$lang$arity$variadic = G__21044__delegate;
return G__21044;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__21046__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__21042_SHARP_,p2__21043_SHARP_){
return min_key.call(null,k,p1__21042_SHARP_,p2__21043_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__21046 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21046__delegate.call(this, k, x, y, more);
};
G__21046.cljs$lang$maxFixedArity = 3;
G__21046.cljs$lang$applyTo = (function (arglist__21047){
var k = cljs.core.first(arglist__21047);
var x = cljs.core.first(cljs.core.next(arglist__21047));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__21047)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__21047)));
return G__21046__delegate(k, x, y, more);
});
G__21046.cljs$lang$arity$variadic = G__21046__delegate;
return G__21046;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____21050 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____21050)
{var s__21051 = temp__3974__auto____21050;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__21051),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__21051)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____21054 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____21054)
{var s__21055 = temp__3974__auto____21054;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__21055))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__21055),take_while.call(null,pred,cljs.core.rest.call(null,s__21055)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__21057 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__21057.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__21069 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____21070 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____21070))
{var vec__21071__21072 = temp__3974__auto____21070;
var e__21073 = cljs.core.nth.call(null,vec__21071__21072,0,null);
var s__21074 = vec__21071__21072;
if(cljs.core.truth_(include__21069.call(null,e__21073)))
{return s__21074;
} else
{return cljs.core.next.call(null,s__21074);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__21069,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____21075 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____21075))
{var vec__21076__21077 = temp__3974__auto____21075;
var e__21078 = cljs.core.nth.call(null,vec__21076__21077,0,null);
var s__21079 = vec__21076__21077;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__21078))?s__21079:cljs.core.next.call(null,s__21079)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__21091 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____21092 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____21092))
{var vec__21093__21094 = temp__3974__auto____21092;
var e__21095 = cljs.core.nth.call(null,vec__21093__21094,0,null);
var s__21096 = vec__21093__21094;
if(cljs.core.truth_(include__21091.call(null,e__21095)))
{return s__21096;
} else
{return cljs.core.next.call(null,s__21096);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__21091,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____21097 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____21097))
{var vec__21098__21099 = temp__3974__auto____21097;
var e__21100 = cljs.core.nth.call(null,vec__21098__21099,0,null);
var s__21101 = vec__21098__21099;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__21100))?s__21101:cljs.core.next.call(null,s__21101)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__21102 = this;
var h__2281__auto____21103 = this__21102.__hash;
if(!((h__2281__auto____21103 == null)))
{return h__2281__auto____21103;
} else
{var h__2281__auto____21104 = cljs.core.hash_coll.call(null,rng);
this__21102.__hash = h__2281__auto____21104;
return h__2281__auto____21104;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__21105 = this;
if((this__21105.step > 0))
{if(((this__21105.start + this__21105.step) < this__21105.end))
{return (new cljs.core.Range(this__21105.meta,(this__21105.start + this__21105.step),this__21105.end,this__21105.step,null));
} else
{return null;
}
} else
{if(((this__21105.start + this__21105.step) > this__21105.end))
{return (new cljs.core.Range(this__21105.meta,(this__21105.start + this__21105.step),this__21105.end,this__21105.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__21106 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__21107 = this;
var this__21108 = this;
return cljs.core.pr_str.call(null,this__21108);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__21109 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__21110 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__21111 = this;
if((this__21111.step > 0))
{if((this__21111.start < this__21111.end))
{return rng;
} else
{return null;
}
} else
{if((this__21111.start > this__21111.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__21112 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__21112.end - this__21112.start) / this__21112.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__21113 = this;
return this__21113.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__21114 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__21114.meta,(this__21114.start + this__21114.step),this__21114.end,this__21114.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__21115 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__21116 = this;
return (new cljs.core.Range(meta,this__21116.start,this__21116.end,this__21116.step,this__21116.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__21117 = this;
return this__21117.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__21118 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__21118.start + (n * this__21118.step));
} else
{if((function (){var and__3822__auto____21119 = (this__21118.start > this__21118.end);
if(and__3822__auto____21119)
{return (this__21118.step === 0);
} else
{return and__3822__auto____21119;
}
})())
{return this__21118.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__21120 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__21120.start + (n * this__21120.step));
} else
{if((function (){var and__3822__auto____21121 = (this__21120.start > this__21120.end);
if(and__3822__auto____21121)
{return (this__21120.step === 0);
} else
{return and__3822__auto____21121;
}
})())
{return this__21120.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__21122 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__21122.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____21125 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____21125)
{var s__21126 = temp__3974__auto____21125;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__21126),take_nth.call(null,n,cljs.core.drop.call(null,n,s__21126)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____21133 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____21133)
{var s__21134 = temp__3974__auto____21133;
var fst__21135 = cljs.core.first.call(null,s__21134);
var fv__21136 = f.call(null,fst__21135);
var run__21137 = cljs.core.cons.call(null,fst__21135,cljs.core.take_while.call(null,(function (p1__21127_SHARP_){
return cljs.core._EQ_.call(null,fv__21136,f.call(null,p1__21127_SHARP_));
}),cljs.core.next.call(null,s__21134)));
return cljs.core.cons.call(null,run__21137,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__21137),s__21134))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____21152 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____21152)
{var s__21153 = temp__3971__auto____21152;
return reductions.call(null,f,cljs.core.first.call(null,s__21153),cljs.core.rest.call(null,s__21153));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____21154 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____21154)
{var s__21155 = temp__3974__auto____21154;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__21155)),cljs.core.rest.call(null,s__21155));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__21158 = null;
var G__21158__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__21158__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__21158__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__21158__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__21158__4 = (function() { 
var G__21159__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__21159 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21159__delegate.call(this, x, y, z, args);
};
G__21159.cljs$lang$maxFixedArity = 3;
G__21159.cljs$lang$applyTo = (function (arglist__21160){
var x = cljs.core.first(arglist__21160);
var y = cljs.core.first(cljs.core.next(arglist__21160));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__21160)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__21160)));
return G__21159__delegate(x, y, z, args);
});
G__21159.cljs$lang$arity$variadic = G__21159__delegate;
return G__21159;
})()
;
G__21158 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__21158__0.call(this);
case 1:
return G__21158__1.call(this,x);
case 2:
return G__21158__2.call(this,x,y);
case 3:
return G__21158__3.call(this,x,y,z);
default:
return G__21158__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__21158.cljs$lang$maxFixedArity = 3;
G__21158.cljs$lang$applyTo = G__21158__4.cljs$lang$applyTo;
return G__21158;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__21161 = null;
var G__21161__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__21161__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__21161__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__21161__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__21161__4 = (function() { 
var G__21162__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__21162 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21162__delegate.call(this, x, y, z, args);
};
G__21162.cljs$lang$maxFixedArity = 3;
G__21162.cljs$lang$applyTo = (function (arglist__21163){
var x = cljs.core.first(arglist__21163);
var y = cljs.core.first(cljs.core.next(arglist__21163));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__21163)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__21163)));
return G__21162__delegate(x, y, z, args);
});
G__21162.cljs$lang$arity$variadic = G__21162__delegate;
return G__21162;
})()
;
G__21161 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__21161__0.call(this);
case 1:
return G__21161__1.call(this,x);
case 2:
return G__21161__2.call(this,x,y);
case 3:
return G__21161__3.call(this,x,y,z);
default:
return G__21161__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__21161.cljs$lang$maxFixedArity = 3;
G__21161.cljs$lang$applyTo = G__21161__4.cljs$lang$applyTo;
return G__21161;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__21164 = null;
var G__21164__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__21164__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__21164__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__21164__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__21164__4 = (function() { 
var G__21165__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__21165 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21165__delegate.call(this, x, y, z, args);
};
G__21165.cljs$lang$maxFixedArity = 3;
G__21165.cljs$lang$applyTo = (function (arglist__21166){
var x = cljs.core.first(arglist__21166);
var y = cljs.core.first(cljs.core.next(arglist__21166));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__21166)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__21166)));
return G__21165__delegate(x, y, z, args);
});
G__21165.cljs$lang$arity$variadic = G__21165__delegate;
return G__21165;
})()
;
G__21164 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__21164__0.call(this);
case 1:
return G__21164__1.call(this,x);
case 2:
return G__21164__2.call(this,x,y);
case 3:
return G__21164__3.call(this,x,y,z);
default:
return G__21164__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__21164.cljs$lang$maxFixedArity = 3;
G__21164.cljs$lang$applyTo = G__21164__4.cljs$lang$applyTo;
return G__21164;
})()
});
var juxt__4 = (function() { 
var G__21167__delegate = function (f,g,h,fs){
var fs__21157 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__21168 = null;
var G__21168__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__21138_SHARP_,p2__21139_SHARP_){
return cljs.core.conj.call(null,p1__21138_SHARP_,p2__21139_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__21157);
});
var G__21168__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__21140_SHARP_,p2__21141_SHARP_){
return cljs.core.conj.call(null,p1__21140_SHARP_,p2__21141_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__21157);
});
var G__21168__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__21142_SHARP_,p2__21143_SHARP_){
return cljs.core.conj.call(null,p1__21142_SHARP_,p2__21143_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__21157);
});
var G__21168__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__21144_SHARP_,p2__21145_SHARP_){
return cljs.core.conj.call(null,p1__21144_SHARP_,p2__21145_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__21157);
});
var G__21168__4 = (function() { 
var G__21169__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__21146_SHARP_,p2__21147_SHARP_){
return cljs.core.conj.call(null,p1__21146_SHARP_,cljs.core.apply.call(null,p2__21147_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__21157);
};
var G__21169 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21169__delegate.call(this, x, y, z, args);
};
G__21169.cljs$lang$maxFixedArity = 3;
G__21169.cljs$lang$applyTo = (function (arglist__21170){
var x = cljs.core.first(arglist__21170);
var y = cljs.core.first(cljs.core.next(arglist__21170));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__21170)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__21170)));
return G__21169__delegate(x, y, z, args);
});
G__21169.cljs$lang$arity$variadic = G__21169__delegate;
return G__21169;
})()
;
G__21168 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__21168__0.call(this);
case 1:
return G__21168__1.call(this,x);
case 2:
return G__21168__2.call(this,x,y);
case 3:
return G__21168__3.call(this,x,y,z);
default:
return G__21168__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__21168.cljs$lang$maxFixedArity = 3;
G__21168.cljs$lang$applyTo = G__21168__4.cljs$lang$applyTo;
return G__21168;
})()
};
var G__21167 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__21167__delegate.call(this, f, g, h, fs);
};
G__21167.cljs$lang$maxFixedArity = 3;
G__21167.cljs$lang$applyTo = (function (arglist__21171){
var f = cljs.core.first(arglist__21171);
var g = cljs.core.first(cljs.core.next(arglist__21171));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__21171)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__21171)));
return G__21167__delegate(f, g, h, fs);
});
G__21167.cljs$lang$arity$variadic = G__21167__delegate;
return G__21167;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__21174 = cljs.core.next.call(null,coll);
coll = G__21174;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____21173 = cljs.core.seq.call(null,coll);
if(and__3822__auto____21173)
{return (n > 0);
} else
{return and__3822__auto____21173;
}
})()))
{{
var G__21175 = (n - 1);
var G__21176 = cljs.core.next.call(null,coll);
n = G__21175;
coll = G__21176;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__21178 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__21178),s))
{if((cljs.core.count.call(null,matches__21178) === 1))
{return cljs.core.first.call(null,matches__21178);
} else
{return cljs.core.vec.call(null,matches__21178);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__21180 = re.exec(s);
if((matches__21180 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__21180) === 1))
{return cljs.core.first.call(null,matches__21180);
} else
{return cljs.core.vec.call(null,matches__21180);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__21185 = cljs.core.re_find.call(null,re,s);
var match_idx__21186 = s.search(re);
var match_str__21187 = ((cljs.core.coll_QMARK_.call(null,match_data__21185))?cljs.core.first.call(null,match_data__21185):match_data__21185);
var post_match__21188 = cljs.core.subs.call(null,s,(match_idx__21186 + cljs.core.count.call(null,match_str__21187)));
if(cljs.core.truth_(match_data__21185))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__21185,re_seq.call(null,re,post_match__21188));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__21195__21196 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___21197 = cljs.core.nth.call(null,vec__21195__21196,0,null);
var flags__21198 = cljs.core.nth.call(null,vec__21195__21196,1,null);
var pattern__21199 = cljs.core.nth.call(null,vec__21195__21196,2,null);
return (new RegExp(pattern__21199,flags__21198));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__21189_SHARP_){
return print_one.call(null,p1__21189_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____21209 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____21209))
{var and__3822__auto____21213 = (function (){var G__21210__21211 = obj;
if(G__21210__21211)
{if((function (){var or__3824__auto____21212 = (G__21210__21211.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____21212)
{return or__3824__auto____21212;
} else
{return G__21210__21211.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__21210__21211.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__21210__21211);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__21210__21211);
}
})();
if(cljs.core.truth_(and__3822__auto____21213))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____21213;
}
} else
{return and__3822__auto____21209;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____21214 = !((obj == null));
if(and__3822__auto____21214)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____21214;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__21215__21216 = obj;
if(G__21215__21216)
{if((function (){var or__3824__auto____21217 = (G__21215__21216.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____21217)
{return or__3824__auto____21217;
} else
{return G__21215__21216.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__21215__21216.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__21215__21216);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__21215__21216);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__21237 = (new goog.string.StringBuffer());
var G__21238__21239 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__21238__21239)
{var string__21240 = cljs.core.first.call(null,G__21238__21239);
var G__21238__21241 = G__21238__21239;
while(true){
sb__21237.append(string__21240);
var temp__3974__auto____21242 = cljs.core.next.call(null,G__21238__21241);
if(temp__3974__auto____21242)
{var G__21238__21243 = temp__3974__auto____21242;
{
var G__21256 = cljs.core.first.call(null,G__21238__21243);
var G__21257 = G__21238__21243;
string__21240 = G__21256;
G__21238__21241 = G__21257;
continue;
}
} else
{}
break;
}
} else
{}
var G__21244__21245 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__21244__21245)
{var obj__21246 = cljs.core.first.call(null,G__21244__21245);
var G__21244__21247 = G__21244__21245;
while(true){
sb__21237.append(" ");
var G__21248__21249 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__21246,opts));
if(G__21248__21249)
{var string__21250 = cljs.core.first.call(null,G__21248__21249);
var G__21248__21251 = G__21248__21249;
while(true){
sb__21237.append(string__21250);
var temp__3974__auto____21252 = cljs.core.next.call(null,G__21248__21251);
if(temp__3974__auto____21252)
{var G__21248__21253 = temp__3974__auto____21252;
{
var G__21258 = cljs.core.first.call(null,G__21248__21253);
var G__21259 = G__21248__21253;
string__21250 = G__21258;
G__21248__21251 = G__21259;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____21254 = cljs.core.next.call(null,G__21244__21247);
if(temp__3974__auto____21254)
{var G__21244__21255 = temp__3974__auto____21254;
{
var G__21260 = cljs.core.first.call(null,G__21244__21255);
var G__21261 = G__21244__21255;
obj__21246 = G__21260;
G__21244__21247 = G__21261;
continue;
}
} else
{}
break;
}
} else
{}
return sb__21237;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__21263 = cljs.core.pr_sb.call(null,objs,opts);
sb__21263.append("\n");
return [cljs.core.str(sb__21263)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__21282__21283 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__21282__21283)
{var string__21284 = cljs.core.first.call(null,G__21282__21283);
var G__21282__21285 = G__21282__21283;
while(true){
cljs.core.string_print.call(null,string__21284);
var temp__3974__auto____21286 = cljs.core.next.call(null,G__21282__21285);
if(temp__3974__auto____21286)
{var G__21282__21287 = temp__3974__auto____21286;
{
var G__21300 = cljs.core.first.call(null,G__21282__21287);
var G__21301 = G__21282__21287;
string__21284 = G__21300;
G__21282__21285 = G__21301;
continue;
}
} else
{}
break;
}
} else
{}
var G__21288__21289 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__21288__21289)
{var obj__21290 = cljs.core.first.call(null,G__21288__21289);
var G__21288__21291 = G__21288__21289;
while(true){
cljs.core.string_print.call(null," ");
var G__21292__21293 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__21290,opts));
if(G__21292__21293)
{var string__21294 = cljs.core.first.call(null,G__21292__21293);
var G__21292__21295 = G__21292__21293;
while(true){
cljs.core.string_print.call(null,string__21294);
var temp__3974__auto____21296 = cljs.core.next.call(null,G__21292__21295);
if(temp__3974__auto____21296)
{var G__21292__21297 = temp__3974__auto____21296;
{
var G__21302 = cljs.core.first.call(null,G__21292__21297);
var G__21303 = G__21292__21297;
string__21294 = G__21302;
G__21292__21295 = G__21303;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____21298 = cljs.core.next.call(null,G__21288__21291);
if(temp__3974__auto____21298)
{var G__21288__21299 = temp__3974__auto____21298;
{
var G__21304 = cljs.core.first.call(null,G__21288__21299);
var G__21305 = G__21288__21299;
obj__21290 = G__21304;
G__21288__21291 = G__21305;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__21306){
var objs = cljs.core.seq(arglist__21306);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__21307){
var objs = cljs.core.seq(arglist__21307);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__21308){
var objs = cljs.core.seq(arglist__21308);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__21309){
var objs = cljs.core.seq(arglist__21309);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__21310){
var objs = cljs.core.seq(arglist__21310);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__21311){
var objs = cljs.core.seq(arglist__21311);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__21312){
var objs = cljs.core.seq(arglist__21312);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__21313){
var objs = cljs.core.seq(arglist__21313);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__21314){
var fmt = cljs.core.first(arglist__21314);
var args = cljs.core.rest(arglist__21314);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__21315 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__21315,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__21316 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__21316,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__21317 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__21317,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____21318 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____21318))
{var nspc__21319 = temp__3974__auto____21318;
return [cljs.core.str(nspc__21319),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____21320 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____21320))
{var nspc__21321 = temp__3974__auto____21320;
return [cljs.core.str(nspc__21321),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__21322 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__21322,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__21324 = (function (n,len){
var ns__21323 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__21323) < len))
{{
var G__21326 = [cljs.core.str("0"),cljs.core.str(ns__21323)].join('');
ns__21323 = G__21326;
continue;
}
} else
{return ns__21323;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__21324.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__21324.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__21324.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__21324.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__21324.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__21324.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__21325 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__21325,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__21327 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__21328 = this;
var G__21329__21330 = cljs.core.seq.call(null,this__21328.watches);
if(G__21329__21330)
{var G__21332__21334 = cljs.core.first.call(null,G__21329__21330);
var vec__21333__21335 = G__21332__21334;
var key__21336 = cljs.core.nth.call(null,vec__21333__21335,0,null);
var f__21337 = cljs.core.nth.call(null,vec__21333__21335,1,null);
var G__21329__21338 = G__21329__21330;
var G__21332__21339 = G__21332__21334;
var G__21329__21340 = G__21329__21338;
while(true){
var vec__21341__21342 = G__21332__21339;
var key__21343 = cljs.core.nth.call(null,vec__21341__21342,0,null);
var f__21344 = cljs.core.nth.call(null,vec__21341__21342,1,null);
var G__21329__21345 = G__21329__21340;
f__21344.call(null,key__21343,this$,oldval,newval);
var temp__3974__auto____21346 = cljs.core.next.call(null,G__21329__21345);
if(temp__3974__auto____21346)
{var G__21329__21347 = temp__3974__auto____21346;
{
var G__21354 = cljs.core.first.call(null,G__21329__21347);
var G__21355 = G__21329__21347;
G__21332__21339 = G__21354;
G__21329__21340 = G__21355;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__21348 = this;
return this$.watches = cljs.core.assoc.call(null,this__21348.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__21349 = this;
return this$.watches = cljs.core.dissoc.call(null,this__21349.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__21350 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__21350.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__21351 = this;
return this__21351.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__21352 = this;
return this__21352.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__21353 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__21367__delegate = function (x,p__21356){
var map__21362__21363 = p__21356;
var map__21362__21364 = ((cljs.core.seq_QMARK_.call(null,map__21362__21363))?cljs.core.apply.call(null,cljs.core.hash_map,map__21362__21363):map__21362__21363);
var validator__21365 = cljs.core._lookup.call(null,map__21362__21364,"\uFDD0'validator",null);
var meta__21366 = cljs.core._lookup.call(null,map__21362__21364,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__21366,validator__21365,null));
};
var G__21367 = function (x,var_args){
var p__21356 = null;
if (goog.isDef(var_args)) {
  p__21356 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__21367__delegate.call(this, x, p__21356);
};
G__21367.cljs$lang$maxFixedArity = 1;
G__21367.cljs$lang$applyTo = (function (arglist__21368){
var x = cljs.core.first(arglist__21368);
var p__21356 = cljs.core.rest(arglist__21368);
return G__21367__delegate(x, p__21356);
});
G__21367.cljs$lang$arity$variadic = G__21367__delegate;
return G__21367;
})()
;
atom = function(x,var_args){
var p__21356 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____21372 = a.validator;
if(cljs.core.truth_(temp__3974__auto____21372))
{var validate__21373 = temp__3974__auto____21372;
if(cljs.core.truth_(validate__21373.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__21374 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__21374,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__21375__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__21375 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__21375__delegate.call(this, a, f, x, y, z, more);
};
G__21375.cljs$lang$maxFixedArity = 5;
G__21375.cljs$lang$applyTo = (function (arglist__21376){
var a = cljs.core.first(arglist__21376);
var f = cljs.core.first(cljs.core.next(arglist__21376));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__21376)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__21376))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__21376)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__21376)))));
return G__21375__delegate(a, f, x, y, z, more);
});
G__21375.cljs$lang$arity$variadic = G__21375__delegate;
return G__21375;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__21377){
var iref = cljs.core.first(arglist__21377);
var f = cljs.core.first(cljs.core.next(arglist__21377));
var args = cljs.core.rest(cljs.core.next(arglist__21377));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__21378 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__21378.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__21379 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__21379.state,(function (p__21380){
var map__21381__21382 = p__21380;
var map__21381__21383 = ((cljs.core.seq_QMARK_.call(null,map__21381__21382))?cljs.core.apply.call(null,cljs.core.hash_map,map__21381__21382):map__21381__21382);
var curr_state__21384 = map__21381__21383;
var done__21385 = cljs.core._lookup.call(null,map__21381__21383,"\uFDD0'done",null);
if(cljs.core.truth_(done__21385))
{return curr_state__21384;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__21379.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__21406__21407 = options;
var map__21406__21408 = ((cljs.core.seq_QMARK_.call(null,map__21406__21407))?cljs.core.apply.call(null,cljs.core.hash_map,map__21406__21407):map__21406__21407);
var keywordize_keys__21409 = cljs.core._lookup.call(null,map__21406__21408,"\uFDD0'keywordize-keys",null);
var keyfn__21410 = (cljs.core.truth_(keywordize_keys__21409)?cljs.core.keyword:cljs.core.str);
var f__21425 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2551__auto____21424 = (function iter__21418(s__21419){
return (new cljs.core.LazySeq(null,false,(function (){
var s__21419__21422 = s__21419;
while(true){
if(cljs.core.seq.call(null,s__21419__21422))
{var k__21423 = cljs.core.first.call(null,s__21419__21422);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__21410.call(null,k__21423),thisfn.call(null,(x[k__21423]))], true),iter__21418.call(null,cljs.core.rest.call(null,s__21419__21422)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2551__auto____21424.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__21425.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__21426){
var x = cljs.core.first(arglist__21426);
var options = cljs.core.rest(arglist__21426);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__21431 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__21435__delegate = function (args){
var temp__3971__auto____21432 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__21431),args,null);
if(cljs.core.truth_(temp__3971__auto____21432))
{var v__21433 = temp__3971__auto____21432;
return v__21433;
} else
{var ret__21434 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__21431,cljs.core.assoc,args,ret__21434);
return ret__21434;
}
};
var G__21435 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__21435__delegate.call(this, args);
};
G__21435.cljs$lang$maxFixedArity = 0;
G__21435.cljs$lang$applyTo = (function (arglist__21436){
var args = cljs.core.seq(arglist__21436);;
return G__21435__delegate(args);
});
G__21435.cljs$lang$arity$variadic = G__21435__delegate;
return G__21435;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__21438 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__21438))
{{
var G__21439 = ret__21438;
f = G__21439;
continue;
}
} else
{return ret__21438;
}
break;
}
});
var trampoline__2 = (function() { 
var G__21440__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__21440 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__21440__delegate.call(this, f, args);
};
G__21440.cljs$lang$maxFixedArity = 1;
G__21440.cljs$lang$applyTo = (function (arglist__21441){
var f = cljs.core.first(arglist__21441);
var args = cljs.core.rest(arglist__21441);
return G__21440__delegate(f, args);
});
G__21440.cljs$lang$arity$variadic = G__21440__delegate;
return G__21440;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__21443 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__21443,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__21443,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____21452 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____21452)
{return or__3824__auto____21452;
} else
{var or__3824__auto____21453 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____21453)
{return or__3824__auto____21453;
} else
{var and__3822__auto____21454 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____21454)
{var and__3822__auto____21455 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____21455)
{var and__3822__auto____21456 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____21456)
{var ret__21457 = true;
var i__21458 = 0;
while(true){
if((function (){var or__3824__auto____21459 = cljs.core.not.call(null,ret__21457);
if(or__3824__auto____21459)
{return or__3824__auto____21459;
} else
{return (i__21458 === cljs.core.count.call(null,parent));
}
})())
{return ret__21457;
} else
{{
var G__21460 = isa_QMARK_.call(null,h,child.call(null,i__21458),parent.call(null,i__21458));
var G__21461 = (i__21458 + 1);
ret__21457 = G__21460;
i__21458 = G__21461;
continue;
}
}
break;
}
} else
{return and__3822__auto____21456;
}
} else
{return and__3822__auto____21455;
}
} else
{return and__3822__auto____21454;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6724))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6728))))].join('')));
}
var tp__21470 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__21471 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__21472 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__21473 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____21474 = ((cljs.core.contains_QMARK_.call(null,tp__21470.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__21472.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__21472.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__21470,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__21473.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__21471,parent,ta__21472),"\uFDD0'descendants":tf__21473.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__21472,tag,td__21471)});
})());
if(cljs.core.truth_(or__3824__auto____21474))
{return or__3824__auto____21474;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__21479 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__21480 = (cljs.core.truth_(parentMap__21479.call(null,tag))?cljs.core.disj.call(null,parentMap__21479.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__21481 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__21480))?cljs.core.assoc.call(null,parentMap__21479,tag,childsParents__21480):cljs.core.dissoc.call(null,parentMap__21479,tag));
var deriv_seq__21482 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__21462_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__21462_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__21462_SHARP_),cljs.core.second.call(null,p1__21462_SHARP_)));
}),cljs.core.seq.call(null,newParents__21481)));
if(cljs.core.contains_QMARK_.call(null,parentMap__21479.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__21463_SHARP_,p2__21464_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__21463_SHARP_,p2__21464_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__21482));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__21490 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____21492 = (cljs.core.truth_((function (){var and__3822__auto____21491 = xprefs__21490;
if(cljs.core.truth_(and__3822__auto____21491))
{return xprefs__21490.call(null,y);
} else
{return and__3822__auto____21491;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____21492))
{return or__3824__auto____21492;
} else
{var or__3824__auto____21494 = (function (){var ps__21493 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__21493) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__21493),prefer_table)))
{} else
{}
{
var G__21497 = cljs.core.rest.call(null,ps__21493);
ps__21493 = G__21497;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____21494))
{return or__3824__auto____21494;
} else
{var or__3824__auto____21496 = (function (){var ps__21495 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__21495) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__21495),y,prefer_table)))
{} else
{}
{
var G__21498 = cljs.core.rest.call(null,ps__21495);
ps__21495 = G__21498;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____21496))
{return or__3824__auto____21496;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____21500 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____21500))
{return or__3824__auto____21500;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__21518 = cljs.core.reduce.call(null,(function (be,p__21510){
var vec__21511__21512 = p__21510;
var k__21513 = cljs.core.nth.call(null,vec__21511__21512,0,null);
var ___21514 = cljs.core.nth.call(null,vec__21511__21512,1,null);
var e__21515 = vec__21511__21512;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__21513))
{var be2__21517 = (cljs.core.truth_((function (){var or__3824__auto____21516 = (be == null);
if(or__3824__auto____21516)
{return or__3824__auto____21516;
} else
{return cljs.core.dominates.call(null,k__21513,cljs.core.first.call(null,be),prefer_table);
}
})())?e__21515:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__21517),k__21513,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__21513),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__21517)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__21517;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__21518))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__21518));
return cljs.core.second.call(null,best_entry__21518);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____21523 = mf;
if(and__3822__auto____21523)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____21523;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2452__auto____21524 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____21525 = (cljs.core._reset[goog.typeOf(x__2452__auto____21524)]);
if(or__3824__auto____21525)
{return or__3824__auto____21525;
} else
{var or__3824__auto____21526 = (cljs.core._reset["_"]);
if(or__3824__auto____21526)
{return or__3824__auto____21526;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____21531 = mf;
if(and__3822__auto____21531)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____21531;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2452__auto____21532 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____21533 = (cljs.core._add_method[goog.typeOf(x__2452__auto____21532)]);
if(or__3824__auto____21533)
{return or__3824__auto____21533;
} else
{var or__3824__auto____21534 = (cljs.core._add_method["_"]);
if(or__3824__auto____21534)
{return or__3824__auto____21534;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____21539 = mf;
if(and__3822__auto____21539)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____21539;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2452__auto____21540 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____21541 = (cljs.core._remove_method[goog.typeOf(x__2452__auto____21540)]);
if(or__3824__auto____21541)
{return or__3824__auto____21541;
} else
{var or__3824__auto____21542 = (cljs.core._remove_method["_"]);
if(or__3824__auto____21542)
{return or__3824__auto____21542;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____21547 = mf;
if(and__3822__auto____21547)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____21547;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2452__auto____21548 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____21549 = (cljs.core._prefer_method[goog.typeOf(x__2452__auto____21548)]);
if(or__3824__auto____21549)
{return or__3824__auto____21549;
} else
{var or__3824__auto____21550 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____21550)
{return or__3824__auto____21550;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____21555 = mf;
if(and__3822__auto____21555)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____21555;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2452__auto____21556 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____21557 = (cljs.core._get_method[goog.typeOf(x__2452__auto____21556)]);
if(or__3824__auto____21557)
{return or__3824__auto____21557;
} else
{var or__3824__auto____21558 = (cljs.core._get_method["_"]);
if(or__3824__auto____21558)
{return or__3824__auto____21558;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____21563 = mf;
if(and__3822__auto____21563)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____21563;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2452__auto____21564 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____21565 = (cljs.core._methods[goog.typeOf(x__2452__auto____21564)]);
if(or__3824__auto____21565)
{return or__3824__auto____21565;
} else
{var or__3824__auto____21566 = (cljs.core._methods["_"]);
if(or__3824__auto____21566)
{return or__3824__auto____21566;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____21571 = mf;
if(and__3822__auto____21571)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____21571;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2452__auto____21572 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____21573 = (cljs.core._prefers[goog.typeOf(x__2452__auto____21572)]);
if(or__3824__auto____21573)
{return or__3824__auto____21573;
} else
{var or__3824__auto____21574 = (cljs.core._prefers["_"]);
if(or__3824__auto____21574)
{return or__3824__auto____21574;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____21579 = mf;
if(and__3822__auto____21579)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____21579;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2452__auto____21580 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____21581 = (cljs.core._dispatch[goog.typeOf(x__2452__auto____21580)]);
if(or__3824__auto____21581)
{return or__3824__auto____21581;
} else
{var or__3824__auto____21582 = (cljs.core._dispatch["_"]);
if(or__3824__auto____21582)
{return or__3824__auto____21582;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__21585 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__21586 = cljs.core._get_method.call(null,mf,dispatch_val__21585);
if(cljs.core.truth_(target_fn__21586))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__21585)].join('')));
}
return cljs.core.apply.call(null,target_fn__21586,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__21587 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__21588 = this;
cljs.core.swap_BANG_.call(null,this__21588.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__21588.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__21588.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__21588.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__21589 = this;
cljs.core.swap_BANG_.call(null,this__21589.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__21589.method_cache,this__21589.method_table,this__21589.cached_hierarchy,this__21589.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__21590 = this;
cljs.core.swap_BANG_.call(null,this__21590.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__21590.method_cache,this__21590.method_table,this__21590.cached_hierarchy,this__21590.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__21591 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__21591.cached_hierarchy),cljs.core.deref.call(null,this__21591.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__21591.method_cache,this__21591.method_table,this__21591.cached_hierarchy,this__21591.hierarchy);
}
var temp__3971__auto____21592 = cljs.core.deref.call(null,this__21591.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____21592))
{var target_fn__21593 = temp__3971__auto____21592;
return target_fn__21593;
} else
{var temp__3971__auto____21594 = cljs.core.find_and_cache_best_method.call(null,this__21591.name,dispatch_val,this__21591.hierarchy,this__21591.method_table,this__21591.prefer_table,this__21591.method_cache,this__21591.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____21594))
{var target_fn__21595 = temp__3971__auto____21594;
return target_fn__21595;
} else
{return cljs.core.deref.call(null,this__21591.method_table).call(null,this__21591.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__21596 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__21596.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__21596.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__21596.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__21596.method_cache,this__21596.method_table,this__21596.cached_hierarchy,this__21596.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__21597 = this;
return cljs.core.deref.call(null,this__21597.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__21598 = this;
return cljs.core.deref.call(null,this__21598.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__21599 = this;
return cljs.core.do_dispatch.call(null,mf,this__21599.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__21601__delegate = function (_,args){
var self__21600 = this;
return cljs.core._dispatch.call(null,self__21600,args);
};
var G__21601 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__21601__delegate.call(this, _, args);
};
G__21601.cljs$lang$maxFixedArity = 1;
G__21601.cljs$lang$applyTo = (function (arglist__21602){
var _ = cljs.core.first(arglist__21602);
var args = cljs.core.rest(arglist__21602);
return G__21601__delegate(_, args);
});
G__21601.cljs$lang$arity$variadic = G__21601__delegate;
return G__21601;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__21603 = this;
return cljs.core._dispatch.call(null,self__21603,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__21604 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_21606,_){
var this__21605 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__21605.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__21607 = this;
var and__3822__auto____21608 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____21608)
{return (this__21607.uuid === other.uuid);
} else
{return and__3822__auto____21608;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__21609 = this;
var this__21610 = this;
return cljs.core.pr_str.call(null,this__21610);
});
cljs.core.UUID;

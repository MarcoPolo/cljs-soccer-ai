goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__7791 = {};
var G__7792__7793 = cljs.core.seq.call(null,m);
if(G__7792__7793)
{var G__7795__7797 = cljs.core.first.call(null,G__7792__7793);
var vec__7796__7798 = G__7795__7797;
var k__7799 = cljs.core.nth.call(null,vec__7796__7798,0,null);
var v__7800 = cljs.core.nth.call(null,vec__7796__7798,1,null);
var G__7792__7801 = G__7792__7793;
var G__7795__7802 = G__7795__7797;
var G__7792__7803 = G__7792__7801;
while(true){
var vec__7804__7805 = G__7795__7802;
var k__7806 = cljs.core.nth.call(null,vec__7804__7805,0,null);
var v__7807 = cljs.core.nth.call(null,vec__7804__7805,1,null);
var G__7792__7808 = G__7792__7803;
(out__7791[cljs.core.name.call(null,k__7806)] = v__7807);
var temp__3974__auto____7809 = cljs.core.next.call(null,G__7792__7808);
if(temp__3974__auto____7809)
{var G__7792__7810 = temp__3974__auto____7809;
{
var G__7811 = cljs.core.first.call(null,G__7792__7810);
var G__7812 = G__7792__7810;
G__7795__7802 = G__7811;
G__7792__7803 = G__7812;
continue;
}
} else
{}
break;
}
} else
{}
return out__7791;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__7814 = ((cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs__7814);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__7815){
var v = cljs.core.first(arglist__7815);
var text = cljs.core.rest(arglist__7815);
return log__delegate(v, text);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
jayq.util.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{var obj__7836 = {};
var G__7837__7838 = cljs.core.seq.call(null,x);
if(G__7837__7838)
{var G__7840__7842 = cljs.core.first.call(null,G__7837__7838);
var vec__7841__7843 = G__7840__7842;
var k__7844 = cljs.core.nth.call(null,vec__7841__7843,0,null);
var v__7845 = cljs.core.nth.call(null,vec__7841__7843,1,null);
var G__7837__7846 = G__7837__7838;
var G__7840__7847 = G__7840__7842;
var G__7837__7848 = G__7837__7846;
while(true){
var vec__7849__7850 = G__7840__7847;
var k__7851 = cljs.core.nth.call(null,vec__7849__7850,0,null);
var v__7852 = cljs.core.nth.call(null,vec__7849__7850,1,null);
var G__7837__7853 = G__7837__7848;
(obj__7836[clj__GT_js.call(null,k__7851)] = clj__GT_js.call(null,v__7852));
var temp__3974__auto____7854 = cljs.core.next.call(null,G__7837__7853);
if(temp__3974__auto____7854)
{var G__7837__7855 = temp__3974__auto____7854;
{
var G__7856 = cljs.core.first.call(null,G__7837__7855);
var G__7857 = G__7837__7855;
G__7840__7847 = G__7856;
G__7837__7848 = G__7857;
continue;
}
} else
{}
break;
}
} else
{}
return obj__7836;
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
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

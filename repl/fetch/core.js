goog.provide('fetch.core');
goog.require('cljs.core');
goog.require('goog.structs');
goog.require('goog.Uri.QueryData');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('fetch.util');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
fetch.core.__GT_method = (function __GT_method(m){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,m));
});
fetch.core.parse_route = (function parse_route(route){
if(cljs.core.string_QMARK_.call(null,route))
{return cljs.core.PersistentVector.fromArray(["GET",route], true);
} else
{if(cljs.core.vector_QMARK_.call(null,route))
{var vec__8844__8845 = route;
var m__8846 = cljs.core.nth.call(null,vec__8844__8845,0,null);
var u__8847 = cljs.core.nth.call(null,vec__8844__8845,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__8846),u__8847], true);
} else
{if("\uFDD0'else")
{return cljs.core.PersistentVector.fromArray(["GET",route], true);
} else
{return null;
}
}
}
});
fetch.core.__GT_data = (function __GT_data(d){
var cur__8850 = fetch.util.clj__GT_js.call(null,d);
var query__8851 = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur__8850)));
return [cljs.core.str(query__8851)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__8853 = req.getResponseText();
return callback.call(null,data__8853);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__8854){
var vec__8865__8866 = p__8854;
var opts__8867 = cljs.core.nth.call(null,vec__8865__8866,0,null);
var req__8869 = (new goog.net.XhrIo());
var vec__8868__8870 = fetch.core.parse_route.call(null,route);
var method__8871 = cljs.core.nth.call(null,vec__8868__8870,0,null);
var uri__8872 = cljs.core.nth.call(null,vec__8868__8870,1,null);
var data__8873 = fetch.core.__GT_data.call(null,content);
var callback__8874 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__8874))
{goog.events.listen(req__8869,goog.net.EventType.COMPLETE,(function (){
return callback__8874.call(null,req__8869);
}));
} else
{}
return req__8869.send(uri__8872,method__8871,data__8873,(cljs.core.truth_(opts__8867)?fetch.util.clj__GT_js.call(null,opts__8867):null));
};
var xhr = function (route,content,callback,var_args){
var p__8854 = null;
if (goog.isDef(var_args)) {
  p__8854 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__8854);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__8875){
var route = cljs.core.first(arglist__8875);
var content = cljs.core.first(cljs.core.next(arglist__8875));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8875)));
var p__8854 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8875)));
return xhr__delegate(route, content, callback, p__8854);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;

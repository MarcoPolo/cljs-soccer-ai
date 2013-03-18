goog.provide('crate.element');
goog.require('cljs.core');
goog.require('crate.util');
goog.require('clojure.string');
goog.require('crate.compiler');
goog.require('crate.util');
/**
* Wrap the supplied javascript up in script tags and a CDATA section.
*/
crate.element.javascript_tag = (function javascript_tag(script){
return cljs.core.PersistentVector.fromArray(["\uFDD0'script",cljs.core.ObjMap.fromObject(["\uFDD0'type"],{"\uFDD0'type":"text/javascript"}),[cljs.core.str("//<![CDATA[\n"),cljs.core.str(script),cljs.core.str("\n//]]>")].join('')], true);
});
var func__7252__auto____8886 = (function() { 
var G__8887__delegate = function (url,content){
return cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":crate.util.to_uri.call(null,url)}),content], true);
};
var G__8887 = function (url,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8887__delegate.call(this, url, content);
};
G__8887.cljs$lang$maxFixedArity = 1;
G__8887.cljs$lang$applyTo = (function (arglist__8888){
var url = cljs.core.first(arglist__8888);
var content = cljs.core.rest(arglist__8888);
return G__8887__delegate(url, content);
});
G__8887.cljs$lang$arity$variadic = G__8887__delegate;
return G__8887;
})()
;
crate.element.link_to = crate.compiler.add_optional_attrs.call(null,func__7252__auto____8886);
var func__7252__auto____8894 = (function() { 
var G__8895__delegate = function (e_mail,p__8889){
var vec__8890__8891 = p__8889;
var content__8892 = cljs.core.nth.call(null,vec__8890__8891,0,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')}),(function (){var or__3824__auto____8893 = content__8892;
if(cljs.core.truth_(or__3824__auto____8893))
{return or__3824__auto____8893;
} else
{return e_mail;
}
})()], true);
};
var G__8895 = function (e_mail,var_args){
var p__8889 = null;
if (goog.isDef(var_args)) {
  p__8889 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8895__delegate.call(this, e_mail, p__8889);
};
G__8895.cljs$lang$maxFixedArity = 1;
G__8895.cljs$lang$applyTo = (function (arglist__8896){
var e_mail = cljs.core.first(arglist__8896);
var p__8889 = cljs.core.rest(arglist__8896);
return G__8895__delegate(e_mail, p__8889);
});
G__8895.cljs$lang$arity$variadic = G__8895__delegate;
return G__8895;
})()
;
crate.element.mail_to = crate.compiler.add_optional_attrs.call(null,func__7252__auto____8894);
var func__7252__auto____8904 = (function (coll){
return cljs.core.PersistentVector.fromArray(["\uFDD0'ul",(function (){var iter__2551__auto____8903 = (function iter__8897(s__8898){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8898__8901 = s__8898;
while(true){
if(cljs.core.seq.call(null,s__8898__8901))
{var x__8902 = cljs.core.first.call(null,s__8898__8901);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",x__8902], true),iter__8897.call(null,cljs.core.rest.call(null,s__8898__8901)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2551__auto____8903.call(null,coll);
})()], true);
});
crate.element.unordered_list = crate.compiler.add_optional_attrs.call(null,func__7252__auto____8904);
var func__7252__auto____8912 = (function (coll){
return cljs.core.PersistentVector.fromArray(["\uFDD0'ol",(function (){var iter__2551__auto____8911 = (function iter__8905(s__8906){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8906__8909 = s__8906;
while(true){
if(cljs.core.seq.call(null,s__8906__8909))
{var x__8910 = cljs.core.first.call(null,s__8906__8909);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",x__8910], true),iter__8905.call(null,cljs.core.rest.call(null,s__8906__8909)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2551__auto____8911.call(null,coll);
})()], true);
});
crate.element.ordered_list = crate.compiler.add_optional_attrs.call(null,func__7252__auto____8912);
var func__7252__auto____8913 = (function() {
var G__8914 = null;
var G__8914__1 = (function (src){
return cljs.core.PersistentVector.fromArray(["\uFDD0'img",cljs.core.ObjMap.fromObject(["\uFDD0'src"],{"\uFDD0'src":crate.util.to_uri.call(null,src)})], true);
});
var G__8914__2 = (function (src,alt){
return cljs.core.PersistentVector.fromArray(["\uFDD0'img",cljs.core.ObjMap.fromObject(["\uFDD0'src","\uFDD0'alt"],{"\uFDD0'src":crate.util.to_uri.call(null,src),"\uFDD0'alt":alt})], true);
});
G__8914 = function(src,alt){
switch(arguments.length){
case 1:
return G__8914__1.call(this,src);
case 2:
return G__8914__2.call(this,src,alt);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8914;
})()
;
crate.element.image = crate.compiler.add_optional_attrs.call(null,func__7252__auto____8913);

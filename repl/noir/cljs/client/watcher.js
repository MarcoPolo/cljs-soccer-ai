goog.provide('noir.cljs.client.watcher');
goog.require('cljs.core');
goog.require('crate.element');
goog.require('jayq.core');
goog.require('crate.element');
goog.require('jayq.core');
goog.require('cljs.reader');
goog.require('crate.core');
goog.require('fetch.core');
noir.cljs.client.watcher.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
noir.cljs.client.watcher.$body = jayq.core.$.call(null,"\uFDD0'body");
noir.cljs.client.watcher.callbacks = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
noir.cljs.client.watcher.cur_mode = cljs.core.atom.call(null,"\uFDD0'simple");
noir.cljs.client.watcher.poll = (function poll(){
return noir.cljs.client.watcher.wait.call(null,100,(function (){
return fetch.core.xhr.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'get","/noir-cljs-get-updated"], true),cljs.core.ObjMap.EMPTY,(function (data){
if(cljs.core.truth_((function (){var and__3822__auto____8800 = data;
if(cljs.core.truth_(and__3822__auto____8800))
{return cljs.core.not_EQ_.call(null,data,"");
} else
{return and__3822__auto____8800;
}
})()))
{eval(data);
var G__8801__8802 = cljs.core.seq.call(null,cljs.core.deref.call(null,noir.cljs.client.watcher.callbacks));
if(G__8801__8802)
{var cur__8803 = cljs.core.first.call(null,G__8801__8802);
var G__8801__8804 = G__8801__8802;
while(true){
cur__8803.call(null,data);
var temp__3974__auto____8805 = cljs.core.next.call(null,G__8801__8804);
if(temp__3974__auto____8805)
{var G__8801__8806 = temp__3974__auto____8805;
{
var G__8807 = cljs.core.first.call(null,G__8801__8806);
var G__8808 = G__8801__8806;
cur__8803 = G__8807;
G__8801__8804 = G__8808;
continue;
}
} else
{}
break;
}
} else
{}
} else
{}
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,noir.cljs.client.watcher.cur_mode),"\uFDD0'interactive"))
{return poll.call(null);
} else
{return null;
}
}));
}));
});
noir.cljs.client.watcher.on_update = (function on_update(func){
return cljs.core.swap_BANG_.call(null,noir.cljs.client.watcher.callbacks,cljs.core.conj,func);
});
noir.cljs.client.watcher.set_mode = (function set_mode(m){
return fetch.core.xhr.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'post","/noir-cljs-mode"], true),cljs.core.ObjMap.fromObject(["\uFDD0'm"],{"\uFDD0'm":m}),(function (){
cljs.core.reset_BANG_.call(null,noir.cljs.client.watcher.cur_mode,m);
if(cljs.core._EQ_.call(null,m,"\uFDD0'interactive"))
{return noir.cljs.client.watcher.poll.call(null);
} else
{return null;
}
}));
});
noir.cljs.client.watcher.get_mode = (function get_mode(callback){
return fetch.core.xhr.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'get","/noir-cljs-mode"], true),cljs.core.ObjMap.EMPTY,(function (x){
return callback.call(null,cljs.reader.read_string.call(null,x));
}));
});
noir.cljs.client.watcher.buttons = cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'mode","\uFDD0'label"],{"\uFDD0'mode":"\uFDD0'advanced","\uFDD0'label":"A"}),cljs.core.ObjMap.fromObject(["\uFDD0'mode","\uFDD0'label"],{"\uFDD0'mode":"\uFDD0'simple","\uFDD0'label":"S"}),cljs.core.ObjMap.fromObject(["\uFDD0'mode","\uFDD0'label"],{"\uFDD0'mode":"\uFDD0'interactive","\uFDD0'label":"I"})], true);
var group__7239__auto____8810 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
/**
* @param {...*} var_args
*/
noir.cljs.client.watcher.selector_button = (function() { 
var selector_button__delegate = function (p__8811,p__8812){
var map__8823__8825 = p__8811;
var map__8823__8826 = ((cljs.core.seq_QMARK_.call(null,map__8823__8825))?cljs.core.apply.call(null,cljs.core.hash_map,map__8823__8825):map__8823__8825);
var label__8827 = cljs.core._lookup.call(null,map__8823__8826,"\uFDD0'label",null);
var mode__8828 = cljs.core._lookup.call(null,map__8823__8826,"\uFDD0'mode",null);
var vec__8824__8829 = p__8812;
var m__8830 = cljs.core.nth.call(null,vec__8824__8829,0,null);
var elem__7240__auto____8832 = crate.core.html.call(null,(function (){var klass__8831 = [cljs.core.str("noir-cljs-button "),cljs.core.str(((cljs.core._EQ_.call(null,mode__8828,m__8830))?"active":null))].join('');
return cljs.core.PersistentVector.fromArray(["\uFDD0'li",crate.element.link_to.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'class","\uFDD0'data-mode"],{"\uFDD0'class":klass__8831,"\uFDD0'data-mode":mode__8828}),"#",label__8827)], true);
})());
elem__7240__auto____8832.setAttribute("crateGroup",group__7239__auto____8810);
return elem__7240__auto____8832;
};
var selector_button = function (p__8811,var_args){
var p__8812 = null;
if (goog.isDef(var_args)) {
  p__8812 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return selector_button__delegate.call(this, p__8811, p__8812);
};
selector_button.cljs$lang$maxFixedArity = 1;
selector_button.cljs$lang$applyTo = (function (arglist__8833){
var p__8811 = cljs.core.first(arglist__8833);
var p__8812 = cljs.core.rest(arglist__8833);
return selector_button__delegate(p__8811, p__8812);
});
selector_button.cljs$lang$arity$variadic = selector_button__delegate;
return selector_button;
})()
;
noir.cljs.client.watcher.selector_button.prototype._crateGroup = group__7239__auto____8810;
var group__7239__auto____8834 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
noir.cljs.client.watcher.selector = (function selector(m){
var elem__7240__auto____8836 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'style",cljs.core.ObjMap.fromObject(["\uFDD0'type"],{"\uFDD0'type":"text/css"}),"#noir-cljs-selector {position:fixed; bottom:15px; right:30px; list-style:none; }\n     #noir-cljs-selector li {}\n     #noir-cljs-selector a { float:left; display:inline; text-decoration:none; line-height:1em; height:19px; padding:5px 10px; background:#77c; width:10px; border:1px solid #55c; text-align:center; border-radius:5px; margin-bottom:8px; color:#449; }\n     #noir-cljs-selector a:hover {background:#99f;}\n     #noir-cljs-selector .active {background:#7cc; border-color:#599;} "], true),cljs.core.PersistentVector.fromArray(["\uFDD0'ul#noir-cljs-selector",cljs.core.map.call(null,(function (p1__8809_SHARP_){
return noir.cljs.client.watcher.selector_button.call(null,p1__8809_SHARP_,m);
}),noir.cljs.client.watcher.buttons)], true)], true));
elem__7240__auto____8836.setAttribute("crateGroup",group__7239__auto____8834);
return elem__7240__auto____8836;
});
noir.cljs.client.watcher.selector.prototype._crateGroup = group__7239__auto____8834;
jayq.core.delegate.call(null,noir.cljs.client.watcher.$body,"\uFDD0'.noir-cljs-button","\uFDD0'click",(function (e){
e.preventDefault();
jayq.core.remove_class.call(null,jayq.core.find.call(null,jayq.core.$.call(null,noir.cljs.client.watcher.selector),"\uFDD0'.noir-cljs-button"),"\uFDD0'active");
var me__8837 = this;
var $me__8838 = jayq.core.$.call(null,me__8837);
var mode__8839 = jayq.core.data.call(null,$me__8838,"\uFDD0'mode");
jayq.core.add_class.call(null,$me__8838,"\uFDD0'active");
return noir.cljs.client.watcher.set_mode.call(null,mode__8839);
}));
noir.cljs.client.watcher.init = (function init(){
return noir.cljs.client.watcher.get_mode.call(null,(function (m){
return jayq.core.append.call(null,noir.cljs.client.watcher.$body,noir.cljs.client.watcher.selector.call(null,m));
}));
});

goog.provide('crate.compiler');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.dom');
crate.compiler.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
crate.compiler.group_id = cljs.core.atom.call(null,0);
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function capture_binding(tag,b){
return cljs.core.swap_BANG_.call(null,crate.compiler.bindings,cljs.core.conj,cljs.core.PersistentVector.fromArray([tag,b], true));
});
crate.compiler.as_content = (function as_content(parent,content){
var G__8183__8184 = cljs.core.seq.call(null,content);
if(G__8183__8184)
{var c__8185 = cljs.core.first.call(null,G__8183__8184);
var G__8183__8186 = G__8183__8184;
while(true){
var child__8187 = (((c__8185 == null))?null:((cljs.core.map_QMARK_.call(null,c__8185))?(function(){throw "Maps cannot be used as content"})():((cljs.core.string_QMARK_.call(null,c__8185))?goog.dom.createTextNode(c__8185):((cljs.core.vector_QMARK_.call(null,c__8185))?crate.compiler.elem_factory.call(null,c__8185):((cljs.core.seq_QMARK_.call(null,c__8185))?as_content.call(null,parent,c__8185):(cljs.core.truth_(crate.binding.binding_coll_QMARK_.call(null,c__8185))?(function (){crate.compiler.capture_binding.call(null,"\uFDD0'coll",c__8185);
return as_content.call(null,parent,cljs.core.PersistentVector.fromArray([crate.binding.value.call(null,c__8185)], true));
})():(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,c__8185))?(function (){crate.compiler.capture_binding.call(null,"\uFDD0'text",c__8185);
return as_content.call(null,parent,cljs.core.PersistentVector.fromArray([crate.binding.value.call(null,c__8185)], true));
})():(cljs.core.truth_(c__8185.nodeName)?c__8185:(cljs.core.truth_(c__8185.get)?c__8185.get(0):(("\uFDD0'else")?goog.dom.createTextNode([cljs.core.str(c__8185)].join('')):null))))))))));
if(cljs.core.truth_(child__8187))
{goog.dom.appendChild(parent,child__8187);
} else
{}
var temp__3974__auto____8188 = cljs.core.next.call(null,G__8183__8186);
if(temp__3974__auto____8188)
{var G__8183__8189 = temp__3974__auto____8188;
{
var G__8190 = cljs.core.first.call(null,G__8183__8189);
var G__8191 = G__8183__8189;
c__8185 = G__8190;
G__8183__8186 = G__8191;
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
crate.compiler.dom_binding = (function (){var method_table__2626__auto____8192 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2627__auto____8193 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2628__auto____8194 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2629__auto____8195 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2630__auto____8196 = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("dom-binding",(function (type,_8197,_){
return type;
}),"\uFDD0'default",hierarchy__2630__auto____8196,method_table__2626__auto____8192,prefer_table__2627__auto____8193,method_cache__2628__auto____8194,cached_hierarchy__2629__auto____8195));
})();
cljs.core._add_method.call(null,crate.compiler.dom_binding,"\uFDD0'text",(function (_,b,elem){
return crate.binding.on_change.call(null,b,(function (v){
goog.dom.removeChildren(elem);
return crate.compiler.as_content.call(null,elem,cljs.core.PersistentVector.fromArray([v], true));
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,"\uFDD0'attr",(function (_,p__8198,elem){
var vec__8199__8200 = p__8198;
var k__8201 = cljs.core.nth.call(null,vec__8199__8200,0,null);
var b__8202 = cljs.core.nth.call(null,vec__8199__8200,1,null);
return crate.binding.on_change.call(null,b__8202,(function (v){
return crate.compiler.dom_attr.call(null,elem,k__8201,v);
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,"\uFDD0'style",(function (_,p__8203,elem){
var vec__8204__8205 = p__8203;
var k__8206 = cljs.core.nth.call(null,vec__8204__8205,0,null);
var b__8207 = cljs.core.nth.call(null,vec__8204__8205,1,null);
return crate.binding.on_change.call(null,b__8207,(function (v){
if(cljs.core.truth_(k__8206))
{return crate.compiler.dom_style.call(null,elem,k__8206,v);
} else
{return crate.compiler.dom_style.call(null,elem,v);
}
}));
}));
crate.compiler.dom_add = (function dom_add(bc,parent,elem,v){
var temp__3971__auto____8210 = crate.binding.opt.call(null,bc,"\uFDD0'add");
if(cljs.core.truth_(temp__3971__auto____8210))
{var adder__8211 = temp__3971__auto____8210;
return adder__8211.call(null,parent,elem,v);
} else
{return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function dom_remove(bc,elem){
var temp__3971__auto____8214 = crate.binding.opt.call(null,bc,"\uFDD0'remove");
if(cljs.core.truth_(temp__3971__auto____8214))
{var remover__8215 = temp__3971__auto____8214;
return remover__8215.call(null,elem);
} else
{return goog.dom.removeNode(elem);
}
});
cljs.core._add_method.call(null,crate.compiler.dom_binding,"\uFDD0'coll",(function (_,bc,parent){
return crate.binding.on_change.call(null,bc,(function (type,elem,v){
var pred__8216__8219 = cljs.core._EQ_;
var expr__8217__8220 = type;
if(pred__8216__8219.call(null,"\uFDD0'add",expr__8217__8220))
{return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else
{if(pred__8216__8219.call(null,"\uFDD0'remove",expr__8217__8220))
{return crate.compiler.dom_remove.call(null,bc,elem);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__8217__8220)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){
var G__8240__8241 = cljs.core.seq.call(null,bs);
if(G__8240__8241)
{var G__8243__8245 = cljs.core.first.call(null,G__8240__8241);
var vec__8244__8246 = G__8243__8245;
var type__8247 = cljs.core.nth.call(null,vec__8244__8246,0,null);
var b__8248 = cljs.core.nth.call(null,vec__8244__8246,1,null);
var G__8240__8249 = G__8240__8241;
var G__8243__8250 = G__8243__8245;
var G__8240__8251 = G__8240__8249;
while(true){
var vec__8252__8253 = G__8243__8250;
var type__8254 = cljs.core.nth.call(null,vec__8252__8253,0,null);
var b__8255 = cljs.core.nth.call(null,vec__8252__8253,1,null);
var G__8240__8256 = G__8240__8251;
crate.compiler.dom_binding.call(null,type__8254,b__8255,elem);
var temp__3974__auto____8257 = cljs.core.next.call(null,G__8240__8256);
if(temp__3974__auto____8257)
{var G__8240__8258 = temp__3974__auto____8257;
{
var G__8259 = cljs.core.first.call(null,G__8240__8258);
var G__8260 = G__8240__8258;
G__8243__8250 = G__8259;
G__8240__8251 = G__8260;
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
crate.compiler.dom_style = (function() {
var dom_style = null;
var dom_style__2 = (function (elem,v){
if(cljs.core.string_QMARK_.call(null,v))
{elem.setAttribute("style",v);
} else
{if(cljs.core.map_QMARK_.call(null,v))
{var G__8281__8282 = cljs.core.seq.call(null,v);
if(G__8281__8282)
{var G__8284__8286 = cljs.core.first.call(null,G__8281__8282);
var vec__8285__8287 = G__8284__8286;
var k__8288 = cljs.core.nth.call(null,vec__8285__8287,0,null);
var v__8289 = cljs.core.nth.call(null,vec__8285__8287,1,null);
var G__8281__8290 = G__8281__8282;
var G__8284__8291 = G__8284__8286;
var G__8281__8292 = G__8281__8290;
while(true){
var vec__8293__8294 = G__8284__8291;
var k__8295 = cljs.core.nth.call(null,vec__8293__8294,0,null);
var v__8296 = cljs.core.nth.call(null,vec__8293__8294,1,null);
var G__8281__8297 = G__8281__8292;
dom_style.call(null,elem,k__8295,v__8296);
var temp__3974__auto____8298 = cljs.core.next.call(null,G__8281__8297);
if(temp__3974__auto____8298)
{var G__8281__8299 = temp__3974__auto____8298;
{
var G__8301 = cljs.core.first.call(null,G__8281__8299);
var G__8302 = G__8281__8299;
G__8284__8291 = G__8301;
G__8281__8292 = G__8302;
continue;
}
} else
{}
break;
}
} else
{}
} else
{if(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v)))
{crate.compiler.capture_binding.call(null,"\uFDD0'style",cljs.core.PersistentVector.fromArray([null,v], true));
dom_style.call(null,elem,crate.binding.value.call(null,v));
} else
{}
}
}
return elem;
});
var dom_style__3 = (function (elem,k,v){
var v__8300 = (cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,"\uFDD0'style",cljs.core.PersistentVector.fromArray([k,v], true));
return crate.binding.value.call(null,v);
})():v);
return goog.style.setStyle(elem,cljs.core.name.call(null,k),v__8300);
});
dom_style = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_style__2.call(this,elem,k);
case 3:
return dom_style__3.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
dom_style.cljs$lang$arity$2 = dom_style__2;
dom_style.cljs$lang$arity$3 = dom_style__3;
return dom_style;
})()
;
crate.compiler.dom_attr = (function() {
var dom_attr = null;
var dom_attr__2 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(!(cljs.core.map_QMARK_.call(null,attrs)))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__8323__8324 = cljs.core.seq.call(null,attrs);
if(G__8323__8324)
{var G__8326__8328 = cljs.core.first.call(null,G__8323__8324);
var vec__8327__8329 = G__8326__8328;
var k__8330 = cljs.core.nth.call(null,vec__8327__8329,0,null);
var v__8331 = cljs.core.nth.call(null,vec__8327__8329,1,null);
var G__8323__8332 = G__8323__8324;
var G__8326__8333 = G__8326__8328;
var G__8323__8334 = G__8323__8332;
while(true){
var vec__8335__8336 = G__8326__8333;
var k__8337 = cljs.core.nth.call(null,vec__8335__8336,0,null);
var v__8338 = cljs.core.nth.call(null,vec__8335__8336,1,null);
var G__8323__8339 = G__8323__8334;
dom_attr.call(null,elem,k__8337,v__8338);
var temp__3974__auto____8340 = cljs.core.next.call(null,G__8323__8339);
if(temp__3974__auto____8340)
{var G__8323__8341 = temp__3974__auto____8340;
{
var G__8343 = cljs.core.first.call(null,G__8323__8341);
var G__8344 = G__8323__8341;
G__8326__8333 = G__8343;
G__8323__8334 = G__8344;
continue;
}
} else
{}
break;
}
} else
{}
return elem;
}
} else
{return null;
}
});
var dom_attr__3 = (function (elem,k,v){
if(cljs.core._EQ_.call(null,k,"\uFDD0'style"))
{crate.compiler.dom_style.call(null,elem,v);
} else
{var v__8342 = (cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,"\uFDD0'attr",cljs.core.PersistentVector.fromArray([k,v], true));
return crate.binding.value.call(null,v);
})():v);
elem.setAttribute(cljs.core.name.call(null,k),v__8342);
}
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_attr__2.call(this,elem,k);
case 3:
return dom_attr__3.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
dom_attr.cljs$lang$arity$2 = dom_attr__2;
dom_attr.cljs$lang$arity$3 = dom_attr__3;
return dom_attr;
})()
;
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function normalize_map_attrs(map_attrs){
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__8351){
var vec__8352__8353 = p__8351;
var n__8354 = cljs.core.nth.call(null,vec__8352__8353,0,null);
var v__8355 = cljs.core.nth.call(null,vec__8352__8353,1,null);
if(v__8355 === true)
{return cljs.core.PersistentVector.fromArray([n__8354,cljs.core.name.call(null,n__8354)], true);
} else
{return cljs.core.PersistentVector.fromArray([n__8354,v__8355], true);
}
}),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.compiler.normalize_element = (function normalize_element(p__8356){
var vec__8382__8383 = p__8356;
var tag__8384 = cljs.core.nth.call(null,vec__8382__8383,0,null);
var content__8385 = cljs.core.nthnext.call(null,vec__8382__8383,1);
if(!((function (){var or__3824__auto____8386 = cljs.core.keyword_QMARK_.call(null,tag__8384);
if(or__3824__auto____8386)
{return or__3824__auto____8386;
} else
{var or__3824__auto____8387 = cljs.core.symbol_QMARK_.call(null,tag__8384);
if(or__3824__auto____8387)
{return or__3824__auto____8387;
} else
{return cljs.core.string_QMARK_.call(null,tag__8384);
}
}
})()))
{throw [cljs.core.str(tag__8384),cljs.core.str(" is not a valid tag name.")].join('');
} else
{}
var vec__8388__8390 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag__8384));
var ___8391 = cljs.core.nth.call(null,vec__8388__8390,0,null);
var tag__8392 = cljs.core.nth.call(null,vec__8388__8390,1,null);
var id__8393 = cljs.core.nth.call(null,vec__8388__8390,2,null);
var class__8394 = cljs.core.nth.call(null,vec__8388__8390,3,null);
var vec__8389__8401 = (function (){var vec__8395__8396 = clojure.string.split.call(null,tag__8392,/:/);
var nsp__8397 = cljs.core.nth.call(null,vec__8395__8396,0,null);
var t__8398 = cljs.core.nth.call(null,vec__8395__8396,1,null);
var ns_xmlns__8399 = crate.compiler.xmlns.call(null,cljs.core.keyword.call(null,nsp__8397));
if(cljs.core.truth_(t__8398))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3824__auto____8400 = ns_xmlns__8399;
if(cljs.core.truth_(or__3824__auto____8400))
{return or__3824__auto____8400;
} else
{return nsp__8397;
}
})(),t__8398], true);
} else
{return cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\uFDD0'xhtml")).call(null,crate.compiler.xmlns),nsp__8397], true);
}
})();
var nsp__8402 = cljs.core.nth.call(null,vec__8389__8401,0,null);
var tag__8403 = cljs.core.nth.call(null,vec__8389__8401,1,null);
var tag_attrs__8405 = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.filter.call(null,(function (p1__8345_SHARP_){
return !((cljs.core.second.call(null,p1__8345_SHARP_) == null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3824__auto____8404 = id__8393;
if(cljs.core.truth_(or__3824__auto____8404))
{return or__3824__auto____8404;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class__8394)?clojure.string.replace.call(null,class__8394,/\./," "):null)})));
var map_attrs__8406 = cljs.core.first.call(null,content__8385);
if(cljs.core.map_QMARK_.call(null,map_attrs__8406))
{return cljs.core.PersistentVector.fromArray([nsp__8402,tag__8403,cljs.core.merge.call(null,tag_attrs__8405,crate.compiler.normalize_map_attrs.call(null,map_attrs__8406)),cljs.core.next.call(null,content__8385)], true);
} else
{return cljs.core.PersistentVector.fromArray([nsp__8402,tag__8403,tag_attrs__8405,content__8385], true);
}
});
crate.compiler.parse_content = (function parse_content(elem,content){
var attrs__8408 = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,attrs__8408))
{crate.compiler.dom_attr.call(null,elem,attrs__8408);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){
return document.createElementNS(nsp,tag);
}):(function (_,tag){
return document.createElement(tag);
}));
crate.compiler.elem_factory = (function elem_factory(tag_def){
var bindings8419__8420 = crate.compiler.bindings;
try{crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var vec__8422__8423 = crate.compiler.normalize_element.call(null,tag_def);
var nsp__8424 = cljs.core.nth.call(null,vec__8422__8423,0,null);
var tag__8425 = cljs.core.nth.call(null,vec__8422__8423,1,null);
var attrs__8426 = cljs.core.nth.call(null,vec__8422__8423,2,null);
var content__8427 = cljs.core.nth.call(null,vec__8422__8423,3,null);
var elem__8428 = crate.compiler.create_elem.call(null,nsp__8424,tag__8425);
crate.compiler.dom_attr.call(null,elem__8428,attrs__8426);
crate.compiler.as_content.call(null,elem__8428,content__8427);
crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem__8428);
return elem__8428;
}finally {crate.compiler.bindings = bindings8419__8420;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__8437__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__8433__8434 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag__8435 = cljs.core.nth.call(null,vec__8433__8434,0,null);
var body__8436 = cljs.core.nthnext.call(null,vec__8433__8434,1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body__8436)))
{return cljs.core.apply.call(null,cljs.core.vector,tag__8435,cljs.core.merge.call(null,cljs.core.first.call(null,body__8436),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body__8436));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag__8435,cljs.core.first.call(null,args),body__8436);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__8437 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8437__delegate.call(this, args);
};
G__8437.cljs$lang$maxFixedArity = 0;
G__8437.cljs$lang$applyTo = (function (arglist__8438){
var args = cljs.core.seq(arglist__8438);;
return G__8437__delegate(args);
});
G__8437.cljs$lang$arity$variadic = G__8437__delegate;
return G__8437;
})()
;
});

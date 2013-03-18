goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__8439 = this;
return goog.getUid(this$);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__8440 = this;
var G__8441__8442 = cljs.core.seq.call(null,this__8440.watches);
if(G__8441__8442)
{var G__8444__8446 = cljs.core.first.call(null,G__8441__8442);
var vec__8445__8447 = G__8444__8446;
var key__8448 = cljs.core.nth.call(null,vec__8445__8447,0,null);
var f__8449 = cljs.core.nth.call(null,vec__8445__8447,1,null);
var G__8441__8450 = G__8441__8442;
var G__8444__8451 = G__8444__8446;
var G__8441__8452 = G__8441__8450;
while(true){
var vec__8453__8454 = G__8444__8451;
var key__8455 = cljs.core.nth.call(null,vec__8453__8454,0,null);
var f__8456 = cljs.core.nth.call(null,vec__8453__8454,1,null);
var G__8441__8457 = G__8441__8452;
f__8456.call(null,key__8455,this$,oldval,newval);
var temp__3974__auto____8458 = cljs.core.next.call(null,G__8441__8457);
if(temp__3974__auto____8458)
{var G__8441__8459 = temp__3974__auto____8458;
{
var G__8465 = cljs.core.first.call(null,G__8441__8459);
var G__8466 = G__8441__8459;
G__8444__8451 = G__8465;
G__8441__8452 = G__8466;
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
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__8460 = this;
if(cljs.core.truth_(f))
{return this$.watches = cljs.core.assoc.call(null,this__8460.watches,key,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__8461 = this;
return this$.watches = cljs.core.dissoc.call(null,this__8461.watches,key);
});
crate.binding.SubAtom.prototype.crate$binding$IPrintWithWriter$ = true;
crate.binding.SubAtom.prototype.crate$binding$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this__8462 = this;
return crate.binding._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,this__8462.atm),this__8462.path))),cljs.core.str(">")].join(''));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__8463 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,this__8463.atm),this__8463.path);
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8464 = this;
return (o === other);
});
crate.binding.SubAtom;
crate.binding.subatom = (function subatom(atm,path){
var path__8480 = ((cljs.core.coll_QMARK_.call(null,path))?path:cljs.core.PersistentVector.fromArray([path], true));
var vec__8479__8481 = ((cljs.core.instance_QMARK_.call(null,crate.binding.SubAtom,atm))?cljs.core.PersistentVector.fromArray([atm.atm,cljs.core.concat.call(null,atm.path,path__8480)], true):cljs.core.PersistentVector.fromArray([atm,path__8480], true));
var atm__8482 = cljs.core.nth.call(null,vec__8479__8481,0,null);
var path__8483 = cljs.core.nth.call(null,vec__8479__8481,1,null);
var k__8484 = cljs.core.gensym.call(null,"subatom");
var sa__8485 = (new crate.binding.SubAtom(atm__8482,path__8483,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__8482),path__8483)),null,k__8484));
cljs.core.add_watch.call(null,atm__8482,k__8484,(function (_8486,_,ov,nv){
var latest__8487 = cljs.core.get_in.call(null,nv,path__8483);
var prev__8488 = cljs.core.get_in.call(null,ov,path__8483);
var latest_hash__8489 = cljs.core.hash.call(null,latest__8487);
if((function (){var and__3822__auto____8490 = cljs.core.not_EQ_.call(null,sa__8485.prevhash,latest_hash__8489);
if(and__3822__auto____8490)
{return cljs.core.not_EQ_.call(null,prev__8488,latest__8487);
} else
{return and__3822__auto____8490;
}
})())
{sa__8485.prevhash = latest_hash__8489;
return cljs.core._notify_watches.call(null,sa__8485,cljs.core.get_in.call(null,ov,path__8483),latest__8487);
} else
{return null;
}
}));
return sa__8485;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){
cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__8491__delegate = function (sa,f,x,y,z,more){
return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__8491 = function (sa,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8491__delegate.call(this, sa, f, x, y, z, more);
};
G__8491.cljs$lang$maxFixedArity = 5;
G__8491.cljs$lang$applyTo = (function (arglist__8492){
var sa = cljs.core.first(arglist__8492);
var f = cljs.core.first(cljs.core.next(arglist__8492));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8492)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8492))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8492)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8492)))));
return G__8491__delegate(sa, f, x, y, z, more);
});
G__8491.cljs$lang$arity$variadic = G__8491__delegate;
return G__8491;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$lang$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$lang$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$lang$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$lang$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$lang$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$lang$arity$variadic = sub_swap_BANG___6.cljs$lang$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){
cljs.core.remove_watch.call(null,sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.notify = (function notify(w,o,v){
return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = {};
crate.binding.bindable = {};
crate.binding._value = (function _value(this$){
if((function (){var and__3822__auto____8497 = this$;
if(and__3822__auto____8497)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__3822__auto____8497;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__2452__auto____8498 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8499 = (crate.binding._value[goog.typeOf(x__2452__auto____8498)]);
if(or__3824__auto____8499)
{return or__3824__auto____8499;
} else
{var or__3824__auto____8500 = (crate.binding._value["_"]);
if(or__3824__auto____8500)
{return or__3824__auto____8500;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){
if((function (){var and__3822__auto____8505 = this$;
if(and__3822__auto____8505)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__3822__auto____8505;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__2452__auto____8506 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8507 = (crate.binding._on_change[goog.typeOf(x__2452__auto____8506)]);
if(or__3824__auto____8507)
{return or__3824__auto____8507;
} else
{var or__3824__auto____8508 = (crate.binding._on_change["_"]);
if(or__3824__auto____8508)
{return or__3824__auto____8508;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var this__8509 = this;
return this__8509.value_func.call(null,cljs.core.deref.call(null,this__8509.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var this__8510 = this;
return cljs.core.add_watch.call(null,this__8510.atm,cljs.core.gensym.call(null,"atom-binding"),(function (){
return func.call(null,crate.binding._value.call(null,this$));
}));
});
crate.binding.atom_binding;

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__8511 = this;
var G__8512__8513 = cljs.core.seq.call(null,this__8511.watches);
if(G__8512__8513)
{var G__8515__8517 = cljs.core.first.call(null,G__8512__8513);
var vec__8516__8518 = G__8515__8517;
var key__8519 = cljs.core.nth.call(null,vec__8516__8518,0,null);
var f__8520 = cljs.core.nth.call(null,vec__8516__8518,1,null);
var G__8512__8521 = G__8512__8513;
var G__8515__8522 = G__8515__8517;
var G__8512__8523 = G__8512__8521;
while(true){
var vec__8524__8525 = G__8515__8522;
var key__8526 = cljs.core.nth.call(null,vec__8524__8525,0,null);
var f__8527 = cljs.core.nth.call(null,vec__8524__8525,1,null);
var G__8512__8528 = G__8512__8523;
f__8527.call(null,key__8526,this$,oldval,newval);
var temp__3974__auto____8529 = cljs.core.next.call(null,G__8512__8528);
if(temp__3974__auto____8529)
{var G__8512__8530 = temp__3974__auto____8529;
{
var G__8533 = cljs.core.first.call(null,G__8512__8530);
var G__8534 = G__8512__8530;
G__8515__8522 = G__8533;
G__8512__8523 = G__8534;
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
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__8531 = this;
return this$.watches = cljs.core.assoc.call(null,this__8531.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__8532 = this;
return this$.watches = cljs.core.dissoc.call(null,this__8532.watches,key);
});
crate.binding.notifier;

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorPrSeq = (function (this__2398__auto__){
return cljs.core.list.call(null,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var this__8535 = this;
return cljs.core.map.call(null,"\uFDD0'elem",cljs.core.vals.call(null,this$.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var this__8536 = this;
return cljs.core.add_watch.call(null,this__8536.notif,cljs.core.gensym.call(null,"bound-coll"),(function (_8538,_8539,_,p__8537){
var vec__8540__8541 = p__8537;
var event__8542 = cljs.core.nth.call(null,vec__8540__8541,0,null);
var el__8543 = cljs.core.nth.call(null,vec__8540__8541,1,null);
var v__8544 = cljs.core.nth.call(null,vec__8540__8541,2,null);
return func.call(null,event__8542,el__8543,v__8544);
}));
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.bound_collection;
crate.binding.opt = (function opt(bc,k){
return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){
var sa__8547 = crate.binding.subatom.call(null,bc.atm,path);
var elem__8548 = crate.binding.opt.call(null,bc,"\uFDD0'as").call(null,sa__8547);
bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,cljs.core.ObjMap.fromObject(["\uFDD0'elem","\uFDD0'subatom"],{"\uFDD0'elem":elem__8548,"\uFDD0'subatom":sa__8547}));
return crate.binding.notify.call(null,bc.notif,null,cljs.core.PersistentVector.fromArray(["\uFDD0'add",elem__8548,cljs.core.deref.call(null,sa__8547)], true));
});
crate.binding.bc_remove = (function bc_remove(bc,key){
var notif__8551 = bc.notif;
var prev__8552 = bc.stuff.call(null,key);
bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
crate.binding.notify.call(null,bc.notif,null,cljs.core.PersistentVector.fromArray(["\uFDD0'remove",(new cljs.core.Keyword("\uFDD0'elem")).call(null,prev__8552),null], true));
return crate.binding.sub_destroy_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'subatom")).call(null,prev__8552));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){
if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{if("\uFDD0'else")
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){
return cljs.core.concat.call(null,(function (){var or__3824__auto____8554 = crate.binding.opt.call(null,bc,"\uFDD0'path");
if(cljs.core.truth_(or__3824__auto____8554))
{return or__3824__auto____8554;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;
if (goog.isDef(var_args)) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return __GT_path__delegate.call(this, bc, segs);
};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__8555){
var bc = cljs.core.first(arglist__8555);
var segs = cljs.core.rest(arglist__8555);
return __GT_path__delegate(bc, segs);
});
__GT_path.cljs$lang$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){
var prev__8573 = bc.stuff;
var pset__8574 = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev__8573));
var nset__8575 = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,"\uFDD0'keyfn"));
var added__8576 = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset__8575,pset__8574));
var removed__8577 = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset__8574,nset__8575));
var G__8578__8579 = cljs.core.seq.call(null,added__8576);
if(G__8578__8579)
{var a__8580 = cljs.core.first.call(null,G__8578__8579);
var G__8578__8581 = G__8578__8579;
while(true){
crate.binding.bc_add.call(null,bc,a__8580,a__8580);
var temp__3974__auto____8582 = cljs.core.next.call(null,G__8578__8581);
if(temp__3974__auto____8582)
{var G__8578__8583 = temp__3974__auto____8582;
{
var G__8590 = cljs.core.first.call(null,G__8578__8583);
var G__8591 = G__8578__8583;
a__8580 = G__8590;
G__8578__8581 = G__8591;
continue;
}
} else
{}
break;
}
} else
{}
var G__8584__8585 = cljs.core.seq.call(null,removed__8577);
if(G__8584__8585)
{var r__8586 = cljs.core.first.call(null,G__8584__8585);
var G__8584__8587 = G__8584__8585;
while(true){
crate.binding.bc_remove.call(null,bc,r__8586);
var temp__3974__auto____8588 = cljs.core.next.call(null,G__8584__8587);
if(temp__3974__auto____8588)
{var G__8584__8589 = temp__3974__auto____8588;
{
var G__8592 = cljs.core.first.call(null,G__8584__8589);
var G__8593 = G__8584__8589;
r__8586 = G__8592;
G__8584__8587 = G__8593;
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
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__8594){
var vec__8609__8610 = p__8594;
var path__8611 = cljs.core.nth.call(null,vec__8609__8610,0,null);
var opts__8612 = cljs.core.nth.call(null,vec__8609__8610,1,null);
var vec__8613__8614 = (cljs.core.truth_(opts__8612)?cljs.core.PersistentVector.fromArray([path__8611,opts__8612], true):cljs.core.PersistentVector.fromArray([null,path__8611], true));
var path__8615 = cljs.core.nth.call(null,vec__8613__8614,0,null);
var opts__8616 = cljs.core.nth.call(null,vec__8613__8614,1,null);
var atm__8617 = ((cljs.core.not.call(null,path__8615))?atm:crate.binding.subatom.call(null,atm,path__8615));
var opts__8618 = cljs.core.assoc.call(null,opts__8616,"\uFDD0'path",path__8615);
var opts__8619 = ((cljs.core.not.call(null,(new cljs.core.Keyword("\uFDD0'keyfn")).call(null,opts__8618)))?cljs.core.assoc.call(null,opts__8618,"\uFDD0'keyfn",cljs.core.first):cljs.core.assoc.call(null,opts__8618,"\uFDD0'keyfn",cljs.core.comp.call(null,(new cljs.core.Keyword("\uFDD0'keyfn")).call(null,opts__8618),cljs.core.second)));
var bc__8620 = (new crate.binding.bound_collection(atm__8617,(new crate.binding.notifier(null)),opts__8619,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__8617,cljs.core.gensym.call(null,"bound-coll"),(function (_8621,_8622,_,neue){
return crate.binding.bc_compare.call(null,bc__8620,neue);
}));
crate.binding.bc_compare.call(null,bc__8620,cljs.core.deref.call(null,atm__8617));
return bc__8620;
};
var bound_coll = function (atm,var_args){
var p__8594 = null;
if (goog.isDef(var_args)) {
  p__8594 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bound_coll__delegate.call(this, atm, p__8594);
};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__8623){
var atm = cljs.core.first(arglist__8623);
var p__8594 = cljs.core.rest(arglist__8623);
return bound_coll__delegate(atm, p__8594);
});
bound_coll.cljs$lang$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__8624){
var vec__8634__8635 = p__8624;
var opts__8636 = cljs.core.nth.call(null,vec__8634__8635,0,null);
var opts__8637 = cljs.core.assoc.call(null,opts__8636,"\uFDD0'as",as);
var atm__8638 = ((cljs.core.not.call(null,(new cljs.core.Keyword("\uFDD0'path")).call(null,opts__8637)))?atm:crate.binding.subatom.call(null,atm,(new cljs.core.Keyword("\uFDD0'path")).call(null,opts__8637)));
var opts__8639 = ((cljs.core.not.call(null,(new cljs.core.Keyword("\uFDD0'keyfn")).call(null,opts__8637)))?cljs.core.assoc.call(null,opts__8637,"\uFDD0'keyfn",cljs.core.first):cljs.core.assoc.call(null,opts__8637,"\uFDD0'keyfn",cljs.core.comp.call(null,(new cljs.core.Keyword("\uFDD0'keyfn")).call(null,opts__8637),cljs.core.second)));
var bc__8640 = (new crate.binding.bound_collection(atm__8638,(new crate.binding.notifier(null)),opts__8639,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__8638,cljs.core.gensym.call(null,"bound-coll"),(function (_8641,_8642,_,neue){
return crate.binding.bc_compare.call(null,bc__8640,neue);
}));
crate.binding.bc_compare.call(null,bc__8640,cljs.core.deref.call(null,atm__8638));
return bc__8640;
};
var map_bound = function (as,atm,var_args){
var p__8624 = null;
if (goog.isDef(var_args)) {
  p__8624 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return map_bound__delegate.call(this, as, atm, p__8624);
};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__8643){
var as = cljs.core.first(arglist__8643);
var atm = cljs.core.first(cljs.core.next(arglist__8643));
var p__8624 = cljs.core.rest(cljs.core.next(arglist__8643));
return map_bound__delegate(as, atm, p__8624);
});
map_bound.cljs$lang$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){
var G__8647__8648 = b;
if(G__8647__8648)
{if(cljs.core.truth_((function (){var or__3824__auto____8649 = null;
if(cljs.core.truth_(or__3824__auto____8649))
{return or__3824__auto____8649;
} else
{return G__8647__8648.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__8647__8648.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable,G__8647__8648);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable,G__8647__8648);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){
var G__8653__8654 = b;
if(G__8653__8654)
{if(cljs.core.truth_((function (){var or__3824__auto____8655 = null;
if(cljs.core.truth_(or__3824__auto____8655))
{return or__3824__auto____8655;
} else
{return G__8653__8654.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__8653__8654.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable_coll,G__8653__8654);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable_coll,G__8653__8654);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){
var G__8659__8660 = atm;
if(G__8659__8660)
{if((function (){var or__3824__auto____8661 = (G__8659__8660.cljs$lang$protocol_mask$partition0$ & 32768);
if(or__3824__auto____8661)
{return or__3824__auto____8661;
} else
{return G__8659__8660.cljs$core$IDeref$;
}
})())
{return true;
} else
{if((!G__8659__8660.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IDeref,G__8659__8660);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IDeref,G__8659__8660);
}
});
crate.binding.value = (function value(b){
return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){
return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){
return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__8662){
var vec__8668__8669 = p__8662;
var func__8670 = cljs.core.nth.call(null,vec__8668__8669,0,null);
var func__8672 = (function (){var or__3824__auto____8671 = func__8670;
if(cljs.core.truth_(or__3824__auto____8671))
{return or__3824__auto____8671;
} else
{return cljs.core.identity;
}
})();
return (new crate.binding.atom_binding(atm,func__8672));
};
var bound = function (atm,var_args){
var p__8662 = null;
if (goog.isDef(var_args)) {
  p__8662 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bound__delegate.call(this, atm, p__8662);
};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__8673){
var atm = cljs.core.first(arglist__8673);
var p__8662 = cljs.core.rest(arglist__8673);
return bound__delegate(atm, p__8662);
});
bound.cljs$lang$arity$variadic = bound__delegate;
return bound;
})()
;

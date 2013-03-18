goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function bubble_max_key(k,coll){
var max__8676 = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max__8676,cljs.core.remove.call(null,(function (p1__8674_SHARP_){
return (max__8676 === p1__8674_SHARP_);
}),coll));
});
/**
* Return a set that is the union of the input sets
* @param {...*} var_args
*/
clojure.set.union = (function() {
var union = null;
var union__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var union__1 = (function (s1){
return s1;
});
var union__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2)))
{return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});
var union__3 = (function() { 
var G__8680__delegate = function (s1,s2,sets){
var bubbled_sets__8679 = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets__8679),cljs.core.rest.call(null,bubbled_sets__8679));
};
var G__8680 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8680__delegate.call(this, s1, s2, sets);
};
G__8680.cljs$lang$maxFixedArity = 2;
G__8680.cljs$lang$applyTo = (function (arglist__8681){
var s1 = cljs.core.first(arglist__8681);
var s2 = cljs.core.first(cljs.core.next(arglist__8681));
var sets = cljs.core.rest(cljs.core.next(arglist__8681));
return G__8680__delegate(s1, s2, sets);
});
G__8680.cljs$lang$arity$variadic = G__8680__delegate;
return G__8680;
})()
;
union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 0:
return union__0.call(this);
case 1:
return union__1.call(this,s1);
case 2:
return union__2.call(this,s1,s2);
default:
return union__3.cljs$lang$arity$variadic(s1,s2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
union.cljs$lang$maxFixedArity = 2;
union.cljs$lang$applyTo = union__3.cljs$lang$applyTo;
union.cljs$lang$arity$0 = union__0;
union.cljs$lang$arity$1 = union__1;
union.cljs$lang$arity$2 = union__2;
union.cljs$lang$arity$variadic = union__3.cljs$lang$arity$variadic;
return union;
})()
;
/**
* Return a set that is the intersection of the input sets
* @param {...*} var_args
*/
clojure.set.intersection = (function() {
var intersection = null;
var intersection__1 = (function (s1){
return s1;
});
var intersection__2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1)))
{{
var G__8684 = s2;
var G__8685 = s1;
s1 = G__8684;
s2 = G__8685;
continue;
}
} else
{return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item))
{return result;
} else
{return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});
var intersection__3 = (function() { 
var G__8686__delegate = function (s1,s2,sets){
var bubbled_sets__8683 = clojure.set.bubble_max_key.call(null,(function (p1__8677_SHARP_){
return (- cljs.core.count.call(null,p1__8677_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,intersection,cljs.core.first.call(null,bubbled_sets__8683),cljs.core.rest.call(null,bubbled_sets__8683));
};
var G__8686 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8686__delegate.call(this, s1, s2, sets);
};
G__8686.cljs$lang$maxFixedArity = 2;
G__8686.cljs$lang$applyTo = (function (arglist__8687){
var s1 = cljs.core.first(arglist__8687);
var s2 = cljs.core.first(cljs.core.next(arglist__8687));
var sets = cljs.core.rest(cljs.core.next(arglist__8687));
return G__8686__delegate(s1, s2, sets);
});
G__8686.cljs$lang$arity$variadic = G__8686__delegate;
return G__8686;
})()
;
intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return intersection__1.call(this,s1);
case 2:
return intersection__2.call(this,s1,s2);
default:
return intersection__3.cljs$lang$arity$variadic(s1,s2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
intersection.cljs$lang$maxFixedArity = 2;
intersection.cljs$lang$applyTo = intersection__3.cljs$lang$applyTo;
intersection.cljs$lang$arity$1 = intersection__1;
intersection.cljs$lang$arity$2 = intersection__2;
intersection.cljs$lang$arity$variadic = intersection__3.cljs$lang$arity$variadic;
return intersection;
})()
;
/**
* Return a set that is the first set without elements of the remaining sets
* @param {...*} var_args
*/
clojure.set.difference = (function() {
var difference = null;
var difference__1 = (function (s1){
return s1;
});
var difference__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2)))
{return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item))
{return cljs.core.disj.call(null,result,item);
} else
{return result;
}
}),s1,s1);
} else
{return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});
var difference__3 = (function() { 
var G__8688__delegate = function (s1,s2,sets){
return cljs.core.reduce.call(null,difference,s1,cljs.core.conj.call(null,sets,s2));
};
var G__8688 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8688__delegate.call(this, s1, s2, sets);
};
G__8688.cljs$lang$maxFixedArity = 2;
G__8688.cljs$lang$applyTo = (function (arglist__8689){
var s1 = cljs.core.first(arglist__8689);
var s2 = cljs.core.first(cljs.core.next(arglist__8689));
var sets = cljs.core.rest(cljs.core.next(arglist__8689));
return G__8688__delegate(s1, s2, sets);
});
G__8688.cljs$lang$arity$variadic = G__8688__delegate;
return G__8688;
})()
;
difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return difference__1.call(this,s1);
case 2:
return difference__2.call(this,s1,s2);
default:
return difference__3.cljs$lang$arity$variadic(s1,s2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
difference.cljs$lang$maxFixedArity = 2;
difference.cljs$lang$applyTo = difference__3.cljs$lang$applyTo;
difference.cljs$lang$arity$1 = difference__1;
difference.cljs$lang$arity$2 = difference__2;
difference.cljs$lang$arity$variadic = difference__3.cljs$lang$arity$variadic;
return difference;
})()
;
/**
* Returns a set of the elements for which pred is true
*/
clojure.set.select = (function select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k)))
{return s;
} else
{return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
* Returns a rel of the elements of xrel with only the keys in ks
*/
clojure.set.project = (function project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__8690_SHARP_){
return cljs.core.select_keys.call(null,p1__8690_SHARP_,ks);
}),xrel));
});
/**
* Returns the map with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename_keys = (function rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__8698){
var vec__8699__8700 = p__8698;
var old__8701 = cljs.core.nth.call(null,vec__8699__8700,0,null);
var new__8702 = cljs.core.nth.call(null,vec__8699__8700,1,null);
if((function (){var and__3822__auto____8703 = cljs.core.not_EQ_.call(null,old__8701,new__8702);
if(and__3822__auto____8703)
{return cljs.core.contains_QMARK_.call(null,m,old__8701);
} else
{return and__3822__auto____8703;
}
})())
{return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,m,new__8702,cljs.core._lookup.call(null,m,old__8701,null)),old__8701);
} else
{return m;
}
}),map,kmap);
});
/**
* Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename = (function rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__8691_SHARP_){
return clojure.set.rename_keys.call(null,p1__8691_SHARP_,kmap);
}),xrel));
});
/**
* Returns a map of the distinct values of ks in the xrel mapped to a
* set of the maps in xrel with the corresponding values of ks.
*/
clojure.set.index = (function index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik__8705 = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik__8705,cljs.core.conj.call(null,cljs.core._lookup.call(null,m,ik__8705,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,xrel);
});
/**
* Returns the map with the vals mapped to the keys.
*/
clojure.set.map_invert = (function map_invert(m){
return cljs.core.reduce.call(null,(function (m,p__8715){
var vec__8716__8717 = p__8715;
var k__8718 = cljs.core.nth.call(null,vec__8716__8717,0,null);
var v__8719 = cljs.core.nth.call(null,vec__8716__8717,1,null);
return cljs.core.assoc.call(null,m,v__8719,k__8718);
}),cljs.core.ObjMap.EMPTY,m);
});
/**
* When passed 2 rels, returns the rel corresponding to the natural
* join. When passed an additional keymap, joins on the corresponding
* keys.
*/
clojure.set.join = (function() {
var join = null;
var join__2 = (function (xrel,yrel){
if((function (){var and__3822__auto____8736 = cljs.core.seq.call(null,xrel);
if(and__3822__auto____8736)
{return cljs.core.seq.call(null,yrel);
} else
{return and__3822__auto____8736;
}
})())
{var ks__8738 = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__8737__8739 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.PersistentVector.fromArray([xrel,yrel], true):cljs.core.PersistentVector.fromArray([yrel,xrel], true));
var r__8740 = cljs.core.nth.call(null,vec__8737__8739,0,null);
var s__8741 = cljs.core.nth.call(null,vec__8737__8739,1,null);
var idx__8742 = clojure.set.index.call(null,r__8740,ks__8738);
return cljs.core.reduce.call(null,(function (ret,x){
var found__8743 = idx__8742.call(null,cljs.core.select_keys.call(null,x,ks__8738));
if(cljs.core.truth_(found__8743))
{return cljs.core.reduce.call(null,(function (p1__8706_SHARP_,p2__8707_SHARP_){
return cljs.core.conj.call(null,p1__8706_SHARP_,cljs.core.merge.call(null,p2__8707_SHARP_,x));
}),ret,found__8743);
} else
{return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,s__8741);
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
});
var join__3 = (function (xrel,yrel,km){
var vec__8744__8745 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.PersistentVector.fromArray([xrel,yrel,clojure.set.map_invert.call(null,km)], true):cljs.core.PersistentVector.fromArray([yrel,xrel,km], true));
var r__8746 = cljs.core.nth.call(null,vec__8744__8745,0,null);
var s__8747 = cljs.core.nth.call(null,vec__8744__8745,1,null);
var k__8748 = cljs.core.nth.call(null,vec__8744__8745,2,null);
var idx__8749 = clojure.set.index.call(null,r__8746,cljs.core.vals.call(null,k__8748));
return cljs.core.reduce.call(null,(function (ret,x){
var found__8750 = idx__8749.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k__8748)),k__8748));
if(cljs.core.truth_(found__8750))
{return cljs.core.reduce.call(null,(function (p1__8708_SHARP_,p2__8709_SHARP_){
return cljs.core.conj.call(null,p1__8708_SHARP_,cljs.core.merge.call(null,p2__8709_SHARP_,x));
}),ret,found__8750);
} else
{return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,s__8747);
});
join = function(xrel,yrel,km){
switch(arguments.length){
case 2:
return join__2.call(this,xrel,yrel);
case 3:
return join__3.call(this,xrel,yrel,km);
}
throw('Invalid arity: ' + arguments.length);
};
join.cljs$lang$arity$2 = join__2;
join.cljs$lang$arity$3 = join__3;
return join;
})()
;
/**
* Is set1 a subset of set2?
*/
clojure.set.subset_QMARK_ = (function subset_QMARK_(set1,set2){
var and__3822__auto____8753 = (cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2));
if(and__3822__auto____8753)
{return cljs.core.every_QMARK_.call(null,(function (p1__8720_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__8720_SHARP_);
}),set1);
} else
{return and__3822__auto____8753;
}
});
/**
* Is set1 a superset of set2?
*/
clojure.set.superset_QMARK_ = (function superset_QMARK_(set1,set2){
var and__3822__auto____8755 = (cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2));
if(and__3822__auto____8755)
{return cljs.core.every_QMARK_.call(null,(function (p1__8751_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__8751_SHARP_);
}),set2);
} else
{return and__3822__auto____8755;
}
});

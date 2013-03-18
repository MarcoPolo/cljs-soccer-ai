goog.provide('manager_task.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('clojure.browser.repl');
goog.require('noir.cljs.client.watcher');
noir.cljs.client.watcher.init.call(null);
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
manager_task.client.main.$content = jayq.core.$.call(null,"\uFDD0'#content");
var group__8372__auto____8504 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
manager_task.client.main.up_and_running = (function up_and_running(){
var elem__8373__auto____8506 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'p.alert","This is a demo of manager task assignment"], true));
elem__8373__auto____8506.setAttribute("crateGroup",group__8372__auto____8504);
return elem__8373__auto____8506;
});
manager_task.client.main.up_and_running.prototype._crateGroup = group__8372__auto____8504;
manager_task.client.main.stage = (new createjs.Stage("demoCanvas"));
manager_task.client.main.stage.addChild(manager_task.client.main.circle);
manager_task.client.main.stage.update();
manager_task.client.main.update_screen_60hz = (function update_screen_60hz(){
return setInterval((function (){
return manager_task.client.main.stage.update();
}),15);
});
manager_task.client.main.screen_refresh = manager_task.client.main.update_screen_60hz.call(null);
manager_task.client.main.approach_point = (function approach_point(x,target){
if((x < target))
{return (x + 1);
} else
{if((x > target))
{return (x - 1);
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
});
manager_task.client.main.register_shape_atom = (function register_shape_atom(shape){
cljs.core.add_watch.call(null,shape,"\uFDD0'movements",(function (k,r,old_state,new_state){
var shape__8508 = (new cljs.core.Keyword("\uFDD0'easel-shape")).call(null,new_state);
shape__8508.x = (new cljs.core.Keyword("\uFDD0'x")).call(null,new_state);
return shape__8508.y = (new cljs.core.Keyword("\uFDD0'y")).call(null,new_state);
}));
return shape;
});
manager_task.client.main.add_and_update_stage = (function add_and_update_stage(shape){
manager_task.client.main.stage.addChild(shape);
return manager_task.client.main.stage.update();
});
manager_task.client.main.create_square = (function create_square(p__8509){
var map__8519__8520 = p__8509;
var map__8519__8521 = ((cljs.core.seq_QMARK_.call(null,map__8519__8520))?cljs.core.apply.call(null,cljs.core.hash_map,map__8519__8520):map__8519__8520);
var color__8522 = cljs.core._lookup.call(null,map__8519__8521,"\uFDD0'color","blue");
var height__8523 = cljs.core._lookup.call(null,map__8519__8521,"\uFDD0'height",10);
var width__8524 = cljs.core._lookup.call(null,map__8519__8521,"\uFDD0'width",10);
var y__8525 = cljs.core._lookup.call(null,map__8519__8521,"\uFDD0'y",0);
var x__8526 = cljs.core._lookup.call(null,map__8519__8521,"\uFDD0'x",0);
var square__8527 = (new createjs.Shape());
square__8527.graphics.beginFill(color__8522).drawRect(x__8526,y__8525,width__8524,height__8523);
manager_task.client.main.add_and_update_stage.call(null,square__8527);
return manager_task.client.main.register_shape_atom.call(null,cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'easel-shape","\uFDD0'x","\uFDD0'y"],{"\uFDD0'easel-shape":square__8527,"\uFDD0'x":x__8526,"\uFDD0'y":y__8525})));
});
manager_task.client.main.create_circle = (function create_circle(p__8529){
var map__8538__8539 = p__8529;
var map__8538__8540 = ((cljs.core.seq_QMARK_.call(null,map__8538__8539))?cljs.core.apply.call(null,cljs.core.hash_map,map__8538__8539):map__8538__8539);
var color__8541 = cljs.core._lookup.call(null,map__8538__8540,"\uFDD0'color","red");
var radius__8542 = cljs.core._lookup.call(null,map__8538__8540,"\uFDD0'radius",10);
var y__8543 = cljs.core._lookup.call(null,map__8538__8540,"\uFDD0'y",0);
var x__8544 = cljs.core._lookup.call(null,map__8538__8540,"\uFDD0'x",0);
var circle__8545 = (new createjs.Shape());
circle__8545.graphics.beginFill(color__8541).drawCircle(x__8544,y__8543,radius__8542);
manager_task.client.main.add_and_update_stage.call(null,circle__8545);
return manager_task.client.main.register_shape_atom.call(null,cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'easel-shape","\uFDD0'x","\uFDD0'y"],{"\uFDD0'easel-shape":circle__8545,"\uFDD0'x":x__8544,"\uFDD0'y":y__8543})));
});
manager_task.client.main.move_item_to = (function move_item_to(entity,x,y,speed){
clearTimeout((new cljs.core.Keyword("\uFDD0'movement")).call(null,cljs.core.deref.call(null,entity),0));
if((function (){var or__3824__auto____8547 = cljs.core.not_EQ_.call(null,x,(new cljs.core.Keyword("\uFDD0'x")).call(null,cljs.core.deref.call(null,entity)));
if(or__3824__auto____8547)
{return or__3824__auto____8547;
} else
{return cljs.core.not_EQ_.call(null,y,(new cljs.core.Keyword("\uFDD0'y")).call(null,cljs.core.deref.call(null,entity)));
}
})())
{cljs.core.swap_BANG_.call(null,entity,(function (p1__8528_SHARP_){
return cljs.core.assoc.call(null,p1__8528_SHARP_,"\uFDD0'x",manager_task.client.main.approach_point.call(null,(new cljs.core.Keyword("\uFDD0'x")).call(null,cljs.core.deref.call(null,entity)),x),"\uFDD0'y",manager_task.client.main.approach_point.call(null,(new cljs.core.Keyword("\uFDD0'y")).call(null,cljs.core.deref.call(null,entity)),y));
}));
return cljs.core.swap_BANG_.call(null,entity,(function (e){
return cljs.core.assoc.call(null,e,"\uFDD0'movement",setTimeout((function (){
return move_item_to.call(null,entity,x,y,speed);
}),(1000 / speed)));
}));
} else
{return null;
}
});
manager_task.client.main.$content.html("");
jayq.core.append.call(null,manager_task.client.main.$content,manager_task.client.main.up_and_running.call(null));
console.log("Woot");
console.log("now we are reqady for some real development!");

(ns manager-task.client.main
  (:require [noir.cljs.client.watcher :as watcher]
            [clojure.browser.repl :as repl]
            [crate.core :as crate])
  (:use [jayq.core :only [$ append]])
  (:use-macros [crate.def-macros :only [defpartial]]))

;;************************************************
;; Dev stuff
;;************************************************

(watcher/init)
(repl/connect "http://localhost:9000/repl")

;;************************************************
;; Code
;;************************************************

(def $content ($ :#content))

(defpartial up-and-running []
  [:p.alert "This is a demo of manager task assignment"])

(comment
  (in-ns 'manager-task.client.main)
  )

(def stage
  (createjs/Stage. "demoCanvas"))

(def circle
  (createjs/Shape.)) 

;;
;;  circle.graphics.beginFill("red").drawCircle(0, 0, 40);
;;  //Set position of Shape instance.
;;  circle.x = circle.y = 50;
;;  //Add Shape instance to stage display list.
;;  stage.addChild(circle);
;;  //Update stage will render next frame
;;  stage.update();

(.beginFill (.-graphics circle) "red")

(-> 
    (.-graphics circle)
    (.beginFill "red")
    (.drawCircle 0 0 40))

(->> 50
  (set! (.-x circle))
  (set! (.-y circle)))

(.addChild stage circle)

(.update stage)


(def square
  (createjs/Shape.))

(->
  (.-graphics square)
  (.beginFill "blue")
  (.drawRect 0 0 50 50))

(->> 100
  (set! (.-x square))
  (set! (.-y square)))

(.addChild stage square)
(.update stage)


(defn move-square []
  (let [initial (.-x square)
        new-spot (mod (inc initial) 300)]
    (->> new-spot
      (set! (.-x square))
      (set! (.-y square)))))

(defn update-screen-60hz []
  (js/setInterval #(.update stage) 15))

(def k (js/setInterval move-square 10))
(js/clearInterval k)




stage


(.html $content "")
(append $content (up-and-running))

(.log js/console "WOot")

(.log js/console "now we are reqady for some real development!")

(defn abc [] (.log js/console "hello"))


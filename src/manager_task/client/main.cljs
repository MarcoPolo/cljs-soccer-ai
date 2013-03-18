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

(.addChild stage circle)

(.update stage)


(defn update-screen-60hz []
  (js/setInterval #(.update stage) 15))

;;(js/clearInterval screen-refresh)
(def screen-refresh (update-screen-60hz))




(defn approach-point [x target]
  (cond 
    (< x target) (inc x)
    (> x target) (dec x)
    :else x))

;; registers a shape to update when it's atom changes
(defn register-shape-atom [shape]
  ;; Add a watch on this atom to update the screen
  (add-watch shape :movements
             (fn [k r old-state new-state]
               (let [shape (:easel-shape new-state)]
                 (set! (.-x shape) (:x new-state))
                 (set! (.-y shape) (:y new-state)))))
  shape)

(defn add-and-update-stage [shape] 
  (.addChild stage shape)
  (.update stage))

;; Returns an atom containing the state of that square
(defn create-square [{:keys [x y width height color] :or {x 0 y 0 width 10 height 10 color "blue"}}]
  (let [square (createjs/Shape.)]
    (-> (.-graphics square)
      (.beginFill color)
      (.drawRect x y width height))
    (add-and-update-stage square)
    (register-shape-atom
      (atom {:easel-shape square
             :x x
             :y y}))))

(defn create-circle [{:keys [x y radius color] :or {x 0 y 0 radius 10 color "red"}}]
  (let [circle (createjs/Shape.)]
    (-> 
        (.-graphics circle)
        (.beginFill color)
        (.drawCircle x y radius))
    (add-and-update-stage circle)
    (register-shape-atom 
      (atom {:easel-shape circle
             :x x
             :y y}))))

(defn move-item-to [entity x y speed]
  (js/clearTimeout (:movement @entity 0))
  (when (or 
          (not= x (:x @entity)) 
          (not= y (:y @entity))) 
    (swap! entity #(assoc % :x (approach-point (:x @entity) x)
                            :y (approach-point (:y @entity) y)))
    (swap! entity 
           (fn [e]
             (assoc e
                   :movement
                   (js/setTimeout #(move-item-to entity x y speed) (/ 1000 speed)))))))



(.html $content "")
(append $content (up-and-running))

(.log js/console "Woot")

(.log js/console "now we are reqady for some real development!")

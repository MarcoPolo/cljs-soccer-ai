(ns manager-task.views.common
  (:require [noir.cljs.core :as cljs])
  (:use [noir.core :only [defpartial]]
        [hiccup.page :only [include-css html5 include-js]]))

(defpartial layout [& content]
            (html5
              [:head
               [:title "manager-task"]
               (include-css "/css/reset.css")
               (include-css "/css/default.css")]
              [:body
               [:div#wrapper
                content]
               [:div#score-team1.score 0]
               [:div#score-team2.score 0]
               [:div#canvasContainer
                 [:canvas#demoCanvas {:width "800px" :height "400px"}]]
               (include-js 
                 "http://code.createjs.com/createjs-2013.02.12.min.js")
               (cljs/include-scripts :with-jquery)]))

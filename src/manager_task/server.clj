(ns manager-task.server
  (:require [noir.server :as server]
            [noir.cljs.core :as cljs]))

(server/load-views-ns 'manager-task.views)
(def cljs-options {:simple {:externs ["externs/jquery.js"]}})

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "8090"))]
    (cljs/start mode cljs-options)
    (server/start port {:mode mode
                        :ns 'manager-task})))

(ns manager-task.client.game
  (:require [manager-task.client.main :as core])
  (:use [jayq.core :only [$ append]]))

(.log js/console "from inside the game")

(def ball (core/create-circle {:color "black" }))

(defn create-player [team-color]
  (let [atom (core/create-square {:color team-color :height 20 :width 20})]
    (swap! 
      atom
      #(assoc % :team team-color))
    atom))


;; Create the teams
(def team1
  (map #(create-player "red") (range 5))) 

(def team2
  (map #(create-player "blue") (range 5))) 

;; Create goal boxes
 
(def goal1
  (core/create-square {:color "grey" :height 100 :x 0 :y 140}))

(def goal2
  (core/create-square {:color "grey" :height 100 :x 790 :y 140}))

(def score-team1 (atom 0))
(def score-team2 (atom 0))

(def $score-1-el ($ :#score-team1))
(def $score-2-el ($ :#score-team2))


(add-watch score-team1 :score
           (fn [k r old-state new-state]
             (.html $score-1-el new-state)))

(add-watch score-team2 :score
           (fn [k r old-state new-state]
             (.html $score-2-el new-state)))

;; define where the goal post is
(def red-team-goal [800 180])

(def blue-team-goal [0 180])

(defn in-goal1? [x y]
  (and 
    (< 140 y 230)
    (> 10 x)))

(defn in-goal2? [x y]
  (and 
    (< 140 y 230)
    (<= 790 x)))

(declare pause-for-nsecs)

(defn check-goal [ball score-team1 score-team2]
  (let [{:keys [x y]} @ball]
    (cond
      (in-goal1? x y) (swap! score-team2 inc)
      (in-goal2? x y) (swap! score-team1 inc))
    (if (or 
          (in-goal1? x y)
          (in-goal2? x y))
      (do 
        (pause-for-nsecs 5)
        (reset)
        (reset)
        (reset)
        ))))


;; Place the teams

(def checker-team-1 (reduce concat (take 5 (repeatedly #(vector 50 100)))))
(def checker-team-2 (reduce concat (take 5 (repeatedly #(vector 750 700)))))

(defn place-team [team pattern-x pattern-y]
  (doseq [player-spot (map vector team pattern-y pattern-x)]
      (core/move-item-to (first player-spot) (nth player-spot 2) (second player-spot) 1000)))


(defn reset []
  (place-team team1 checker-team-1 (range 75 400 50)) 
  (place-team team2 checker-team-2 (range 75 400 50))
  (core/move-item-to ball 400 200 1000))

(reset)

;; Show me your moves!


(rand-int 10)


(def kick-strength 80)

(defn find-along-path [start goal steps]
  (last (take steps (iterate #(core/approach-point % goal) start))))


(defn kick-ball [ball goal]
  (let [new-x (find-along-path (:x @ball) (first goal) (+ kick-strength (rand-int 40)))
        new-y (+
                (find-along-path (:y @ball) (second goal) kick-strength)
                (- (rand-int 50) 25))]
    (core/move-item-to ball new-x new-y 1000)))

(defn player-kick-ball [player ball]
  (let [team (:team @player)]
    (if (= team "red")
      (kick-ball ball red-team-goal)
      (kick-ball ball blue-team-goal))))

(defn distance-btwn-items [item1 item2]
  (Math/sqrt 
    (Math/pow
      (- (:x item1) (:x item2))
      2)
    (Math/pow
      (- (:y item1) (:y item2))
      2)))


(defn chase-ball [player ball]
  (core/move-item-to player 
                     (find-along-path (:x @player) (:x @ball) 10)
                     (find-along-path (:y @player) (:y @ball) 10)
                     100)
  (if (and (= (:x @player) (:x @ball)) (= (:y @player) (:y @ball)))
      (player-kick-ball player ball)))
    
;; Some functions to know who is the closest
(defn find-closest-player [players ball]
  (apply min-key #(distance-btwn-items (deref %) @ball) players))


;; The naive team will just try to get the ball by any cost
 
(defn play-naive-ball [players ball]
  (let [closest-player (find-closest-player players ball)
        chasing-atom (atom true)]
    (chase-ball closest-player ball)))


;; The blue team has a manger task assignment to survey the situation and move accordingly
 

;; Figure out the closest players
(defn sort-closest-players [players ball]
  (sort #( < (distance-btwn-items (deref %1) @ball) (distance-btwn-items (deref %2) @ball)) players))

;; get the couple of closest-players
(defn get-closest-two-players [players ball]
  (take 2 (sort-closest-players players ball)))

;; Get the rest, these guys will be defence
(defn get-farthest-players [players ball]
  (drop 2 (sort-closest-players players ball)))


(defn group-chase-ball [players ball]
  (let [players (get-closest-two-players players ball)]
    (doseq [player players]
      (chase-ball player ball))))

(defn protect-goal [player ball goal]
  (let [goal (zipmap [:x :y] goal)]
    (if (> 20 (distance-btwn-items @ball goal))
      ;; if the ball is near the goal we will act on it
      (chase-ball player ball ))))

(defn protect-goal-with-players [players ball goal ]
  (let [players (get-farthest-players players ball)]
    (doseq [player players]
      (protect-goal player ball goal)))) 
    

(def continue-chase-ball? (atom true))

(def stuff-to-run (atom []))
(defn game-loop []
  (doseq [func @stuff-to-run]
    (func)))
(def game-loop-saved-interval (atom (js/setInterval game-loop 10)))
;(js/clearInterval game-loop-saved-interval)


(defn pause-game []
  (js/clearInterval @game-loop-saved-interval))

(defn start-game []
  (reset! game-loop-saved-interval (js/setInterval #(game-loop) 10)))

(defn pause-for-nsecs [n]
  (pause-game)
  (js/setTimeout start-game (* n 1e3)))


  (pause-for-nsecs 8)

  (swap! stuff-to-run conj #(play-naive-ball team1 ball))
  (swap! stuff-to-run conj #(group-chase-ball team2 ball))
  (swap! stuff-to-run conj #(protect-goal-with-players team2 ball red-team-goal))
  (swap! stuff-to-run conj #(check-goal ball score-team1 score-team2))


(comment

  ;; Have one person chase the ball
  (chase-ball (first team2) ball)
  (play-naive-ball team1 ball)

  ;; What does this look like
  (group-chase-ball team2 ball)

  )

(comment

  (reset)
  (pause-game)
  (start-game)

  (reset! stuff-to-run [])
  (swap! stuff-to-run conj #(check-goal ball score-team1 score-team2))


  ;; Two naive players
  (swap! stuff-to-run conj #(play-naive-ball team1 ball))
  (swap! stuff-to-run conj #(play-naive-ball team2 ball))

  ;; one managed player
  (swap! stuff-to-run conj #(play-naive-ball team1 ball))
  (swap! stuff-to-run conj #(group-chase-ball team2 ball))
  (swap! stuff-to-run conj #(protect-goal-with-players team2 ball red-team-goal))

  ;; both managed
  (swap! stuff-to-run conj #(group-chase-ball team1 ball))
  (swap! stuff-to-run conj #(protect-goal-with-players team1 ball red-team-goal))
  (swap! stuff-to-run conj #(group-chase-ball team2 ball))
  (swap! stuff-to-run conj #(protect-goal-with-players team2 ball red-team-goal))




    
  )







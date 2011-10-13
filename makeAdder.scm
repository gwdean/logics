; adapted from (haverbeke 2011 35)

(define (makeAdder amount)
  (lambda (number)
    (+ number amount)))

(define add10 (makeAdder 10))

(add10 1)
(add10 2)
(add10 3)
(add10 4)
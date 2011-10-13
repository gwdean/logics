#lang racket
; tower of hanoi is an example of tree recursion
(define (move-tower size from to extra)
  (cond ((= size 0) true)
        (else (move-tower (- size 1) from extra to)
              (print-move from to)
              (move-tower (- size 1) extra to from))))

(define (print-move from to)
  (newline)
  (display "move top disk from ") (display from)
  (display " to ") (display to))
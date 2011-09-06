#lang racket
; from htdp

; 32
(define (is-between-5-6? n)
  (and (< 5 n) (< n 6)))

; 33
(define (is-between-5-6-or-over-10? n)
  (or (is-between-5-6? n) (>= n 10)))

; 35
(define (equation1 x)
  (= (+ (* x x) (+ (* 2 x) 1)) 0))

(equation1 -1) ; #t 
(equation1 1)  ; #f
#lang scheme
; from sicp 1.3.4...an eye-opener on 9/15/11
(define (deriv f dx)
  (lambda (x)
    (/ (- (f (+ x dx)) (f x))
       dx)))

(define (cube x) (* x x x))

((deriv cube .001) 5)
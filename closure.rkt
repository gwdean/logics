#lang racket
; from StackOverflow -> What is a 'Closure'?

(define (make-counter)
  (let ((count 0))
    (lambda ()
      (set! count (+ count 1))
      count)))

(define x (make-counter))
(x)
(x)
(x)

; currying example
(define (add a)
  (lambda (b)
    (+ a b)))

(define add3 (add 3))
(add3 4)
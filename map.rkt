#lang racket
; from Jim Larson, "An Introduction to Lambda Calculus and Scheme"
(define (list-of-squares l)
  (define (iter l)
    (if (null? l)
        (quote ())
        (cons ((lambda (x) (* x x)) (car l)) (iter (cdr l)))))
  (iter l))

(define (mp f l)
  (define (iter l)
    (if (null? l)
        (quote ())
        (cons (f (car l)) (iter (cdr l)))))
  (iter l))

(define (los l)
  (mp (lambda (x) (* x x)) l))
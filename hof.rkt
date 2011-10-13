#lang racket
; selected functions from Hofstadter's trilogy on Recursion and Lisp

(define rac
  (lambda (list)
    (car (reverse list))))

(define digest
  (lambda (biglist)
    (cons (car biglist) (cons (rac biglist) '()))))

(define rdc
  (lambda (list)
    (reverse (cdr (reverse list)))))

(define snoc
  (lambda (x list) (reverse (cons x (reverse list)))))

(define twice
  (lambda (n)
    (+ n n)))

(define yo '(1 2 3 4 5 6 7 8))

(digest yo)
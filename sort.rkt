#lang racket
;; sort : list-of-numbers -> list-of-numbers (sorted)
;; to create a list of numbers with the same numbers
;; as alon sorted in descending order
(define (sort alon)
  (cond
    ((empty? alon) empty)
    ((cons? alon) (insert (first alon) (sort (rest alon))))))

;; insert : number list-of-numbers (sorted) -> list-of-numbers (sorted)
;; to create a list of numbers from n and the numbers on alon that is sorted in descending order; alon is sorted
(define (insert n alon)
  (cond
    ((empty? alon) (cons n empty))
    (else (cond
            ((>= n (first alon)) (cons n alon))
            ((<  n (first alon)) (cons (first alon) (insert n (rest alon))))))))

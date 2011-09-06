#lang racket
(define functions '(set? set? makeset makeset subset? subset? subset? eqset? eqset? eqset? eqset? intersect? intersect? intersect? intersect union xxx intersectall a-pair? first second
build third fun? revrel revrel revpair revrel fullfun?
one-to-one?))

(define member?
  (lambda (a lat)
    (cond
      ((null? lat) #f)
      (else (or (eq? (car lat) a)
              (member? a (cdr lat)))))))

; makeset -> member? version
(define makeset
  (lambda (lat)
    (cond
      ((null? lat) (quote ()))
      ((member? (car lat) (cdr lat))
       (makeset (cdr lat)))
      (else (cons (car lat)
              (makeset (cdr lat)))))))

(define set-of-functions  (makeset functions))

set-of-functions
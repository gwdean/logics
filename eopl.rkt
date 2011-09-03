#lang racket
; from eopl-2
(define in-S?
  (lambda (n)
    (if (zero? n) #t
        (if (>= (- n 3) 0)
            (in-S? (- n 3))
            #f))))
(in-S? 3) ; #t
(in-S? 4) ; #f

(define (in-XS? n)
  (if (zero? n) #t
      (if (>= (- n 3) 0)
          (in-S? (- n 3))
          #f)))
(in-XS? 3) ; #t
(in-XS? 4) ; #f
(TeX-add-style-hook
 "figure"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-class-options
                     '(("article" "landscape")))
   (TeX-run-style-hooks
    "latex2e"
    "article"
    "art10"
    "tikz"
    "bm"
    "amsmath"
    "graphicx")
   (TeX-add-symbols
    '("ubm" 1)
    '("ubar" 1)
    "midarrow"
    "Rr"
    "Tt"))
 :latex)


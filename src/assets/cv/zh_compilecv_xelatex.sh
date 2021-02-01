#!/bin/bash
# this compile process (xelatex) use when you have specific font in tex file
# otherwise, just use latex instead
xelatex cv_Dong_zh.tex
bibtex bu1
bibtex bu2
bibtex bu3
xelatex cv_Dong_zh.tex

# pdf2htmlEX --zoom 2 cv_Pol.pdf

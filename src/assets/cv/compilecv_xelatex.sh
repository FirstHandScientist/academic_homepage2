#!/bin/bash
# this compile process (xelatex) use when you have specific font in tex file
# otherwise, just use latex instead
xelatex cv_Dong.tex
bibtex bu1
xelatex cv_Dong.tex
xelatex cv_Dong.tex
# pdf2htmlEX --zoom 2 cv_Pol.pdf

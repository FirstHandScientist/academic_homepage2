#!/bin/bash

xelatex cv_Dong.tex
bibtex bu1
xelatex cv_Dong.tex
xelatex cv_Dong.tex
# pdf2htmlEX --zoom 2 cv_Pol.pdf

# How I use the command line <!-- .element style="font-size:2em"-->

Jorge Sanz · jorge@carto.com

2017-04-04

<img class="noborder" src="../resources/carto/logo_CARTO_negative_180.png" style="width:25%;">

---

## Agenda

* Terminals
* Viewing and finding things
* Handling data

---

## Terminals

* Browsing your history
* Moving
* Scripting
* Piping and redirections
* Customizing your prompt
___

### bash versus zsh

* bash provides more compatibility
* zsh provides better user experience:
  * browsing your history
  * sharing history accross terminals
  * better autocompletion
* [Differences between bash and zsh](https://www.quora.com/What-is-the-difference-between-bash-and-zsh)
___

### browse your history

* Increase the value of `HISTSIZE`
* `CTL + R` to search over terminal history (and repeat)
* `zsh`: start typing command and go up
* `!!` to run the last command
* `^before^after` change `before` on the last command by `after`
___

### moving around

* `CTL + L`: clean the screen
* `CTL + S` and `CTL+Q`: stop and resume output
* `CTL + A`, `CTL + E`: go to the begin/end of the line
* More [Bash and zsh shortcuts](http://www.geekmind.net/2011/01/shortcuts-to-improve-your-bash-zsh.html)

___

### scripting

* Automate stuff (for big stuff use Python, Ruby, etc)
* You can create functions, check variables, make calculations
* Control structures: `if`, `for`, `while`, etc

```sh
while 1; do
  echo `date`;
  curl -s "${CARTO_API_URL}v2/sql/job/${JOB_ID}"
  sleep 20
done
```

___

### Piping and redirections

TODO
___

### Customizing your prompt

TODO

---

## Viewing and finding things

* head and tail
* find
* awk
* sed
* grep
* j (jump)
* pygmentize
* sag

___

### `head` and `tail`

* Print the beginning and end of a file <br/>`head -n10 myfile.csv`
* Print a file that is changing <br/> `tail -f /var/log/syslog`

___

### `find`

Find stuff and do things with them

```sh
$ find . -name ".DS_Store" -type f -delete
$ find . -name ".gitignore" -type f -exec cat {} \;
```

[35 `find` examples](http://www.tecmint.com/35-practical-examples-of-linux-find-command/)

___

### `awk`

* Programming language to process files
* I've only used it to process tabular data

```
$ head -n10 populated_places.csv | \
  awk -F ","  '{print $1 "," $7 "," $8}'
```

* [`awk` tutorial](https://www.tutorialspoint.com/awk/awk_quick_guide.htm) (randomly selected)

___

### `sed`

* Great for working with text files:
  * replacing texts
  * finding patterns
  * working with line numbers
* `sed` examples: [1](https://www.ibm.com/developerworks/library/l-sed1/), [2](https://www.ibm.com/developerworks/library/l-sed2/)
  and [3](https://www.ibm.com/developerworks/library/l-sed3/)

```sh
$ sed -n -e '/\#.*/p' /etc/hosts # Print comments
$ cat /etc/hosts | \
  sed -e '/\#.*/d' | \ # comments
  sed -e '/^\s*$/d' | \ # blank lines
  sed -e 's/[\ \t].*//g' # everything after a space or tab
$ sed -n '2,10p' my.csv # print a range
```

---

## Handling data

* split
* jq
* csvkit
* ogr2ogr, ogrinfo

---

Thanks!!
===================================

## How I use the command line

Jorge Sanz · jorge@carto.com

2017-04-04

<img class="noborder" src="../resources/carto/logo_CARTO_negative_180.png" style="width:25%;">

<!--
RESOURCES

COLORS:

Location Red
#F24440
#FF918F

Navy Blue
#162945

Purple
#C6ACFC
#C6ACFC

Prediction Blue
#1785FB

Green
#73C86B
-->

# Coding Exercises in JavaScript

A collection of small exercises, puzzles, and coding problems in JavaScript.

## Exercises

### Guess The Number

Write a program that will generate a number between 1 and 100. Your program will ask the user to guess the generated number.

When the user types a guess, the program should tell them if they won (the guess matched the computer's number), if their guess was higher than the number the computer generated, OR if the guess was lower than the number the computer generated. Terminate the program if the user types "exit".

Keep asking the user to input a number if the number differs from the computer's number (loops!).

---

### Scrab-Bag

Scrabble (the game in which players remove tiles with letters on them from a bag and use them to create words on the game board) has a set number of 100 tiles.

This number does not change between games, nor does the frequency of each letter.

[Frequency and point value of each tile.](http://scrabblewizard.com/scrabble-tile-distribution/)

Represent each tile by the letter that appears on it, and blank tiles by underscores (`_`).

**Input:**

An uppercase string with the tiles that have already been played.

E.g., if 14 tiles have been played, you would be given an input like this:

```
AERETOXMYCNS_B
```

**Output:**

The number of tiles remaining followed by a comma separated list of the tiles themselves.

For example:

```
10: E
9: I
8: A
7: O
5: R, N, T
4: U, L, D
3: G, S
2: P, H, F, V, W
1: B, Y, J, K, M, Q, C, Z, _
0: X
```
---

### String Indices

Write a program that parses the words in a string by providing a numerical index, similar to how you would access an element in array with a numerical index.

**Example:**

`"Catch me outside, how about that?"`

If you asked for the word at index `3` you would get `outside` back (for the purposes of this challenge, our index will start at `1`, not `0`).

If you ask for the word at index `7`, your program should return an empty string (`''`) because the string contains only 6 words. Negative indices should also return an empty string (`''`).

---

### Fibonacci Bases

Binary (base 2) numbers use `1` and `0` to represent the powers of two that can be summed to yield a base 10 (or decimal) result.

For example:

| 16 | 8 | 4 | 2 | 1 |
|:---|:--|:--|:--|:--|
| 1  | 0 | 1 | 0 | 1 |

`10101 = 16 + 4 + 1 = 21`

So `10101` is binary for `21`.

The [Fibonacci Sequence](https://en.wikipedia.org/wiki/Fibonacci_number) has a similar property: any positive integer can be written in the form of Fibonacci numbers.

For example:

| 21 | 13 | 8 | 5 | 3 | 2 | 1 | 1 |
|:---|:---|:--|:--|:--|:--|:--|:--|
| 0  | 1  | 1 | 0 | 0 | 0 | 0 | 0 |

`1100000 = 13 + 8 = 21`

So `1100000` is base Fibonacci for `21`

Write a program that converts from **decimal to base Fibonacc**i and from **Fibonacci to decimal**.

**Example Inputs** (the `decimal` and `fib` labels describe the state the number is currently in):

`decimal 16`
`decimal 31`
`fib 10`
`fib 1`
`fib 11111`

**Example Outputs:**

`1001000`
`10100100`
`1`
`1`
`12`

**NOTE:** there can be more than one possible representation of a decimal integer in base Fibonacci (as seen in the 3rd and 4th cases above).

---

### The Disemvowling

Disemvoweling means removing the vowels (a, e, i, o, u) from text.

**Input:**

A string that contains several words to disemvowel. It will consist of all lowercase letters without punctuation. The only non a-z character you should handle is spaces.

**Output:**

The disemvowled text with spaces removed.

**Example Input:**

`i am groot`

**Example Output:**

`mgrt`

---

### Where in the JSON?

```JavaScript
{
    "name": "William Shakespeare",
    "dead" : true,
    "works" : [
        {
            "name" : "Romeo and Juliet",
            "published" : 1591,
            "isAwesome" : true
        },
        {
            "name" : "Richard III",
            "published" : 1592,
            "isAwesome" : false
        }
    ],
    "favoriteSites" : [
        "tumblr",
        "4chan"
    ]
}
```

If you wish to find the name of the first play in the list of Shakespeare's works, the "path" to it would look like like this:

`works -> 0 -> name`

You would say that the value located at this path is "Romeo and Juliet". The value "tumblr" is located at:

`favoriteSites -> 0`

Your task is to find a user-provided key hidden in a JSON object.

You will be given a JSON object, and you will print out the search path that leads to the value "4chan". You are allowed to use any JSON parsing libraries that you want to.

**Input:**

JSON object.

**Output:**

The search path for the string in the format shown above (each element should be joined together with `->` between them.). Each element in the path will either be an integer (if indexing a list) or a string (if indexing an object).

---

### Who Wants A Date?

According to ISO 8601 standard, the best way to format a date is:

yyyy-mm-dd

Learners Guild's database has become corrupted with mixed up date formats.

They can come in *any* of the 6 formats below:

```
yyyy-mm-dd
mm/dd/yy
mm#yy#dd
dd*mm*yyyy
(month in words) dd, yy
(month in words) dd, yyyy
```

(month in words) can be:

`Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec`

Years are restricted to `1950-2049`.

**Input:**

The 1000 dates in [this gist](https://gist.github.com/deonna/d2800f6301d326979b3a71da8cf0cb8f).

**Output:**

All the dates in the `yyyy-mm-dd` ISO 8601 standard date format.

---

### Play it again, JavaScript!

Create an application that plays that Do–Re–Mi–Fa–So–La–Ti of theSolfège.

**BONUS:** Play some chords.

Put the code into a [JSBin](http://jsbin.com) instance to hear some sounds directly in your browser.

HINT: I'm just gonna leave [this](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) here.

---

### Parens-B-Gone

`(((7)))` is an expression that contains too many parentheses.

How many is "too many" parentheses?

If you can strip the expression of one set of parentheses, and the same expression still contains parentheses, it has too many parentheses.

In the above example, `(7)` would be the proper stripping of parentheses.

**Example Inputs:**
```
((1((23)(45)))6)

(((1234)(((5)67))))

12((3))
```

**Example Outputs:**
```
((1((23)(45)))6)

((1234)((5)67))

12(3)
```

---

### Resolving Symlinks

Many Unix-based systems support symbolic links (also known as symlinks). This is where one directory name is transparently mapped to another. Symbolic links can be used to 'redirect' one directory to another directory.

Your challenge is to resolve a given path name into its actual location given a series of symbolic links. Symbolic links can also point to other symbolic links.

**Example Input:**
```
1
/home/private/documents:/stuff/urgent/docs
/home/private/documents/office
```

**Example Output:**
```
/stuff/urgent/docs/office
```

**Another Example Input:**
```
3
/bin:/usr/bin
/usr/bin:/usr/local/bin/
/usr/local/bin/log:/var/log-2017
/bin/log/lib
```

**Another Example Output:**
```
/var/log-2017/lib
```

---

### Lairotcaf

The factorial operator (!) describes the product of an integer and all the integers below it.

`4! -> 4 * 3 * 2 * 1 -> 24`

Write a function that does the reverse of this for any positive integer.

**Example Inputs:**

`720`

`37`

**Example Output:**

`720 = 6!`

`37 NONE`

---

### String Me Along

Given an input string, print the longest substring that contains a maximum of two unique characters.

If there are multiple substrings that qualify as 'longest', print substring that is furthest to the right.

**Examples:**

```
ghhiiii -> hhiiii

efgefghiiikk -> iiikk
```

---

### Braille

Your goal is to read in a string of Braille characters (definition [here](https://en.wikipedia.org/wiki/English_Braille#Alphabet)) and translate the word to standard English letters (you can ignore any special characters, including spaces).

A lowered bump is a dot ('.'), and a raised bump is an upper-case 'O' character.


**Example Input:**

```
O. O. O. O. O. .O O. O. O. OO
OO .O O. O. .O OO .O OO O. .O
.. .. O. O. O. .O O. O. O. ..
```

**Example Output:**

```
helloworld
```

---

### String Permutations

Prints all of the permutations of the unique characters of an input string. For example, the permutation of the word "bar" would print the following:

```
bar
bra
abr
arb
rba
rab
```

---

### Finite State Gate

You just installed a new remote controlled gate, and you're having a blast playing with the remote clicker.

The clicker works like this:

If the gate is `OPEN` or `CLOSED`, clicking the remote will cause the it to move, until it completes the cycle of opening or closing.

`Gate: Closed -> remote clicked -> Gate: Opening -> Cycle complete -> Gate: Open.`

If the gate is currently opening or closing, clicking the remote will make it stop where it is.

When clicked again, the gate will go in the opposite direction, until the cycle is complete or the remote is clicked again.

The gate starts `CLOSED`.

**Example Input:**

```
remoteClicked
cycleComplete
remoteClicked
remoteClicked
remoteClicked
remoteClicked
remoteClicked
cycleComplete
```
**Example Output:**

```
Gate: CLOSED
Remote clicked.
Gate: OPENING
Cycle complete.
Gate: OPEN
Remote clicked.
Gate: CLOSING
Remote clicked.
Gate: STOPPED_WHILE_CLOSING
Remote clicked.
Gate: OPENING
Remote clicked.
Gate: STOPPED_WHILE_OPENING
Remote clicked.
Gate: CLOSING
Cycle complete.
Gate: CLOSED
```


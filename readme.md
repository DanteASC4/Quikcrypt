# Quikcrypt
---

A simple & fun plaintext encryption command line program!

Example input:
```
Hello world!
```

Example output:
```
?0x48öO0x65?Œ0x6c1f0x6czu0x6fnu0x20?õ0x77?C0x6fñ?0x72??0x6cF?0x64Zö0x21i
```
Also the output is different everytime!


# Table of contents
---
1. Disclaimer & purpose
2. Installation
3. Usage
4. License


## Disclaimer
---
Just a short preface from the creator of this CLI.
I know it's not real encryption, and I know it's not amazing, it's just for fun.
I made this to give to a couple friends to confuse everyone in group chats, or just anyone really.
This is my first published npm package, and I'm open to feedback & improvements.

*Note:* You probably already know this, but this is definitely __not__ real hashing, so don't use this to encrypt anything really important, I'm not responsible for any damage or failure caused by using this to encrypt sensitive data.

That being said please enjoy! :D   



## Installation:
---
```javascript
npm install quikcrypt -g
```

## Usage:
---
```javascript
quikcrpt

// You will then be prompted for your message to encrypt or decrypt
// It does not need to be in quotes

Enter your message: Hello world!

//It will then tell you that your secret message has been copied to the clipboard!

Secret message copied to clipboard

//The same works for already encrypted messages, it will turn it into normal plaintext
```

## License:
ISC


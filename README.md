# ProInput

### Javascript input controller

#### Features:

1. Change number format(persian,english,arabic).
2. Set max length for input and automatic focus on next input if exists.
3. Focus on next input on `Enter` key press.
4. Focus on previous input on `Backspace` key press if input was empty.
5. Separate three digits numbers.


#### Usage:

Create your input elements with your types:
``` html
<!--
n: set type to number and prevent enter characters
f: persian characters only and convert other to persian ('e' for english, 'a' for arabic)
s: separate three digits numbers
b: jump previous input if press `Backspace` and input was empty
j: jump next input of press `Enter` and prevent submit event

max length: if input text characters reach to 10 it will focus on next input if exists
 -->
<input type="tel" data-pi-type="nfsbj" data-pi-max-length="10" />
```

Initialize:
``` html
<script src="~/js/ProInput.min.js"></script>
<script>
    ProInputInit();
</script>
```

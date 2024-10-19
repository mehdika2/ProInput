# ProInput

### Javascript input controller

#### Features:

1. Change number format(persian,english,arabic).
2. Set max length for input and automatic focus on next input if exists.
3. Focus on next input on `Enter` key press.
4. Focus on previous input on `Backspace` key press if input was empty.
5. Separate three digits numbers.
6. Validate inputs on page load to specified format.
7. Validate inputs before form submit to specified format.

#### Usage:

Create your input elements with your types:
``` html
<!--
Types:
  - number: this is required for converting digits to farsi or english
  - onlynumber: prevent entering non-numeric characters
  - separate: separate three digits numbers

  - farsi: farsi digits only and convert other digits to farsi
  - english: english digits only and convert other digits to english
  - arabic: arabic digits only and convert other digits to arabic

  - backjump: jump previous input if press `Backspace` and input was empty
  - jump: jump next input of press `Enter` and prevent submit event

  - .farsi: validate format to farsi before form submit
  - .english: validate format to farsi before form english
  - .arabic: validate format to farsi before form arabic
  - .noseparate: remove separates for specified inputs before form submit
attributes:
  - max length: if input text characters reach to 10 it will focus on next input if exists
  - allowed: set allowed characters for 
 -->
<input type="tel" id="age" data-pi-type="number farsi separate" data-pi-max-length="10" />
<input type="tel" id="date" data-pi-type="onlynumber farsi separate" data-pi-max-length="10" data-pi-allowed="/" />
```

Initialize:
``` html
<script src="~/js/ProInput.min.js"></script>
<script>
    ProInputInit();
</script>
```

Example:
``` html
<input type="text" id="Name" name="Age" data-pi-type="number english jump" data-pi-max-length="32" />
<input type="text" id="Age" name="Age" data-pi-type="onlynumber farsi jump backjump" data-pi-max-length="3" />
<input type="text" id="Salary" name="Age" data-pi-type="onlynumber farsi separate backjump .english .noseparate" data-pi-max-length="9" />
```

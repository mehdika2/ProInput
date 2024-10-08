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
Types:
  - number: this is required for converting digits to farsi or english
  - onlynumber: prevent entering non-numeric characters
  - separate: separate three digits numbers

  - farsi: farsi digits only and convert other digits to farsi
  - english: english digits only and convert other digits to english
  - arabic: arabic digits only and convert other digits to arabic

  - backjump: jump previous input if press `Backspace` and input was empty
  - jump: jump next input of press `Enter` and prevent submit event

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

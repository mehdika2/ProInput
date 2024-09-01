// +========================================+
// |       Besmellah, Alrahman, Alrahim     |
// |              Pro Input JS              |
// |  https://github.com/mehdika2/ProInput  |
// +========================================+

(function () {
    function ProInputInit(onLastInputEnter) {
        const itype = "data-pi-type";
        const iallowedcharacters = "data-pi-allowed";
        const imaxlength = "data-pi-max-length";

        const inputs = document.querySelectorAll('input');

        inputs.forEach((input, index) => {
            input.tabIndex = index + 1;

            if (findAttribute(input, "onlynumber"))
                input.addEventListener("input", formatOnlyNumberInput);
            else if (findAttribute(input, "number"))
                input.addEventListener("input", formatNumberInput);

            if (findAttribute(input, "backjump") || findAttribute(input, "jump"))
                input.addEventListener('keydown', (event) => {
                    if (findAttribute(input, "backjump") && event.key === 'Backspace' && input.value === '') {
                        if (index > 0) {
                            const prevInput = inputs[index - 1];
                            prevInput.focus();
                            setCursorToEnd(prevInput);
                            event.preventDefault();
                        }
                    }
                    if (findAttribute(input, "jump") && (event.key === 'Enter' || event.keyCode === 13)) {
                        event.preventDefault();
                        const nextInput = inputs[index + 1];
                        if (nextInput) {
                            nextInput.focus();
                        } else {
                            if (typeof onLastInputEnter === 'function') {
                                if (onLastInputEnter() == true)
                                    form.submit();
                            } else {
                                const form = input.closest('form');
                                if (form) {
                                    form.submit();
                                }
                            }
                        }
                    }
                });
        });

        function formatOnlyNumberInput(event) {
            let input = event.target;
            let allowedChars = input.getAttribute(iallowedcharacters) ?? "";
            input.value = input.value.replaceAll(new RegExp(`[^\\u06F0-\\u06F9\\u0660-\\u06690-9${allowedChars}]`, "g"), "");

            formatNumberInput(event);
        }

        function formatNumberInput(event) {
            let input = event.target;

            if (findAttribute(input, "farsi"))
                toPersionNumber(input);
            else if (findAttribute(input, "arabic"))
                toArabicNumber(input);
            else if (findAttribute(input, "english"))
                toEnglishNumber(input);

            if (findAttribute(input, "separate"))
                input.value = separateDigits(input.value);

            if (input.hasAttribute(imaxlength) && input.value.replaceAll(',', '').length >= Number(input.getAttribute(imaxlength))) {
                const nextInput = inputs[input.tabIndex];
                if (nextInput) {
                    nextInput.focus();
                    nextInput.select();
                }
            }
        }

        function jumpNextElement(input) {
            console.log(sdf);
        }

        function separateDigits(value) {
            value = value.replaceAll(',', '');
            value = [...value].reverse().join("");
            value = value.replace(/(.{3})/g, '$1,').replace(/,\s*$/, '');
            value = [...value].reverse().join("");
            return value;
        }

        function findAttribute(input, value, attrTarget = "") {
            if (attrTarget == "") attrTarget = itype;
            let attribute = input.getAttribute(attrTarget);
            if (!attribute) return false;
            let index = attribute.indexOf(value);
            if (index < 0) return false;
            return true;
        }

        function setCursorToEnd(input) {
            const valueLength = input.value.length;
            input.setSelectionRange(valueLength, valueLength);
            input.focus();
        }
    }

    const persianNumbers = ['\u06F0', '\u06F1', '\u06F2', '\u06F3', '\u06F4', '\u06F5', '\u06F6', '\u06F7', '\u06F8', '\u06F9'];
    const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const arabicNumbers = ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'];

    function toPersionNumber(input) {
        englishNumbers.forEach((num, index) => {
            input.value = input.value.replace(new RegExp(num, 'g'), persianNumbers[index]);
        });
        arabicNumbers.forEach((num, index) => {
            input.value = input.value.replace(new RegExp(num, 'g'), persianNumbers[index]);
        });
    }
    function toEnglishNumber(input) {
        persianNumbers.forEach((num, index) => {
            input.value = input.value.replace(new RegExp(num, 'g'), englishNumbers[index]);
        });
        arabicNumbers.forEach((num, index) => {
            input.value = input.value.replace(new RegExp(num, 'g'), englishNumbers[index]);
        });
    }
    function toArabicNumber(input) {
        englishNumbers.forEach((num, index) => {
            input.value = input.value.replace(new RegExp(num, 'g'), arabicNumbers[index]);
        });
        persianNumbers.forEach((num, index) => {
            input.value = input.value.replace(new RegExp(num, 'g'), arabicNumbers[index]);
        });
    }

    function submit() {
        document.querySelector("form").submit();
    }

    window.submit = submit;
    window.ProInputInit = ProInputInit;
    window.toPersian = toPersionNumber;
    window.toEnglish = toEnglishNumber;
    window.toArabic = toArabicNumber;
})();

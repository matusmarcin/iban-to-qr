# IBAN to QR Code
Convert your boring long IBAN or BBAN (old format) to swifty new and easy to user QR code.

Mostly useful in Czech republic and Slovakia where [Short Payment Descriptor](https://en.wikipedia.org/wiki/Short_Payment_Descriptor) is widely used by bank mobile apps.

Use case: You get an email or a message with payment information (IBAN being the annoying format) and instead of typing it into your mobile app you just paste it into a web page and scan the QR code which now contains all the information.

Stretch goal: You get an email with a link to a web page that directly gives you the QR code.

## Curent status

Alright, scratch whatever I said above. Slovak banks actually use Pay By Square (their own) standard, not SPAYD. No idea what that looks like yet.

However, I have cool React style self regenerating QR code based on one input field.

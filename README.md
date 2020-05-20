# bmRequestType

Calculate bmRequestType for USB

i.e.
- http://www.usbmadesimple.co.uk/ums_4.htm
- https://www.usb.org/sites/default/files/csm2_v1_0.pdf
- https://www.beyondlogic.org/usbnutshell/usb6.shtml

Useful combined with e.g. [node-usb](https://github.com/tessel/node-usb).

## Usage

```js
const { bmRequestType, DIRECTION, TYPE, RECIPIENT } = require('./bmRequestType');
bmRequestType(DIRECTION.Out, TYPE.Class, RECIPIENT.Interface); // 33
```

## API

bmRequestType(direction, type, recipient)

DIRECTION.Out = 0
DIRECTION.In = 1

TYPE.Standard = 0
TYPE.Class = 1
TYPE.Vendor = 2
TYPE.Reserved = 3

RECIPIENT.Device = 0
RECIPIENT.Interface = 1
RECIPIENT.Endpoint = 2
RECIPIENT.Other = 3
const { bmRequestType, DIRECTION, TYPE, RECIPIENT } = require(".");

test("out, class, interface is 33", () => {
  expect(bmRequestType(DIRECTION.Out, TYPE.Class, RECIPIENT.Interface)).toBe(
    33
  );
});

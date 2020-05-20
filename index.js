module.exports = {
    DIRECTION: {
      Out: 0,
      In: 1,
    },
    TYPE: {
      Standard: 0,
      Class: 1,
      Vendor: 2,
      Reserved: 3,
    },
    RECIPIENT: {
      Device: 0,
      Interface: 1,
      Endpoint: 2,
      Other: 3,
    },
    bmRequestType: (direction, type, recipient) => {
      return (direction << 7 | type << 5 | recipient);
    },
  };
  
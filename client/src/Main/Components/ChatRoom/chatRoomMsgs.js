//will be taken from a db later

class Msgs {
  constructor(id, arr) {
    this.id = id; //the room id
    this.arr = arr;
  }
}

const msgs5 = new Msgs(5, [
  { msgWriter: "p1", msgContent: "test massage 51", msgTime: "00:00" },
  { msgWriter: "p2", msgContent: "test massage 52", msgTime: "00:00" },
  { msgWriter: "p3", msgContent: "test massage 53", msgTime: "00:00" },
  { msgWriter: "p4", msgContent: "test massage 54", msgTime: "00:00" },
]);

const msgs1 = new Msgs(1, [
  { msgWriter: "p1", msgContent: "test massage 11", msgTime: "00:00" },
  { msgWriter: "p2", msgContent: "test massage 12", msgTime: "00:00" },
  { msgWriter: "p3", msgContent: "test massage 13", msgTime: "00:00" },
  { msgWriter: "p4", msgContent: "test massage 14", msgTime: "00:00" },
]);
const msgs2 = new Msgs(2, [
  { msgWriter: "p1", msgContent: "test massage 21", msgTime: "00:00" },
  { msgWriter: "p2", msgContent: "test massage 22", msgTime: "00:00" },
  { msgWriter: "p3", msgContent: "test massage 23", msgTime: "00:00" },
  { msgWriter: "p4", msgContent: "test massage 24", msgTime: "00:00" },
]);
const msgs3 = new Msgs(3, [
  { msgWriter: "p1", msgContent: "test massage 31", msgTime: "00:00" },
  { msgWriter: "p2", msgContent: "test massage 32", msgTime: "00:00" },
  { msgWriter: "p3", msgContent: "test massage 33", msgTime: "00:00" },
  { msgWriter: "p4", msgContent: "test massage 34", msgTime: "00:00" },
]);
const msgs4 = new Msgs(4, [
  { msgWriter: "p1", msgContent: "test massage 41", msgTime: "00:00" },
  { msgWriter: "p2", msgContent: "test massage 42", msgTime: "00:00" },
  { msgWriter: "p3", msgContent: "test massage 43", msgTime: "00:00" },
  { msgWriter: "p4", msgContent: "test massage 44", msgTime: "00:00" },
]);

let msgsArr = [msgs1, msgs2, msgs3, msgs4, msgs5];

export default msgsArr;
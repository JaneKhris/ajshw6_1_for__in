export default function orderByProps(object, order) {
  const arrayStart = [];
  const arrayEnd = [];
  for (const prop in object) {
    if (object.hasOwnProperty(prop)) {
      const item = {
        key: prop,
        value: object[prop],
      };
      const index = order.indexOf(prop);
      if (index >= 0) {
        arrayStart[index] = item;
      } else {
        arrayEnd.push(item);
      }
    }
  }
  arrayEnd.sort((a, b) => (a.key > b.key ? 1 : -1));
  const result = arrayStart.concat(arrayEnd);
  return result;
}

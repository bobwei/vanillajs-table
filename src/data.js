export default [...(new Array(10))].map((obj, i) => ({
  id: i,
  name: `name ${i}`,
  other: `other ${i}`,
}));

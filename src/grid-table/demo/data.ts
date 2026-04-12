export const data = Array.from({ length: 200 }).map((_, i) => ({
  key: `${i + 1}`,
  name: `User ${i + 1}`,
  age: 20 + (i % 50),
  address: `London No. ${i + 1} Lake Park`,
}));


export const data200 = Array.from({ length: 200 }).map((_, i) => ({
  key: `${i + 1}`,
  name: `User ${i + 1}`,
  age: 20 + (i % 50),
  address: `London No. ${i + 1} Lake Park`,
}));

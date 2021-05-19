export const people = [
  {
    id: 0,
    name: 'wantyouring',
    age: 26,
    gender: 'male',
  },
  {
    id: 1,
    name: 'hi',
    age: 16,
    gender: 'female',
  },
  {
    id: 2,
    name: 'hello',
    age: 78,
    gender: 'male',
  },
  {
    id: 3,
    name: 'bye',
    age: 22,
    gender: 'male',
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};

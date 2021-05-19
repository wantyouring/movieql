const wantyouring = {
  name: 'wantyouring',
  age: 26,
  gender: 'male',
};

const resolvers = {
  Query: {
    person: () => wantyouring,
  },
};

export default resolvers;

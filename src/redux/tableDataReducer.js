const data = [
  {
      key: '1',
      name: 'John',
      surname: 'Brown',
      age: 32,
  },
  {
      key: '2',
      name: 'Jim',
      surname: 'Green',
      age: 12,
  },
  {
      key: '3',
      name: 'Joe',
      surname: 'Black',
      age: 62,
  },
  {
      key: '4',
      name: 'Jack',
      surname: 'Brown',
      age: 42,
  },
];
const initialState = { tableData: data };

export const tableDataReducer = (state = initialState, action) => {
  return state
};
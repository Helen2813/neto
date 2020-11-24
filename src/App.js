import './App.css';
import { Table } from './components/Table/Table';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Surname',
        dataIndex: 'surname',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
];
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

function App() {
  return (
    <div className="container">
      <Table data={data} columns={columns} summaryData />
    </div>
  );
}

export default App;

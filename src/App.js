import './App.css';
import Table from './components/Table/Table';

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

function App() {
  return (
    <div className="container">
      <Table columns={columns} />
    </div>
  );
}

export default App;

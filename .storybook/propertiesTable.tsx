type Props = {
  props: string[][];
};

const Table = ({ props }: Props) => (
  <table style={{ width: '100%' }}>
    <thead>
      <tr>
        <th style={{ width: '20%' }}>Prop</th>
        <th style={{ width: '20%' }}>Type</th>
        <th style={{ width: '60%' }}>Description</th>
      </tr>
    </thead>
    <tbody>
      {props.map((row, inx) => (
        <tr key={`property-row-${inx}`}>
          <td>{row[0]}</td>
          <td>{row[1]}</td>
          <td>{row[2]}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;

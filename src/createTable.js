import createElement from './createElement';

const createTable = ({ data }) => {
  const columns = Object.keys(data[0]);
  return createElement(
    'table',
    {},
    [
      createElement(
        'tr',
        {},
        columns.map(column => (
          createElement(
            'th',
            {},
            column,
          )
        )),
      ),
      ...data.map(row => (
        createElement(
          'tr',
          {},
          columns.map(column => (
            createElement(
              'td',
              {},
              row[column],
            )
          )),
        )
      )),
    ],
  );
};

export default createTable;

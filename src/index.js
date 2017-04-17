import './index.scss';
import createTable from './createTable';
import data from './data';
import render from './render';

document.addEventListener('DOMContentLoaded', () => {
  const table = createTable({ data });
  const mountNode = document.getElementById('app');
  render(table, mountNode);
});

import styled from 'styled-components'

export const GuessedWordsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background: #ddd;
    font-size: 1.3em;
  }

  th,
  td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    height: 30px;
  }

  tbody {
    font-size: 1.2em;
  }
`

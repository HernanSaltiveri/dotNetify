import styled from 'styled-components';

export const HelloWorldCss = styled.div`
  padding: 0 1rem;
  section {
    display: flex;
    max-width: 1268px;
    margin-bottom: 1rem;
    > * {
      flex: 1;
      margin-right: 1rem;
    }
    label {
      font-weight: 500;
    }
  }
`;

export const ControlTypesCss = styled.div`
  max-width: 1268px;
  padding: 0 1rem;
  table {
    font-size: unset;
    width: 100%;
  }
  tr {
    td {
      padding-bottom: 1.5rem;
    }
    td:first-child {
      font-weight: 500;
      display: flex;
      flex-direction: column;
      > label {
        font-weight: normal;
        font-size: small;
      }
    }
    td:nth-child(2) {
      width: 70%;
      padding-right: 1.5rem;
      li {
        cursor: pointer;
      }
      li:hover {
        background: #efefef;
      }
      input ~ * {
        margin-left: 5px;
        margin-right: 0rem;
      }
      label {
        cursor: pointer;
        user-select: none;
        margin-right: 1.5rem;
      }
    }
    button.label-success {
      margin-left: 3rem;
      background: #5cb85c;
    }
    button.label-warning {
      margin-left: 3rem;
      background: #f0ad4e;
    }
    button {
      min-width: 6rem;
    }
  }
`;

export const SimpleListCss = styled.div`
  padding: 0 1rem;
  > header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    > * {
      margin-right: 1rem;
    }
  }
  > table {
    font-size: unset;
    width: 100%;
    max-width: 1268px;
    td,
    th {
      padding: 0.5rem 0;
      padding-right: 2rem;
      border-bottom: 1px solid #ddd;
      width: 50%;
    }
    td:last-child,
    th:last-child {
      width: 5rem;
      > div {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }
    tr:hover {
      background: #efefef;
    }
    i.material-icons {
      font-size: 1.2rem;
    }
  }
`;

export const CompositeViewCss = styled.div`
  padding: 0 1rem;
  max-width: 1268px;
  display: flex;
  flex-wrap: wrap;
  > * {
    &:first-child {
      width: 70%;
      margin-right: 1rem;
    }
    &:last-child {
      width: calc(30% - 1rem);
      min-width: 10rem;
    }
  }
  @media (max-width: 860px) {
    > * {
      width: 100%;
      &:first-child {
        width: 100%;
        margin-bottom: 2rem;
      }
      &:last-child {
        width: 100%;
      }
    }
  }
  .card {
    width: 100%;
    p {
      font-size: unset;
    }
    .card-header > *:first-child {
      font-size: large;
    }
  }
  table {
    font-size: unset;
    width: 100%;
    tr {
      &:hover {
        background: #eee;
        cursor: pointer;
      }
      &.selected {
        background: #ddd;
      }
    }
    td,
    th {
      width: 25%;
      padding: .5rem;
      padding-right: 2rem;
      border-bottom: 1px solid #ddd;
      &:nth-child(1),
      &:nth-child(3) {
        width: 10%;
      }
    }
  }
  .pagination {
    user-select: none;
    div {
      margin-top: 1rem;
      padding: .5rem 1rem;
      border: 1px solid #ccc;
      &.current {
        color: #aaa;
        background: #eee;
      }
    }
    div:hover:not(.current) {
      background: #eee;
      cursor: pointer;
    }
  }
  .filter {
    margin-top: 1rem;
    .card-header {
      font-weight: bold;
    }
    .card-body {
      > * {
        margin-bottom: 1rem;
      }
    }
    .card-footer {
      display: flex;
      justify-content: flex-end;
    }
    .chip {
      margin-right: .25rem;
      margin-bottom: .25rem;
      display: inline-flex;
      font-size: x-small;
      background: #eee;
      border-radius: .25rem;
      align-items: center;
      padding: .2rem .4rem;
      i.material-icons {
        font-size: small;
        font-weight: bold;
        cursor: pointer;
        margin-left: .5rem;
      }
    }
  }
`;

export const LiveChartCss = styled.div`
  padding: 0 1rem;
  width: 100%;
  max-width: 1268px;
  > div:first-child {
    display: inline-block;
    width: 70%;
  }
  > div:last-child {
    display: inline-block;
    width: 30%;
    > *:last-child {
      margin-top: 2rem;
    }
  }
  @media (max-width: 1170px) {
    > div:first-child,
    > div:last-child {
      display: block;
      width: 100%;
      margin-bottom: 2rem;
    }
  }
`;

export const SecurePageCss = styled.div`
  padding: 0 1rem;
  max-width: 1268px;
  display: flex;
  > * {
    flex: 1;
    margin-right: 1rem;
  }
  label {
    font-weight: 500;
    margin-top: 1rem;
  }
  .card-body > div:last-child {
    margin-bottom: 2rem;
  }
  .card-body > strong {
    display: block;
    margin-bottom: 1rem;
  }
  .card-footer {
    display: flex;
    justify-content: flex-end;
  }
  .logout {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

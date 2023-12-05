import React, { useState } from 'react';
import { Dropdown, Button, Table } from 'semantic-ui-react';
import states from './states';

const STATE_CHOICES = JSON.parse(document.getElementById('state-choices').textContent);

const DropdownComponent = ({}) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [data, setData] = useState();
  const [previous, setPrevious] = useState();
  const [next, setNext] = useState();

  const handleChange = (event, data) => {
    setSelectedValue(data.value)
  };

  const handleAPICall = () => {
    const apiUrl = `/hospitals/${selectedValue}/`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPrevious(data.previous)
        setData(data.results)
        setNext(data.next);
        console.log()
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const handleNextPage = () => {
    if (next) {
      fetch(next)
        .then((response) => response.json())
        .then((responseData) => {
          setPrevious(responseData.previous)
          setData(responseData.results);
          setNext(responseData.next);
        });
    }
  };

  const handlePreviousPage = () => {
    if (previous) {
      fetch(previous)
        .then((response) => response.json())
        .then((responseData) => {
          setPrevious(responseData.previous)
          setData(responseData.results);
          setNext(responseData.next);
        });
    }
  };

  return (
    <div>
      <Dropdown
        fluid
        selection
        options={STATE_CHOICES.map((item) => ({
          key: item,
          value: item,
          text: states.find((x) => x.abbreviation === item).name,
        }))}
        onChange={handleChange}
      />
      <Button onClick={() => handleAPICall()}>Get</Button>
      <br/>
      {data &&
      <div>
      
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              {data[0] && Object.keys(data[0]).map((column) => (
                <Table.Cell key={column}>{column}</Table.Cell>
              ))}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data.map((row) => (
              <Table.Row key={row.id}>
                {Object.keys(row).map((column) => (
                  <Table.Cell key={`${row.id}-${column}`}>{row[column]}</Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Button onClick={handlePreviousPage}>Previous Page</Button>
        <Button onClick={handleNextPage}>Next Page</Button>
        </div>
      }

    </div>
  );
};

export default DropdownComponent;
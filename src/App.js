import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'what is react?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'why use react?',
    content: 'fav js library'
  },
  {
    title: 'how do you use react?',
    content: 'by creating components'
  }
];

const options = [
  {
    label: 'the color red',
    value: 'red'
  },
  {
    label: 'the color green',
    value: 'green'
  },
  {
    label: 'a shade of blue',
    value: 'blue'
  }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div> 
      <Header />
      <Route path="/">
        <Accordion items={items}/>
      </Route>     
      <Route path="/list">
        <Search />
      </Route>     
      <Route path="/dropdown">
        <Dropdown 
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>     
      <Route path="/translate">
        <Translate />
      </Route>     
    </div>
  );
};
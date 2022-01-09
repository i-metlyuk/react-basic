import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import BootstrapTest from './BootstrapTest';

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

  a {
    display: block;
    margin: 10px 0;
    color: ${props => props.active ? 'orange' : 'black'};
  }

  input {
    display: block;
    margin-top: 10px;
  }
`;

const Header = styled.h2`
  font-size: 22px;
`;

export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: '',
      years: 25
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  commitInputChange = (e) => {
    this.setState({position: e.target.value})
  }

  render() {
    const {name, surname, link} = this.props;
    const {position, years} = this.state;

    return (
      <EmpItem active>
        <Button onClick={this.nextYear}>+++</Button>
        <Header>My name is {name}, surname - {surname},
            age - {years}, position - {position}</Header>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={(e) => this.commitInputChange(e)}></input>
        </form>
      </EmpItem>
    );
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0;
`;

const DynamicGreating = (props) => {
  return (
    <div className={'mb-3 p-3 border border-'+props.color}>
      {
        React.Children.map(props.children, child => {
          return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'});
        })
      }
    </div>
  );
}

const HelloGreating = () => {
  return (
    <div style={{'width': '600px', 'margin': '0 auto'}}>
      <DynamicGreating colo={'primary'}>
        <h2>Test text</h2>
      </DynamicGreating>
    </div>
  );
}

const Message = (props) => {
  return (
    <h2>Conter is {props.counter}</h2>
  );
}

class Counter extends Component {
  state = {
    counter: 0
  }

  changeCounter = () => {
    this.setState(({counter}) => ({
      counter: counter + 1
    }))
  }

  render() {
    return (
      <>
        <button
          onClick={this.changeCounter}
          className={'btn btn-primary'}>
          Click me
        </button>
        {this.props.render(this.state.counter)}
      </>
    )
  }
}

function App() {
  return (
    <Wrapper>

      <Counter render={counter => (
        <Message counter={counter}></Message>
      )}></Counter>

      <HelloGreating></HelloGreating>

      <BootstrapTest
        left={
          <DynamicGreating colo={'primary'}>
            <h2>Test text</h2>
            <h2>Test content test</h2>
          </DynamicGreating>
        }
        right={
          <DynamicGreating colo={'primary'}>
            <h2>Right content</h2>
          </DynamicGreating>
        }
      ></BootstrapTest>

      <WhoAmI name='John' surname='Smith' link='facebook.com'></WhoAmI>
      <WhoAmI name='Lisa' surname='Smitters' link='vk.com'></WhoAmI>
    </Wrapper>
  );
}

export default App;



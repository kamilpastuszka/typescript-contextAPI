import React, { Component } from "react";

interface PersonContext {
  name?: string;
  gender?: string | number;
  height?: string | number;
  reload?: () => void;
}

interface IState {
  name?: string;
  gender?: string | number;
  height?: string | number;
}

export const Context = React.createContext<PersonContext>({});

export default class DataProvider extends Component<{}, IState> {
  state: IState = {
    name: "loding..",
    gender: "loading..",
    height: "loading.."
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const random = Math.floor(Math.random() * 50);
    fetch(`https://swapi.co/api/people/${random}`)
      .then(res => res.json())
      .then(data => {
        console.log("data", data);
        this.setState({
          name: data.name,
          height: data.height,
          gender: data.gender
        });
      });
  };

  render() {
    const { name, height, gender } = this.state;
    return (
      <Context.Provider value={{ name, height, gender, reload: this.getData }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

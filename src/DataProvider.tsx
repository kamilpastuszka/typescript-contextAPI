import React, { Component } from "react";

interface SharedObj {
  name?: string;
  gender?: string | number;
  height?: string | number;
}

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
    const err = "network error";
    fetch(`https://swapi.co/api/peope/${random}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          name: data.name,
          height: data.height,
          gender: data.gender
        });
      })
      .catch(() => {
        this.setState({
          name: err,
          height: err,
          gender: err
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

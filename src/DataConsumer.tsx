import React from "react";
import { Context } from "./DataProvider";
import Table from "./Table";

const DataConsumer: any = () => (
  <Context.Consumer>
    {context => (
      <>
        <button className="btn btn-danger" onClick={context.reload}>
          Change Hero
        </button>
        <br />
        <Table
          name={context.name}
          gender={context.gender}
          height={context.height}
        />
      </>
    )}
  </Context.Consumer>
);

export default DataConsumer;

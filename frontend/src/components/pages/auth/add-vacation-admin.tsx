import * as React from "react";
import { Component, ChangeEvent } from "react";
import { VacsModel, NewVacsModel } from "components/models/vacs-model";
const { Octicon, Octicons } = require("octicons-react");

const PORT = process.env.PORT || 3011;

interface VacationsState {
  vacs: VacsModel[];
  newVacation: NewVacsModel;
}

export class AddVacAdmin extends Component<any, VacationsState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      vacs: [],
      newVacation: new NewVacsModel()
    };
  }
  public componentDidMount(): void {
    fetch(`http://localhost:${PORT}/api/vacations`)
      .then(response => response.json())
      .then(vacs => this.setState({ vacs }))
      .catch(err => alert(err.message));
  }
  private setDestination = (args: ChangeEvent<HTMLInputElement>) => {
    const destination = args.target.value;
    const newVacation = { ...this.state.newVacation };
    newVacation.destination = destination;
    this.setState({ newVacation });
  };
  private setDescription = (args: ChangeEvent<HTMLInputElement>) => {
    const description = args.target.value;
    const newVacation = { ...this.state.newVacation };
    newVacation.description = description;
    this.setState({ newVacation });
  };
  private setPicture = (args: ChangeEvent<HTMLInputElement>) => {
    const picFileName = args.target.value;
    const newVacation = { ...this.state.newVacation };
    newVacation.picFileName = picFileName;
    this.setState({ newVacation });
  };
  private setStartDate = (args: ChangeEvent<HTMLInputElement>) => {
    const startDate = args.target.value;
    const newVacation = { ...this.state.newVacation };
    newVacation.startDate = startDate;
    this.setState({ newVacation });
  };
  private setEndDate = (args: ChangeEvent<HTMLInputElement>) => {
    const endDate = args.target.value;
    const newVacation = { ...this.state.newVacation };
    newVacation.endDate = endDate;
    this.setState({ newVacation });
  };
  private setPrice = (args: ChangeEvent<HTMLInputElement>) => {
    const price = args.target.value;
    const newVacation = { ...this.state.newVacation };
    newVacation.price = price;
    this.setState({ newVacation });
  };

  private addVacForm = () => {
    // const user = { ...this.state.newUser };
    // user.userId = this.state.selectedID;
    console.log(this.state.newVacation);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(this.state.newVacation)
    };
    fetch(`http://localhost:${PORT}/api/vacations`, options)
      .then(response => response.json())
      .then(vacation =>
        console.log("vacation has been added." + JSON.stringify(vacation))
      )
      .catch(err => alert(err.message));
  };

  render() {
    return (
      <tr>
        <td>
          <Octicon icon={Octicons.plus} />
        </td>
        <td className="addVacation table table-bordered">
          <input
            className="destination"
            type="text"
            onBlur={this.setDestination}
            value={this.state.newVacation.destination}
            placeholder="Enter Your desired destination"
          />
        </td>
        <td>
          <input
            className="description"
            type="textarea"
            onBlur={this.setDescription}
            value={this.state.newVacation.description}
            placeholder="Fill in vacation description"
          />
        </td>
        <td>
          <input
            className="start-date"
            type="date"
            data-date=""
            data-date-format="YYYY MMMM DD"
            onBlur={this.setStartDate}
            value={this.state.newVacation.startDate}
            placeholder="Start date"
          />
        </td>
        <td>
          <input
            className="end-date"
            type="date"
            data-date=""
            data-date-format="YYYY MMMM DD"
            onBlur={this.setEndDate}
            value={this.state.newVacation.endDate}
            placeholder="End date"
          />
        </td>
        <td>
          <input
            className="price"
            type="text"
            onBlur={this.setPrice}
            value={this.state.newVacation.price}
            placeholder="Name your price"
          />
        </td>
        <td>
          <input
            className="filename"
            type="text"
            onBlur={this.setPicture}
            value={this.state.newVacation.picFileName}
            placeholder="Choose picture"
          />
        </td>
        <td colSpan={2}>
          <button className="btn btn-success" onClick={this.addVacForm}>
            <Octicon icon={Octicons.plus} />
            Add
          </button>
        </td>
      </tr>
    );
  }
}

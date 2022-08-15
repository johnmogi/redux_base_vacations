import * as React from "react";
import { Component } from "react";
import { VacsModel } from "../../models/vacs-model";
import { UserModel } from "../../models/user-model";
import "./admin.css";
import { AddVacAdmin } from "./add-vacation-admin";
// const { Octicon, pencil } = require("octicons-react");
const { Octicon, Octicons } = require("octicons-react");
const PORT = process.env.PORT || 3011;

interface vacationState {
  vacs: VacsModel[];
  vacId: string;
  userLog: UserModel[];
}
export class AdminPage extends Component<any, vacationState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      vacs: [],
      vacId: "",
      userLog: []
    };
  }
  componentDidMount = () => {
    // const port = process.env.PORT || 3003;
    const vacationId = this.props.match.params.vacId;
    this.setState({ vacId: vacationId });
    // fetch("http://localhost:3003/api/vacations/" + vacationId)
    fetch(`http://localhost:${PORT}/api/vacations/`)
      // fetch(`http://localhost:` + `${port}` + `/api/vacations/`)
      .then(res => res.json())
      .then(vacs => this.setState({ vacs }))
      .catch(err => alert(err.message));
  };
  componentDidUpdate = () => {
    const vacationId = this.props.match.params.vacId;
    if (vacationId !== this.state.vacId) {
      this.componentDidMount();
    }
  };
  public render(): JSX.Element {
    return (
      <table className="table  table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Details</th>
            <th scope="col">Starts on:</th>
            <th scope="col">Ends on:</th>
            <th scope="col">Cost</th>
            <th scope="col">Image </th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <AddVacAdmin />

          {this.state.vacs.map(v => (
            <tr key={v.vacationID}>
              <th scope="row">{v.vacationID}</th>
              <td>{v.destination}</td>
              <td className="bigcell">{v.description}</td>
              <td>{v.startDate}</td>
              <td>{v.endDate}</td>
              <td>{v.price}</td>
              <td>{v.picFileName}</td>
              <td>
                <Octicon icon={Octicons.pencil} />
              </td>
              <td>
                <Octicon icon={Octicons.trashcan} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

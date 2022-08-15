import * as React from "react";
import { Component } from "react";
import { VacsModel } from "../models/vacs-model";
const PORT = process.env.PORT || 3011;

interface countryState {
  vac: VacsModel[];
}

export class vacPage extends Component<any, countryState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      vac: []
    };
  }
  componentDidMount = () => {
    const id = +this.props.match.params.id;
    fetch(`http://localhost:${PORT}/api/vacations/` + id)
      .then(res => res.json())
      .then(vac => this.setState({ vac }))
      .catch(err => alert(err.message));
  };

  public render(): JSX.Element {
    return (
      <div className="vacation">
        {this.state.vac.map(g => (
          <div key={g.vacationID} className="card container">
            <div className="card-header">
              <p className="card-title mx-auto">{g.destination}</p>
            </div>
            {g.description}
            <img
              className="card-img-top"
              src={`/assets/images/${g.picFileName}`}
              alt={g.description}
            />
            <div className="card-body">
              <ul>
                <li>{g.description}</li>
                <li>{g.destination}</li>
                <li>{g.startDate}</li>
                {/* <li><{g.endDate}</li> */}
                <li>{g.price}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

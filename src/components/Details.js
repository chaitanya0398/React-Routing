import React, { Component } from "react";
import axios from "axios";
import "./Details.css";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
        };
  }
  componentDidMount() {
    this.setState(() => {
      axios.get(`https://8rzw0.csb.app/db.json`).then(res => {
        const persons = [...res.data.applicants];
        this.setState({ persons: persons});
      });
    });
  }
  deleteData(id) {
    const url = "https://8rzw0.csb.app/db.json" + id + "/";
    axios
      .delete(url)
      .then(resp => {
        this.componentDidMount();
      })
  }

  render() {
    const tr = "ttr";
    const td = "ttd";
    const th = "tth";
    const aha =
      <div className="abc">
        <table>
          <thead className="thead">
            <tr className={tr}>
              <th className={th}>Name</th>
              <th className={th}>Phone</th>
              <th className={th}>PAN</th>
              <th className={th}>Operations</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {this.state.persons.map((applicant, i) => {
              return (
                <tr key={i} className={tr}>
                  <td className={td}>{applicant.name}</td>
                  <td className={td}>{applicant.phone}</td>
                  <td className={td}>{applicant.pan}</td>
                  <td className={td}>
                  <button onClick={event => this.deleteData(applicant.id)}>
                      edit
                    </button>
                    
                    <button onClick={event => this.deleteData(applicant.id)}>
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot />
        </table>
      </div>
    return <div>{aha}</div>;
  }
}
export default Details;

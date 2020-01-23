import React from "react";
import "./compareTable.css";
import Modal from "../Modal/Modal";

export class CompareTable extends React.Component {
  state = {
    isOpen: false,
    attribute: ["abilities", "weakness", "weight", "type"],
    filter: {}
  };

  types = ["Select All","Ability", "Weakness", "Weight", "Type"]

  getDetail = (id, att) => {
    const { data } = this.props;
    let val = data.filter(x => x.id === id)[0][att];
    if (Array.isArray(val)) {
      return val.toString();
    }
    return val;
  };

  onPress = () => {
    const { isOpen } = this.state;

    this.setState({ isOpen: !isOpen });
  };

  onApplyHandler = () => {
    const { filter, attribute } = this.state;

    let arr = Object.keys(filter);

    let temp = arr.filter(x => filter[x] === true);
    this.setState({ attribute: temp });

    this.setState({ isOpen: false });
  };

  getObj = (temp, flag) => {
    return (temp = {
      abilities: flag,
      weakness: flag,
      weight: flag,
      type: flag,
      all: flag
    });
  };

  onSelectCheckBox = e => {
    const { filter } = this.state;

    const name = e.target.name;
    let temp = filter;
    if (name === "all") {
      if (temp.hasOwnProperty("all")) {
        if (temp["all"]) {
          temp = this.getObj(temp, false);
        } else {
          temp = this.getObj(temp, true);
        }
      } else {
        temp = this.getObj(temp, true);
      }
      this.setState({ filter: temp });
      return;
    }
    if (temp.hasOwnProperty(name)) {
      temp[name] = !temp[name];
    } else {
      temp[name] = true;
    }
    this.setState({ filter: temp });
  };

  render() {
    const { CompareList } = this.props;
    const { isOpen, attribute, filter } = this.state;
    return (
      <>
        <Modal
          filters={filter}
          attribute={this.types}
          onCheckBox={e => this.onSelectCheckBox(e)}
          isOpen={isOpen}
          onRequestClose={() => this.onApplyHandler()}
        />
        <div className="table-container">
          <table className="table">
            <thead className="heading">
              <tr className="heading-row">
                <th>
                  Attribute
                  <button className="hintText" onClick={() => this.onPress()}>
                    Edit
                  </button>
                </th>
                {CompareList.map((x, idx) => (
                  <th key={idx}>{this.getDetail(x, "name")}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {attribute.includes("abilities") && (
                <tr>
                  <td className="attribute">Abilities</td>
                  {CompareList.map((x, idx) => (
                    <td className="row" key={idx}>
                      {this.getDetail(x, "abilities")}
                    </td>
                  ))}
                </tr>
              )}
              {attribute.includes("weakness") && (
                <tr>
                  <td className="attribute">Weakness</td>
                  {CompareList.map((x, idx) => (
                    <td className="row" key={idx}>
                      {this.getDetail(x, "weakness")}
                    </td>
                  ))}
                </tr>
              )}
              {attribute.includes("weight") && (
                <tr>
                  <td className="attribute">Weight</td>
                  {CompareList.map((x, idx) => (
                    <td className="row" key={idx}>
                      {this.getDetail(x, "weight")}
                    </td>
                  ))}
                </tr>
              )}
              {attribute.includes("type") && (
                <tr>
                  <td className="attribute">Type</td>
                  {CompareList.map((x, idx) => (
                    <td className="row" key={idx}>
                      {this.getDetail(x, "type")}
                    </td>
                  ))}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

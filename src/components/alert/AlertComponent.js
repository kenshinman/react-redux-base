import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "./AlertComponent.css";
import uuid from "uuid/v4";
import MdCheckmarkCircleOutline from "react-ionicons/lib/MdCheckmarkCircleOutline";
import MdClose from "react-ionicons/lib/MdClose";
import IosCloseCircleOutline from "react-ionicons/lib/IosCloseCircleOutline";
import IosWarningOutline from "react-ionicons/lib/IosWarningOutline";
import IosInformationCircleOutline from "react-ionicons/lib/IosInformationCircleOutline";

/**
 *
 * when I trigger an alert
 * 1. look for container in the DOM and add display block
 * 2. inject content into it and rehydrate it
 * 3.
 *
 */

const currentId = uuid();

const AlertItem = ({ alert, removeAlert }) => {
  const [currentClass, setCurrentClass] = useState("slideInUp");

  useEffect(() => {
    setTimeout(async () => {
      await setCurrentClass("fadeOutDown");
      doRemove(currentId);
    }, 3000);
  });

  const doRemove = id => {
    setCurrentClass("fadeOutDown");
    setTimeout(() => removeAlert(id), 500);
  };

  const alertType = type => {
    switch (type) {
      case "success":
        return <MdCheckmarkCircleOutline fontSize="30px" color="#27ae60" />;
      case "error":
        return <IosCloseCircleOutline fontSize="30px" color="#e74c3c" />;
      case "warning":
        return <IosWarningOutline fontSize="26px" color="orange" />;
      case "info":
        return <IosInformationCircleOutline fontSize="30px" color="#69f" />;
      default:
        return <IosInformationCircleOutline fontSize="30px" color="#69f" />;
    }
  };

  return (
    <li
      className={classnames("alert-item animated faster", {
        slideInUp: currentClass === "slideInUp",
        fadeOutDown: currentClass === "fadeOutDown"
      })}>
      <div className="icon">{alertType(alert.type)}</div>
      <div className="alert-content">
        <span style={{ color: "#ccc" }}>{alert.message}</span>
      </div>
      <div className="close" onClick={() => doRemove(alert.id)}>
        <MdClose fontSize="16px" color="grey" />
      </div>
    </li>
  );
};

export class AlertWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alerts: []
    };
  }

  doAlert = (message, type) => {
    // let newAlerts = [{ message, type, id: uuid() }];
    this.setState({ alerts: [{ message, type, id: currentId }] });
  };

  removeAlert = id => {
    let newAlerts = this.state.alerts.filter(alert => alert.id !== id);
    this.setState({ alerts: newAlerts });
  };

  render() {
    return (
      <ul className="alert-container" style={{}}>
        {this.state.alerts.map((alert, i) => {
          return (
            <AlertItem
              alert={alert}
              key={uuid()}
              index={i}
              removeAlert={this.removeAlert}
            />
          );
        })}
      </ul>
    );
  }
}

export const doAlert = (message = "", type = "info") => {
  if (window.alertRef) {
    window.alertRef.doAlert(message, type);
  } else {
    console.log("no container found");
  }
};

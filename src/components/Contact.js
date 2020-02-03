import React from "react";
import styles from "./Contact.module.css";

// function Contact(props) {
//   return (
// <div className={styles.Contact}>
//   <div>
//     <img className={styles.Avatar} src={props.picture} />
//   </div>
//   <div>
//     <div className={styles.Name}>{props.name}</div>
//     <div className={styles.Status}>
//       <div className={styles.StatusText}>
//         <div
//           className={
//             props.status ? styles.StatusOnline : styles.StatusOffline
//           }
//         ></div>
//         {props.status ? "Online" : "Offline"}
//       </div>
//     </div>
//   </div>
// </div>
//   );
// }
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: true
    };
  }
  render() {
    return (
      <div className={styles.Contact}>
        <div>
          <img className={styles.Avatar} src={this.props.picture} alt={""} />
        </div>
        <div>
          <div className={styles.Name}>{this.props.name}</div>
          <div
            className={styles.Status}
            onClick={event => {
              const newStatus = !this.state.online;
              this.setState({ online: newStatus });
            }}
          >
            <div className={styles.StatusText}>
              <div
                className={
                  this.state.online ? styles.StatusOnline : styles.StatusOffline
                }
              ></div>
              {this.state.online ? "Online" : "Offline"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

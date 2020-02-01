import React from "react";
import styles from "./Contact.module.css";

function Contact(props) {
  return (
    <div className={styles.Contact}>
      <div>
        <img className={styles.Avatar} src={props.picture} />
      </div>
      <div>
        <div className={styles.Name}>{props.name}</div>
        <div className={styles.Status}>
          <div className={styles.StatusText}>
            <div
              className={
                props.status ? styles.StatusOnline : styles.StatusOffline
              }
            ></div>
            {props.status ? "Online" : "Offline"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

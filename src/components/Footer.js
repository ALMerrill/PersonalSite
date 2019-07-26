import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    const { personalInfo } = this.props;
    return (
      <footer>
        <span id="footer-text-wrap">
          This site is in development by {personalInfo.name} Checkout the
          <a href={personalInfo.repo}> repo</a>.
        </span>
      </footer>
    );
  }
}

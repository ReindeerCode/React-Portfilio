import React from "react";
import { MDBTable, MDBTableBody } from "mdbreact";

const BasicTable = () => {
  return (
    <MDBTable small responsive>
      <MDBTableBody>
        <tr className="text-center">
          <td>MongoDB</td>
          <td>Express.JS</td>
          <td>React.JS</td>
          <td>Node.JS</td>
        </tr>
        <tr className="text-center">
          <td>HTML</td>
          <td>XML</td>
          <td>CSS</td>
          <td>Bootstrap</td>
        </tr>
        <tr className="text-center">
          <td>MDBootstrap</td>
          <td>UI/UX Design</td>
          <td>JavaScript</td>
          <td>jQuery</td>
        </tr>
        <tr className="text-center">
          <td>JSON</td>
          <td>API</td>
          <td>MySQL</td>
          <td>NPM</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
};

export default BasicTable;

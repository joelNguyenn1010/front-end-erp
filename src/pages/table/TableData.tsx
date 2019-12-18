import React from "react";
import { TableRow } from "./TableRow";
import { TableItemHeader } from "./TableItemHeader";


export const TableData = () => {

  var tableStyle = {
    width: "100%"
  };
  return (

    <table style={tableStyle}>
      <TableItemHeader />
      <tr>
        <td>
          <div style={{ overflow: "auto", maxHeight: "250px" }}>
            <table>
              <tbody className="ant-table-tbody">
                <TableRow />
              </tbody>

            </table>
          </div>
        </td>
      </tr>

    </table>

  );
};

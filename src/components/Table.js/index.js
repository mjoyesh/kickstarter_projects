import React from "react";

const Table = ({ data, startIndex }) => {
  return (
    <table id="project-table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {data.map((project, index) => (
          <tr key={startIndex + index}>
            <td>{startIndex + index + 1}</td>
            <td>
              {project["percentage.funded"]
                ? `${project["percentage.funded"]}%`
                : "N/A"}
            </td>
            <td>
              {project["amt.pledged"]
                ? `$${Number(project["amt.pledged"]).toLocaleString()}`
                : "N/A"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

import React from "react";

export default function GroupItem(props) {
  return (
    <div>
      <tr>
        <td width="5%">
          <i class="fa fa-bell-o"></i>
        </td>
        <td>{props.name}</td>
        <td class="level-right">
          <a class="button is-small is-primary" href="#">
            Action
          </a>
        </td>
      </tr>
    </div>
  );
}

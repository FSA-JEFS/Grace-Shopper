import React from "react";


export default props => {

  return (
    <div className="tab-pane active" id={props.tabid}>
      <ul>
        <li>
          TODO: trigger password reset for a user (that is, the next time they
          successfully log in with their old password, they are prompted for a
          new one), so that I can be proactive in getting users to change their
          passwords after a period of time
        </li>
      </ul>
      <div className="col-md-10 col-md-offset-1">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th className="text-left">Name</th>
                <th className="text-left">Email</th>
                <th className="text-center">Role</th>
                <th className="text-left">Tags</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {props.users && props.users.map(user => makeRow(user, props.adminDelUsers, props.adminPromoteUser))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const makeRow = (user, adminDelUsers, adminPromoteUser) => 
              <tr key={user.id}>
                <td className="text-center">{user.id}</td>
                <td className="text-left">{user.name}</td>
                <td className="text-left">{user.email}</td>
                <td>{user.isAdmin ? <b>Admin</b> : <i>User</i>}</td>
                <td className="text-left">{user.tags && user.tags.join(', ')}</td>
                <td className="td-actions text-right">
                  <button
                    type="button"
                    rel="tooltip"
                    className="btn btn-info"
                    data-original-title=""
                    title=""
                  >
                    <i className="material-icons">refresh</i>
                  </button>
                  <button
                    type="button"
                    rel="tooltip"
                    className="btn btn-success"
                    data-original-title=""
                    title=""
                    onClick={() => adminPromoteUser(user.id)}
                  >
                    <i className="material-icons">star</i>
                  </button>
                  <button
                    type="button"
                    rel="tooltip"
                    className="btn btn-danger"
                    data-original-title=""
                    title=""
                    onClick={() => adminDelUsers(user.id)}
                  >
                    <i className="material-icons">close</i>
                  </button>
                </td>
              </tr>
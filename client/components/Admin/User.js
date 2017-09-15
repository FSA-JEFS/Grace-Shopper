import React from "react";
export default props => {
  return (
    <div className="tab-pane active" id={props.tabid}>
      <ul>
        <li>
          promote other user accounts to have admin status, so that new
          administrators can have the same privileges I have
        </li>
        <li>
          delete a user, so users who should not be able to log in anymore
          cannot
        </li>
        <li>
          trigger password reset for a user (that is, the next time they
          successfully log in with their old password, they are prompted for a
          new one), so that I can be proactive in getting users to change their
          passwords after a period of time
        </li>
      </ul>
      <div className="col-md-8 col-md-offset-2">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th className="text-right">Tags</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {props.users && props.users.map(user => makeRow(user, props.adminDelUsers))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const makeRow = (user, adminDelUsers) => 
              <tr key={user.id}>
                <td className="text-center">{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? <b>Admin</b> : <i>User</i>}</td>
                <td className="text-right">{user.tags && user.tags.join(', ')}</td>
                <td className="td-actions text-right">
                  <button
                    type="button"
                    rel="tooltip"
                    className="btn btn-info"
                    data-original-title=""
                    title=""
                  >
                    <i className="material-icons">person</i>
                  </button>
                  <button
                    type="button"
                    rel="tooltip"
                    className="btn btn-success"
                    data-original-title=""
                    title=""
                  >
                    <i className="material-icons">edit</i>
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
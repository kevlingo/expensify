import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedCompnent => {
  return props => (
    <div>
      {!props.isAdmin && <p>This is private info. Please don't share</p>}
      <WrappedCompnent {...props} />
    </div>
  );
};
const AdminInfo = withAdminWarning(Info);

const requireAuthentication = WrappedCompnent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedCompnent {...props} />
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="These are the details" />,
  document.getElementById('app')
);

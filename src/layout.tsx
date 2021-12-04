import * as React from "react";
import { Link } from "react-router-dom";
import { UpdateDialog } from "piral-update";
import {
  useGlobalStateContext,
  ComponentsState,
  ErrorComponentsState,
  Menu,
  Notifications,
  SwitchErrorInfo,
  MenuItemProps,
} from "piral";

const MenuItem: React.FC<MenuItemProps> = ({ children }) => (
  <li className="nav-item">{children}</li>
);

const UpdateTile = () => {
  const ctx = useGlobalStateContext();
  const trigger = React.useCallback(() => ctx.emit("trigger-update", {}), []);
  return (
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <button onClick={trigger}>Trigger Update</button>
      </div>
    </div>
  );
};

const defaultTiles = (
  <>
    <UpdateTile />
  </>
);

export const errors: Partial<ErrorComponentsState> = {
  not_found: () => (
    <div>
      <p className="error">
        Could not find the requested page. Are you sure it exists?
      </p>
      <p>
        Go back <Link to="/">to the dashboard</Link>.
      </p>
    </div>
  ),
};

export const layout: Partial<ComponentsState> = {
  ErrorInfo: (props) => (
    <div>
      <h1>Error</h1>
      <SwitchErrorInfo {...props} />
    </div>
  ),
  UpdateDialog: ({ onApprove, onReject }) => (
    <div
      style={{
        position: "fixed",
        background: "rgba(0, 0, 0, 0.5)",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          margin: "auto",
          width: "200px",
          height: "100px",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          background: "#fff",
          border: "1px solid #666",
        }}
      >
        <h1>Update Available</h1>
        <p>
          Some functionality has been updated. Do you want to apply the update
          now?
        </p>
        <div style={{ display: "flex" }}>
          <button onClick={onApprove}>Update now</button>
          <button onClick={onReject}>No, thanks</button>
        </div>
      </div>
    </div>
  ),
  DashboardContainer: ({ children }) => (
    <div>
      <h1>Hello, world!</h1>
      <p>
        This sample illustrates the use of <code>piral-update</code>.
      </p>
      <p>
        You can trigger an "artifical" update via the trigger update button.
        Usually, this would be done automatically, e.g., by listening to updates
        to your feed.
      </p>
      <p>
        In this example we fake a major update to the game - the new version is
        in fact a completely new game!
      </p>
      <div className="tiles">
        {defaultTiles}
        {children}
      </div>
    </div>
  ),
  DashboardTile: ({ columns, rows, children }) => (
    <div className={`tile cols-${columns} rows-${rows}`}>{children}</div>
  ),
  Layout: ({ children }) => (
    <div>
      <Notifications />
      <UpdateDialog />
      <Menu type="general" />
      <div className="container">{children}</div>
    </div>
  ),
  MenuContainer: ({ children }) => {
    const [collapsed, setCollapsed] = React.useState(true);
    return (
      <header>
        <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Piral
            </Link>
            <button
              aria-label="Toggle navigation"
              type="button"
              onClick={() => setCollapsed(!collapsed)}
              className="navbar-toggler mr-2"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className={`collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse ${
                collapsed ? "" : "show"
              }`}
              aria-expanded={!collapsed}
            >
              <ul className="navbar-nav flex-grow">{children}</ul>
            </div>
          </div>
        </nav>
      </header>
    );
  },
  MenuItem,
  NotificationsHost: ({ children }) => (
    <div className="notifications">{children}</div>
  ),
  NotificationsToast: ({ options, onClose, children }) => (
    <div className={`notification-toast ${options.type}`}>
      <div className="notification-toast-details">
        {options.title && (
          <div className="notification-toast-title">{options.title}</div>
        )}
        <div className="notification-toast-description">{children}</div>
      </div>
      <div className="notification-toast-close" onClick={onClose} />
    </div>
  ),
};

const NotFound = () => {

  const redirectToHomePage = () => {
    window.location.href = '/';
  };
  return (
    <div className="not-found-container">
      <div className="label">404</div>
      <div className="title">You have found a secret place.</div>
      <p className="description">
        Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL.
      </p>
      <button className="btn404" onClick={redirectToHomePage}>Take me back to the home page</button>
    </div>
  );
};

export default NotFound;

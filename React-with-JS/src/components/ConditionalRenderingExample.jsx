const ConditionalRenderingExample = ({ isLoggedIn, user }) => {
  return (
    <div>
      {isLoggedIn ? (
        <h3>
          {user.name} is logged in with {user.email}
        </h3>
      ) : (
        <h4>You are not logged in</h4>
      )}
    </div>
  );
};

export default ConditionalRenderingExample;

import UseApi from "../hook/UseApi";
import classes from "../style/Post.module.css";

const url =
  "https://push-notification-f56f0-default-rtdb.firebaseio.com/datas.json";

const Posts = () => {
  const { data, error, isLoading } = UseApi(url);

  if (error) {
    return <div className={classes.errorMessage}>{error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const arr = Object.values(data);

  return (
    <div className={classes.postsContainer}>
      <table className={classes.postsTable}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {arr.length !== 0 ? (
            arr.map((post) => (
              <tr key={post.id}>
                <td>{post.firstName}</td>
                <td>{post.lastName}</td>
                <td>{post.emailId}</td>
                <td>{post.address}</td>
                <td>{post.phoneNumber}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;

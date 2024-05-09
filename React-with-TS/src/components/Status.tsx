type StatusProp = {
  status: "loading" | "error" | "success";
};

export const Status = (props: StatusProp) => {
  let message;
  if (props.status === "loading") {
    message = "Status is loading!";
  } else if (props.status === "error") {
    message = "Error!";
  } else if (props.status === "success") {
    message = "Your content is loaded!";
  } else {
    message = props.status;
  }
  return <div>{message}</div>;
};

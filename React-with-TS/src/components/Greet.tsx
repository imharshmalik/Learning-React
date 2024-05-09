type Greetprops = {
  name: string;
  messageCount?: number;
};

export const Greet = (props: Greetprops) => {
  return (
    <div>
      Hi {props.name}. You have {props.messageCount} new messages.
    </div>
  );
};

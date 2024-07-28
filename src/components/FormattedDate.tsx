type Props = {
  date: Date;
};

const FormattedDate = (props: Props) => {
  return (
    <time dateTime={props.date.toISOString()} className="text-lg font-bold">
      {props.date.toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </time>
  );
};

export default FormattedDate;

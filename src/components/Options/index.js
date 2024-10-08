const Options = (props) => {
  const { eachOption } = props;
  return (
    <li>
      <div>
        <p>{eachOption}</p>
      </div>
    </li>
  );
};

export default Options;

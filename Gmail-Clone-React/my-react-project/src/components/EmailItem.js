import "../stylesheets/EmailItem.css";

const EmailItem = (props) => {
  console.log(props);
  //classic conditional

  // let deletedClass = "";
  // if (props.deleted === true) {
  //   deletedClass = "text--decoration-through";
  // }
  // let readClass = "";
  // if (props.read === true) {
  //   readClass = "text-bold";
  // }

  //ternary conditional
  let deletedClass = props.deleted === true ? "text--decoration-through" : "";
  let readClass = props.read === false ? "text-bold" : "";

  const handleDeleteEmail = () => {
    console.log("hola");
    props.handleDeleteEmail(props.id);
  };
  return (
    <tr className={`cursor-pointer ${deletedClass} ${readClass}`}>
      <td>
        <a href="www.google.es" className="text--decoration--none">
          {props.from}
        </a>
      </td>
      <td>
        <a href="www.google.es" className="text--decoration--none">
          {props.subject}
        </a>
      </td>
      <td>
        <a href="www.google.es" className="text--decoration--none">
          {props.time}
        </a>
      </td>
      <td className="text-align-right">
        <button
          className="form__btn fas fa-trash"
          onClick={handleDeleteEmail}
        ></button>
      </td>
    </tr>
  );
};
EmailItem.propTypes = {};
export default EmailItem;

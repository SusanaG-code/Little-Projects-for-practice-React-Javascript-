const HeaderForm = (props) => {
  const handleInboxFilter = (ev) => {
    ev.preventDefault();
    props.handleInboxFilter();
  };

  const handleDeleteFilter = (ev) => {
    ev.preventDefault();
    props.handleDeleteFilter();
  };

  const handleTextFilter = (ev) => {
    ev.preventDefault();
    props.handleTextFilter(ev.target.value);
  };
  return (
    <div>
      <form class="text-align-right">
        <button class="form__btn" onClick={handleInboxFilter}>
          <span class="fas fa-inbox"></span>
          Recibidos
        </button>
        <button class="form__btn" onClick={handleDeleteFilter}>
          <span class="fas fa-trash"></span>
          Papelera
        </button>
        <input
          class="form__input-text"
          type="text"
          placeholder="Buscar un correo"
          onKeyUp={handleTextFilter}
        />
      </form>
    </div>
  );
};
HeaderForm.propTypes = {};
export default HeaderForm;

import HeaderForm from "./HeaderForm";

const Header = (props) => {
  console.log(props);

  return (
    <div>
      <header class="col2 mb-1">
        <div>
          <h1 class="title">
            <span class="fas fa-envelope-open-text"></span>
            Gmail
          </h1>
        </div>

        <HeaderForm
          handleInboxFilter={props.handleInboxFilter}
          handleDeleteFilter={props.handleDeleteFilter}
          handleTextFilter={props.handleTextFilter}
        />
      </header>
    </div>
  );
};
Header.propTypes = {};
export default Header;

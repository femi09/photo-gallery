import React, { Fragment } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { searchPhoto } from "../../store/actions";

const input = ({ input:{onChange}, meta: { touched, error }, ...rest }) => (
  <Fragment>
    <input
      type="text"
      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-light focus:outline-none"
      placeholder="Search Photo..."
      {...input}
      onChange={onChange}
    />
    {touched && error && <span className="bg-orange-500">{error}</span>}
  </Fragment>
);

const ImageForm = ({ handleSubmit, searchPhoto, value, onChange }) => {
  return (
    <div className="w-2/3 sm:max-w-sm sm:overflow-hidden my-10 mx-auto">
      <form
        onSubmit={handleSubmit(({ search }) => searchPhoto(search))}
        className="w-full max-w-sm"
      >
        <div className="flex justify-center items-center border-b border-b-2 border-teal-500 py-2">
          <Field name="search" component={input} />
          <button
            type="submit"
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded outline-none focus:outline-none "
          >
            Search
          </button>
          <span className="bg-orange-500">{value}</span>
        </div>
      </form>
    </div>
  );
};
const ImageSearch = reduxForm({ form: "imageSearch" })(ImageForm);
const mapDispatchToProps = (dispatch) => ({
  searchPhoto: (searchTerm) => dispatch(searchPhoto(searchTerm)),
});
export default connect(null, mapDispatchToProps)(ImageSearch);

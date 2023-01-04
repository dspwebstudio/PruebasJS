import Button from "@mui/material/Button";
//import './ReadInputs'
const Form = () => {
  return (
    <form className="mt-4 text-center">
      {/* Name */}
      <div className="mb-3 row">
        <label htmlFor="inputName" className="col-4 col-form-label text-left">
          Name<span className="text-danger ml-2">*</span>
        </label>
        <div className="col-8">
          <input
            type="text"
            className="form-control"
            name="inputName"
            id="inputName"
            placeholder="Name"
          />
        </div>
      </div>

      {/* Password */}
      <div className="mb-3 row">
        <label
          htmlFor="inputPassword"
          className="col-4 col-form-label text-left"
        >
          Password<span className="text-danger ml-2">*</span>
        </label>
        <div className="col-8">
          <input
            type="text"
            className="form-control"
            name="inputPassword"
            id="inputPassword"
            placeholder="Password"
          />
        </div>
      </div>

      {/* Botón de envío */}
      <Button variant="contained" type="submit" className="mt-4" id="button-1">
        Hello World
      </Button>
      {/* Fin Botón de envío */}
    </form>
  );
};
export default Form

import { useDispatch, useSelector } from "react-redux";
// import { clearError, clearFormError, setFormError } from "../redux/auth/slice";
import { useEffect } from "react";
import { register } from "../redux/auth/operationsAuth";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { selectIsAuthLoading } from "../redux/auth/selectorauth";

const Register = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsAuthLoading);
  // const { formError, error, isLoading} = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const credentials = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    if (name.value && email.value && password.value) {
      dispatch(register(credentials));
      Notify.success("Congrats You have been registred");
    } else {
      Notify.failure("Verify the provided info and try again.");
    }
    console.log(credentials);
  };

  // useEffect(() => {
  //   if (formError) {
  //     toast.error(formError);
  //     dispatch(clearFormError());
  //   }
  // }, [dispatch, formError]);

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //     dispatch(clearError());
  //   }
  // }, [dispatch, error]);

  return (
    <div
      style={{
        height: "calc(100vh - 50px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
          padding: 15,
          marginTop: 25,
        }}
      >
        <label
          style={{ display: "flex", flexDirection: "column", marginTop: 10 }}
        >
          Name
          <input type="text" name="name" />
        </label>

        <label
          style={{ display: "flex", flexDirection: "column", marginTop: 10 }}
        >
          Email
          <input type="email" name="email" />
        </label>
        <label
          style={{ display: "flex", flexDirection: "column", marginTop: 10 }}
        >
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit" style={{ marginTop: 20 }} disabled={isLoading}>
          {isLoading ? "Loading..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Register;

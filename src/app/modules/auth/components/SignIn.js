/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
// import {getUserByToken, login} from '../core/_requests'
import { toAbsoluteUrl } from '../../../../_metronic/helpers'
// import {useAuth} from '../core/Auth'
// import * as auth from "../_redux/authRedux";
import { login } from "../_redux/authCrud";
const loginSchema = Yup.object().shape({
  identifier: Yup.string()
    // .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  identifier: "7893224343",
  password: "123456",
};

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Signin(props) {
  const [loading, setLoading] = useState(false)
  // const {saveAuth, setCurrentUser} = useAuth()


  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      console.log("vaaa")
      enableLoading();
      setTimeout(() => {
        login(values.identifier, values.password)
          .then(response => {
            console.log(response)
            if (response.status !== 200) {
              throw Error(response.statusText);
            }
            return response.data;
          })
          .then(data => {
            console.log(data)
            disableLoading();

            props.login(data.jwt);
            props.fulfillUser(data.user);

          })
          // .then(({ data: { jwt } }) => {
          //   disableLoading();
          //   props.login(jwt);
          // })
          .catch(() => {
            disableLoading();
            setSubmitting(false);
            // setStatus(
            //   intl.formatMessage({
            //     id: "AUTH.VALIDATION.INVALID_LOGIN",
            //   })
            // );
          });
      }, 1000);
    },
  });
  // const formik = useFormik({
  //   initialValues,
  //   validationSchema: loginSchema,
  //   onSubmit: async (values, {setStatus, setSubmitting}) => {
  //     setLoading(true)
  //     try {
  //       const {data: auth} = await login(values.email, values.password)
  //       saveAuth(auth)
  //       const {data: user} = await getUserByToken(auth.api_token)
  //       setCurrentUser(user)
  //     } catch (error) {
  //       console.error(error)
  //       saveAuth(undefined)
  //       setStatus('The login detail is incorrect')
  //       setSubmitting(false)
  //       setLoading(false)
  //     }
  //   },
  // })

  return (
    <div className="d-flex flex-column flex-root">
      {/*begin::Authentication - Sign-in */}
      <div className="d-flex flex-column flex-lg-row flex-column-fluid">
        {/*begin::Body*/}
        <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
          {/*begin::Form*/}
          <div className="d-flex flex-center flex-column flex-lg-row-fluid">
            {/*begin::Wrapper*/}
            <div className="w-lg-500px p-10">
              {/*begin::Form*/}
              <form
                onSubmit={formik.handleSubmit}
                className="form fv-plugins-bootstrap fv-plugins-framework"
              >
                {/*begin::Heading*/}
                <div className="text-center mb-11">
                  {/*begin::Title*/}
                  <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
                  {/*end::Title*/}
                  {/*begin::Subtitle*/}
                  <div className="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div>
                  {/*end::Subtitle=*/}
                </div>
                {/*begin::Heading*/}
                {/*begin::Login options*/}
                <div className="row g-3 mb-9">
                  {/*begin::Col*/}
                  <div className="col-md-6">
                    {/*begin::Google link=*/}
                    <a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                      <img alt="Logo" src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')} className="h-15px me-3" />Sign in with Google</a>
                    {/*end::Google link=*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-md-6">
                    {/*begin::Google link=*/}
                    <a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                      <img alt="Logo" src={toAbsoluteUrl('/media/svg/brand-logos/apple-black.svg')} className="theme-light-show h-15px me-3" />
                      <img alt="Logo" src={toAbsoluteUrl("/media/svg/brand-logos/apple-black-dark.svg")} className="theme-dark-show h-15px me-3" />Sign in with Apple</a>
                    {/*end::Google link=*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Login options*/}
                {/*begin::Separator*/}
                <div className="separator separator-content my-14">
                  <span className="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
                </div>
                {/*end::Separator*/}
                {formik.status ? (
                  <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
                    <div className="alert-text font-weight-bold">{formik.status}</div>
                  </div>
                ) : (
                  <div className="mb-10">
                    {/* <div className="alert-text ">
              Use account <strong>admin@demo.com</strong> and password{" "}
              <strong>demo</strong> to continue.
            </div> */}
                  </div>
                )}

                <div className="form-group fv-plugins-icon-container">
                  <input
                    placeholder="Identifier"
                    type="identifier"
                    className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
                      "identifier"
                    )}`}
                    name="identifier"
                    {...formik.getFieldProps("identifier")}
                  />
                  {formik.touched.identifier && formik.errors.identifier ? (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">{formik.errors.identifier}</div>
                    </div>
                  ) : null}
                </div>
                <div className="form-group fv-plugins-icon-container">
                  <input
                    placeholder="Password"
                    type="password"
                    className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
                      "password"
                    )}`}
                    name="password"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">{formik.errors.password}</div>
                    </div>
                  ) : null}
                </div>
                <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
                  <Link
                    to="/auth/forgot-password"
                    className="text-dark-50 text-hover-primary my-3 mr-2"
                    id="kt_login_forgot"
                  >
                    {/* <FormattedMessage id="AUTH.GENERAL.FORGOT_BUTTON" /> */}
                  </Link>

                  <button
                    id="kt_login_signin_submit"
                    type="submit"
                    disabled={formik.isSubmitting}
                    className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}
                  >
                    <span>Sign In</span>
                    {loading && <span className="ml-3 spinner spinner-white"></span>}
                  </button>
                </div>
              </form>
              {/*end::Form*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Form*/}
          {/*begin::Footer*/}
          <div className="d-flex flex-center flex-wrap px-5">
            {/*begin::Links*/}
            <div className="d-flex fw-semibold text-primary fs-base">
              <a href="#" className="px-5" target="_blank">Terms</a>
              <a href="#" className="px-5" target="_blank">Plans</a>
              <a href="#" className="px-5" target="_blank">Contact Us</a>
            </div>
            {/*end::Links*/}
          </div>
          {/*end::Footer*/}
        </div>
        {/*end::Body*/}
        {/*begin::Aside*/}
        <div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2"
          style={{ backgroundImage: `url(${toAbsoluteUrl("/media/misc/auth-bg.png")})` }}
        >
          {/*begin::Content*/}
          <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
            {/*begin::Logo*/}
            <a href="#" className="mb-0 mb-lg-12">
              <img alt="Logo" src={toAbsoluteUrl("/media/logos/custom-1.png")} className="h-60px h-lg-75px" />
            </a>
            {/*end::Logo*/}
            {/*begin::Image*/}
            <img className="d-none d-lg-block mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20" src={toAbsoluteUrl("/media/misc/auth-screens.png")} alt="" />
            {/*end::Image*/}
            {/*begin::Title*/}
            <h1 className="d-none d-lg-block text-white fs-2qx fw-bolder text-center mb-7">Fast, Efficient and Productive</h1>
            {/*end::Title*/}
            {/*begin::Text*/}
            <div className="d-none d-lg-block text-white fs-base text-center">In this kind of post,
              <a href="#" className="opacity-75-hover text-warning fw-bold me-1">the blogger</a>introduces a person they’ve interviewed
              <br />and provides some background information about
              <a href="#" className="opacity-75-hover text-warning fw-bold me-1">the interviewee</a>and their
              <br />work following this is a transcript of the interview.</div>
            {/*end::Text*/}
          </div>
          {/*end::Content*/}
        </div>
        {/*end::Aside*/}
      </div>
      {/*end::Authentication - Sign-in*/}
    </div>
  )
}

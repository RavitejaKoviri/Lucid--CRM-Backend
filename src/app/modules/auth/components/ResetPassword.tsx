import React, {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {requestPassword} from '../core/_requests'
import { toAbsoluteUrl } from '../../../../_metronic/helpers'

const initialValues = {
  email: 'admin@demo.com',
}

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
})

export function ResetPassword() {
  const [loading, setLoading] = useState(false)
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setHasErrors(undefined)
      setTimeout(() => {
        requestPassword(values.email)
          .then(({data: {result}}) => {
            setHasErrors(false)
            setLoading(false)
          })
          .catch(() => {
            setHasErrors(true)
            setLoading(false)
            setSubmitting(false)
            setStatus('The login detail is incorrect')
          })
      }, 1000)
    },
  })

  return (
    <>
      <div className="d-flex flex-column flex-root">
			{/*begin::Authentication - Password reset */}
			<div className="d-flex flex-column flex-lg-row flex-column-fluid">
				{/*begin::Body*/}
				<div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
					{/*begin::Form*/}
					<div className="d-flex flex-center flex-column flex-lg-row-fluid">
						{/*begin::Wrapper*/}
						<div className="w-lg-500px p-10">
							{/*begin::Form*/}
							<form className="form w-100" noValidate id="kt_password_reset_form" data-kt-redirect-url="#" action="#">
								{/*begin::Heading*/}
								<div className="text-center mb-10">
									{/*begin::Title*/}
									<h1 className="text-dark fw-bolder mb-3">Forgot Password ?</h1>
									{/*end::Title*/}
									{/*begin::Link*/}
									<div className="text-gray-500 fw-semibold fs-6">Enter your email to reset your password.</div>
									{/*end::Link*/}
								</div>
								{/*begin::Heading*/}
								{/*begin::Input group=*/}
								<div className="fv-row mb-8">
									{/*begin::Email*/}
									<input type="text" placeholder="Email" name="email" autoComplete="off" className="form-control bg-transparent" />
									{/*end::Email*/}
								</div>
								{/*begin::Actions*/}
								<div className="d-flex flex-wrap justify-content-center pb-lg-0">
									<button type="button" id="kt_password_reset_submit" className="btn btn-primary me-4">
										{/*begin::Indicator label*/}
										<span className="indicator-label">Submit</span>
										{/*end::Indicator label*/}
										{/*begin::Indicator progress*/}
										<span className="indicator-progress">Please wait...
										<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
										{/*end::Indicator progress*/}
									</button>
									{/* <a href="#" className="btn btn-light">Cancel</a> */}
									
									<Link to='/auth/login'>
										<button
										type='button'
										id='kt_login_password_reset_form_cancel_button'
										className='btn btn-lg btn-light-primary fw-bolder'
										// disabled={formik.isSubmitting || !formik.isValid}
										>
										Cancel
										</button>
									</Link>{' '}
									
								</div>
								{/*end::Actions*/}
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
				<div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2" style={{backgroundImage: `url(${toAbsoluteUrl("/media/misc/auth-bg.png")}`}}>
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
			{/*end::Authentication - Password reset*/}
		</div>
    </>
  )
}

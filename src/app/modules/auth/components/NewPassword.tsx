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

export function NewPassword() {
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
			{/* begin::Authentication - New password  */} 
			<div className="d-flex flex-column flex-lg-row flex-column-fluid">
				{/* begin::Body */} 
				<div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
					{/* begin::Form */} 
					<div className="d-flex flex-center flex-column flex-lg-row-fluid">
						{/* begin::Wrapper */} 
						<div className="w-lg-500px p-10">
							{/* begin::Form */} 
							<form className="form w-100" noValidate id="kt_new_password_form" data-kt-redirect-url="#" action="#">
								{/* begin::Heading */} 
								<div className="text-center mb-10">
									{/* begin::Title */} 
									<h1 className="text-dark fw-bolder mb-3">Setup New Password</h1>
									{/* end::Title */} 
									{/* begin::Link */} 
									<div className="text-gray-500 fw-semibold fs-6">Have you already reset the password ?
									{/* <a href="#" className="link-primary fw-bold">Sign in</a> */}
									<Link to='/auth/login' className='link-primary fw-bolder' >
									Sign in
									</Link>
									</div>
									{/* end::Link */} 
								</div>
								{/* begin::Heading */} 
								{/* begin::Input group */} 
								<div className="fv-row mb-8" data-kt-password-meter="true">
									{/* begin::Wrapper */} 
									<div className="mb-1">
										{/* begin::Input wrapper */} 
										<div className="position-relative mb-3">
											<input className="form-control bg-transparent" type="password" placeholder="Password" name="password" autoComplete="off" />
											<span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
												<i className="bi bi-eye-slash fs-2"></i>
												<i className="bi bi-eye fs-2 d-none"></i>
											</span>
										</div>
										{/* end::Input wrapper */} 
										{/* begin::Meter */} 
										<div className="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
											<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
											<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
											<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
											<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
										</div>
										{/* end::Meter */} 
									</div>
									{/* end::Wrapper */} 
									{/* begin::Hint */} 
									<div className="text-muted">Use 8 or more characters with a mix of letters, numbers & symbols.</div>
									{/* end::Hint */} 
								</div>
								{/* end::Input group= */} 
								{/* end::Input group= */} 
								<div className="fv-row mb-8">
									{/* begin::Repeat Password */} 
									<input type="password" placeholder="Repeat Password" name="confirm-password" autoComplete="off" className="form-control bg-transparent" />
									{/* end::Repeat Password */} 
								</div>
								{/* end::Input group= */} 
								{/* begin::Input group= */} 
								<div className="fv-row mb-8">
									<label className="form-check form-check-inline">
										<input className="form-check-input" type="checkbox" name="toc" value="1" />
										<span className="form-check-label fw-semibold text-gray-700 fs-6 ms-1">I Agree &
										<a href="#" className="ms-1 link-primary">Terms and conditions</a>.</span>
									</label>
								</div>
								{/* end::Input group= */} 
								{/* begin::Action */} 
								<div className="d-grid mb-10">
									<button type="button" id="kt_new_password_submit" className="btn btn-primary">
										{/* begin::Indicator label */} 
										<span className="indicator-label">Submit</span>
										{/* end::Indicator label */} 
										{/* begin::Indicator progress */} 
										<span className="indicator-progress">Please wait...
										<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
										{/* end::Indicator progress */} 
									</button>
								</div>
								{/* end::Action */} 
							</form>
							{/* end::Form */} 
						</div>
						{/* end::Wrapper */} 
					</div>
					{/* end::Form */} 
					{/* begin::Footer */} 
					<div className="d-flex flex-center flex-wrap px-5">
						{/* begin::Links */} 
						<div className="d-flex fw-semibold text-primary fs-base">
							<a href="../../demo6/dist/pages/team.html" className="px-5" target="_blank">Terms</a>
							<a href="../../demo6/dist/pages/pricing/column.html" className="px-5" target="_blank">Plans</a>
							<a href="../../demo6/dist/pages/contact.html" className="px-5" target="_blank">Contact Us</a>
						</div>
						{/* end::Links */} 
					</div>
					{/* end::Footer */} 
				</div>
				{/* end::Body */} 
				{/* begin::Aside */} 
				<div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2" style={{backgroundImage: `url(${toAbsoluteUrl("/media/misc/auth-bg.png")}`}}>
					{/* begin::Content */} 
					<div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
						{/* begin::Logo */} 
						<a href="../../demo6/dist/index.html" className="mb-0 mb-lg-12">
							<img alt="Logo" src={toAbsoluteUrl("/media/logos/custom-1.png")} className="h-60px h-lg-75px" />
						</a>
						{/* end::Logo */} 
						{/* begin::Image */} 
						<img className="d-none d-lg-block mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20" src={toAbsoluteUrl("/media/misc/auth-screens.png")} alt="" />
						{/* end::Image */} 
						{/* begin::Title */} 
						<h1 className="d-none d-lg-block text-white fs-2qx fw-bolder text-center mb-7">Fast, Efficient and Productive</h1>
						{/* end::Title */} 
						{/* begin::Text */} 
						<div className="d-none d-lg-block text-white fs-base text-center">In this kind of post,
						<a href="#" className="opacity-75-hover text-warning fw-bold me-1">the blogger</a>introduces a person they’ve interviewed
						<br />and provides some background information about
						<a href="#" className="opacity-75-hover text-warning fw-bold me-1">the interviewee</a>and their
						<br />work following this is a transcript of the interview.</div>
						{/* end::Text */} 
					</div>
					{/* end::Content */} 
				</div>
				{/* end::Aside */} 
			</div>
			{/* end::Authentication - New password */} 
		</div>
    </>
  )
}

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

export function TwoSteps() {
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
			{/* begin::Authentication - Two-stes  */}
			<div className="d-flex flex-column flex-lg-row flex-column-fluid">
				{/* begin::Body */}
				<div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
					{/* begin::Form */}
					<div className="d-flex flex-center flex-column flex-lg-row-fluid">
						{/* begin::Wrapper */}
						<div className="w-lg-500px p-10">
							{/* begin::Form */}
							<form className="form w-100 mb-13" noValidate data-kt-redirect-url="#" id="kt_sing_in_two_steps_form">
								{/* begin::Icon */}
								<div className="text-center mb-10">
									<img alt="Logo" className="mh-125px" src={toAbsoluteUrl("/media/svg/misc/smartphone-2.svg")} />
								</div>
								{/* end::Icon */}
								{/* begin::Heading */}
								<div className="text-center mb-10">
									{/* begin::Title */}
									<h1 className="text-dark mb-3">Two Step Verification</h1>
									{/* end::Title */}
									{/* begin::Sub-title */}
									<div className="text-muted fw-semibold fs-5 mb-5">Enter the verification code we sent to</div>
									{/* end::Sub-title */}
									{/* begin::Mobile no */}
									<div className="fw-bold text-dark fs-3">******7859</div>
									{/* end::Mobile no */}
								</div>
								{/* end::Heading */}
								{/* begin::Section */}
								<div className="mb-10">
									{/* begin::Label */}
									<div className="fw-bold text-start text-dark fs-6 mb-1 ms-1">Type your 6 digit security code</div>
									{/* end::Label */}
									{/* begin::Input group */}
									<div className="d-flex flex-wrap flex-stack">
										<input type="text" name="code_1" data-inputmask="'mask': '9', 'placeholder': ''" maxLength={1} className="form-control bg-transparent h-60px w-60px fs-2qx text-center mx-1 my-2" value="" />
										<input type="text" name="code_2" data-inputmask="'mask': '9', 'placeholder': ''" maxLength={1} className="form-control bg-transparent h-60px w-60px fs-2qx text-center mx-1 my-2" value="" />
										<input type="text" name="code_3" data-inputmask="'mask': '9', 'placeholder': ''" maxLength={1} className="form-control bg-transparent h-60px w-60px fs-2qx text-center mx-1 my-2" value="" />
										<input type="text" name="code_4" data-inputmask="'mask': '9', 'placeholder': ''" maxLength={1} className="form-control bg-transparent h-60px w-60px fs-2qx text-center mx-1 my-2" value="" />
										<input type="text" name="code_5" data-inputmask="'mask': '9', 'placeholder': ''" maxLength={1} className="form-control bg-transparent h-60px w-60px fs-2qx text-center mx-1 my-2" value="" />
										<input type="text" name="code_6" data-inputmask="'mask': '9', 'placeholder': ''" maxLength={1} className="form-control bg-transparent h-60px w-60px fs-2qx text-center mx-1 my-2" value="" />
									</div>
									{/* begin::Input group */}
								</div>
								{/* end::Section */}
								{/* begin::Submit */}
								<div className="d-flex flex-center">
									<button type="button" id="kt_sing_in_two_steps_submit" className="btn btn-lg btn-primary fw-bold">
										<span className="indicator-label">Submit</span>
										<span className="indicator-progress">Please wait...
										<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
									</button>
								</div>
								{/* end::Submit */}
							</form>
							{/* end::Form */}
							{/* begin::Notice */}
							<div className="text-center fw-semibold fs-5">
								<span className="text-muted me-1">Didn’t get the code ?</span>
								<a href="#" className="link-primary fs-5 me-1">Resend</a>
								<span className="text-muted me-1">or</span>
								<a href="#" className="link-primary fs-5">Call Us</a>
							</div>
							{/* end::Notice */}
						</div>
						{/* end::Wrapper */}
					</div>
					{/* end::Form */}
					{/* begin::Footer */}
					<div className="d-flex flex-center flex-wrap px-5">
						{/* begin::Links */}
						<div className="d-flex fw-semibold text-primary fs-base">
							<a href="#" className="px-5" target="_blank">Terms</a>
							<a href="#" className="px-5" target="_blank">Plans</a>
							<a href="#" className="px-5" target="_blank">Contact Us</a>
						</div>
						{/* end::Links */}
					</div>
					{/* end::Footer */}
				</div>
				{/* end::Body */}
				{/* begin::Aside */}
				<div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2" style={{backgroundImage: `url(${toAbsoluteUrl("/media/misc/auth-bg.png")})`}}>
					{/* begin::Content */}
					<div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
						{/* begin::Logo */}
						<a href="#" className="mb-0 mb-lg-12">
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
			{/* end::Authentication - Two-stes */}
		</div>
    </>
  )
}

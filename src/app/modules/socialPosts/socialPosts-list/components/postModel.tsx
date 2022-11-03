import React, { createRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as Yup from 'yup';
import { isNotEmpty, toAbsoluteUrl } from '../../../../../_metronic/helpers';
import { useFormik } from 'formik';
import clsx from 'clsx';
import Picker from 'emoji-picker-react';
import { KTSVG } from '../../../../../_metronic/helpers'

function PostModal(props: any) {
  const [isUserLoading, setUserLoading] = React.useState(false);
  const [chosenEmoji, setChosenEmoji] = React.useState(null);
  const [emojiPicker, setEmojiPicker] = React.useState(false);
  const [image, setImage] = React.useState("");
  const contentRef = createRef<any>();
  const [discValue, setDiscValue] = React.useState("");

  const onEmojiClick = (event: any, emojiObject: any) => {
    const ref = contentRef.current
    const start = discValue.substring(0, ref.selectionStart);
    const content = start + emojiObject.emoji;
    setDiscValue(content);
    ref.selectionEnd = start.length + emojiObject.emoji.length
  };

  const handleImageChange = (e: any) => {
    console.log(e, "iiiiii", e.target.files[0], "fff", e.target.files)
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]))
    }
    console.log(image, "imimim")
  }

  const formik = useFormik({
    initialValues: { disc: "" },
    onSubmit: async (values) => {
      console.log(values.disc, "ddd", discValue)
    },
  })
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id='kt_modal_add_user_form' className='form' onSubmit={formik.handleSubmit}>
          {/* begin::Scroll */}
          <div
            className='d-flex flex-column scroll-y me-n7 pe-7'
            id='kt_modal_add_user_scroll'
            data-kt-scroll='true'
            data-kt-scroll-activate='{default: false, lg: true}'
            data-kt-scroll-max-height='auto'
            data-kt-scroll-dependencies='#kt_modal_add_user_header'
            data-kt-scroll-wrappers='#kt_modal_add_user_scroll'
            data-kt-scroll-offset='300px'
          >
            {/* begin::Input group */}
            <div className='fv-row mb-7'>
              <label className='d-block fw-bold fs-6 mb-5'>Discription</label>
              {/* begin::Input */}
              <input
                placeholder='Discription'
                {...formik.getFieldProps('disc')}
                className={clsx(
                  'form-control form-control-solid mb-3 mb-lg-0',
                  { 'is-invalid': formik.touched.disc && formik.errors.disc },
                  {
                    'is-valid': formik.touched.disc && !formik.errors.disc,
                  }
                )}
                type='disc'
                name='disc'
                autoComplete='off'
                id='disc'
                value={formik.values.disc}
              // disabled={formik.isSubmitting || isUserLoading}
              />
            </div>
            {/* end::Input group */}

            <div>
              <div className="d-flex flex-row align-items-center justify-content-center">
                <div className="p-2">
                  {/* begin::Export */}
                  <button
                    className='btn btn-light-primary me-3'
                  >
                    {/* <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' /> */}
                    <div className="input-group">
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="inputGroupFile04"
                          onChange={(e) => handleImageChange(e)}
                        />
                      </div>
                    </div>
                  </button>
                  {/* end::Export */}
                  {/*begin::Thumbnail settings*/}

                  {/* <div className="text-muted fs-7">
                  Set the product thumbnail image. Only *.png, *.jpg and
                  *.jpeg image files are accepted
                </div> */}

                  {/*end::Thumbnail settings*/}
                </div>
                <div className="p-2">
                  {/* begin::Emoji */}
                  <button type='button' className='btn btn-light-primary me-3'
                    onClick={() => setEmojiPicker(!emojiPicker)}>
                    <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
                    Emoji
                  </button>
                  {/* end::Emoji */}
                </div>
                <div className="p-2">Flex item 3</div>
              </div>
            </div>
            {emojiPicker && <Picker onEmojiClick={onEmojiClick} />}
            <div style={{ width: 150, height: 150 }}>
              {image && <img src={image} style={{ width: '100%' }} />}
            </div>
          </div>
          {/* end::Scroll */}

          {/* begin::Actions */}
          <div className='text-center pt-15'>
            <button
              type='reset'
              onClick={props.onHide}
              className='btn btn-light me-3'
              data-kt-users-modal-action='cancel'
              disabled={formik.isSubmitting || isUserLoading}
            >
              Discard
            </button>

            <button
              type='submit'
              className='btn btn-primary'
              data-kt-users-modal-action='submit'
            // disabled={isUserLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
            >
              <span className='indicator-label'>Submit</span>
              {(formik.isSubmitting || isUserLoading) && (
                <span className='indicator-progress'>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
          {/* end::Actions */}
        </form>
        {/* {(formik.isSubmitting || isUserLoading) && <UsersListLoading />} */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export { PostModal }

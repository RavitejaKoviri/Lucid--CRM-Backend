import React, { createRef, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as Yup from 'yup';
import { isNotEmpty, toAbsoluteUrl } from '../../../../../_metronic/helpers';
import { useFormik } from 'formik';
import clsx from 'clsx';
import Picker from 'emoji-picker-react';
import { KTSVG } from '../../../../../_metronic/helpers';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import { useSelector } from 'react-redux';

function PostModal(props: any) {
  const [isUserLoading, setUserLoading] = React.useState(false);
  const [emojiPicker, setEmojiPicker] = React.useState(false);

  const [discValue, setDiscValue] = React.useState("");
  const [share, setShare] = useState<any>([]);
  const handleChange = (e: any) => {
    const { value, checked } = e.target
    if (checked) {
      setShare([...share, value]);
    }
    else {
      setShare(share.filter((e: any) => e !== value));
    }
  };

  const facebook = share.includes('Facebook')
  const instagram = share.includes('Instagram')

  const [data, setData] = useState("");
  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  const onEmojiClick = (event: any, emojiObject: any) => {
    setData(prevInput => prevInput + event.emoji)
    console.log(event, emojiObject, "emoji")
    setEmojiPicker(!emojiPicker)
  };
  const [imageUrl, setImageUrl] = React.useState<any[]>([]);
  const [selectedPreviewFile, setSelectedPreviewFile] = useState();
  const [preview, setPreview] = useState();
  console.log(data, "emoji")
  useEffect(() => {
    if (!selectedPreviewFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl: any = URL.createObjectURL(selectedPreviewFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedPreviewFile]);

  const handleImageChange = (document: any) => {
    setSelectedPreviewFile(document);
    const selectedFile = document;
    var formdata = new FormData();
    formdata.append("files", selectedFile, selectedFile.name);
    console.log("document", document);
    axios
      .post("http://65.2.10.157:5377/upload/", formdata, {
        headers: { "content-type": "application/json", Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        console.log(data[0].url, "imageupload");
        setImageUrl(data[0].url);
      })
      .catch(() => { });

  }
  const formik = useFormik({
    initialValues: { disc: "" },
    onSubmit: async (values) => {
      console.log(values.disc, "ddd", discValue)
    },
  })

  const [accessToken, setAccessToken] = useState("");
  console.log(accessToken, "accessToken");

  // const facebookData = {
  //   message: "hello websoc",
  //   url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxaPhzScJPYZs8LPQygV9kcYHOPYu0EhkOIpvvIlRriw&s"
  // }



  const responseFacebook = (response: any) => {
    axios.get(`https://graph.facebook.com/v6.0/oauth/access_token?  
    grant_type=fb_exchange_token&          
    client_id=1320326945373263&
    client_secret=dff22b28e155da4acd6818580ed6438f&
    fb_exchange_token=${response.accessToken}`).then((response) => {
      const { data } = response;
      setAccessToken(data?.access_token)
      getUserId(data?.access_token)
      // getInstaId(data?.access_token)
      console.log(data, "data");
    })
  }

  //facebook post

  const getUserId = (accessId: any) => {
    axios.get(`https://graph.facebook.com/v6.0/me?access_token=${accessId}`).then((response) => {
      const { data } = response;
      getPageAcessToken(data?.id, accessId)
    })
  }

  const getPageAcessToken = (id: any, accessId: any) => {
    axios.get(`https://graph.facebook.com/v6.0/${id}/accounts?access_token=${accessId}`).then((response) => {
      const { data } = response;
      setAccessToken(data?.data[0]?.access_token)
    })
  }

  // const PostToFacebook = () => {
  //   axios.post(`https://graph.facebook.com/101750425879367/feed?message=${data}&access_token=${accessToken}`).then((response) => {
  //     const { data } = response;
  //   })
  // }

  const PostToFacebook = () => {
    axios.post(`https://graph.facebook.com/101750425879367/photos?message=${data}&url=http://65.2.10.157:5377${imageUrl}&access_token=${accessToken}`).then((response) => {
      const { data } = response;
      console.log(data, "data")
    })
  }

  //insta post 

  const getInstaId = (token: any) => {
    axios.get(`https://graph.facebook.com/v15.0/101750425879367/?fields=instagram_business_account&access_token=${token}`).then((response) => {
      const { data } = response;
      createMediaContainer(data?.instagram_business_account?.id, token)
    })
  }

  const createMediaContainer = (id: any, token: any) => {
    axios.post(`https://graph.facebook.com/v15.0/${id}/media?image_url=http://65.2.10.157:5377${imageUrl}&caption=%23${data}&access_token=${token}`).then((response) => {
      const { data } = response;
      postInstagramPost(data?.id, id, token)
    })
  }

  const postInstagramPost = (mediaId: any, id: any, token: any) => {
    axios.post(`https://graph.facebook.com/v15.0/${id}/media_publish?access_token=${token}&creation_id=${mediaId}`).then((response) => {
      const { data } = response;
      console.log(data, "instapost");

    })
  }

  const PostOnSocialMedia = () => {
    facebook && PostToFacebook()
    instagram && getInstaId(accessToken)
  }
  return (
    <>

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
        {accessToken ? (
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

                  <label className='d-block fw-bold fs-6 mb-1'>Discription</label>
                  <div className='d-flex flex-row align-items-center justify-content-center'>
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
                      value={data}
                      onChange={(e) => setData(e.target.value)}
                    // disabled={formik.isSubmitting || isUserLoading}
                    />
                    <div className="p-2">
                      {/* begin::Emoji */}
                      <button type='button' className='btn btn-light-primary me-3'
                        onClick={() => setEmojiPicker(!emojiPicker)}>
                        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
                        Emoji
                      </button>
                      {/* end::Emoji */}
                    </div>
                  </div>
                </div>
                {/* end::Input group */}

                <div>
                  <div className="d-flex flex-row ">
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
                              onChange={(event: any) => handleImageChange(event.currentTarget.files[0])}
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
                    <div style={{ display: 'flex', marginLeft: '12%', marginTop: '2%' }}>
                      <div>
                        <input
                          type="checkbox"
                          name="share"
                          value="Facebook"
                          onChange={handleChange}
                        />
                        <label style={{ textAlign: 'center', fontSize: '20px' }}>Facebook</label> </div>
                      <div style={{ marginLeft: '30px' }}>
                        <input
                          type="checkbox"
                          name="share"
                          value="Instagram"
                          onChange={handleChange}
                        />
                        <label style={{ textAlign: 'center', fontSize: '20px' }}>Instagram</label>

                      </div>

                    </div>
                  </div>
                </div>
                {emojiPicker && <Picker onEmojiClick={onEmojiClick} />}
                <div style={{ width: 150, height: 150 }}>
                  {preview && <img src={preview} style={{ width: '100%' }} />}
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
                  onClick={() => PostOnSocialMedia()}
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
        ) : (
          <FacebookLogin
            appId="1320326945373263"
            autoLoad={true}
            fields="name,email,picture"
            // onClick={componentClicked}
            callback={responseFacebook} />
        )}
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

    </>

  );
}

export { PostModal }

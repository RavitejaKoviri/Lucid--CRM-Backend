/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  DeleteContact,
  getContactById,
} from "../../../../app/modules/Contact/contacts-list/_redux/contactAction";
import { toAbsoluteUrl, KTSVG } from "../../../helpers";

type Props = {
  color?: string;
  avatar?: string;
  online?: boolean;
  name: string;
  job: string;
  avgEarnings: string;
  totalEarnings: string;
  id: string;
};

const Card3: FC<Props> = ({
  color = "",
  avatar = "",
  online = false,
  name,
  job,
  avgEarnings,
  totalEarnings,
  id,
}) => {
  console.log(id, " id");

  const navigation = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state?.auth?.user);
  const rolePermissionsByUser = useSelector(
    (state: any) => state?.Dashboard?.RolePermissionsById
  );
  const token = useSelector((state: any) => state?.auth?.authToken);
  const openEditModal = () => {
    console.log(id, "TestId");
    navigation("Editcontact", { state: { id } });
    // dispatch(getContactById(id, token))
  };

  const deleteItem = () => dispatch(DeleteContact(id, token));
  return (
    <div className="card">
      <div className="card-body d-flex flex-center flex-column p-9">
        <div className="mb-5">
          <div className="symbol symbol-75px symbol-circle">
            {color ? (
              <span
                className={`symbol-label bg-light-${color} text-${color} fs-5 fw-bolder`}
              >
                {name.charAt(0)}
              </span>
            ) : (
              <>
                <img alt="Pic" src={toAbsoluteUrl(avatar)} />
                {user?.isSuperAdmin === true ? (
                  <>
                    <a
                      href="#"
                      className="btn btn-light btn-active-light-primary btn-sm"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      Actions
                      <KTSVG
                        path="/media/icons/duotune/arrows/arr072.svg"
                        className="svg-icon-5 m-0"
                      />
                    </a>
                    {/* begin::Menu */}
                    <div
                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                      data-kt-menu="true"
                    >
                      {/* begin::Menu item */}
                      <div className="menu-item px-3">
                        <a className="menu-link px-3" onClick={openEditModal}>
                          Edit
                        </a>
                      </div>
                      {/* end::Menu item */}

                      {/* begin::Menu item */}
                      <div className="menu-item px-3">
                        <a
                          className="menu-link px-3"
                          data-kt-users-table-filter="delete_row"
                          onClick={deleteItem}
                        >
                          Delete
                        </a>
                      </div>
                      {/* end::Menu item */}
                    </div>
                  </>
                ) : (
                  <>
                    {rolePermissionsByUser?.filter(
                      (item: any) =>
                        item?.allmodule?.name === "Brands" &&
                        (item?.Update === true || item?.Delete === true)
                    )?.length > 0 && (
                      <>
                        <a
                          href="#"
                          className="btn btn-light btn-active-light-primary btn-sm"
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                        >
                          Actions
                          <KTSVG
                            path="/media/icons/duotune/arrows/arr072.svg"
                            className="svg-icon-5 m-0"
                          />
                        </a>

                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                          data-kt-menu="true"
                        >
                          {/* begin::Menu item */}
                          {rolePermissionsByUser?.filter(
                            (item: any) =>
                              item?.allmodule.name === "Contacts" &&
                              item?.Update === true
                          )?.length > 0 && (
                            <div className="menu-item px-3">
                              <a
                                className="menu-link px-3"
                                onClick={openEditModal}
                              >
                                Edit
                              </a>
                            </div>
                          )}
                          {/* end::Menu item */}

                          {/* begin::Menu item */}
                          {rolePermissionsByUser?.filter(
                            (item: any) =>
                              item?.allmodule.name === "Contacts" &&
                              item?.Delete === true
                          )?.length > 0 && (
                            <div className="menu-item px-3">
                              <a
                                className="menu-link px-3"
                                data-kt-users-table-filter="delete_row"
                                onClick={deleteItem}
                              >
                                Delete
                              </a>
                            </div>
                          )}
                          {/* end::Menu item */}
                        </div>
                      </>
                    )}
                  </>
                )}
              </>
            )}
            {online && (
              <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n3 mt-n3"></div>
            )}
          </div>
        </div>

        <a
          href="#"
          className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
        >
          {name}
        </a>

        <div className="fw-bold text-gray-400 mb-6">{job}</div>

        <div className="d-flex flex-center flex-wrap mb-5">
          <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3">
            <div className="fs-6 fw-bolder text-gray-700">{avgEarnings}</div>
            <div className="fw-bold text-gray-400">Avg. Earnings</div>
          </div>

          <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3">
            <div className="fs-6 fw-bolder text-gray-700">{totalEarnings}</div>
            <div className="fw-bold text-gray-400">Total Sales</div>
          </div>
        </div>

        <a href="#" className="btn btn-sm btn-light">
          <KTSVG
            path="/media/icons/duotune/arrows/arr075.svg"
            className="svg-icon-3"
          />
          Connect
        </a>
      </div>
    </div>
  );
};

export { Card3 };

/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MenuComponent } from "../../../../../../_metronic/assets/ts/components";
import { ID, KTSVG, QUERIES } from "../../../../../../_metronic/helpers";
import { useListView } from "../../core/ListViewProvider";
import { useQueryResponse } from "../../core/QueryResponseProvider";
import { deleteUser } from "../../core/_requests";
import { DeleteCampaign } from "../../_redux/campaignAction";

type Props = {
  id: ID;
};

const CampaignActionsCell: FC<Props> = ({ id }) => {
  console.log("edit check", id);
  const user = useSelector((state: any) => state?.auth?.user);
  const rolePermissionsByUser = useSelector(
    (state: any) => state?.Dashboard?.RolePermissionsById
  );
  const { setItemIdForUpdate } = useListView();
  const { query } = useQueryResponse();
  const queryClient = useQueryClient();

  useEffect(() => {
    MenuComponent.reinitialization();
  }, []);
  const navigation = useNavigate();
  const openEditModal = () => {
    navigation("EditCampaign", { state: { id } });
  };

  // const deleteItem = useMutation(() => deleteUser(id), {
  //   // 💡 response of the mutation is passed to onSuccess
  //   onSuccess: () => {
  //     // ✅ update detail view directly
  //     queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
  //   },
  // })
  const token = useSelector((state: any) => state?.auth?.authToken);
  const dispatch = useDispatch();
  const deleteItem = () => dispatch(DeleteCampaign(id, token));

  return (
    <>
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
                // onClick={async () => await deleteItem.mutateAsync()}
                onClick={deleteItem}
              >
                Delete
              </a>
            </div>
            {/* end::Menu item */}
          </div>
          {/* end::Menu */}
        </>
      ) : (
        <>
          {rolePermissionsByUser?.filter(
            (item: any) =>
              item?.allmodule?.name === "Campaigns" &&
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
              {/* begin::Menu */}
              <div
                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                data-kt-menu="true"
              >
                {/* begin::Menu item */}
                {rolePermissionsByUser?.filter(
                  (item: any) =>
                    item?.allmodule.name === "Campaigns" &&
                    item?.Update === true
                )?.length > 0 && (
                  <div className="menu-item px-3">
                    <a className="menu-link px-3" onClick={openEditModal}>
                      Edit
                    </a>
                  </div>
                )}
                {/* end::Menu item */}

                {/* begin::Menu item */}
                {rolePermissionsByUser?.filter(
                  (item: any) =>
                    item?.allmodule.name === "Campaigns" &&
                    item?.Delete === true
                )?.length > 0 && (
                  <div className="menu-item px-3">
                    <a
                      className="menu-link px-3"
                      data-kt-users-table-filter="delete_row"
                      // onClick={async () => await deleteItem.mutateAsync()}
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
          {/* end::Menu */}
        </>
      )}
    </>
  );
};

export { CampaignActionsCell };

import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { fetchAllRoles, deleteRole } from "../../services/roleService";
import { toast } from "react-toastify";

const TableRoles = forwardRef((props, ref) => {
  const [listRoles, setListRoles] = useState([]);

  useEffect(() => {
    getAllRoles();
  }, []);

  useImperativeHandle(ref, () => ({
    fetListRolesAgain() {
      getAllRoles();
    },
  }));

  const getAllRoles = async () => {
    let data = await fetchAllRoles();
    if (data && +data.EC === 0) {
      setListRoles(data.DT);
    }
  };

  const handleDeleteRole = async (role) => {
    let data = await deleteRole(role);
    if (data && +data.EC === 0) {
      toast.success(data.EM);
      await getAllRoles();
    }
  };

  return (
    <>
      <div class="user-body mt-5">
        <table class="table table-borderless table-responsive table-hover card-1 p-4">
          <thead>
            <tr class="border-bottom">
              <th>
                <span class="ml-2">ID</span>
              </th>
              <th>
                <span class="ml-2">URL</span>
              </th>
              <th>
                <span class="ml-2">Description</span>
              </th>
              <th>
                <span class="ml-2">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {listRoles && listRoles.length > 0 ? (
              <>
                {listRoles.map((item, index) => {
                  return (
                    <tr class="border-bottom" key={`row-${index}`}>
                      <td>
                        <div class=" d-flex flex-row align-items-center mb-2">
                          {item.id}
                        </div>
                      </td>
                      <td>
                        <div class="d-flex">{item.url}</div>
                      </td>
                      <td>
                        <div class=" d-flex flex-column">
                          {item.description}
                        </div>
                      </td>
                      <td>
                        <span
                          title="Delete"
                          className="delete"
                          onClick={() => handleDeleteRole(item)}
                        >
                          <i class="fa fa-trash"></i>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <>
                <tr>
                  <td colSpan={4}>Not Found Roles</td>{" "}
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
    // <>
    //   <table className="table table-bordered table-hover">
    //     <thead>
    //       <tr>
    //         <th scope="col">Id</th>
    //         <th scope="col">URL</th>
    //         <th scope="col">Description</th>
    //         <th scope="col">Actions</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {listRoles && listRoles.length > 0 ? (
    //         <>
    //           {listRoles.map((item, index) => {
    //             return (
    //               <tr key={`row-${index}`}>
    //                 {/* <td>{(currentPage - 1) * currentLimit + index + 1}</td> */}
    //                 <td>{item.id}</td>
    //                 <td>{item.url}</td>
    //                 <td>{item.description}</td>
    //                 <td>
    //                   <span
    //                     title="Delete"
    //                     className="delete"
    //                     onClick={() => handleDeleteRole(item)}
    //                   >
    //                     <i class="fa fa-trash"></i>
    //                   </span>
    //                 </td>
    //               </tr>
    //             );
    //           })}
    //         </>
    //       ) : (
    //         <>
    //           <tr>
    //             <td colSpan={4}>Not Found Roles</td>
    //           </tr>
    //         </>
    //       )}
    //     </tbody>
    //   </table>
    // </>
  );
});

export default TableRoles;

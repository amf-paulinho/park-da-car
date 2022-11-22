import { destroyParkingAsync } from "./parkingSlice";

function ButtonGroup(props: any) {
  function handleClick(e: any) {
    const payload = {
      parking: {
        parking_id: props.parking_id,
      },
    };
    props.dispatch(destroyParkingAsync(payload));
  }
  return (
    <div className="btn-group float-end">
      <button
        className="btn btn-warning"
        onClick={() => props.toggleEditForm()}
      >
        Edit
      </button>
      <button className="btn btn-danger" onClick={(e) => handleClick(e)}>
        Delete
      </button>
    </div>
  );
}

export default ButtonGroup;

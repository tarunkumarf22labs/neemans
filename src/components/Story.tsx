import { Ival } from "../types";

interface IStoryProps {
  items: Ival;
  memoizedhandleoverlay: (items: Ival) => void;
  onClick: () => void;
  fetchUsers: () => void;
  creationparentdata: (data: string) => void;
}

function Story({
  items,
  memoizedhandleoverlay,
  onClick,
  fetchUsers,
  creationparentdata,
}: IStoryProps) {
  return (
    <div
      onClick={() => {
        memoizedhandleoverlay(items),
          onClick(),
          fetchUsers(),
          creationparentdata(items.name);
      }}
      className="f22__stories"
    >
      <svg
        fill="#000000"
        height="800px"
        width="800px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        style="fill: #ffffffbd; width: 50px; height: 50px; position: absolute; top: 41%; left: 43%; transform: translate(-50%, -50%);"
      >
        <g>
          <g>
            <path
              d="M500.203,236.907L30.869,2.24c-6.613-3.285-14.443-2.944-20.736,0.939C3.84,7.083,0,13.931,0,21.333v469.333
			c0,7.403,3.84,14.251,10.133,18.155c3.413,2.112,7.296,3.179,11.2,3.179c3.264,0,6.528-0.747,9.536-2.24l469.333-234.667
			C507.435,271.467,512,264.085,512,256S507.435,240.533,500.203,236.907z"
            />
          </g>
        </g>
      </svg>
      <img src={items.image} loading="eager" />
      <h6 className="f22_storiesitem">{items.name}</h6>
    </div>
  );
}

export default Story;

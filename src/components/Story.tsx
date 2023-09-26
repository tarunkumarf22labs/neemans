import { Ival } from "../types";

interface IStoryProps {
  items: Ival;
  memoizedhandleoverlay: (items: Ival) => void;
  onClick : () => void
  fetchUsers : () => void
  creationparentdata : (data : string) => void
}

function Story({ items, memoizedhandleoverlay  , onClick , fetchUsers , creationparentdata } : IStoryProps) {
  
  return (
    <div
      onClick={() => {memoizedhandleoverlay(items)  , onClick() , fetchUsers() ,  creationparentdata(items.name) }  }
      className="f22__stories"
    >
      <img src={items.image} loading="eager"/>
      <h6  className="f22_storiesitem" >{items.name}</h6>
    </div>
  );
}

export default Story;

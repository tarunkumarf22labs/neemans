import { Ival } from "../types";

interface IStoryProps {
  items: Ival;
  memoizedhandleoverlay: (items: Ival) => void;
}

function Story({ items, memoizedhandleoverlay }: IStoryProps) {
  return (
    <div
      onClick={() => memoizedhandleoverlay(items)}
      className="f22__stories"
    >
      <img src={items.image} />
      <h6  className="f22_storiesitem" >{items.name}</h6>
    </div>
  );
}

export default Story;

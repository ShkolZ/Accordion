import { useState } from "react";

function AccordionItem(props: any) {
  const [isShow, setShow] = useState(false);
  const item = props.item;

  return (
    <div className="mb-3 border-b-1 p-2">
      <button onClick={() => setShow(!isShow)} className="w-full">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xl">{item.title}</h3>
          <span className="font-bold text-xl">{isShow ? "-" : "+"}</span>
        </div>
      </button>
      {isShow && <p className="text-gray-800">{item.content}</p>}
    </div>
  );
}

function Accordion(props: any) {
  const items = props.props;

  return (
    <div className="w-1/3 flex flex-col justify-center">
      {items.map((item: any, i: number) => (
        <AccordionItem key={i} item={item} />
      ))}
    </div>
  );
}

export default Accordion;

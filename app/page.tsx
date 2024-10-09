/* eslint-disable react/no-danger-with-children */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { dataTest } from "@/data";
import parse from "html-react-parser";

export default function Home() {
  console.log("dataTest", dataTest);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const listQuestion = Object.values(dataTest).map((item: any) => {
  //   item.answers2 = Object.values(item.answers);
  //   return item;
  // });
  // console.log("listQuestion", listQuestion);
  const listQuestion = Object.values(dataTest).map((item: any) => {
    if (item?.answers?.content) {
      item.content2 = item?.answers?.content;
    } else {
      item.answers2 = Object.values(item.answers);
    }
    return item;
  });

  // for (const key in dataTest) {
  //   console.log(`${key}: ${dataTest[key].index}`); // In ra từng thuộc tính và giá trị của entity
  // }

  const numberToLetter = (num: number): string => {
    // Chuyển số thành ký tự bằng cách thêm giá trị của 'A' là 65.
    // Nếu num = 1 thì sẽ ra 'A' (65), num = 2 thì ra 'B' (66),...
    return String.fromCharCode(65 + num);
  };

  return (
    <div className="p-10">
      <div className="text-center font-bold text-xl">{listQuestion[0]?.topic_name}</div>
      {listQuestion?.map((item, index) => (
        <div className="pb-5" key={index}>
          <div className="font-bold">Câu hỏi: {index + 1} ({item?.score}đ)</div>
          <div className="pl-5" key={index}>{parse(item?.content)}</div>
          <div className="font-bold">Câu trả lời: </div>
          {item?.content2 && <div className="pl-5">{parse(item?.content2)}</div>}
          <div>
            {item?.answers2?.map((i: any, index: number) => (
              <div
                key={index}
                className={i?.correct === 1 ? "pl-5 text-green-600" : "pl-5"}
              >
                {numberToLetter(index)}. {i?.content}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

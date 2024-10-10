/* eslint-disable react/no-danger-with-children */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { dataTest, dataTest2, dataTest3, dataTest4, dataTest5, dataTest6 } from "@/data";
import parse from "html-react-parser";
import { useState } from "react";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const listQuestion = Object.values(dataTest).map((item: any) => {
  //   item.answers2 = Object.values(item.answers);
  //   return item;
  // });
  // console.log("listQuestion", listQuestion);
  const [step, setStep] = useState(0);
  const listQuestion = Object.values(dataTest).map((item: any) => {
    if (item?.answers?.content) {
      item.content2 = item?.answers?.content;
    } else {
      item.answers2 = Object.values(item.answers);
    }
    return item;
  });

  const listQuestion2 = Object.values(dataTest2).map((item: any) => {
    if (item?.answers?.content) {
      item.content2 = item?.answers?.content;
    } else {
      item.answers2 = Object.values(item.answers);
    }
    return item;
  });

  const listQuestion3 = Object.values(dataTest3).map((item: any) => {
    if (item?.answers?.content) {
      item.content2 = item?.answers?.content;
    } else {
      item.answers2 = Object.values(item.answers);
    }
    return item;
  });

  const listQuestion4 = Object.values(dataTest4).map((item: any) => {
    if (item?.answers?.content) {
      item.content2 = item?.answers?.content;
    } else {
      item.answers2 = Object.values(item.answers);
    }
    return item;
  });

  const listQuestion5 = Object.values(dataTest5).map((item: any) => {
    if (item?.answers?.content) {
      item.content2 = item?.answers?.content;
    } else {
      item.answers2 = Object.values(item.answers);
    }
    return item;
  });

  const listQuestion6 = Object.values(dataTest6).map((item: any) => {
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
    <div>
      <div className="flex justify-center pt-5">
        <button
          type="button"
          onClick={() => setStep(0)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {listQuestion[0]?.topic_name}
        </button>
        <button
          type="button"
          onClick={() => setStep(1)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {listQuestion2[0]?.topic_name}
        </button>
        <button
          type="button"
          onClick={() => setStep(2)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {listQuestion3[0]?.topic_name}
        </button>
        <button
          type="button"
          onClick={() => setStep(3)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {listQuestion4[0]?.topic_name}
        </button>
        <button
          type="button"
          onClick={() => setStep(4)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {listQuestion5[0]?.topic_name}
        </button>
        <button
          type="button"
          onClick={() => setStep(5)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          xxxx
        </button>
      </div>

      {step === 0 && (
        <div className="p-10">
          <div className="text-center font-bold text-xl">
            {listQuestion[0]?.topic_name}
          </div>
          {listQuestion?.map((item, index) => (
            <div className="pb-5" key={index}>
              <div className="font-bold">
                Câu hỏi: {index + 1} ({item?.score}đ)
              </div>
              <div className="pl-5" key={index}>
                {parse(item?.content)}
              </div>
              <div className="font-bold">Câu trả lời: </div>
              {item?.content2 && (
                <div className="pl-5">{parse(item?.content2)}</div>
              )}
              <div>
                {item?.answers2?.map((i: any, index: number) => (
                  <div
                    key={index}
                    className={
                      i?.correct === 1 ? "pl-5 text-green-600" : "pl-5"
                    }
                  >
                    <div className={i?.select === 1? "flex text-blue-600 gap-3" : "flex gap-3"}>
                      <div>
                        {numberToLetter(index)}. {i?.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {step === 1 && (
        <div className="p-10">
          <div className="text-center font-bold text-xl">
            {listQuestion2[0]?.topic_name}
          </div>
          {listQuestion2?.map((item, index) => (
            <div className="pb-5" key={index}>
              <div className="font-bold">
                Câu hỏi: {index + 1} ({item?.score}đ)
              </div>
              <div className="pl-5" key={index}>
                {parse(item?.content)}
              </div>
              <div className="font-bold">Câu trả lời: </div>
              {item?.content2 && (
                <div className="pl-5">{parse(item?.content2)}</div>
              )}
              <div>
                {item?.answers2?.map((i: any, index: number) => (
                  <div
                    key={index}
                    className={
                      i?.correct === 1 ? "pl-5 text-green-600" : "pl-5"
                    }
                  >
                    <div className={i?.select === 1? "flex text-blue-600 gap-3" : "flex gap-3"}>
                      <div>
                        {numberToLetter(index)}. {i?.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {step === 2 && (
        <div className="p-10">
          <div className="text-center font-bold text-xl">
            {listQuestion3[0]?.topic_name}
          </div>
          {listQuestion3?.map((item, index) => (
            <div className="pb-5" key={index}>
              <div className="font-bold">
                Câu hỏi: {index + 1} ({item?.score}đ)
              </div>
              <div className="pl-5" key={index}>
                {parse(item?.content)}
              </div>
              <div className="font-bold">Câu trả lời: </div>
              {item?.content2 && (
                <div className="pl-5">{parse(item?.content2)}</div>
              )}
              <div>
                {item?.answers2?.map((i: any, index: number) => (
                  <div
                    key={index}
                    className={
                      i?.correct === 1 ? "pl-5 text-green-600" : "pl-5"
                    }
                  >
                    <div className={i?.select === 1? "flex text-blue-600 gap-3" : "flex gap-3"}>
                      <div>
                        {numberToLetter(index)}. {i?.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {step === 3 && (
        <div className="p-10">
          <div className="text-center font-bold text-xl">
            {listQuestion4[0]?.topic_name}
          </div>
          {listQuestion4?.map((item, index) => (
            <div className="pb-5" key={index}>
              <div className="font-bold">
                Câu hỏi: {index + 1} ({item?.score}đ)
              </div>
              <div className="pl-5" key={index}>
                {parse(item?.content)}
              </div>
              <div className="font-bold">Câu trả lời: </div>
              {item?.content2 && (
                <div className="pl-5">{parse(item?.content2)}</div>
              )}
              <div>
                {item?.answers2?.map((i: any, index: number) => (
                  <div
                    key={index}
                    className={
                      i?.correct === 1 ? "pl-5 text-green-600" : "pl-5"
                    }
                  >
                    <div className={i?.select === 1? "flex text-blue-600 gap-3" : "flex gap-3"}>
                      <div>
                        {numberToLetter(index)}. {i?.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {step === 4 && (
        <div className="p-10">
          <div className="text-center font-bold text-xl">
            {listQuestion5[0]?.topic_name}
          </div>
          {listQuestion5?.map((item, index) => (
            <div className="pb-5" key={index}>
              <div className="font-bold">
                Câu hỏi: {index + 1} ({item?.score}đ)
              </div>
              <div className="pl-5" key={index}>
                {parse(item?.content)}
              </div>
              <div className="font-bold">Câu trả lời: </div>
              {item?.content2 && (
                <div className="pl-5">{parse(item?.content2)}</div>
              )}
              <div>
                {item?.answers2?.map((i: any, index: number) => (
                  <div
                    key={index}
                    className={
                      i?.correct === 1 ? "pl-5 text-green-600" : "pl-5"
                    }
                  >
                    <div className={i?.select === 1? "flex text-blue-600 gap-3" : "flex gap-3"}>
                      <div>
                        {numberToLetter(index)}. {i?.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {step === 5 && (
        <div className="p-10">
          <div className="text-center font-bold text-xl">
            {listQuestion6[0]?.topic_name}
          </div>
          {listQuestion6?.map((item, index) => (
            <div className="pb-5" key={index}>
              <div className="font-bold">
                Câu hỏi: {index + 1} ({item?.score}đ)
              </div>
              <div className="pl-5" key={index}>
                {parse(item?.content)}
              </div>
              <div className="font-bold">Câu trả lời: </div>
              {item?.content2 && (
                <div className="pl-5">{parse(item?.content2)}</div>
              )}
              <div>
                {item?.answers2?.map((i: any, index: number) => (
                  <div
                    key={index}
                    className={
                      i?.correct === 1 ? "pl-5 text-green-600" : "pl-5"
                    }
                  >
                    <div className={i?.select === 1? "flex text-blue-600 gap-3" : "flex gap-3"}>
                      <div>
                        {numberToLetter(index)}. {i?.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

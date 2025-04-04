"use client";

import { TruncateAndProvideTooltip } from "@/utils/truncateAndProvideTooltip";
import { Button, Select } from "@mantine/core";
import Scrollbars from "react-custom-scrollbars-2";

import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";
import { openDrawer } from "@/store/slices/drawerSlice";
const taskData = [
  {
    id: 1,
    title: "PAUSED",
    backgroundColor: "bg-[#757575]",
    data: [],
  },
  {
    id: 13,
    title: "NOT STARTED",
    backgroundColor: "bg-[#EB5757]",
    data: [
      {
        id: 1,
        task_title: "Have Dinner",
        task_desc:
          "vbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret w",
        priority: "Low",
      },
      {
        id: 341,
        task_title: "Have Dinner",
        task_desc:
          "vbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret w",
        priority: "Low",
      },
      {
        id: 4561,
        task_title: "Have Dinner",
        task_desc:
          "vbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret w",
        priority: "Low",
      },
      {
        id: 2341,
        task_title: "Have Dinner",
        task_desc:
          "vbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret w",
        priority: "Low",
      },
      {
        id: 1567,
        task_title: "Have Dinner",
        task_desc:
          "vbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret w",
        priority: "Low",
      },
    ],
  },
  {
    id: 16,
    title: "WORKING",
    backgroundColor: "bg-[#F2994A]",
    data: [
      {
        id: 1,
        task_title: "Have Dinner",
        task_desc:
          "vbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret w",
        priority: "Medium",
      },
    ],
  },
  {
    id: 12,
    title: "NEEDS FEEDBACK",
    backgroundColor: "bg-[#5AC8FA]",
    data: [
      {
        id: 1,
        task_title: "Have Dinner",
        task_desc:
          "vbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret w",
        priority: "Medium",
      },
    ],
  },
  {
    id: 11,
    title: "DONE",
    backgroundColor: "bg-[#27AE60]",
    data: [
      {
        id: 1,
        task_title: "Have Dinner",
        task_desc:
          "vbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret wvbvcbcvncvbncvb wretgwret we rwertwert wret w",
        priority: "High",
      },
    ],
  },
];
const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex-auto flex flex-col gap-6 py-6 ">
      <div className="relative">
        <p className=" text-center lg:text-4xl text-2xl font-extrabold  bg-gradient-to-b from-[#513BE8] to-[#6141C1] bg-clip-text text-transparent">
          Task tracker
        </p>
        <div className="absolute top-0 right-6 bottom-0">
          <Button
            leftSection={<div className="text-white text-xl">+</div>}
            size="md"
            classNames={{ label: "text-lg" }}
            onClick={() => {
              dispatch(openDrawer(null));
            }}
          >
            Create
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-5 space-x-6 px-6 flex-auto">
        {taskData?.map((each) => (
          <div
            key={each?.id}
            className={`flex flex-col rounded-lg overflow-hidden border bg-[#F2F2F2] `}
          >
            <p
              className={`text-center p-6 text-white font-bold text-2xl border-b ${each?.backgroundColor}`}
            >
              {each?.title}
            </p>
            <Scrollbars universal autoHide>
              {each?.data?.length > 0 ? (
                <div className="flex flex-col gap-4 py-3 px-3">
                  {each?.data?.map((taskData) => (
                    <div
                      key={taskData?.id}
                      className="flex flex-col gap-3  bg-white p-3 rounded-lg  "
                    >
                      <div className="grid grid-cols-1 bg-[#F2F2F2] p-2 text-center font-semibold rounded-lg break-all ">
                        <TruncateAndProvideTooltip
                          color="#26BF94"
                          className={""}
                          text={taskData?.task_title}
                          maxWidth={300}
                          transitionType="fade-up"
                        />
                      </div>
                      <Select
                        placeholder="Pick priority"
                        value={taskData?.priority}
                        data={["Low", "Medium", "High"]}
                      />
                      <p className="line-clamp-3" title={taskData?.task_desc}>
                        {taskData?.task_desc}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex justify-center items-center">
                  <p className="text-3xl text-pink-800 font-bold">No Task</p>
                </div>
              )}
            </Scrollbars>
          </div>
        ))}
      </div>
      {/* <button onClick={() => dispatch(increment())}>Home</button> */}
    </div>
  );
};

export default Home;

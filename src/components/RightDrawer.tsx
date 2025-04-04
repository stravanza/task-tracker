"use client";
import { closeDrawer } from "@/store/slices/drawerSlice";
import { AppDispatch, RootState } from "@/store/store";
import { Button, Modal, Select, Textarea, TextInput } from "@mantine/core";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

interface FormTypes {
  heading: string;
  description: string;
  task_status: string;
  priority: string;
}

const RightDrawer = () => {
  const defaultValues = {
    heading: "",
    description: "",
    task_status: "",
    priority: "",
  };
  const dispatch = useDispatch<AppDispatch>();
  const {
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues });
  const drawerInfo = useSelector(
    (state: RootState) => state.drawer.isDrawerOpen
  );
  const createTask = (data: FormTypes) => {
    console.log("data", data);
  };
  const handleClose = () => {
    dispatch(closeDrawer());
    reset();
  };
  return (
    <Modal
      size={"lg"}
      centered
      opened={drawerInfo?.status}
      onClose={handleClose}
      closeOnClickOutside
      title="Create Task"
    >
      <form
        onSubmit={handleSubmit(createTask)}
        className="grid grid-cols-1 gap-3"
      >
        <Controller
          name="heading"
          control={control}
          rules={{
            required: "This field is required",
            validate: (value) => {
              const trimmedValue = value?.trim();
              return (
                trimmedValue !== "" || "Heading cannot be empty or just spaces"
              );
            },
            maxLength: {
              value: 100,
              message: "Heading name cannot exceed 100 characters",
            },
          }}
          render={({ field }) => (
            <TextInput
              {...field}
              size="md"
              radius={"md"}
              label="Heading"
              placeholder="Enter your task Heading"
              error={errors?.heading?.message ?? ""}
              classNames={{
                label: " mb-1 !text-base",
              }}
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          rules={{
            maxLength: {
              value: 1000,
              message: "Description name cannot exceed 1000 characters",
            },
          }}
          render={({ field }) => (
            <Textarea
              {...field}
              autosize
              minRows={4}
              maxRows={6}
              size="md"
              radius={"md"}
              label="Description"
              placeholder="Enter your task Description"
              error={errors?.description?.message ?? ""}
              classNames={{
                label: " mb-1 !text-base",
              }}
            />
          )}
        />
        <Controller
          name="task_status"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              label="Choose task status"
              value={"Not started"}
              onChange={(e) => {
                return field?.onChange(e);
              }}
              data={[
                "Paused",
                "Not started",
                "Working",
                "Needs Feedback",
                "Done",
              ]}
              classNames={{
                label: " mb-1 !text-base",
              }}
            />
          )}
        />
        <Controller
          name="priority"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              label="Pick priority"
              placeholder="Pick priority"
              data={["Low", "Medium", "High"]}
              classNames={{
                label: " mb-1 !text-base",
              }}
            />
          )}
        />
        <div className="flex items-center justify-center">
          <Button
            type="submit"
            size="md"
            radius={"md"}
            classNames={{ inner: "px-4", root: "mt-2" }}
          >
            Add
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default RightDrawer;

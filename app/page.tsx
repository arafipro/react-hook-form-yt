"use client";

import { SubmitHandler, useForm } from "react-hook-form";

type Person = {
  name: string;
  age: number;
};

export default function Home() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Person>();
  const onSubmit: SubmitHandler<Person> = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-96 border-2 mx-auto mt-4 rounded"
    >
      <h1 className="text-2xl text-center mt-2">名前入力フォーム</h1>
      <div className="m-2">
        <label>名前</label>
        <input
          {...register("name", { required: true })}
          className="rounded-md border-2 w-full p-1"
          placeholder="名前を入力してください"
        />
        {errors.name && <span>error</span>}
      </div>
      <div className="m-2">
        <label>年齢</label>
        <input
          {...register("age", { min: 0, required: true })}
          type="number"
          defaultValue={0}
          min={0}
          className="rounded-md border-2 w-full p-1"
          placeholder="年齢を入力してください"
        />
        {errors.age && <span>error</span>}
      </div>
      <div className="m-2">
        <button
          className="bg-black text-white rounded-lg w-full mt-4 p-1"
          type="submit"
        >
          送信
        </button>
      </div>
      <div className="text-center my-4">あなたの名前はnameです。</div>
    </form>
  );
}

import { useState } from "react";
import scheduleApi from "../api/schedule";
import { useDispatch } from "react-redux";
import { add } from "../store/modules/schedule";

const AddSchedule = ({
  selectedDate,
  displayStartDate,
  setDateSchedule,
  setOpenInput,
}) => {
  const dispatch = useDispatch();
  //追加予定入力欄state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [endDate, setEndDate] = useState(selectedDate || "");
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("23:59");
  const [color, setColor] = useState("#00c8ff");

  const submitNewEvent = async () => {
    const newEvent = {
      title,
      description,
      start: selectedDate + " " + startTime,
      end: endDate + " " + endTime,
      backgroundColor: color,
      borderColor: color,
    };
    try {
      const response = await scheduleApi.post(newEvent);
      setDateSchedule((prevstate) => [...prevstate, newEvent]);
      alert(`${response.title} 登録完了`);
      dispatch(add(response));
      setTitle("");
      setDescription("");
      setEndDate(selectedDate);
      setOpenInput();
    } catch (error) {
      console.error("Error posting new event:", error);
    }
  };

  return (
    <div className="mt-2">
      <form>
        <h2>新しい予定の追加</h2>
        <h3>予定の内容</h3>
        <input
          className="border-2 border-solid border-gray-400 rounded-lg"
          placeholder="予定のタイトル"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          className="border-2 border-solid border-gray-400 rounded-lg"
          placeholder="詳細"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <h2>日程の期間</h2>
        <p>
          {displayStartDate}
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          ~
        </p>

        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <input
          type="button"
          value="送信する"
          className="border-2 rounded-lg bg-gray-500 text-white ml-10"
          onClick={() => submitNewEvent()}
        />
      </form>
    </div>
  );
};

export default AddSchedule;

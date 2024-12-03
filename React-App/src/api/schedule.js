import axios from "axios";

const END_POINT = "`${process.env.REACT_APP_API_URL}/api/schedule`";

const scheduleApi = {
  async getAll() {
    const result = await axios.get(END_POINT);
    return result.data; //ｄｂ内のjsonデータすべてを取得
  },
  async post(newEvent) {
    const result = await axios.post(END_POINT, newEvent);
    return result.data; //追加したjsonデータのみ返す(引数scheduleと同じ値を返す)
  },
  async delete(id) {
    const result = await axios.delete(END_POINT + "/" + id);
    return result.data; //消したjsondeataを返す(引数scheduleと同じ値を返す)
  },
  async patch(editEvent) {
    const result = await axios.patch(END_POINT + "/" + editEvent.id, editEvent);
    return result.data; //引数scheduleと同じ値を返す
  },
};

export default scheduleApi;

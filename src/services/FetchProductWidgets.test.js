import axios from "axios";
import { FetchProductWidgets } from "./FetchProductWidgets";

jest.mock("axios");

test("FetchProductWidgets fetches data successfully", async () => {
  const data = { data: [{ id: 1, name: "Widget 1" }] };
  axios.get.mockResolvedValue(data);

  await expect(FetchProductWidgets()).resolves.toEqual(data.data);
});

test("FetchProductWidgets handles errors", async () => {
  const errorMessage = "Network Error";
  axios.get.mockRejectedValue(new Error(errorMessage));

  await expect(FetchProductWidgets()).rejects.toThrow(errorMessage);
});

import OverallStat from "../models/OverallStat.js";

export const getSales = async (req, res) => {
  try {
    const overAllStat = await OverallStat.find();

    res.status(200).json(overAllStat[0]);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

import Hotel from "../models/Hotel.js";

//create
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

//update
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

//delete
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);

    res.status(200).json("Hotel has been deleted");
  } catch (err) {
    next(err);
  }
};

//get
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

//getall
export const getHotels = async (req, res, next) => {
  try {
    const Hotels = await Hotel.find();
    res.status(200).json(Hotels);
  } catch (err) {
    next(err);
  }
};

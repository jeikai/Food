import { foodRepository } from "../repositories/index.js";

const getAllFoods = async (req, res) => {
  const limit = 20
  const {searchString} = req.query ?? ''
  let filteredFoods = await foodRepository.getAllFoods({limit, searchString})
  res.status(200).json({
    message: 'get all food',
    data: filteredFoods,
  });
}

const getFoodById = async (req, res) => {
  
}

const addNewFood = async (req, res) => { 
  const {foodName, foodImage, foodDescription, foodPrice} = req.body
  try {
    const food = await foodRepository.addNewFood( foodName, foodImage, foodDescription, foodPrice)
    res.status(200).json({
      message: 'food added successfully',
      data : food
    })
  }catch (e) {
    res.status(404).json({
      message: e.toString(),
    })
  }
}

const generateFakeFood = async (req, res) => {
  await foodRepository.generateFakeFood()
  res.status(200).json({
    message: 'food added successfully',
    data : ''
  })
}

export default {
  getAllFoods,
  getFoodById,
  addNewFood,
  generateFakeFood
}
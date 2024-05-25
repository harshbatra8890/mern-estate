import User from "../models/user.models.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';

export const test = (req, res)=>{
    res.json({
        message: 'Api route is working ',
    });
}

export const updateUser = async (req,res,next) => {
    if(req.user.id !== req.params.id){
        return next(errorHandler(401,'You can update only your account!'));
    }
  try {
        if(req.body.password){
            req.body.password = bcryptjs.hashSync(req.body.password,10);
        }

         const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set:{
                    username: req.body.username,
                    email:req.body.email,
                    password:req.body.password,
                    profilePicture:req.body.profilePicture,
                }
            },
            { new: true }
         );
         const {password, ...rest} = updatedUser._doc;
         res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

//delete user
export const deleteUser = async (req, res, next) => {
    // Checking if the user is authorized to delete the account
    if (req.user.id !== req.params.id) {
      return next(errorHandler(401, 'You can delete only your account'));
    }
  
    try {
      // Finding and deleting the user by ID
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return next(errorHandler(404, 'User not found'));
      }
      res.status(200).json('User has been deleted...');
    } catch (error) {
      next(error);
    }
  };
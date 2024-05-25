import User from '../models/user.models.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // Check if email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return next(errorHandler(400, 'Email already in use'));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json('User created successfully');
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, 'User not found'));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'Wrong credentials'));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const { password: hashedPassword, ...rest } = validUser._doc;
    res
      .cookie('access_token', token, { httpOnly: true, expires: new Date(Date.now() + 3600000) })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      const { password: hashedPassword, ...rest } = user._doc;
      return res
        .cookie('access_token', token, { httpOnly: true, expires: new Date(Date.now() + 3600000) })
        .status(200).json(rest);
    } else {
      const generatedPassword = bcryptjs.hashSync(Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8), 10);

      const newUser = new User({
        username: req.body.name.split(" ").join("").toLowerCase() + Math.floor(Math.random() * 10000).toString(),
        email: req.body.email,
        password: generatedPassword,
        profilePicture: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      const { password: hashedPassword2, ...rest } = newUser._doc;
      return res
        .cookie('access_token', token, {
          httpOnly: true,
          expires: new Date(Date.now() + 3600000),
        })
        .status(200).json(rest);
    }
  } catch (error) {
    next(error);
  }
};

export const signout = (req, res) => {
   res.clearCookie('access_token').status(200).json('Signout success!');
    

}
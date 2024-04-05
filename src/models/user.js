import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    require: [true, 'Username is required'],
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    require: [true, 'Email is required'],
  },
  password: {
    type: String,
    require: [true, 'Password is required'],
    minLength: 6,
  },
});

const User = models.User || model('User', userSchema);
export default User;

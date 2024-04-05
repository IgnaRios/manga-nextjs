import { Schema, model, models } from 'mongoose';

const mangaSchema = new Schema({
  title: {
    type: String,
    trim: true,
    unique: true,
    require: [true, 'title is required'],
  },
  description: {
    type: String,
    trim: true,
    unique: true,
    require: [true, 'Description is required'],
  },
  badge: {
    type: Array,
    require: [true, 'At least select one'],
  },
});

const Manga = models.Manga || model('Manga', mangaSchema);
export default Manga;

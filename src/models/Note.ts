import { Schema, model, Document } from "mongoose";
import { IUser } from "./User";

export interface INote extends Document {
  title: string;
  content: string;
  date: Date;
  user: IUser["_id"];
}

const NoteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default model<INote>("Note", NoteSchema);

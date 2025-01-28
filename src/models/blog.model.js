import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		coverImageUrl: {
			type: String,
			required: false,
		},
		body: {
			type: String,
			required: true,
		},

		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;

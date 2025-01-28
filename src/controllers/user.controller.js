import User from "../models/user.model.js";

const signupHandler = async (req, res) => {
	const { fullName, email, password } = req.body;
	await User.create({
		fullName,
		email,
		password,
	});

	res.redirect("/");
};

const signInHandler = async (req, res) => {
	const { email, password } = req.body;
	try {
		const token = await User.matchPasswordAndGenerateToken(email, password);

		return res.cookie("token", token).redirect("/");
	} catch (error) {
		return res.render("signin", {
			error: "Incorrect Credentials",
		});
	}
};

const logoutHandler = async (req, res) => {
	return res.clearCookie("token").redirect("/");
};

export { 
	signupHandler, 
	signInHandler, 
	logoutHandler, 
};

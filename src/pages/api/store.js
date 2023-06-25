import fs from "fs";

// it is also possible to fetch the data from here as specifying the endpoint path of an axios config as "/api/store"
const policyHandler = (req, res) => {
	if (req.method !== "GET") {
		return res.status(405).json({ message: "Only GET requests allowed" });
	}

	const policyJSON = fs.readFileSync("db.json", {
		encoding: "utf-8",
	});

	return res.status(200).json(JSON.parse(policyJSON));
};

export default policyHandler;

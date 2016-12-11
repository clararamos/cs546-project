const dbConnection = require("./config/mongoConnection");
const data = require("./data/");
const users = data.users;
const items = data.items;

dbConnection().then((db) => {
	return db.dropDatabase().then(() => {
		return dbConnection;
	}).then((db) => {
		console.log("adding user");
		return users.addUser("clararamos", "password", "Clara", "Ramos", "cramos1@stevens.edu", "1234567809", "07030");
	}).then(() => {
		console.log("adding user");
		return users.addUser("allisonramos", "allisonspw", "Allison", "Ramos", "alliramos@gmail.com", "3456789998", "07030");
	}).then(() => {
		console.log("adding item to user clararamos");
		return users.getUserByUsername("clararamos").then((thisUser) => {
			let thisProfile = thisUser.userProfile;
			return items.addItem(thisProfile, "rice cooker", ["kitchen", "appliances"], "a handy machine to cook rice without burning it", 10.00, "Cash", "07030", "/public/uploads/ricecooker.jpg", { minDays: 0.5, maxDays: 2 }, "available");
		});
	}).then(() => {
		console.log("adding item to user clararamos");
		return users.getUserByUsername("clararamos").then((thisUser) => {
			let thisProfile = thisUser.userProfile;
			return items.addItem(thisProfile, "Wii U", ["appliances", "video games", "entertainment"], "A Nintendo Wii U", 30.00, "Cash", "07030", "/public/uploads/wiiu.png", { minDays: 1, maxDays: 10 }, "available");
		});
	}).then(() => {
		console.log("adding item to user allisonramos");
		return users.getUserByUsername("allisonramos").then((thisUser) => {
			let thisProfile = thisUser.userProfile;
			return items.addItem(thisProfile, "Organic Chem Notes", ["school"], "Notes from my Orgo class", 20.00, "Cash", "07030", "/public/uploads/defaultitemIcon.png", { minDays: 1, maxDays: 21 }, "available");
		});
		}).then((db) => {
		  console.log("adding user");
		  return users.addUser("kirkviss", "password", "Kirk", "Viss", "kvisser@stevens.edu", "1234567809", "07030");
		}).then(() => {
		  console.log("adding item to user kirkviss");
		  return users.getUserByUsername("kirkviss").then((thisUser) => {
		    let thisProfile = thisUser.userProfile;
		    return items.addItem(thisProfile, "Lawn mower", ["Outdoors"], "John Deer, barely used", 10.00, "Cash", "07030", "/public/uploads/lawnmower.png", { minDays: 0.5, maxDays: 2 }, "available");
		  });
		}).then(() => {
		  return users.getUserByUsername("kirkviss").then((thisUser) => {
		    let thisProfile = thisUser.userProfile;
		    return items.addItem(thisProfile, "Xbox One", ["appliances", "video games", "entertainment"], "One year old xbox one, its sick", 40.00, "Check", "07030", "/public/uploads/xboxone.png", { minDays: 1, maxDays: 10 }, "available");
		  });
		}).then(() => {
		  return users.getUserByUsername("kirkviss").then((thisUser) => {
		    let thisProfile = thisUser.userProfile;
		    return items.addItem(thisProfile, "PS4", ["appliances", "video games", "entertainment", "Toys and Games"], "Its also sick", 50.00, "Check", "07030", "/public/uploads/PS4.png", { minDays: 1, maxDays: 10 }, "available");
		  });
		}).then(() => {
		  return users.getUserByUsername("kirkviss").then((thisUser) => {
		    let thisProfile = thisUser.userProfile;
		    return items.addItem(thisProfile, "TI-86 Graphing Calculator", ["school"], "Never used lol", 5.00, "Cash", "07030", "/public/uploads/graphingcalc.png", { minDays: 1, maxDays: 100 }, "available");
			});
	}).then(() => {
		console.log("Done seeding database.");
		db.close();
	});
}, (error) => {
    console.error(error);
});

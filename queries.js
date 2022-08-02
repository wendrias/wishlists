const mysql = require('mysql2');
const db_conn = require('./db');

// get one or all users
const get_user = (user) => {
    return "SELECT * FROM users WHERE username = '" + user + "';";
}

const get_all_users = () => {
    return "SELECT * FROM users;";
}

//get friends of user
const get_friends = (user) => {
    return "SELECT from_user FROM friend WHERE to_user= \'" + user + "\' AND status = \'friends\' UNION SELECT to_user FROM friends WHERE from_user= \'" + user + "\' AND status = \'friends\';";
}

exports.get_friends = get_friends();
console.log(get_friends("karen"));

//get wishlist of user
const get_wishlist = (user) => {
    return "SELECT * FROM list_items WHERE user = \'" + user + "\';";
}

//add to wishlist
const add_item = (item_name, url, user) => {
    return "INSERT INTO list_items (item_name,url,bought,user) VALUES ('" + item_name + "', + " + url + " +, 'no', '" + user + "');";
}

//remove from wishlist
const remove_item = (item_id) => {
    return "DELETE FROM list_items WHERE item_id = " + item_id + ";";
}

//mark as bought
const mark_bought = (item_id) => {
    return "UPDATE list_items SET bought = 'yes' WHERE item_id = " + item_id + ";";
}

//unmark as bought
const unmark_bought = (item_id) => {
    return "UPDATE list_items SET bought = 'no' WHERE item_id = " + item_id + ";";
}


//send friend request
const add_friend = (from_user, to_user) => {
    return "INSERT INTO friends (from_user, to_user, status) VALUES ('" + from_user + "', '" + to_user + "', 'pending');";
}

//get friendship id 
//possible issue: need to access this using dot form ?? does this func return int? 
const get_friendship_id = (from_user, to_user) => {
    //testing --  needs to retuen int
    console.log("SELECT friendship_id FROM friends WHERE  (from_user = '" + from_user + "' AND to_user ='" + to_user + "') OR (from_user = '" + to_user + "' AND to_user ='" + from_user + "');");
    return "SELECT friendship_id FROM friends WHERE  (from_user = '" + from_user + "' AND to_user ='" + to_user + "') OR (from_user = '" + to_user + "' AND to_user ='" + from_user + "');";
}


//get all friendship info
const get_friendship = (from_user, to_user) => {
    let id = get_friendship_id(from_user, to_user);
    return "SELECT * FROM friends WHERE friendship_id =" + id + ";";
}

//accept friend request
const accept_friend = (from_user, to_user) => {
    let id = get_friendship_id(from_user, to_user);
    return "UPDATE friends SET status = 'accepted' WHERE friendship_id = " + id + ";";
}

//remove friend or decline friend request
const remove_friend = (from_user, to_user) => {
    let id = get_friendship_id(from_user, to_user);
    return "DELETE FROM friends WHERE friendship_id = " + id + ";";
}

const test = () => {
    console.log('queries accessed!');
}

// friend request handler
// const handle_friend_req = (action, from_user, to_user) => {
//     if (action === "add") {
//         return add_friend(from_user);
//     }

//     30
//     let friendship_id = get_friendship_id(from_user, to_user);
//     if (action === "remove") {
//         return remove_friend(friendship_id);
//     } else if (action === "accept") {} else {
//         throw err;
//     }
// }


// //see recently bought
// const recently_bought = () => {
//     return "";
// }

// //see recently added to list
// const recently_added = () => {
//     return "";
// }

//idk if needed
//get item id 
// const get_item_id = (item_name, user) => {
//     return "";
// }
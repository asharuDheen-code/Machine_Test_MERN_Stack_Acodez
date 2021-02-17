const express = require("express");
const db = require("../config/dbConnection");
const collection = require("../config/collections");
const { ObjectId } = require("mongodb");
const { response } = require("express");

module.exports = {
  addUser: (user) => {
    console.log("user data @@", user);
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collection.USER_COLLECTION)
        .insertOne(user)
        .then((res) => {
          console.log("##############", res.ops[0]);
          resolve(res.ops[0]);
        });
    });
  },

  getAllUser: () => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collection.USER_COLLECTION)
        .find({})
        .toArray()
        .then((allUsers) => {
          resolve(allUsers);
        });
    });
  },

  deleteUser: (userId) => {
    console.log("user id", userId);
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collection.USER_COLLECTION)
        .removeOne({ _id: ObjectId(userId) })
        .then((res) => {
          db.get()
            .collection(collection.USER_COLLECTION)
            .find({})
            .toArray()
            .then((users) => {
              resolve(users);
            });
        });
    });
  },

  getUser: (userId) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collection.USER_COLLECTION)
        .findOne({ _id: ObjectId(userId) })
        .then((response) => {
          resolve(response);
        });
    });
  },

  updateUser: (userId, updateData) => {
    const { name, email } = updateData;
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collection.USER_COLLECTION)
        .findOneAndUpdate(
          { _id: ObjectId(userId) },
          {
            $set: {
              name: name,
              email: email,
            },
          }
        )
        .then((resData) => {
          console.log("edited user data", resData);
          db.get()
            .collection(collection.USER_COLLECTION)
            .find({})
            .toArray()
            .then((users) => {
              resolve(users);
            });
        });
    });
  },
};

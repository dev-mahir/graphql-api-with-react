import { posts, users } from "../data.js";
import { EmailType } from "./customTypes.js";


const resolvers = {
  // relational find user
  Post: {
    user(post) {
      return users.find((user) => user.id === post.user);
    },
  },

  User: {
    posts(user) {
      return posts.filter((post) => {
        if (user.posts.includes(post.id)) return true;
        return false;
      });
    },
  },

  Query: {
    users(root, args) {
      return users;
    },

    user(root, args) {
      const user = users.filter((user) => user.id === args.id);
      return user[0];
    },

    posts() {
      return posts;
    },

    post(root, args) {
      const post = posts.filter((post) => post.id === args.id);
      return post[0];
    },
  },
  Mutation: {
    addUser(
      _,
      { input: { firstName, lastName, email, phone, gender, isMarried } }
    ) {
      const user = {
        id: users.length + 1,
        firstName,
        lastName,
        email,
        phone,
        gender,
        isMarried,
      };
      users.push(user);
      return user;
    },
    updateUser(
      _,
      { id, input: { firstName, lastName, email, phone, gender, isMarried } }
    ) {
      let updateUser = null;
      users.forEach((user) => {
        if (user.id === id) {
          if (firstName) user.firstName = firstName;
          if (lastName) user.lastName = lastName;
          if (email) user.email = email;
          if (phone) user.phone = phone;
          if (gender) user.gender = gender;
          if (isMarried) user.isMarried = isMarried;
          updateUser = user;
        }
      });
      return updateUser;
    },
    addPost(_, { input: { title, description, user } }) {
      const post = {
        id: posts.length + 1,
        title,
        description,
        user,
      };
      posts.push(post);
      return post;
    },
  },
  EmailType: EmailType,
};

export default resolvers;

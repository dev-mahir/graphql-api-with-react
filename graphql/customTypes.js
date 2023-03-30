import { GraphQLScalarType } from "graphql";

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const EmailType = new GraphQLScalarType({
  name: "EmailType",
  description: "Create custom email type",
  serialize: (value) => {
    const pattern =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (pattern.test(value)) {
      return value;
    } else {
      throw new GraphQLError("Invalid email");
    }
  },
  parseValue: (value) => {
    return value.trim();
  },
  parseLiteral: (AST) => {
    if (AST.kind === King.STRING) {
      return AST.value;
    } else {
      throw new GraphQLError("Email will be must string");
    }
  },
});

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const schema = yup.object().shape({
  title: yup.string().trim().required("タイトルは必須です"),
});

export const schemaResolver = yupResolver(schema);

//loading and parsing the yaml file here

import fs from "fs";
import yaml from "js-yaml";

export const getDetailsData = (filePath) => {
  try {
    const fileContents = fs.readFileSync(filePath);
    return yaml.load(fileContents);
  } catch (error) {
    console.error("Error loading the YAML file", error);
    return null;
  }
};

import bird from "../images/Gull_portrait_ca_usa.jpg";
import moon from "../images/moon.jpg";
import space from "../images/space.jpg";
import leaf from "../images/leaf.webp";
import background from "../images/background.jpg";

export type CourseData = {
  fields: {
    title: String;
    courseImage: any;
    url: String;
    description: String;
  };
};

export default [
  {
    fields: {
      title: "Math",
      courseImage: bird,
      url: "www.bird.com",
      description:
        "this is a description of a course that doesn't exist. the course is Math based but is empty"
    }
  },
  {
    fields: {
      title: "Geography",
      courseImage: space,
      url: "www.geography.com",
      description:
        "this is a description of a course that doesn't exist. the course is Geography based but is empty"
    }
  },
  {
    fields: {
      title: "Science",
      courseImage: leaf,
      url: "www.science.com",
      description:
        "this is a description of a course that doesn't exist. the course is Science based but is empty"
    }
  },
  {
    fields: {
      title: "IT",
      courseImage: background,
      url: "www.it.com",
      description:
        "this is a description of a course that doesn't exist. the course is IT based but is empty"
    }
  },
  {
    fields: {
      title: "english",
      courseImage: moon,
      url: "www.moon.com",
      description:
        "this is a description of a course that doesn't exist. the course is English based but is empty"
    }
  }
];

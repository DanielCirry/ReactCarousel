import React, { Component } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import ReactCardCarousel from "react-card-carousel";
import Course from "../components/Course";
import courseData, { CourseData } from "../helpers/courseData";

type Carousel = {
  next: () => void;
};

interface IState {
  courses: CourseData[];
  searchString: String;
  width: number;
}

export default class List extends Component<any, IState> {
  carousel = React.createRef<Carousel>();

  state = {
    courses: [],
    searchString: "",
    width: window.innerWidth,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getCourses();
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  getCourses = () => {
    this.setState({ courses: courseData });
  };

  onSearchInputChange = (event) => {
    if (event.target.value) {
      console.log(event.target.value);
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: "" });
    }
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    return (
      <Container>
        <SearchBar
          id="sesarchInput"
          placeholder="search for courses"
          onChange={this.onSearchInputChange}
        />
        {isMobile && (
          <Grid>
            {this.state.courses.map((currentCourse) => (
              <Course course={currentCourse} />
            ))}
          </Grid>
        )}
        {!isMobile && this.state.courses && (
          <CarouselContainer>
            <Carousel
              ref={(component) => (this.carousel = component)}
              spread={"wide"}
              autoplay_speed={2500}
              disable_box_shadow={true}
            >
              {this.state.courses.map((currentCourse) => (
                <Course course={currentCourse} />
              ))}
            </Carousel>
          </CarouselContainer>
        )}
      </Container>
    );
  }
}

const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  place-content: flex-start;
  margin: 25px;
  padding: 2px;
`;

const CarouselContainer = styled.div`
  flex: 1;
  position: relative;
  align-self: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SearchBar = styled(TextField)`
  && {
    margin: 25px;
    padding: 2px;
  }
`;

const Carousel = styled(ReactCardCarousel)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 10px;
`;

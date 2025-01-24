import React from "react";
import Slider from "react-slick";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Courses() {
  const courses = [
    {
      title: "React - The Complete Guide",
      platform: "Udemy",
      date: "Enero 2023",
      certificate: "https://www.udemy.com/certificate/ejemplo",
    },
    {
      title: "JavaScript: The Advanced Concepts",
      platform: "Udemy",
      date: "Diciembre 2022",
      certificate: "https://www.udemy.com/certificate/ejemplo",
    },
    {
      title: "Responsive Web Design",
      platform: "freeCodeCamp",
      date: "Noviembre 2022",
      certificate: "https://www.freecodecamp.org/certificate/ejemplo",
    },
    {
      title: "Modern CSS Techniques",
      platform: "Frontend Masters",
      date: "Octubre 2022",
      certificate: "https://frontendmasters.com/certificate/ejemplo",
    },
    {
      title: "Full-Stack Web Development",
      platform: "freeCodeCamp",
      date: "Septiembre 2022",
      certificate: "https://www.freecodecamp.org/certificate/ejemplo",
    },
    // Agrega más cursos aquí
  ];

  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box p={4} id="courses">
      <Typography variant="h2" gutterBottom textAlign="center">
        Cursos Realizados
      </Typography>
      <Slider {...settings}>
        {courses.map((course, index) => (
          <Box key={index} p={2}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {course.platform}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {course.date}
                </Typography>
              </CardContent>
              {course.certificate && (
                <Button
                  href={course.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  variant="contained"
                  sx={{ m: 2 }}
                >
                  Ver Certificado
                </Button>
              )}
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

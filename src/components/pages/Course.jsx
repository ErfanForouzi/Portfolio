import { useEffect,useState } from "react";
import { useTheme } from "@emotion/react";
import EllipsisText from "react-ellipsis-text/lib/components/EllipsisText";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
  Slide,
  Skeleton,
} from "@mui/material";
import { grey } from "@mui/material/colors";
const Course = ({ course, loading, index }) => {
  const [loadingSkeleton,setLoadingSkeleton] = useState(false)
  useEffect(() => {
    setLoadingSkeleton(true);
    const timer = setTimeout(() => {
      setLoadingSkeleton(false);
    }, [2000]);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const theme = useTheme();
  return (
    <Grid sx={{ px: 2, mb: 2 }} key={index} xs={12} sm={6} md={6} lg={4} xl={4}>
      <Slide
        in={loading}
        direction="up"
        style={{
          transitionDelay: loading ? `${index + 3}99MS` : "0MS",
        }}
      >
        <Card
          sx={{
            maxWidth: "100%",
            boxShadow: "",
            backgroundColor:
              theme.palette.mode === "dark" ? grey[800] : grey[100],
          }}
          className={
            theme.palette.mode === "dark" ? "shadowBoxWhite" : "shadowBoxBlack"
          }
        >
          <CardActionArea>
            {loadingSkeleton ? (
              <Skeleton
                sx={{
                  backgroundColor:
                    theme.palette.mode === "dark" ? grey[800] : grey[300],
                }}
                animation="wave"
                variant="rectangular"
                width={"100%"}
                height={250}
              >
                <CardMedia
                  component="img"
                  height="250"
                  width="200"
                  image={course.image}
                  alt={course.title}
                  style={{objectFit:"contain"}}
                />
              </Skeleton>
            ) : (
              <CardMedia
                component="img"
                height="250"
                width="200"
                image={course.image}
                alt={course.title}
                style={{objectFit:"contain"}}
              />
            )}
            <CardContent>
              {loadingSkeleton ? (
                <Skeleton
                  sx={{
                    backgroundColor:
                      theme.palette.mode === "dark" ? grey[800] : grey[300],
                  }}
                  animation="wave"
                  variant="rounded"
                  width={"100%"}
                  height={"8px"}
                ></Skeleton>
              ) : (
                <Typography
                  variant="body1"
                  textAlign="left"
                  gutterBottom
                  sx={{
                    color:
                      theme.palette.mode === "dark" ? "whitesmoke" : "black",
                      height:"2rem",
                      marginBottom:"1rem"
                  }}
                >
                  {course.title.slice(0,100)}
                </Typography>
              )}

              {loadingSkeleton ? (
                <Skeleton
                  sx={{
                    backgroundColor:
                      theme.palette.mode === "dark" ? grey[800] : grey[300],
                    mt: 1,
                  }}
                  animation="wave"
                  variant="rounded"
                  width={"100%"}
                  height={"50px"}
                ></Skeleton>
              ) : (
                <Typography
                  textAlign="left"
                  sx={{
                    direction: "ltr",
                    color:
                      theme.palette.mode === "dark" ? "whitesmoke" : "black",
                  }}
                  variant="body2"
                  gutterBottom
                >
                  <EllipsisText tail={"..."} text={course.info} length={80} />
                </Typography>
              )}
            </CardContent>
          </CardActionArea>
          <CardActions>
            {loadingSkeleton ? (
              <Skeleton
                sx={{
                  backgroundColor:
                    theme.palette.mode === "dark" ? grey[800] : grey[300],
                  mt: 1,
                }}
                animation="wave"
                variant="rounded"
                width={"30%"}
                height={"20px"}
              ></Skeleton>
            ) : (
              <Button
                variant="contained"
                href={course.link}
                target="_blank"
                size="small"
                sx={{
                  color: theme.palette.mode === "dark" ? "whitesmoke" : "black",
                  textTransform: "capitalize",
                  backgroundColor:
                    theme.palette.mode === "dark" ? "black" : grey[400],
                  ":hover": {
                    backgroundColor:
                      theme.palette.mode === "dark" ? "black" : grey[300],
                  },
                }}
              >
                {theme.direction === "rtl"
                  ? "...لینک گیت هاب"
                  : "github link..."}
              </Button>
            )}
          </CardActions>
        </Card>
      </Slide>
    </Grid>
  );
};
export default Course;

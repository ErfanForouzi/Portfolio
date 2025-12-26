import { useFormik } from "formik";
import { useTheme } from "@emotion/react";
import {
  contactValidationSchema,
  contactValidationSchemaEn,
} from "../../validations/contactValidation";
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Face6Rounded,
  EmailRounded,
  SubjectRounded,
} from "@mui/icons-material";

const ContactForm = () => {
  const theme = useTheme();
  const contactInputNames = {
    fullname: "",
    message: "",
    subject: "",
    email: "",
  };
  const contactInputNamesEN = {
    fullname: "",
    message: "",
    subject: "",
    email: "",
  };
  const formik = useFormik({
    initialValues:contactInputNames,
    validationSchema:contactValidationSchema,
    onSubmit: (values) => {
    },
  });
  const formikEn = useFormik({
    initialValues:contactInputNamesEN,
    validationSchema:contactValidationSchemaEn,
    onSubmit: (values) => {
    },
  });
  return (
    <Card>
    {theme.direction ==="rtl"?(
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <CardContent>
          <Grid container spacing={2} sx={{ direction: "ltr" }}>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                color="warning"
                label="نام و نام خانوادگی"
                name="fullname"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment postion="end">
                      <Face6Rounded />
                    </InputAdornment>
                  ),
                }}
                helperText={
                  formik.touched.fullname ? formik.errors.fullname : null
                }
                value={formik.values?.fullname}
                onChange={formik.handleChange}
                error={Boolean(
                  formik.touched.fullname && formik.errors.fullname
                )}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                color="warning"
                label="آدرس ایمیل"
                name="email"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment postion="end">
                      <EmailRounded />
                    </InputAdornment>
                  ),
                }}
                helperText={formik.touched.email ? formik.errors.email : null}
                value={formik.values?.email}
                onChange={formik.handleChange}
                error={Boolean(formik.touched.email && formik.errors.email)}
              />
            </Grid>
            <Grid xs={12} md={12}>
              <TextField
                fullWidth
                size="small"
                color="warning"
                label="عنوان"
                name="subject"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment postion="end">
                      <SubjectRounded />
                    </InputAdornment>
                  ),
                }}
                helperText={
                  formik.touched.subject ? formik.errors.subject : null
                }
                value={formik.values?.subject}
                onChange={formik.handleChange}
                error={Boolean(formik.touched.subject && formik.errors.subject)}
              />
            </Grid>
            <Grid xs={12} md={12}>
              <TextField
                fullWidth
                multiline
                rows={6}
                size="small"
                color="warning"
                label="متن پیام"
                name="message"
                variant="outlined"
                helperText={
                  formik.touched.message ? formik.errors.message : null
                }
                value={formik.values?.message}
                onChange={formik.handleChange}
                error={Boolean(formik.touched.message && formik.errors.message)}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions
          sx={{
            alignItems: "end",
            flexDirection: "column",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "orange",
              color: "white",
              ":hover": {
                backgroundColor: "orange",
              },
            }}
            fullWidth
          >
          ارسال کن
          </Button>
        </CardActions>
      </form>
    ):(
      <form autoComplete="off" onSubmit={formikEn.handleSubmit}>
        <CardContent>
          <Grid container spacing={2} sx={{ direction: "ltr" }}>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                color="warning"
                label="Fullname"
                name="fullname"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment postion="end">
                      <Face6Rounded />
                    </InputAdornment>
                  ),
                }}
                helperText={
                  formikEn.touched.fullname ? formikEn.errors.fullname : null
                }
                value={formikEn.values?.fullname}
                onChange={formikEn.handleChange}
                error={Boolean(
                  formikEn.touched.fullname && formikEn.errors.fullname
                )}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                size="small"
                color="warning"
                label="Email"
                name="email"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment postion="end">
                      <EmailRounded />
                    </InputAdornment>
                  ),
                }}
                helperText={formikEn.touched.email ? formikEn.errors.email : null}
                value={formikEn.values?.email}
                onChange={formikEn.handleChange}
                error={Boolean(formikEn.touched.email && formikEn.errors.email)}
              />
            </Grid>
            <Grid xs={12} md={12}>
              <TextField
                fullWidth
                size="small"
                color="warning"
                label="Title"
                name="subject"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment postion="end">
                      <SubjectRounded />
                    </InputAdornment>
                  ),
                }}
                helperText={
                  formikEn.touched.subject ? formikEn.errors.subject : null
                }
                value={formikEn.values?.subject}
                onChange={formikEn.handleChange}
                error={Boolean(formikEn.touched.subject && formikEn.errors.subject)}
              />
            </Grid>
            <Grid xs={12} md={12}>
              <TextField
                fullWidth
                multiline
                rows={6}
                size="small"
                color="warning"
                label="Text"
                name="message"
                variant="outlined"
                helperText={
                  formikEn.touched.message ? formikEn.errors.message : null
                }
                value={formikEn.values?.message}
                onChange={formikEn.handleChange}
                error={Boolean(formikEn.touched.message && formikEn.errors.message)}
              />
            </Grid>
            
          </Grid>
        </CardContent>
        <CardActions
          sx={{
            alignItems: "end",
            flexDirection: "column",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "orange",
              color: "white",
              ":hover": {
                backgroundColor: "orange",
              },
            }}
            fullWidth
          >
          send
          </Button>
        </CardActions>
      </form>
    )}
     
    </Card>
  );
};
export default ContactForm;

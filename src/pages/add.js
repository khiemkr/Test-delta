import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addProduct } from "../redux/reducers";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const schema = yup.object().shape({
  name: yup.string().required("Vui lòng nhập dữ liệu"),
  price: yup.number().required("Vui lòng nhập dữ liệu"),
  year: yup.number().required("Vui lòng nhập dữ liệu"),
});

function Add() {
  const dispatch = useDispatch();
  let navi = useNavigate();

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    dispatch(
      addProduct({
        id: uuidv4(),
        name: data.name,
        price: data.price,
        year: data.year,
        thubnail: data.thubnail,
        description: data.description,
      })
    );
    navi("/home", { replace: true });
  };

  return (
    <>
      <h1> Thêm Sản Phẩm</h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "500px",
            height: "500px",
          }}
        >
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <InputLabel
                htmlFor="auth-login-v2-password"
                color="warning"
                sx={{ color: "#444" }}
              >
                Điện thoại
              </InputLabel>
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <OutlinedInput
                    autoFocus
                    color="warning"
                    sx={{
                      color: "#1D1929",
                      "& fieldset": { borderColor: "#444 !important" },
                      "&.Mui-focused fieldset ": {
                        borderColor: "red",
                      },
                    }}
                    value={value}
                    label="Tài khoảnn!"
                    onBlur={onBlur}
                    onChange={onChange}
                    placeholder=""
                  />
                )}
              />
              {errors.name && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {"Vui lòng nhập dữ liệu"}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <InputLabel
                htmlFor="auth-login-v2-password"
                color="warning"
                sx={{ color: "#444" }}
              >
                Giá bán
              </InputLabel>
              <Controller
                name="price"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <OutlinedInput
                    className="outline-input"
                    value={value}
                    onBlur={onBlur}
                    sx={{
                      color: "#1D1929",
                      "& fieldset": { borderColor: "#444 !important" },
                      "&.Mui-focused fieldset ": {
                        borderColor: "red",
                      },
                    }}
                    label="Mật khẩuu!"
                    color="warning"
                    onChange={onChange}
                    id="auth-login-v2-password"
                  />
                )}
              />
              {errors.price && (
                <FormHelperText sx={{ color: "error.main" }} id="">
                  {"Vui lòng nhập dữ liệu dung dịnh dạng"}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <InputLabel
                htmlFor="auth-login-v2-password"
                color="warning"
                sx={{ color: "#444" }}
              >
                Sản xuất
              </InputLabel>
              <Controller
                name="year"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <OutlinedInput
                    className="outline-input"
                    value={value}
                    onBlur={onBlur}
                    sx={{
                      color: "#1D1929",
                      "& fieldset": { borderColor: "#444 !important" },
                      "&.Mui-focused fieldset ": {
                        borderColor: "red",
                      },
                    }}
                    label="Mật khẩuu!"
                    color="warning"
                    onChange={onChange}
                    id="auth-login-v2-password"
                  />
                )}
              />
              {errors.year && (
                <FormHelperText sx={{ color: "error.main" }} id="">
                  {"Vui lòng nhập dữ liệu dung dịnh dạng"}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <InputLabel
                htmlFor="auth-login-v2-password"
                color="warning"
                sx={{ color: "#444" }}
              >
                Hình ảnh
              </InputLabel>
              <Controller
                name="thubnail"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <OutlinedInput
                    className="outline-input"
                    value={value}
                    onBlur={onBlur}
                    sx={{
                      color: "#1D1929",
                      "& fieldset": { borderColor: "#444 !important" },
                      "&.Mui-focused fieldset ": {
                        borderColor: "red",
                      },
                    }}
                    label="Mật khẩuu!"
                    color="warning"
                    onChange={onChange}
                    id="auth-login-v2-password"
                  />
                )}
              />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <InputLabel
                htmlFor="auth-login-v2-password"
                color="warning"
                sx={{ color: "#444" }}
              >
                Mô tả
              </InputLabel>
              <Controller
                name="description"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <OutlinedInput
                    className="outline-input"
                    value={value}
                    onBlur={onBlur}
                    sx={{
                      color: "#1D1929",
                      "& fieldset": { borderColor: "#444 !important" },
                      "&.Mui-focused fieldset ": {
                        borderColor: "red",
                      },
                    }}
                    label="Mật khẩuu!"
                    color="warning"
                    onChange={onChange}
                    id="auth-login-v2-password"
                  />
                )}
              />
            </FormControl>
            <Button
              fullWidth
              size="large"
              type="submit"
              color="warning"
              variant="contained"
              sx={{ mb: 7, borderRadius: "20px", marginTop: "20px" }}
            >
              Thêm sản phẩm
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default Add;

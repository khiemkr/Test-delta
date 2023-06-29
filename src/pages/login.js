import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
const schema = yup.object().shape({
  identifier: yup.string().email().required("Vui lòng nhập du lieu"),
  password: yup
    .string()
    .min(8, "Mật khẩu tối thiểu 8 kí tự")
    .required("Vui lòng nhập mật khẩu"),
});

function Login() {
  const [loading, setLoading] = useState(false);
  const navi = useNavigate();
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
    setLoading(true);
     if(data.identifier == 'admin@gmail.com' && data.password == '123456789'){
      navi("/home", { replace: true });
     }else{
       alert('Tài khoản hoặc mật khẩu không chính xác vui lòng kiểm tra lại')
       setLoading(false)
     }
  };

  return (
    <>
      <h1> Login</h1>
      <br />
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
                error={Boolean(errors.password)}
                color="warning"
                sx={{ color: "#444" }}
              >
                Email
              </InputLabel>
              <Controller
                name="identifier"
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
                    error={Boolean(errors.identifier)}
                    placeholder=""
                    type="email"
                  />
                )}
              />
              {errors.identifier && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {errors.identifier.message}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth>
              <InputLabel
                htmlFor="auth-login-v2-password"
                error={Boolean(errors.password)}
                color="warning"
                sx={{ color: "#444" }}
              >
                Mật khẩu
              </InputLabel>
              <Controller
                name="password"
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
                    error={Boolean(errors.password)}
                    type="password"
                  />
                )}
              />
              {errors.password && (
                <FormHelperText sx={{ color: "error.main" }} id="">
                  {errors.password.message}
                </FormHelperText>
              )}
            </FormControl>
            <Button
              fullWidth
              size="large"
              type="submit"
              color="warning"
              variant="contained"
              sx={{ mb: 7, borderRadius: "20px",marginTop:'20px' }}
            >
              {loading ? (
                <CircularProgress
                  sx={{ width: "30px !important", height: "30px !important" }}
                  color="error"
                />
              ) : (
                "Đăng nhập"
              )}
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default Login;

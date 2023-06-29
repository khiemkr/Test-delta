import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProduct } from "../redux/reducers";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const schema = yup.object().shape({});

function Edit() {
  const dispatch = useDispatch();
  let navi = useNavigate();
  const { id } = useParams();
  const products = useSelector((state) => state.mobiles);
  const existingProduct = products.filter((f) => f.id === id);
  const { name, price, thubnail, year, description } = existingProduct[0];
  const [uname, setUname] = useState(name);
  const [uprice, setUprice] = useState(price);
  const [uthubnail, setUthubnail] = useState(thubnail);
  const [uyear, setUyear] = useState(year);
  const [udescription, setUdescription] = useState(description);

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
    console.log(uname);
    console.log(data);
    dispatch(
      editProduct({
        id: id,
        name: uname,
        price: uprice,
        year: uyear,
        thubnail: uthubnail,
        description: udescription,
      })
    );
    navi("/home", { replace: true });
  };

  return (
    <>
      <h1> Chỉnh sửa</h1>
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
                Điện Thoại
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
                    value={uname}
                    label="Tài khoảnn!"
                    onBlur={onBlur}
                    onChange={(e) => setUname(e.target.value)}
                    placeholder=""
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
                Giá bán
              </InputLabel>
              <Controller
                name="price"
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
                    value={uprice}
                    label="Tài khoảnn!"
                    onBlur={onBlur}
                    onChange={(e) => setUprice(e.target.value)}
                    placeholder=""
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
                Sản xuất
              </InputLabel>
              <Controller
                name="year"
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
                    value={uyear}
                    label="Tài khoảnn!"
                    onBlur={onBlur}
                    onChange={(e) => setUyear(e.target.value)}
                    placeholder=""
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
                Hình ảnh
              </InputLabel>
              <Controller
                name="thubnail"
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
                    value={uthubnail}
                    label="Tài khoảnn!"
                    onBlur={onBlur}
                    onChange={(e) => setUthubnail(e.target.value)}
                    placeholder=""
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
                    autoFocus
                    color="warning"
                    sx={{
                      color: "#1D1929",
                      "& fieldset": { borderColor: "#444 !important" },
                      "&.Mui-focused fieldset ": {
                        borderColor: "red",
                      },
                    }}
                    value={udescription}
                    label="Tài khoảnn!"
                    onBlur={onBlur}
                    onChange={(e) => setUdescription(e.target.value)}
                    placeholder=""
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
              Cập Nhật
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default Edit;

import {
  Button,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
function ItemList({ display, name, img, price, id, handleDelete, year }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {display ? (
          <Box
            sx={{
              width: "800px",
              height: "200px",
              display: "flex",
              border: "1px solid #ccc",
              margin: "12px 0",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                flexBasis: "30%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  width: "150px",
                  height: "150px",
                }}
                src={img}
              />
            </Box>
            <Box>
              <Typography>Tên : {name}</Typography>
              <Typography>Giá tiền : {price}</Typography>
              <Typography>Năm sản xuất : {year}</Typography>
            </Box>
            <Box sx={{ marginLeft: "20px" }}>
              <Link to={`/edit/${id}`}>
                <Button
                  variant="outlined"
                  color="warning"
                  sx={{ marginRight: "20px" }}
                >
                  {" "}
                  Chỉnh sửa
                </Button>
              </Link>

              <Button variant="contained" color="error" onClick={handleDelete}>
                {" "}
                Xóa
              </Button>
            </Box>
          </Box>
        ) : (
          <Box>
            <Box
              sx={{
                width: "200px",
                height: "300px",
                border: "1px solid #ccc",
                padding: "10px",
                margin: "12px 0",
              }}
            >
              <img
                style={{
                  width: "150px",
                  height: "150px",
                }}
                src="https://cdn.hoanghamobile.com/i/preview/Uploads/2020/09/17/apple-iphone-11-64gb-6.1.jpg"
              />
              <Typography>Tên điện thoại : {name}</Typography>
              <Typography>Giá : {price}</Typography>
              <Typography>Năm sản xuất : {year}</Typography>
              <Box sx={{ marginTop: "10px" }}>
                <Link to={`/edit/${id}`}>
                  <Button
                    variant="outlined"
                    color="warning"
                    sx={{ marginRight: "20px" }}
                  >
                    {" "}
                    Chỉnh sửa
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleDelete}
                >
                  {" "}
                  Xóa
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}

export default ItemList;

import { Button, Box } from "@mui/material";
import { useState } from "react";
import ItemProduct from "../components/ItemProduct";
import Grid from "@mui/material/Grid";
import data from "../data/data.json";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteProduct } from "../redux/reducers";
import { useDispatch } from "react-redux";
import AlertDialog from "../components/dialog";

function Home() {
  const [listView, setListView] = useState(true);
  const dispatch = useDispatch();
  let navi = useNavigate();
  const products = useSelector((state) => state.mobiles);
  const [showDialog, setShowDialog] = useState(false);
  const [id,setId] = useState();

  const handleChange = () => {
    setListView(!listView);
  };
  const handleAddProduct = () => {
    navi("/add", { replace: true });
  };

  const handleDelete = (id) => {
    setShowDialog(true);
    setId(id)
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  const handleAccept = () => {
    dispatch(
      deleteProduct({
        id: id,
      })
    );
    setShowDialog(false);

  };

  return (
    <>
      <h1>Danh Sách Sản Phẩm</h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button variant="outlined" onClick={handleChange}>
          {!listView ? "Danh sách" : "Lưới"}
        </Button>
        <Button variant="outlined" onClick={handleAddProduct}>
          {" "}
          Thêm
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "800px" }}>
          {!listView ? (
            <Grid container spacing={2}>
              {products.map((item, index) => (
                <Grid item xs={4} key={index}>
                  <ItemProduct
                    display={listView}
                    name={item.name}
                    price={item.price}
                    img={item.thubnail}
                    id={item.id}
                    handleDelete={handleDelete}
                    year={item.year}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box>
              {products.map((item, index) => (
                <ItemProduct
                  key={index}
                  display={listView}
                  name={item.name}
                  price={item.price}
                  img={item.thubnail}
                  id={item.id}
                  handleDelete={() => handleDelete(item.id)}
                  year={item.year}
                />
              ))}
            </Box>
          )}
        </Box>
      </Box>
      <AlertDialog
        showDialog={showDialog}
        handleClose={handleClose}
        handleAccept={handleAccept}
      />
    </>
  );
}

export default Home;

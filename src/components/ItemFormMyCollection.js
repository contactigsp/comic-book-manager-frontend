import React, { useState } from "react";
import useInputStates from "./../hooks/useInputStates";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Collapse, Paper, Typography } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import { useMyCollectionContext } from "../hooks/useMyCollectionContext";
import { Container } from "@mui/system";
import useLocalStorageState from "../hooks/useLocalStorageState";
import { URL } from "./App";

export default function ItemForm() {
  const { dispatch } = useMyCollectionContext();
  const [comicBook, handleChange, reset] = useInputStates();
  const [error, setError] = useState(null);

  // console.log(comicBook);


  // =============== CREATE DATA ON FORM SUBMIT ===============

  const handleSubmit = async (e) => {
    e.preventDefault();
    // addItem(comicBook);
    const response = await fetch(`${URL}/api/v1/mycollection/`, {
      method: "POST",
      body: JSON.stringify(comicBook),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setError(null);
      dispatch({ type: "CREATE_MYCOLLECTION", payload: json.newComicBook });
    }

    reset();
  };

  const [isVisible, setIsVisible] = useLocalStorageState(
    "mycollectionFormVisibility",
    false
  );

  const handleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "left",
          pt: 2,
          background: (theme) =>
            theme.palette.mode === "light" ? grey[100] : grey[900],
        }}
      >
        <Container sx={{ mx: 0, px: 0, mb: 2, width: "100%", display: "flex" }}>
          <Typography
            variant="h5"
            sx={{ width: "auto", alignSelf: "center", ml: 1 }}
          >
            Add a new Comic Book
          </Typography>
          <Button
            variant={isVisible ? "contained" : "outlined"}
            size="small"
            sx={{ mx: 2 }}
            onClick={handleIsVisible}
          >
            {!isVisible ? "Show Form !" : "Hide Form !"}
          </Button>
        </Container>

        <Collapse in={isVisible}>
          <form
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 10,
            }}
            onSubmit={handleSubmit}
          >
            <TextField
              variant="filled"
              sx={{
                m: 1,
                border: "4",
                background: (theme) =>
                  theme.palette.mode === "light" ? blueGrey[50] : blueGrey[900],
                // ml:3
              }}
              size="small"
              margin="dense"
              type="number"
              name="number"
              required
              label="Number"
              // placeholder="Enter the number #"
              onChange={handleChange}
              value={comicBook.number}
            />
            <TextField
              variant="filled"
              sx={{
                m: 1,
                background: (theme) =>
                  theme.palette.mode === "light" ? blueGrey[50] : blueGrey[900],
                // ml:3
              }}
              size="small"
              margin="dense"
              type="text"
              name="publisher"
              required
              label="Publisher"
              onChange={handleChange}
              value={comicBook.publisher}
            />
            <TextField
              variant="filled"
              sx={{
                m: 1,
                background: (theme) =>
                  theme.palette.mode === "light" ? blueGrey[50] : blueGrey[900],
              }}
              size="small"
              margin="dense"
              type="text"
              name="title"
              required
              label="Title"
              onChange={handleChange}
              value={comicBook.title}
            />
            <TextField
              variant="filled"
              sx={{
                m: 1,
                background: (theme) =>
                  theme.palette.mode === "light" ? blueGrey[50] : blueGrey[900],
              }}
              size="small"
              margin="dense"
              type="number"
              name="quantity"
              // required
              label="Quantity"
              onChange={handleChange}
              value={comicBook.quantity}
            />
            <TextField
              variant="filled"
              sx={{
                m: 1,
                background: (theme) =>
                  theme.palette.mode === "light" ? blueGrey[50] : blueGrey[900],
              }}
              size="small"
              margin="dense"
              type="number"
              name="price"
              required
              label="Price"
              onChange={handleChange}
              value={comicBook.price}
            />
            <TextField
              variant="filled"
              sx={{
                m: 1,
                background: (theme) =>
                  theme.palette.mode === "light" ? blueGrey[50] : blueGrey[900],
              }}
              size="small"
              margin="dense"
              type="string"
              name="release_date"
              label="Release Date"
              onChange={handleChange}
              value={comicBook.release_date}
            />
            <TextField
              variant="filled"
              sx={{
                m: 1,
                background: (theme) =>
                  theme.palette.mode === "light" ? blueGrey[50] : blueGrey[900],
              }}
              size="small"
              margin="dense"
              type="string"
              name="progress"
              label="Progress"
              onChange={handleChange}
              value={comicBook.progress}
            />

            <Button
              size="large"
              variant="contained"
              type="submit"
              startIcon={<SendIcon />}
              sx={{ mx: 1, mt: 1.5, py: 0.7, px: 6 }}
            >
              Submit
            </Button>
          </form>
        </Collapse>
      </Paper>
    </>
  );
}

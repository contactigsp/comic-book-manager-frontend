import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  gridClasses,
  GridToolbarColumnsButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { grey } from "@mui/material/colors";
import { alpha, Button, Container, Paper, Typography } from "@mui/material";
import ItemFormWishlist from "./ItemFormWishlist";
import DeleteIcon from "@mui/icons-material/Delete";
import { useWishlistContext } from "../hooks/useWishlistContext";
import { Stack } from "@mui/system";

const columns = [
  { field: "number", headerName: "Number", width: 90, editable: true },
  {
    field: "publisher",
    headerName: "Publisher",
    width: 150,
    editable: true,
  },
  {
    field: "title",
    headerName: "Title",
    width: 150,
    editable: true,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 110,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    width: 160,
    editable: true,
  },
  {
    field: "release_date",
    headerName: "Release Date",
    width: 160,
    editable: true,
  },
  {
    field: "progress",
    headerName: "Progress",
    sortable: true,
    width: 160,
    editable: true,
  },
];

export default function Wishlist({ setSelectedLink, link }) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [pageSize, setPageSize] = useState(15);
  const [error, setError] = useState(null);

  useEffect(() => {
    setSelectedLink(link);
  }, []);
  const { comicBooks, dispatch } = useWishlistContext();

  // ====================================== READ DATA ======================================
  useEffect(() => {
    const fetchComicBooks = async () => {
      const response = await fetch("/api/v1/wishlist/");
      const json = await response.json(); //this is an array of objects, but if we don't parse in this fetch it is gonna come as json format.

      if (response.ok) {
        dispatch({ type: "SET_WISHLIST", payload: json });
      }
    };
    fetchComicBooks();
  }, [dispatch]);

  // ===================================== DELETE DATA =====================================

  const handleDelete = async () => {
    selectedRows.map(async (row) => {
      const response = await fetch(`/api/v1/wishlist/${row._id}`, {
        method: "DELETE",
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "DELETE_WISHLIST", payload: json });
      }
    });
  };

  // ======================================= UPDATE DATA =====================================

  const handleOnCellEditCommit = async (updatedData) => {
    const body = {};
    const values = Object.values(updatedData);

    body[values[1]] = values[2];

    const response = await fetch(`/api/v1/wishlist/${updatedData.id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.log("Something went wrong");
    }
    if (response.ok) {
      const fetchComicBooks = async () => {
        const responseReadBack = await fetch("/api/v1/wishlist/");
        const json = await responseReadBack.json(); //this is an array of objects, but if we don't parse in this fetch it is gonna come as json format.

        if (responseReadBack.ok) {
          dispatch({ type: "SET_WISHLIST", payload: json });
        }
      };
      fetchComicBooks();
    }
  };

  // ======================================= DUPLICATE =======================================
  const [duplicateSelectedRows, setDuplicateSelectedRows] = useState();
  useEffect(() => {
    const getSelectedRowsNoId = () => {
      const newSelectedRows = selectedRows.map((row) => {
        const newRow = { ...row };

        delete newRow._id;
        delete newRow.__v;
        delete newRow.createdAt;
        delete newRow.updatedAt;

        return newRow;
      });

      return newSelectedRows;
    };

    setDuplicateSelectedRows(getSelectedRowsNoId());
  }, [selectedRows]);

  const handleDuplicateSelectedRows = async () => {
    duplicateSelectedRows.map(async (row) => {
      const response = await fetch("/api/v1/wishlist/", {
        method: "POST",
        body: JSON.stringify(row),
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
        dispatch({ type: "CREATE_WISHLIST", payload: json.newComicBook });
      }
    });
  };

  // ===================================== CUSTOM TOOL BAR =====================================

  function CustomToolBar() {
    return (
      <>
        {selectedRows.length > 0 ? (
          <Box
            sx={{
              p: 0.5,
              pb: 0,
              bgcolor: (theme) =>
                alpha(
                  theme.palette.primary.main,
                  theme.palette.action.activatedOpacity
                ),
              display: "flex",
            }}
          >
            <Container sx={{ display: "flex", alignItems: "center" }}>
              <Typography>
                {selectedRows.length > 1
                  ? `${selectedRows.length} rows selected`
                  : `${selectedRows.length} row selected`}
              </Typography>
            </Container>
            <Container sx={{ display: "flex", justifyContent: "right" }}>
              <Stack direction="row" spacing={2} sx={{ m: 0.6 }}>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={handleDuplicateSelectedRows}
                >
                  Duplicate
                </Button>

                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </Stack>
            </Container>
          </Box>
        ) : (
          <Box
            sx={{
              p: 0.5,
              display: "flex",
            }}
          >
            <Container sx={{ display: "flex", alignItems: "center" }}>
              <GridToolbarColumnsButton />
            </Container>
            <Container sx={{ display: "flex", justifyContent: "right" }}>
              <GridToolbarQuickFilter />
            </Container>
          </Box>
        )}
      </>
    );
  }

  // ========================================== RETURN =========================================
  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <ItemFormWishlist />
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          my: 2,
          paddingTop: 0,
          "&.MuiPaper-root": {
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? grey[100] : grey[900],
          },
        }}
      >
        <Typography variant="h4" sx={{ my: 1 }}>
          Wishlist
        </Typography>
      </Paper>
      <DataGrid
        rows={comicBooks ? comicBooks : [{ _id: 1 }]}
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[15, 25, 45]}
        onCellEditCommit={handleOnCellEditCommit}
        checkboxSelection
        disableSelectionOnClick
        disableColumnFilter
        disableExport
        disableDensitySelector
        hideFooterSelectedRowCount
        components={{ Toolbar: CustomToolBar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        onSelectionModelChange={(ids) => {
          const selectedIDs = new Set(ids);
          const selectedRowData = comicBooks.filter((row) =>
            selectedIDs.has(row._id)
          );
          setSelectedRows(selectedRowData);
        }}
        sx={{
          [`& .${gridClasses.row}`]: {
            bgcolor: (theme) =>
              theme.palette.mode === "light" ? grey[100] : grey[900],
          },
        }}
      />
    </Box>
  );
}

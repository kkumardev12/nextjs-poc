"use client";
import * as React from "react";
import PropTypes from "prop-types";
// import CloseIcon from "@mui/icons-material/Close";
import {
    Button,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Dialog,
    TextField,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Slide,
    Box,
} from "@mui/material";
import { parentPort } from "node:worker_threads";
import { useEffect, useState } from "react";

// Function to create row data
function createData(
    Name: string,
    Course: string,
    EnrollmentNumber: Number,
    FormNumber: Number,
    RegistrationId: Number,
) {
    return {
        id: Name.toLowerCase().replace(/\s+/g, "-"),
        Name,
        Course,
        EnrollmentNumber,
        FormNumber,
        RegistrationId,
    };
}

// Initial Sample data
const initialRows = [
    createData("Shruti Gupta", "BCA", 69999999999, 24, 489),
    // createData("Ice cream sandwich", "", 9.0, 37, 4.3),
    // createData("Eclair", "", 16.0, 24, 6.0),
    // createData("Cupcake", "", 3.7, 67, 4.3),
    // createData("Gingerbread", "", 16.0, 49, 3.9),
];

// Dialog Transition
const Transition = React.forwardRef(function Transition(
    props: any,
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function User() {
    const [open, setOpen] = React.useState(false);
    const [rows, setRows] = React.useState(initialRows);
    const [data, setData] = useState(null);
    const [newDessert, setNewDessert] = React.useState({
        Name: "",
        Course: "",
        EnrollmentNumber: "",
        FormNumber: "",
        RegistrationId: "",
    });

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        fetch("/api/user") // Replace with your API endpoint
            .then((res) => res.json())
            .then((data) => {
                console.log("get user data", data);
                setData(data)
            })
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewDessert({ ...newDessert, [e.target.name]: e.target.value });
    };

    const handleAddDessert = () => {
        if (newDessert.Name && newDessert.Course) {
            setRows([
                ...rows,
                createData(
                    newDessert.Name,
                    newDessert.Course,
                    parseFloat(newDessert.EnrollmentNumber),
                    parseFloat(newDessert.FormNumber),
                    parseFloat(newDessert.RegistrationId)
                ),
            ]);
            setNewDessert({ Name: "", Course: "", EnrollmentNumber: "", FormNumber: "", RegistrationId: "" });
            handleClose();
        }
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Course
            </Button>

            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar sx={{ position: "relative" }}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            {/* <CloseIcon /> */} X
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Add New course
                        </Typography>
                        <Button color="inherit" onClick={handleAddDessert}>
                            Submit
                        </Button>
                    </Toolbar>
                </AppBar>

                <Box sx={{ p: 3 }}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="Name"
                        value={newDessert.Name}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Course"
                        name="Course"
                        type="String"
                        value={newDessert.Course}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="EnrollmentNumber"
                        name="EnrollmentNumber"
                        type="number"
                        value={newDessert.EnrollmentNumber}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="FormNumber"
                        name="FormNumber"
                        type="number"
                        value={newDessert.FormNumber}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="RegistrationId"
                        name="RegistrationId"
                        type="number"
                        value={newDessert.RegistrationId}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                    />
                </Box>
            </Dialog>

            <TableContainer component={Paper} sx={{ mt: 3 }}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name </TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Password</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row) => (
                            <TableRow key={row._id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.password}</TableCell>
                                <TableCell align="right"><button>Edit</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

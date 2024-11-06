import React, { useState, useEffect } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import HeaderHome from '../../components/HeaderHome';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getAllLandCases, updateLandCase } from '../../Utils/API/landCaseAPI'; // Import the landCase API
import { Tooltip } from 'react-tooltip';
import Navbar from '../../components/Navbar';

const theme = createTheme({
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
      },
    },
  },
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  bgcolor: 'black',
  boxShadow: 24,
  p: 4,
};

function Cases() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cases, setCases] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  // Fetch all cases from API
  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await getAllLandCases();
        setCases(response.data); // Assuming response contains case data
      } catch (error) {
        console.error('Error fetching cases:', error);
      }
    };
    fetchCases();
  }, []);
  console.log(cases)
  // Filter cases based on search term
  const filteredCases = cases.filter(
    (landCase) =>
      landCase.caseStatus ||
      landCase.caseDate ||
      landCase.caseDescription
  );

  const handleOpen = (landCase) => {
    setSelectedCase(landCase);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCase(null);
  };

  // Update case status from Pending to Resolved
  const handleStatusUpdate = async (landCase) => {
    try {
      const updatedCase = { ...landCase, status: caseStatus };
      const response = await updateLandCase(landCase.id, updatedCase);
      if (response) {
        setCases((prevCases) =>
          prevCases.map((c) => (c.id === landCase.id ? updatedCase : c))
        );
        alert('Case status updated to Resolved');
      }
    } catch (error) {
      console.error('Error updating case status:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="h-screen">
        <Navbar />
        <div
          className="w-screen h-96 rounded flex flex-col items-center justify-center opacity-90"
          style={{
            backgroundImage: `url("https://www.ncsc.org/__data/assets/image/0035/65996/varieties/bannerLrg.png?v=0.1.0")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className="text-white text-5xl pb-4 font-bold drop-shadow-xl mb-8">
            Pending and Resolved Cases
          </div>
          <div className="w-screen flex flex-row items-center justify-center">
            <input
              type="text"
              className="h-10 w-1/3 rounded-l-xl border-2 shadow-xl p-4"
              placeholder="Search for cases by Location, Owner Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="h-10 w-10 flex justify-center items-center bg-slate-800 rounded-r-xl cursor-pointer">
              <IoSearchSharp className="text-white" />
            </div>
          </div>
        </div>

        <div className="my-10">
          {filteredCases.map((landCase, index) => (
            <li
              key={index}
              className="flex flex-row m-10 rounded-3xl border-2 h-2/6 searchable-item overflow-hidden"
            >
              <div className="w-1/4 rounded-l-3xl">
                <img
                  src={landCase.imageUrl}
                  alt="no image"
                  className="h-full w-full object-cover rounded-l-3xl"
                />
              </div>
              <div className="h-full w-full flex flex-col backdrop-brightness-90 p-6">
                <div className="w-3/4">
                  <p className="text-2xl font-bold">
                    {landCase.owner} : {landCase.caseStatus }
                  </p>
                  <p>Case Date: {landCase.caseDate}</p>
                  <p>Description: {landCase.caseDescription}</p>
                </div>
                <div className="h-full flex justify-between items-center">

                  <div className="flex flex-row space-x-6">
                    <Button
                      onClick={() => handleOpen(landCase)}
                      className="bg-slate-800 text-white p-2 rounded-xl"
                    >
                      Details
                    </Button>
                    {landCase.status === 'Pending' && (
                      <Button
                        onClick={() => handleStatusUpdate(landCase)}
                        className="bg-green-600 text-white p-2 rounded-xl"
                      >
                        Mark as Resolved
                      </Button>
                    )}
                    <Button
                      className="bg-slate-800 text-white p-2 rounded-xl"
                      onClick={() => {
                        navigator.clipboard.writeText(landCase.phone);
                        setShowTooltip(true);
                        setTimeout(() => setShowTooltip(false), 2000); // Hide tooltip after 2 seconds
                      }}
                    >
                      Contact
                    </Button>
                  </div>
                  {showTooltip && (
                    <Tooltip
                      id="my-tooltip-1"
                      variant="info"
                      content="Phone Number copied!"
                    />
                  )}
                </div>
              </div>
            </li>
          ))}
        </div>

        {selectedCase && (
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <Typography color={'white'} variant="h4">
                {selectedCase.owner} : {selectedCase.name}
              </Typography>
              <Typography color={'white'} sx={{ mb: 2 }}>
                {selectedCase.type}, {selectedCase.caseDescription}
              </Typography>
              <div className="flex flex-row gap-4">
                {/* Add images or additional content here */}
                <img
                  src={selectedCase.imageUrl}
                  alt="land"
                  style={{ height: 200 }}
                />
              </div>
            </Box>
          </Modal>
        )}
      </div>
    </ThemeProvider>
  );
}

export default Cases;

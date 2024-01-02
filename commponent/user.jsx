// // import React, { useState, useEffect } from "react";
// // import ServiceStore from "../AppStore/serviceStore";
// // import ViewDetails from "./ViewDetails";
// // import { observer } from "mobx-react";
// // import AddMeeting from "./addMeeting";
// // import BusinessStore from "../AppStore/businessStore";
// // import { Card } from "@mui/material"
// // const User =observer (() => {
// //   const [service, setService] = useState({});
// //   const [showForm, setShowForm] = useState(false);
// //   useEffect(() => {
// //     BusinessStore.initBusinessData();
// //     ServiceStore.initServices();
// //   }, []);

// //   const handleClick = (service) => {
// //     setService(service);
// //     setShowForm(true);
// //   };

// //   return (<>
// //      <h1>Wellcome </h1>
// //      <Card bgcolor="green"><ViewDetails data={BusinessStore.business}  /></Card>
    
// //     <div>
// //       {ServiceStore.servicesList.map((s) => (
// //         <button
// //           key={s.id}
// //           onClick={() => handleClick(s)}
// //         >
// //           <ViewDetails key={s.id} data={{name:s.name, description:s.description}}></ViewDetails>
// //         </button>
// //       ))}
// //       {showForm && (
// //         <AddMeeting serviceType={service.description} />
// //       )}
// //     </div>
 
// //     </>
// //   );
// // });

// // export default User;
// import React, { useState, useEffect } from "react";
// import ServiceStore from "../AppStore/serviceStore";
// import ViewDetails from "./ViewDetails";
// import { observer } from "mobx-react";
// import AddMeeting from "./addMeeting";
// import BusinessStore from "../AppStore/businessStore";
// import { Card } from "@mui/material";
// import { green, pink } from '@mui/material/colors';


// const User = observer(() => {
//   const [service, setService] = useState({});
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     BusinessStore.initBusinessData();
//     ServiceStore.initServices();
//   }, []);

//   const handleClick = (service) => {
//     setService(service);
//     setShowForm(true);
//   };

//   return (
//     <>
//       <h1>Welcome </h1>
//       <Card sx={{ bgcolor: pink[500] }}  >
//         <ViewDetails data={BusinessStore.business} />
//       </Card>

//       <div>
//         {ServiceStore.servicesList.map((s) => (
//           <button key={s.id} onClick={() => handleClick(s)}>
//             <ViewDetails
//               key={s.id}
//               data={{ name: s.name, description: s.description }}
//             ></ViewDetails>
//           </button>
//         ))}
//         {showForm && <AddMeeting serviceType={service.description} />}
//       </div>
//     </>
//   );
// });

// export default User;
import React, { useState, useEffect } from "react";
import ServiceStore from "../AppStore/serviceStore";
import ViewDetails from "./ViewDetails";
import { observer } from "mobx-react";
import AddMeeting from "./addMeeting";
import BusinessStore from "../AppStore/businessStore";
import { Card, CardContent, Typography, Button } from "@mui/material";
import styled from "styled-components";

const StyledCard = styled(Card)`
  background-color: green;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const User = observer(() => {
  const [service, setService] = useState({});
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    BusinessStore.initBusinessData();
    ServiceStore.initServices();
  }, []);

  const handleClick = (service) => {
    setService(service);
    setShowForm(true);
  };

  return (
    <>
      <h1>Welcome </h1>

      {/* Business Card */}
      <StyledCard elevation={3}>
        <CardContent>
          <Typography variant="h5" color="white">
            Business Details
          </Typography>
          <ViewDetails data={BusinessStore.business} />
        </CardContent>
      </StyledCard>

      {/* Service Buttons */}
      <div>
        {ServiceStore.servicesList.map((s) => (
          <Button
            key={s.id}
            variant="contained"
            onClick={() => handleClick(s)}
            sx={{ margin: 1 }}
          >
            <ViewDetails
              key={s.id}
              data={{ name: s.name, description: s.description }}
            />
          </Button>
        ))}
      </div>

      {/* Add Meeting Form */}
      {showForm && <AddMeeting serviceType={service.description} />}
    </>
  );
});

export default User;

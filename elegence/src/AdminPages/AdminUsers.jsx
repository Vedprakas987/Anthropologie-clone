import { Box, Text, } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Sidebar from "../components/AdminComponents/Sidebar";

  const getTopProducts = async () => {
    let res = await axios.get("http://localhost:8080/users");
    let data = await res.data;
    return data;
  };
  const Users=()=> {
    
    const [users, setUsers] = useState([]);
    useEffect(() => {
      getTopProducts().then((r) => {
        setUsers(r);
        console.log(r)
      });
    }, []);
  
  return (
    <>
    <Sidebar />
    <Box w="100%" bg={"#A1A2A0"}>
    <Box >
      <Box m="auto" bg="#BC72A7" border="2px solid whitesmoke">
        <Text align="center" ml={"50px"} fontSize="40px" fontFamily={"Goudy Bookletter 1911"}>
          Users
        </Text>
      </Box>
      {users.map((item) => (
        
        <Box p={'8'} key={item.id} justifyContent="center">
         
          <Box >
          <Text >User ID:-{item.id}</Text>
          <Text >Name:-{item.name}</Text>
          <Text >Email:-{item.email}</Text></Box>
          <Text >Password:-{item.password}</Text>
          <Text >Contact:-{item.contact}</Text>
          <Text >Address:-{item.address}</Text>
          </Box>
          ))}
          </Box>
         </Box> 
           </>
  );
};

export default Users;

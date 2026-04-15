import React, { useEffect, useState, useContext } from 'react'

// INTERNAL IMPORT
import {
  Table,
  Form,
  Services,
  Profile,
  CompleteShipment,
  GetShipment,
  StartShipment
} from "../Components/index";

import { TrackingContext } from '../Context/Tracking';
// import { Table } from '../Components/Table';


TrackingContext
export default function index() {
  const{
    currentUser,
    createShipment,
    getAllShipment,
    completeShipment,
    getShipment,
    startShipment,
    getShipmentCount,
  } = useContext(TrackingContext);

  // STATE VARIABLE
  const [createShipmentModel, setCreateShipmentModel] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [startModel, setStartModel] = useState(false);
  const [completeModel, setCompleteModel] = useState(false);
  const [getModel, setGetModel] = useState(false);

  // DATA STATE VARIABLES
  const [allShipmentData, setAllShipmentData] = useState();

  useEffect(()=>{
    const getAllCampaignsData = getAllShipment();

    return async ()=>{
      const allData = await getAllCampaignsData;
      setAllShipmentData(allData);
    }
  }, []);

  return (
    <>
      <Services
        setOpenProfile = {setOpenProfile}
        setCompleteModal = {setCompleteModel}
        setGetModal = {setGetModel}
        setStartModal = {setStartModel}
      />

      <Table
        setCreateShipmentModal = {setCreateShipmentModel}
        allShipmentData = {allShipmentData}
      />

      <Form
        createShipmentModal = {createShipmentModel}
        createShipment = {createShipment}
        setCreateShipmentModal = {setCreateShipmentModel}
      />

      <Profile
        openProfile = {openProfile}
        setOpenProfile = {setOpenProfile}
        currentUser = {currentUser}
        getShipmentCount = {getShipmentCount}
      />

      <CompleteShipment
        completeModel={completeModel}
        setCompleteModal = {setCompleteModel}
        completeShipment = {completeShipment}
      />

      <GetShipment
        getModel = {getModel}
        setGetModal = {setGetModel}
        getShipment = {getShipment}
      />

      <StartShipment
        startModel = {startModel}
        setStartModal = {setStartModel}
        startShipment = {startShipment}
      />

    </>
  )
}

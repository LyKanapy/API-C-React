import React, { Fragment, useEffect, useState } from "react";
import {

  Container

} from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import agent from "../api/agent";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import ActivityStore from "../stores/activityStore";
import LoadingComponent from "./loadingComponent";

function App() {
  const {activityStore} = useStore();
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => { 
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) return <LoadingComponent content = 'Loading App'/>

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard/>
      </Container>
    </Fragment>
  );
}

export default observer(App);

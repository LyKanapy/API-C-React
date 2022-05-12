import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import {
  Header,
  HeaderContent,
  List,
  ListContent,
  ListItem,
} from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((res) => {
      console.log(res);
      setActivities(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Header as="h2" icon="users" content="API"></Header>
      <List>
        {activities.map((activity: any) => (
          <ListItem key={activity.id}>{activity.title}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;

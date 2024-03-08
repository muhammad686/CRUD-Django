import React, { useEffect, useState } from "react";
import "../styles.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const DetailsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000"); // Replace with your actual API endpoint
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="form-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.city}</td>
                <td>{user.country}</td>
                <td>
                  <form
                    action={`/update/${user.id}`}
                    method="get"
                    style={{ display: "inline" }}
                  >
                    <button type="submit" className="btn btn-success btn-sm">
                      Edit
                    </button>
                  </form>
                  <form
                    action={`/delete/${user.id}`}
                    method="post"
                    style={{ display: "inline" }}
                  >
                    <input type="hidden" name="_method" value="delete" />
                    <button type="submit" className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          {/* Additional row for adding a new user */}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <a href="/add" className="btn btn-primary">
                Add user
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailsList;
